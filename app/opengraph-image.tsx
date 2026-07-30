import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site-config";

export const runtime = "edge";
export const alt = `${siteConfig.name} — ${siteConfig.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #0a0a0a 0%, #141020 50%, #0a0a0a 100%)",
          color: "#fafafa",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#fafafa",
              color: "#0a0a0a",
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            {siteConfig.initials}
          </div>
          <div style={{ fontSize: 28, color: "#a1a1aa", display: "flex" }}>
            {siteConfig.url.replace("https://", "")}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 700, lineHeight: 1.1 }}>
          {siteConfig.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 36,
            marginTop: 16,
            background: "linear-gradient(90deg, #fafafa 0%, #8b5cf6 100%)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {siteConfig.title}
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#a1a1aa", marginTop: 28, maxWidth: 900 }}>
          {siteConfig.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
