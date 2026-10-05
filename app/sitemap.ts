import type { MetadataRoute } from "next";
import { href, locales, paths, siteUrl, type PageKey } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) => (Object.keys(paths) as PageKey[]).map((page) => ({ url: `${siteUrl}${href(locale, page)}`, lastModified: new Date(), changeFrequency: page === "insights" ? "weekly" : "monthly", priority: page === "home" ? 1 : 0.7, alternates: { languages: { lt: `${siteUrl}${href("lt", page)}`, en: `${siteUrl}${href("en", page)}` } } })));
}
