"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { href, type Locale } from "@/content/site";

const key = "az-cookie-consent";

export function CookieConsent({ locale }: { locale: Locale }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => { setVisible(!localStorage.getItem(key)); }, []);

  function choose(value: "essential" | "analytics") {
    localStorage.setItem(key, value);
    window.dispatchEvent(new CustomEvent("az-consent", { detail: value }));
    setVisible(false);
  }

  if (!visible) return null;
  return (
    <aside className="cookie-banner" aria-label={locale === "lt" ? "Slapukų pasirinkimai" : "Cookie choices"}>
      <div>
        <p className="eyebrow">{locale === "lt" ? "Jūsų pasirinkimas" : "Your choice"}</p>
        <p>{locale === "lt" ? "Būtini slapukai padeda svetainei veikti. Analitinius slapukus naudosime tik gavę jūsų sutikimą." : "Essential cookies keep the site working. Analytics will only be used with your consent."}</p>
        <Link href={href(locale, "cookies")}>{locale === "lt" ? "Daugiau informacijos" : "Learn more"}</Link>
      </div>
      <div className="cookie-actions">
        <button className="button secondary" onClick={() => choose("essential")}>{locale === "lt" ? "Tik būtini" : "Essential only"}</button>
        <button className="button" onClick={() => choose("analytics")}>{locale === "lt" ? "Sutinku" : "Accept"}</button>
      </div>
    </aside>
  );
}
