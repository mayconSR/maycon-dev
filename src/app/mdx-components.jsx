export function useMDXComponents(components) {
  return {
    ...components,
    h1: (p) => <h1 {...p} className="mt-8 text-3xl md:text-4xl font-extrabold" />,
    h2: (p) => <h2 {...p} className="mt-8 text-2xl font-bold" />,
    h3: (p) => <h3 {...p} className="mt-6 text-xl font-semibold" />,
    p:  (p) => <p  {...p} className="mt-4 leading-relaxed opacity-90" />,
    ul: (p) => <ul {...p} className="mt-4 list-disc pl-6 space-y-1" />,
    ol: (p) => <ol {...p} className="mt-4 list-decimal pl-6 space-y-1" />,
    a:  (p) => <a  {...p} className="underline decoration-teal-500 hover:opacity-90" />,
    blockquote: (p) => (
      <blockquote {...p} className="mt-4 border-l-4 pl-4 italic opacity-80" />
    ),
    pre: (p) => (
      <pre {...p} className="mt-4 rounded-xl p-4 overflow-x-auto bg-black/90 text-white" />
    ),
    code: (p) => (
      <code {...p} className="rounded px-1.5 py-0.5 bg-black/10 dark:bg-white/10" />
    ),
    table: (p) => <table {...p} className="mt-4 border-collapse w-full text-sm" />,
    th: (p) => <th {...p} className="border-b p-2 text-left font-semibold" />,
    td: (p) => <td {...p} className="border-b p-2 align-top" />,
  };
}
