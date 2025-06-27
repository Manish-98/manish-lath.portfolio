import ProjectCard from "../../components/Home/ProjectCard";
import projects from "../../data/projects";

const Projects = () => {
  return (
    <section className="max-w-4xl mx-auto p-8 bg-background">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-primary mb-2">
          What I've Been Building & Thinking
        </h1>
        <p className="text-secondary text-lg">
          Full-stack developer crafting elegant solutions to complex problems. I build with modern 
          technologies and write about my journey.
        </p>
      </div>

      {/* Recent Projects Section */}
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-primary">Recent Projects</h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;