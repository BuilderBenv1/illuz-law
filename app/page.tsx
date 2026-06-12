/* eslint-disable @next/next/no-img-element */

const siteUrl = "https://iluzlaw.com";
const phoneDisplay = "+972 (237) 633-90";
const phoneHref = "tel:+97223763390";

const services = [
  {
    title: "פינוי בינוי והתחדשות עירונית",
    text: "ייצוג בעלי דירות ונציגויות לאורך כל שלבי הפרויקט: בדיקת היתכנות, בחירת יזם, הסכם משפטי, בטוחות, תמורות וליווי עד מסירה.",
  },
  {
    title: "הסכמי פינוי בינוי ותמ\"א 38",
    text: "כתיבה, בדיקה ומשא ומתן על הסכמים מורכבים, עם דגש על הגנה על הדיירים, מנגנוני ודאות ולוחות זמנים ברורים.",
  },
  {
    title: "משא ומתן לשיפור תנאי דיירים",
    text: "ליווי קבוצות דיירים מול יזמים, עורכי דין, שמאים ויועצים כדי להגיע לתנאים מסחריים ומשפטיים מאוזנים יותר.",
  },
  {
    title: "תביעות דייר סרבן",
    text: "טיפול משפטי במחלוקות בין בעלי זכויות בפרויקטים של התחדשות עירונית, כולל ניתוח סיכונים וגיבוש אסטרטגיית פעולה.",
  },
  {
    title: "עסקאות מכר ורישום מקרקעין",
    text: "ליווי עסקאות רכישה ומכירה, בדיקות זכויות, רישום בטאבו והסדרת סוגיות בעלות במקרקעין.",
  },
  {
    title: "ליטיגציה אזרחית, חוזים ותאגידים",
    text: "ייצוג בבתי משפט, טיפול בחוזים, הוצאה לפועל וסוגיות אזרחיות-מסחריות הנדרשות לבעלי נכסים, עסקים ולקוחות פרטיים.",
  },
];

const process = [
  "מיפוי זכויות, צרכים וסיכונים משפטיים",
  "בניית אסטרטגיה ומסמכי פעולה ברורים",
  "משא ומתן וניהול תקשורת מול כל הצדדים",
  "ליווי עד חתימה, ביצוע והשלמת הרישום",
];

const faqs = [
  {
    question: "באילו תחומים עוסק משרד אילוז עורכי דין?",
    answer:
      "המשרד מעניק ייעוץ וייצוג משפטי בתחומי התחדשות עירונית, פינוי בינוי, תמ\"א 38, מקרקעין, עסקאות מכר, ליטיגציה אזרחית, חוזים, הוצאה לפועל ותאגידים.",
  },
  {
    question: "האם המשרד מייצג בעלי דירות בפרויקטים של פינוי בינוי?",
    answer:
      "כן. תחום הליבה של המשרד הוא ליווי בעלי דירות ונציגויות בפרויקטים של פינוי בינוי והתחדשות עירונית, לרבות בדיקת הסכמים, ניהול משא ומתן ושמירה על אינטרסים של הדיירים.",
  },
  {
    question: "היכן נמצא משרד אילוז עורכי דין?",
    answer:
      "משרד אילוז עורכי דין פועל מירושלים ומעניק שירות משפטי ללקוחות, בעלי דירות ונציגויות בישראל.",
  },
  {
    question: "איך מתאמים פגישת ייעוץ?",
    answer:
      `ניתן להתקשר למשרד בטלפון ${phoneDisplay} לתיאום שיחה ראשונית או פגישת ייעוץ.`,
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LegalService",
      "@id": `${siteUrl}/#legalservice`,
      name: "אילוז עורכי דין",
      alternateName: ["Iluz Lawyer's Office", "ILUZ LAWYERS"],
      url: siteUrl,
      image: `${siteUrl}/hero-jerusalem-urban-renewal.png`,
      telephone: phoneDisplay,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jerusalem",
        addressCountry: "IL",
      },
      areaServed: [
        { "@type": "City", name: "Jerusalem" },
        { "@type": "Country", name: "Israel" },
      ],
      knowsAbout: [
        "פינוי בינוי",
        "התחדשות עירונית",
        "תמ\"א 38",
        "מקרקעין",
        "עסקאות מכר",
        "ליטיגציה אזרחית",
        "חוזים",
        "הוצאה לפועל",
        "תאגידים",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: phoneDisplay,
        contactType: "legal consultation",
        areaServed: "IL",
        availableLanguage: ["he", "en"],
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "תחומי התמחות משפטיים",
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.text,
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "ILUZ LAWYERS",
      alternateName: "Iluz Lawyer's Office",
      inLanguage: "he-IL",
      publisher: { "@id": `${siteUrl}/#legalservice` },
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "אילוז עורכי דין | התחדשות עירונית, מקרקעין וייצוג אזרחי בירושלים",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#legalservice` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${siteUrl}/hero-jerusalem-urban-renewal.png`,
      },
      inLanguage: "he-IL",
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f9fb] text-[#102326]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="sticky top-0 z-30 border-b border-white/40 bg-[#102326]/92 text-white backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-3 md:gap-4 md:px-8 md:py-4">
          <a href="#home" className="flex items-center gap-3" aria-label="אילוז עורכי דין - דף הבית">
            <span className="grid h-10 w-10 place-items-center rounded-lg border border-[#d7b46a]/60 bg-[#d7b46a] text-sm font-bold text-[#102326]">
              IL
            </span>
            <span className="leading-tight">
              <span className="block text-base font-semibold">אילוז עורכי דין</span>
              <span className="block text-xs text-white/72">Iluz Lawyer&apos;s Office</span>
            </span>
          </a>

          <nav aria-label="ניווט ראשי" className="order-3 flex w-full flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-white/82 md:order-none md:w-auto md:text-sm">
            <a href="#about" className="transition hover:text-white">אודות</a>
            <a href="#services" className="transition hover:text-white">תחומי התמחות</a>
            <a href="#faq" className="transition hover:text-white">שאלות נפוצות</a>
            <a href="#contact" className="transition hover:text-white">יצירת קשר</a>
          </nav>

          <a
            href={phoneHref}
            className="order-2 rounded-lg border border-[#d7b46a] px-3 py-2 text-xs font-semibold text-[#f4d88d] transition hover:bg-[#d7b46a] hover:text-[#102326] md:order-none md:px-4 md:text-sm"
          >
            {phoneDisplay}
          </a>
        </div>
      </header>

      <section id="home" className="relative isolate flex min-h-[calc(100svh-12rem)] items-center overflow-hidden bg-[#102326] text-white md:min-h-[84svh]">
        <img
          src="/hero-jerusalem-urban-renewal.png"
          alt="ירושלים, תכנון עירוני ומסמכים משפטיים עבור משרד עורכי דין להתחדשות עירונית"
          className="absolute inset-0 z-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(16,35,38,0.08),rgba(16,35,38,0.54)_42%,rgba(16,35,38,0.88)_100%)]" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-10 md:px-8 md:py-16">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold text-[#f4d88d]">Jerusalem, Israel · ILUZ LAWYERS</p>
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
              אילוז עורכי דין
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/86 md:mt-6 md:text-xl md:leading-9">
              ליווי משפטי ממוקד בתחומי התחדשות עירונית, פינוי בינוי, מקרקעין והמשפט האזרחי. משרד ירושלמי שמחבר ניסיון, ראייה רחבה ושירות אישי לבעלי דירות, נציגויות ולקוחות פרטיים.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 md:mt-9">
              <a
                href={phoneHref}
                className="rounded-lg bg-[#d7b46a] px-4 py-3 text-sm font-bold text-[#102326] shadow-lg shadow-black/20 transition hover:bg-[#f4d88d] md:px-6"
              >
                התקשרו לתיאום ייעוץ
              </a>
              <a
                href="#services"
                className="rounded-lg border border-white/45 px-4 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-[#102326] md:px-6"
              >
                תחומי ההתמחות
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#dbe7e8] bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-7 text-sm text-[#42585b] md:grid-cols-3 md:px-8">
          <p><strong className="text-[#102326]">תחום ליבה:</strong> פינוי בינוי והתחדשות עירונית</p>
          <p><strong className="text-[#102326]">מיקום:</strong> ירושלים, ישראל</p>
          <p><strong className="text-[#102326]">גישה:</strong> ייעוץ מדויק, משא ומתן יסודי וליווי ארוך טווח</p>
        </div>
      </section>

      <section id="about" className="bg-[#f7f9fb]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-[0.85fr_1.15fr] md:px-8">
          <div>
            <p className="mb-3 text-sm font-semibold text-[#0f766e]">אודות המשרד</p>
            <h2 className="text-3xl font-semibold leading-tight text-[#102326] md:text-4xl">
              ייצוג משפטי שמתחיל בהבנה מלאה של הפרויקט, הנכס והלקוח
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-9 text-[#42585b]">
            <p>
              משרד אילוז עורכי דין מתמחה במתן ייעוץ וייצוג משפטי בשלושה תחומים מרכזיים, תוך דגש על מקצועיות, ניסיון וראייה רחבה של צורכי הלקוח.
            </p>
            <p>
              תחום הליבה של המשרד הוא פינוי בינוי והתחדשות עירונית, עם ייצוג בעלי דירות בפרויקטים מורכבים הדורשים מומחיות משפטית, סבלנות אסטרטגית ויכולת ליווי עד לסגירת כל פרט.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold text-[#0f766e]">תחומי התמחות</p>
            <h2 className="text-3xl font-semibold leading-tight text-[#102326] md:text-4xl">
              שירות משפטי ברור לפרויקטים, עסקאות ומחלוקות אזרחיות
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="rounded-lg border border-[#dbe7e8] bg-[#fbfcfd] p-6 shadow-sm">
                <h3 className="text-xl font-semibold leading-8 text-[#102326]">{service.title}</h3>
                <p className="mt-4 leading-8 text-[#42585b]">{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#102326] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-[0.9fr_1.1fr] md:px-8">
          <div>
            <p className="mb-3 text-sm font-semibold text-[#f4d88d]">דרך העבודה</p>
            <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
              תהליך מסודר שמקטין אי ודאות ומחזיק את הפרויקט בתנועה
            </h2>
          </div>
          <ol className="grid gap-4">
            {process.map((item, index) => (
              <li key={item} className="flex gap-4 rounded-lg border border-white/14 bg-white/6 p-5">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#d7b46a] text-sm font-bold text-[#102326]">
                  {index + 1}
                </span>
                <span className="pt-1 leading-8 text-white/86">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="faq" className="bg-[#eef4f5]">
        <div className="mx-auto max-w-5xl px-5 py-20 md:px-8">
          <p className="mb-3 text-sm font-semibold text-[#0f766e]">שאלות נפוצות</p>
          <h2 className="mb-9 text-3xl font-semibold leading-tight text-[#102326] md:text-4xl">
            מידע תמציתי לפני פנייה למשרד
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="rounded-lg border border-[#cbdcde] bg-white p-6">
                <summary className="cursor-pointer text-lg font-semibold text-[#102326]">
                  {faq.question}
                </summary>
                <p className="mt-4 leading-8 text-[#42585b]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-[1.1fr_0.9fr] md:px-8">
          <div>
            <p className="mb-3 text-sm font-semibold text-[#0f766e]">יצירת קשר</p>
            <h2 className="text-3xl font-semibold leading-tight text-[#102326] md:text-4xl">
              צעד אחד קדימה מתחיל בשיחה מדויקת
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-9 text-[#42585b]">
              לתיאום פגישת ייעוץ וליווי משפטי מקצועי, צרו קשר עם משרד אילוז עורכי דין בירושלים.
            </p>
          </div>

          <div className="rounded-lg border border-[#dbe7e8] bg-[#f7f9fb] p-6">
            <dl className="space-y-5 text-[#42585b]">
              <div>
                <dt className="text-sm font-semibold text-[#102326]">טלפון</dt>
                <dd className="mt-1">
                  <a
                    href={phoneHref}
                    aria-label={`לחייג למשרד אילוז עורכי דין בטלפון ${phoneDisplay}`}
                    className="inline-flex rounded-lg text-xl font-bold text-[#0f766e] underline-offset-4 hover:underline"
                  >
                    {phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-[#102326]">משרד</dt>
                <dd className="mt-1">ירושלים, ישראל</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-[#102326]">שם באנגלית</dt>
                <dd className="mt-1">Iluz Lawyer&apos;s Office</dd>
              </div>
            </dl>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={phoneHref} className="rounded-lg bg-[#102326] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#173b3f]">
                התקשרו למשרד
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#dbe7e8] bg-[#102326] text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-8 text-sm text-white/72 md:px-8">
          <p>© 2026 אילוז עורכי דין · ILUZ LAWYERS</p>
          <div className="flex flex-wrap gap-4">
            <a href="#services" className="hover:text-white">תחומי התמחות</a>
            <a href="#faq" className="hover:text-white">שאלות נפוצות</a>
            <a href={phoneHref} className="hover:text-white">{phoneDisplay}</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
