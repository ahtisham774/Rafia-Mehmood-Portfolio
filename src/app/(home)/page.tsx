import PortfolioHero from "@/components/(home)/PortfolioHero";
import About from "@/components/(home)/About";
import JoinTeam from "@/components/(home)/JoinTeam";
import ProjectsSection from "@/components/(home)/Project";
import SkillsSection from "@/components/(home)/Skills";
import ContactSection from "@/components/(home)/Contact";

export default function Home() {
  return (
    <div className="">
      <PortfolioHero/>
        <About/>
        <JoinTeam/>
        <ProjectsSection/>
        <SkillsSection/>
        <ContactSection/>
    </div>
  );
}
