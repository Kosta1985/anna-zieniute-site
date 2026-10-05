import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { notFound } from "next/navigation";
import { Analytics } from "@/components/Analytics";
import { CookieConsent } from "@/components/CookieConsent";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { locales, type Locale } from "@/content/site";
import "../globals.css";

const serif = Cormorant_Garamond({ subsets: ["latin", "latin-ext"], variable: "--font-serif", weight: ["400", "500", "600"] });
const sans = Manrope({ subsets: ["latin", "latin-ext"], variable: "--font-sans", weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://annazieniute.com"),
  applicationName: "Anna Zieniute",
  authors: [{ name: "Anna Zieniute" }],
  robots: { index: true, follow: true },
};

export function generateStaticParams() { return locales.map((locale) => ({ locale })); }

export default async function LocaleLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale: rawLocale } = await params;
  if (!locales.includes(rawLocale as Locale)) notFound();
  const locale = rawLocale as Locale;
  return (
    <html lang={locale} className={`${serif.variable} ${sans.variable}`}>
      <body>
        <a className="skip-link" href="#main">{locale === "lt" ? "Pereiti prie turinio" : "Skip to content"}</a>
        <Header locale={locale} />
        <main id="main">{children}</main>
        <Footer locale={locale} />
        <CookieConsent locale={locale} />
        <Analytics />
      </body>
    </html>
  );
}
