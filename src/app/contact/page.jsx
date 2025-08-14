"use client";

import { useState } from "react";
import { trackEvent } from "../lib/ga";
import { FiSend } from "react-icons/fi";

export const metadata = {
  title: "Contato — Maycon Dev",
  description: "Fale comigo sobre seu projeto.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const [state, setState] = useState({ loading: false, ok: false, error: "" });

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    if (data._hp) return;

    setState({ loading: true, ok: false, error: "" });

    try {
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!r.ok) throw new Error("Falha no envio");
      setState({ loading: false, ok: true, error: "" });
      trackEvent("contact_submit", { origin: "contact_page" });
      form.reset();
    } catch (err) {
      setState({ loading: false, ok: false, error: "Não foi possível enviar. Tente novamente." });
    }
  }

  return (
    <section className="mx-auto max-w-3xl px-4 py-12 md:py-16">
      <h1 className="text-3xl md:text-5xl font-extrabold">Contato</h1>
      <p className="mt-3 text-black/70 dark:text-white/70">
        Me conte rapidamente sobre seu projeto. Eu retorno por e-mail.
      </p>

      <form onSubmit={onSubmit} className="mt-8 space-y-4">
        {/* Honeypot invisível para bots */}
        <label className="sr-only">Não preencha</label>
        <input name="_hp" className="hidden" tabIndex={-1} autoComplete="off" />

        <div>
          <label className="block text-sm font-medium">Seu nome</label>
          <input name="name" required className="mt-1 w-full px-3 py-2 rounded-xl border border-black/10 dark:border-white/15 bg-white/70 dark:bg-white/5" />
        </div>

        <div>
          <label className="block text-sm font-medium">E-mail</label>
          <input name="email" type="email" required className="mt-1 w-full px-3 py-2 rounded-xl border border-black/10 dark:border-white/15 bg-white/70 dark:bg-white/5" />
        </div>

        <div>
          <label className="block text-sm font-medium">Mensagem</label>
          <textarea name="message" rows={5} required className="mt-1 w-full px-3 py-2 rounded-xl border border-black/10 dark:border-white/15 bg-white/70 dark:bg-white/5" />
        </div>

        <button
          type="submit"
          disabled={state.loading}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-teal-600 text-white hover:opacity-90 disabled:opacity-60"
        >
          <FiSend aria-hidden />
          {state.loading ? "Enviando..." : "Enviar"}
        </button>

        {state.ok && (
          <p className="text-teal-600 dark:text-teal-400">Recebi seu contato! Obrigado.</p>
        )}
        {state.error && <p className="text-red-600">{state.error}</p>}
      </form>

      <p className="mt-8 text-sm opacity-70">
        Prefere direto? <a className="underline decoration-teal-500" href="mailto:contato@maycondev.com.br">contato@maycondev.com.br</a>
      </p>
    </section>
  );
}
