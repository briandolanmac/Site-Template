import type { MetadataRoute } from "next";
import seoData from "./data/seo.json";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/api/"],
      },
    ],
    sitemap: `${seoData.siteUrl}/sitemap.xml`,
  };
}
