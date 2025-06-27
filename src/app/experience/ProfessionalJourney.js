import React from 'react';
import Image from 'next/image';
import ExperienceCard from '../../components/ExperienceCard';
import { experiences } from '../../data/ProfessionalJourneyData';
import { BadgeDollarSign, HandPlatter, Receipt, ShieldPlus, UserPen } from 'lucide-react';

const ProfessionalJourney = () => {
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
              {isImage(roles[0].companyLogo) ? (
                <Image src={roles[0].companyLogo} alt={company + ' Logo'} width={32} height={32} className="w-[80%] h-full object-contain" />
              ) : (
                roles[0].companyLogo
              )}
            </div>

            {/* Stack of cards for each role at this company */}
            <div className="flex flex-col gap-6 sm:ml-36">
              {roles.map((experience, index) => (
                <ExperienceCard key={index} experience={experience} showCompanyLogo={false}/>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProfessionalJourney;