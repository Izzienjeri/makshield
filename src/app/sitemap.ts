import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

const routes = ["", "/about", "/services", "/why-mak-shield", "/contact", "/quote"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route, index) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : route === "/services" ? 0.9 : 0.8,
  }));
}
