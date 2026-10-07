export const locales = ["lt", "en"] as const;
export type Locale = (typeof locales)[number];

export type PageKey =
  | "home"
  | "about"
  | "topics"
  | "individual"
  | "speaking"
  | "stage"
  | "insights"
  | "contact"
  | "privacy"
  | "cookies";

export type Localized<T> = Record<Locale, T>;

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://annazieniute.com";
export const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${path}`;

export const paths: Record<PageKey, Localized<string>> = {
  home: { lt: "", en: "" },
  about: { lt: "apie", en: "about" },
  topics: { lt: "temos", en: "topics" },
  individual: { lt: "individualiai", en: "individual" },
  speaking: { lt: "paskaitos", en: "speaking" },
  stage: { lt: "scenoje", en: "on-stage" },
  insights: { lt: "izvalgos", en: "insights" },
  contact: { lt: "kontaktai", en: "contact" },
  privacy: { lt: "privatumo-politika", en: "privacy-policy" },
  cookies: { lt: "slapuku-politika", en: "cookie-policy" },
};

export const navKeys: PageKey[] = [
  "home",
  "about",
  "topics",
  "individual",
  "speaking",
  "stage",
  "insights",
  "contact",
];

export const navLabels: Record<PageKey, Localized<string>> = {
  home: { lt: "Pradžia", en: "Home" },
  about: { lt: "Apie", en: "About" },
  topics: { lt: "Temos", en: "Topics" },
  individual: { lt: "Individualiai", en: "Individual" },
  speaking: { lt: "Paskaitos", en: "Speaking" },
  stage: { lt: "Scenoje", en: "On Stage" },
  insights: { lt: "Įžvalgos", en: "Insights" },
  contact: { lt: "Kontaktai", en: "Contact" },
  privacy: { lt: "Privatumo politika", en: "Privacy Policy" },
  cookies: { lt: "Slapukų politika", en: "Cookie Policy" },
};

export function href(locale: Locale, page: PageKey) {
  const slug = paths[page][locale];
  return `/${locale}${slug ? `/${slug}` : ""}`;
}

export function pageFromSlug(locale: Locale, slug?: string): PageKey | undefined {
  return (Object.keys(paths) as PageKey[]).find((key) => paths[key][locale] === (slug || ""));
}

export const ui = {
  skip: { lt: "Pereiti prie turinio", en: "Skip to content" },
  menu: { lt: "Meniu", en: "Menu" },
  close: { lt: "Uždaryti", en: "Close" },
  readMore: { lt: "Skaityti daugiau", en: "Read more" },
  discover: { lt: "Atrasti temas", en: "Explore the topics" },
  book: { lt: "Registruotis pokalbiui", en: "Book a conversation" },
  invite: { lt: "Pakviesti Anną kalbėti", en: "Invite Anna to speak" },
  backHome: { lt: "Grįžti į pradžią", en: "Return home" },
} satisfies Record<string, Localized<string>>;

export const seo: Record<PageKey, Localized<{ title: string; description: string }>> = {
  home: {
    lt: { title: "Anna Zieniute | Savęs pažinimas, asmeninis augimas, paskaitos", description: "Anna Zieniute kviečia į sąmoningus pokalbius ir paskaitas apie savęs pažinimą, emocijas, santykius bei vidinius gyvenimo modelius." },
    en: { title: "Anna Zieniute | Self-Awareness, Personal Growth & Speaking", description: "Conversations and talks with Anna Zieniute exploring self-awareness, emotions, relationships and recurring inner patterns." },
  },
  about: {
    lt: { title: "Apie Anną | Anna Zieniute", description: "Susipažinkite su Anna Zieniute ir jos požiūriu į savęs pažinimą, atsakomybę, Jungo idėjas bei sąmoningą pokytį." },
    en: { title: "About Anna | Anna Zieniute", description: "Meet Anna Zieniute and discover her thoughtful approach to self-awareness, responsibility, Jungian ideas and conscious change." },
  },
  topics: {
    lt: { title: "Temos | Anna Zieniute", description: "Savęs pažinimas, pasikartojantys modeliai, emocijos, ribos, santykiai ir C. G. Jungo idėjos." },
    en: { title: "Topics | Anna Zieniute", description: "Explore self-awareness, recurring patterns, emotions, boundaries, relationships and the ideas of Carl Gustav Jung." },
  },
  individual: {
    lt: { title: "Individualus pokalbis | Anna Zieniute", description: "Privatus individualus pokalbis su Anna Zieniute: savęs pažinimas, mąstysena, ribos, pokyčiai ir praktiniai įrankiai. 50 € / 60 min." },
    en: { title: "Individual Conversation | Anna Zieniute", description: "Private one-to-one sessions with Anna Zieniute exploring self-awareness, mindset, boundaries, change and practical tools. €50 / 60 min." },
  },
  speaking: {
    lt: { title: "Paskaitos, seminarai ir renginiai | Anna Zieniute", description: "Paskaitos renginiams, komandoms, seminarams ir auditorijoms. Temos pritaikomos, o kaina derinama individualiai." },
    en: { title: "Talks, Seminars & Events | Anna Zieniute", description: "Talks for events, teams, lectures and seminars. Topics are tailored to the audience and speaking fees are agreed individually." },
  },
  stage: {
    lt: { title: "Scenoje | Anna Zieniute", description: "Anna Zieniute scenoje: gyvi pokalbiai apie patirtis, kurias jaučiame, bet ne visada mokame įvardyti." },
    en: { title: "On Stage | Anna Zieniute", description: "Anna Zieniute on stage: live conversations about experiences we often feel but do not always know how to name." },
  },
  insights: {
    lt: { title: "Įžvalgos | Anna Zieniute", description: "Tekstai apie savęs pažinimą, santykius, emocijas, Jungo idėjas, augimą ir pokyčius." },
    en: { title: "Insights | Anna Zieniute", description: "Writing on self-awareness, relationships, emotions, Jungian ideas, personal growth and change." },
  },
  contact: {
    lt: { title: "Kontaktai | Anna Zieniute", description: "Susisiekite dėl individualaus pokalbio, paskaitos, seminaro ar renginio." },
    en: { title: "Contact | Anna Zieniute", description: "Get in touch about an individual conversation, talk, seminar or event." },
  },
  privacy: {
    lt: { title: "Privatumo politika | Anna Zieniute", description: "Informacija apie asmens duomenų tvarkymą Anna Zieniute svetainėje." },
    en: { title: "Privacy Policy | Anna Zieniute", description: "How personal data is handled on the Anna Zieniute website." },
  },
  cookies: {
    lt: { title: "Slapukų politika | Anna Zieniute", description: "Informacija apie būtinus ir pasirenkamus slapukus." },
    en: { title: "Cookie Policy | Anna Zieniute", description: "Information about essential and optional cookies." },
  },
};

export const topics = {
  lt: [
    ["Manipuliacijos", "Kaip atpažinti manipuliaciją, išlikti aiškiam ir nepasimesti, kai kitas žmogus bando paveikti jūsų sprendimus."],
    ["Kūno kalba", "Kaip laikysena, judesiai, veido išraiškos ir kiti neverbaliniai signalai keičia bendravimą."],
    ["Balsas ir komunikacija", "Balsas, intonacija, kalbos tempas, pauzės ir tai, kaip jie veikia žinutės aiškumą bei pasitikėjimą."],
    ["Viešasis kalbėjimas", "Elgesys scenoje, ryšys su auditorija ir aiškus, užtikrintas savęs bei savo idėjų pristatymas."],
    ["Mąstysena", "Darbas su vidinėmis nuostatomis ir būdais paversti mąstymą įrankiu, kuris padeda veikti, o ne stabdo."],
    ["Prisitaikymas prie pokyčių", "Kaip lengviau priimti naujas aplinkybes, dirbti su naujumo baime, pasipriešinimu ir neapibrėžtumu."],
    ["Savęs pažinimas", "Automatinės reakcijos, pasikartojantys gyvenimo scenarijai ir aiškesnis savo pasirinkimų supratimas."],
    ["Asmeninės ribos", "Kaip atpažinti savo ribas, jas išreikšti ir prisiimti atsakomybę už savo sprendimus."],
  ],
  en: [
    ["Manipulation", "How to recognise manipulation, stay clear-minded and avoid losing your footing when someone is trying to influence your decisions."],
    ["Body Language", "How posture, movement, facial expression and other non-verbal signals shape communication."],
    ["Voice & Communication", "Voice, intonation, pace, pauses and the way they influence clarity, presence and confidence."],
    ["Public Speaking", "Stage presence, connection with an audience, and presenting yourself and your ideas with greater confidence."],
    ["Mindset", "Working with inner beliefs and learning to make your thinking a tool that supports action rather than getting in the way."],
    ["Adaptation to Change", "Responding to new circumstances, uncertainty, fear of the unfamiliar and resistance to change with greater flexibility."],
    ["Self-Awareness", "Noticing automatic reactions, recurring life patterns and the choices that shape everyday life."],
    ["Personal Boundaries", "Recognising and expressing your boundaries while taking responsibility for your own decisions."],
  ],
} satisfies Localized<string[][]>;

export const speakingTopics = {
  lt: [
    "Manipuliacijos: kaip jas atpažinti ir nepasimesti",
    "Kūno kalba ir gestai",
    "Balsas, intonacija, kalbos tempas ir pauzės",
    "Viešasis kalbėjimas ir elgesys scenoje",
    "Užtikrintas savęs ir savo idėjų pristatymas",
    "Mąstysena kaip praktinis įrankis",
    "Prisitaikymas prie pokyčių ir neapibrėžtumo",
    "Savęs pažinimas, asmeninės ribos ir atsakomybė",
    "Pasikartojantys gyvenimo scenarijai",
  ],
  en: [
    "Manipulation: how to recognise it without losing your footing",
    "Body language and gestures",
    "Voice, intonation, pace and pauses",
    "Public speaking and stage presence",
    "Presenting yourself and your ideas with confidence",
    "Mindset as a practical tool",
    "Adapting to change and uncertainty",
    "Self-awareness, personal boundaries and responsibility",
    "Recurring life patterns",
  ],
} satisfies Localized<string[]>;

export const faqs = {
  lt: [
    ["Kaip vyksta individualus pokalbis?", "Tai privatus individualus pokalbis vienas su vienu. Jo metu galima sustoti ties konkrečia situacija, pastebėti automatines reakcijas ir pasikartojančius modelius, išbandyti praktinius pratimus ir aiškiau pamatyti galimus tolesnius veiksmus."],
    ["Kiek kainuoja ir kiek trunka susitikimas?", "Individualus pokalbis kainuoja 50 € ir trunka 60 minučių."],
    ["Ar galima susitikti nuotoliniu būdu?", "Taip. Individualūs pokalbiai vyksta nuotoliniu būdu privačiu formatu vienas su vienu."],
    ["Kam skirti individualūs pokalbiai?", "Jie skirti suaugusiesiems (18+), kurie nori geriau suprasti save, lengviau prisitaikyti prie pokyčių, spręsti konkretų klausimą, dirbti su pasikartojančiomis gyvenimo situacijomis ar įgyti naujų praktinių darbo su savimi įrankių."],
    ["Ar Anna veda paskaitas įmonėms ir organizacijoms?", "Taip. Galimos paskaitos renginiams, komandoms, seminarams ir kitoms auditorijoms. Tema pritaikoma prie auditorijos ir renginio formato."],
    ["Kiek kainuoja paskaita?", "Paskaitos kaina nustatoma individualiai. Ji priklauso nuo temos, trukmės, formato ir renginio sąlygų; kaina ir praktinės sąlygos suderinamos prieš patvirtinant renginį."],
    ["Ar individualus pokalbis yra psichoterapija?", "Ne. Individualus pokalbis nėra psichoterapija, psichiatrinė ar medicininė pagalba. Nediagnozuojami ir negydomi psichikos sutrikimai. Jei jūsų situacijai reikia psichologo, psichoterapeuto, psichiatro ar kito licencijuoto specialisto pagalbos, reikėtų kreiptis į atitinkamą specialistą."],
  ],
  en: [
    ["How does an individual session work?", "It is a private one-to-one conversation focused on a situation that matters to you. Sessions may include practical exercises to notice automatic reactions and recurring patterns, explore new perspectives and turn insight into concrete action."],
    ["How much does a session cost and how long is it?", "An individual session is €50 and lasts 60 minutes."],
    ["Can sessions take place online?", "Yes. Individual sessions take place online in a private one-to-one format."],
    ["Who are individual sessions for?", "They are for adults (18+) who want to understand themselves better, adapt to change more effectively, work through a specific question, examine recurring situations in their lives or gain new practical tools for working with themselves."],
    ["Does Anna speak at companies and organisations?", "Yes. Talks are available for events, teams, lectures and seminars. The subject can be adapted to the audience and the format of the event."],
    ["How much does a speaking engagement cost?", "Speaking fees are quoted individually and depend on the topic, duration, format and event conditions. The fee and practical terms are agreed before the engagement is confirmed."],
    ["Is an individual session psychotherapy?", "No. Individual sessions are not psychotherapy, psychiatric care or medical care. No mental health condition is diagnosed or treated. If your situation requires a psychologist, psychotherapist, psychiatrist or another licensed professional, please seek the appropriate specialist support."],
  ],
} satisfies Localized<string[][]>;

// Optional collections stay empty until verified material is supplied.
export const articles: Array<{ slug: Localized<string>; title: Localized<string>; published: boolean }> = [];
export const testimonials: Array<{ quote: string; name: string; language: Locale; published: boolean }> = [];
export const socialLinks: Array<{ network: string; url: string }> = [];
export const videos: Array<{ title: Localized<string>; url: string; poster: string; published: boolean }> = [];
