import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { getProjectBySlug, getAdjacentProjects } from "@/lib/utils";
import { ProjectCaseStudy } from "@/components/work/ProjectCaseStudy";

type PageProps = {
  params: Promise<{ slug: string }>;
};

// Generate static params for all projects (required for static export)
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Generate metadata for each project page
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug, projects);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Jossue Sarango`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug, projects);

  if (!project) {
    notFound();
  }

  const { prev, next } = getAdjacentProjects(slug, projects);

  return <ProjectCaseStudy project={project} prevProject={prev} nextProject={next} />;
}
