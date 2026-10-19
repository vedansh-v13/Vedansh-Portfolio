import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projectsData } from "../data/projectsData";

const cardVariants: Record<string, {
  indexLabel: string;
  borderColor: string;
  hoverBorder: string;
  bgCard: string;
  iconBg: string;
  iconBorder: string;
  titleHover: string;
  arrowHover: string;
}> = {
  "tata-capital-wealth": {
    indexLabel: "01",
    borderColor: "border-white/10",
    hoverBorder: "hover:border-blush/40",
    bgCard: "bg-[#1B1A1E]",
    iconBg: "bg-[#121215]",
    iconBorder: "border-white/10 group-hover:border-blush/30",
    titleHover: "group-hover:text-blush",
    arrowHover: "group-hover:text-blush group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
  },
  "meerolink": {
    indexLabel: "02",
    borderColor: "border-white/10",
    hoverBorder: "hover:border-[#AAA7AE]/40",
    bgCard: "bg-[#18181B]",
    iconBg: "bg-[#121413]",
    iconBorder: "border-white/10 group-hover:border-[#AAA7AE]/30",
    titleHover: "group-hover:text-[#AAA7AE]",
    arrowHover: "group-hover:text-[#AAA7AE] group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
  },
  "verizon-uccaas": {
    indexLabel: "03",
    borderColor: "border-white/10",
    hoverBorder: "hover:border-white/30",
    bgCard: "bg-[#1A191C]",
    iconBg: "bg-[#141214]",
    iconBorder: "border-white/10 group-hover:border-white/25",
    titleHover: "group-hover:text-white",
    arrowHover: "group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
  },
  "sherlock": {
    indexLabel: "04",
    borderColor: "border-dashed border-white/20",
    hoverBorder: "hover:border-blush/30",
    bgCard: "bg-[#161518]",
    iconBg: "bg-[#131116]",
    iconBorder: "border-dashed border-white/20 group-hover:border-blush/25",
    titleHover: "group-hover:text-blush",
    arrowHover: "",
  },
};

export default function ProjectShowcase() {
  return (
    <section id="projects" className="py-12 sm:py-16 md:py-18 bg-[#181719] relative border-t border-white/10">
      {/* Section Header */}
      <div className="container mx-auto px-4 sm:px-6 mb-6 sm:mb-8">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-2.5">
            <span className="font-mono text-xs uppercase tracking-widest text-blush">
              [ 01 // PORTFOLIO ]
            </span>
            <span className="h-[1px] w-8 bg-white/20" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-light text-[#F5F4F6] tracking-[-0.03em] leading-tight mb-2">
            Selected Work
          </h2>
          <p className="text-sm sm:text-base text-[#AAA7AE] font-light max-w-xl leading-relaxed">
            A selection of my work designing products that solve real problems.
          </p>
        </div>
      </div>

      {/* 2×2 Compact Grid with Robust Responsive Layout */}
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
          {projectsData.map((project, index) => {
            const isComingSoon = project.comingSoon;
            const style = cardVariants[project.id || ""] || cardVariants["tata-capital-wealth"];
            const projectUrl = project.caseStudyUrl || `/projects/${project.id || project.title.toLowerCase().replace(/\s+/g, "-")}`;

            const CardContent = (
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className={`w-full h-full flex flex-col justify-between p-4 sm:p-5 rounded-lg transition-all duration-200 relative group border ${style.bgCard} ${style.borderColor} ${style.hoverBorder} ${
                  isComingSoon
                    ? "cursor-default"
                    : "cursor-pointer card-tactile shadow-sm hover:shadow-md"
                }`}
              >
                {/* Level 3 — Metadata: Fully responsive across all devices (2-line on mobile/tablet, 1-line on laptop/desktop) */}
                <div className="mb-3 pb-2.5 border-b border-white/5 text-[11px] lg:text-xs font-mono text-[#AAA7AE]/80">
                  {/* Compact top index & date row on mobile and tablet (< lg) */}
                  <div className="flex lg:hidden items-center justify-between mb-1.5">
                    <span className="text-[#AAA7AE]/70 font-medium tracking-wider">
                      {style.indexLabel}
                    </span>
                    {isComingSoon ? (
                      <span className="text-blush text-[10.5px] font-mono tracking-wider">
                        Coming Soon
                      </span>
                    ) : (
                      <span className="text-[#AAA7AE]/70">
                        {project.year}
                      </span>
                    )}
                  </div>

                  {/* Category string (unclipped on mobile/tablet, single-line on desktop lg+) */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="hidden lg:inline text-[#AAA7AE]/60 font-medium shrink-0">
                        {style.indexLabel}
                      </span>
                      <span className="hidden lg:inline text-white/20 shrink-0">•</span>
                      <span className="text-[#AAA7AE]/75 tracking-tight lg:tracking-normal truncate lg:max-w-none">
                        {project.category}
                      </span>
                    </div>

                    {isComingSoon ? (
                      <span className="hidden lg:inline text-blush text-[11px] font-mono tracking-wider shrink-0 whitespace-nowrap">
                        Coming Soon
                      </span>
                    ) : (
                      <span className="hidden lg:inline text-[#AAA7AE]/70 shrink-0 whitespace-nowrap">
                        {project.year}
                      </span>
                    )}
                  </div>
                </div>

                {/* Level 1 & 2 — Project Identity & Context */}
                <div className="flex items-start gap-3.5 sm:gap-4 lg:gap-4.5">
                  {/* Level 1: Project Icon Anchor - Consistent 56px (mobile) to 64px (desktop) */}
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-lg p-2 flex items-center justify-center transition-all duration-200 border ${style.iconBg} ${style.iconBorder}`}
                  >
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain"
                        loading="lazy"
                        decoding="async"
                        onError={() => {
                          console.error(`Failed to load image: ${project.image}`);
                        }}
                      />
                    ) : (
                      <svg
                        className="w-full h-full object-contain"
                        viewBox="0 0 400 400"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {project.icon.map((element) => element)}
                      </svg>
                    )}
                  </div>

                  {/* Text Container: Identity (Level 1) + Context (Level 2) */}
                  <div className="flex-1 min-w-0">
                    {/* Level 1: Project Name + Subtle Single Directional Cue */}
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3
                        className={`text-lg sm:text-xl font-display font-medium text-[#F5F4F6] tracking-tight transition-colors duration-200 ${style.titleHover}`}
                      >
                        {project.title}
                      </h3>
                      {!isComingSoon && (
                        <ArrowUpRight
                          className={`w-4 h-4 text-[#AAA7AE]/70 transition-all duration-200 shrink-0 mt-0.5 sm:mt-1 ${style.arrowHover}`}
                        />
                      )}
                    </div>

                    {/* Level 2: Role */}
                    <div className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#AAA7AE]/90 mb-1.5">
                      {project.role}
                    </div>

                    {/* Level 2: Project Description */}
                    <p className="text-xs sm:text-sm text-[#AAA7AE] leading-relaxed font-light">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );

            if (isComingSoon) {
              return (
                <div key={index} className="flex flex-col h-full">
                  {CardContent}
                </div>
              );
            }

            return (
              <a
                key={index}
                href={projectUrl}
                aria-label={`View ${project.title} case study`}
                className="flex flex-col h-full outline-none focus-visible:ring-2 focus-visible:ring-blush rounded-lg"
              >
                {CardContent}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
