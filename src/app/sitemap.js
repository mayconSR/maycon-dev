import { SITE_URL } from "./lib/seo";
import projects from "./data/projects";
import { posts } from "./app/blog/posts-index";

export default async function sitemap() {
  const now = new Date();

  const staticRoutes = ["", "/projects", "/about", "/services", "/blog", "/contact"]
    .map((p) => ({
      url: `${SITE_URL}${p || "/"}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: p === "" ? 1 : 0.7,
    }));

  const projectRoutes = projects.map((p) => ({
    url: `${SITE_URL}/projects/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const blogRoutes = posts.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: p.date ? new Date(p.date) : now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes, ...blogRoutes];
}
