"use client";

import Link from "next/link";
import Image from "next/image";
import { trackEvent } from "../../lib/ga";
import { FiExternalLink, FiGithub, FiImage } from "react-icons/fi";

export default function ProjectCard({ project }) {
  const {
    slug,
    title,
    description,
    impact = [],
    stack = [],
    links = {},
    cover,
  } = project;

  function click(type) {
    trackEvent("project_click", {
      project_title: title,
      destination: type, // "live" | "repo"
    });
  }

  return (
    <article className="h-full rounded-2xl border border-black/10 dark:border-white/10 overflow-hidden bg-white/60 dark:bg-white/5 backdrop-blur">
      {/* Capa -> link para o estudo de caso */}
      <Link
        href={`/projects/${slug}`}
        className="relative block aspect-[16/9] bg-gradient-to-br from-black/5 to-black/10 dark:from-white/5 dark:to-white/10"
        aria-label={`Abrir estudo de caso: ${title}`}
      >
        {cover ? (
          <Image
            src={cover}
            alt="" /* decorativa */
            fill
            className="object-cover"
            sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
            priority={false}
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center opacity-50">
            <FiImage size={28} aria-hidden />
          </div>
        )}
      </Link>

      {/* Corpo */}
      <div className="p-4 md:p-5 flex flex-col gap-3">
        <h3 className="text-lg font-bold">
          <Link href={`/projects/${slug}`} className="hover:underline">
            {title}
          </Link>
        </h3>

        <p className="text-sm opacity-80">{description}</p>

        {/* “Impacto”/Qualidade (chips) */}
        {impact?.length > 0 && (
          <ul className="flex flex-wrap gap-2 text-xs opacity-80" aria-label="Destaques do projeto">
            {impact.map((it, i) => (
              <li key={i} className="px-2 py-1 rounded bg-black/5 dark:bg-white/10">
                {it}
              </li>
            ))}
          </ul>
        )}

        {/* Stack */}
        <ul className="mt-1 flex flex-wrap gap-2">
          {stack.map((t) => (
            <li
              key={t}
              className="px-2 py-1 rounded-full text-xs border border-black/10 dark:border-white/15"
            >
              {t}
            </li>
          ))}
        </ul>

        {/* Ações */}
        <div className="mt-2 flex gap-2">
          {links.live && links.live !== "#" && (
            <a
              href={links.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => click("live")}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-teal-600 text-white hover:opacity-90"
            >
              Live <FiExternalLink aria-hidden />
            </a>
          )}
          {links.repo && (
            <a
              href={links.repo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => click("repo")}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-black/10 dark:border-white/10"
            >
              Repo <FiGithub aria-hidden />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
