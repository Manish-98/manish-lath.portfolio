import Link from "next/link";
import { ArrowRightFromLine } from "lucide-react";

const GithubIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github-icon lucide-github" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

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
            <GithubIcon className="w-4 h-4 text-accent transition-transform duration-200 group-hover:scale-125" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard; 