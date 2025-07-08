import { motion } from "framer-motion";
import { servicesData } from "../data/servicesData";

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
            Design Expertise
          </h2>
          <p className="text-gray-300 artistic-text font-light text-lg">
            That drives digital transformation
          </p>
        </div>



        {/* Bento Grid Services Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-12 auto-rows-auto">
          
          {/* UX/UI Design - Large featured card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 lg:col-span-3 bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-xl p-8 hover:from-accent/15 hover:to-accent/10 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div 
                className="w-12 h-12 bg-accent/30 rounded-xl flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {servicesData[0].icon}
              </motion.div>
              <h3 className="text-2xl font-bold text-accent">{servicesData[0].title}</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">{servicesData[0].description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full">User Research</span>
              <span className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full">Wireframing</span>
              <span className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full">Prototyping</span>
            </div>
          </motion.div>

          {/* Creative Direction - Medium card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 lg:col-span-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div 
                className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {servicesData[1].icon}
              </motion.div>
              <h3 className="text-xl font-bold">{servicesData[1].title}</h3>
            </div>
            <p className="text-gray-400">{servicesData[1].description}</p>
          </motion.div>

          {/* Mobile App Design - Small tall card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gradient-to-b from-white/10 to-white/5 border border-white/10 rounded-xl p-6 hover:from-white/15 hover:to-white/10 transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <motion.div 
                className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {servicesData[2].icon}
              </motion.div>
              <h3 className="text-lg font-bold mb-3">{servicesData[2].title}</h3>
              <p className="text-gray-400 text-sm">{servicesData[2].description}</p>
            </div>
          </motion.div>

          {/* Enterprise Solutions - Medium horizontal card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2 lg:col-span-2 bg-gradient-to-r from-white/10 to-white/5 border border-white/10 rounded-xl p-6 hover:from-white/15 hover:to-white/10 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div 
                className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {servicesData[3].icon}
              </motion.div>
              <h3 className="text-xl font-bold">{servicesData[3].title}</h3>
            </div>
            <p className="text-gray-400">{servicesData[3].description}</p>
          </motion.div>

          {/* User Research - Square card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="md:col-span-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div 
                className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {servicesData[4].icon}
              </motion.div>
              <h3 className="text-xl font-bold">{servicesData[4].title}</h3>
            </div>
            <p className="text-gray-400">{servicesData[4].description}</p>
          </motion.div>

          {/* Design Systems - Wide card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="md:col-span-4 lg:col-span-2 bg-gradient-to-r from-accent/10 to-white/5 border border-accent/20 rounded-xl p-6 hover:from-accent/15 hover:to-white/10 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div 
                className="w-10 h-10 bg-accent/30 rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {servicesData[5].icon}
              </motion.div>
              <h3 className="text-xl font-bold text-accent">{servicesData[5].title}</h3>
            </div>
            <p className="text-gray-300">{servicesData[5].description}</p>
            <div className="mt-4 flex gap-2">
              <span className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full">Components</span>
              <span className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full">Guidelines</span>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
