import React from "react";
import { Laptop, Database, Globe2, Sparkles, Heart } from "lucide-react";
import { VENDORS_DATA } from "../data";

export default function Vendors() {
  return (
    <section id="vendors" className="mx-auto max-w-5xl px-4 py-8 animate-fade-in-up">
      {/* Section Header */}
      <div className="mb-8 flex flex-col items-center text-center">
        <div className="inline-flex h-9 w-9 items-center justify-center rounded-none bg-[#2c5282]/10 text-[#2c5282] border border-[#2c5282]/20 mb-3">
          <Laptop className="h-4.5 w-4.5" />
        </div>
        <h2 className="font-editorial-display text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 border-b border-black/10 pb-2 px-6 uppercase tracking-wider">
          Technical Skills & Proficiencies
        </h2>
        <p className="mt-2 font-mono text-[9px] uppercase tracking-widest text-[#1a1a1a]/50 max-w-lg">
          Operational expertise across standard medical databases, electronic clinical systems, and core CRO tools.
        </p>
      </div>

      {/* Main Grid: Split into Vendors list and Languages / Memberships */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Side: System vendor categories bento (8 cols) */}
        <div className="lg:col-span-8 space-y-4">
          <div className="rounded-none border border-black/15 bg-white p-6 sm:p-8 shadow-sm">
            <h3 className="font-editorial-display text-lg font-bold text-gray-900 mb-1 border-b border-black/10 pb-2">
              Clinical Trial Software & Specialized Tools
            </h3>
            <p className="font-editorial-serif text-xs text-black/50 mb-6">
              Meticulous competency in data verification, protocol query management, and central system operations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {VENDORS_DATA.map((vendor, index) => (
                <div 
                  key={index} 
                  className="rounded-none border border-black/10 bg-[#FDFCFB]/70 p-4 hover:border-[#2c5282]/40 transition-all"
                >
                  <span className="block font-mono text-[8.5px] uppercase tracking-widest text-[#2c5282] font-black mb-2.5">
                    {vendor.category}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {vendor.names.map((name, nameIdx) => (
                      <span 
                        key={nameIdx} 
                        className="rounded-none bg-white px-2.5 py-1 text-[11px] font-bold text-black/80 border border-black/10 shadow-none font-sans"
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Languages & Associations card (4 cols) */}
        <div className="lg:col-span-4 space-y-4 flex flex-col">
          {/* Languages Card */}
          <div className="rounded-none border border-black/15 bg-white p-6 sm:p-8 shadow-sm flex-1 flex flex-col justify-between">
            <div>
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-none bg-[#2c5282]/10 text-[#2c5282] border border-[#2c5282]/20 mb-4">
                <Globe2 className="h-4 w-4" />
              </div>
              <h3 className="font-editorial-display text-base font-bold text-gray-900 border-b border-black/10 pb-1">
                Language Capabilities
              </h3>
              <p className="mt-1 font-editorial-serif text-xs text-black/45">
                Liaising with global pharmaceutical clients and clinical trial sites.
              </p>

              <div className="mt-6 space-y-4">
                {/* Korean */}
                <div className="flex items-center justify-between border-b border-black/5 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-black text-brand-900">KO</span>
                    <div>
                      <span className="block font-sans text-xs font-bold text-[#1a1a1a]">Korean</span>
                      <span className="block text-[10px] text-black/45 font-medium">Mother Tongue</span>
                    </div>
                  </div>
                  <span className="rounded-none border border-black/10 bg-black/5 px-2.5 py-0.5 font-mono text-[9px] font-extrabold text-black uppercase tracking-widest">
                    Native
                  </span>
                </div>

                {/* English */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-black text-[#2c5282]">EN</span>
                    <div>
                      <span className="block font-sans text-xs font-bold text-[#1a1a1a]">English</span>
                      <span className="block text-[10px] text-black/45 font-medium">Business / Medical</span>
                    </div>
                  </div>
                  <span className="rounded-none border border-[#2c5282]/20 bg-[#2c5282]/5 px-2.5 py-0.5 font-mono text-[9px] font-extrabold text-[#2c5282] uppercase tracking-widest">
                    Fluent
                  </span>
                </div>
              </div>
            </div>

            {/* Quote on patient assessment */}
            <div className="mt-8 rounded-none bg-[#F7F5F0] p-3 border-l-2 border-[#2c5282]">
              <p className="font-editorial-serif text-[11px] text-[#2c5282] leading-normal italic">
                Combined medical clinical English fluency with direct Korean regulatory oncology trial frameworks.
              </p>
            </div>
          </div>

          {/* Memberships Card */}
          <div className="rounded-none border border-black/15 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-none bg-black/5 text-[#1a1a1a] border border-black/10 shrink-0">
                <Heart className="h-4 w-4" />
              </div>
              <div>
                <h4 className="font-editorial-display text-xs font-bold text-gray-900">Professional Memberships</h4>
                <p className="font-mono text-[9px] uppercase tracking-widest font-black text-[#2c5282] mt-0.5">KCSG ACTIVE MEMBER</p>
              </div>
            </div>
            <p className="mt-2.5 text-xs text-black/75 font-sans leading-relaxed">
              Active professional member of the <span className="font-bold text-black/90">Korea Cancer Study Group (KCSG)</span>, participating in oncology conferences and medical training workshops.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
