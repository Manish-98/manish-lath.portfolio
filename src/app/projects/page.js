import ProjectsClient from './ProjectsClient';
import { portfolioData } from '@/data/portfolio';

const Projects = () => {
  const { projectsPage, projects } = portfolioData;

  return (
    <section className="max-w-4xl mx-auto p-8 bg-background">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-primary mb-2">
          {projectsPage.title}
        </h1>
        <p className="text-secondary text-lg">
          {projectsPage.description}
        </p>
      </div>

      <ProjectsClient projects={projects} searchConfig={projectsPage.search} sectionTitle={projectsPage.sectionTitle} />
    </section>
  );
};

export default Projects;
