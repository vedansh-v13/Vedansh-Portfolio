import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 bg-background relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl artistic-text font-extralight mb-6 leading-tight text-gray-200">
            How I Work
          </h2>
        </div>

        {/* Bento Grid Services Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 pt-16 hover:bg-white/10 transition-all duration-300 flex flex-col justify-between"
          >
            <span className="text-5xl font-bold text-[#e5313a]/20 absolute top-4 left-6">01</span>
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Redistribute the work, don't just remove it</h3>
              <p className="text-gray-400 leading-relaxed">The best fix for a slow process usually isn't fewer steps. It's asking who is actually best positioned to do the work.</p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 pt-16 hover:bg-white/10 transition-all duration-300 flex flex-col justify-between"
          >
            <span className="text-5xl font-bold text-[#e5313a]/20 absolute top-4 left-6">02</span>
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Sort by urgency, not by feature</h3>
              <p className="text-gray-400 leading-relaxed">When there is too much information, organizing it by what needs attention first beats organizing it by category.</p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 pt-16 hover:bg-white/10 transition-all duration-300 flex flex-col justify-between"
          >
            <span className="text-5xl font-bold text-[#e5313a]/20 absolute top-4 left-6">03</span>
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Familiar beats novel when trust is on the line</h3>
              <p className="text-gray-400 leading-relaxed">The newest technology isn't always the right call. Sometimes the more trustworthy choice is the boring one.</p>
            </div>
          </motion.div>
        </div>

        {/* Flat row for Published article */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-t border-white/10 pt-8"
        >
          <div className="max-w-3xl">
            <h3 className="text-lg font-bold mb-2 text-gray-300">Published: "The Invisible Layer"</h3>
            <p className="text-gray-500 text-sm leading-relaxed">I co-wrote a piece for Service Design Drinks India Magazine on why Indian digital products succeed by designing around broken systems, not despite them.</p>
          </div>
          <a 
            href="#" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors font-medium text-sm whitespace-nowrap"
          >
            Read Article
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
