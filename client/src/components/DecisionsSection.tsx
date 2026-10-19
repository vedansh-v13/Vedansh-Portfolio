import { motion } from "framer-motion";

export default function DecisionsSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#181719] relative border-t border-white/10">
      {/* Section Header */}
      <div className="container mx-auto px-4 sm:px-6 mb-16 sm:mb-20">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs uppercase tracking-widest text-blush">
              [ 02 // PRINCIPLES IN ACTION ]
            </span>
            <span className="h-[1px] w-8 bg-white/20" />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-light text-[#F5F4F6] tracking-[-0.03em] leading-tight mb-4">
            How I Actually Decide
          </h2>
          <p className="text-base sm:text-lg text-[#AAA7AE] font-light max-w-xl leading-relaxed">
            Four things that actually happened, not a list of skills.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        {/* Row 1: Paired Cells */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Cell 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#1F1E21] border border-white/10 rounded-lg p-6 sm:p-8 flex flex-col justify-between card-tactile hover:border-blush/30"
          >
            <div>
              <span className="font-mono text-[10px] text-blush tracking-widest uppercase block mb-3">
                DECISION 01
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-medium text-[#F5F4F6] mb-3 tracking-tight">
                Redistributing the work
              </h3>
              <p className="text-[#AAA7AE] text-sm sm:text-base leading-relaxed font-light mb-8">
                Investors were filling in the same forms twice. I let the Relationship Manager prepare the application first, so investors only had to review and sign.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 font-mono text-sm flex flex-wrap items-center gap-2">
              <span className="text-[#AAA7AE]">42%</span>
              <span className="text-[#AAA7AE]/60">→</span>
              <span className="text-blush font-bold">22%</span>
              <span className="text-[#AAA7AE] text-[11px] ml-auto uppercase tracking-wider">Form abandonment</span>
            </div>
          </motion.div>

          {/* Cell 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#1F1E21] border border-white/10 rounded-lg p-6 sm:p-8 flex flex-col justify-between card-tactile hover:border-blush/30"
          >
            <div>
              <span className="font-mono text-[10px] text-blush tracking-widest uppercase block mb-3">
                DECISION 02
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-medium text-[#F5F4F6] mb-3 tracking-tight">
                One decision, not one button
              </h3>
              <p className="text-[#AAA7AE] text-sm sm:text-base leading-relaxed font-light mb-8">
                Most platforms show a single "Invest Now" CTA. I split it into One-Time and SIP, because by that screen the real decision left was how, not whether.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 font-mono text-sm flex flex-wrap items-center gap-2">
              <span className="text-[#AAA7AE]">4.5 min</span>
              <span className="text-[#AAA7AE]/60">→</span>
              <span className="text-blush font-bold">2.5 min</span>
              <span className="text-[#AAA7AE] text-[11px] ml-auto uppercase tracking-wider">Time to create a SIP</span>
            </div>
          </motion.div>
        </div>

        {/* Row 2: Anchor Cell */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full bg-[#242226] border border-blush/25 rounded-lg p-8 sm:p-10 md:p-12 mb-6 sm:mb-8 card-tactile hover:border-blush/50"
        >
          <span className="font-mono text-[10px] text-blush tracking-widest uppercase block mb-3">
            ANCHOR DECISION // CORE OPERATIONAL SHIFT
          </span>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-medium text-[#F5F4F6] mb-4 tracking-tight">
            Sorting by urgency, not by tab
          </h3>
          <p className="text-[#AAA7AE] text-base sm:text-lg leading-relaxed font-light mb-8 max-w-3xl">
            MeeroLink pulled data from five separate sources: soil sensors, weather, imagery, lab reports, agronomist notes. I built one prioritized list instead of five dashboards.
          </p>
          <div className="pt-5 border-t border-white/10 font-mono text-base flex flex-wrap items-center gap-3">
            <span className="text-[#AAA7AE]">6 days</span>
            <span className="text-[#AAA7AE]/60">→</span>
            <span className="text-blush font-bold text-lg">1 day</span>
            <span className="text-[#AAA7AE] text-xs ml-auto uppercase tracking-wider">Report to action</span>
          </div>
        </motion.div>

        {/* Row 3: Paired Cells */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Cell 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#1F1E21] border border-white/10 rounded-lg p-6 sm:p-8 flex flex-col justify-between card-tactile hover:border-blush/30"
          >
            <div>
              <span className="font-mono text-[10px] text-blush tracking-widest uppercase block mb-3">
                DECISION 03
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-medium text-[#F5F4F6] mb-3 tracking-tight">
                A farm health card, not a dashboard
              </h3>
              <p className="text-[#AAA7AE] text-sm sm:text-base leading-relaxed font-light mb-8">
                The home screen answered "is my farm okay" before asking farmers to read a single chart.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 font-mono text-sm flex flex-wrap items-center gap-2">
              <span className="text-blush font-bold text-base">94%</span>
              <span className="text-[#AAA7AE] text-[11px] ml-auto uppercase tracking-wider">Dashboard adoption</span>
            </div>
          </motion.div>

          {/* Cell 5 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#1F1E21] border border-white/10 rounded-lg p-6 sm:p-8 flex flex-col justify-between card-tactile hover:border-blush/30"
          >
            <div>
              <span className="font-mono text-[10px] text-[#AAA7AE] tracking-widest uppercase block mb-3">
                PERSPECTIVE // ESSAY
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-medium text-[#F5F4F6] mb-3 tracking-tight">
                A belief I keep testing
              </h3>
              <p className="text-[#AAA7AE] text-sm sm:text-base leading-relaxed font-light mb-6">
                Most Indian digital products don't succeed because the interface is good. They succeed because someone built a WhatsApp workaround around an interface that isn't.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10">
              <a 
                href="https://servicedesignindia.com/" 
                className="text-xs font-mono text-blush hover:text-[#F5F4F6] underline underline-offset-4 transition-colors leading-relaxed block"
                target="_blank"
                rel="noopener noreferrer"
              >
                From a piece I wrote on why Indian UX designs for chaos, not comfort →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
