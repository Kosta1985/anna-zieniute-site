"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

export function Analytics() {
  const id = process.env.NEXT_PUBLIC_GA_ID;
  const [allowed, setAllowed] = useState(false);
  useEffect(() => {
    setAllowed(localStorage.getItem("az-cookie-consent") === "analytics");
    const update = (event: Event) => setAllowed((event as CustomEvent).detail === "analytics");
    window.addEventListener("az-consent", update);
    return () => window.removeEventListener("az-consent", update);
  }, []);
  if (!id || !allowed) return null;
  return <><Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" /><Script id="ga-init" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${id}',{anonymize_ip:true});`}</Script></>;
}
