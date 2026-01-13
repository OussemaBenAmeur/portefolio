// ============================================
// MAIN PORTFOLIO PAGE
// ============================================
// This file composes all the sections together.
// Each section is its own component in /components
// 
// HOW TO MODIFY:
// - To change section order, reorder the components below
// - To hide a section, just remove or comment it out
// - To add a new section, import it and add it here
// ============================================

import Navigation from "@/components/Navigation/Navigation";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects";
import Education from "@/components/Education/Education";
import Certifications from "@/components/Certifications/Certifications";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import ParticleBackground from "@/components/shared/ParticleBackground";

export default function Home() {
  return (
    <>
      {/* Floating particles in the background */}
      <ParticleBackground />

      {/* Fixed navigation bar */}
      <Navigation />

      {/* Main content */}
      <main>
        {/* Hero - Full screen intro with name and title */}
        <Hero />

        {/* About Me section */}
        <About />

        {/* Skills with animated progress bars */}
        <Skills />

        {/* Work Experience timeline */}
        <Experience />

        {/* Academic Projects showcase */}
        <Projects />

        {/* Education background */}
        <Education />

        {/* Professional certifications */}
        <Certifications />

        {/* Contact information and CTA */}
        <Contact />
      </main>

      {/* Footer with copyright and social links */}
      <Footer />
    </>
  );
}
