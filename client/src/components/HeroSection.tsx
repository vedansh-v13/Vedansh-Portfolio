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
  // Phase 2 (0.45 - 0.65): Name emerges toward latter part of untangling (~1.0s - 1.4s).
  // Phase 3 (0.62 - 0.80): Headline settles in after name starts to settle (~1.4s - 1.75s).
  // Phase 4 (0.76 - 0.90): Supporting description glides into place (~1.65s - 2.0s).
  // Phase 5 (0.85 - 0.98): CTA buttons emerge and activate (~1.85s - 2.15s).
  // Phase 6 (0.98 - 1.00): Full clarity reached at rest.
  // ───────────────────────────────────────────────────────────────────────────

  // Name transforms (with smooth deceleration curve)
  const nameOpacity = useTransform(progress, [0.45, 0.65], [0, 1]);
  const nameY = useTransform(progress, [0.45, 0.55, 0.65], [24, 6, 0]);
  const nameScale = useTransform(progress, [0.45, 0.55, 0.65], [0.96, 0.99, 1]);

  // Headline & Role transforms (with smooth deceleration curve)
  const headlineOpacity = useTransform(progress, [0.62, 0.80], [0, 1]);
  const headlineY = useTransform(progress, [0.62, 0.71, 0.80], [20, 5, 0]);

  // Supporting description transforms (with smooth deceleration curve)
  const descOpacity = useTransform(progress, [0.76, 0.90], [0, 1]);
  const descY = useTransform(progress, [0.76, 0.83, 0.90], [16, 4, 0]);

  // CTA buttons transforms (with smooth deceleration curve)
  const ctaOpacity = useTransform(progress, [0.85, 0.98], [0, 1]);
  const ctaY = useTransform(progress, [0.85, 0.92, 0.98], [16, 4, 0]);
  const ctaPointerEvents = useTransform(progress, (p) => (p > 0.88 ? "auto" : "none"));

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
            - Left Column (7 cols): Name + Role tightly paired -> Controlled gap -> Headline -> Description -> CTA
            - Right Column (5 cols): Editorial artwork plate vertically aligned with the left composition
            ===================================================================== */}
        <div className="hidden md:grid md:grid-cols-12 md:gap-8 lg:gap-12 xl:gap-14 items-center">
          
          {/* Left Column: Unified typographic composition */}
          <div className="md:col-span-7 flex flex-col items-start justify-center">
            
            {/* 1. Identity Lockup: Dominant Name + Role tightly connected */}
            <motion.div
              style={{
                opacity: nameOpacity,
                y: nameY,
                scale: nameScale,
              }}
              className="mb-5 lg:mb-6"
            >
              <h1 className="font-display font-bold uppercase tracking-[-0.035em] text-[#F5F4F6] text-[3.25rem] lg:text-[4.2rem] xl:text-[4.75rem] leading-[0.9] select-none">
                <span className="block text-[#F5F4F6]">
                  VEDANSH
                </span>
                <span className="block text-[#F5F4F6]">
                  WANDAL<span className="text-blush">KAR</span>
                </span>
              </h1>
              
              {/* Role: Positioned directly under the name with controlled negative space */}
              <p className="font-sans text-xs lg:text-[13px] text-[#AAA7AE] font-normal tracking-[0.01em] mt-3 select-none">
                Product Designer
              </p>
            </motion.div>

            {/* 2. Editorial Introduction: Headline -> Description -> CTA */}
            <div className="flex flex-col items-start text-left max-w-xl">
              
              {/* Headline: Confident, primary focal point */}
              <motion.h2
                style={{
                  opacity: headlineOpacity,
                  y: headlineY,
                }}
                className="font-display font-medium text-[#F5F4F6] text-2xl lg:text-[1.85rem] xl:text-[2.1rem] tracking-[-0.02em] leading-[1.2] max-w-[460px] mb-4"
              >
                Designing products that{" "}
                <span className="text-[#da4942]">reduce uncertainty.</span>
              </motion.h2>

              {/* Supporting Copy: Constrained line length for effortless readability */}
              <motion.p
                style={{
                  opacity: descOpacity,
                  y: descY,
                }}
                className="font-sans text-sm lg:text-[15px] text-[#AAA7AE] font-normal leading-[1.6] max-w-[420px] mb-6"
              >
                I turn complex workflows, information, and decisions into thoughtful product experiences.
              </motion.p>

              {/* CTA: Tactile anchor, visually connected to text above */}
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
                  className="btn-tactile inline-flex items-center gap-2 bg-blush text-ink font-medium text-xs sm:text-[13px] px-5 py-2.5 rounded-[5px] hover:bg-[#edd8d1] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blush group"
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
            <div className="w-full max-w-[270px] md:max-w-[290px] lg:max-w-[340px] xl:max-w-[355px]">
              
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
                className="relative aspect-[3/4] w-full overflow-hidden cursor-pointer select-none shadow-[0_12px_28px_-8px_rgba(0,0,0,0.55)] focus:outline-none focus-visible:ring-2 focus-visible:ring-blush"
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
              </div>

              {/* Single understated interaction instruction */}
              <p className="mt-2 text-right font-sans text-[11px] text-[#AAA7AE]/75 tracking-[0.01em] select-none transition-colors">
                {showPhoto ? "Original photograph" : "Hover to reveal original photograph"}
              </p>

            </div>
          </motion.div>

        </div>

        {/* =====================================================================
            MOBILE COMPOSITION (< md / 390px Viewports)
            Strict sequence with precise editorial spacing:
            1. Name
            2. Illustration Frame
            3. Cohesive Introduction Group (Role -> Headline -> Description -> CTA)
               - Role to Headline: ~12-16px (mb-3 = 12px)
               - Headline to Description: ~16-20px (mb-4 = 16px)
               - Description to CTA: ~24-28px (mb-6 = 24px)
            ===================================================================== */}
        <div className="block md:hidden relative w-full">
          
          {/* 1. Name: Large and impactful, tight line-height, controlled margin to illustration */}
          <motion.h1
            style={{
              opacity: nameOpacity,
              y: nameY,
              scale: nameScale,
            }}
            className="font-display font-bold uppercase tracking-[-0.035em] text-[#F5F4F6] text-[2.45rem] sm:text-5xl leading-[0.91] select-none mb-3"
          >
            <span className="block text-[#F5F4F6]">
              VEDANSH
            </span>
            <span className="block text-[#F5F4F6]">
              WANDAL<span className="text-blush">KAR</span>
            </span>
          </motion.h1>

          {/* 2. Illustration Frame: Sized to avoid pushing content excessively, minimal vertical gap */}
          <motion.div
            style={{
              opacity: illustrationOpacity,
              y: illustrationY,
              scale: illustrationScale,
            }}
            className="w-full max-w-[235px] sm:max-w-[260px] mb-3.5"
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
            </div>

            {/* Subtle tap instruction */}
            <p className="mt-1 font-sans text-[10px] sm:text-[11px] text-[#AAA7AE]/75 tracking-[0.01em] select-none">
              {showPhoto ? "Original photograph · Tap to restore" : "Tap to reveal original photograph"}
            </p>
          </motion.div>

          {/* 3. Cohesive Introduction Text Group: Role -> Headline -> Description -> CTA */}
          <div className="flex flex-col items-start text-left">
            
            {/* Role: Positioned with 12px gap before headline */}
            <motion.p
              style={{
                opacity: headlineOpacity,
                y: headlineY,
              }}
              className="font-sans text-xs text-[#AAA7AE] font-normal tracking-[0.01em] mb-3 select-none"
            >
              Product Designer
            </motion.p>

            {/* Headline: Natural 2-line break, 16px gap before description */}
            <motion.h2
              style={{
                opacity: headlineOpacity,
                y: headlineY,
              }}
              className="font-display font-medium text-[#F5F4F6] text-[1.45rem] sm:text-[1.65rem] tracking-[-0.02em] leading-[1.2] max-w-[290px] mb-4"
            >
              Designing products that{" "}
              <span className="text-[#da4942]">reduce uncertainty.</span>
            </motion.h2>

            {/* Supporting Copy: Constrained to 310px to avoid awkward wrapping, 24px gap before CTA */}
            <motion.p
              style={{
                opacity: descOpacity,
                y: descY,
              }}
              className="font-sans text-[13.5px] sm:text-[14px] text-[#AAA7AE] font-normal leading-[1.55] max-w-[310px] mb-6"
            >
              I turn complex workflows, information, and decisions into thoughtful product experiences.
            </motion.p>

            {/* CTA: Proportionate action button */}
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
                className="btn-tactile inline-flex items-center gap-2 bg-blush text-ink font-medium text-xs px-5 py-2.5 rounded-[5px] hover:bg-[#edd8d1] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blush group"
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
