import HeroSection from "@/components/sections/hero";
import ContactSection from "@/components/sections/contact";
import AboutMeSection from "@/components/sections/about-me";
import SkillsSection from "@/components/sections/skills";
import WorkSection from "@/components/sections/work";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
      <WorkSection />
      <ContactSection />
    </>
  );
}
