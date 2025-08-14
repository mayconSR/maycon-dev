"use client";

import Link from "next/link";

export default function LocaleSwitcher() {
  // hoje: pt-BR é o padrão (/) e EN é placeholder (/en)
  return (
    <div className="flex items-center gap-1 text-sm">
      <Link
        href="/"
        className="px-2 py-1 rounded border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10"
        aria-label="Switch to English (coming soon)"
      >
        PT
      </Link>
      <span className="opacity-50">/</span>
      <Link
        href="/en"
        className="px-2 py-1 rounded border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10"
        aria-label="Switch to English (coming soon)"
      >
        EN
      </Link>
    </div>
  );
}
