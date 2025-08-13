"use client";

import { useMemo, useState } from "react";
import { FiFilter, FiSearch, FiX } from "react-icons/fi";
import ProjectCard from "./ProjectCard";

export default function ProjectsView({ initialProjects }) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(new Set()); // tags ativas (stack)

  const allTags = useMemo(() => {
    const set = new Set();
    for (const p of initialProjects) p.stack.forEach((t) => set.add(t));
    return Array.from(set).sort();
  }, [initialProjects]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return initialProjects.filter((p) => {
      const matchesText =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.stack.join(" ").toLowerCase().includes(q);

      const matchesTags =
        active.size === 0 ||
        p.stack.some((t) => active.has(t));

      return matchesText && matchesTags;
    });
  }, [initialProjects, query, active]);

  function toggleTag(tag) {
    const next = new Set(active);
    next.has(tag) ? next.delete(tag) : next.add(tag);
    setActive(next);
  }

  function clearFilters() {
    setQuery("");
    setActive(new Set());
  }

  return (
    <div className="mt-8">
      {/* Toolbar */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        {/* Busca */}
        <label className="relative block max-w-lg w-full">
          <span className="sr-only">Buscar projetos</span>
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2" aria-hidden />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por nome, descrição ou stack…"
            className="w-full pl-10 pr-3 py-2 rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur"
            type="search"
          />
        </label>

        {/* Filtros por tag */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-2 text-sm opacity-70">
            <FiFilter aria-hidden /> Filtrar por stack:
          </span>
          {allTags.map((tag) => {
            const pressed = active.has(tag);
            return (
              <button
                key={tag}
                type="button"
                aria-pressed={pressed}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1.5 rounded-full border text-sm transition
                  ${pressed
                    ? "bg-teal-600 text-white border-teal-600"
                    : "border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10"
                  }`}
              >
                {tag}
              </button>
            );
          })}
          {(active.size > 0 || query) && (
            <button
              type="button"
              onClick={clearFilters}
              className="ml-1 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm border border-black/10 dark:border-white/15"
            >
              <FiX aria-hidden /> Limpar
            </button>
          )}
        </div>
      </div>

      {/* Grid */}
      <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {filtered.map((p) => (
          <li key={p.id}>
            <ProjectCard project={p} />
          </li>
        ))}
        {filtered.length === 0 && (
          <li className="col-span-full p-6 rounded-xl border border-black/10 dark:border-white/10 text-center opacity-80">
            Nenhum projeto encontrado com esses filtros.
          </li>
        )}
      </ul>
    </div>
  );
}
