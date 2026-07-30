import { NextResponse } from "next/server";
import { z } from "zod";
import { siteConfig } from "@/data/site-config";

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  subject: z.string().min(3).max(150),
  message: z.string().min(10).max(5000),
});

// Simple in-memory rate limiter (per server instance). For production at
// scale, replace with a durable store like Upstash Redis.
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const WINDOW_MS = 10 * 60 * 1000;

function isRateLimited(ip: string) {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count += 1;
  return false;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for") ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.flatten() },
      { status: 422 }
    );
  }

  const { name, email, subject, message } = parsed.data;
  const resendApiKey = process.env.RESEND_API_KEY;

  // If an email provider key is configured, send a real notification email.
  // Otherwise, log the submission server-side so it isn't silently dropped
  // during local development or before the key is configured.
  if (resendApiKey) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: `Portfolio Contact <onboarding@resend.dev>`,
          to: siteConfig.email,
          reply_to: email,
          subject: `[Portfolio] ${subject}`,
          text: `From: ${name} <${email}>\n\n${message}`,
        }),
      });

      if (!res.ok) {
        const errText = await res.text();
        console.error("Resend API error:", errText);
        return NextResponse.json(
          { error: "Failed to send message" },
          { status: 502 }
        );
      }
    } catch (err) {
      console.error("Email send error:", err);
      return NextResponse.json(
        { error: "Failed to send message" },
        { status: 502 }
      );
    }
  } else {
    console.info("New contact form submission (no RESEND_API_KEY set):", {
      name,
      email,
      subject,
      message,
    });
  }

  return NextResponse.json({ success: true });
}
