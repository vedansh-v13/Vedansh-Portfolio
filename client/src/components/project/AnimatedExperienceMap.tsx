import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

export function AnimatedExperienceMap() {
  const stages = [
    { title: "Investor", description: "Establish trust" },
    { title: "Onboarding", description: "Complete KYC & account creation" },
    { title: "Portfolio", description: "Understand wealth at a glance" },
    { title: "Fund Discovery", description: "Compare investment opportunities" },
    { title: "Invest", description: "Execute with confidence" },
    { title: "Manage", description: "Adapt to changing goals" },
    { title: "Track", description: "Monitor long-term performance" }
  ];

  const [activeStage, setActiveStage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(
      stages.length - 1,
      Math.floor(latest * stages.length)
    );
    setActiveStage(index);
  });

  return (
    <div ref={containerRef} className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-24 items-start py-8 sm:py-12">
      {/* Left side: Timeline */}
      <div className="relative">
        <span className="font-mono text-xs text-blush uppercase tracking-widest block mb-6 md:mb-10">
          [ DESIGN SCOPE // EXPERIENCE MAP ]
        </span>

        {/* Mobile Sticky Information Display: pinned below navbar so it stays visible and readable during scroll */}
        <div className="md:hidden sticky top-20 z-20 mb-8 bg-[#1F1E21]/95 backdrop-blur-md border border-white/15 rounded-lg p-4 shadow-xl overflow-hidden">
          <div className="relative w-full min-h-[64px] flex items-center">
            {stages.map((stage, i) => (
              <motion.div
                key={i}
                className={cn(
                  "w-full flex items-center",
                  activeStage === i ? "relative z-10" : "absolute inset-0 z-0 pointer-events-none"
                )}
                initial={false}
                animate={{ 
                  opacity: activeStage === i ? 1 : 0,
                  y: activeStage === i ? 0 : 6,
                }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-full relative pl-3.5 border-l-2 border-blush">
                  <p className="font-mono text-[10px] tracking-widest text-blush uppercase mb-0.5">
                    STAGE 0{i + 1} // {stage.title}
                  </p>
                  <p className="text-base font-display font-light text-[#F5F4F6] leading-snug">
                    {stage.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="relative pl-10 space-y-10 sm:space-y-12">
          {/* Background track line */}
          <div className="absolute left-[7px] top-4 bottom-4 w-[1px] bg-white/10" />
          
          {/* Animated fill line */}
          <motion.div 
            className="absolute left-[7px] top-4 w-[1px] bg-blush origin-top"
            style={{ height: lineHeight }}
          />

          {stages.map((stage, i) => (
            <motion.div 
              key={i}
              role="button"
              tabIndex={0}
              className="relative cursor-pointer group py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-blush focus-visible:rounded"
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: i * 0.08 }}
              onMouseEnter={() => setActiveStage(i)}
              onClick={() => setActiveStage(i)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveStage(i);
                }
              }}
            >
              {/* Dot */}
              <div className={cn(
                "absolute -left-[40px] top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full transition-all duration-200 z-10 border",
                activeStage === i 
                  ? "bg-blush border-blush shadow-sm" 
                  : "bg-[#181719] border-white/20 group-hover:border-blush/60"
              )} />
              
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-[#AAA7AE]/60">0{i + 1}</span>
                <h5 className={cn(
                  "text-2xl sm:text-3xl font-display font-light transition-colors duration-200",
                  activeStage === i ? "text-[#F5F4F6] font-medium" : "text-[#AAA7AE] group-hover:text-white"
                )}>
                  {stage.title}
                </h5>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right side: Desktop Sticky Description display */}
      <div className="hidden md:flex md:sticky top-1/3 items-center min-h-[140px] bg-[#1F1E21] border border-white/15 rounded-lg p-6 md:p-8 shadow-xl relative overflow-hidden">
        <div className="relative w-full">
          {stages.map((stage, i) => (
            <motion.div
              key={i}
              className={cn(
                "w-full flex items-center",
                activeStage === i ? "relative z-10" : "absolute inset-0 z-0 pointer-events-none"
              )}
              initial={false}
              animate={{ 
                opacity: activeStage === i ? 1 : 0,
                y: activeStage === i ? 0 : 8,
              }}
              transition={{ duration: 0.25 }}
            >
              <div className="w-full relative">
                {activeStage === i && (
                  <motion.div 
                    layoutId="active-indicator"
                    className="absolute -left-6 md:-left-8 top-1/2 -translate-y-1/2 w-1 h-8 bg-blush rounded-r"
                  />
                )}
                <p className="font-mono text-xs tracking-widest text-blush uppercase mb-2">STAGE 0{i + 1} // {stage.title}</p>
                <p className="text-xl sm:text-2xl font-display font-light text-[#F5F4F6] leading-snug">{stage.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
