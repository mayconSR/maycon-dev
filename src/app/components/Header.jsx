"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import LocaleSwitcher from "./LocaleSwitcher";
import { FiTerminal, FiMenu, FiX } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const firstItemRef = useRef(null);

  // trava o scroll quando o painel estiver aberto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // ESC fecha + foco no primeiro link ao abrir
  useEffect(() => {
    if (open && firstItemRef.current) firstItemRef.current.focus();
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className="sticky top-0 z-20 bg-white/80 dark:bg-black/70
 md:backdrop-blur supports-[backdrop-filter]:md:bg-white/40
 dark:supports-[backdrop-filter]:md:bg-black/20"
    >
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <FiTerminal aria-hidden />
          <span>Maycon Dev</span>
        </Link>

        {/* DESKTOP (inalterado) */}
        <div className="ml-auto hidden md:flex items-center gap-3">
          <Link className="hover:underline" href="/projects">
            Projetos
          </Link>
          <Link className="hover:underline" href="/about">
            Sobre
          </Link>
          <Link className="hover:underline" href="/services">
            Serviços
          </Link>
          <Link className="hover:underline" href="/blog">
            Blog
          </Link>
          <Link className="hover:underline" href="/contact">
            Contato
          </Link>
          <LocaleSwitcher />
          <ThemeToggle />
        </div>

        {/* MOBILE: ações + hamburger */}
        <div className="ml-auto flex items-center gap-2 md:hidden">
          <LocaleSwitcher />
          <ThemeToggle />
          <button
            type="button"
            aria-label="Abrir menu"
            aria-controls="mobile-panel"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="rounded-lg p-2 hover:bg-black/5 dark:hover:bg-white/10"
          >
            <FiMenu aria-hidden />
          </button>
        </div>
      </nav>

      {/* MOBILE */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          id="mobile-panel"
          className="fixed inset-0 z-[80] md:hidden bg-white dark:bg-zinc-900"
        >
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-4 border-b border-black/10 dark:border-white/10">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 font-semibold"
            >
              <FiTerminal aria-hidden />
              <span>Maycon Dev</span>
            </Link>

            <div className="ml-auto flex items-center gap-2">
              <LocaleSwitcher />
              <ThemeToggle />
              <button
                type="button"
                aria-label="Fechar menu"
                onClick={() => setOpen(false)}
                className="rounded-lg p-2 hover:bg-black/5 dark:hover:bg-white/10"
              >
                <FiX aria-hidden />
              </button>
            </div>
          </div>

          <nav className="mx-auto max-w-6xl px-4 py-4 bg-white dark:bg-zinc-900">
            <ul className="flex flex-col gap-1">
              {[
                { href: "/projects", label: "Projetos" },
                { href: "/about", label: "Sobre" },
                { href: "/services", label: "Serviços" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contato" },
              ].map((item, idx) => (
                <li key={item.href}>
                  <Link
                    ref={idx === 0 ? firstItemRef : undefined}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2 text-base hover:bg-black/5 dark:hover:bg-white/10"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
