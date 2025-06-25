import ProfessionalJourney from "@/components/ProfessionalJourney";
import SkillsOverview from "@/components/SkillsOverview";

export default function Experience() {
  return (
    <div className="flex flex-col gap-4">
      <ProfessionalJourney />
      <hr className="mx-40 border-border" />
      <SkillsOverview />
    </div>
  );
}