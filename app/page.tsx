import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { TechStack } from "@/components/sections/tech-stack";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Services } from "@/components/sections/services";
import { Testimonials } from "@/components/sections/testimonials";
import { GithubStats } from "@/components/sections/github-stats";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Experience />
      <Services />
      <Testimonials />
      <GithubStats />
      <Contact />
    </>
  );
}
