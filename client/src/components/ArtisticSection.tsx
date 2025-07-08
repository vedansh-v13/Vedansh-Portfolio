import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ArtisticSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      {/* Geometric Lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
        <motion.path
          d="M 0,200 Q 400,100 800,200"
          className="geometric-line"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        <motion.path
          d="M 200,0 L 600,400"
          className="geometric-line"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 2, delay: 1 }}
        />
        <motion.path
          d="M 0,0 L 800,600"
          className="geometric-line"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 2, delay: 1.5 }}
        />
      </svg>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="mega-text artistic-text text-gray-200 mb-8">
              <motion.span
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="block"
              >
                Design
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="block text-white"
              >
                that matters
              </motion.span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-xl md:text-2xl text-gray-300 artistic-text font-light leading-relaxed max-w-3xl mx-auto"
          >
            Creating digital experiences that bridge the gap between human needs and technological possibilities.
          </motion.p>

          {/* Minimalist Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24"
          >
            {[
              { number: "5+", label: "Years of Experience" },
              { number: "50+", label: "Projects Delivered" },
              { number: "∞", label: "Creative Solutions" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.8 + (index * 0.2) }}
                className="text-center minimal-hover"
              >
                <div className="text-4xl md:text-6xl font-light text-white mb-2 artistic-text">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wider font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}