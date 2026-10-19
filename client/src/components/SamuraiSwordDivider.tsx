import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SamuraiSwordDivider() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <div ref={ref} className="w-full bg-[#181719] py-8 relative overflow-hidden select-none">
      <div className="container mx-auto px-6">
        <div className="relative flex items-center justify-between">
          {/* Left registration label */}
          <span className="text-[10px] font-mono text-[#AAA7AE] tracking-widest uppercase flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-blush" />
            SEC.01 / INDEX
          </span>

          {/* Center Expanding Hairline Rule */}
          <div className="flex-1 mx-6 relative h-[1px]">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/10 via-blush/40 to-white/10"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "center" }}
            />
          </div>

          {/* Right coordinate badge */}
          <span className="text-[10px] font-mono text-[#AAA7AE] tracking-widest uppercase">
            [ 2024—2026 ]
          </span>
        </div>
      </div>
    </div>
  );
}