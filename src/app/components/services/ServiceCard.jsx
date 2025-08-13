"use client";

import { trackEvent } from "../../lib/ga";

export default function ServiceCard({ title, tagline, features = [], ctaHref = "/contact" }) {
  function click() {
    trackEvent("service_click", { service: title });
  }

  return (
    <article className="h-full rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur p-5 flex flex-col">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="mt-1 opacity-80">{tagline}</p>

      <ul className="mt-4 space-y-2 text-sm">
        {features.map((f, i) => (
          <li key={i} className="flex gap-2">
            <span aria-hidden>•</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-5">
        <a
          href={ctaHref}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-600 text-white hover:opacity-90"
          onClick={click}
        >
          Solicitar orçamento
        </a>
      </div>
    </article>
  );
}
