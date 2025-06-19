import Hero from "@/components/Home/HeroSection";
import AboutMe from "@/components/Home/AboutMeSection";
import FeaturedProjects from "@/components/Home/FeaturedProjects";
import LatestWriting from "@/components/Home/LatestWritingsSection";
import ExperienceJourney from "@/components/Home/ExperienceJourney";

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
