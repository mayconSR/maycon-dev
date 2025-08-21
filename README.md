# Maycon Dev — Portfólio

Site/portfólio do **Maycon Silva Rodrigues** (Front-end React).  
Feito com **Next.js 15 + Tailwind**, tema **claro/escuro**, **acessibilidade** e **SEO**.

🟢 **Deploy**: https://maycondev.com.br

---

## Visão geral
Portfólio focado em **clareza**, **performance** e **credibilidade** para recrutadores e clientes.  
Visual moderno com fundo leve animado, **React Icons**, conteúdo em **PT‑BR** (EN em breve) e um **blog** (MDX) para artigos técnicos.

---

## Destaques
- 🌓 Tema **claro/escuro** com `next-themes`
- 📱 Header responsivo com **menu mobile** (painel único) — visual do desktop preservado
- 📌 Footer “sticky” (colado ao fim) mesmo em páginas curtas
- ♿ **Acessibilidade**: skip link, navegação por teclado, foco visível, semântica
- 🔎 **SEO**: metadados por página, `sitemap.xml`, `robots.txt`, OG/Twitter, canonical
- 🧩 **Projetos** com **estudo de caso** (ex.: **Bpainting** — cliente real + espaço para depoimento)
- ✍️ **Blog (MDX)** — versão inicial para impressionar recrutadores
- 📈 **GA4** para eventos (cliques/CTA)
- 📬 **Form de contato** com honeypot, rate‑limit e envio por **API própria** (detalhes privados)

> Observação: detalhes de infraestrutura/back-end do formulário são privados e **não** são expostos no repositório público.

---

## Stack
- **Next.js 15.4.6** (App Router)
- **React 18**
- **Tailwind CSS**
- **react-icons**
- **next-themes**
- **MDX**: `@next/mdx` + `@mdx-js/react` (wrapper provisório para compatibilidade com RSC)
- **Vercel** (deploy)
- **Google Analytics 4**

---

## Como rodar localmente
> Requer **Node 18+**.

```bash
# instalar dependências
npm i

# desenvolvimento
npm run dev

# build de produção
npm run build

# servir build
npm start
```

### Ambiente (`.env.local`)
Crie um arquivo `.env.local` na raiz com as variáveis necessárias:

```ini
# Google Analytics 4
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Endpoint da API de contato (privado).
# Informe a URL da sua API (não é versionado aqui).
CONTACT_ENDPOINT=<sua_api_de_contato>
# Opcional: chave se a API exigir
CONTACT_API_KEY=
```

> O app usa um **proxy em /api/contact** para encaminhar a requisição ao endpoint configurado via env. O endereço real do back‑end **não é exposto** no repositório.

---

## Estrutura
```
src/
  app/
    license/
      page.jsx            # Licenças (MIT p/ código, CC BY-NC p/ conteúdo)
    blog/
      page.jsx            # Índice
      (posts)/
        hello-world/
          page.jsx        # wrapper do post
          content.mdx     # conteúdo MDX
    projects/
      projects.data.js    # dados dos projetos/cases
      [slug]/
        page.jsx          # página de estudo de caso
      page.jsx            # grade de projetos
    services/
      page.jsx
    about/
      page.jsx
    contact/
      page.jsx            # formulário (integra com /api/contact)
    api/contact/
      route.js            # proxy → CONTACT_ENDPOINT
    sitemap.js            # inclui rotas estáticas + /projects/[slug]
  components/
    Header.jsx            # header com drawer mobile (visual igual ao desktop)
    Footer.jsx            # sticky footer
    ThemeToggle.jsx
    LocaleSwitcher.jsx
    ProjectCard.jsx
public/
  projects/
    bpainting-cover.jpg
```

---

## Páginas & Funcionalidades
- **/** Home — hero com fundo leve animado.
- **/about** — linhas suaves, tipografia consistente.
- **/services** — linguagem acessível (single page, múltiplas páginas etc.).
- **/projects** — cards com stack, links e “Feedback do cliente”.
- **/projects/[slug]** — estudo de caso (Problema → Contexto → Objetivos → Abordagem → Solução → Resultados) + depoimento.
- **/blog** — posts em MDX (wrapper `.jsx` temporário para evitar erro de `createContext` em RSC).
- **/contact** — formulário com validação, honeypot e integração via `/api/contact` (proxy).
- **/license** — Código MIT; Conteúdo CC BY‑NC 4.0; exceções e como creditar.

---

## SEO & A11y
- **Acessibilidade**: landmarks, skip link, foco visível, teclado, contraste.
- **SEO**: `metadata` por página, `sitemap.js`, `robots.txt`, OG/Twitter.
- **Performance**: `next/image`, `next/font`, páginas estáticas quando possível.

---

## Roadmap
- [ ] Botão “Voltar” nos posts do blog
- [ ] SSR direto em `page.mdx` (remover wrapper quando viável)
- [ ] Versão EN (i18n)
- [ ] OG Image dinâmica para `/projects/[slug]`
- [ ] Depoimento real da **Bpainting**
- [ ] Métricas GA4 adicionais (engajamento/funil do contato)
- [ ] Thumbs/cover para todos os projetos

---

## Licenças
- **Código**: MIT — ver página [/license] e arquivo `LICENSE` na raiz
- **Conteúdo (textos/imagens autorais)**: CC BY‑NC 4.0
- **Exceções**: logotipos/marcas e imagens de terceiros mantêm seus próprios direitos

---

## Contribuição & Feedback
Sinta-se à vontade para abrir issues/sugestões. Feedback é muito bem‑vindo!
