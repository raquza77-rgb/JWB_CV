import React, { useState } from "react";
import { Mail, Send, CheckCircle2, Linkedin, ExternalLink, Globe, X } from "lucide-react";
import { CONTACT_DATA } from "../data";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showLinkedInModal, setShowLinkedInModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("Please fill out all the fields so I can review your inquiry.");
      return;
    }

    setErrorMessage("");
    setIsSubmitting(true);

    // Simulate standard, sleek API dispatch delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="mx-auto max-w-5xl px-4 py-8 pb-16 animate-fade-in-up">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Left Side: Contact Information & Social channels (5 cols) */}
        <div className="md:col-span-5 flex flex-col justify-between">
          <div>
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-none bg-[#2c5282]/10 text-[#2c5282] border border-[#2c5282]/20 mb-3">
              <Mail className="h-4.5 w-4.5" />
            </div>

            <h2 className="font-editorial-display text-2xl font-bold tracking-tight text-gray-900 border-b border-black/10 pb-2 mb-2">
              Get in Touch
            </h2>
            <p className="mt-2 text-xs text-black/55 font-editorial-serif leading-relaxed max-w-sm">
              Whether you represent a clinical sponsor, hospital investigator site, or CRO management firm—feel free to outline potential projects or trial vacancies.
            </p>

            {/* Direct coordinate boxes */}
            <div className="mt-8 space-y-4">
              {/* Box 1 */}
              <a 
                href={`mailto:${CONTACT_DATA.email}`}
                className="group flex items-center justify-between rounded-none border border-black/15 bg-white p-4 shadow-sm hover:border-[#2c5282] transition-all cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-none bg-black/5 p-2 text-black border border-black/10">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="block font-mono text-[9px] uppercase tracking-widest text-[#2c5282] font-black">Primary Email</span>
                    <span className="text-xs font-semibold text-black font-mono">
                      {CONTACT_DATA.email}
                    </span>
                  </div>
                </div>
                <ExternalLink className="h-3.5 w-3.5 text-black/35 group-hover:text-[#2c5282] transition-colors" />
              </a>

              {/* Portfolio */}
              <div className="flex items-center gap-3 rounded-none border border-black/15 bg-[#FDFCFB]/50 p-4 shadow-sm">
                <div className="rounded-none bg-black/5 p-2 text-black/50 border border-black/10">
                  <Globe className="h-4 w-4" />
                </div>
                <div>
                  <span className="block font-mono text-[9px] uppercase tracking-widest text-black/40 font-bold">Web Presence</span>
                  <span className="text-xs font-semibold text-black/80 font-mono">{CONTACT_DATA.portfolio}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Icons & Signature */}
          <div className="mt-8 pt-6 border-t border-black/10">
            <span className="block font-mono text-[9px] uppercase tracking-widest text-black/40 font-bold mb-3">
              Professional Networks
            </span>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setShowLinkedInModal(true)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-none border border-black bg-white text-black hover:text-white hover:bg-black transition-all cursor-pointer"
                title="LinkedIn Profile"
              >
                <Linkedin className="h-4 w-4" />
              </button>
              <button 
                onClick={() => setShowLinkedInModal(true)}
                className="text-xs font-sans text-black/60 font-bold uppercase tracking-wider hover:text-black hover:underline cursor-pointer transition-colors text-left"
              >
                Connect on LinkedIn
              </button>
            </div>
          </div>
        </div>

        {/* LinkedIn Redirect Modal Overlay */}
        {showLinkedInModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-fade-in">
            <div 
              className="relative w-full max-w-md rounded-none border-2 border-black bg-white p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] animate-scale-up"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close pin */}
              <button 
                onClick={() => setShowLinkedInModal(false)}
                className="absolute top-4 right-4 text-black/55 hover:text-black transition-colors"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="text-center sm:text-left">
                {/* Modal Title */}
                <span className="block font-mono text-[9px] uppercase tracking-widest text-[#2c5282] font-black mb-1">
                  External Protocol Verified
                </span>
                <h3 className="font-editorial-display text-xl font-bold text-gray-900 border-b border-black/10 pb-2 mb-4 leading-tight">
                  LinkedIn Registry Connection
                </h3>

                {/* Body Text */}
                <p className="font-editorial-serif text-sm leading-relaxed text-[#1a1a1a]/85 mb-6">
                  You are requested to connect with <strong className="font-bold text-[#1a1a1a]">JiWon Bang</strong>. The link below redirects to her verified professional network, detailing interactive experience, nursing honors, and peer reviews.
                </p>

                {/* Interactive Link Area */}
                <div className="flex flex-col sm:flex-row gap-3 justify-end">
                  <button 
                    onClick={() => setShowLinkedInModal(false)}
                    className="rounded-none border border-black/20 bg-white px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider text-black hover:bg-black/5 transition-all cursor-pointer"
                  >
                    Cancel
                  </button>
                  <a 
                    href="https://www.linkedin.com/in/jiwon-bang-417482267/"
                    target="_blank" 
                    rel="noreferrer"
                    onClick={() => setShowLinkedInModal(false)}
                    className="inline-flex items-center justify-center gap-2 rounded-none bg-[#2c5282] px-5 py-2.5 text-[11px] font-black uppercase tracking-widest text-white hover:bg-black transition-all cursor-pointer"
                  >
                    <span>Connect Profile</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Right Side: Contact Form (7 cols) */}
        <div className="md:col-span-7">
          <div className="rounded-none border border-black/15 bg-white p-6 sm:p-8 shadow-sm">
            <h3 className="font-editorial-display text-base font-bold text-gray-900 border-b border-black/10 pb-1.5">
              Dispatched Inbox Inquiry
            </h3>
            <p className="mt-1 font-editorial-serif text-xs text-black/45">
              Have a question, clinical trial project, or opportunity? Write a message and I'll respond as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {/* Full Name input */}
              <div className="flex flex-col gap-1.5">
                <label className="font-sans text-[10px] uppercase font-bold tracking-wider text-black/75">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Thomas Scott"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  disabled={isSubmitting || isSuccess}
                  className="rounded-none border border-black/20 bg-white p-3 font-sans text-xs font-semibold text-black placeholder-black/30 focus:border-black focus:outline-none transition-all disabled:opacity-50"
                />
              </div>

              {/* Email Input */}
              <div className="flex flex-col gap-1.5">
                <label className="font-sans text-[10px] uppercase font-bold tracking-wider text-black/75">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. sponsor@clinicaltrial.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  disabled={isSubmitting || isSuccess}
                  className="rounded-none border border-black/20 bg-white p-3 font-sans text-xs font-semibold text-black placeholder-black/30 focus:border-black focus:outline-none transition-all disabled:opacity-50"
                />
              </div>

              {/* Message Input */}
              <div className="flex flex-col gap-1.5">
                <label className="font-sans text-[10px] uppercase font-bold tracking-wider text-black/75">Message / Trial Details</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Please specify therapeutic area, protocol scope, and trial location requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  disabled={isSubmitting || isSuccess}
                  className="rounded-none border border-black/20 bg-white p-3 font-sans text-xs font-semibold text-black placeholder-black/30 focus:border-black focus:outline-none transition-all disabled:opacity-50"
                />
              </div>

              {/* Error messages */}
              {errorMessage && (
                <div className="rounded-none bg-red-50 p-3 text-xs font-sans text-red-650 border border-red-200">
                  {errorMessage}
                </div>
              )}

              {/* Success state */}
              {isSuccess && (
                <div className="rounded-none bg-[#F7F5F0] p-4 border border-[#2c5282] flex items-start gap-2.5">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#2c5282] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-editorial-serif text-sm font-bold text-[#144214] leading-tight">Thank you, message dispatched successfully!</h4>
                    <p className="mt-1 text-xs text-black/75 font-editorial-serif leading-normal">
                      JiWon has received your clinical workspace inquiry. She will review your trial guidelines and get in contact at standard speed.
                    </p>
                  </div>
                </div>
              )}

              {/* Submit button */}
              {!isSuccess && (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-none bg-black p-3.5 text-xs font-black uppercase tracking-widest text-white hover:bg-[#2c5282] transition-colors cursor-pointer disabled:opacity-55"
                >
                  {isSubmitting ? (
                    <div className="h-4 w-4 animate-spin rounded-none border border-white border-t-transparent" />
                  ) : (
                    <>
                      <Send className="h-3.5 w-3.5" />
                      <span>Send inquiry</span>
                    </>
                  )}
                </button>
              )}
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
