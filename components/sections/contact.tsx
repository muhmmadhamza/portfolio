"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Loader2, Mail, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site-config";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(3, "Please add a subject"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function Contact() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setStatus("idle");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great together."
          description="Have a project in mind or just want to say hi? My inbox is always open."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="glass flex flex-col gap-5 rounded-3xl p-7">
              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Mail className="size-5" />
                </span>
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <MapPin className="size-5" />
                </span>
                <div>
                  <p className="text-sm font-medium">Location</p>
                  <p className="text-sm text-muted-foreground">{siteConfig.location}</p>
                </div>
              </div>
              <p className="mt-2 border-t border-border pt-5 text-sm leading-relaxed text-muted-foreground">
                I typically respond within 24 hours. For project inquiries,
                please include a brief description of scope, timeline, and
                budget so I can give you a useful first response.
              </p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit(onSubmit)}
            className="glass flex flex-col gap-5 rounded-3xl p-7 lg:col-span-3"
            noValidate
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Jane Doe" {...register("name")} />
                {errors.name && (
                  <p className="text-xs text-destructive">{errors.name.message}</p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="jane@company.com" {...register("email")} />
                {errors.email && (
                  <p className="text-xs text-destructive">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="Project inquiry" {...register("subject")} />
              {errors.subject && (
                <p className="text-xs text-destructive">{errors.subject.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Tell me a bit about your project..."
                {...register("message")}
              />
              {errors.message && (
                <p className="text-xs text-destructive">{errors.message.message}</p>
              )}
            </div>

            <Button type="submit" variant="accent" size="lg" disabled={isSubmitting} className="self-start">
              {isSubmitting ? (
                <>
                  <Loader2 className="size-4 animate-spin" /> Sending...
                </>
              ) : (
                <>
                  Send message <Send className="size-4" />
                </>
              )}
            </Button>

            {status === "success" && (
              <p className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
                <CheckCircle2 className="size-4" /> Message sent — I&apos;ll get back to you soon!
              </p>
            )}
            {status === "error" && (
              <p className="flex items-center gap-2 text-sm text-destructive">
                <AlertCircle className="size-4" /> Something went wrong. Please email me directly.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
