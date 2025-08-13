"use client";

import { useState } from "react";
import { FiLink, FiShare2 } from "react-icons/fi";

export default function ShareBar() {
  const [copied, setCopied] = useState(false);

  async function share() {
    const url = typeof window !== "undefined" ? window.location.href : "";
    if (navigator.share) {
      try {
        await navigator.share({ url });
      } catch {}
    } else {
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      } catch {}
    }
  }

  return (
    <div className="mt-8 flex gap-2">
      <button
        type="button"
        onClick={share}
        className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-black/10 dark:border-white/10"
      >
        <FiShare2 aria-hidden /> Compartilhar
      </button>
      <button
        type="button"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          } catch {}
        }}
        className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-black/10 dark:border-white/10"
      >
        <FiLink aria-hidden /> {copied ? "Link copiado!" : "Copiar link"}
      </button>
    </div>
  );
}