import React, { useState, useMemo } from "react";
import { FolderGit, Search, Layers, ShieldCheck, Activity, Info, FilterX } from "lucide-react";
import { PROJECTS_DATA } from "../data";

export default function ProjectsRegistry() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArea, setSelectedArea] = useState("All");
  const [selectedPhase, setSelectedPhase] = useState("All");
  const [selectedRole, setSelectedRole] = useState("All");

  // Define filter options based on real data
  const areas = useMemo(() => {
    const list = new Set(PROJECTS_DATA.map((p) => p.therapeuticArea));
    return ["All", ...Array.from(list)];
  }, []);

  const phases = useMemo(() => {
    const list = new Set(PROJECTS_DATA.map((p) => p.phase));
    return ["All", ...Array.from(list)];
  }, []);

  const roles = useMemo(() => {
    const list = new Set(PROJECTS_DATA.map((p) => p.role));
    return ["All", ...Array.from(list)];
  }, []);

  // Filter calculations
  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      const matchesSearch =
        project.indication.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.responsibilities.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesArea = selectedArea === "All" || project.therapeuticArea === selectedArea;
      const matchesPhase = selectedPhase === "All" || project.phase === selectedPhase;
      const matchesRole = selectedRole === "All" || project.role === selectedRole;

      return matchesSearch && matchesArea && matchesPhase && matchesRole;
    });
  }, [searchQuery, selectedArea, selectedPhase, selectedRole]);

  // Statistics counters
  const totalCount = PROJECTS_DATA.length;
  const filteredCount = filteredProjects.length;
  
  const oncologyCount = useMemo(() => {
    return PROJECTS_DATA.filter((p) => p.therapeuticArea === "Oncology").length;
  }, []);

  const globalPercentage = useMemo(() => {
    const globalCount = PROJECTS_DATA.filter((p) => p.type.includes("Global")).length;
    return Math.round((globalCount / totalCount) * 100);
  }, [totalCount]);

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedArea("All");
    setSelectedPhase("All");
    setSelectedRole("All");
  };

  return (
    <section id="projects" className="mx-auto max-w-5xl px-4 py-8 animate-fade-in-up">
      {/* Section Header */}
      <div className="mb-8 flex flex-col items-center text-center">
        <div className="inline-flex h-9 w-9 items-center justify-center rounded-none bg-[#2c5282]/10 text-[#2c5282] border border-[#2c5282]/20 mb-3">
          <FolderGit className="h-4.5 w-4.5" />
        </div>
        <h2 className="font-editorial-display text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 border-b border-black/10 pb-2 px-6">
          Clinical Trials Registry
        </h2>
        <p className="mt-2 font-mono text-[9px] uppercase tracking-widest text-[#1a1a1a]/50 max-w-lg">
          An interactive record of 23 global & local clinical projects monitored or coordinated by JiWon Bang.
        </p>
      </div>

      {/* Metrics Banner (Sharp Print-Style Blocks) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="rounded-none border border-black/15 bg-white p-5 shadow-sm text-center">
          <span className="block text-[10px] font-mono uppercase tracking-widest text-black/50 font-bold">Total Studies Conducted</span>
          <span className="mt-1.5 block font-editorial-display text-3xl font-black text-[#2c5282]">{totalCount}</span>
          <span className="mt-1 block text-[10px] uppercase font-bold tracking-wider text-[#1a1a1a]/40">Phase I to IV Portfolio</span>
        </div>
        <div className="rounded-none border border-black/15 bg-white p-5 shadow-sm text-center">
          <span className="block text-[10px] font-mono uppercase tracking-widest text-black/50 font-bold">Oncology Specialty Trials</span>
          <span className="mt-1.5 block font-editorial-display text-3xl font-black text-[#2c5282] flex items-center justify-center gap-1">
            <span className="h-2 w-2 rounded-none bg-[#2c5282] animate-pulse"></span>
            {oncologyCount}
          </span>
          <span className="mt-1 block text-[10px] uppercase font-bold tracking-wider text-[#1a1a1a]/40">Primary Target Therapy Area</span>
        </div>
        <div className="rounded-none border border-black/15 bg-white p-5 shadow-sm text-center">
          <span className="block text-[10px] font-mono uppercase tracking-widest text-black/50 font-bold">Study Coverage Ratio</span>
          <span className="mt-1.5 block font-editorial-display text-3xl font-black text-black">{globalPercentage}%</span>
          <span className="mt-1 block text-[10px] uppercase font-bold tracking-wider text-[#1a1a1a]/40">IP & Global Operations</span>
        </div>
      </div>

      {/* Control panel & Filter card (Flat Editorial Frame) */}
      <div className="rounded-none border border-black/15 bg-white p-4 sm:p-6 mb-6">
        <h3 className="font-mono text-[10px] uppercase tracking-widest text-[#2c5282] font-black mb-4 pb-2 border-b border-black/10">
          Search & Query Filters
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
          {/* Search bar */}
          <div className="md:col-span-4 flex flex-col gap-1.5">
            <label className="font-sans text-[10px] uppercase tracking-wider font-bold text-black/60">Indication keywords</label>
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-black/45" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search index, cancer, asthma..."
                className="w-full rounded-none border border-black/20 bg-white py-2 pl-9 pr-4 font-sans text-xs font-semibold text-black placeholder-black/35 focus:border-black focus:outline-none transition-all"
              />
            </div>
          </div>

          {/* Area filter */}
          <div className="md:col-span-2.5 flex flex-col gap-1.5">
            <label className="font-sans text-[10px] uppercase tracking-wider font-bold text-black/60">Therapeutic Area</label>
            <select
              value={selectedArea}
              onChange={(e) => setSelectedArea(e.target.value)}
              className="w-full rounded-none border border-black/20 bg-white p-2 font-sans text-xs font-semibold text-black focus:border-black focus:outline-none transition-all cursor-pointer"
            >
              {areas.map((area) => (
                <option key={area} value={area}>{area}</option>
              ))}
            </select>
          </div>

          {/* Phase Filter */}
          <div className="md:col-span-2.5 flex flex-col gap-1.5">
            <label className="font-sans text-[10px] uppercase tracking-wider font-bold text-black/60">Protocol Phase</label>
            <select
              value={selectedPhase}
              onChange={(e) => setSelectedPhase(e.target.value)}
              className="w-full rounded-none border border-black/20 bg-white p-2 font-sans text-xs font-semibold text-black focus:border-black focus:outline-none transition-all cursor-pointer"
            >
              {phases.map((phase) => (
                <option key={phase} value={phase}>{phase === "All" ? "All Phases" : `Phase ${phase}`}</option>
              ))}
            </select>
          </div>

          {/* Role Filter */}
          <div className="md:col-span-2 flex flex-col gap-1.5">
            <label className="font-sans text-[10px] uppercase tracking-wider font-bold text-black/60">Role</label>
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="w-full rounded-none border border-black/20 bg-white p-2 font-sans text-xs font-semibold text-black focus:border-black focus:outline-none transition-all cursor-pointer"
            >
              {roles.map((role) => (
                <option key={role} value={role}>{role === "All" ? "All Roles" : role}</option>
              ))}
            </select>
          </div>

          {/* Reset button */}
          <div className="md:col-span-1">
            <button
              onClick={handleResetFilters}
              className="flex items-center justify-center h-9 w-full rounded-none border border-black bg-black text-white hover:bg-[#2c5282] transition-all cursor-pointer"
              title="Reset query filters"
            >
              <FilterX className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Query status line */}
        <div className="mt-4 flex items-center justify-between border-t border-black/10 pt-3">
          <span className="font-mono text-[9px] uppercase tracking-widest text-black/50 font-bold">
            Displaying {filteredCount} of {totalCount} clinical trial records
          </span>
          {filteredCount < totalCount && (
            <button 
              onClick={handleResetFilters} 
              className="font-mono text-[9px] font-black text-[#2c5282] uppercase tracking-wider hover:underline cursor-pointer"
            >
              Reset active filter
            </button>
          )}
        </div>
      </div>

      {/* Grid of Results */}
      {filteredProjects.length === 0 ? (
        <div className="rounded-none border border-black/15 bg-white p-12 text-center shadow-none">
          <Info className="h-8 w-8 text-black/30 mx-auto mb-3" />
          <p className="font-editorial-serif text-sm font-bold text-black">No trial records matched your current query criteria.</p>
          <p className="mt-1 text-xs text-black/50">Try widening your key terms or reset the filters using the button above.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[800px] overflow-y-auto pr-2 border-t border-black/10 pt-4">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="rounded-none border border-black/15 bg-white p-5 shadow-sm hover:border-black/35 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Meta details strip */}
                <div className="flex items-center justify-between mb-3 border-b border-black/5 pb-2">
                  <div className="flex items-center gap-1.5">
                    {/* Phase badge */}
                    <span className="rounded-none bg-[#2c5282] px-2 py-0.5 font-mono text-[9px] font-extrabold text-white uppercase tracking-wider">
                      Phase {project.phase}
                    </span>
                    {/* Type badge */}
                    <span className="rounded-none bg-black/5 border border-black/10 px-2 py-0.5 font-mono text-[9px] font-bold text-black/75 uppercase tracking-wider">
                      {project.type}
                    </span>
                  </div>
                  {/* Date flag */}
                  <span className="font-mono text-[10px] font-black text-black/45">
                    {project.period}
                  </span>
                </div>

                {/* Trial Indication Title */}
                <h4 className="font-editorial-serif text-[15px] font-extrabold text-[#1a1a1a] leading-snug">
                  {project.indication}
                </h4>

                {/* Therapeutic segment details */}
                <div className="mt-3 flex items-center gap-4 text-[11px] text-black/60 font-medium">
                  <div className="flex items-center gap-1 leading-none">
                    <Activity className="h-3 w-3 text-[#2c5282]" />
                    <span>Area: <strong className="font-bold text-black/75">{project.therapeuticArea}</strong></span>
                  </div>
                  <div className="flex items-center gap-1 leading-none">
                    <ShieldCheck className="h-3 w-3 text-[#2c5282]" />
                    <span>Role: <strong className="font-bold text-black/75">{project.role}</strong></span>
                  </div>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="mt-4 pt-4 border-t border-dashed border-black/10">
                <span className="block font-mono text-[8.5px] uppercase tracking-widest text-[#2c5282] font-black mb-1.5">
                  Scope of Site Action
                </span>
                <p className="font-sans text-xs text-black/75 leading-relaxed font-normal">
                  {project.responsibilities}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
