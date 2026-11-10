import React, { useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  animate,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import HeroBackground from "./HeroBackground";
import DesignKnotLayer from "./DesignKnotLayer";
import heroMangaWebp from "@/assets/images/hero-manga-state.webp";
import heroMangaPng from "@/assets/images/hero-manga-state.png";
import heroPhotoWebp from "@/assets/images/hero-photo-state.webp";
import heroPhotoPng from "@/assets/images/hero-photo-state.png";

// Module-level flag to avoid replaying the full reveal when returning from case studies via client routing
let hasHeroAnimated = false;

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const initialValue = hasHeroAnimated || shouldReduceMotion ? 1 : 0;
  const progress = useMotionValue(initialValue);
  const [isInteractive, setIsInteractive] = useState(initialValue === 1);

  const [isPhotoActive, setIsPhotoActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // If user prefers reduced motion or hero has already played in this session, stay at 100% clarity
    if (hasHeroAnimated || shouldReduceMotion) {
      progress.set(1);
      setIsInteractive(true);
      return;
    }

    let isMounted = true;
    let timer: NodeJS.Timeout | null = null;
    let controls: { stop: () => void } | null = null;

    const startReveal = () => {
      if (!isMounted) return;
      // 900ms initial pause: knot alone, centered and still in the dark viewport
      timer = setTimeout(() => {
        if (!isMounted) return;
        controls = animate(progress, 1, {
          duration: 2.2, // Generous 2.2s reveal timeline
          ease: "linear", // Linear timeline so progress keyframes map strictly to real elapsed seconds
          onComplete: () => {
            if (isMounted) {
              setIsInteractive(true);
              hasHeroAnimated = true;
            }
          },
        });
      }, 900);
    };

    // Start 900ms timer once fonts/document are ready to avoid stutter or incomplete layout
    if (typeof document !== "undefined" && document.fonts && document.fonts.ready) {
      document.fonts.ready
        .then(() => {
          if (isMounted) startReveal();
        })
        .catch(() => {
          if (isMounted) startReveal();
        });
    } else {
      startReveal();
    }

    // Safety fallback: ensure final hero state is 100% visible even if animation is interrupted
    const safetyTimer = setTimeout(() => {
      if (isMounted && progress.get() < 1) {
        progress.set(1);
        setIsInteractive(true);
        hasHeroAnimated = true;
      }
    }, 4000);

    return () => {
      isMounted = false;
      if (timer) clearTimeout(timer);
      if (safetyTimer) clearTimeout(safetyTimer);
      if (controls) controls.stop();
    };
  }, [shouldReduceMotion, progress]);

  // ───────────────────────────────────────────────────────────────────────────
  // Deliberately Staged Choreography (2.2s duration following 900ms hold):
  // Phase 1 (0.00 - 0.45): Knot untangles exclusively (~1.0s); zero text competing.
  // Phase 2 (0.45 - 0.65): Name & Role emerge toward latter part of untangling (~1.0s - 1.4s).
  // Phase 3 (0.62 - 0.80): Headline settles in after name starts to settle (~1.4s - 1.75s).
  // Phase 4 (0.75 - 0.95): CTA button emerges and activates (~1.65s - 2.1s).
  // Phase 5 (0.95 - 1.00): Full clarity reached at rest.
  // ───────────────────────────────────────────────────────────────────────────

  // Name & Role transforms (with smooth deceleration curve)
  const nameOpacity = useTransform(progress, [0.45, 0.65], [0, 1]);
  const nameY = useTransform(progress, [0.45, 0.55, 0.65], [24, 6, 0]);
  const nameScale = useTransform(progress, [0.45, 0.55, 0.65], [0.96, 0.99, 1]);

  // Headline transforms (with smooth deceleration curve)
  const headlineOpacity = useTransform(progress, [0.62, 0.80], [0, 1]);
  const headlineY = useTransform(progress, [0.62, 0.71, 0.80], [20, 5, 0]);

  // CTA buttons transforms (with smooth deceleration curve)
  const ctaOpacity = useTransform(progress, [0.75, 0.95], [0, 1]);
  const ctaY = useTransform(progress, [0.75, 0.85, 0.95], [16, 4, 0]);
  const ctaPointerEvents = useTransform(progress, (p) => (p > 0.82 ? "auto" : "none"));

  // Illustration frame transforms (emerging harmoniously with the layout)
  const illustrationOpacity = useTransform(progress, [0.48, 0.70], [0, 1]);
  const illustrationY = useTransform(progress, [0.48, 0.59, 0.70], [24, 6, 0]);
  const illustrationScale = useTransform(progress, [0.48, 0.59, 0.70], [0.96, 0.99, 1]);

  const showPhoto = isHovered || isPhotoActive;

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const lenis = (window as unknown as { lenis?: { scrollTo: (target: string) => void } }).lenis;
    if (lenis) {
      lenis.scrollTo("#projects");
    } else {
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleToggleState = () => {
    setIsPhotoActive((prev) => !prev);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleToggleState();
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#181719] text-[#F5F4F6] overflow-hidden pt-16 sm:pt-24 lg:pt-28 pb-14 sm:pb-20 flex flex-col justify-center"
    >
      <HeroBackground />

      {/* The Design Knot: visual complexity that resolves into clarity on time trigger */}
      <DesignKnotLayer progress={progress} />

      <div className="container mx-auto px-6 sm:px-8 md:px-12 relative z-20 max-w-6xl">
        
        {/* =====================================================================
            DESKTOP & TABLET COMPOSITION (md+)
            Cohesive, vertically balanced editorial composition:
            1. Product Designer (eyebrow, in secondary blush #E7D0C8)
            2. VEDANSH WANDALKAR (dominant name display)
            3. Designing products that reduce uncertainty. (main headline)
            4. Explore selected work (CTA button)
            Right Column: Editorial artwork plate with vertical edge annotation
            ===================================================================== */}
        <div className="hidden md:grid md:grid-cols-12 md:gap-8 lg:gap-12 xl:gap-14 items-center">
          
          {/* Left Column: Unified typographic composition */}
          <div className="md:col-span-7 flex flex-col items-start justify-center">
            
            {/* 1. Identity Lockup: Role placed above Name */}
            <motion.div
              style={{
                opacity: nameOpacity,
                y: nameY,
                scale: nameScale,
              }}
              className="mb-6 lg:mb-8"
            >
              {/* 1. Role (Eyebrow): Strengthened visual presence in secondary blush (#E7D0C8) */}
              <p className="font-sans text-base sm:text-lg lg:text-[1.25rem] xl:text-[1.35rem] font-medium text-blush tracking-[0.02em] mb-3 lg:mb-3.5 select-none">
                Product Designer
              </p>

              {/* 2. Name: Dominant visual prominence */}
              <h1 className="font-display font-bold uppercase tracking-[-0.035em] text-[#F5F4F6] text-[3.75rem] lg:text-[4.75rem] xl:text-[5.5rem] leading-[0.88] select-none">
                <span className="block text-[#F5F4F6]">
                  VEDANSH
                </span>
                <span className="block text-[#F5F4F6]">
                  WANDAL<span className="text-blush">KAR</span>
                </span>
              </h1>
            </motion.div>

            {/* Editorial Introduction: Headline -> CTA */}
            <div className="flex flex-col items-start text-left max-w-xl">
              
              {/* 3. Main Headline: Primary focal point with sampled manga red accent */}
              <motion.h2
                style={{
                  opacity: headlineOpacity,
                  y: headlineY,
                }}
                className="font-display font-medium text-[#F5F4F6] text-[1.85rem] lg:text-[2.25rem] xl:text-[2.6rem] tracking-[-0.025em] leading-[1.18] max-w-[540px] mb-7 lg:mb-8"
              >
                Designing products that{" "}
                <span className="text-[#da4942]">reduce uncertainty.</span>
              </motion.h2>

              {/* 4. CTA: Tactile anchor, brought into natural position beneath headline */}
              <motion.div
                style={{
                  opacity: ctaOpacity,
                  y: ctaY,
                  pointerEvents: ctaPointerEvents as unknown as "auto" | "none",
                }}
              >
                <a
                  href="#projects"
                  onClick={handleScrollToProjects}
                  className="btn-tactile inline-flex items-center gap-2.5 bg-blush text-ink font-medium text-sm lg:text-[14.5px] px-6 py-3 rounded-[6px] hover:bg-[#edd8d1] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blush group"
                >
                  <span>Explore selected work</span>
                  <span className="text-sm leading-none transition-transform duration-200 group-hover:translate-y-0.5">↓</span>
                </a>
              </motion.div>

            </div>

          </div>

          {/* Right Column: Editorial Illustration Presentation */}
          <motion.div
            style={{
              opacity: illustrationOpacity,
              y: illustrationY,
              scale: illustrationScale,
            }}
            className="md:col-span-5 flex flex-col items-end justify-center"
          >
            <div className="w-full max-w-[285px] md:max-w-[310px] lg:max-w-[360px] xl:max-w-[380px]">
              
              {/* Restrained editorial artwork plate */}
              <div
                tabIndex={0}
                role="button"
                aria-label="Illustration of Vedansh Wandalkar. Hover or press Enter to reveal original photograph."
                aria-pressed={showPhoto}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={handleToggleState}
                onKeyDown={handleKeyDown}
                className="relative aspect-[3/4] w-full overflow-hidden cursor-pointer select-none shadow-[0_12px_28px_-8px_rgba(0,0,0,0.55)] focus:outline-none focus-visible:ring-2 focus-visible:ring-blush group"
              >
                {/* Layer 1: Original Photograph with matching warm paper border */}
                <div className="absolute inset-0 w-full h-full">
                  <picture>
                    <source type="image/webp" srcSet={heroPhotoWebp} />
                    <img
                      src={heroPhotoPng}
                      alt="Vedansh Wandalkar original photograph in forest holding camera"
                      className="w-full h-full object-cover"
                      loading="eager"
                      decoding="async"
                    />
                  </picture>
                  <div className="absolute inset-0 pointer-events-none border-x-[10px] border-t-[9px] border-b-[10px] border-[#F6F3EB]">
                    <div className="w-full h-full border border-[#181719]/85" />
                  </div>
                </div>

                {/* Layer 2: Vagabond-inspired Manga Illustration */}
                <div
                  className={`absolute inset-0 w-full h-full transition-opacity ease-out ${
                    shouldReduceMotion ? "duration-0" : "duration-500"
                  }`}
                  style={{ opacity: showPhoto ? 0 : 1 }}
                >
                  <picture>
                    <source type="image/webp" srcSet={heroMangaWebp} />
                    <img
                      src={heroMangaPng}
                      alt="Vagabond-style ink illustration of Vedansh Wandalkar"
                      className="w-full h-full object-cover"
                      loading="eager"
                      decoding="async"
                      {...({ fetchpriority: "high" } as any)}
                    />
                  </picture>
                </div>

                {/* Layer 3: Vertical Editorial Annotation along the bottom-right edge */}
                <div className="absolute right-3.5 sm:right-4 bottom-3.5 sm:bottom-4 z-30 pointer-events-none select-none flex items-center justify-end">
                  <span
                    className="font-mono text-[8.5px] lg:text-[9.5px] tracking-[0.16em] uppercase text-[#181719]/90 bg-[#F6F3EB]/95 backdrop-blur-sm px-1.5 py-2 rounded-[2px] shadow-sm border border-[#181719]/25 [writing-mode:vertical-rl] rotate-180"
                  >
                    {showPhoto ? "Original photograph" : "Hover to reveal original photograph"}
                  </span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

        {/* =====================================================================
            MOBILE COMPOSITION (< md / 390px Viewports)
            Strict sequence:
            1. Product Designer (eyebrow above the name)
            2. VEDANSH WANDALKAR (dominant name display)
            3. Illustration Frame (with vertical annotation along bottom-right edge)
            4. Designing products that reduce uncertainty. (main headline)
            5. Explore selected work (CTA button)
            ===================================================================== */}
        <div className="block md:hidden relative w-full">
          
          {/* 1. Role (Eyebrow): Strengthened visual presence above the name */}
          <motion.p
            style={{
              opacity: nameOpacity,
              y: nameY,
            }}
            className="font-sans text-sm sm:text-base font-medium text-blush tracking-[0.02em] mb-2 select-none"
          >
            Product Designer
          </motion.p>

          {/* 2. Name: Scaled up with dominant presence */}
          <motion.h1
            style={{
              opacity: nameOpacity,
              y: nameY,
              scale: nameScale,
            }}
            className="font-display font-bold uppercase tracking-[-0.035em] text-[#F5F4F6] text-[2.75rem] sm:text-[3.25rem] leading-[0.9] select-none mb-4"
          >
            <span className="block text-[#F5F4F6]">
              VEDANSH
            </span>
            <span className="block text-[#F5F4F6]">
              WANDAL<span className="text-blush">KAR</span>
            </span>
          </motion.h1>

          {/* 3. Illustration Frame: Sized proportionately with vertical edge annotation */}
          <motion.div
            style={{
              opacity: illustrationOpacity,
              y: illustrationY,
              scale: illustrationScale,
            }}
            className="w-full max-w-[245px] sm:max-w-[270px] mb-5"
          >
            <div
              tabIndex={0}
              role="button"
              aria-label="Illustration of Vedansh Wandalkar. Tap to reveal original photograph."
              aria-pressed={showPhoto}
              onClick={handleToggleState}
              onKeyDown={handleKeyDown}
              className="relative aspect-[3/4] w-full overflow-hidden cursor-pointer select-none shadow-[0_10px_24px_-6px_rgba(0,0,0,0.55)] active:scale-[0.99] transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-blush"
            >
              {/* Layer 1: Original Photograph */}
              <div className="absolute inset-0 w-full h-full">
                <picture>
                  <source type="image/webp" srcSet={heroPhotoWebp} />
                  <img
                    src={heroPhotoPng}
                    alt="Vedansh Wandalkar original photograph in forest"
                    className="w-full h-full object-cover"
                    loading="eager"
                    decoding="async"
                  />
                </picture>
                <div className="absolute inset-0 pointer-events-none border-x-[8px] border-t-[7px] border-b-[8px] border-[#F6F3EB]">
                  <div className="w-full h-full border border-[#181719]/85" />
                </div>
              </div>

              {/* Layer 2: Manga Illustration */}
              <div
                className={`absolute inset-0 w-full h-full transition-opacity ease-out ${
                  shouldReduceMotion ? "duration-0" : "duration-300"
                }`}
                style={{ opacity: showPhoto ? 0 : 1 }}
              >
                <picture>
                  <source type="image/webp" srcSet={heroMangaWebp} />
                  <img
                    src={heroMangaPng}
                    alt="Vagabond-style ink illustration of Vedansh Wandalkar"
                    className="w-full h-full object-cover"
                    loading="eager"
                    decoding="async"
                    {...({ fetchpriority: "high" } as any)}
                  />
                </picture>
              </div>

              {/* Layer 3: Vertical Editorial Annotation along the bottom-right edge */}
              <div className="absolute right-2.5 bottom-2.5 z-30 pointer-events-none select-none flex items-center justify-end">
                <span
                  className="font-mono text-[8px] sm:text-[9px] tracking-[0.14em] uppercase text-[#181719]/90 bg-[#F6F3EB]/95 backdrop-blur-sm px-1 py-1.5 rounded-[2px] shadow-sm border border-[#181719]/25 [writing-mode:vertical-rl] rotate-180"
                >
                  {showPhoto ? "Original photograph" : "Tap to reveal original photograph"}
                </span>
              </div>
            </div>
          </motion.div>

          {/* 4. Cohesive Introduction Text Group: Headline -> CTA */}
          <div className="flex flex-col items-start text-left">
            
            {/* 3. Headline: Natural 2-line break with manga red accent */}
            <motion.h2
              style={{
                opacity: headlineOpacity,
                y: headlineY,
              }}
              className="font-display font-medium text-[#F5F4F6] text-[1.65rem] sm:text-[1.85rem] tracking-[-0.025em] leading-[1.2] max-w-[320px] mb-5 sm:mb-6"
            >
              Designing products that{" "}
              <span className="text-[#da4942]">reduce uncertainty.</span>
            </motion.h2>

            {/* 4. CTA: Tactile anchor, directly beneath headline */}
            <motion.div
              style={{
                opacity: ctaOpacity,
                y: ctaY,
                pointerEvents: ctaPointerEvents as unknown as "auto" | "none",
              }}
            >
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="btn-tactile inline-flex items-center gap-2 bg-blush text-ink font-medium text-xs sm:text-sm px-5 py-2.5 rounded-[5px] hover:bg-[#edd8d1] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blush group"
              >
                <span>Explore selected work</span>
                <span className="text-sm leading-none transition-transform duration-200 group-hover:translate-y-0.5">↓</span>
              </a>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
