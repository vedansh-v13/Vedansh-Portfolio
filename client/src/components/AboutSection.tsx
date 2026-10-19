import { motion, AnimatePresence, useInView, useReducedMotion } from "framer-motion";
import { BookOpen, ArrowRight, MessageSquare, X } from "lucide-react";
import { useState, useRef, useEffect, useCallback } from "react";
import profileImage from "@/assets/images/vedansh-about.jpg";
import liverpoolImage from "@/assets/images/liverpool-flag.jpeg";
import vagabondImage from "@/assets/images/vagabond-poster.jpeg";
import avatarImage from "@/assets/images/avatar-airbender.jpeg";

type InterestId = "liverpool" | "vagabond" | "avatar";

interface InterestItem {
  id: InterestId;
  label: string;
  image: string;
  alt: string;
  aspectClass: string;
  objectPositionClass: string;
}

const INTERESTS: Record<InterestId, InterestItem> = {
  liverpool: {
    id: "liverpool",
    label: "Liverpool supporter",
    image: liverpoolImage,
    alt: "Vedansh standing beside a Liverpool FC flag with scarf",
    aspectClass: "aspect-[4/5]",
    objectPositionClass: "object-top",
  },
  vagabond: {
    id: "vagabond",
    label: "Vagabond",
    image: vagabondImage,
    alt: "Vagabond manga tapestry poster on wall with cat",
    aspectClass: "aspect-[3/4]",
    objectPositionClass: "object-top",
  },
  avatar: {
    id: "avatar",
    label: "Avatar: The Last Airbender",
    image: avatarImage,
    alt: "Avatar: The Last Airbender graphic novel title page featuring Appa",
    aspectClass: "aspect-[3/4]",
    objectPositionClass: "object-center",
  },
};

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const shouldReduceMotion = useReducedMotion();

  const [activeId, setActiveId] = useState<InterestId | null>(null);
  const [arrowOffset, setArrowOffset] = useState<number>(112);
  const [clampedLeft, setClampedLeft] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const triggerRefs = useRef<Record<InterestId, HTMLButtonElement | null>>({
    liverpool: null,
    vagabond: null,
    avatar: null,
  });
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const books = [
    { title: "Kusamakura", author: "Natsume Sōseki" },
    { title: "Meditations", author: "Marcus Aurelius" },
    { title: "Running Lean", author: "Ash Maurya" },
    { title: "Five Rings", author: "Miyamoto Musashi" },
    { title: "In Praise of Shadows", author: "Jun'ichirō Tanizaki" },
    { title: "Design of Everyday Things", author: "Don Norman" },
  ];

  const updatePosition = useCallback((id: InterestId) => {
    const trigger = triggerRefs.current[id];
    const container = containerRef.current;
    if (!trigger || !container) return;

    const triggerRect = trigger.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    // Trigger center relative to paragraph container
    const triggerCenter = triggerRect.left + triggerRect.width / 2 - containerRect.left;
    const cardWidth = 168;
    const containerWidth = containerRect.width;

    // Clamp card position within container
    const left = Math.max(0, Math.min(triggerCenter - cardWidth / 2, Math.max(0, containerWidth - cardWidth)));
    setClampedLeft(left);

    // Arrow position pointing directly to trigger center
    const arrow = triggerCenter - left;
    const clampedArrow = Math.max(14, Math.min(arrow, cardWidth - 14));
    setArrowOffset(clampedArrow);
  }, []);

  useEffect(() => {
    if (activeId) {
      updatePosition(activeId);
      const handleResize = () => updatePosition(activeId);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [activeId, updatePosition]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveId(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const cancelClose = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimeoutRef.current = setTimeout(() => {
      setActiveId(null);
    }, 180);
  };

  const handleTriggerMouseEnter = (id: InterestId) => {
    cancelClose();
    setActiveId(id);
    updatePosition(id);
  };

  const handleTriggerMouseLeave = () => {
    scheduleClose();
  };

  const handleTriggerFocus = (id: InterestId) => {
    cancelClose();
    setActiveId(id);
    updatePosition(id);
  };

  const handleTriggerBlur = () => {
    scheduleClose();
  };

  const handleTriggerClick = (id: InterestId) => {
    cancelClose();
    setActiveId((prev) => (prev === id ? null : id));
    if (activeId !== id) {
      updatePosition(id);
    }
  };

  const renderTrigger = (id: InterestId, label: string) => {
    const isActive = activeId === id;
    return (
      <button
        ref={(el) => { triggerRefs.current[id] = el; }}
        type="button"
        onClick={() => handleTriggerClick(id)}
        onMouseEnter={() => handleTriggerMouseEnter(id)}
        onMouseOver={() => handleTriggerMouseEnter(id)}
        onMouseLeave={handleTriggerMouseLeave}
        onFocus={() => handleTriggerFocus(id)}
        onBlur={handleTriggerBlur}
        aria-expanded={isActive}
        aria-controls="about-photo-preview"
        aria-label={`Photograph of ${label}`}
        className={`inline font-normal text-ink cursor-pointer decoration-ink/40 underline underline-offset-[5px] decoration-[1.5px] hover:decoration-ink hover:text-ink focus:outline-none focus-visible:ring-1 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:rounded transition-colors duration-200 ${
          isActive ? "decoration-ink text-ink font-medium bg-ink/5 rounded px-1 -mx-1" : ""
        }`}
      >
        {label}
      </button>
    );
  };

  return (
    <section ref={ref} id="about" className="py-24 sm:py-32 bg-blush text-ink relative overflow-hidden">
      {/* Background Subtle Architectural Texture */}
      <div className="absolute inset-0 architectural-grid-dark opacity-40 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        
        {/* Section Header Tag */}
        <div className="mb-12">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-ink font-semibold">
              [ 03 // ABOUT & BACKGROUND ]
            </span>
            <span className="h-[1px] w-8 bg-ink/20" />
          </div>
        </div>

        {/* Bio split-column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20 lg:mb-72">
          
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <h2 className="text-lg sm:text-xl md:text-2xl font-display font-light text-ink leading-relaxed tracking-tight">
              I'm a product designer working across fintech, enterprise software, operational systems, and AI-native products. I'm drawn to complex problems where people need to make sense of information, navigate uncertainty, and make better decisions. My work is about turning that complexity into thoughtful, intuitive experiences, from shaping workflows and interactions to building the systems that make products work better at scale.
            </h2>
            
            {/* Interactive Personal Paragraph Container */}
            <div ref={containerRef} className="relative pt-1">
              <p className="text-base sm:text-lg font-light text-ink/80 leading-relaxed">
                Outside work, you'll find me reading manga and books, watching or playing football, or exploring art and visual culture. I'm a {renderTrigger("liverpool", "Liverpool supporter")}, and stories like {renderTrigger("vagabond", "Vagabond")} and {renderTrigger("avatar", "Avatar: The Last Airbender")} have stayed with me.
              </p>

              {/* Desktop Floating Photo Preview Panel */}
              <div className="hidden md:block">
                <AnimatePresence>
                  {activeId && (
                    <motion.div
                      id="about-photo-preview"
                      role="region"
                      aria-label="Discovered photograph preview"
                      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.98 }}
                      animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
                      exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      onMouseEnter={cancelClose}
                      onMouseOver={cancelClose}
                      onMouseLeave={scheduleClose}
                      style={{
                        left: `${clampedLeft}px`,
                      }}
                      className="absolute top-full mt-2.5 z-30 pointer-events-auto"
                    >
                      {/* Subtle indicator arrow pointing directly up to the active word */}
                      <div
                        style={{ left: `${arrowOffset}px` }}
                        className="absolute -top-1.5 -translate-x-1/2 w-3 h-3 bg-[#181719] rotate-45 border-t border-l border-white/10"
                      />

                      <div className="bg-[#181719] border border-white/15 rounded-lg p-1.5 shadow-2xl w-[168px]">
                        <div className="relative overflow-hidden rounded-md bg-black/40">
                          <img
                            src={INTERESTS[activeId].image}
                            alt={INTERESTS[activeId].alt}
                            className={`w-full ${INTERESTS[activeId].aspectClass} ${INTERESTS[activeId].objectPositionClass} object-cover`}
                            loading="eager"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Inline Reserved Photo Area */}
              <div className="md:hidden">
                <AnimatePresence mode="wait">
                  {activeId && (
                    <motion.div
                      key={activeId}
                      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0, y: -6 }}
                      animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, height: "auto", y: 0 }}
                      exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0, y: -6 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden mt-5"
                    >
                      <div className="bg-[#181719] border border-white/15 rounded-lg p-2 shadow-xl max-w-[260px] mx-auto relative">
                        <div className="relative overflow-hidden rounded-md bg-black/40">
                          <img
                            src={INTERESTS[activeId].image}
                            alt={INTERESTS[activeId].alt}
                            className={`w-full ${INTERESTS[activeId].aspectClass} ${INTERESTS[activeId].objectPositionClass} object-cover`}
                            loading="eager"
                          />
                        </div>
                        {/* Dismiss button for mobile convenience */}
                        <button
                          type="button"
                          onClick={() => setActiveId(null)}
                          className="absolute top-3.5 right-3.5 w-6 h-6 rounded-full bg-black/70 backdrop-blur-sm text-white/80 hover:text-white flex items-center justify-center focus:outline-none focus:ring-1 focus:ring-white/40"
                          aria-label="Dismiss photo preview"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative group">
              <div className="relative overflow-hidden rounded-lg border-2 border-ink shadow-xl bg-ink max-w-xs">
                <img
                  src={profileImage}
                  alt="Vedansh Wandalkar"
                  className="w-full h-auto aspect-[4/5] object-cover object-center grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="p-3 bg-ink text-[#F5F4F6] font-mono text-[11px] uppercase tracking-wider flex justify-between items-center border-t border-white/10">
                  <span>VEDANSH_W.JPG</span>
                  <span className="text-blush">[ DESIGNER ]</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Contact CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-ink text-[#F5F4F6] rounded-xl p-8 sm:p-12 md:p-14 mb-24 border border-ink/20 shadow-2xl relative overflow-hidden"
        >
          <div className="max-w-3xl">
            <div className="w-10 h-10 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-blush mb-6">
              <MessageSquare className="w-5 h-5" />
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-medium text-[#F5F4F6] mb-4 tracking-tight leading-tight">
              Working on something that needs this?
            </h3>
            
            <p className="text-base sm:text-lg text-[#AAA7AE] mb-8 font-light leading-relaxed">
              I'm looking for new roles. If the problem involves people trying to trust a complicated system, I'd like to hear about it.
            </p>

            <a
              href="mailto:vedansh.wandalkar@gmail.com?subject=Let's%20create%20something%20remarkable"
              className="btn-tactile inline-flex items-center gap-3 bg-blush text-ink font-medium text-sm px-6 py-3.5 rounded-md hover:bg-[#edd8d1] transition-all shadow-md group"
            >
              <span>Start a conversation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Reading List Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="border-t border-ink/15 pt-16 sm:pt-20"
        >
          <div className="flex items-center gap-3 mb-10">
            <span className="font-mono text-xs uppercase tracking-widest text-ink font-semibold">
              [ 04 // READING LIST ]
            </span>
            <span className="h-[1px] w-8 bg-ink/20" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {books.map((book, index) => (
              <div
                key={index}
                className="p-5 rounded-lg border border-ink/10 bg-ink/5 hover:bg-ink/10 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <BookOpen className="w-4 h-4 text-ink/40 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-medium text-ink text-base mb-1">{book.title}</h4>
                    <p className="text-xs font-mono text-ink/60 uppercase tracking-wider">{book.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}