import {
  BadgeDollarSign,
  HandPlatter,
  Receipt,
  ShieldPlus,
  UserPen,
  SquareCode,
  Database,
  ShieldCheck,
  SquareStack,
  Home,
  Briefcase,
  Book,
  Github,
  Linkedin,
  Mail,
} from 'lucide-react';
import portfolio from './portfolio.json';

export { portfolio };

const iconMap = {
  BadgeDollarSign,
  HandPlatter,
  Receipt,
  ShieldPlus,
  UserPen,
  SquareCode,
  Database,
  ShieldCheck,
  SquareStack,
  Home,
  Briefcase,
  Book,
  Github,
  Linkedin,
  Mail,
};

export const getIcon = (iconName) => iconMap[iconName] || null;

export const portfolioData = {
  ...portfolio,
  experiences: portfolio.experiences.map((experience) => ({
    ...experience,
    achievements: experience.achievements.map((achievement) => ({
      ...achievement,
      icon: getIcon(achievement.icon),
    })),
  })),
  skills: portfolio.skills.map((category) => ({
    ...category,
    icon: getIcon(category.icon),
  })),
};

export default portfolioData;
