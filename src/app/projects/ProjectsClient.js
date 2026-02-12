'use client';

import SearchableGrid from '../../components/SearchableGrid';
import ProjectCard from '../../components/ProjectCard';

const ProjectsClient = ({ projects, searchConfig, sectionTitle }) => {
  const renderProject = (project, idx) => (
    <ProjectCard key={`${project.title}-${idx}`} project={project} />
  );

  return (
    <SearchableGrid
      data={projects}
      renderItem={renderProject}
      searchConfig={searchConfig}
      title={sectionTitle}
      gridClassName="grid grid-cols-1 lg:grid-cols-2 gap-8"
    />
  );
};

export default ProjectsClient;
