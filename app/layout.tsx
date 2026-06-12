import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://iluzlaw.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "אילוז עורכי דין | פינוי בינוי, מקרקעין וייצוג אזרחי בירושלים",
    template: "%s | אילוז עורכי דין",
  },
  description:
    "משרד אילוז עורכי דין בירושלים מעניק ייעוץ וייצוג משפטי בתחומי פינוי בינוי, התחדשות עירונית, מקרקעין, ליטיגציה אזרחית, חוזים, הוצאה לפועל ותאגידים.",
  keywords: [
    "אילוז עורכי דין",
    "Iluz Lawyer's Office",
    "ILUZ LAWYERS",
    "עורך דין פינוי בינוי ירושלים",
    "עורך דין התחדשות עירונית",
    "עורך דין מקרקעין ירושלים",
    "תמ\"א 38",
    "ייצוג דיירים",
    "ליטיגציה אזרחית",
  ],
  alternates: {
    canonical: siteUrl,
    languages: {
      "he-IL": siteUrl,
      "x-default": siteUrl,
    },
  },
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: siteUrl,
    siteName: "ILUZ LAWYERS",
    title: "אילוז עורכי דין | התחדשות עירונית, מקרקעין וייצוג אזרחי",
    description:
      "ליווי משפטי ממוקד לבעלי דירות, נציגויות ולקוחות פרטיים בתחומי פינוי בינוי, מקרקעין והמשפט האזרחי בירושלים.",
    images: [
      {
        url: "/hero-jerusalem-urban-renewal.png",
        width: 1536,
        height: 1024,
        alt: "ירושלים והתחדשות עירונית עבור משרד אילוז עורכי דין",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "אילוז עורכי דין | ILUZ LAWYERS",
    description:
      "משרד עורכי דין בירושלים להתחדשות עירונית, פינוי בינוי, מקרקעין וייצוג אזרחי.",
    images: ["/hero-jerusalem-urban-renewal.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  category: "Legal Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he-IL" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
