import { SquareCode, Database, ShieldCheck, SquareStack } from 'lucide-react';

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

export default skillsData; 