import { ArrowRight, BadgeDollarSign, HandPlatter } from "lucide-react";
import Image from "next/image";

// Experience Card Component
function ExperienceCard({ experience }) {
  return (
    <div className="bg-section rounded-2xl border border-border p-8 hover:border-accent-primary transition-colors duration-200 cursor-pointer group">
      <div className="flex flex-col items-start gap-6">
        {/* Experience Header - company symbol and { title, company, period } */}

        <div className="flex items-center gap-6">
          <Image src={experience.companyLogo} alt={experience.company} width={48} height={48} />
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold text-text-primary mb-1 group-hover:text-accent-primary transition-colors duration-200">
              {experience.title}
            </h3>
            <div className="flex items-center gap-3">
              <span className="text-text-secondary font-medium">
                {experience.company}
              </span>
              <span className="text-text-secondary text-sm">
                {experience.period}
              </span>
            </div>
          </div>
        </div>

      <div className="flex-1">
        {/* Description */}
        <p className="text-text-secondary leading-relaxed mb-6">
          {experience.description}
        </p>

        {/* Achievements */}
        <div className="flex flex-wrap gap-6">
          {experience.achievements.map((achievement, achievementIndex) => (
            <div
              key={achievementIndex}
              className="flex items-center gap-2 text-accent-primary"
            >
              <achievement.icon className="w-4 h-4" />
              <span className="text-sm font-medium">
                {achievement.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div >
  );
}

export default function ExperienceJourney() {
  const experiences = [
    {
      title: "Technology Consultant",
      company: "Technogise",
      companyLogo: "/technogise-logo.png",
      period: "Jan 2025 - Present",
      description: "Contribute to scalable architecture, write and maintain high-quality code, guide peers, resolve complex issues, and continuously improve team workflows and code quality.",
      achievements: [
        {
          icon: BadgeDollarSign,
          text: "Worked on a leading payment platform"
        },
        {
          icon: HandPlatter,
          text: "Setup AI service-line for the organisation"
        }
      ]
    }
  ];

  return (
    <section>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-text-primary">Journey</h2>
        <button className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-hover transition-colors duration-200 group">
          <span className="text-base font-medium">See Full</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </button>
      </div>

      {/* Experience Cards */}
      <div className="flex flex-col gap-6">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div>
    </section>
  );
}