import { useState, useEffect } from "react";
import { motion, useMotionValue, animate, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import HeroBackground from "./HeroBackground";
import DesignKnotLayer from "./DesignKnotLayer";

// Module-level flag to avoid replaying the full reveal when returning from case studies via client routing
let hasHeroAnimated = false;

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const initialValue = hasHeroAnimated || shouldReduceMotion ? 1 : 0;
  const progress = useMotionValue(initialValue);
  const [isInteractive, setIsInteractive] = useState(initialValue === 1);

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
      document.fonts.ready.then(() => {
        if (isMounted) startReveal();
      }).catch(() => {
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

  // Headline transforms (with smooth deceleration curve)
  const headlineOpacity = useTransform(progress, [0.62, 0.80], [0, 1]);
  const headlineY = useTransform(progress, [0.62, 0.71, 0.80], [20, 5, 0]);

  // Supporting description transforms (with smooth deceleration curve)
  const descOpacity = useTransform(progress, [0.76, 0.90], [0, 1]);
  const descY = useTransform(progress, [0.76, 0.83, 0.90], [16, 4, 0]);

  // CTA buttons transforms (with smooth deceleration curve)
  const ctaOpacity = useTransform(progress, [0.85, 0.98], [0, 1]);
  const ctaY = useTransform(progress, [0.85, 0.92, 0.98], [16, 4, 0]);
  const ctaPointerEvents = useTransform(progress, (p) => (p > 0.88 ? "auto" : "none"));

  // If user prefers reduced motion, render immediately clear static hero
  if (shouldReduceMotion) {
    return (
      <section className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center pt-28 sm:pt-36 pb-20 sm:pb-24 overflow-hidden bg-[#181719]">
        <HeroBackground />
        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display font-medium text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] text-[#F5F4F6] tracking-[-0.03em] leading-[1.05] mb-6">
              <span className="inline-block text-[#F5F4F6] mr-3 font-medium">Vedansh</span>
              <span className="inline-block text-[#F5F4F6] font-medium">Wandalkar</span>
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-light text-blush tracking-[-0.02em] mt-4 sm:mt-5 leading-snug">
                Designing products that reduce uncertainty.
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-[#AAA7AE] max-w-2xl mx-auto leading-relaxed font-light mb-10">
              I design thoughtful products and AI-powered experiences that make complex decisions easier.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <a
                href="mailto:vedansh.wandalkar@gmail.com?subject=Hello"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile w-full sm:w-auto bg-blush hover:bg-[#edd8d1] text-ink font-medium text-sm tracking-wide px-7 py-3 rounded-md shadow-sm transition-all duration-150 inline-flex items-center justify-center"
              >
                Contact
              </a>
              <a 
                href="#projects" 
                className="w-full sm:w-auto text-[#AAA7AE] hover:text-[#F5F4F6] border border-white/15 hover:border-white/30 bg-white/[0.02] hover:bg-white/[0.05] px-6 py-3 rounded-md text-sm font-medium tracking-wide transition-all duration-200 inline-flex items-center justify-center gap-2 group"
                onClick={(e) => {
                  e.preventDefault();
                  const lenis = (window as unknown as { lenis?: { scrollTo: (target: string) => void } }).lenis;
                  if (lenis) {
                    lenis.scrollTo('#projects');
                  } else {
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <span>See my work</span>
                <ArrowRight className="w-4 h-4 text-blush group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      id="hero"
      className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#181719] pt-24 sm:pt-28 pb-16 sm:pb-20"
    >
      <HeroBackground />

      {/* The Design Knot: visual complexity that resolves into clarity on time trigger */}
      <DesignKnotLayer progress={progress} />

      {/* Main Hero Content: revealed progressively via time trigger */}
      <div className="container mx-auto px-6 relative z-10 pt-8 sm:pt-0">
        <div className="max-w-4xl mx-auto text-center">
          {/* Name */}
          <motion.h1 
            style={{ 
              opacity: nameOpacity, 
              y: nameY, 
              scale: nameScale 
            }}
            className="font-display font-medium text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] text-[#F5F4F6] tracking-[-0.03em] leading-[1.05] mb-6 select-none"
          >
            <span className="inline-block text-[#F5F4F6] mr-3 font-medium">Vedansh</span>
            <span className="inline-block text-[#F5F4F6] font-medium">Wandalkar</span>
            
            {/* Headline */}
            <motion.span 
              style={{ 
                opacity: headlineOpacity, 
                y: headlineY 
              }}
              className="block text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-light text-blush tracking-[-0.02em] mt-4 sm:mt-5 leading-snug"
            >
              Designing products that reduce uncertainty.
            </motion.span>
          </motion.h1>

          {/* Supporting Description */}
          <motion.p 
            style={{ 
              opacity: descOpacity, 
              y: descY 
            }}
            className="text-base sm:text-lg md:text-xl text-[#AAA7AE] max-w-2xl mx-auto leading-relaxed font-light mb-10 select-none"
          >
            I design thoughtful products and AI-powered experiences that make complex decisions easier.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            style={{ 
              opacity: ctaOpacity, 
              y: ctaY,
              pointerEvents: ctaPointerEvents as unknown as "auto" | "none"
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 relative z-30"
          >
            <a
              href="mailto:vedansh.wandalkar@gmail.com?subject=Hello"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tactile w-full sm:w-auto bg-blush hover:bg-[#edd8d1] text-ink font-medium text-sm tracking-wide px-7 py-3 rounded-md shadow-sm transition-all duration-150 inline-flex items-center justify-center"
            >
              Contact
            </a>
            
            <a 
              href="#projects" 
              className="w-full sm:w-auto text-[#AAA7AE] hover:text-[#F5F4F6] border border-white/15 hover:border-white/30 bg-white/[0.02] hover:bg-white/[0.05] px-6 py-3 rounded-md text-sm font-medium tracking-wide transition-all duration-200 inline-flex items-center justify-center gap-2 group"
              onClick={(e) => {
                e.preventDefault();
                const lenis = (window as unknown as { lenis?: { scrollTo: (target: string) => void } }).lenis;
                if (lenis) {
                  lenis.scrollTo('#projects');
                } else {
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <span>See my work</span>
              <ArrowRight className="w-4 h-4 text-blush group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
