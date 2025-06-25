'use client';
import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';

const SkillsWithSearch = ({ skillsData }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Memoized filtering to avoid unnecessary re-calculations
  const filteredCategories = useMemo(() => {
    if (!searchTerm) return skillsData;
    
    const filtered = {};
    Object.entries(skillsData).forEach(([category, data]) => {
      const filteredSkills = data.skills.filter(skill => 
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (filteredSkills.length > 0) {
        filtered[category] = { ...data, skills: filteredSkills };
      }
    });
    return filtered;
  }, [skillsData, searchTerm]);

  return (
    <>
      {/* Search Bar */}
      <div className="relative max-w-md mx-auto mb-12">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search />   
        </div>
        <input
          type="text"
          placeholder="Search skills..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-section text-primary placeholder-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
        />
      </div>

      {/* Skills Grid */}
      <div className="flex flex-row flex-wrap gap-8 mx-auto justify-center">
        {Object.entries(filteredCategories).map(([category, data]) => (
          <div key={category} className="card w-full sm:w-lg">
            {/* Category Header */}
            <div className="flex items-center mb-6">
              <span className="text-lg mr-3 text-primary">{data.icon}</span>
              <h2 className="text-xl font-bold text-primary">{category}</h2>
            </div>
            
            {/* Skills Tags */}
            <div className="flex flex-wrap gap-3">
              {data.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-section text-accent text-sm font-medium rounded-md border border-accent"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* No Results Message */}
      {Object.keys(filteredCategories).length === 0 && searchTerm && (
        <div className="text-center py-12">
          <p className="text-secondary text-lg">No skills found matching "{searchTerm}"</p>
        </div>
      )}
    </>
  );
};

export default SkillsWithSearch;