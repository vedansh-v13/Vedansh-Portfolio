import React, { useEffect, useRef, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { 
  CheckCircle, 
  ArrowUpRight, 
  ArrowDownRight, 
  Activity, 
  Clock, 
  TrendingUp, 
  TrendingDown, 
  Minus, 
  LucideIcon 
} from "lucide-react";
import { cn } from "@/lib/utils";

// 1. GalleryScreenshotFrame
export function GalleryScreenshotFrame({
  src,
  alt,
  caption,
  variant = "mobile",
}: {
  src: string;
  alt: string;
  caption?: string;
  variant?: "mobile" | "desktop" | "iphone";
}) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const checkScrollable = () => {
      setCanScroll(el.scrollHeight > el.clientHeight + 4);
    };

    checkScrollable();
    const img = el.querySelector("img");
    img?.addEventListener("load", checkScrollable);
    window.addEventListener("resize", checkScrollable);

    return () => {
      img?.removeEventListener("load", checkScrollable);
      window.removeEventListener("resize", checkScrollable);
    };
  }, [src]);

  const handleMouseEnter = () => {
    const el = viewportRef.current;
    if (!el) return;
    
    el.setAttribute("data-hovering", "true");
    
    const scrollHeight = el.scrollHeight;
    const clientHeight = el.clientHeight;
    const maxScroll = scrollHeight - clientHeight;
    if (maxScroll <= 0) return;

    let startTime: number | null = null;
    const duration = maxScroll * 20; // 20ms per pixel
    const startScrollTop = el.scrollTop;

    const animateScroll = (timestamp: number) => {
      if (el.getAttribute("data-hovering") !== "true") return;
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percent = Math.min(progress / duration, 1);
      
      el.scrollTop = startScrollTop + (maxScroll - startScrollTop) * percent;

      if (percent < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  const handleMouseLeave = () => {
    const el = viewportRef.current;
    if (!el) return;
    el.setAttribute("data-hovering", "false");
    el.scrollTo({ top: 0, behavior: "smooth" });
  };

  const stopGalleryDrag = (e: React.SyntheticEvent) => {
    e.stopPropagation();
  };

  if (variant === "iphone") {
    return (
      <div className="relative w-full max-w-[360px] mx-auto">
        <div
          className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl border border-white/10 backdrop-blur-sm h-[680px]"
        >
          <div className="bg-black rounded-[2.5rem] p-1.5 h-full">
            <div className="relative bg-white rounded-[2.2rem] overflow-hidden h-[640px]">
              <div
                ref={viewportRef}
                className="h-full overflow-y-auto overflow-x-hidden overscroll-y-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                onMouseDown={stopGalleryDrag}
                onTouchStart={stopGalleryDrag}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="min-h-full flex flex-col justify-start">
                  <img
                    src={src}
                    alt={alt}
                    className="w-full h-auto block select-none object-top"
                    draggable={false}
                  />
                </div>
              </div>
              {canScroll && (
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white via-white/80 to-transparent flex items-end justify-center pb-4">
                  <span className="text-[10px] uppercase tracking-widest text-black/40 font-bold">
                    Scroll to explore
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-36 h-1.5 bg-white rounded-full opacity-40 z-10 pointer-events-none" />
        </div>
        {caption && (
          <p className="text-sm text-gray-400 mt-4 text-center min-h-[2.75rem] line-clamp-2 max-w-[360px] px-2">
            {caption}
          </p>
        )}
      </div>
    );
  }

  const isMobile = variant === "mobile";
  const frameWidth = isMobile ? "w-[280px] md:w-[300px]" : "w-[85vw] sm:w-[520px] lg:w-[800px]";
  const viewportHeight = isMobile ? "h-[520px] md:h-[540px]" : "h-[290px] md:h-[444px]";

  return (
    <div className={cn("relative flex flex-col", frameWidth)}>
      <div
        className={cn(
          "relative bg-gradient-to-b from-gray-800 to-gray-900 shadow-2xl border border-white/10 backdrop-blur-sm",
          isMobile ? "rounded-2xl p-2" : "rounded-lg p-3"
        )}
      >
        <div className={cn("relative bg-zinc-950 overflow-hidden", isMobile ? "rounded-xl" : "rounded-md", viewportHeight)}>
          <div
            ref={viewportRef}
            className="h-full overflow-y-auto overflow-x-hidden overscroll-y-contain [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.2)_transparent]"
            onMouseDown={stopGalleryDrag}
            onTouchStart={stopGalleryDrag}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="min-h-full flex items-center justify-center">
              <img
                src={src}
                alt={alt}
                className="w-full h-auto block select-none"
                draggable={false}
              />
            </div>
          </div>
          {canScroll && (
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-zinc-950 via-zinc-950/90 to-transparent flex items-end justify-center pb-2.5">
              <span className="text-[10px] uppercase tracking-widest text-white/45 font-medium">
                Scroll to explore
              </span>
            </div>
          )}
        </div>
        {!isMobile && (
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-2 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full" />
        )}
      </div>
      {caption && (
        <p className="text-sm text-gray-400 mt-3 text-center min-h-[2.75rem] line-clamp-2 px-1">
          {caption}
        </p>
      )}
    </div>
  );
}

// 2. ProcessFlow
export function ProcessFlow({ steps, color = "#3b82f6" }: { 
  steps: { title: string; description: string; icon: LucideIcon }[];
  color?: string;
}) {
  return (
    <div className="relative">
      <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative text-center"
            >
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-background border-2 border-gray-600 rounded-full flex items-center justify-center text-sm font-bold text-gray-300">
                {index + 1}
              </div>
              <motion.div
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ 
                  background: `linear-gradient(135deg, ${color}20, ${color}10)`,
                  border: `2px solid ${color}30`
                }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Icon size={28} style={{ color }} />
              </motion.div>
              <h3 className="text-lg font-semibold mb-2 text-gray-200">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

// 3. MetricsCard
export function MetricsCard({ 
  title, 
  value, 
  change, 
  icon: Icon, 
  color = "#3b82f6",
  trend = "up" 
}: {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  color?: string;
  trend?: "up" | "down" | "neutral";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-card/10 p-6 rounded-xl border border-white/10 hover:bg-card/15 hover:border-white/20 transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-4">
        <div 
          className="w-12 h-12 rounded-lg flex items-center justify-center"
          style={{ background: `${color}15` }}
        >
          <Icon size={24} style={{ color }} />
        </div>
        <div className={`flex items-center gap-1 text-sm ${
          trend === "up" ? "text-emerald-400" : 
          trend === "down" ? "text-rose-400" : "text-gray-400"
        }`}>
          {trend === "up" && <ArrowUpRight size={16} />}
          {trend === "down" && <ArrowDownRight size={16} />}
          {trend === "neutral" && <Minus size={16} />}
          <span>{change}</span>
        </div>
      </div>
      <h3 className="text-2xl font-bold text-gray-200 mb-1">{value}</h3>
      <p className="text-gray-400 text-sm">{title}</p>
    </motion.div>
  );
}

// 4. Timeline
export function Timeline({ milestones, color = "#3b82f6" }: {
  milestones: { date: string; title: string; description: string; status: "completed" | "in-progress" | "planned" }[];
  color?: string;
}) {
  return (
    <div className="relative">
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-600 via-gray-500 to-gray-600" />
      <div className="space-y-8">
        {milestones.map((milestone, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative flex items-start gap-6"
          >
            <div className="relative z-10">
              <div 
                className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${
                  milestone.status === "completed" 
                    ? "bg-emerald-500/20 border-emerald-500/50" 
                    : milestone.status === "in-progress"
                    ? "bg-yellow-500/20 border-yellow-500/50"
                    : "bg-gray-500/20 border-gray-500/50"
                }`}
              >
                {milestone.status === "completed" && <CheckCircle size={20} className="text-emerald-400" />}
                {milestone.status === "in-progress" && <Activity size={20} className="text-yellow-400" />}
                {milestone.status === "planned" && <Clock size={20} className="text-gray-400" />}
              </div>
            </div>
            <div className="flex-1 pt-2">
              <div className="flex items-center gap-3 mb-2">
                {milestone.date && <span className="text-sm text-gray-400">{milestone.date}</span>}
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  milestone.status === "completed" 
                    ? "bg-emerald-500/20 text-emerald-400" 
                    : milestone.status === "in-progress"
                    ? "bg-yellow-500/20 text-yellow-400"
                    : "bg-gray-500/20 text-gray-400"
                }`}>
                  {milestone.status.replace("-", " ")}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-200">{milestone.title}</h3>
              <p className="text-gray-400">{milestone.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// 5. ComparisonChart
export function ComparisonChart({ 
  before, 
  after, 
  metrics, 
  color = "#3b82f6" 
}: {
  before: { title: string; description: string; icon: LucideIcon };
  after: { title: string; description: string; icon: LucideIcon };
  metrics: { label: string; before: number; after: number; unit: string }[];
  color?: string;
}) {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative p-6 rounded-xl border border-rose-500/20 bg-rose-500/5"
        >
          <div className="absolute top-4 right-4">
            <div className="w-8 h-8 rounded-full bg-rose-500/20 flex items-center justify-center">
              <TrendingDown size={16} className="text-rose-400" />
            </div>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-rose-500/15 flex items-center justify-center">
              <before.icon size={24} className="text-rose-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-200">{before.title}</h3>
          </div>
          <p className="text-gray-400">{before.description}</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative p-6 rounded-xl border border-emerald-500/20 bg-emerald-500/5"
        >
          <div className="absolute top-4 right-4">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <TrendingUp size={16} className="text-emerald-400" />
            </div>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-emerald-500/15 flex items-center justify-center">
              <after.icon size={24} className="text-emerald-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-200">{after.title}</h3>
          </div>
          <p className="text-gray-400">{after.description}</p>
        </motion.div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {metrics.map((metric, index) => {
          const improvement = ((metric.after - metric.before) / metric.before) * 100;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card/10 p-6 rounded-xl border border-white/10"
            >
              <h4 className="text-sm font-medium text-gray-400 mb-3">{metric.label}</h4>
              <div className="flex items-end justify-between mb-2">
                <span className="text-2xl font-bold text-gray-200">{metric.after}{metric.unit}</span>
                <span className={`text-sm font-medium ${
                  improvement > 0 ? "text-emerald-400" : "text-rose-400"
                }`}>
                  {improvement > 0 ? "+" : ""}{improvement.toFixed(1)}%
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <motion.div
                  className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(metric.after / (metric.after + metric.before)) * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>{metric.before}{metric.unit}</span>
                <span>{metric.after}{metric.unit}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

// 6. FloatingParticle
export function FloatingParticle({ delay = 0, duration = 20, size = 4, color = "rgba(255,255,255,0.1)" }: {
  delay?: number;
  duration?: number;
  size?: number;
  color?: string;
}) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        width: size,
        height: size,
        background: color,
        borderRadius: "50%",
      }}
      animate={{
        y: [-20, -100, -20],
        x: [0, 20, 0],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

// 7. AnimatedGrid
export function AnimatedGrid({ mouseX, mouseY }: { mouseX: number; mouseY: number }) {
  const gridX = useMotionValue(0);
  const gridY = useMotionValue(0);
  
  useEffect(() => {
    const handleGridMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      gridX.set((clientX / innerWidth) * 100);
      gridY.set((clientY / innerHeight) * 100);
    };
    
    window.addEventListener("mousemove", handleGridMouseMove);
    return () => window.removeEventListener("mousemove", handleGridMouseMove);
  }, [gridX, gridY]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px"
        }}
        animate={{
          x: [-10, 10],
          y: [-10, 10]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
    </div>
  );
}

// 8. StoryCard
export function StoryCard({ 
  icon: Icon, 
  title, 
  content, 
  color, 
  delay, 
  index,
  isVisible 
}: {
  icon: LucideIcon;
  title: string;
  content: string;
  color: string;
  delay: number;
  index: number;
  isVisible: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Spring animations for smooth interactions
  const scale = useSpring(1, { stiffness: 300, damping: 30 });
  const y = useSpring(0, { stiffness: 300, damping: 30 });
  const rotation = useSpring(0, { stiffness: 200, damping: 20 });
  
  // Icon pulse animation
  const iconScale = useSpring(1, { stiffness: 400, damping: 25 });
  
  useEffect(() => {
    if (isHovered) {
      scale.set(1.02);
      y.set(-8);
      rotation.set(1);
      iconScale.set(1.1);
    } else {
      scale.set(1);
      y.set(0);
      rotation.set(0);
      iconScale.set(1);
    }
  }, [isHovered, scale, y, rotation, iconScale]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isVisible ? { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: {
          duration: 0.6,
          delay: delay,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      } : {}}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
      style={{
        scale,
        y,
        rotateX: rotation,
      }}
    >
      <motion.div
        className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          filter: "blur(20px)",
          transform: "translateY(10px)",
        }}
      />
      
      <motion.div
        className={cn(
          "relative bg-card/10 p-6 rounded-xl border border-white/10 backdrop-blur-sm",
          "hover:bg-card/20 hover:border-white/30 transition-all duration-500",
          "cursor-pointer"
        )}
        style={{
          boxShadow: isHovered 
            ? "0 20px 40px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.1)" 
            : "0 4px 20px rgba(0,0,0,0.1)",
        }}
      >
        <motion.div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            background: `linear-gradient(45deg, ${color}20, transparent, ${color}20)`,
            backgroundSize: "200% 200%",
          }}
        />
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300",
                "group-hover:shadow-lg"
              )}
              style={{ 
                scale: iconScale,
                background: isHovered ? `${color}30` : `${color}15`,
                boxShadow: isHovered ? `0 0 20px ${color}40` : "none"
              }}
            >
              <Icon 
                size={24} 
                className="transition-colors duration-300"
                style={{ color: isHovered ? color : `${color}80` }}
              />
            </motion.div>
            <motion.h3 
              className="text-xl font-bold text-gray-200"
              animate={{
                color: isHovered ? "#ffffff" : "#e5e7eb",
              }}
              transition={{ duration: 0.3 }}
            >
              {title}
            </motion.h3>
          </div>
          
          <motion.p 
            className="text-gray-400 text-sm leading-relaxed"
            animate={{
              color: isHovered ? "#d1d5db" : "#9ca3af",
            }}
            transition={{ duration: 0.3 }}
          >
            {content}
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
}
