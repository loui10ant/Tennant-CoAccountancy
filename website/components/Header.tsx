"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-content items-center justify-between px-6 md:h-24 md:px-8">
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo-icon.png"
            alt="Tennant & Co Accountancy"
            width={1200}
            height={867}
            priority
            className="h-11 w-auto md:hidden"
          />
          <Image
            src="/images/logo-full.png"
            alt="Tennant & Co Accountancy"
            width={3125}
            height={1875}
            priority
            className="hidden h-20 w-auto md:block"
          />
        </Link>

        <nav className="hidden md:block" aria-label="Primary">
          <ul className="flex items-center gap-10 text-body font-medium text-ink">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors duration-150 hover:text-green-900">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-ink md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden="true" className="text-2xl leading-none">
            {menuOpen ? "✕" : "☰"}
          </span>
        </button>
      </div>

      {menuOpen && (
        <nav id="mobile-nav" aria-label="Primary" className="border-t border-rule bg-paper md:hidden">
          <ul className="flex flex-col px-6 py-4 text-body font-medium text-ink">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-3 transition-colors duration-150 hover:text-green-900"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
