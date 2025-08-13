// app/blog/page.jsx
import Link from "next/link";
import { posts } from "./posts-index";

export const metadata = {
  title: "Blog — Maycon Dev",
  description: "Anotações curtas sobre React, Next.js, A11y e performance.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const sorted = [...posts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <h1 className="text-3xl md:text-5xl font-extrabold">Blog</h1>
      <p className="mt-3 max-w-2xl text-black/70 dark:text-white/70">
        Conteúdo enxuto, direto ao ponto — feito para recrutadores e devs.
      </p>

      <ul className="mt-8 space-y-4">
        {sorted.map((p) => (
          <li key={p.slug} className="rounded-2xl border border-black/10 dark:border-white/10 p-5 bg-white/60 dark:bg-white/5 backdrop-blur">
            <article>
              <h2 className="text-xl md:text-2xl font-bold">
                <Link href={`/blog/${p.slug}`} className="hover:underline">
                  {p.title}
                </Link>
              </h2>
              <p className="mt-2 opacity-80">{p.description}</p>
              <div className="mt-3 text-sm opacity-70 flex flex-wrap gap-3">
                <time dateTime={p.date}>{new Date(p.date).toLocaleDateString("pt-BR")}</time>
                {p.readingTime && <span>· {p.readingTime}</span>}
                {p.tags?.length > 0 && (
                  <span>· {p.tags.join(" • ")}</span>
                )}
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
