"use client";

import { useEffect, useState } from "react";
import Button from "@/components/Button";

const GA_MEASUREMENT_ID = "G-Q1PD67N1PG";
const CONSENT_KEY = "cookie-consent";

function loadGoogleAnalytics() {
  if (document.getElementById("ga-script")) return;

  const script = document.createElement("script");
  script.id = "ga-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID);
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored === "accepted") {
      loadGoogleAnalytics();
    } else if (stored !== "rejected") {
      setVisible(true);
    }

    function openSettings() {
      setVisible(true);
    }
    window.addEventListener("open-cookie-settings", openSettings);
    return () => window.removeEventListener("open-cookie-settings", openSettings);
  }, []);

  function accept() {
    localStorage.setItem(CONSENT_KEY, "accepted");
    loadGoogleAnalytics();
    setVisible(false);
  }

  function reject() {
    localStorage.setItem(CONSENT_KEY, "rejected");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-rule bg-paper px-6 py-5 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] md:px-8">
      <div className="mx-auto flex max-w-content flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-small text-ink-muted">
          We&apos;d like to use Google Analytics to understand how visitors
          use this site. This sets cookies and is entirely optional — see
          our{" "}
          <a href="/privacy" className="text-green-900 underline hover:no-underline">
            Privacy Notice
          </a>{" "}
          for details.
        </p>
        <div className="flex shrink-0 gap-3">
          <Button type="button" variant="secondary" onClick={reject}>
            Reject
          </Button>
          <Button type="button" onClick={accept}>
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}
