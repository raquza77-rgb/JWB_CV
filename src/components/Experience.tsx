import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle } from "lucide-react";
import { WORK_EXPERIENCE } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-4 py-8 animate-fade-in-up">
      {/* Section Header */}
      <div className="mb-8 flex flex-col items-center text-center">
        <div className="inline-flex h-9 w-9 items-center justify-center rounded-none bg-[#2c5282]/10 text-[#2c5282] border border-[#2c5282]/20 mb-3">
          <Briefcase className="h-4.5 w-4.5" />
        </div>
        <h2 className="font-editorial-display text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 border-b border-black/10 pb-2 px-6">
          Career Path & Timeline
        </h2>
        <p className="mt-2 font-mono text-[9px] uppercase tracking-widest text-black/50 max-w-md">
          A track record of strict protocol adherence, client safety verification, and study-data compliance.
        </p>
      </div>

      {/* Experience list */}
      <div className="space-y-6">
        {WORK_EXPERIENCE.map((exp, expIdx) => (
          <div 
            key={expIdx}
            className="group relative rounded-none border border-black/15 bg-white p-6 sm:p-8 shadow-sm transition-all hover:border-[#2c5282]/45"
          >
            {/* Top row: Role, Company and Date (Highly typeset) */}
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between border-b border-black/10 pb-3 mb-4 gap-2">
              <div>
                {/* Company name in bold elegant serif */}
                <h3 className="font-editorial-serif text-lg sm:text-xl font-bold text-[#1a1a1a]">
                  {exp.company}
                </h3>
                
                {/* Role and Location */}
                <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="font-sans text-xs italic font-medium text-[#2c5282]">
                    {exp.role}
                  </span>
                  <span className="text-black/30 hidden sm:inline">•</span>
                  <span className="inline-flex items-center gap-1 font-mono text-[10px] text-black/50 font-semibold uppercase tracking-wider">
                    <MapPin className="h-3 w-3 text-black/40" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Date Box: Flat text block like a print document */}
              <div className="inline-flex items-center gap-1.5 self-start rounded-none bg-black/5 px-3 py-1 border border-black/10 text-[10px] font-mono font-bold uppercase tracking-wider text-black">
                <Calendar className="h-3.5 w-3.5 text-[#2c5282]" />
                <span>{exp.period}</span>
              </div>
            </div>

            {/* Substantive summary description */}
            <p className="font-editorial-serif text-[13px] leading-relaxed text-[#1a1a1a]/70 border-b border-dashed border-black/10 pb-4 mb-4">
              {exp.company === "Worldwide Clinical Trials" && "Senior site management operations across multiform study frameworks, ensuring trial veracity, investigator audit-preparedness, and robust data integrity."}
              {exp.company === "IQVIA" && "Standardized clinical monitoring practices and robust safety validation in dynamic hospital sites, utilizing high-level functional service partnerships."}
              {exp.company === "Korea University Anam Hospital" && "Direct specialist oncology coordinator role, providing technical study setup, active chemotherapy assessments, and IRB documentation."}
            </p>

            {/* List of achievements / responsibilities */}
            <div>
              <h4 className="font-mono text-[9px] uppercase tracking-widest text-[#2c5282] font-black mb-3">
                Core Responsibilities & Milestones
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2.5">
                {exp.responsibilities.map((resp, respIdx) => (
                  <li 
                    key={respIdx} 
                    className="flex items-start gap-2 text-xs text-black/75 leading-normal hover:translate-x-0.5 transition-transform"
                  >
                    <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#2c5282]/85" />
                    <span className="font-sans font-normal">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
