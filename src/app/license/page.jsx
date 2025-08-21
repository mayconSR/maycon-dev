export const metadata = {
  title: "Licenças — Maycon Dev",
  description:
    "Entenda como o código e o conteúdo deste site podem ser usados: MIT para o código, CC BY-NC 4.0 para o conteúdo.",
  alternates: { canonical: "/license" },
};

export default function LicensePage() {
  const year = new Date().getFullYear();

  return (
    <main id="content" className="container mx-auto max-w-4xl px-4 py-10">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Licenças
        </h1>
        <p className="mt-2 text-muted-foreground max-w-prose">
          Aqui explico o que você pode (e não pode) fazer com o{" "}
          <strong>código</strong> e com o <strong>conteúdo</strong> deste site.
        </p>
      </header>

      {/* Código (MIT) */}
      <section className="mb-8 rounded-2xl ring-1 ring-border/30 bg-background/40 backdrop-blur supports-[backdrop-filter]:bg-background/30 p-5">
        <h2 className="text-xl font-semibold">Código deste site</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          O código do projeto é licenciado sob{" "}
          <a
            className="underline hover:no-underline"
            href="https://opensource.org/license/mit"
            target="_blank"
            rel="noopener noreferrer"
          >
            MIT
          </a>
          . Isso significa que você pode usar, copiar, modificar e distribuir —
          inclusive em projetos comerciais — desde que mantenha o aviso de
          copyright e a licença.
        </p>
        <ul className="mt-3 list-disc pl-5 text-sm leading-7">
          <li>Permite uso pessoal e comercial</li>
          <li>Permite modificações e distribuição</li>
          <li>Sem garantias (software “como está”)</li>
          <li>Mantenha o aviso de copyright/licença ao redistribuir</li>
        </ul>
        <p className="mt-3 text-sm">
          Repositório:{" "}
          <a
            className="underline hover:no-underline"
            href="https://github.com/mayconSR/maycon-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/mayconSR/maycon-dev
          </a>
        </p>
      </section>

      {/* Conteúdo (CC) */}
      <section className="mb-8 rounded-2xl ring-1 ring-border/30 bg-background/40 backdrop-blur supports-[backdrop-filter]:bg-background/30 p-5">
        <h2 className="text-xl font-semibold">Conteúdo (textos e imagens)</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Os textos do blog e imagens autorais estão sob{" "}
          <a
            className="underline hover:no-underline"
            href="https://creativecommons.org/licenses/by-nc/4.0/deed.pt-br"
            target="_blank"
            rel="license noopener noreferrer"
          >
            Creative Commons BY-NC 4.0
          </a>{" "}
          (Atribuição — Não Comercial).
        </p>
        <ul className="mt-3 list-disc pl-5 text-sm leading-7">
          <li>
            <strong>Compartilhar/Adaptar:</strong> permitido, com crédito.
          </li>
          <li>
            <strong>Uso comercial:</strong> <em>não</em> permitido sem
            autorização prévia.
          </li>
          <li>
            <strong>Atribuição:</strong> inclua crédito e link para este site.
          </li>
        </ul>
        <div className="mt-3 rounded-xl bg-muted/20 p-3 text-sm">
          <p className="font-medium mb-1">Como creditar</p>
          <p className="text-muted-foreground">
            “Conteúdo de Maycon Silva Rodrigues —{" "}
            <a className="underline" href="https://maycondev.com.br">
              maycondev.com.br
            </a>{" "}
            — Licença CC BY-NC 4.0”.
          </p>
        </div>
      </section>

      {/* O que não está coberto */}
      <section className="mb-8 rounded-2xl ring-1 ring-border/30 bg-background/40 backdrop-blur supports-[backdrop-filter]:bg-background/30 p-5">
        <h2 className="text-xl font-semibold">Exceções</h2>
        <ul className="mt-2 list-disc pl-5 text-sm leading-7 text-muted-foreground">
          <li>Logotipo/identidade “Maycon Dev” e marcas de terceiros</li>
          <li>Imagens de banco ou de clientes (direitos permanecem com os donos)</li>
          <li>Qualquer material indicado no próprio arquivo como tendo outra licença</li>
        </ul>
      </section>

      {/* Contato / dúvidas */}
      <section className="rounded-2xl ring-1 ring-border/30 bg-background/40 backdrop-blur supports-[backdrop-filter]:bg-background/30 p-5">
        <h2 className="text-xl font-semibold">Dúvidas ou permissões extras</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Precisa de uso comercial do conteúdo, ou tem alguma dúvida específica?
          Fale comigo pela página{" "}
          <a className="underline hover:no-underline" href="/contact">
            /contact
          </a>
          .
        </p>
        <p className="mt-3 text-xs text-muted-foreground">
          © {year} Maycon Dev — “Alguns direitos reservados”: código sob MIT; conteúdo
          sob CC BY-NC 4.0.
        </p>
      </section>
    </main>
  );
}
