import React from 'react';
import SkillsWithSearch from './SkillsWithSearch.js';
import { SquareCode, Database, ShieldCheck, SquareStack } from 'lucide-react';

const SkillsOverview = () => {
  // Static skills data - server-side
  const skillsData = {
    "Languages & Tools": {
      icon: <SquareCode />,
      skills: ["Java", "Kotlin", "JavaScript", "Git", "Docker"]
    },
    "Frameworks & Systems": {
      icon: <SquareStack />,
      skills: ["Spring Boot", "Kafka", "Redis", "Kubernetes"]
    },
    "Databases": {
      icon: <Database />,
      skills: ["PostgreSQL", "MongoDB", "Cassandra", "MySQL", "Elasticsearch"]
    },
    "Architecture & Practices": {
      icon: <ShieldCheck />,
      skills: ["REST APIs", "Event-driven Systems", "Microservices", "CI/CD", "TDD", "Orchestration"]
    }
  };

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