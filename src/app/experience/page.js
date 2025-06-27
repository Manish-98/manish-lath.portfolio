import ProfessionalJourney from "@/app/experience/ProfessionalJourney";
import SkillsOverview from "@/app/experience/SkillsOverview";

export default function Experience() {
  return (
    <div className="flex flex-col gap-4">
      <ProfessionalJourney />
      <hr className="mx-40 border-border" />
      <SkillsOverview />
    </div>
  );
}