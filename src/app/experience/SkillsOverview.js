import React from 'react';
import SkillsWithSearch from './SkillsWithSearch.js';
import { portfolioData } from '@/data/portfolio';
import portfolio from '@/data/portfolio.json';

const SkillsOverview = () => {
  return (
    <div className="max-w-6xl mx-auto p-8 bg-background">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-8">
          {portfolioData.experiencePage.skillsOverview.title}
        </h1>
      </div>

      <SkillsWithSearch
        skillsData={portfolio.skills}
        config={portfolioData.experiencePage.skillsOverview}
      />
    </div>
  );
};

export default SkillsOverview;
