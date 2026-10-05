import type { Locale } from "@/content/site";

export function Accordion({ items, locale }: { items: string[][]; locale: Locale }) {
  return (
    <div className="accordion">
      {items.map(([question, answer], index) => (
        <details key={question}>
          <summary><span>0{index + 1}</span>{question}<i aria-hidden="true">+</i></summary>
          <p>{answer}</p>
        </details>
      ))}
      <p className="sr-only">{locale === "lt" ? "Dažniausiai užduodami klausimai" : "Frequently asked questions"}</p>
    </div>
  );
}
