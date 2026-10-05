"use client";

import { FormEvent, useState } from "react";
import type { Locale } from "@/content/site";

type Kind = "contact" | "speaking";

const labels = {
  name: { lt: "Vardas", en: "Name" },
  organisation: { lt: "Organizacija", en: "Organisation" },
  email: { lt: "El. paštas", en: "Email" },
  phone: { lt: "Telefonas", en: "Phone" },
  date: { lt: "Renginio data", en: "Event date" },
  location: { lt: "Miestas / šalis", en: "City / country" },
  format: { lt: "Renginio formatas", en: "Event format" },
  audience: { lt: "Auditorijos dydis", en: "Audience size" },
  topic: { lt: "Dominanti tema", en: "Topic of interest" },
  message: { lt: "Žinutė", en: "Message" },
  details: { lt: "Papildoma informacija", en: "Additional information" },
};

export function ContactForm({ locale, kind = "contact" }: { locale: Locale; kind?: Kind }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const fields = kind === "speaking"
    ? ["name", "organisation", "email", "phone", "date", "location", "format", "audience", "topic", "details"] as const
    : ["name", "email", "phone", "message"] as const;

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...data, locale, kind }) });
      if (!response.ok) throw new Error();
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <input className="honeypot" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="form-grid">
        {fields.map((field) => {
          const isArea = field === "message" || field === "details";
          return (
            <label key={field} className={isArea ? "full" : ""}>
              <span>{labels[field][locale]}</span>
              {isArea ? <textarea name={field} rows={4} required /> : <input name={field} type={field === "email" ? "email" : field === "date" ? "date" : "text"} required={["name", "email", "topic"].includes(field)} />}
            </label>
          );
        })}
      </div>
      <p className="privacy-note">{locale === "lt" ? "Pateikdami formą sutinkate, kad jūsų duomenys būtų naudojami atsakyti į šią užklausą." : "By submitting this form, you agree that your details may be used to respond to this enquiry."}</p>
      <button className="button" disabled={status === "sending"}>
        {status === "sending" ? (locale === "lt" ? "Siunčiama…" : "Sending…") : kind === "speaking" ? (locale === "lt" ? "Siųsti užklausą" : "Send enquiry") : (locale === "lt" ? "Siųsti žinutę" : "Send message")}
      </button>
      <p className={`form-status ${status}`} role="status">
        {status === "sent" && (locale === "lt" ? "Ačiū. Jūsų žinutė išsiųsta." : "Thank you. Your message has been sent.")}
        {status === "error" && (locale === "lt" ? "Žinutės išsiųsti nepavyko. Bandykite dar kartą vėliau." : "Your message could not be sent. Please try again later.")}
      </p>
    </form>
  );
}
