"use client";

import { useEffect } from "react";

const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT || "";

export default function AdBanner({ slot, label = "Espace publicitaire" }) {
  useEffect(() => {
    if (!ADSENSE_CLIENT || !slot) return;

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // AdSense can throw during hydration or blocked-network scenarios.
    }
  }, [slot]);

  if (!ADSENSE_CLIENT || !slot) {
    return (
      <div className="ad-slot" aria-label={label}>
        <span className="ad-placeholder">Espace AdSense</span>
      </div>
    );
  }

  return (
    <div className="ad-slot ad-live" aria-label={label}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
