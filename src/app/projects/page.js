import ProjectsClient from './ProjectsClient';
import projects from '../../data/projects';

const Projects = () => {
  return (
    <section className="max-w-4xl mx-auto p-8 bg-background">
      {/* Hero Section - Static content rendered on server */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-primary mb-2">
          What I've Been Building
        </h1>
        <p className="text-secondary text-lg">
          Showcasing a mix of passion projects, practical tools, and experiments in clean code and curiosity.
        </p>
      </div>

      {/* Client Component with projects data passed as props */}
      <ProjectsClient projects={projects} />
    </section>
  );
};

export default Projects;