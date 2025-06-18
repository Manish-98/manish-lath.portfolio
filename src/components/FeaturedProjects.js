import { ArrowRight, Github } from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-section rounded-2xl border border-border p-6 hover:border-accent-primary transition-colors duration-200">
      {/* Project Title */}
      <h3 className="text-xl font-semibold text-white mb-2">
        {project.title}
      </h3>

      {/* Project Description */}
      <p className="text-text-secondary leading-relaxed mb-2 text-justify">
        {project.description}
      </p>

      <div className="flex justify-between items-center">
        {/* GitHub Link */}
        <button className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors duration-200 group">
          <Github className="w-4 h-4" />
        </button>

        {/* Technology Tags */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-section text-accent-primary text-sm rounded-md border border-border"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function FeaturedProjects() {
  const projects = [
    {
      title: "Distributed Cache Engine",
      description: "High-performance distributed caching system with consistent hashing and automatic failover. Reduced query times by 85% across microservices.",
      technologies: ["Go", "Redis", "Docker"],
      githubUrl: "#"
    },
    {
      title: "Historical Data Pipeline",
      description: "ETL pipeline processing archaeological datasets with ML pattern recognition. Handles 10M+ records with sub-second query performance.",
      technologies: ["Python", "PostgreSQL", "Apache Kafka"],
      githubUrl: "#"
    }
  ];

  return (
    <section>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-text-primary">Featured Projects</h2>
        <button className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-hover transition-colors duration-200 group">
          <span className="text-base font-medium">View All Projects</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}