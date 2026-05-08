import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Titan-Enterprise · 타이탄엔터프라이즈",
    short_name: "Titan-Enterprise",
    description: "Bridging Financial and Technology — systematic trading & financial technology",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      { src: "/logo/mark.png", sizes: "192x192", type: "image/png" },
      { src: "/logo/mark.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
