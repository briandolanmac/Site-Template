import type { MetadataRoute } from "next";
import seoData from "./data/seo.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = seoData.siteUrl;
  const now = new Date();

  const pages = Object.keys(seoData.pages);

  return pages.map((path) => {
    let changeFrequency: "daily" | "weekly" | "monthly" | "yearly" = "monthly";
    let priority = 0.7;

    if (path === "/") {
      changeFrequency = "weekly";
      priority = 1.0;
    } else if (["/solar-panels", "/battery-storage", "/ev-chargers", "/commercial-solar"].includes(path)) {
      changeFrequency = "weekly";
      priority = 0.9;
    } else if (["/grants", "/finance", "/funding-options", "/quote-builder", "/contact"].includes(path)) {
      changeFrequency = "monthly";
      priority = 0.8;
    } else if (["/privacy-policy", "/cookies"].includes(path)) {
      changeFrequency = "yearly";
      priority = 0.3;
    }

    return {
      url: `${baseUrl}${path === "/" ? "" : path}`,
      lastModified: now,
      changeFrequency,
      priority,
    };
  });
}
