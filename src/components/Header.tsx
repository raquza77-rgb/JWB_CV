import React from "react";
import { Mail, ArrowRight } from "lucide-react";
import { PROFILE_IMAGE_URL } from "../data";

interface HeaderProps {
  activeSection: string;
  onNavClick: (sectionId: string) => void;
}

export default function Header({ activeSection, onNavClick }: HeaderProps) {
  const navItems = [
    { id: "profile", label: "Profile" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "vendors", label: "Technical Skills" },
    { id: "trainings", label: "Trainings" },
  ];

  return (
    <header className="sticky top-4 z-50 mx-auto max-w-5xl px-4">
      <div className="flex h-16 items-center justify-between border-b-2 border-black bg-[#FDFCFB]/95 px-6 backdrop-blur-md shadow-sm border border-black/10">
        {/* Left initials / face mark */}
        <button 
          onClick={() => onNavClick("hero")}
          className="group flex items-center gap-3 text-left transition-transform hover:scale-102"
        >
          <div className="relative h-9 w-9 overflow-hidden rounded-none border border-black/30 bg-[#F7F5F0]">
            <img 
              src={PROFILE_IMAGE_URL} 
              alt="JiWon Bang" 
              className="h-full w-full object-cover transition-transform group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="hidden sm:block">
            <h1 className="font-editorial-display text-sm font-bold tracking-tight text-brand-editorial-text leading-none">JiWon <span className="text-brand-editorial-blue">Bang</span></h1>
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#1a1a1a]/60 font-medium">CRA II & RN</span>
          </div>
        </button>

        {/* Navigation links */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isSel = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavClick(item.id)}
                className={`px-3 py-1.5 font-sans text-[10px] uppercase tracking-widest font-bold transition-all ${
                  isSel
                    ? "text-brand-editorial-blue border-b-2 border-brand-editorial-blue"
                    : "text-gray-650 hover:text-black hover:border-b-2 hover:border-black/30"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Contact Me CTA */}
        <button
          onClick={() => onNavClick("contact")}
          className="inline-flex items-center gap-2 border border-black bg-black px-4 py-2 text-[10px] uppercase tracking-widest font-bold text-white hover:bg-brand-editorial-blue hover:border-brand-editorial-blue transition-all hover:scale-[1.02]"
        >
          <Mail className="h-3 w-3 text-white" />
          <span>Contact</span>
          <ArrowRight className="h-2.5 w-2.5 text-white/70 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </header>
  );
}
