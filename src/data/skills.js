import { portfolioData } from './portfolio';

const skillsData = portfolioData.skills.reduce((acc, category) => {
  acc[category.category] = {
    icon: category.icon,
    skills: category.skills,
  };

  return acc;
}, {});

export default skillsData;
