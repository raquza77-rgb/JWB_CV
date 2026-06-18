import React from "react";
import { Mail, FileText, CheckCircle2 } from "lucide-react";
import { PERSONAL_NAME, PERSONAL_ROLE, CONTACT_DATA } from "../data";

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  
  const handlePrintResume = () => {
    window.print();
  };

  return (
    <section id="hero" className="relative flex flex-col items-stretch pt-12 pb-8 px-4 animate-fade-in-up border-b border-black/10">
      
      {/* Massive Editorial Header Grid */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8 text-left">
        <div className="flex flex-col">
          {/* Monumental Magazine Title */}
          <h1 className="font-editorial-display text-7xl sm:text-8xl md:text-[100px] leading-[0.85] font-extrabold tracking-tighter uppercase mb-4 text-[#1a1a1a]">
            JiWon<br/>
            <span className="text-[#2c5282] font-editorial-display">Bang</span>
          </h1>
          
          <div className="mt-2 flex flex-wrap items-center gap-4">
            <span className="text-[10px] font-bold tracking-widest uppercase py-1 px-3 border border-black text-[#1a1a1a] bg-transparent">
              Clinical Research Associate II
            </span>
            <span className="text-[11px] font-medium italic text-black/60 font-sans">
              Dobong-gu, Seoul, Korea • {CONTACT_DATA.phone}
            </span>
          </div>
        </div>

        {/* Traditional Right Sidebar Block of Metadata */}
        <div className="text-left md:text-right flex flex-col items-start md:items-end md:max-w-xs">
          <p className="font-mono text-[10px] leading-relaxed uppercase tracking-[0.2em] font-bold text-[#1a1a1a]">
            {CONTACT_DATA.email}<br/>
            06 May 1994<br/>
            RN License No. 429105 / 887588
          </p>
          <div className="h-[2px] w-full md:w-48 bg-black mt-4"></div>
        </div>
      </div>

      {/* Decorative layout accent & "Available" notice */}
      <div className="flex flex-col sm:flex-row items-center justify-between border-t border-black/15 py-4 gap-4">
        {/* Available indicator */}
        <div className="inline-flex items-center gap-2 border border-[#2c5282]/30 bg-[#2c5282]/5 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#2c5282] rounded-none">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2c5282] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2c5282]"></span>
          </span>
          <span>Available for clinical trial assignments</span>
        </div>

        {/* Verification tags */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-mono text-[10px] text-black/60 font-semibold uppercase tracking-wider">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="h-3 w-3 text-[#2c5282]" />
            <span>MFDS Trained</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="h-3 w-3 text-[#2c5282]" />
            <span>RN Registered</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="h-3 w-3 text-[#2c5282]" />
            <span>ICH-GCP Compliant</span>
          </div>
        </div>
      </div>

      {/* Action buttons (Sharpened Editorial Styling) */}
      <div className="mt-2 flex flex-wrap items-center gap-3">
        {/* Email action */}
        <button
          onClick={onContactClick}
          className="inline-flex items-center gap-2 rounded-none border border-black bg-black px-5 py-3 text-[11px] uppercase tracking-widest font-bold text-white hover:bg-[#2c5282] hover:border-[#2c5282] transition-all hover:scale-[1.01]"
        >
          <Mail className="h-3.5 w-3.5" />
          <span>Send Website Inquiry</span>
        </button>

        {/* Print CV */}
        <button
          onClick={handlePrintResume}
          className="inline-flex items-center gap-2 rounded-none border border-black bg-transparent px-5 py-3 text-[11px] uppercase tracking-widest font-bold text-[#1a1a1a] hover:bg-black hover:text-white transition-all hover:scale-[1.01]"
          title="Print or export professional portfolio layout"
        >
          <FileText className="h-3.5 w-3.5" />
          <span>Print / Save CV as PDF</span>
        </button>
      </div>

    </section>
  );
}
