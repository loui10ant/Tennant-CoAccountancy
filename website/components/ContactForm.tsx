"use client";

import { useState } from "react";
import Button from "@/components/Button";

const businessTypes = [
  "Sole trader",
  "Partnership",
  "Limited company",
  "Landlord",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  // TODO(Buildspec §8 item 3): no backend to submit to until the contact form
  // handling decision (third-party form service vs. a Cloudflare Pages
  // Function) is made — the static export has no server to post to itself.
  // This intentionally does not pretend to send the message.
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-lg border border-rule bg-paper-alt p-6 text-body text-ink"
      >
        Form submission isn&apos;t connected yet — please email or call us
        directly for now using the details above, and we&apos;ll get back to
        you within one working day.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div>
        <label htmlFor="name" className="block text-label uppercase tracking-[0.06em] text-ink-muted">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-2 w-full rounded-md border border-rule bg-paper px-4 py-3 text-body text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-900"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-label uppercase tracking-[0.06em] text-ink-muted">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-2 w-full rounded-md border border-rule bg-paper px-4 py-3 text-body text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-900"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-label uppercase tracking-[0.06em] text-ink-muted">
          Phone <span className="normal-case text-ink-muted/70">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="mt-2 w-full rounded-md border border-rule bg-paper px-4 py-3 text-body text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-900"
        />
      </div>

      <div>
        <label htmlFor="businessType" className="block text-label uppercase tracking-[0.06em] text-ink-muted">
          Business type
        </label>
        <select
          id="businessType"
          name="businessType"
          required
          defaultValue=""
          className="mt-2 w-full rounded-md border border-rule bg-paper px-4 py-3 text-body text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-900"
        >
          <option value="" disabled>
            Select one
          </option>
          {businessTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-label uppercase tracking-[0.06em] text-ink-muted">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-2 w-full rounded-md border border-rule bg-paper px-4 py-3 text-body text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-900"
        />
      </div>

      <Button type="submit">Send message</Button>
    </form>
  );
}
