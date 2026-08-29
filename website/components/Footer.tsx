"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-rule bg-green-100 py-8">
      <div className="mx-auto max-w-content px-6 text-center text-small text-ink-muted md:px-8">
        <p>© {new Date().getFullYear()} Tennant &amp; Co Accountancy Limited</p>
        <p className="mt-1">
          Company No. 17002564 · Registered office: 4 Grovelands, Boundary
          Way, Hemel Hempstead, Hertfordshire, HP2 7TE
        </p>
        <p className="mt-3 flex items-center justify-center gap-4">
          <Link href="/privacy" className="hover:text-green-900">
            Privacy Notice
          </Link>
          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}
            className="hover:text-green-900 hover:underline"
          >
            Cookie settings
          </button>
        </p>
      </div>
    </footer>
  );
}
