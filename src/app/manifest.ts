import type { MetadataRoute } from "next";
import { business } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${business.name} — Device Repair`,
    short_name: business.name,
    description: business.tagline,
    start_url: "/",
    display: "standalone",
    background_color: "#04060b",
    theme_color: "#04060b",
    icons: [
      { src: "/fixxir-mark.png", sizes: "256x256", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
