import React from "react";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ProjectBottomNavProps {
  currentProjectTitle?: string;
  nextProjectTitle?: string;
  nextProjectPath?: string;
}

const CASE_STUDIES = [
  { title: "Tata Capital Wealth", path: "/projects/tata-capital-wealth", nextTitle: "MeeroLink", nextPath: "/projects/meerolink" },
  { title: "MeeroLink", path: "/projects/meerolink", nextTitle: "Verizon UCaaS", nextPath: "/projects/verizon-ucaas" },
  { title: "Verizon UCaaS", path: "/projects/verizon-ucaas", nextTitle: "Tata Capital Wealth", nextPath: "/projects/tata-capital-wealth" },
];

export default function ProjectBottomNav({ 
  currentProjectTitle,
  nextProjectTitle,
  nextProjectPath 
}: ProjectBottomNavProps) {
  // Determine next project in sequential rotation
  const matchedProject = CASE_STUDIES.find(p => 
    p.title.toLowerCase() === currentProjectTitle?.toLowerCase() ||
    currentProjectTitle?.toLowerCase().includes(p.title.toLowerCase())
  );

  const resolvedNextTitle = nextProjectTitle || matchedProject?.nextTitle || "Next Case Study";
  const resolvedNextPath = nextProjectPath || matchedProject?.nextPath || "/projects/tata-capital-wealth";

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
                [ NAVIGATION // SEQUENTIAL ]
              </span>
              <span className="h-[1px] w-8 bg-white/15" />
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-light text-[#F5F4F6] tracking-tight">
              Continue Exploring
            </h3>
            <p className="text-sm text-[#AAA7AE] font-light leading-relaxed">
              {currentProjectTitle 
                ? `Finished reading ${currentProjectTitle}? Continue to ${resolvedNextTitle} or return home.`
                : "Explore more case studies or return to the portfolio homepage."}
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 md:pt-0">
            {/* Action 1: Back to Home (Secondary action) */}
            <Link href="/">
              <span className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-md text-sm font-medium text-[#AAA7AE] hover:text-[#F5F4F6] border border-white/15 hover:border-white/30 bg-[#1F1E21] hover:bg-white/[0.05] transition-all duration-200 group">
                <ArrowLeft size={16} className="text-[#AAA7AE] group-hover:text-[#F5F4F6] group-hover:-translate-x-1 transition-all duration-200" />
                <span>Home</span>
              </span>
            </Link>

            {/* Action 2: Next Project (Primary sequential action) */}
            <Link href={resolvedNextPath}>
              <span className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-md text-sm font-medium text-ink bg-blush hover:bg-[#edd8d1] shadow-sm transition-all duration-150 group font-sans">
                <span>Next: {resolvedNextTitle}</span>
                <ArrowRight size={16} className="text-ink group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
