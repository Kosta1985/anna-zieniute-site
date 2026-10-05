import { NextResponse } from "next/server";

const allowedFields = ["name", "organisation", "email", "phone", "date", "location", "format", "audience", "topic", "message", "details", "kind", "locale"];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (body.website) return NextResponse.json({ ok: true });
    if (!body.name || !body.email || !/^\S+@\S+\.\S+$/.test(body.email)) return NextResponse.json({ error: "Invalid form" }, { status: 400 });
    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO;
    if (!apiKey || !to) return NextResponse.json({ error: "Form delivery is not configured" }, { status: 503 });
    const clean = Object.fromEntries(allowedFields.filter((field) => body[field]).map((field) => [field, String(body[field]).slice(0, 4000)]));
    const response = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" }, body: JSON.stringify({ from: "Anna Zieniute Website <onboarding@resend.dev>", to: [to], reply_to: clean.email, subject: clean.kind === "speaking" ? "New speaking enquiry" : "New website enquiry", text: Object.entries(clean).map(([key, value]) => `${key}: ${value}`).join("\n") }) });
    if (!response.ok) return NextResponse.json({ error: "Delivery failed" }, { status: 502 });
    return NextResponse.json({ ok: true });
  } catch { return NextResponse.json({ error: "Invalid request" }, { status: 400 }); }
}
