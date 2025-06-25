import React from 'react';
import Image from 'next/image';

const ProfessionalJourney = () => {
  const experiences = [
    {
      company: "Technogise Pvt. Ltd.",
      position: "Technology Consultant",
      duration: "January 2023 – Present",
      description: "Contribute to software architecture and ensure scalability and performance.\nWrite, test, and maintain high-quality code across the full SDLC.\nGuide fellow developers and collaborate effectively with cross-functional teams.\nTroubleshoot and resolve complex issues in existing systems.\nEnhance workflows, code quality, and advocate for best practices.",
      technologies: ["Java", "Spring Boot", "SQL"],
      icon: "/technogise-logo.png"
    },
    {
      company: "Thoughtworks India Pvt. Ltd.",
      position: "Senior Consultant - Application Developer",
      duration: "August 2023 – December 2024",
      description: "Analyze business requirements and translate them into scalable, efficient, and maintainable software solutions.\nDesign application architecture and provide technical direction to the development team.\nEnsure best practices in coding, security, and performance are followed during application development.\nMentor and guide other developers, providing technical expertise and code reviews.\nAssist in troubleshooting complex technical issues and provide solutions.",
      technologies: ["Java", "Spring Boot", "Kafka", "Netflix Orchestrator", "PostgreSQL", "MongoDB", "Docker", "Kubernetes"],
      icon: "/thoughtworks-logo.svg"
    },
    {
      company: "Thoughtworks India Pvt. Ltd.",
      position: "Consultant - Application Developer",
      duration: "July 2020 - July 2023",
      description: "Develop applications for external clients to cater to their business needs.\nWrite clean, lean, testable, and maintainable code following the industry best practices.\nOptimize solutions to cut the cost of business processes for the clients.\nConsult the clients and other stakeholders about tech and business decisions.\nCollaborate with multiple teams, consumer clients and other stakeholders to design highly functioning and reliable applications.\nOn an organization level, help the organization in the recruitment process by taking up tech interviews.",
      technologies: ["Kotlin", "Spring Boot", "Kafka", "Cassandra", "PostgreSQL", "Docker", "Kubernetes"],
      icon: "/thoughtworks-logo.svg"
    }
  ];

  // Helper to check if icon is an image path
  const isImage = (icon) => typeof icon === 'string' && /\.(png|jpe?g|svg|webp)$/i.test(icon);

  // Group experiences by company
  const grouped = experiences.reduce((acc, exp) => {
    if (!acc[exp.company]) acc[exp.company] = [];
    acc[exp.company].push(exp);
    return acc;
  }, {});

  return (
    <section className="max-w-4xl mx-auto p-8 bg-background">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-primary mb-2">
          Professional Journey
        </h1>
        <p className="text-secondary text-lg">
          A journey through code and context.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/50 hidden sm:block"></div>

        {Object.entries(grouped).map(([company, roles], groupIdx) => (
          <div key={company} className="relative mb-12 flex flex-col gap-4">
            {/* Timeline node (logo) */}
            <div className="absolute left-4 w-24 h-8 bg-white border-2 border-accent rounded-xl items-center justify-center text-sm hidden sm:flex overflow-hidden">
              {isImage(roles[0].icon) ? (
                <Image src={roles[0].icon} alt={company + ' Logo'} width={32} height={32} className="w-[80%] h-full object-contain" />
              ) : (
                roles[0].icon
              )}
            </div>

            {/* Stack of cards for each role at this company */}
            <div className="flex flex-col gap-6 sm:ml-36">
              {roles.map((experience, index) => (
                <div key={index} className="card">
                  <div className="mb-4">
                    <p className="text-secondary text-sm mb-3">
                      {experience.duration}
                    </p>
                    <div className="flex flex-col gap-2 justify-between sm:flex-row">
                      <h2 className="text-xl font-bold text-primary mb-1">
                        {experience.company}
                      </h2>
                      <h3 className="text-lg font-semibold text-primary mb-2">
                        {experience.position}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="text-secondary mb-6">
                    <ul className="list-disc list-inside">
                      {experience.description.split('\n').map((line, idx) => (
                        <li key={idx}>{line}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Technology tags */}
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-section text-accent text-sm rounded-md border border-accent"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProfessionalJourney;