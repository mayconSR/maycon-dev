"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import LocaleSwitcher from "./LocaleSwitcher";
import { FiTerminal } from "react-icons/fi";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/40 dark:supports-[backdrop-filter]:bg-black/20">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <FiTerminal aria-hidden />
          <span>Maycon Dev</span>
        </Link>

        <div className="ml-auto flex items-center gap-3">
          <Link className="hover:underline" href="/blog">Blog</Link>
          <Link className="hover:underline" href="/projects">Projetos</Link>
          <Link className="hover:underline" href="/about">Sobre</Link>
          <Link className="hover:underline" href="/services">Serviços</Link>
          <Link className="hover:underline" href="/contact">Contato</Link>
          <LocaleSwitcher />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
