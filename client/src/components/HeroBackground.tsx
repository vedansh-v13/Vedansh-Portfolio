import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  size: number;
  type: 'circle' | 'square' | 'triangle' | 'line';
  delay: number;
}

export default function HeroBackground() {
  const [elements, setElements] = useState<FloatingElement[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Generate floating design elements
    const newElements: FloatingElement[] = [];
    for (let i = 0; i < 15; i++) {
      newElements.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 40 + 20,
        type: ['circle', 'square', 'triangle', 'line'][Math.floor(Math.random() * 4)] as any,
        delay: Math.random() * 5
      });
    }
    setElements(newElements);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const renderElement = (element: FloatingElement) => {
    const commonProps = {
      className: "absolute opacity-40",
      style: {
        left: `${element.x}%`,
        top: `${element.y}%`,
        width: `${element.size}px`,
        height: `${element.size}px`,
      },
      animate: {
        x: [0, 40, -30, 0],
        y: [0, -30, 40, 0],
        rotate: [0, 180, 360],
        scale: [1, 1.5, 0.7, 1],
      },
      transition: {
        duration: 15 + Math.random() * 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: element.delay,
      }
    };

    switch (element.type) {
      case 'circle':
        return (
          <motion.div
            key={element.id}
            {...commonProps}
            className={`${commonProps.className} rounded-full border-2 border-white/30`}
          />
        );
      case 'square':
        return (
          <motion.div
            key={element.id}
            {...commonProps}
            className={`${commonProps.className} border-2 border-accent/30 rotate-45`}
          />
        );
      case 'triangle':
        return (
          <motion.div
            key={element.id}
            {...commonProps}
            className={`${commonProps.className} border-l-2 border-r-2 border-b-2 border-transparent border-b-white/30`}
            style={{
              ...commonProps.style,
              width: 0,
              height: 0,
              borderLeftWidth: `${element.size / 2}px`,
              borderRightWidth: `${element.size / 2}px`,
              borderBottomWidth: `${element.size}px`,
            }}
          />
        );
      case 'line':
        return (
          <motion.div
            key={element.id}
            {...commonProps}
            className={`${commonProps.className} border-t-2 border-accent/40`}
            style={{
              ...commonProps.style,
              height: '2px',
              width: `${element.size * 2}px`,
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Figma-style Grid */}
      <div className="absolute inset-0 opacity-15">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(to right, rgba(168,85,247,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(168,85,247,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px, 24px 24px, 120px 120px, 120px 120px',
          }}
        />
        {/* Grid intersections */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 24px 24px, rgba(168,85,247,0.3) 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating Design Elements */}
      {elements.map(renderElement)}

      {/* Interactive Cursor Glow */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-40 h-40 bg-accent/30 rounded-full blur-xl" />
        <div className="absolute inset-4 bg-white/10 rounded-full blur-lg" />
      </motion.div>

      {/* Design Tool Icons (Floating) */}
      <motion.div
        className="absolute top-20 left-10 opacity-60"
        animate={{
          y: [0, -25, 0],
          rotate: [0, 15, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Figma-style grid icon */}
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-white">
          <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" rx="1" />
          <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" rx="1" />
          <rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" rx="1" />
          <rect x="14" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" rx="1" />
          <circle cx="6.5" cy="6.5" r="1" fill="currentColor" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
          <circle cx="6.5" cy="17.5" r="1" fill="currentColor" />
          <circle cx="17.5" cy="17.5" r="1" fill="currentColor" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-32 right-20 opacity-60"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -15, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        {/* Wireframe/prototype icon */}
        <svg width="35" height="35" viewBox="0 0 24 24" fill="none" className="text-accent">
          <rect x="2" y="3" width="20" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
          <path d="M8 7H16" stroke="currentColor" strokeWidth="2" />
          <path d="M8 11H12" stroke="currentColor" strokeWidth="2" />
          <rect x="8" y="15" width="8" height="2" stroke="currentColor" strokeWidth="2" rx="1" />
          <circle cx="5" cy="7" r="1" fill="currentColor" />
          <circle cx="5" cy="11" r="1" fill="currentColor" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-16 opacity-60"
        animate={{
          x: [0, 30, 0],
          y: [0, -15, 0],
          scale: [1, 1.4, 1],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        {/* Design system/component icon */}
        <svg width="45" height="45" viewBox="0 0 24 24" fill="none" className="text-white">
          <rect x="4" y="4" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
          <rect x="14" y="4" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
          <rect x="4" y="14" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
          <rect x="14" y="14" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
          <path d="M10 7H14" stroke="currentColor" strokeWidth="2" />
          <path d="M7 10V14" stroke="currentColor" strokeWidth="2" />
          <path d="M17 10V14" stroke="currentColor" strokeWidth="2" />
          <path d="M10 17H14" stroke="currentColor" strokeWidth="2" />
        </svg>
      </motion.div>

      {/* Enhanced Connecting Lines Animation */}
      <svg className="absolute inset-0 w-full h-full opacity-25" style={{ zIndex: -1 }}>
        <motion.path
          d="M100,100 Q300,50 500,200 T900,150"
          stroke="rgba(255,255,255,0.6)"
          strokeWidth="3"
          fill="none"
          strokeDasharray="15,8"
          initial={{ pathLength: 0 }}
          animate={{ 
            pathLength: 1,
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.path
          d="M200,300 Q400,250 600,400 T1000,350"
          stroke="rgba(168,85,247,0.7)"
          strokeWidth="3"
          fill="none"
          strokeDasharray="20,10"
          initial={{ pathLength: 0 }}
          animate={{ 
            pathLength: 1,
            opacity: [0.5, 0.9, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.path
          d="M50,400 Q250,300 450,450 T850,400"
          stroke="rgba(34,197,94,0.5)"
          strokeWidth="2.5"
          fill="none"
          strokeDasharray="12,16"
          initial={{ pathLength: 0 }}
          animate={{ 
            pathLength: 1,
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        {/* Additional diagonal lines for more complexity */}
        <motion.path
          d="M0,200 Q400,100 800,300"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5,15"
          initial={{ pathLength: 0 }}
          animate={{ 
            pathLength: 1,
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
            delay: 3,
          }}
        />
      </svg>

      {/* Floating UI Elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 opacity-50"
        animate={{
          y: [0, -40, 0],
          rotate: [0, 360],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Mobile UI mockup */}
        <div className="w-16 h-28 border-2 border-white/30 rounded-lg relative">
          <div className="absolute top-2 left-2 right-2 h-1 bg-white/40 rounded-full"></div>
          <div className="absolute top-5 left-2 right-2 h-4 bg-white/20 rounded"></div>
          <div className="absolute top-11 left-2 right-2 h-2 bg-white/15 rounded"></div>
          <div className="absolute top-15 left-2 right-2 h-2 bg-white/15 rounded"></div>
          <div className="absolute bottom-2 left-2 right-2 h-3 bg-accent/30 rounded"></div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 right-1/3 opacity-45"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          rotate: [0, -20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      >
        {/* Desktop UI mockup */}
        <div className="w-24 h-16 border-2 border-white/25 rounded relative">
          <div className="absolute top-1 left-1 right-1 h-2 bg-white/30 rounded-t"></div>
          <div className="absolute top-4 left-1 w-6 bottom-1 bg-white/15 rounded"></div>
          <div className="absolute top-4 right-1 w-16 bottom-1 bg-white/10 rounded"></div>
          <div className="absolute top-6 right-2 w-12 h-1 bg-accent/40 rounded"></div>
          <div className="absolute top-8 right-2 w-8 h-1 bg-white/20 rounded"></div>
          <div className="absolute top-10 right-2 w-10 h-1 bg-white/20 rounded"></div>
        </div>
      </motion.div>

      {/* Depth Layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20" />
    </div>
  );
}