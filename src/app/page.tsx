import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Resume } from "@/components/resume";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Resume />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
