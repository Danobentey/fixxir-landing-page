import { ImageResponse } from "next/og";
import { business } from "@/lib/site";

export const alt = "Fixxir — honest device repair in Ikeja, Lagos";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#04060b",
          padding: 72,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -260,
            left: 300,
            width: 700,
            height: 700,
            borderRadius: 9999,
            background: "#0b5fd0",
            opacity: 0.45,
            filter: "blur(120px)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 60,
              height: 60,
              borderRadius: 16,
              background: "#1177f0",
            }}
          >
            <svg width="26" height="42" viewBox="0 0 24 40" fill="none">
              <path d="M15.6 0 4.2 21.4h6.1L8.4 40 19.8 16.2h-6.3L15.6 0Z" fill="white" />
            </svg>
          </div>
          <div
            style={{
              fontSize: 40,
              fontWeight: 700,
              color: "white",
              letterSpacing: -1,
            }}
          >
            Fixxir
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 82,
              fontWeight: 700,
              color: "white",
              lineHeight: 1.08,
              letterSpacing: -3,
            }}
          >
            <div style={{ display: "flex" }}>Repairs you don&apos;t have to</div>
            <div style={{ display: "flex", gap: 20 }}>
              <span style={{ color: "#4d9dff" }}>worry</span>
              <span>about.</span>
            </div>
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 30,
              color: "rgba(255,255,255,0.55)",
              maxWidth: 900,
            }}
          >
            Phones, laptops and board-level repairs. Quoted before we start.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 28,
            fontSize: 24,
            color: "rgba(255,255,255,0.45)",
          }}
        >
          <span>{business.addressDisplay}</span>
          <span style={{ color: "#1177f0" }}>·</span>
          <span>{business.phoneDisplay}</span>
        </div>
      </div>
    ),
    size,
  );
}
