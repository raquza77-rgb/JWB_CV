import React, { useState, useMemo } from "react";
import { GraduationCap, Award, Search, CheckSquare, Calendar, ChevronDown, ChevronUp } from "lucide-react";
import { EDUCATION_DATA, TRAININGS_DATA } from "../data";

export default function EducationTrainings() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  // Search filter for 17 trainings
  const filteredTrainings = useMemo(() => {
    if (!searchQuery) return TRAININGS_DATA;
    return TRAININGS_DATA.filter(
      (t) =>
        t.courseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.organization.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  // Deciding how many trainings to show initially
  const displayedTrainings = useMemo(() => {
    if (isExpanded || searchQuery) {
      return filteredTrainings;
    }
    return filteredTrainings.slice(0, 5); // Show first 5 by default
  }, [filteredTrainings, isExpanded, searchQuery]);

  return (
    <section id="trainings" className="mx-auto max-w-5xl px-4 py-8 animate-fade-in-up">
      {/* Grid: Education column and Trainings column */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left: Education & Licenses card (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-none border border-black/15 bg-white p-6 sm:p-8 shadow-sm">
            {/* Custom Icon */}
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-none bg-[#2c5282]/10 text-[#2c5282] border border-[#2c5282]/20 mb-4">
              <GraduationCap className="h-4.5 w-4.5" />
            </div>

            <h3 className="font-editorial-display text-lg font-bold text-gray-900 leading-tight border-b border-black/10 pb-2 mb-3">
              Academic Background
            </h3>
            <p className="font-editorial-serif text-xs text-black/55 mb-5">
              The fundamental nursing knowledge supporting complex oncology clinical trial compliance.
            </p>

            <div className="border-l-2 border-black/25 pl-4 space-y-2 mt-4">
              <div className="text-[9px] font-mono font-black uppercase text-[#2c5282] tracking-widest">{EDUCATION_DATA.period}</div>
              <h4 className="font-editorial-serif text-base font-bold text-gray-800 leading-snug">
                {EDUCATION_DATA.institution}
              </h4>
              <p className="text-xs text-black/75 font-sans font-semibold tracking-wide">
                {EDUCATION_DATA.degree}
              </p>
              <div className="inline-flex items-center gap-1.5 text-[9px] text-black/40 font-mono font-bold uppercase tracking-wider">
                <span>Seoul, Korea</span>
              </div>
            </div>

            {/* Academic stats note */}
            <div className="mt-8 rounded-none bg-[#F7F5F0] border-l-2 border-[#2c5282] p-4">
              <span className="block font-mono text-[8.5px] uppercase tracking-widest text-[#2c5282] font-black mb-1">
                Nursing Core Competency
              </span>
              <p className="text-[11px] text-[#1a1a1a]/85 font-editorial-serif leading-relaxed">
                Dual nursing licenses in Republic of Korea and USA ensure safe medical coordination, thorough patient history screening, and accurate safety event tracking.
              </p>
            </div>
          </div>

          {/* Licenses details explicitly */}
          <div className="rounded-none border border-black/15 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4 border-b border-black/10 pb-2">
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-none bg-black/5 text-black border border-black/10 shrink-0">
                <Award className="h-4 w-4" />
              </div>
              <h4 className="font-editorial-display text-sm font-bold text-gray-900">Official Nursing Credentials</h4>
            </div>

            <div className="space-y-3">
              <div className="p-3 bg-[#FDFCFB]/50 rounded-none border border-black/10">
                <span className="block text-[8.5px] font-mono uppercase tracking-widest text-[#2c5282] font-black">United States of America</span>
                <span className="block text-xs font-bold text-[#1a1a1a] mt-0.5">Registered Professional Nurse</span>
                <span className="font-mono text-[9px] font-bold text-black/45 block mt-1">License No. 887588</span>
              </div>

              <div className="p-3 bg-[#FDFCFB]/50 rounded-none border border-black/10">
                <span className="block text-[8.5px] font-mono uppercase tracking-widest text-[#2c5282] font-black">Republic of Korea</span>
                <span className="block text-xs font-bold text-[#1a1a1a] mt-0.5">Korean Nursing License</span>
                <span className="font-mono text-[9px] font-bold text-black/45 block mt-1">License No. 429105</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Certified Trainings and Courses (7 cols) */}
        <div className="lg:col-span-7">
          <div className="rounded-none border border-black/15 bg-white p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-3 border-b border-black/10 pb-3">
              <div>
                <h3 className="font-editorial-display text-lg font-bold text-gray-900 leading-tight">
                  Professional Certifications
                </h3>
                <p className="font-editorial-serif text-xs text-black/45">
                  Continuous instruction in KGCP, MFDS mandates, and oncology clinical science.
                </p>
              </div>

              {/* Course counter badge */}
              <span className="self-start sm:self-auto rounded-none bg-black px-3 py-1 font-mono text-[9px] font-extrabold uppercase tracking-widest text-white">
                {TRAININGS_DATA.length} Courses Completed
              </span>
            </div>

            {/* In-card search query filter */}
            <div className="relative my-4">
              <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-black/45" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search coursework (e.g. GCP, Oncology, MFDS...)"
                className="w-full rounded-none border border-black/20 bg-white py-2 pl-9 pr-4 font-sans text-xs font-semibold text-black placeholder-black/35 focus:border-black focus:outline-none transition-all"
              />
            </div>

            {/* Courses items list */}
            <div className="space-y-2 mt-4 max-h-[420px] overflow-y-auto pr-1">
              {displayedTrainings.map((train) => (
                <div 
                  key={train.id}
                  className="group flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 rounded-none border border-black/10 bg-[#FDFCFB]/50 p-3 hover:border-black/30 transition-all"
                >
                  <div className="flex items-start gap-2.5">
                    <CheckSquare className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#2c5282]" />
                    <div>
                      <h4 className="font-editorial-serif text-xs font-bold text-[#1a1a1a] leading-tight">
                        {train.courseName}
                      </h4>
                      <span className="block font-mono text-[8.5px] uppercase tracking-widest text-black/40 mt-1 font-semibold">
                        Provider: {train.organization}
                      </span>
                    </div>
                  </div>

                  {/* Date pill (Sharp print tag) */}
                  <span className="inline-flex items-center gap-1 shrink-0 self-start sm:self-auto rounded-none bg-black/5 border border-black/10 px-2 py-0.5 font-mono text-[9px] text-black/55 font-bold uppercase tracking-wider">
                    <Calendar className="h-2.5 w-2.5 text-[#2c5282]" />
                    {train.date}
                  </span>
                </div>
              ))}

              {filteredTrainings.length === 0 && (
                <p className="text-center text-xs text-black/45 py-6 font-sans">No matching course found block.</p>
              )}
            </div>

            {/* Show More toggle button */}
            {!searchQuery && filteredTrainings.length > 5 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-none border border-black bg-black text-white hover:bg-[#2c5282] py-2.5 font-sans text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
              >
                {isExpanded ? (
                  <>
                    <span>Collapse Course Listings</span>
                    <ChevronUp className="h-3.5 w-3.5" />
                  </>
                ) : (
                  <>
                    <span>Expand and View All ({filteredTrainings.length - 5} More)</span>
                    <ChevronDown className="h-3.5 w-3.5" />
                  </>
                )}
              </button>
            )}

            {/* GCP mandate notice */}
            <div className="mt-4 border-t border-black/10 pt-3">
              <p className="font-mono text-[8.5px] text-black/40 leading-normal uppercase tracking-wider text-center">
                * All active GCP certificates are regularly audited and updated per local MFDS requirements.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
