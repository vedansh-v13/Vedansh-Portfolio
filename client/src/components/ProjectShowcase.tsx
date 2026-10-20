import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Play, Pause } from "lucide-react";
import { projectsData } from "../data/projectsData";

// Authentic case-study hero videos
import sceneVideo from "@/assets/case-studies/tata-capital/Scene.mp4";
import meeroVideo from "@/assets/case-studies/meerolink/hero-images/meero-heo.mp4";
import verizonVideo from "@/assets/case-studies/verizon/hero/hero.mp4";

interface ProjectItem {
  id: string;
  index: string;
  title: string;
  category: string;
  industry: string;
  subtitle: string;
  description: string;
  role: string;
  year: string;
  platform: string;
  caseStudyUrl?: string;
  inDevelopment?: boolean;
  videoSrc?: string;
  videoAspect: string;
  outcomeMetric?: string;
  outcomeHighlight?: string;
  outcomeLabel?: string;
}

const projects: ProjectItem[] = [
  {
    id: "tata-capital-wealth",
    index: "01",
    title: "Tata Capital Wealth",
    category: "Wealth Management • FinTech • Product Design",
    industry: "Wealth Management",
    subtitle: "Designing Confidence Across the Investment Journey",
    description:
      "Led the redesign of Tata Capital's investment experience, making wealth management easier to understand and navigate.",
    role: "Lead Product Designer",
    year: "2025–2026",
    platform: "iOS & Android",
    caseStudyUrl: "/projects/tata-capital-wealth",
    videoSrc: sceneVideo,
    videoAspect: "aspect-[9/16]",
    outcomeMetric: "81% → ",
    outcomeHighlight: "95%",
    outcomeLabel: "Task success rate across the end-to-end investment journey",
  },
  {
    id: "meerolink",
    index: "02",
    title: "MeeroLink",
    category: "AgriTech • Operations • Product Design",
    industry: "AgriTech Operations",
    subtitle: "One Platform. Two Realities.",
    description:
      "Led the design of digital tools that helped farmers and field teams make better decisions using shared data.",
    role: "Lead Product Designer",
    year: "2025–2026",
    platform: "Web & Android",
    caseStudyUrl: "/projects/meerolink",
    videoSrc: meeroVideo,
    videoAspect: "aspect-[4/3]",
    outcomeMetric: "6 days → ",
    outcomeHighlight: "1 day",
    outcomeLabel: "Report-to-action triage time across 2,400+ tracked farms",
  },
  {
    id: "verizon-uccaas",
    index: "03",
    title: "Verizon UCaaS",
    category: "Enterprise • Collaboration • Product Design",
    industry: "Enterprise Collaboration",
    subtitle: "Designing Inside a Machine That's Already Running",
    description:
      "Contributed to Verizon's unified communications platform across messaging, calling, and enterprise collaboration.",
    role: "UX Designer",
    year: "2022–2023",
    platform: "Web, iOS & Android",
    caseStudyUrl: "/projects/verizon-ucaas",
    videoSrc: verizonVideo,
    videoAspect: "aspect-[4/3]",
    outcomeMetric: "3 Modules • ",
    outcomeHighlight: "4 Platforms",
    outcomeLabel: "Consolidated enterprise messaging, calling, and video collaboration",
  },
  {
    id: "sherlock",
    index: "04",
    title: "Sherlock",
    category: "AI • B2B SaaS • Product Design",
    industry: "AI Lead Intelligence",
    subtitle: "AI-Native Lead Qualification Platform",
    description:
      "Designed an AI-native lead generation platform that helps sales teams qualify and act on opportunities faster.",
    role: "Product Designer",
    year: "2026",
    platform: "Web Platform",
    inDevelopment: true,
    videoAspect: "aspect-square",
    outcomeMetric: "In Development // ",
    outcomeHighlight: "2026",
    outcomeLabel: "System architecture and UX workflows currently in active progress",
  },
];

export default function ProjectShowcase() {
  const [activeId, setActiveId] = useState<string>("tata-capital-wealth");
  const activeProject = projects.find((p) => p.id === activeId) || projects[0];

  const getSvgIcon = (id: string) => {
    const p = projectsData.find((item) => item.id === id);
    if (!p) return null;
    return (
      <svg
        className="w-full h-full object-contain"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {p.icon.map((element) => element)}
      </svg>
    );
  };

  return (
    <section id="projects" className="py-24 sm:py-32 md:py-40 bg-[#181719] relative border-t border-white/10 overflow-hidden">
      {/* Subtle Architectural Grid Texture */}
      <div className="absolute inset-0 architectural-grid opacity-20 pointer-events-none" />

      {/* Section Header */}
      <div className="container mx-auto px-6 sm:px-8 md:px-12 mb-12 sm:mb-16 md:mb-20 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs uppercase tracking-widest text-blush">
              [ 01 // SELECTED WORK ]
            </span>
            <span className="h-[1px] w-8 bg-white/20" />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-light text-[#F5F4F6] tracking-tight leading-none mb-4">
            Selected Work
          </h2>
          <p className="text-base sm:text-lg text-[#AAA7AE] font-light leading-relaxed max-w-xl">
            A selection of my work designing products that solve real problems.
          </p>
        </div>
      </div>

      {/* =========================================================================
          DESKTOP VIEW (lg+): Clean Editorial Layout with Understated Project Selector
          ========================================================================= */}
      <div className="hidden lg:block container mx-auto px-6 sm:px-8 md:px-12 relative z-10">
        {/* Minimalist Editorial Project Selector */}
        <nav
          role="tablist"
          aria-label="Select project case study"
          className="flex items-center justify-between border-b border-white/10 pb-4 mb-16 md:mb-20"
        >
          {projects.map((p, idx) => {
            const isSelected = p.id === activeId;
            return (
              <button
                key={p.id}
                role="tab"
                id={`desktop-tab-${p.id}`}
                aria-selected={isSelected}
                aria-controls={`desktop-panel-${p.id}`}
                tabIndex={isSelected ? 0 : -1}
                onClick={() => setActiveId(p.id)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowRight") {
                    e.preventDefault();
                    const nextIdx = (idx + 1) % projects.length;
                    setActiveId(projects[nextIdx].id);
                    document.getElementById(`desktop-tab-${projects[nextIdx].id}`)?.focus();
                  } else if (e.key === "ArrowLeft") {
                    e.preventDefault();
                    const prevIdx = (idx - 1 + projects.length) % projects.length;
                    setActiveId(projects[prevIdx].id);
                    document.getElementById(`desktop-tab-${projects[prevIdx].id}`)?.focus();
                  }
                }}
                className="group relative pb-4 text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blush/80 rounded-sm cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={`font-mono text-xs transition-colors duration-200 ${
                      isSelected ? "text-blush font-semibold" : "text-[#AAA7AE]/60 group-hover:text-[#AAA7AE]"
                    }`}
                  >
                    {p.index}
                  </span>
                  <span
                    className={`font-display text-xl tracking-tight transition-colors duration-200 ${
                      isSelected
                        ? "text-[#F5F4F6] font-medium"
                        : "text-[#AAA7AE]/70 group-hover:text-[#F5F4F6]"
                    }`}
                  >
                    {p.title}
                  </span>
                </div>
                <div className="font-mono text-xs text-[#AAA7AE]/85 pl-6 transition-colors duration-200 group-hover:text-[#AAA7AE]">
                  {p.industry}
                </div>

                {/* Refined Underline Indicator */}
                {isSelected && (
                  <motion.div
                    layoutId="desktopActiveLine"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-blush"
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Active Project Editorial Spread */}
        <div
          role="tabpanel"
          id={`desktop-panel-${activeProject.id}`}
          aria-labelledby={`desktop-tab-${activeProject.id}`}
          className="min-h-[560px] relative"
        >
          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              <DesktopProjectSpread project={activeProject} getSvgIcon={getSvgIcon} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* =========================================================================
          MOBILE VIEW (<lg): Vertically Stacked Editorial Sequence
          ========================================================================= */}
      <div className="lg:hidden container mx-auto px-5 sm:px-8 space-y-24 sm:space-y-32">
        {projects.map((p) => (
          <article
            key={p.id}
            className="space-y-8 pb-16 border-b border-white/10 last:border-b-0 last:pb-0"
          >
            {/* Project Artwork First */}
            <div className="flex justify-center">
              <MobileProjectMedia project={p} getSvgIcon={getSvgIcon} />
            </div>

            {/* Project Content Below Artwork */}
            <div className="space-y-5">
              <div className="flex items-center gap-2 font-mono text-xs text-blush tracking-wider uppercase">
                <span>[ {p.index} // {p.industry} ]</span>
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl font-display font-light text-[#F5F4F6] tracking-tight leading-tight">
                  {p.title}
                </h3>
                <p className="text-base sm:text-lg text-blush/90 font-light tracking-tight mt-1">
                  {p.subtitle}
                </p>
              </div>

              {/* Role & Year inline */}
              <div className="font-mono text-xs text-[#AAA7AE] flex flex-wrap items-center gap-x-2 gap-y-1">
                <span className="text-[#F5F4F6]">{p.role}</span>
                <span className="text-white/20">•</span>
                <span>{p.platform}</span>
                <span className="text-white/20">•</span>
                <span>{p.year}</span>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#AAA7AE] font-light leading-relaxed">
                {p.description}
              </p>

              {/* Outcome Metric */}
              {p.outcomeMetric && (
                <div className="pt-4 border-t border-white/10">
                  <div className="text-2xl sm:text-3xl font-display font-light text-[#F5F4F6]">
                    {p.outcomeMetric}
                    <span className="text-blush font-normal">{p.outcomeHighlight}</span>
                  </div>
                  <div className="text-xs font-mono text-[#AAA7AE]/80 mt-1">
                    {p.outcomeLabel}
                  </div>
                </div>
              )}

              {/* Case Study Link */}
              <div className="pt-3">
                {p.caseStudyUrl ? (
                  <a
                    href={p.caseStudyUrl}
                    className="btn-tactile inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blush hover:text-white transition-all py-1.5 px-3 rounded-md bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blush"
                  >
                    <span>Explore Case Study</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 font-mono text-xs text-purple-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                    <span>In Development // 2026</span>
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// Interactive Video Player with Play/Pause Control
// -----------------------------------------------------------------------------
function ProjectVideoFrame({
  src,
  aspectRatio,
  isPhoneFrame = false,
}: {
  src?: string;
  aspectRatio: string;
  isPhoneFrame?: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  if (isPhoneFrame) {
    return (
      <div className="relative w-full max-w-[360px] aspect-[9/16] max-h-[580px] rounded-[2.5rem] p-3 bg-[#0c0b0e] border border-white/15 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.85)] overflow-hidden group">
        {/* Minimal speaker notch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-black/90 rounded-full z-20 flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-[#1c1b1f] mr-2" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#111]" />
        </div>
        <div className="w-full h-full rounded-[2rem] overflow-hidden bg-[#181719] relative">
          <video
            ref={videoRef}
            src={src}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          <button
            type="button"
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause preview video" : "Play preview video"}
            className="btn-tactile absolute bottom-4 right-4 z-30 p-2 rounded-full bg-black/70 backdrop-blur-sm text-white/80 hover:text-white border border-white/15 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blush"
          >
            {isPlaying ? (
              <Pause size={14} className="stroke-[2.5]" />
            ) : (
              <Play size={14} className="stroke-[2.5] ml-0.5" />
            )}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full ${aspectRatio} rounded-2xl overflow-hidden border border-white/15 bg-[#0c0b0e] shadow-2xl relative group`}>
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
      <button
        type="button"
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause preview video" : "Play preview video"}
        className="btn-tactile absolute bottom-4 right-4 z-30 p-2 rounded-full bg-black/70 backdrop-blur-sm text-white/80 hover:text-white border border-white/15 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blush"
      >
        {isPlaying ? (
          <Pause size={14} className="stroke-[2.5]" />
        ) : (
          <Play size={14} className="stroke-[2.5] ml-0.5" />
        )}
      </button>
    </div>
  );
}

// -----------------------------------------------------------------------------
// Desktop Project Spread Component (Tailored specifically per asset)
// -----------------------------------------------------------------------------
function DesktopProjectSpread({
  project,
  getSvgIcon,
}: {
  project: ProjectItem;
  getSvgIcon: (id: string) => React.ReactNode;
}) {
  const isTata = project.id === "tata-capital-wealth";
  const isMeero = project.id === "meerolink";
  const isVerizon = project.id === "verizon-uccaas";
  const isSherlock = project.id === "sherlock";

  return (
    <div className="grid grid-cols-12 gap-12 xl:gap-16 items-center">
      {/* Visual Column: Substantial, Generous, Integrated */}
      <div
        className={`${
          isTata
            ? "col-span-5 flex justify-center"
            : isMeero
            ? "col-span-7"
            : isVerizon
            ? "col-span-7"
            : "col-span-5 flex justify-center"
        }`}
      >
        {isTata && (
          <ProjectVideoFrame
            src={project.videoSrc}
            aspectRatio="aspect-[9/16]"
            isPhoneFrame
          />
        )}

        {(isMeero || isVerizon) && (
          <ProjectVideoFrame
            src={project.videoSrc}
            aspectRatio="aspect-[4/3]"
          />
        )}

        {isSherlock && (
          <div className="w-full max-w-[380px] aspect-square rounded-3xl border border-purple-500/20 bg-[#141219] p-10 flex flex-col items-center justify-center text-center shadow-2xl relative overflow-hidden">
            <div className="w-28 h-28 rounded-2xl border border-purple-500/30 bg-[#1c1826] p-5 flex items-center justify-center shadow-inner mb-6">
              {getSvgIcon(project.id)}
            </div>
            <div className="font-mono text-xs text-purple-300 uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              <span>In Development // 2026</span>
            </div>
            <p className="text-xs text-[#AAA7AE] font-mono leading-relaxed max-w-[240px]">
              AI-Native Lead Qualification Platform
            </p>
          </div>
        )}
      </div>

      {/* Content Column: Clear Reading Order with Generous Negative Space */}
      <div
        className={`${
          isTata
            ? "col-span-7 space-y-8"
            : isMeero
            ? "col-span-5 space-y-8"
            : isVerizon
            ? "col-span-5 space-y-8"
            : "col-span-7 space-y-8"
        }`}
      >
        <div className="space-y-4">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-blush">
            <span>[ {project.index} // {project.category.split("•")[0].trim()} ]</span>
          </div>

          <h3 className="text-4xl sm:text-5xl xl:text-6xl font-display font-light text-[#F5F4F6] tracking-tight leading-none">
            {project.title}
          </h3>

          <p className="text-xl sm:text-2xl text-blush/90 font-light tracking-tight">
            {project.subtitle}
          </p>

          <p className="text-base sm:text-lg text-[#AAA7AE] font-light leading-relaxed max-w-xl pt-1">
            {project.description}
          </p>

          {/* Clean Inline Role & Platform Metadata */}
          <div className="pt-2 font-mono text-xs text-[#AAA7AE]/80 flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="text-[#F5F4F6] font-medium">{project.role}</span>
            <span className="text-white/20">•</span>
            <span>{project.platform}</span>
            <span className="text-white/20">•</span>
            <span>{project.year}</span>
          </div>
        </div>

        {/* Simplified Key Outcome (No giant dashboard panel) */}
        {project.outcomeMetric && (
          <div className="pt-6 border-t border-white/10 max-w-lg">
            <div className="text-3xl sm:text-4xl font-display font-light text-[#F5F4F6] tracking-tight">
              {project.outcomeMetric}
              <span className="text-blush font-normal">{project.outcomeHighlight}</span>
            </div>
            <div className="text-xs font-mono text-[#AAA7AE]/80 mt-1.5 leading-relaxed">
              {project.outcomeLabel}
            </div>
          </div>
        )}

        {/* Editorial Action */}
        <div className="pt-2">
          {project.caseStudyUrl ? (
            <a
              href={project.caseStudyUrl}
              className="btn-tactile inline-flex items-center gap-2.5 text-sm font-mono uppercase tracking-wider text-blush hover:text-white transition-all py-2 px-4 rounded-md bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blush"
            >
              <span>Explore Case Study</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 text-xs font-mono text-purple-300">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              <span>Case study and interactive artifacts scheduled for 2026</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// Mobile Media Component (Optimized for 375px+ screens)
// -----------------------------------------------------------------------------
function MobileProjectMedia({
  project,
  getSvgIcon,
}: {
  project: ProjectItem;
  getSvgIcon: (id: string) => React.ReactNode;
}) {
  const isTata = project.id === "tata-capital-wealth";
  const isSherlock = project.id === "sherlock";

  if (isTata) {
    return (
      <div className="relative w-full max-w-[280px] aspect-[9/16] rounded-[2rem] p-2 bg-[#0c0b0e] border border-white/15 shadow-xl overflow-hidden">
        <div className="w-full h-full rounded-[1.5rem] overflow-hidden bg-[#181719]">
          <video
            src={project.videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    );
  }

  if (isSherlock) {
    return (
      <div className="w-full max-w-[280px] aspect-square rounded-2xl border border-purple-500/20 bg-[#141219] p-6 flex flex-col items-center justify-center text-center shadow-lg">
        <div className="w-20 h-20 rounded-xl border border-purple-500/30 bg-[#1c1826] p-4 flex items-center justify-center shadow-inner mb-4">
          {getSvgIcon(project.id)}
        </div>
        <span className="font-mono text-[10px] uppercase tracking-wider text-purple-300">
          Active Development // 2026
        </span>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[420px] aspect-[4/3] rounded-xl overflow-hidden border border-white/15 bg-[#0c0b0e] shadow-lg">
      <video
        src={project.videoSrc}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
}
