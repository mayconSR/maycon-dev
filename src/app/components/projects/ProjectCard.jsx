"use client";

import { trackEvent } from "../../lib/ga";
import { FiExternalLink, FiGithub, FiImage } from "react-icons/fi";
import Image from "next/image";

export default function ProjectCard({ project }) {
  const { title, description, impact = [], stack = [], links, cover } = project;

  function click(type) {
    trackEvent("project_click", {
      project_title: title,
      destination: type, // "live" | "repo"
    });
  }

  return (
    <article className="h-full rounded-2xl border border-black/10 dark:border-white/10 overflow-hidden bg-white/60 dark:bg-white/5 backdrop-blur">
      <div className="relative aspect-[16/9] bg-gradient-to-br from-black/5 to-black/10 dark:from-white/5 dark:to-white/10">
        {cover ? (
          <Image
            src={cover}
            alt=""
            fill
            priority={false}
            className="object-cover"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center opacity-50">
            <FiImage size={28} aria-hidden />
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-4 md:p-5 flex flex-col gap-3">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm opacity-80">{description}</p>

        {/* Impacto */}
        {impact?.length > 0 && (
          <ul className="flex flex-wrap gap-2 text-xs opacity-80">
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
            <li key={t} className="px-2 py-1 rounded-full text-xs border border-black/10 dark:border-white/15">
              {t}
            </li>
          ))}
        </ul>

        {/* Ações */}
        <div className="mt-2 flex gap-2">
          {links?.live && links.live !== "#" && (
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
          {links?.repo && (
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
