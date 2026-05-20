// File: app/page.tsx
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
// import { About } from "@/components/about";
import { TechStack } from "@/components/tech-stack";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative flex min-h-screen flex-col bg-transparent text-slate-100 antialiased">

        <section id="top">
          <Hero />
        </section>

        {/* <section id="about">
          <About />
        </section> */}

        <section id="stack">
          <TechStack />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </>
  );
}