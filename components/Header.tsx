"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { href, navKeys, navLabels, pageFromSlug, paths, type Locale } from "@/content/site";

export function Header({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const slug = pathname.split("/").filter(Boolean)[1];
  const page = pageFromSlug(locale, slug) || "home";
  const alternate: Locale = locale === "lt" ? "en" : "lt";

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="site-header">
      <Link className="wordmark" href={href(locale, "home")} aria-label="Anna Zieniute">
        <span>Anna</span> Zieniute
      </Link>

      <nav className="desktop-nav" aria-label={locale === "lt" ? "Pagrindinis meniu" : "Primary navigation"}>
        {navKeys.slice(1).map((key) => (
          <Link key={key} className={page === key ? "active" : ""} href={href(locale, key)}>
            {navLabels[key][locale]}
          </Link>
        ))}
      </nav>

      <div className="header-actions">
        <div className="language-switcher" aria-label={locale === "lt" ? "Kalba" : "Language"}>
          <Link className={locale === "lt" ? "active" : ""} href={href("lt", page)}>LT</Link>
          <span aria-hidden="true">/</span>
          <Link className={locale === "en" ? "active" : ""} href={href("en", page)}>EN</Link>
        </div>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu">
          <span className="sr-only">{locale === "lt" ? "Meniu" : "Menu"}</span>
          <span className={open ? "menu-icon open" : "menu-icon"} aria-hidden="true"><i /><i /></span>
        </button>
      </div>

      <div id="mobile-menu" className={open ? "mobile-menu open" : "mobile-menu"} aria-hidden={!open}>
        <nav aria-label={locale === "lt" ? "Mobilusis meniu" : "Mobile navigation"}>
          {navKeys.map((key, index) => (
            <Link key={key} href={href(locale, key)}>
              <span>0{index + 1}</span>{navLabels[key][locale]}
            </Link>
          ))}
        </nav>
        <p>{locale === "lt" ? "Savęs pažinimas · Asmeninis augimas · Paskaitos" : "Self-Awareness · Personal Growth · Speaking"}</p>
      </div>
    </header>
  );
}
