import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import WhyChooseMe from "@/components/WhyChooseMe";
import Services from "@/components/Services";
import SkillsGrid from "@/components/SkillsGrid";
import MyProcess from "@/components/MyProcess";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import AboutMe from "@/components/AboutMe";
import CTAFooter from "@/components/CTAFooter";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <WhyChooseMe />
        <Services />
        <SkillsGrid />
        <MyProcess />
        <Projects />
        <TechStack />
        <Testimonials />
        <Pricing />
        <FAQ />
        <WhyWorkWithMe />
        <AboutMe />
      </main>
      <CTAFooter />
    </>
  );
}
