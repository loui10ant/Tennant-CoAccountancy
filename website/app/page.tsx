import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ValuePillar from "@/components/ValuePillar";
import { LinkButton } from "@/components/Button";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Buildspec §8 item 4: headline and subhead are draft copy pending
            Tiffany's approval — using one of the brief's two example
            directions verbatim, not final. This green landing panel is
            homepage-only, per the request for the logo and brand colour to
            be the first thing a visitor sees. */}
        <section className="bg-green-900 py-20 text-paper md:py-32">
          <Container className="flex flex-col items-center gap-8 text-center">
            <Image
              src="/images/logo-full.png"
              alt="Tennant & Co Accountancy"
              width={3125}
              height={1875}
              priority
              className="h-40 w-auto brightness-0 invert md:h-72"
            />
            <h1 className="max-w-[20ch] font-serif text-display font-semibold tracking-[-0.02em]">
              Reliable bookkeeping and software training from a Chartered
              Accountant.
            </h1>
            <p className="max-w-[42ch] text-body-lg text-paper/85">
              Helping sole traders and limited companies spend less time on
              paperwork and more time running their business.
            </p>
            <LinkButton href="/contact" variant="inverse">
              Book a free consultation
            </LinkButton>
          </Container>
        </section>

        <Section alt>
          <SectionHeading
            eyebrow="Services"
            title="What we do"
            lede="Three services, done properly, rather than a long list done thinly."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <ServiceCard
              title="Bookkeeping"
              description="Ongoing bookkeeping for sole traders, partnerships, limited companies and landlords, including MTD for ITSA."
            />
            <ServiceCard
              title="Software training"
              description="Hands-on Xero, QuickBooks and Sage training so you can run your own books with confidence."
            />
            <ServiceCard
              title="VAT returns"
              description="VAT return preparation and submission, kept accurate and on time."
            />
          </div>
        </Section>

        <Section>
          <SectionHeading title="Why clients choose Tennant & Co" />
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <ValuePillar
              title="Reliable"
              description="Deadlines are met and questions get answered — every time, not just when it's convenient."
            />
            <ValuePillar
              title="Attention to detail"
              description="Books are checked properly, not rushed, so small errors don't become expensive ones."
            />
            <ValuePillar
              title="Flexible"
              description="Working arrangements fit around your business, not the other way round."
            />
            <ValuePillar
              title="Approachable"
              description="Plain-English explanations, with no jargon and no judgement."
            />
          </div>
        </Section>

        <Section tint="green-100">
          <div className="grid gap-8 md:grid-cols-[2fr_1fr] md:items-center">
            <div>
              <SectionHeading
                eyebrow="About"
                title="Tiffany Tennant ACA"
                lede="Qualified as a Chartered Accountant in January 2023, before founding Tennant & Co in April 2026."
              />
              <div className="mt-6">
                <LinkButton href="/about" variant="secondary">
                  About Tiffany
                </LinkButton>
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

        <Section>
          <SectionHeading
            eyebrow="Get in touch"
            title="Free 30-minute consultation"
            lede="No obligation — a chance to talk through what you need before anything is agreed."
          />
          <div className="mt-6 space-y-1 text-body-lg text-ink">
            <p>
              <a href="mailto:tiffany@tennantandco.co.uk" className="hover:text-green-900">
                tiffany@tennantandco.co.uk
              </a>
            </p>
            <p>
              <a href="tel:01296821478" className="hover:text-green-900">
                01296 821478
              </a>
            </p>
          </div>
          <div className="mt-8">
            <LinkButton href="/contact">Book a free consultation</LinkButton>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}
