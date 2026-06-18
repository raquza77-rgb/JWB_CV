import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Experience from "./components/Experience";
import ProjectsRegistry from "./components/ProjectsRegistry";
import Vendors from "./components/Vendors";
import EducationTrainings from "./components/EducationTrainings";
import ContactForm from "./components/ContactForm";

export default function App() {
  const [activeSection, setActiveSection] = useState("profile");

  // Multi-element intersection observer tracker to sync active tab with scroll state
  useEffect(() => {
    const sections = ["profile", "experience", "projects", "vendors", "trainings", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Trigger when the section occupies a clear portion of viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#fafbfc]/90 pb-16 selections:bg-brand-100 selections:text-brand-900">
      {/* Absolute top grid background effect for extra elegance */}
      <div className="absolute top-0 inset-x-0 h-[640px] bg-[linear-gradient(to_bottom,rgba(244,247,246,0.6)_0%,rgba(250,251,252,0)_100%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[640px] bg-[radial-gradient(ellipse_at_top,rgba(93,126,122,0.06)_0%,rgba(255,255,255,0)_70%)] pointer-events-none" />

      {/* Styled Header */}
      <div className="pt-6">
        <Header activeSection={activeSection} onNavClick={handleNavClick} />
      </div>

      {/* Main body content */}
      <main className="relative z-10 mx-auto max-w-5xl py-8 space-y-4">
        {/* Hero Banner Component */}
        <Hero onContactClick={() => handleNavClick("contact")} />

        {/* Section Divisions with neat separation matching Thomas Scott spacing */}
        <div className="space-y-12">
          {/* Professional Statement Card */}
          <Profile />

          {/* Work History */}
          <div className="border-t border-gray-100/50 pt-4">
            <Experience />
          </div>

          {/* Interactive Trials registry */}
          <div className="border-t border-gray-100/50 pt-4">
            <ProjectsRegistry />
          </div>

          {/* Vendors & Skills bento */}
          <div className="border-t border-gray-100/50 pt-4">
            <Vendors />
          </div>

          {/* Academic Milestone and 17 certificate course listings */}
          <div className="border-t border-gray-100/50 pt-4">
            <EducationTrainings />
          </div>

          {/* Contact Inquiry Form */}
          <div className="border-t border-gray-150 pt-4">
            <ContactForm />
          </div>
        </div>
      </main>

      {/* Bottom Footer block */}
      <footer className="relative mt-16 border-t border-gray-100 bg-white py-12 text-center z-10">
        <div className="mx-auto max-w-5xl px-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 font-mono text-[10px] text-gray-400 font-semibold uppercase tracking-wider">
          <span>
            © {new Date().getFullYear()} JiWon Bang. All Rights Reserved.
          </span>
          <div className="flex items-center gap-4 justify-center">
            <span>Nursing License No. 429105</span>
            <span className="text-gray-200">|</span>
            <span>US RN License No. 887588</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
