import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { LinkButton } from "@/components/Button";

const title = "Services | Tennant & Co Accountancy";
const description =
  "Bookkeeping, VAT returns and Xero/QuickBooks/Sage software training for sole traders, partnerships, limited companies and landlords.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url: "/services" },
  twitter: { title, description },
};

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main>
        <Section>
          <SectionHeading
            as="h1"
            eyebrow="Services"
            title="Bookkeeping, VAT returns and software training"
            lede="Three services, done properly, for sole traders, partnerships, limited companies, LLPs and landlords."
          />
        </Section>

        <Section alt>
          <div className="max-w-[68ch]">
            <h2 className="font-serif text-h2 font-semibold text-ink">
              Bookkeeping
            </h2>
            <p className="mt-4 text-body text-ink-muted">
              What it is: ongoing, accurate bookkeeping — kept up to date
              rather than reconstructed at year end.
            </p>
            <p className="mt-3 text-body text-ink-muted">
              Who it&apos;s for: sole traders, partnerships, limited
              companies, LLPs and landlords.
            </p>
            <p className="mt-3 text-body text-ink-muted">
              What&apos;s included: day-to-day bookkeeping, as well as
              submissions for Making Tax Digital for Income Tax Self
              Assessment (MTD for ITSA) for those affected by the new
              digital record-keeping rules.
            </p>
          </div>
        </Section>

        <Section>
          <div className="max-w-[68ch]">
            <h2 className="font-serif text-h2 font-semibold text-ink">
              Software training
            </h2>
            <p className="mt-4 text-body text-ink-muted">
              What it is: hands-on training in Xero, QuickBooks and Sage, so
              you can manage your own books with confidence day to day.
            </p>
            <p className="mt-3 text-body text-ink-muted">
              Who it&apos;s for: business owners and staff who want to run
              their bookkeeping in-house rather than outsource it entirely.
            </p>
            <p className="mt-3 text-body text-ink-muted">
              What&apos;s included: setup guidance and one-to-one training
              sessions tailored to how your business actually works.
            </p>
          </div>
        </Section>

        <Section alt>
          <div className="max-w-[68ch]">
            <h2 className="font-serif text-h2 font-semibold text-ink">
              VAT returns
            </h2>
            <p className="mt-4 text-body text-ink-muted">
              What it is: VAT return preparation and submission.
            </p>
            <p className="mt-3 text-body text-ink-muted">
              Who it&apos;s for: VAT-registered sole traders, partnerships
              and limited companies.
            </p>
            <p className="mt-3 text-body text-ink-muted">
              What&apos;s included: return preparation, review and timely
              submission.
            </p>
          </div>
        </Section>

        <Section>
          <SectionHeading
            title="Ready to talk?"
            lede="Don't see the exact service you need? Get in touch — we may still be able to help."
          />
          <div className="mt-6">
            <LinkButton href="/contact">Book a free consultation</LinkButton>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}
