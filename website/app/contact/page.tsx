import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";

const title = "Contact | Tennant & Co Accountancy";
const description =
  "Get in touch for a free 30-minute consultation with Tennant & Co Accountancy.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url: "/contact" },
  twitter: { title, description },
};

export default function ContactPage() {
  return (
    <>
      <Header />

      <main>
        <Section>
          <SectionHeading
            as="h1"
            eyebrow="Contact"
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
        </Section>

        <Section alt>
          <div className="max-w-xl">
            <ContactForm />
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}
