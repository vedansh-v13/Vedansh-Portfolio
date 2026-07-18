import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryScreenshotFrame } from "./ProjectDetailComponents";
import { Lightbox } from "./Lightbox";
import { motion } from "framer-motion";

interface ScreenCarouselProps {
  screens: { src: string; alt: string; caption?: string; isAnnotation?: boolean }[];
  caption?: string;
}

export function ScreenCarousel({ screens, caption }: ScreenCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollLeft = () => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth < 768 ? 320 : 392;
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth < 768 ? 320 : 392;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="relative w-full group">
      {/* Scrollable Container */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory hide-scrollbar pt-4 px-4 md:px-0 scroll-pl-4 md:scroll-pl-0"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {screens.map((screen, idx) => (
          <div 
            key={idx} 
            className="flex-none snap-start cursor-zoom-in transition-transform hover:scale-[1.02] duration-300"
            onClick={() => openLightbox(idx)}
          >
            <GalleryScreenshotFrame 
              src={screen.src} 
              alt={screen.alt} 
              variant={screen.isAnnotation ? "desktop" : "iphone"} 
              caption={screen.caption}
            />
          </div>
        ))}
      </div>

      {/* Navigation Controls (Desktop) */}
      {screens.length > 1 && (
        <>
          <button 
            onClick={scrollLeft}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/60 text-white backdrop-blur-md border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0 hidden md:block hover:bg-black/80"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={scrollRight}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/60 text-white backdrop-blur-md border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0 hidden md:block hover:bg-black/80"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {/* Optional Caption */}
      {caption && (
        <p className="text-sm text-gray-500 text-center mt-2 italic">
          {caption}
        </p>
      )}

      {/* Swipe Affordance (Mobile Only) */}
      {screens.length > 1 && (
        <div className="md:hidden flex justify-center mt-4">
          <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 font-medium tracking-wide uppercase flex items-center gap-2">
            <span>&larr;</span> Swipe <span>&rarr;</span>
          </div>
        </div>
      )}

      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={screens.map(s => s.src)}
        currentIndex={currentIndex}
        onNavigate={setCurrentIndex}
      />
    </div>
  );
}
