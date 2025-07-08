import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Clock } from "lucide-react";
import { projectsData } from "../data/projectsData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ProjectShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false); // Start as false, will be checked after mount

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      // Use smaller scroll amount on mobile
      const isMobile = window.innerWidth < 768;
      const scrollAmount =
        direction === "left" ? (isMobile ? -300 : -500) : isMobile ? 300 : 500;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const checkScrollability = () => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const canScrollLeft = current.scrollLeft > 0;
      const canScrollRight = current.scrollLeft < current.scrollWidth - current.clientWidth - 1;
      
      setShowLeftArrow(canScrollLeft);
      setShowRightArrow(canScrollRight);
    }
  };

  const handleScroll = () => {
    checkScrollability();
  };

  useEffect(() => {
    const { current } = scrollRef;
    if (current) {
      // Check initial state
      checkScrollability();
      
      current.addEventListener("scroll", handleScroll);
      
      // Also check on resize to handle responsive changes
      const handleResize = () => {
        setTimeout(checkScrollability, 100); // Small delay to ensure layout is complete
      };
      window.addEventListener("resize", handleResize);
      
      return () => {
        current.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  // Additional check after content loads
  useEffect(() => {
    const timer = setTimeout(checkScrollability, 500);
    return () => clearTimeout(timer);
  }, [projectsData]);

  return (
    <section id="projects" className="py-20 bg-background relative">
      <div className="absolute top-0 right-0 w-full h-full grid-lines opacity-20"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 mb-12 text-center"
      >
        <h2 className="text-4xl md:text-6xl artistic-text font-extralight mb-6 text-gray-200">Selected Work</h2>
        <p className="text-gray-300 max-w-2xl mx-auto artistic-text font-light text-lg">
          A showcase of design projects that solve real problems and create meaningful user experiences.
        </p>
      </motion.div>

      <div className="relative">
        {showLeftArrow && (
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              scroll("left");
            }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white hover:bg-gray-200 p-3 rounded-full transition-colors duration-200 shadow-lg border-2 border-white"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} className="text-black" />
          </button>
        )}

        {showRightArrow && (
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              scroll("right");
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white hover:bg-gray-200 p-3 rounded-full transition-colors duration-200 shadow-lg border-2 border-white"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} className="text-black" />
          </button>
        )}

        <div
          ref={scrollRef}
          className="horizontal-scroll-container pb-6 overflow-x-auto snap-x snap-mandatory"
          onScroll={handleScroll}
        >
          <div className="inline-flex space-x-6 px-6 pl-6 pr-16 sm:pr-20 md:px-6">
            {projectsData.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -12,
                  transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
                }}
                whileTap={{ scale: 0.98 }}
                className="flex-none w-[280px] md:w-[360px] rounded-xl overflow-hidden bg-card border border-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-white/10 group relative snap-center cursor-pointer minimal-hover"
              >
                <a
                  href={`/projects/${project.id || project.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="absolute inset-0 z-10"
                  aria-label={`View ${project.title} case study`}
                ></a>

                <div className="relative aspect-square bg-gradient-to-br from-primary/20 to-accent/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {project.image ? (
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        onError={() => {
                          console.error(
                            `Failed to load image: ${project.image}`,
                          );
                        }}
                      />
                    ) : (
                      <svg
                        className="w-full h-full object-cover mix-blend-overlay"
                        viewBox="0 0 400 400"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {project.icon.map((element) => element)}
                      </svg>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-30"></div>
                </div>

                <div className="p-6">
                  <div className="flex mb-2 gap-2 flex-wrap">
                    <span className="text-xs font-medium text-gray-300 bg-white/10 border border-white/20 px-3 py-1 rounded-full relative z-20 pointer-events-none">
                      {project.category}
                    </span>
                    {project.comingSoon && (
                      <span className="inline-flex bg-muted/20 text-gray-300 border border-muted/30 rounded-full text-xs font-medium px-3 py-1 items-center gap-1 relative z-20 pointer-events-none">
                        <Clock size={12} />
                        <span>Coming Soon</span>
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <span className="inline-flex items-center text-white font-bold relative z-20 pointer-events-none group-hover:underline">
                    View case study
                    <ArrowRight size={16} className="ml-1" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
