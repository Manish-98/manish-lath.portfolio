import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ProjectCard from "../../components/ProjectCard";
import projects from "../../data/projects";

export default function FeaturedProjects() {

  return (
    <section>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-primary">Projects</h2>
        <Link href="/projects" className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors duration-200 group">
          <span className="text-base font-medium">View All</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.slice(0, 2).map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}