import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site-config";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          color: "#fafafa",
          fontSize: 72,
          fontWeight: 700,
          borderRadius: 36,
        }}
      >
        {siteConfig.initials}
      </div>
    ),
    { ...size }
  );
}
