"use client";

import Link from "next/link";
import Image from "next/image";
import { FiExternalLink, FiGithub, FiMessageSquare, FiFileText } from "react-icons/fi";

export default function ProjectCard({
  slug,
  title,
  description,
  stack = [],
  links = {},
  cover,
  isClient = false,
  clientName,
  testimonial
}) {
  return (
    <article
      className={[
        "relative rounded-2xl border border-black/10 dark:border-white/10",
        "backdrop-blur supports-[backdrop-filter]:bg-background/30",
        "shadow-sm transition-shadow hover:shadow-md focus-within:shadow-md"
      ].join(" ")}
    >
      {/* cover */}
      <div className="overflow-hidden rounded-t-2xl">
        {cover ? (
          <div className="relative aspect-[16/9]">
            <Image
              src={cover}
              alt={title}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
        ) : (
          <div className="flex aspect-[16/9] items-center justify-center text-muted-foreground">
            <span className="text-sm">sem imagem</span>
          </div>
        )}
      </div>

      {/* body */}
      <div className="p-5">
        <header className="mb-2 flex items-start gap-2">
          <h3 className="text-lg font-semibold leading-snug">{title}</h3>
          {isClient && (
            <span
              aria-label="Cliente real"
              className="ml-auto inline-flex shrink-0 items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium
                         ring-1 ring-emerald-400/30 text-emerald-700 bg-emerald-50
                         dark:text-emerald-200 dark:bg-emerald-900/30 dark:ring-emerald-700/30"
            >
              Cliente real
            </span>
          )}
        </header>

        <p className="mb-4 text-sm text-muted-foreground">{description}</p>

        {/* stack */}
        {stack?.length > 0 && (
          <ul className="mb-4 flex flex-wrap gap-2">
            {stack.map((t) => (
              <li
                key={t}
                className="rounded-full bg-muted/50 px-2.5 py-1 text-[11px] leading-none text-foreground/90"
              >
                {t}
              </li>
            ))}
          </ul>
        )}

        {/* links */}
        <div className="mb-4 flex flex-wrap gap-2">
          {links.repo && (
            <a
              href={links.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg ring-1 ring-border/40 px-3 py-1.5 text-sm hover:bg-accent/5
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              <FiGithub aria-hidden /> Código
            </a>
          )}
          {links.live && (
            <a
              href={links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg ring-1 ring-border/40 px-3 py-1.5 text-sm hover:bg-accent/5
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              <FiExternalLink aria-hidden /> Live
            </a>
          )}
          {slug && (
            <Link
              href={`/projects/${slug}`}
              className="inline-flex items-center gap-2 rounded-lg ring-1 ring-border/40 px-3 py-1.5 text-sm hover:bg-accent/5
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              <FiFileText aria-hidden /> Estudo de caso
            </Link>
          )}
        </div>

        {/* depoimento */}
        <section
          aria-label="Depoimento do cliente"
          className="rounded-2xl bg-muted/20 p-3 ring-1 ring-border/30"
        >
          <div className="mb-1 flex items-center gap-2 text-sm font-medium">
            <FiMessageSquare aria-hidden />
            <span>Feedback do cliente</span>
            {clientName && (
              <span className="text-xs text-muted-foreground">— {clientName}</span>
            )}
          </div>
          {testimonial ? (
            <blockquote className="text-sm leading-relaxed border-l-2 border-accent/40 pl-3">
              <span className="select-none text-xl">“</span>
              {testimonial}
              <span className="select-none text-xl">”</span>
            </blockquote>
          ) : (
            <p className="text-sm text-muted-foreground">Em breve.</p>
          )}
        </section>
      </div>
    </article>
  );
}
