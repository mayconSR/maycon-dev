import ClientPost from "./ClientPost";

export const metadata = {
  title: "Lembrar de criar um jeito mais facil de criar posts",
  description: "criar um jeito melhor de criar posts",
  alternates: { canonical: "/blog/hello-world" },
};

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 md:py-16">
      <ClientPost />
    </article>
  );
}
