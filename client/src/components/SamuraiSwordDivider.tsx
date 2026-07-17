import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SamuraiSwordDivider() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section ref={ref} className="py-6 relative overflow-hidden">
      <div className="container mx-auto px-6 relative">
        {/* Clean Cutting Animation */}
        <div className="relative h-24 flex items-center justify-center">
          
          {/* Main cutting line - draws across screen */}
          <motion.div
            className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.2 
            }}
            style={{ transformOrigin: "left" }}
          />
          
          {/* Cutting blade trail */}
          <motion.div
            className="absolute w-full h-[1px] bg-white/80"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ 
              duration: 1.0, 
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.3 
            }}
            style={{ transformOrigin: "left" }}
          />
          
          {/* Glow effect */}
          <motion.div
            className="absolute w-full h-[6px] bg-gradient-to-r from-transparent via-accent/30 to-transparent blur-md"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
            transition={{ 
              duration: 1.4, 
              ease: "easeOut",
              delay: 0.1 
            }}
            style={{ transformOrigin: "left" }}
          />
          
          {/* Sharp impact sparks */}
          {[...Array(5)].map((_, index) => (
            <motion.div
              key={index}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${30 + index * 15}%`,
                top: `${48 + (index % 2 === 0 ? 3 : -3)}%`,
              }}
              initial={{ opacity: 0, scale: 0, y: 0 }}
              animate={isInView ? { 
                opacity: [0, 1, 0], 
                scale: [0, 2, 0],
                y: [0, index % 2 === 0 ? -20 : 20]
              } : { opacity: 0, scale: 0, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.8 + index * 0.1,
                ease: "easeOut"
              }}
            />
          ))}
          
          {/* End impact flash */}
          <motion.div
            className="absolute right-0 w-12 h-12 bg-white/40 rounded-full blur-sm"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { 
              opacity: [0, 1, 0], 
              scale: [0, 1.5, 0]
            } : { opacity: 0, scale: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 1.2,
              ease: "easeOut"
            }}
          />
          
          {/* Subtle ambient glow */}
          <motion.div
            className="absolute w-full h-[12px] bg-gradient-to-r from-transparent via-accent/15 to-transparent blur-xl"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
            transition={{ 
              duration: 1.8, 
              ease: "easeInOut",
              delay: 0.4 
            }}
            style={{ transformOrigin: "left" }}
          />
        </div>
      </div>
    </section>
  );
}