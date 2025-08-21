export default async function sitemap() {
  const baseUrl = "https://maycondev.com.br";

  let projects = [];
  try {
    const mod = await import("./projects/projects.data");
    projects = mod.projects || [];
  } catch {
  }

  const staticEntries = [
    { url: `${baseUrl}/`,            changeFrequency: "weekly",  priority: 1.0 },
    { url: `${baseUrl}/about`,       changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/services`,    changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/projects`,    changeFrequency: "weekly",  priority: 0.8 },
    { url: `${baseUrl}/contact`,     changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/blog`,        changeFrequency: "weekly",  priority: 0.6 },
  ];

  const projectEntries = projects
    .filter(p => p?.slug)
    .map(p => ({
      url: `${baseUrl}/projects/${p.slug}`,
      changeFrequency: "monthly",
      priority: 0.6,
    }));

  return [...staticEntries, ...projectEntries];
}
