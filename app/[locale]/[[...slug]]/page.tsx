import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { renderPage } from "@/components/Pages";
import { href, locales, navLabels, pageFromSlug, paths, seo, siteUrl, type Locale, type PageKey } from "@/content/site";

type Props = { params: Promise<{ locale: string; slug?: string[] }> };

export function generateStaticParams() {
  return locales.flatMap((locale) => (Object.keys(paths) as PageKey[]).map((key) => ({ locale, slug: paths[key][locale] ? [paths[key][locale]] : [] })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  if (!locales.includes(rawLocale as Locale) || (slug?.length || 0) > 1) return {};
  const locale = rawLocale as Locale;
  const page = pageFromSlug(locale, slug?.[0]);
  if (!page) return {};
  const data = seo[page][locale];
  const current = `${siteUrl}${href(locale, page)}`;
  return {
    title: data.title,
    description: data.description,
    alternates: {
      canonical: current,
      languages: { lt: `${siteUrl}${href("lt", page)}`, en: `${siteUrl}${href("en", page)}`, "x-default": `${siteUrl}${href("lt", page)}` },
    },
    openGraph: { title: data.title, description: data.description, url: current, siteName: "Anna Zieniute", locale: locale === "lt" ? "lt_LT" : "en_GB", type: "website", images: [{ url: "/images/anna-outdoors.webp", width: 1280, height: 853, alt: "Anna Zieniute" }] },
  };
}

export default async function LocalizedPage({ params }: Props) {
  const { locale: rawLocale, slug } = await params;
  if (!locales.includes(rawLocale as Locale) || (slug?.length || 0) > 1) notFound();
  const locale = rawLocale as Locale;
  const page = pageFromSlug(locale, slug?.[0]);
  if (!page) notFound();
  const structuredData = [{ "@context": "https://schema.org", "@type": "Person", name: "Anna Zieniute", url: `${siteUrl}/${locale}`, jobTitle: locale === "lt" ? "Asmeninio augimo mentorė ir lektorė" : "Personal Growth Mentor & Speaker" }, { "@context": "https://schema.org", "@type": "WebPage", name: navLabels[page][locale], url: `${siteUrl}${href(locale, page)}`, inLanguage: locale }];
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />{renderPage(page, locale)}</>;
}
