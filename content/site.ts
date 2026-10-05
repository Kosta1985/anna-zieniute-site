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
    lt: { title: "Individualus pokalbis | Anna Zieniute", description: "Erdvė sustoti, apmąstyti situaciją, pastebėti pasikartojančius modelius ir aiškiau pasirinkti savo kryptį." },
    en: { title: "Individual Conversation | Anna Zieniute", description: "A thoughtful space to pause, reflect, notice recurring patterns and clarify your direction." },
  },
  speaking: {
    lt: { title: "Paskaitos, seminarai ir renginiai | Anna Zieniute", description: "Pakvieskite Anną Zieniute kalbėti apie savęs pažinimą, santykius, ribas, Jungo idėjas ir vidinį pokytį." },
    en: { title: "Talks, Seminars & Events | Anna Zieniute", description: "Invite Anna Zieniute to speak about self-awareness, relationships, boundaries, Jungian ideas and inner change." },
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
    ["Praeitis, kuri vis dar veikia dabartį", "Kaip ankstesnė patirtis gali formuoti mūsų reakcijas, santykius ir pasirinkimus."],
    ["Kodėl kartojame tuos pačius scenarijus?", "Pasikartojančių gyvenimo ir santykių modelių pažinimas."],
    ["Santykis su savimi", "Savivertė, vidinis dialogas ir gebėjimas girdėti save."],
    ["Emocijos", "Ne tik jas kontroliuoti, bet ir išmokti suprasti."],
    ["Ribos", "Kaip santykiuose su kitais neprarasti savęs."],
    ["C. G. Jung ir mūsų vidinis pasaulis", "Persona, šešėlis, archetipai, individuacija ir jų aktualumas šiandien."],
    ["Pokytis", "Kodėl supratimas yra pradžia, bet ne visada pokytis."],
  ],
  en: [
    ["The past that still lives in the present", "How previous experiences can influence our reactions, relationships and choices."],
    ["Why do we repeat the same patterns?", "Understanding recurring patterns in life and relationships."],
    ["Relationship with yourself", "Self-worth, inner dialogue and learning to listen to yourself."],
    ["Emotions", "Learning not only to manage emotions, but to understand them."],
    ["Boundaries", "How to remain yourself while being connected to others."],
    ["Carl Gustav Jung and our inner world", "Persona, shadow, archetypes, individuation and their relevance today."],
    ["Change", "Why awareness is the beginning of transformation, but not always transformation itself."],
  ],
} satisfies Localized<string[][]>;

export const speakingTopics = {
  lt: [
    "Kodėl kartojame tuos pačius gyvenimo scenarijus?",
    "Praeitis mūsų dabartyje",
    "Susitikimas su savo šešėliu",
    "Kas iš tiesų yra savęs pažinimas?",
    "Ribos santykiuose",
    "Kaip nustoti gyventi pagal svetimus lūkesčius?",
    "C. G. Jung: kelias į save",
    "Vidinis pokytis: kodėl suprasti neužtenka?",
  ],
  en: [
    "Why do we repeat the same life patterns?",
    "How the past lives in the present",
    "Meeting your shadow",
    "What does it really mean to know yourself?",
    "Boundaries in relationships",
    "Living beyond other people’s expectations",
    "Carl Gustav Jung: the journey toward the self",
    "Inner change: why understanding is not always enough",
  ],
} satisfies Localized<string[]>;

export const faqs = {
  lt: [
    ["Kaip vyksta individualus pokalbis?", "Tai konfidencialus, struktūruotas pokalbis, kuriame galima sustoti ties jums svarbia situacija, pastebėti reakcijas ir aiškiau pamatyti galimus pasirinkimus."],
    ["Ar galima susitikti nuotoliniu būdu?", "Taip, pokalbiai gali vykti nuotoliniu būdu. Konkretų formatą suderinsime registracijos metu."],
    ["Kiek trunka susitikimas?", "Susitikimo trukmė ir praktinė informacija patvirtinama prieš rezervuojant laiką."],
    ["Ar Anna veda paskaitas įmonėms ir organizacijoms?", "Taip. Paskaitos ir seminarai gali būti pritaikomi organizacijos auditorijai ir renginio formatui."],
    ["Ar galima užsakyti paskaitą konkrečia tema?", "Taip. Užklausoje nurodykite auditoriją, norimą temą ir renginio tikslą, kad būtų galima aptarti tinkamiausią turinį."],
    ["Ar individualus pokalbis yra psichoterapija?", "Ne. Individualus pokalbis yra mentorystės ir refleksijos erdvė; tai nėra psichoterapija, diagnostika ar sveikatos priežiūros paslauga."],
  ],
  en: [
    ["How does an individual conversation work?", "It is a confidential, structured conversation focused on a situation that matters to you, the reactions around it and the choices that may become clearer."],
    ["Can sessions take place online?", "Yes. Conversations can take place online, with the format agreed during booking."],
    ["How long is a conversation?", "The duration and practical details are confirmed before a time is reserved."],
    ["Does Anna speak at companies and organisations?", "Yes. Talks and seminars can be adapted to an organisation’s audience and event format."],
    ["Can a talk be created for a specific topic?", "Yes. Share the audience, subject and purpose in your enquiry so the most fitting content can be discussed."],
    ["Is an individual conversation psychotherapy?", "No. An individual conversation offers mentoring and reflection; it is not psychotherapy, diagnosis or healthcare."],
  ],
} satisfies Localized<string[][]>;

// Optional collections stay empty until verified material is supplied.
export const articles: Array<{ slug: Localized<string>; title: Localized<string>; published: boolean }> = [];
export const testimonials: Array<{ quote: string; name: string; language: Locale; published: boolean }> = [];
export const socialLinks: Array<{ network: string; url: string }> = [];
export const videos: Array<{ title: Localized<string>; url: string; poster: string; published: boolean }> = [];
