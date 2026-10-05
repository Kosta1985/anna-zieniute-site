import Link from "next/link";
import "./globals.css";

export default function NotFound() {
  return <html lang="lt"><body><main className="not-found"><p className="eyebrow">404</p><h1>Puslapis nerastas.</h1><p>This page could not be found.</p><Link className="button" href="/lt">Grįžti į pradžią / Return home</Link></main></body></html>;
}
