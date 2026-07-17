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
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8"
        onClick={onClose}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 text-white/70 hover:text-white transition-colors"
        >
          <X size={32} />
        </button>

        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNavigate((currentIndex - 1 + images.length) % images.length);
              }}
              className="absolute left-4 md:left-12 z-50 text-white/50 hover:text-white transition-colors p-2"
            >
              <ChevronLeft size={48} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onNavigate((currentIndex + 1) % images.length);
              }}
              className="absolute right-4 md:right-12 z-50 text-white/50 hover:text-white transition-colors p-2"
            >
              <ChevronRight size={48} />
            </button>
          </>
        )}

        <div className="relative max-w-7xl max-h-[90vh] w-full flex items-center justify-center">
          <motion.img
            key={currentImage}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            src={currentImage}
            alt={`Image ${currentIndex + 1}`}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={stopPropagation}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
