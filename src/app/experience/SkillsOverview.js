import React from 'react';
import SkillsWithSearch from './SkillsWithSearch.js';
import skillsData from '@/data/skills.js';

const SkillsOverview = () => {
  return (
    <div className="max-w-6xl mx-auto p-8 bg-background">
      {/* Static Header - Server Rendered */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-8">
          Skills Overview
        </h1>
      </div>

      {/* Client Component for Search + Grid */}
      <SkillsWithSearch skillsData={skillsData} />
    </div>
  );
};

export default SkillsOverview;