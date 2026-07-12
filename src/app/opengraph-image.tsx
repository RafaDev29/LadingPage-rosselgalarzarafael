import { ImageResponse } from "next/og";
import { profile } from "@/lib/profile";

export const alt = `${profile.name} - ${profile.role}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";
export const dynamic = "force-static";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          background:
            "radial-gradient(circle at 75% 25%, #2e2354 0%, #050505 55%), #050505",
          color: "#eef1f8",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 4,
            color: "#d69a45",
            marginBottom: 24,
          }}
        >
          {profile.alias.toUpperCase()} / WEB29.UK
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 700,
            color: "#eef1f8",
            marginBottom: 20,
          }}
        >
          {profile.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 36,
            color: "#a78bfa",
          }}
        >
          {profile.role} - {profile.mainRoles.join(" / ")}
        </div>
      </div>
    ),
    { ...size }
  );
}
