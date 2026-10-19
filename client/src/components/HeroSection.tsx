import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import HeroBackground from "./HeroBackground";
import DesignKnotLayer from "./DesignKnotLayer";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll tracking across the hero section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth responsive spring for physical, tactile feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 24,
    restDelta: 0.001,
  });

  // ───────────────────────────────────────────────────────────────────────────
  // Staggered emergence of the underlying content:
  // Phase A (0.00 - 0.18): 100% Chaos. Text is strictly hidden (opacity 0).
  // Phase B (0.18 - 0.65): Reorganisation. Central chaos matrix parts outward;
  //                        content emerges sequentially:
  //                        1. Name: 0.18 -> 0.38
  //                        2. Headline: 0.32 -> 0.50
  //                        3. Supporting Description: 0.46 -> 0.62
  //                        4. CTA Buttons: 0.52 -> 0.66
  // Phase C (0.66 - 1.00): Full Clarity. Chaos layer settled/cleared;
  //                        hero text and buttons 100% visible, crisp, interactive.
  // ───────────────────────────────────────────────────────────────────────────

  // Name transforms
  const nameOpacity = useTransform(smoothProgress, [0.18, 0.38], [0, 1]);
  const nameY = useTransform(smoothProgress, [0.18, 0.38], [24, 0]);
  const nameScale = useTransform(smoothProgress, [0.18, 0.38], [0.95, 1]);

  // Headline transforms
  const headlineOpacity = useTransform(smoothProgress, [0.32, 0.50], [0, 1]);
  const headlineY = useTransform(smoothProgress, [0.32, 0.50], [20, 0]);

  // Supporting description transforms
  const descOpacity = useTransform(smoothProgress, [0.46, 0.62], [0, 1]);
  const descY = useTransform(smoothProgress, [0.46, 0.62], [16, 0]);

  // CTA buttons transforms
  const ctaOpacity = useTransform(smoothProgress, [0.52, 0.66], [0, 1]);
  const ctaY = useTransform(smoothProgress, [0.52, 0.66], [16, 0]);
  const ctaPointerEvents = useTransform(smoothProgress, (p) => (p > 0.58 ? "auto" : "none"));

  // Track interactive state for keyboard navigation and touch hit-testing
  const [isInteractive, setIsInteractive] = useState(false);

  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (latest) => {
      const active = latest >= 0.58;
      setIsInteractive((prev) => (prev !== active ? active : prev));
    });
    return () => unsubscribe();
  }, [smoothProgress]);

  // Bottom scroll cue fades out immediately on initial scroll
  const indicatorOpacity = useTransform(smoothProgress, [0, 0.12], [0.75, 0]);

  // If user prefers reduced motion, render immediately clear static hero
  if (shouldReduceMotion) {
    return (
      <section className="relative min-h-[85vh] flex items-center justify-center pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden bg-[#181719]">
        <HeroBackground />
        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display font-medium text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] text-[#F5F4F6] tracking-[-0.03em] leading-[1.05] mb-6">
              <span className="inline-block text-[#F5F4F6] mr-3">Vedansh</span>
              <span className="inline-block text-[#F5F4F6]">Wandalkar</span>
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
      ref={containerRef} 
      className="relative h-[175vh] sm:h-[190vh] bg-[#181719]"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-[#181719]">
        <HeroBackground />

        {/* The Design Knot: visual complexity that resolves into clarity on scroll */}
        <DesignKnotLayer progress={smoothProgress} />

        {/* Main Hero Content: completely concealed at scroll = 0, revealed progressively */}
        <div 
          className={cn(
            "container mx-auto px-6 relative z-10 pt-14 sm:pt-0 transition-opacity duration-150",
            isInteractive ? "pointer-events-auto" : "pointer-events-none select-none"
          )}
          aria-hidden={!isInteractive}
          {...(!isInteractive ? { inert: "" } : {})}
        >
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
              className={cn(
                "flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 relative z-30",
                isInteractive ? "pointer-events-auto" : "pointer-events-none"
              )}
            >
              <a
                href="mailto:vedansh.wandalkar@gmail.com?subject=Hello"
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={isInteractive ? 0 : -1}
                className={cn(
                  "btn-tactile w-full sm:w-auto bg-blush hover:bg-[#edd8d1] text-ink font-medium text-sm tracking-wide px-7 py-3 rounded-md shadow-sm transition-all duration-150 inline-flex items-center justify-center",
                  isInteractive ? "pointer-events-auto" : "pointer-events-none"
                )}
              >
                Contact
              </a>
              
              <a 
                href="#projects" 
                tabIndex={isInteractive ? 0 : -1}
                className={cn(
                  "w-full sm:w-auto text-[#AAA7AE] hover:text-[#F5F4F6] border border-white/15 hover:border-white/30 bg-white/[0.02] hover:bg-white/[0.05] px-6 py-3 rounded-md text-sm font-medium tracking-wide transition-all duration-200 inline-flex items-center justify-center gap-2 group",
                  isInteractive ? "pointer-events-auto" : "pointer-events-none"
                )}
                onClick={(e) => {
                  if (!isInteractive) {
                    e.preventDefault();
                    return;
                  }
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

        {/* Scroll hint indicator at the bottom that fades as user scrolls */}
        <motion.div 
          style={{ opacity: indicatorOpacity }}
          className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 pointer-events-none select-none z-10 font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-cool-300"
        >
          <span>scroll to untangle</span>
          <ChevronDown className="w-3.5 h-3.5 text-blush animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
