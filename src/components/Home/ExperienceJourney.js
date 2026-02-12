import { ArrowRight } from 'lucide-react';
import ExperienceCard from '../ExperienceCard';
import Link from 'next/link';
import { portfolioData } from '@/data/portfolio';

export default function ExperienceJourney() {
  const { home, experiences } = portfolioData;

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-primary">{home.experienceJourney.title}</h2>
        <Link
          href={home.experienceJourney.cta.href}
          className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors duration-200 group"
        >
          <span className="text-base font-medium">{home.experienceJourney.cta.label}</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="flex flex-col gap-6">
        {experiences.slice(0, home.experienceJourney.limit).map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div>
    </section>
  );
}
