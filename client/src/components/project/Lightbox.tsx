import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export function Lightbox({ isOpen, onClose, images, currentIndex, onNavigate }: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNavigate((currentIndex - 1 + images.length) % images.length);
      if (e.key === "ArrowRight") onNavigate((currentIndex + 1) % images.length);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const currentImage = images[currentIndex];

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#181719]/95 backdrop-blur-md p-4 md:p-8"
        onClick={onClose}
      >
        {/* Top bar with index and close button */}
        <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-50 pointer-events-none">
          <span className="font-mono text-xs text-[#AAA7AE] uppercase tracking-wider bg-white/5 px-3 py-1.5 rounded border border-white/10">
            [ SCREEN {currentIndex + 1} / {images.length} ]
          </span>

          <button
            onClick={onClose}
            className="pointer-events-auto w-10 h-10 rounded-md bg-white/10 hover:bg-blush hover:text-ink text-[#F5F4F6] border border-white/15 flex items-center justify-center transition-colors shadow-sm"
            aria-label="Close image viewer"
          >
            <X size={20} />
          </button>
        </div>

        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNavigate((currentIndex - 1 + images.length) % images.length);
              }}
              className="absolute left-4 md:left-8 z-50 w-12 h-12 rounded-md bg-white/10 hover:bg-blush hover:text-ink text-[#F5F4F6] border border-white/15 flex items-center justify-center transition-colors shadow-lg"
              aria-label="Previous screen"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onNavigate((currentIndex + 1) % images.length);
              }}
              className="absolute right-4 md:right-8 z-50 w-12 h-12 rounded-md bg-white/10 hover:bg-blush hover:text-ink text-[#F5F4F6] border border-white/15 flex items-center justify-center transition-colors shadow-lg"
              aria-label="Next screen"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}

        <div className="relative max-w-7xl max-h-[85vh] w-full flex items-center justify-center mt-6">
          <motion.img
            key={currentImage}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            src={currentImage}
            alt={`Screen preview ${currentIndex + 1}`}
            className="max-w-full max-h-[85vh] object-contain rounded-md border border-white/10 shadow-2xl"
            onClick={stopPropagation}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
