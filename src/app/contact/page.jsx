import ContactForm from "../components/contact/ContactForm";

export const metadata = {
  title: "Contato — Maycon Dev",
  description: "Fale comigo sobre seu projeto.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12 md:py-16">
      <h1 className="text-3xl md:text-5xl font-extrabold">Contato</h1>
      <p className="mt-3 text-black/70 dark:text-white/70">
        Me conte rapidamente sobre seu projeto. Eu retorno por e-mail.
      </p>

      <ContactForm />

      <p className="mt-8 text-sm opacity-70">
        Prefere direto? <a className="underline decoration-teal-500" href="mailto:dev.mayconrodrigues@gmail.com">dev.mayconrodrigues@gmail.com</a>
      </p>
    </section>
  );
}
