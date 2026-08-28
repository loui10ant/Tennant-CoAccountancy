import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import { LinkButton } from "@/components/Button";

export default function NotFound() {
  return (
    <>
      <Header />

      <main>
        <Section className="text-center">
          <p className="text-label font-medium uppercase tracking-[0.06em] text-green-900">
            404
          </p>
          <h1 className="mt-3 font-serif text-h1 font-semibold text-ink">
            Page not found
          </h1>
          <p className="mx-auto mt-4 max-w-[42ch] text-body-lg text-ink-muted">
            The page you&apos;re looking for doesn&apos;t exist or may have
            moved.
          </p>
          <div className="mt-8">
            <LinkButton href="/">Back to home</LinkButton>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}
