import Hero from "@/components/HeroSection";
import AboutMe from "@/components/AboutMeSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import LatestWriting from "@/components/LatestWritingsSection";
import ExperienceJourney from "@/components/ExperienceJourney";

export default function Home() {
  return (
    <main className="flex flex-col gap-8">
      <Hero />
      <AboutMe />
      <FeaturedProjects />
      <LatestWriting />
      <ExperienceJourney />
    </main>
  );
}
