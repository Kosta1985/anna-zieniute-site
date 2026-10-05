import Link from "next/link";
import { href, navLabels, socialLinks, type Locale } from "@/content/site";

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="site-footer">
      <div className="footer-lead">
        <p className="eyebrow">Anna Zieniute</p>
        <h2>{locale === "lt" ? "Pradėkime nuo pokalbio." : "Let’s start with a conversation."}</h2>
        <Link className="text-link light" href={href(locale, "contact")}>
          {navLabels.contact[locale]} <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <div className="footer-meta">
        <div>
          <Link className="footer-brand" href={href(locale, "home")}>Anna Zieniute</Link>
          <p>{locale === "lt" ? "Savęs pažinimas · Asmeninis augimas · Paskaitos" : "Self-Awareness · Personal Growth · Speaking"}</p>
        </div>
        <div className="footer-links">
          <Link href={href(locale, "privacy")}>{navLabels.privacy[locale]}</Link>
          <Link href={href(locale, "cookies")}>{navLabels.cookies[locale]}</Link>
          {socialLinks.map((social) => <a key={social.network} href={social.url} rel="noreferrer" target="_blank">{social.network}</a>)}
        </div>
        <p>© {new Date().getFullYear()} Anna Zieniute</p>
      </div>
    </footer>
  );
}
