import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* Architectural Grid */}
      <div className="absolute inset-0 architectural-grid opacity-40" />

      {/* Soft atmospheric gradient anchor */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-white/[0.03] to-transparent blur-3xl pointer-events-none" />
    </div>
  );
}