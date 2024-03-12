import { Header } from "../../components/Header/index";
import { Footer } from "../../components/Footer/index";
import { BannerSection } from "../../components/BannerSection";
import { AboutSection } from "../../components/AboutSection";
import { TechSection } from "../../components/TechSection";
import { ProjectSection } from "../../components/ProjectsSection";

export const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <BannerSection />
        <AboutSection />
        <TechSection />
        <ProjectSection />
      </main>
      <Footer />
    </>
  );
};
