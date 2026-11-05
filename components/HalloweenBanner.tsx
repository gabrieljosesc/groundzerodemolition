"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { isPromoActive, site } from "@/lib/site";

const DISMISS_KEY = "gz-halloween-dismissed";

export function HalloweenBanner() {
  // Rendered on the server (and first client render) so it's part of the first
  // paint — no layout shift. After mount we hide it if the promo has ended
  // (per viewer's clock) or it was dismissed in this browser.
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let hide = !isPromoActive();
    try {
      if (localStorage.getItem(DISMISS_KEY) === "1") hide = true;
    } catch {
      /* ignore */
    }
    if (hide) setHidden(true);
  }, []);

  if (!site.promo.enabled || hidden) return null;

  const dismiss = () => {
    setHidden(true);
    try {
      localStorage.setItem(DISMISS_KEY, "1");
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="promo-bar" role="region" aria-label="Seasonal promotion">
      <Link href={site.promo.href} className="promo-bar__content">
        <span className="promo-bar__emoji" aria-hidden="true">
          {site.promo.emoji}
        </span>
        <span className="promo-bar__text">
          <strong>{site.promo.title}:</strong> {site.promo.text}
        </span>
        <span className="promo-bar__cta">{site.promo.cta} →</span>
      </Link>
      <button
        className="promo-bar__close"
        aria-label="Dismiss promotion"
        onClick={dismiss}
      >
        ✕
      </button>
    </div>
  );
}
