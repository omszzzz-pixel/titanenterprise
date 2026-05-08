import type { MetadataRoute } from "next";

const SITE_URL = "https://titan-enterprise.kr";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      // Naver crawler
      {
        userAgent: "Yeti",
        allow: "/",
      },
      // Daum/Kakao crawler
      {
        userAgent: "Daum",
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
