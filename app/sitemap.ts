import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/#about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/#projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/#experience`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/#contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}
