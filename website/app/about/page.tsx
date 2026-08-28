import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";

const title = "About | Tennant & Co Accountancy";
const description = "Tiffany Tennant ACA, founder of Tennant & Co Accountancy.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url: "/about" },
  twitter: { title, description },
};

export default function AboutPage() {
  return (
    <>
      <Header />

      <main>
        <Section>
          <div className="grid gap-10 md:grid-cols-[2fr_1fr] md:items-start">
            <div>
              <SectionHeading as="h1" eyebrow="About" title="Tiffany Tennant ACA" />
              <div className="mt-8 max-w-[68ch] space-y-4 text-body text-ink-muted">
                <p>
                  Tiffany started her career in accountancy in 2017, training
                  first through AAT and then ACA, qualifying as a Chartered
                  Accountant in January 2023.
                </p>
                <p>
                  She was promoted to Assistant Manager in September 2022 and
                  to Manager in May 2024, before founding Tennant & Co in
                  April 2026.
                </p>
                <p>
                  Tennant & Co was founded to give Tiffany the flexibility to
                  work around family life while continuing to deliver
                  high-quality work — and that flexibility is what allows for
                  a more personal service than a larger practice can offer.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/5] w-full max-w-xs overflow-hidden rounded-lg md:justify-self-end">
              <Image
                src="/images/tiffany.jpg"
                alt="Tiffany Tennant, founder of Tennant & Co Accountancy"
                fill
                sizes="(min-width: 768px) 320px, 90vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}
