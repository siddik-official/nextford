import type { MetadataRoute } from "next";

const BASE_URL = "https://nexfordit.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about-us",
    "/services",
    "/why-us",
    "/contact",
    "/privacy-policy",
    "/terms-of-service",
  ];

  return routes.map((route, index) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : 0.8,
  }));
}
