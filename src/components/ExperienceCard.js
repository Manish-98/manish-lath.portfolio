import Image from "next/image";

function ExperienceCard({ experience, showCompanyLogo = true }) {
  return (
    <div className="card">
      <div className="flex flex-col items-start gap-6">
        {/* Experience Header - company symbol and { title, company, period } */}
        <div className="flex items-center gap-6">
          {showCompanyLogo && <Image src={experience.companyLogo} alt={experience.company} width={48} height={48}/>}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold text-primary mb-1">
              {experience.title}
            </h3>
            <div className="flex items-center gap-3">
              <span className="text-secondary font-medium">
                {experience.company}
              </span>
              <span className="text-secondary text-sm">
                {experience.period}
              </span>
            </div>
          </div>
        </div>
        <div className="flex-1">
          {/* Description */}
          <div className="text-secondary leading-relaxed mb-6">
            <ul className="list-disc list-inside">
              {experience.description.split('\n').map((line, index) => (
                <li key={index}>{line}</li>
              ))}
            </ul>
          </div>
          {/* Achievements */}
          <div className="flex flex-wrap gap-4">
            {experience.achievements.map((achievement, achievementIndex) => (
              <div
                key={achievementIndex}
                className="flex items-center gap-2 text-accent"
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
    </div>
  );
}

export default ExperienceCard; 