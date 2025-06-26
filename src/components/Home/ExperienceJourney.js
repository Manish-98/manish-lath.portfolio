import { ArrowRight } from "lucide-react";
import ExperienceCard from "../ExperienceCard";
import { experiences } from "../../data/ProfessionalJourneyData";
import Link from "next/link";

export default function ExperienceJourney() {
  // Use only the first experience from the shared data
  const experience = experiences[0];

  return (
    <section>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-primary">Journey</h2>
        <Link
          href="/experience"
          className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors duration-200 group"
        >
          <span className="text-base font-medium">See Full</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Experience Card */}
      <div className="flex flex-col gap-6">
        <ExperienceCard experience={experience} />
      </div>
    </section>
  );
}