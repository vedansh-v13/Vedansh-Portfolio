import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projectsData } from "../data/projectsData";

export default function ProjectShowcase() {
  return (
    <section id="projects" className="py-20 bg-background relative">
      <div className="absolute top-0 right-0 w-full h-full grid-lines opacity-20"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 mb-16 text-center relative z-10"
      >
        <h2 className="text-3xl md:text-5xl artistic-text font-extralight mb-6 text-white">Selected Work</h2>
        <p className="text-gray-400 max-w-2xl mx-auto font-light text-lg">
          A selection of my work designing products that solve real problems.
        </p>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-wrap justify-center gap-8">
          {projectsData.map((project, index) => {
            const isComingSoon = project.comingSoon;
            const CardContent = (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={!isComingSoon ? { 
                  y: -12,
                  transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
                } : {}}
                className={`w-full h-full flex flex-col rounded-2xl overflow-hidden bg-white/5 border border-white/10 transition-all duration-300 relative group ${
                  isComingSoon ? "opacity-50 cursor-default" : "cursor-pointer hover:bg-white/10 shadow-lg hover:shadow-2xl hover:shadow-white/5"
                }`}
              >
                {/* 16:9 Cover Image */}
                <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/10 overflow-hidden flex-shrink-0">
                  {project.image ? (
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700"
                      whileHover={!isComingSoon ? { scale: 1.05 } : {}}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      onError={() => {
                        console.error(`Failed to load image: ${project.image}`);
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center mix-blend-overlay">
                      <svg
                        className="w-full h-full object-cover"
                        viewBox="0 0 400 400"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {project.icon.map((element) => element)}
                      </svg>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
                  
                  {isComingSoon && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                      <span className="bg-white/10 text-white border border-white/20 rounded-full px-4 py-2 text-sm font-semibold tracking-wide">
                        Coming soon
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 md:p-8 flex-grow flex flex-col relative">
                  {!isComingSoon && (
                    <ArrowRight className="absolute top-8 right-8 w-5 h-5 text-accent opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  )}
                  
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-2 truncate pr-6">
                    {project.category}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-1 pr-6">
                    {project.title}
                  </h3>
                  
                  <div className="text-sm font-medium text-accent mb-4">
                    {project.role} &middot; {project.year}
                  </div>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mt-auto">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            );

            const wrapperClasses = "w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] flex-none";

            if (isComingSoon) {
              return <div key={index} className={wrapperClasses}>{CardContent}</div>;
            }

            return (
              <a 
                key={index} 
                href={project.caseStudyUrl || `/projects/${project.id || project.title.toLowerCase().replace(/\s+/g, "-")}`}
                aria-label={`View ${project.title} case study`}
                className={`${wrapperClasses} block outline-none focus:ring-2 focus:ring-accent rounded-2xl`}
              >
                {CardContent}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
