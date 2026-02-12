'use client';
import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { getIcon } from '@/data/portfolio';

const SkillsWithSearch = ({ skillsData, config }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = useMemo(() => {
    if (!searchTerm) return skillsData;

    return skillsData
      .map((category) => ({
        ...category,
        skills: category.skills.filter((skill) =>
          skill.toLowerCase().includes(searchTerm.toLowerCase())
        ),
      }))
      .filter((category) => category.skills.length > 0);
  }, [skillsData, searchTerm]);

  return (
    <>
      <div className="relative max-w-md mx-auto mb-12">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search />
        </div>
        <input
          type="text"
          placeholder={config.searchPlaceholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-section text-primary placeholder-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
        />
      </div>

      <div className="flex flex-row flex-wrap gap-8 mx-auto justify-center">
        {filteredCategories.map((category) => {
          const Icon = getIcon(category.icon);

          return (
            <div key={category.category} className="card w-full sm:w-lg">
              <div className="flex items-center mb-6">
                <span className="text-lg mr-3 text-primary">{Icon ? <Icon /> : null}</span>
                <h2 className="text-xl font-bold text-primary">{category.category}</h2>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-section text-accent text-sm font-medium rounded-md border border-accent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {filteredCategories.length === 0 && searchTerm && (
        <div className="text-center py-12">
          <p className="text-secondary text-lg">{config.emptyMessage} &quot;{searchTerm}&quot;</p>
        </div>
      )}
    </>
  );
};

export default SkillsWithSearch;
