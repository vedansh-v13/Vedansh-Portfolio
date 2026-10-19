import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryScreenshotFrame } from "./ProjectDetailComponents";
import { Lightbox } from "./Lightbox";

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
            className="flex-none snap-start cursor-zoom-in transition-transform duration-200 hover:scale-[1.01]"
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
            aria-label="Previous screens"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-md bg-[#181719]/90 text-[#AAA7AE] hover:text-ink hover:bg-blush border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-200 hidden md:flex items-center justify-center shadow-lg"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={scrollRight}
            aria-label="Next screens"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-md bg-[#181719]/90 text-[#AAA7AE] hover:text-ink hover:bg-blush border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-200 hidden md:flex items-center justify-center shadow-lg"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      {/* Optional Caption */}
      {caption && (
        <p className="text-xs font-mono text-[#AAA7AE] text-center mt-2 italic">
          {caption}
        </p>
      )}

      {/* Swipe Affordance (Mobile Only) */}
      {screens.length > 1 && (
        <div className="md:hidden flex justify-center mt-3">
          <div className="px-3 py-1 rounded bg-white/5 border border-white/10 text-[11px] font-mono text-[#AAA7AE] uppercase tracking-wider flex items-center gap-2">
            <span>←</span> SWIPE TO EXPLORE <span>→</span>
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
