import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { business, faqs } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-sora",
  display: "swap",
});

const title = "Fixxir — Phone & Laptop Repair in Ikeja, Lagos";
const description =
  "Honest device repair in Ikeja, Lagos. We diagnose the real fault, quote you before any work starts, and hand back a device that actually works. Phones, laptops, tablets and board-level repairs.";

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: {
    default: title,
    template: "%s · Fixxir",
  },
  description,
  keywords: [
    "phone repair Lagos",
    "laptop repair Ikeja",
    "screen replacement Lagos",
    "motherboard repair Nigeria",
    "device repair Ikeja",
    "Fixxir",
  ],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: business.url,
    siteName: business.name,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#04060b",
  colorScheme: "dark",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: business.name,
  description,
  url: business.url,
  telephone: business.phone,
  email: business.email,
  image: `${business.url}/fixxir-mark.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.street,
    addressLocality: business.address.city,
    addressRegion: business.address.region,
    addressCountry: "NG",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  areaServed: { "@type": "City", name: "Lagos" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </body>
    </html>
  );
}
