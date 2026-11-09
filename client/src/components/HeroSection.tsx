import React, { useState } from "react";
import { useReducedMotion } from "framer-motion";
import HeroBackground from "./HeroBackground";
import heroMangaWebp from "@/assets/images/hero-manga-state.webp";
import heroMangaPng from "@/assets/images/hero-manga-state.png";
import heroPhotoWebp from "@/assets/images/hero-photo-state.webp";
import heroPhotoPng from "@/assets/images/hero-photo-state.png";

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const [isPhotoActive, setIsPhotoActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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
            <div className="mb-5 lg:mb-6">
              <h1 className="font-display font-bold uppercase tracking-[-0.035em] text-[#F5F4F6] text-[3.25rem] lg:text-[4.25rem] xl:text-[4.65rem] leading-[0.91] select-none">
                <span className="block text-[#F5F4F6]">
                  VEDANSH
                </span>
                <span className="block text-[#F5F4F6]">
                  WANDAL<span className="text-blush">KAR</span>
                </span>
              </h1>

              <p className="font-sans text-[13px] lg:text-[14px] text-[#AAA7AE] font-normal tracking-[0.01em] mt-2 lg:mt-2.5 select-none">
                Product Designer
              </p>
            </div>

            {/* 2. Value Proposition & Action Block */}
            <div className="flex flex-col items-start">
              
              {/* Headline: Second most prominent element, two balanced lines */}
              <h2 className="font-display font-medium text-[#F5F4F6] text-[1.65rem] lg:text-[2.05rem] xl:text-[2.25rem] tracking-[-0.02em] leading-[1.18] max-w-[420px] lg:max-w-[470px] mb-3 lg:mb-3.5">
                Designing products that reduce uncertainty.
              </h2>

              {/* Supporting Copy: Clearly secondary, comfortable reading width */}
              <p className="font-sans text-[14px] lg:text-[15px] text-[#AAA7AE] font-normal leading-[1.6] max-w-[385px] lg:max-w-[415px] mb-6 lg:mb-7">
                I turn complex workflows, information, and decisions into thoughtful product experiences.
              </p>

              {/* CTA: Proportionate action button */}
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="btn-tactile inline-flex items-center gap-2 bg-blush text-ink font-medium text-xs sm:text-[13px] px-5 py-2.5 rounded-[5px] hover:bg-[#edd8d1] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blush group"
              >
                <span>Explore selected work</span>
                <span className="text-sm leading-none transition-transform duration-200 group-hover:translate-y-0.5">↓</span>
              </a>

            </div>

          </div>

          {/* Right Column: Editorial Illustration Presentation */}
          <div className="md:col-span-5 flex flex-col items-end justify-center">
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
          </div>

        </div>

        {/* =====================================================================
            MOBILE COMPOSITION (< md / 390px Viewports)
            Strict sequence with precise editorial spacing:
            1. Name
            2. Illustration Frame
            3. Cohesive Introduction Group (Role -> Headline -> Description -> CTA)
               - Role to Headline: ~12-16px (mb-3.5 = 14px)
               - Headline to Description: ~16-20px (mb-4 = 16px)
               - Description to CTA: ~24-28px (mb-6 = 24px)
            ===================================================================== */}
        <div className="block md:hidden relative w-full">
          
          {/* 1. Name: Large and impactful, tight line-height, controlled margin to illustration */}
          <h1 className="font-display font-bold uppercase tracking-[-0.035em] text-[#F5F4F6] text-[2.45rem] sm:text-5xl leading-[0.91] select-none mb-3">
            <span className="block text-[#F5F4F6]">
              VEDANSH
            </span>
            <span className="block text-[#F5F4F6]">
              WANDAL<span className="text-blush">KAR</span>
            </span>
          </h1>

          {/* 2. Illustration Frame: Sized to avoid pushing content excessively, minimal vertical gap */}
          <div className="w-full max-w-[235px] sm:max-w-[260px] mb-3.5">
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
          </div>

          {/* 3. Cohesive Introduction Text Group: Role -> Headline -> Description -> CTA */}
          <div className="flex flex-col items-start text-left">
            
            {/* Role: Positioned with 14px gap (within 12-16px specification) before headline */}
            <p className="font-sans text-xs text-[#AAA7AE] font-normal tracking-[0.01em] mb-3 select-none">
              Product Designer
            </p>

            {/* Headline: Natural 2-line break, 16px gap (within 16-20px specification) before description */}
            <h2 className="font-display font-medium text-[#F5F4F6] text-[1.45rem] sm:text-[1.65rem] tracking-[-0.02em] leading-[1.2] max-w-[290px] mb-4">
              Designing products that reduce uncertainty.
            </h2>

            {/* Supporting Copy: Constrained to 310px to avoid awkward wrapping, 24px gap (within 24-28px specification) before CTA */}
            <p className="font-sans text-[13.5px] sm:text-[14px] text-[#AAA7AE] font-normal leading-[1.55] max-w-[310px] mb-6">
              I turn complex workflows, information, and decisions into thoughtful product experiences.
            </p>

            {/* CTA: Proportionate action button */}
            <a
              href="#projects"
              onClick={handleScrollToProjects}
              className="btn-tactile inline-flex items-center gap-2 bg-blush text-ink font-medium text-xs px-5 py-2.5 rounded-[5px] hover:bg-[#edd8d1] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blush group"
            >
              <span>Explore selected work</span>
              <span className="text-sm leading-none transition-transform duration-200 group-hover:translate-y-0.5">↓</span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
