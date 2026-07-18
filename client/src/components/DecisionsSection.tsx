import { motion } from "framer-motion";

export default function DecisionsSection() {
  return (
    <section className="py-20 bg-background relative">
      <div className="absolute top-0 right-0 w-full h-full grid-lines opacity-20 pointer-events-none"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 mb-16 text-center relative z-10"
      >
        <h2 className="text-3xl md:text-5xl artistic-text font-extralight mb-6 text-white">How I Actually Decide</h2>
        <p className="text-gray-400 max-w-2xl mx-auto font-light text-lg">
          Four things that actually happened, not a list of skills.
        </p>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        {/* Row 1: Paired Cells */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Cell 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col shadow-lg hover:shadow-2xl hover:shadow-white/5 transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-white mb-4">
              Redistributing the work
            </h3>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              Investors were filling in the same forms twice. I let the Relationship Manager prepare the application first, so investors only had to review and sign.
            </p>
            <div className="mt-auto pt-4 border-t border-white/10 font-medium flex flex-wrap items-center gap-1 sm:gap-0">
              <span className="text-white">42%</span>
              <span className="text-white/70 mx-2">→</span>
              <span className="text-[#16a34a]">22%</span>
              <span className="text-gray-500 text-xs ml-0 sm:ml-3 font-normal tracking-wide uppercase">Form abandonment</span>
            </div>
          </motion.div>

          {/* Cell 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col shadow-lg hover:shadow-2xl hover:shadow-white/5 transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-white mb-4">
              One decision, not one button
            </h3>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              Most platforms show a single "Invest Now" CTA. I split it into One-Time and SIP, because by that screen the real decision left was how, not whether.
            </p>
            <div className="mt-auto pt-4 border-t border-white/10 font-medium flex flex-wrap items-center gap-1 sm:gap-0">
              <span className="text-white">4.5 min</span>
              <span className="text-white/70 mx-2">→</span>
              <span className="text-[#16a34a]">2.5 min</span>
              <span className="text-gray-500 text-xs ml-0 sm:ml-3 font-normal tracking-wide uppercase">Time to create a SIP</span>
            </div>
          </motion.div>
        </div>

        {/* Row 2: Anchor Cell */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full bg-white/10 border border-white/10 rounded-2xl p-8 md:p-12 mb-6 shadow-lg hover:shadow-2xl hover:shadow-white/5 transition-all duration-300 flex flex-col"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Sorting by urgency, not by tab
          </h3>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-3xl">
            MeeroLink pulled data from five separate sources: soil sensors, weather, imagery, lab reports, agronomist notes. I built one prioritized list instead of five dashboards.
          </p>
          <div className="mt-auto pt-4 border-t border-white/10 font-medium text-lg">
            <span className="text-white">6 days</span>
            <span className="text-white/70 mx-2">→</span>
            <span className="text-[#16a34a]">1 day</span>
            <span className="text-gray-500 text-sm ml-4 font-normal tracking-wide uppercase">Report to action</span>
          </div>
        </motion.div>

        {/* Row 3: Paired Cells */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Cell 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col shadow-lg hover:shadow-2xl hover:shadow-white/5 transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-white mb-4">
              A farm health card, not a dashboard
            </h3>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              The home screen answered "is my farm okay" before asking farmers to read a single chart.
            </p>
            <div className="mt-auto pt-4 border-t border-white/10 font-medium flex flex-wrap items-center gap-1 sm:gap-0">
              <span className="text-[#16a34a]">94%</span>
              <span className="text-gray-500 text-xs ml-0 sm:ml-3 font-normal tracking-wide uppercase">Dashboard adoption</span>
            </div>
          </motion.div>

          {/* Cell 5 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col shadow-lg hover:shadow-2xl hover:shadow-white/5 transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-white mb-4">
              A belief I keep testing
            </h3>
            <p className="text-gray-400 text-base leading-relaxed mb-6">
              Most Indian digital products don't succeed because the interface is good. They succeed because someone built a WhatsApp workaround around an interface that isn't.
            </p>
            <div className="mt-auto pt-4">
              <a 
                href="https://servicedesignindia.com/" 
                className="text-sm text-gray-500 hover:text-gray-300 underline underline-offset-4 transition-colors"
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
