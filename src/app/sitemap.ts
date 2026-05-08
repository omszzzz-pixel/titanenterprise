import type { MetadataRoute } from "next";

const SITE_URL = "https://titan-enterprise.kr";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: { path: string; priority: number; changeFrequency: "monthly" | "yearly" | "weekly" }[] = [
    { path: "/en", priority: 1.0, changeFrequency: "monthly" },
    { path: "/en/about", priority: 0.9, changeFrequency: "monthly" },
    { path: "/en/capabilities", priority: 0.9, changeFrequency: "monthly" },
    { path: "/en/capabilities/trading", priority: 0.8, changeFrequency: "monthly" },
    { path: "/en/capabilities/education", priority: 0.8, changeFrequency: "monthly" },
    { path: "/en/capabilities/platform", priority: 0.8, changeFrequency: "monthly" },
    { path: "/en/contact", priority: 0.7, changeFrequency: "yearly" },
  ];

  return routes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
