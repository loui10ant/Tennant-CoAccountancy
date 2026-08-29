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

// Buildspec §8 item 3 — static export has no server to post to itself, so
// submissions go straight to Web3Forms from the browser.
const WEB3FORMS_ACCESS_KEY = "5623e84f-d6ce-4666-82fe-2d1ee28759f7";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "submitted" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New enquiry from tennantandco.co.uk");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      setStatus(result.success ? "submitted" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "submitted") {
    return (
      <div
        role="status"
        className="rounded-lg border border-rule bg-paper-alt p-6 text-body text-ink"
      >
        Thanks — your message has been sent. We&apos;ll get back to you
        within one working day.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

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

      {status === "error" && (
        <p role="alert" className="text-body text-ink">
          Something went wrong sending your message — please email or call
          us directly using the details above.
        </p>
      )}

      <Button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
