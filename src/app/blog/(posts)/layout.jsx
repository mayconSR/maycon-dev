import ShareBar from "../../components/blog/ShareBar";

export default function PostLayout({ children }) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 md:py-16">
      <div className="prose dark:prose-invert max-w-none">{children}</div>
      <ShareBar />
    </article>
  );
}
