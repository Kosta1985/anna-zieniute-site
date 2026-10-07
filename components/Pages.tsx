import Image from "next/image";
import Link from "next/link";
import { Accordion } from "./Accordion";
import { ContactForm } from "./ContactForm";
import { Gallery } from "./Gallery";
import { articles, asset, faqs, href, speakingTopics, topics, ui, videos, type Locale, type PageKey } from "@/content/site";

function ArrowLink({ href: to, children, light = false }: { href: string; children: React.ReactNode; light?: boolean }) {
  return <Link className={`text-link${light ? " light" : ""}`} href={to}>{children}<span aria-hidden="true">↗</span></Link>;
}

function PageHero({ eyebrow, title, intro, image = "/images/anna-editorial.webp", imageAlt = "Anna Zieniute" }: { eyebrow: string; title: string; intro?: string; image?: string; imageAlt?: string }) {
  return (
    <section className="page-hero">
      <div className="page-hero-copy reveal">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {intro && <p className="lead">{intro}</p>}
      </div>
      <div className="page-hero-image reveal delay-1">
        <Image src={asset(image)} alt={imageAlt} fill priority sizes="(max-width: 800px) 100vw, 46vw" />
      </div>
    </section>
  );
}

export function HomePage({ locale }: { locale: Locale }) {
  const lt = locale === "lt";
  return (
    <>
      <section className="home-hero">
        <Image className="hero-image" src={asset("/images/anna-outdoors.webp")} alt="Anna Zieniute" fill priority sizes="100vw" />
        <div className="hero-shade" />
        <div className="hero-copy reveal">
          <p className="hero-brand">Anna Zieniute</p>
          <p className="eyebrow light">{lt ? "Savęs pažinimas · Asmeninis augimas · Paskaitos" : "Self-Awareness · Personal Growth · Speaking"}</p>
          <h1>{lt ? <>Pažink save.<br />Suprask savo istoriją.<br />Kurk kitokį rytojų.</> : <>Know yourself.<br />Understand your story.<br />Create a different tomorrow.</>}</h1>
          <p>{lt ? "Pokalbiai, paskaitos ir praktiniai susitikimai apie savęs pažinimą, vidinius modelius, emocijas ir sąmoningus gyvenimo pokyčius." : "Conversations, talks and practical experiences exploring self-awareness, inner patterns, emotions and conscious personal change."}</p>
          <div className="hero-actions">
            <Link className="button light-button" href={href(locale, "individual")}>{lt ? "Individualus pokalbis" : "Book an individual conversation"}</Link>
            <ArrowLink href={href(locale, "speaking")} light>{lt ? "Pakviesti Anną į renginį" : "Invite Anna to speak"}</ArrowLink>
          </div>
        </div>
        <a className="scroll-cue" href="#intro"><span>{lt ? "Toliau" : "Explore"}</span><i /></a>
      </section>

      <section id="intro" className="intro-band section-pad">
        <p className="eyebrow">{lt ? "Požiūris" : "The approach"}</p>
        <h2>{lt ? "Kai supranti savo vidinius modelius, atsiranda galimybė rinktis kitaip." : "When you understand your inner patterns, you gain the freedom to choose differently."}</h2>
        <ArrowLink href={href(locale, "about")}>{lt ? "Apie Anną" : "About Anna"}</ArrowLink>
      </section>

      <section className="split-feature section-pad">
        <div className="portrait-frame"><Image src={asset("/images/anna-portrait.webp")} alt="Anna Zieniute" fill sizes="(max-width: 800px) 100vw, 45vw" /></div>
        <div className="split-copy">
          <p className="eyebrow">{lt ? "Individualiai" : "Individual"}</p>
          <h2>{lt ? "Erdvė išgirsti save aiškiau." : "A space to hear yourself more clearly."}</h2>
          <p>{lt ? "Sustoti ties tuo, kas svarbu. Pastebėti pasikartojančias reakcijas, įsitikinimus ir pasirinkimus. Ne gauti paruoštą atsakymą, o atrasti savąjį." : "Pause with what matters. Notice recurring reactions, beliefs and choices. Not to receive a ready-made answer, but to discover your own."}</p>
          <ArrowLink href={href(locale, "individual")}>{ui.book[locale]}</ArrowLink>
        </div>
      </section>

      <section className="speaking-band section-pad">
        <div className="speaking-heading">
          <p className="eyebrow light">{lt ? "Paskaitos ir renginiai" : "Talks & events"}</p>
          <h2>{lt ? "Mintys, kurios tęsiasi ir pasibaigus renginiui." : "Ideas that stay with the audience after the room goes quiet."}</h2>
        </div>
        <div className="speaking-list">
          {speakingTopics[locale].slice(0, 4).map((topic, index) => <p key={topic}><span>0{index + 1}</span>{topic}</p>)}
        </div>
        <ArrowLink href={href(locale, "speaking")} light>{ui.invite[locale]}</ArrowLink>
      </section>

      <section className="topics-preview section-pad">
        <div className="section-heading"><p className="eyebrow">{lt ? "Temos" : "Themes"}</p><h2>{lt ? "Vidinis pasaulis nėra atskirtas nuo kasdienio gyvenimo." : "The inner world is never separate from everyday life."}</h2></div>
        <div className="topic-lines">
          {topics[locale].slice(0, 5).map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
        <ArrowLink href={href(locale, "topics")}>{ui.discover[locale]}</ArrowLink>
      </section>
    </>
  );
}

export function AboutPage({ locale }: { locale: Locale }) {
  const lt = locale === "lt";
  return <>
    <PageHero eyebrow={lt ? "Apie" : "About"} title={lt ? "Apie Anną" : "About Anna"} intro={lt ? "Dėmesys žmogaus vidiniam pasauliui ir tam, kaip aiškesnis savęs matymas gali keisti kasdienius pasirinkimus." : "An interest in the inner world and in how seeing ourselves more clearly can shape everyday choices."} />
    <section className="editorial-copy section-pad">
      <p className="dropcap">{lt ? "Anną domina klausimai, kurie neturi greitų ar vienareikšmių atsakymų: kodėl kartojame tuos pačius modelius, kaip ankstesnė patirtis veikia dabartinius santykius ir ką reiškia prisiimti atsakomybę už sąmoningą pokytį." : "Anna is drawn to questions without quick or simple answers: why we repeat the same patterns, how previous experience shapes present relationships, and what it means to take responsibility for conscious change."}</p>
      <div><p>{lt ? "Jos pokalbiuose ir paskaitose susitinka emocinis sąmoningumas, asmeninė atsakomybė ir atsargiai pristatomos C. G. Jungo idėjos. Tai kvietimas ne tapti kitu žmogumi, o atidžiau pamatyti save." : "Her conversations and talks bring together emotional awareness, personal responsibility and a considered exploration of Carl Gustav Jung’s ideas. It is an invitation not to become someone else, but to see yourself with greater clarity."}</p><p>{lt ? "Bendraudama su auditorijomis Anna renkasi gyvą, suprantamą kalbą ir palieka vietos ne tik idėjoms, bet ir asmeninei refleksijai." : "When speaking with audiences, Anna favours clear, human language and makes room not only for ideas, but for personal reflection."}</p></div>
    </section>
    <section className="quote-band"><blockquote>{lt ? "Pokytis prasideda nuo gebėjimo pamatyti save." : "Change begins with the ability to see yourself clearly."}</blockquote></section>
    <section className="values-grid section-pad">
      {(lt ? [["Smalsumas", "Ne skubėti vertinti, o klausti, kas iš tiesų vyksta."], ["Atsakomybė", "Praeitis paaiškina, tačiau pasirinkimai kuriami dabartyje."], ["Autentiškumas", "Mažiau vaidmens. Daugiau tikro santykio su savimi."]] : [["Curiosity", "Not rushing to judge, but asking what is really happening."], ["Responsibility", "The past can explain; choices are made in the present."], ["Authenticity", "Less performance. A more honest relationship with yourself."]]).map(([title, text], i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p></article>)}
    </section>
  </>;
}

export function TopicsPage({ locale }: { locale: Locale }) {
  const lt = locale === "lt";
  return <>
    <PageHero eyebrow={lt ? "Temos" : "Topics"} title={lt ? "Tai, ką kartojame, dažnai prašo būti pastebėta." : "What we repeat often asks to be noticed."} intro={lt ? "Temos pokalbiams, paskaitoms ir gilesnei asmeninei refleksijai." : "Themes for conversations, talks and deeper personal reflection."} image="/images/anna-editorial-wide.webp" />
    <section className="numbered-topics section-pad">
      {topics[locale].map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h2>{title}</h2><p>{text}</p></div></article>)}
    </section>
    <section className="quote-band"><blockquote>{lt ? "Praeitis gali paaiškinti dabartį, bet ji neturi valdyti tavo ateities." : "Your past can explain your present without having to define your future."}</blockquote></section>
  </>;
}

export function IndividualPage({ locale }: { locale: Locale }) {
  const lt = locale === "lt";
  const steps = lt ? [["Sustoti", "Sukurti erdvės tam, kas šiuo metu svarbiausia."], ["Pastebėti", "Atpažinti pasikartojančias reakcijas, įsitikinimus ir modelius."], ["Išsigryninti", "Aiškiau pamatyti kryptį ir sąmoningai pasirinkti kitą žingsnį."]] : [["Pause", "Create space for what matters most right now."], ["Notice", "Recognise recurring reactions, beliefs and patterns."], ["Clarify", "See your direction more clearly and choose the next step consciously."]];
  return <>
    <PageHero eyebrow={lt ? "Individualiai" : "Individual"} title={lt ? "Individualus pokalbis" : "Individual Conversation"} intro={lt ? "Ramus, struktūruotas laikas pažvelgti į situaciją iš arčiau ir išgirsti save be skubėjimo." : "Calm, structured time to look more closely at a situation and hear yourself without rushing."} image="/images/anna-portrait.webp" />
    <section className="price-strip section-pad">
      <div><p className="eyebrow">{lt ? "Individualus pokalbis" : "Individual session"}</p><h2>{lt ? "50 € / 60 min." : "€50 / 60 min."}</h2></div>
      <div>
        <p>{lt ? "Privatus nuotolinis pokalbis vienas su vienu." : "Private one-to-one online session."}</p>
        <Link className="button" href="#book-session">{lt ? "Registruotis" : "Book a session"}</Link>
      </div>
    </section>
    <section className="process section-pad">{steps.map(([title, text], i) => <article key={title}><span>0{i + 1}</span><h2>{title}</h2><p>{text}</p></article>)}</section>
    <section className="individual-topics section-pad">
      <div className="section-heading">
        <p className="eyebrow">{lt ? "Individualių pokalbių temos" : "Individual session topics"}</p>
        <h2>{lt ? "Temos, su kuriomis galima dirbti individualiai." : "Themes we can explore one-to-one."}</h2>
      </div>
      <div className="individual-topic-list">
        {topics[locale].map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}
      </div>
    </section>
    <section className="change-focus section-pad">
      <p className="eyebrow">{lt ? "Pokyčiai" : "Change"}</p>
      <h2>{lt ? "Pokyčiai yra nuolatinė gyvenimo dalis. Gebėjimą prie jų prisitaikyti galima lavinti." : "Change is a constant part of life. The ability to adapt can be developed."}</h2>
      <p>{lt ? "Individualus darbas padeda pastebėti pasipriešinimą, naujumo baimę ir automatines reakcijas, kad naujos aplinkybės taptų lengviau valdomos." : "Individual work helps you notice resistance, fear of the unfamiliar and automatic reactions so new circumstances become easier to navigate."}</p>
    </section>
    <section className="practical-section section-pad">
      <div><p className="eyebrow">{lt ? "Praktiniai pratimai" : "Practical exercises"}</p><h2>{lt ? "Ne tik suprasti, bet ir pritaikyti." : "Move from insight into action."}</h2></div>
      <div className="bullet-stack">
        {(lt ? [
          "Padeda greičiau prisitaikyti prie naujų idėjų ir aplinkybių.",
          "Padeda pastebėti automatines reakcijas ir įprastus mąstymo modelius.",
          "Padeda lengviau toleruoti pokyčius ir neapibrėžtumą.",
          "Padeda perkelti naujas idėjas iš supratimo į realius veiksmus.",
        ] : [
          "Support faster adaptation to new ideas and circumstances.",
          "Help you notice automatic reactions and familiar thinking patterns.",
          "Make change and uncertainty easier to tolerate.",
          "Help turn new ideas from understanding into real action.",
        ]).map((item) => <p key={item}>{item}</p>)}
      </div>
    </section>
    <section className="audience-grid section-pad">
      <article><p className="eyebrow">{lt ? "Kam tinka" : "Who it is for"}</p><h2>{lt ? "Suaugusiesiems (18+), kurie nori veikti sąmoningiau." : "For adults (18+) who want to respond more consciously."}</h2><p>{lt ? "Verslo savininkams, verslininkams, žmonėms nuolatinių pokyčių aplinkoje, tiems, kuriems sunku prisitaikyti prie neapibrėžtumo, norintiems geriau suprasti save, spręsti konkretų klausimą ar pasikartojančią situaciją, žmonėms, kuriems reikia naujų praktinių darbo su savimi įrankių, ir tiems, kurie keičia darbą, verslą, šalį, santykius ar kitą gyvenimo etapą." : "For business owners, entrepreneurs, people living and working through constant change, anyone struggling with uncertainty, people who want to understand themselves better, work through a specific question or recurring situation, anyone looking for new practical tools for working with themselves, and those moving through a change of job, business, country, relationship or life stage."}</p></article>
      <article><p className="eyebrow">{lt ? "Kam netinka" : "Who it is not for"}</p><h2>{lt ? "Tik suaugusiesiems (18+) ir tik aktyviai dalyvaujantiems." : "Adults (18+) only, and only for people willing to participate actively."}</h2><p>{lt ? "Pokalbiai neskirti vaikams ar paaugliams. Jie taip pat netinka žmonėms, kurie nėra suinteresuoti gerinti savo gyvenimo ir neketina praktiškai taikyti aptartų įrankių." : "Sessions are not offered to children or teenagers. They are also not a fit for people who are not interested in improving their lives or applying what they learn in practice."}</p></article>
    </section>
    <section className="service-note section-pad"><div><p className="eyebrow">{lt ? "Svarbu žinoti" : "Important"}</p><h2>{lt ? "Individualūs pokalbiai nėra psichoterapija, psichiatrinė ar medicininė pagalba." : "Individual sessions are not psychotherapy, psychiatric care or medical care."}</h2></div><p>{lt ? "Pokalbių metu nėra diagnozuojami ar gydomi psichikos sutrikimai. Jei jūsų situacijai reikia psichologo, psichoterapeuto, psichiatro ar kito licencijuoto specialisto pagalbos, būtina kreiptis į atitinkamą specialistą." : "No mental health condition is diagnosed or treated. If your situation requires a psychologist, psychotherapist, psychiatrist or another licensed professional, please seek the appropriate specialist support."}</p></section>
    <section id="book-session" className="form-section section-pad"><div className="section-heading"><p className="eyebrow">{lt ? "Registracija" : "Book a session"}</p><h2>{lt ? "50 € / 60 min. · Privatus pokalbis vienas su vienu." : "€50 / 60 min. · Private one-to-one session."}</h2></div><ContactForm locale={locale} /></section>
  </>;
}

export function SpeakingPage({ locale }: { locale: Locale }) {
  const lt = locale === "lt";
  return <>
    <PageHero eyebrow={lt ? "Paskaitos" : "Speaking"} title={lt ? "Paskaitos, seminarai ir renginiai" : "Talks, Seminars & Events"} intro={lt ? "Gyvas, suprantamas ir mintį tęsti kviečiantis turinys organizacijoms, bendruomenėms ir renginių auditorijoms." : "Clear, engaging ideas that invite continued reflection for organisations, communities and event audiences."} image="/images/anna-outdoors.webp" />
    <section className="talk-topics section-pad"><div className="section-heading"><p className="eyebrow">{lt ? "Galimos temos" : "Suggested themes"}</p><h2>{lt ? "Pokalbiai apie tai, kas vyksta mūsų viduje." : "Conversations about what unfolds within us."}</h2></div><div>{speakingTopics[locale].map((topic, index) => <p key={topic}><span>{String(index + 1).padStart(2, "0")}</span>{topic}</p>)}</div></section>
    <section className="speaking-philosophy"><div className="speaking-photo"><Image src={asset("/images/anna-editorial.webp")} alt="Anna Zieniute" fill sizes="(max-width: 800px) 100vw, 50vw" /></div><div><p className="eyebrow light">{lt ? "Kiekvienai auditorijai" : "For every audience"}</p><h2>{lt ? "Paskaitos renginiams, komandoms, paskaitoms ir seminarams." : "Speaking for events, teams, lectures and seminars."}</h2><p>{lt ? "Tema pritaikoma auditorijai, renginio tikslui ir formatui. Kaina nustatoma individualiai pagal temą, trukmę, formatą ir renginio sąlygas. Turinys, praktinės sąlygos ir kaina suderinami prieš patvirtinant renginį." : "The subject is adapted to the audience, purpose and event format. Speaking fees are quoted individually based on the topic, duration, format and event conditions. Content, practical terms and the fee are agreed before the engagement is confirmed."}</p></div></section>
    <section className="speaking-fee section-pad"><p className="eyebrow">{lt ? "Kaina" : "Speaking fee"}</p><h2>{lt ? "Derinama individualiai." : "Quoted individually."}</h2><p>{lt ? "Galutinė kaina priklauso nuo temos, trukmės, formato, auditorijos ir kitų renginio sąlygų." : "The final fee depends on the topic, duration, format, audience and other event requirements."}</p></section>
    <section className="form-section section-pad"><div className="section-heading"><p className="eyebrow">{lt ? "Renginio užklausa" : "Speaking enquiry"}</p><h2>{ui.invite[locale]}</h2></div><ContactForm locale={locale} kind="speaking" /></section>
  </>;
}

export function StagePage({ locale }: { locale: Locale }) {
  const lt = locale === "lt";
  return <>
    <div className="simple-hero section-pad"><p className="eyebrow">{lt ? "Gyvai" : "Live"}</p><h1>{lt ? "Scenoje" : "On Stage"}</h1><p className="lead">{lt ? "Gyvas pokalbis apie temas, kurias dažnai jaučiame, bet ne visada mokame įvardyti." : "Live conversations about the experiences we often feel but do not always know how to name."}</p></div>
    {videos.filter((video) => video.published).length > 0 && <section className="video-grid" aria-label={lt ? "Vaizdo įrašai" : "Videos"}>{/* CMS-published videos render here. */}</section>}
    <Gallery locale={locale} />
    <section className="stage-note section-pad"><p className="eyebrow">{lt ? "Paskaitos" : "Speaking"}</p><h2>{lt ? "Norite pakviesti Anną į savo renginį?" : "Would you like Anna to speak at your event?"}</h2><ArrowLink href={href(locale, "speaking")}>{ui.invite[locale]}</ArrowLink></section>
  </>;
}

export function InsightsPage({ locale }: { locale: Locale }) {
  const lt = locale === "lt";
  const categories = lt ? ["Savęs pažinimas", "Santykiai", "Emocijos", "Jungas", "Asmeninis augimas", "Pokyčiai"] : ["Self-Awareness", "Relationships", "Emotions", "Jung", "Personal Growth", "Change"];
  const published = articles.filter((article) => article.published);
  return <>
    <div className="simple-hero section-pad"><p className="eyebrow">{lt ? "Užrašai ir refleksijos" : "Notes & reflections"}</p><h1>{lt ? "Įžvalgos" : "Insights"}</h1><p className="lead">{lt ? "Mintys apie vidinį pasaulį, santykius ir sąmoningą asmeninį pokytį." : "Writing on the inner world, relationships and conscious personal change."}</p></div>
    <div className="category-list section-pad">{categories.map((category) => <span key={category}>{category}</span>)}</div>
    <section className="empty-editorial section-pad">
      {published.length === 0 ? <><p className="eyebrow">{lt ? "Netrukus" : "Coming soon"}</p><h2>{lt ? "Pirmieji tekstai ruošiami." : "The first essays are being prepared."}</h2><p>{lt ? "Čia bus publikuojami originalūs tekstai lietuvių ir anglų kalbomis. Jie pasirodys tik tuomet, kai bus parengti ir patvirtinti." : "Original writing in Lithuanian and English will appear here once each piece has been prepared and approved."}</p></> : null}
    </section>
    <section className="quote-band"><blockquote>{lt ? "Pažinti save – tai pradėti gyventi sąmoningiau." : "Knowing yourself is the beginning of living more consciously."}</blockquote></section>
  </>;
}

export function ContactPage({ locale }: { locale: Locale }) {
  const lt = locale === "lt";
  return <>
    <section className="contact-page section-pad"><div><p className="eyebrow">{lt ? "Kontaktai" : "Contact"}</p><h1>{lt ? "Pradėkime nuo pokalbio." : "Let’s start with a conversation."}</h1><p className="lead">{lt ? "Parašykite dėl individualaus pokalbio, paskaitos, seminaro ar bendradarbiavimo." : "Get in touch about an individual conversation, talk, seminar or collaboration."}</p></div><ContactForm locale={locale} /></section>
    <section className="faq-section section-pad"><div className="section-heading"><p className="eyebrow">{lt ? "Dažniausiai klausiama" : "Frequently asked"}</p><h2>{lt ? "Praktinė informacija" : "Practical information"}</h2></div><Accordion items={faqs[locale]} locale={locale} /></section>
  </>;
}

export function PolicyPage({ locale, page }: { locale: Locale; page: "privacy" | "cookies" }) {
  const lt = locale === "lt";
  const privacy = page === "privacy";
  return <article className="policy section-pad">
    <p className="eyebrow">{lt ? "Teisinė informacija" : "Legal information"}</p>
    <h1>{privacy ? (lt ? "Privatumo politika" : "Privacy Policy") : (lt ? "Slapukų politika" : "Cookie Policy")}</h1>
    <p className="policy-updated">{lt ? "Atnaujinta: 2026 m. spalio 5 d." : "Last updated: 5 October 2026"}</p>
    {privacy ? <>
      <h2>{lt ? "Apie šią politiką" : "About this policy"}</h2><p>{lt ? "Ši politika paaiškina, kokius asmens duomenis svetainė gali rinkti ir kaip jie naudojami. Prieš viešą paleidimą duomenų valdytojo kontaktiniai duomenys turi būti papildyti patvirtinta informacija." : "This policy explains what personal data the website may collect and how it is used. Verified data-controller contact details must be added before public launch."}</p>
      <h2>{lt ? "Kokius duomenis renkame" : "Data we collect"}</h2><p>{lt ? "Kai pateikiate kontaktinę ar renginio užklausos formą, galime gauti jūsų vardą, el. pašto adresą, telefono numerį, organizaciją, renginio informaciją ir žinutės turinį." : "When you submit a contact or speaking-enquiry form, we may receive your name, email address, phone number, organisation, event information and message."}</p>
      <h2>{lt ? "Tikslas ir teisinis pagrindas" : "Purpose and legal basis"}</h2><p>{lt ? "Duomenys naudojami atsakyti į jūsų užklausą ir, kai reikia, imtis veiksmų prieš sudarant susitarimą. Pasirenkama analitika įjungiama tik gavus sutikimą." : "Data is used to respond to your enquiry and, where relevant, to take steps before entering an agreement. Optional analytics is enabled only with consent."}</p>
      <h2>{lt ? "Saugojimas ir jūsų teisės" : "Retention and your rights"}</h2><p>{lt ? "Duomenys saugomi tik tiek, kiek reikia užklausai administruoti ir teisėtiems apskaitos įsipareigojimams vykdyti. Pagal taikomus teisės aktus galite prašyti susipažinti su duomenimis, juos ištaisyti, ištrinti ar apriboti jų tvarkymą." : "Data is retained only as long as needed to manage the enquiry and meet legitimate record-keeping duties. Subject to applicable law, you may request access, correction, deletion or restriction of your data."}</p>
    </> : <>
      <h2>{lt ? "Kas yra slapukai" : "What cookies are"}</h2><p>{lt ? "Slapukai ir vietinė naršyklės saugykla gali įsiminti nedidelį informacijos kiekį, kad svetainė veiktų ir prisimintų jūsų pasirinkimus." : "Cookies and local browser storage can retain a small amount of information so the website works and remembers your choices."}</p>
      <h2>{lt ? "Būtini pasirinkimai" : "Essential choices"}</h2><p>{lt ? "Svetainė saugo jūsų slapukų sutikimo pasirinkimą. Šis įrašas būtinas tam, kad sutikimo langas nebūtų rodomas kiekvieno apsilankymo metu." : "The website stores your cookie-consent choice so the consent notice is not shown on every visit."}</p>
      <h2>{lt ? "Analitika" : "Analytics"}</h2><p>{lt ? "Analitika neįkeliama, kol aiškiai nesutinkate. Ji taip pat lieka išjungta, jei nėra sukonfigūruotas tikras analitikos identifikatorius." : "Analytics is not loaded until you actively consent. It also remains disabled unless a real analytics identifier has been configured."}</p>
      <h2>{lt ? "Kaip pakeisti pasirinkimą" : "Changing your choice"}</h2><p>{lt ? "Galite ištrinti svetainės duomenis savo naršyklės nustatymuose ir pasirinkti iš naujo kito apsilankymo metu." : "You can clear this site’s stored data in your browser settings and choose again on your next visit."}</p>
    </>}
  </article>;
}

export function renderPage(page: PageKey, locale: Locale) {
  switch (page) {
    case "home": return <HomePage locale={locale} />;
    case "about": return <AboutPage locale={locale} />;
    case "topics": return <TopicsPage locale={locale} />;
    case "individual": return <IndividualPage locale={locale} />;
    case "speaking": return <SpeakingPage locale={locale} />;
    case "stage": return <StagePage locale={locale} />;
    case "insights": return <InsightsPage locale={locale} />;
    case "contact": return <ContactPage locale={locale} />;
    case "privacy": return <PolicyPage locale={locale} page="privacy" />;
    case "cookies": return <PolicyPage locale={locale} page="cookies" />;
  }
}
