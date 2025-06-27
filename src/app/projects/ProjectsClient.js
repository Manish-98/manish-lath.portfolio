'use client';

import SearchableGrid from '../../components/SearchableGrid';
import ProjectCard from '../../components/ProjectCard';

const ProjectsClient = ({ projects }) => {
  const projectSearchConfig = {
    fields: ['title', 'description', 'technologies'],
    weights: { 
      title: 100, 
      technologies: 50, 
      description: 25 
    },
    placeholder: 'Search projects...',
    noResultsTitle: 'No projects found',
    noResultsSubtitle: 'Try searching for technologies like "Next.js", "JavaScript", or project names'
  };

  const renderProject = (project, idx) => (
    <ProjectCard key={`${project.title}-${idx}`} project={project} />
  );

  return (
    <SearchableGrid
      data={projects}
      renderItem={renderProject}
      searchConfig={projectSearchConfig}
      title="Recent Projects"
      gridClassName="grid grid-cols-1 lg:grid-cols-2 gap-8"
    />
  );
};

export default ProjectsClient;