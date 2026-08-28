import type { Metadata } from "next";
import { Source_Serif_4, Public_Sans } from "next/font/google";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "600"],
});

// Buildspec §3 — Inter read as too anonymous on screen; Public Sans is one
// of the two alternates the brief named, and fits the "reliable, not
// corporate" tone better than a typical SaaS grotesque.
const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

// TODO: confirm this is the live domain before launch (currently inferred
// from the tennantandco.co.uk email address) — used for sitemap.xml,
// robots.txt, canonical/OG URLs and structured data.
export const SITE_URL = "https://tennantandco.co.uk";

const title = "Tennant & Co Accountancy | Bookkeeping & Software Training";
const description =
  "Bookkeeping, VAT returns and Xero/QuickBooks/Sage software training for sole traders, partnerships and limited companies across Buckinghamshire, Hertfordshire and Bedfordshire.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Tennant & Co Accountancy",
    images: ["/images/logo-full.png"],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/images/logo-full.png"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: "Tennant & Co Accountancy Limited",
  url: SITE_URL,
  email: "tiffany@tennantandco.co.uk",
  telephone: "+441296821478",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4 Grovelands, Boundary Way",
    addressLocality: "Hemel Hempstead",
    addressRegion: "Hertfordshire",
    postalCode: "HP2 7TE",
    addressCountry: "GB",
  },
  areaServed: ["Buckinghamshire", "Hertfordshire", "Bedfordshire"],
  founder: {
    "@type": "Person",
    name: "Tiffany Tennant",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sourceSerif.variable} ${publicSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
