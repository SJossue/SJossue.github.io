import type { Project } from "@/data/projects";

export function getProjectBySlug(
  slug: string,
  projects: Project[]
): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(
  slug: string,
  projects: Project[]
): { prev: Project; next: Project } {
  const index = projects.findIndex((p) => p.slug === slug);
  const prevIndex = index > 0 ? index - 1 : projects.length - 1;
  const nextIndex = index < projects.length - 1 ? index + 1 : 0;

  return {
    prev: projects[prevIndex],
    next: projects[nextIndex],
  };
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
