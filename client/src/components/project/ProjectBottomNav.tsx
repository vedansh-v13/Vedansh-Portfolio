import React from "react";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ProjectBottomNavProps {
  currentProjectTitle?: string;
}

export default function ProjectBottomNav({ currentProjectTitle }: ProjectBottomNavProps) {
  return (
    <section className="py-12 sm:py-16 bg-[#141315] border-t border-white/10 relative overflow-hidden">
      {/* Background subtle architectural grid */}
      <div className="absolute inset-0 architectural-grid opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8">
          
          {/* Context & eyebrow */}
          <div className="space-y-2 max-w-md">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-blush">
                [ NAVIGATION // EXPLORE ]
              </span>
              <span className="h-[1px] w-8 bg-white/15" />
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-light text-[#F5F4F6] tracking-tight">
              Continue Exploring
            </h3>
            <p className="text-sm text-[#AAA7AE] font-light leading-relaxed">
              {currentProjectTitle 
                ? `Finished reading ${currentProjectTitle}? Return home or discover more case studies.`
                : "Return to the portfolio homepage or explore other case studies."}
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 md:pt-0">
            {/* Action 1: Back to Home (Secondary action) */}
            <Link href="/">
              <span className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-md text-sm font-medium text-[#AAA7AE] hover:text-[#F5F4F6] border border-white/15 hover:border-white/30 bg-[#1F1E21] hover:bg-white/[0.05] transition-all duration-200 group">
                <ArrowLeft size={16} className="text-[#AAA7AE] group-hover:text-[#F5F4F6] group-hover:-translate-x-1 transition-all duration-200" />
                <span>Back to Home</span>
              </span>
            </Link>

            {/* Action 2: Other Projects (Primary accent action) */}
            <Link href="/#projects">
              <span 
                className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-md text-sm font-medium text-ink bg-blush hover:bg-[#edd8d1] shadow-sm transition-all duration-150 group font-sans"
                onClick={() => {
                  // If window lenis is available, ensure smooth scroll to projects anchor
                  if (typeof window !== "undefined") {
                    const lenis = (window as unknown as { lenis?: { scrollTo: (target: string, opts?: { immediate?: boolean }) => void } }).lenis;
                    if (lenis) {
                      setTimeout(() => lenis.scrollTo("#projects"), 80);
                    }
                  }
                }}
              >
                <span>Other Projects</span>
                <ArrowRight size={16} className="text-ink group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
