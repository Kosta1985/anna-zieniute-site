"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { asset, type Locale } from "@/content/site";

const images = [
  { src: "/images/anna-editorial-wide.webp", alt: "Anna Zieniute editorial portrait" },
  { src: "/images/anna-outdoors.webp", alt: "Anna Zieniute outdoors" },
  { src: "/images/anna-portrait.webp", alt: "Portrait of Anna Zieniute" },
  { src: "/images/anna-editorial.webp", alt: "Anna Zieniute in an editorial setting" },
];

export function Gallery({ locale }: { locale: Locale }) {
  const [selected, setSelected] = useState<number | null>(null);
  useEffect(() => {
    if (selected === null) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && setSelected(null);
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [selected]);

  return (
    <>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <button key={image.src} className={`gallery-item item-${index + 1}`} onClick={() => setSelected(index)} aria-label={`${locale === "lt" ? "Atverti nuotrauką" : "Open image"} ${index + 1}`}>
            <Image src={asset(image.src)} alt={image.alt} fill sizes="(max-width: 700px) 100vw, 50vw" />
          </button>
        ))}
      </div>
      {selected !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={locale === "lt" ? "Nuotraukų peržiūra" : "Image viewer"} onClick={() => setSelected(null)}>
          <button aria-label={locale === "lt" ? "Uždaryti" : "Close"}>×</button>
          <Image src={asset(images[selected].src)} alt={images[selected].alt} fill sizes="100vw" />
        </div>
      )}
    </>
  );
}
