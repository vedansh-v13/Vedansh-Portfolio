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
    <div ref={containerRef} className="relative grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-start py-12">
      {/* Left side: Timeline */}
      <div className="relative">
        <h4 className="text-xs tracking-widest text-[#c0392b] font-bold uppercase mb-12">Design Scope / Experience Map</h4>
        
        <div className="relative pl-10 space-y-16">
          {/* Background track line */}
          <div className="absolute left-[7px] top-4 bottom-4 w-[2px] bg-white/10" />
          
          {/* Animated red line */}
          <motion.div 
            className="absolute left-[7px] top-4 w-[2px] bg-[#c0392b] origin-top"
            style={{ height: lineHeight }}
          />

          {stages.map((stage, i) => (
            <motion.div 
              key={i}
              className="relative cursor-pointer group py-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={() => setActiveStage(i)}
            >
              {/* Dot */}
              <div className={cn(
                "absolute -left-[42px] top-1/2 -translate-y-1/2 w-[14px] h-[14px] rounded-full transition-colors duration-300 z-10",
                activeStage === i ? "bg-[#c0392b] shadow-[0_0_15px_rgba(192,57,43,0.6)]" : "bg-white/20 group-hover:bg-[#c0392b]/50"
              )} />
              
              <h5 className={cn(
                "text-3xl font-light artistic-text transition-colors duration-300",
                activeStage === i ? "text-white" : "text-gray-500 group-hover:text-gray-300"
              )}>
                {stage.title}
              </h5>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right side: Description display */}
      <div className="md:sticky top-1/3 flex items-center min-h-[160px] bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm shadow-xl">
        <div className="relative w-full">
          {stages.map((stage, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 flex items-center"
              initial={false}
              animate={{ 
                opacity: activeStage === i ? 1 : 0,
                y: activeStage === i ? 0 : 10,
                pointerEvents: activeStage === i ? "auto" : "none"
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-full relative">
                {activeStage === i && (
                  <motion.div 
                    layoutId="active-indicator"
                    className="absolute -left-8 top-1/2 -translate-y-1/2 w-1 h-8 bg-[#c0392b] rounded-r-full"
                  />
                )}
                <p className="text-xs tracking-widest text-gray-500 font-bold uppercase mb-3">{stage.title}</p>
                <p className="text-2xl md:text-3xl text-gray-200 font-light leading-snug">{stage.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
