import React from "react";
import { User, MapPin, Award, Calendar, Phone } from "lucide-react";
import { PERSONAL_BIO, PROFILE_IMAGE_URL, CONTACT_DATA, EDUCATION_DATA } from "../data";

export default function Profile() {
  return (
    <section id="profile" className="mx-auto max-w-5xl px-4 py-8 animate-fade-in-up">
      {/* Container card (Flat Editorial Panel) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 rounded-none border border-black/15 bg-white p-6 sm:p-8 shadow-sm">
        
        {/* Left column: Profile portrait with sharp border elements */}
        <div className="md:col-span-5 flex flex-col gap-4">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-none border border-black/15 shadow-none bg-[#F7F5F0]">
            <img 
              src={PROFILE_IMAGE_URL} 
              alt="JiWon Bang" 
              className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
              referrerPolicy="no-referrer"
            />
            {/* Overlay tag */}
            <div className="absolute bottom-4 left-4 rounded-none bg-black/85 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-sm shadow-none font-mono">
              ★ Active CRA II & RN
            </div>
          </div>

          {/* Quick Stats Grid with Sharp Edges */}
          <div className="grid grid-cols-2 gap-3 mt-1">
            <div className="rounded-none bg-[#FDFCFB]/50 p-3 text-center border border-black/10">
              <span className="block text-[9px] font-mono uppercase tracking-widest text-black/50 font-bold">CRA Licensure</span>
              <span className="mt-1 block font-editorial-display text-xs font-bold text-[#2c5282]">MFDS Certified</span>
            </div>
            <div className="rounded-none bg-[#FDFCFB]/50 p-3 text-center border border-black/10">
              <span className="block text-[9px] font-mono uppercase tracking-widest text-black/50 font-bold">Therapies</span>
              <span className="mt-1 block font-editorial-display text-xs font-bold text-[#2c5282]">Onco, Neph, Neur</span>
            </div>
          </div>
        </div>

        {/* Right column: Bio and structured details */}
        <div className="md:col-span-7 flex flex-col justify-between">
          <div>
            {/* Top Icon Badge (Sharp Corners) */}
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-none bg-[#2c5282]/10 text-[#2c5282] border border-[#2c5282]/20 mb-5">
              <User className="h-5 w-5" />
            </div>

            {/* Heading in elegant editorial serif */}
            <h2 className="font-editorial-display text-2xl font-black tracking-tight text-[#1a1a1a] sm:text-3xl border-b border-black/10 pb-2">
              Professional Profile
            </h2>

            {/* Bio string: styled as traditional article intro summary */}
            <p className="mt-4 font-editorial-serif text-[15px] leading-relaxed text-[#1a1a1a]/80 font-normal">
              {PERSONAL_BIO}
            </p>

            {/* Structured resume keyfacts with magazine layout grids */}
            <div className="mt-8 border-t border-black/10 pt-6">
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-[#2c5282] font-bold mb-4">
                Key Professional Coordinates
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                {/* Fact 1 */}
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-none bg-black/5 p-1.5 text-black/65 border border-black/10">
                    <MapPin className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <span className="block font-mono text-[9px] uppercase tracking-widest text-black/40 font-bold">Location</span>
                    <span className="text-xs font-semibold text-black/80 font-sans">{CONTACT_DATA.location}</span>
                  </div>
                </div>

                {/* Fact 2 */}
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-none bg-black/5 p-1.5 text-black/65 border border-black/10">
                    <Calendar className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <span className="block font-mono text-[9px] uppercase tracking-widest text-black/40 font-bold">Date of Birth</span>
                    <span className="text-xs font-semibold text-black/80 font-sans">{CONTACT_DATA.birthday}</span>
                  </div>
                </div>

                {/* Fact 3 */}
                <div className="flex items-start gap-3 col-span-1 sm:col-span-2 border-t border-black/5 pt-3">
                  <div className="mt-0.5 rounded-none bg-black/5 p-1.5 text-black/65 border border-black/10">
                    <Award className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <span className="block font-mono text-[9px] uppercase tracking-widest text-black/40 font-bold">Professional Licenses</span>
                    <div className="mt-1.5 space-y-1.5">
                      {EDUCATION_DATA.licenses.map((lic, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-none bg-[#2c5282]"></span>
                          <span className="font-mono text-[10px] font-bold text-black/80">{lic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Fact 4 */}
                <div className="flex items-start gap-3 border-t border-black/5 pt-3 sm:col-span-2">
                  <div className="mt-0.5 rounded-none bg-black/5 p-1.5 text-black/65 border border-black/10">
                    <Phone className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <span className="block font-mono text-[9px] uppercase tracking-widest text-black/40 font-bold">Direct Line</span>
                    <span className="text-xs font-mono font-bold text-[#2c5282]">{CONTACT_DATA.phone}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core values block styled like a classic editorial quote block */}
          <div className="mt-8 rounded-none bg-[#F7F5F0] p-4 border-l-4 border-[#2c5282]">
            <span className="font-mono text-[9px] uppercase tracking-widest font-bold text-[#2c5282] block mb-1">
              Mission Statement
            </span>
            <p className="font-editorial-serif text-xs text-[#1a1a1a]/85 italic">
              "Guaranteeing patient welfare, absolute medical code integrity, and robust clinical site compliance through nursing rigor and CRA excellence."
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
