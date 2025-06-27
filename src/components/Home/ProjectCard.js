import Link from "next/link";
import { ArrowRightFromLine, Code2 } from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <div className="card">
      {/* Project Title */}
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-xl font-semibold text-primary">{project.title}</h3>
        {project.website && (
          <Link
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-accent hover:underline ml-2"
            aria-label={`Visit ${project.title} website`}
          >
            <ArrowRightFromLine className="w-4 h-4" />
          </Link>
        )}
      </div>

      {/* Project Description */}
      <p className="text-secondary leading-relaxed mb-4">
        {project.description}
      </p>

      <div className="flex justify-between items-center">
        {/* Technology Tags */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-section text-accent text-sm rounded-md border border-accent"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* GitHub Link */}
        {project.github && (
          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors duration-200 group"
            aria-label={`View ${project.title} on GitHub`}
          >
            <Code2 className="w-4 h-4" color='var(--accent)' />
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard; 