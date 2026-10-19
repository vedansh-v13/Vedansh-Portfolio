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
          className="relative bg-[#141315] rounded-[2.5rem] p-2 shadow-xl border border-white/15 h-[680px]"
        >
          <div className="bg-[#181719] rounded-[2.25rem] p-1 h-full border border-white/5">
            <div className="relative bg-[#0d0c0e] rounded-[2rem] overflow-hidden h-[640px]">
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
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              {canScroll && (
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#181719] via-[#181719]/80 to-transparent flex items-end justify-center pb-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#AAA7AE]">
                    Scroll to explore
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full z-10 pointer-events-none" />
        </div>
        {caption && (
          <p className="text-xs font-mono text-[#AAA7AE] mt-3 text-center min-h-[2.5rem] line-clamp-2 max-w-[360px] px-2 leading-relaxed">
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
          "relative bg-[#181719] shadow-xl border border-white/15",
          isMobile ? "rounded-xl p-2" : "rounded-lg p-2.5"
        )}
      >
        <div className={cn("relative bg-[#0d0c0e] overflow-hidden", isMobile ? "rounded-lg" : "rounded-md", viewportHeight)}>
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
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          {canScroll && (
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0d0c0e] via-[#0d0c0e]/90 to-transparent flex items-end justify-center pb-2.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#AAA7AE]">
                Scroll to explore
              </span>
            </div>
          )}
        </div>
      </div>
      {caption && (
        <p className="text-xs font-mono text-[#AAA7AE] mt-3 text-center min-h-[2.5rem] line-clamp-2 px-1 leading-relaxed">
          {caption}
        </p>
      )}
    </div>
  );
}

// 2. ProcessFlow
export function ProcessFlow({ steps, color = "#E7D0C8" }: { 
  steps: { title: string; description: string; icon: LucideIcon }[];
  color?: string;
}) {
  return (
    <div className="relative">
      <div className="hidden md:block absolute top-8 left-0 right-0 h-[1px] bg-white/10" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative text-center bg-[#1F1E21] border border-white/10 rounded-lg p-6 pt-10"
            >
              <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 px-3 py-0.5 bg-[#181719] border border-white/20 rounded font-mono text-xs text-blush">
                STEP [ 0{index + 1} ]
              </div>
              <div className="w-12 h-12 mx-auto mb-4 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-blush">
                <Icon size={22} />
              </div>
              <h3 className="text-lg font-display font-medium mb-2 text-[#F5F4F6] tracking-tight">{step.title}</h3>
              <p className="text-[#AAA7AE] text-sm font-light leading-relaxed">{step.description}</p>
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
  color = "#E7D0C8",
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
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-[#1F1E21] p-6 rounded-lg border border-white/10 card-tactile hover:border-blush/40"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="w-10 h-10 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-blush">
          <Icon size={20} />
        </div>
        <div className={`flex items-center gap-1 font-mono text-xs ${
          trend === "up" ? "text-blush" : 
          trend === "down" ? "text-[#AAA7AE]" : "text-[#AAA7AE]"
        }`}>
          {trend === "up" && <ArrowUpRight size={14} />}
          {trend === "down" && <ArrowDownRight size={14} />}
          {trend === "neutral" && <Minus size={14} />}
          <span>{change}</span>
        </div>
      </div>
      <h3 className="text-2xl font-display font-medium text-[#F5F4F6] mb-1 tracking-tight">{value}</h3>
      <p className="text-[#AAA7AE] text-xs font-mono uppercase tracking-wider">{title}</p>
    </motion.div>
  );
}

// 4. Timeline
export function Timeline({ milestones, color = "#E7D0C8" }: {
  milestones: { date: string; title: string; description: string; status: "completed" | "in-progress" | "planned" }[];
  color?: string;
}) {
  return (
    <div className="relative">
      <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-white/15" />
      <div className="space-y-8">
        {milestones.map((milestone, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative flex items-start gap-6"
          >
            <div className="relative z-10">
              <div 
                className={`w-12 h-12 rounded-lg flex items-center justify-center border ${
                  milestone.status === "completed" 
                    ? "bg-blush text-ink border-blush" 
                    : milestone.status === "in-progress"
                    ? "bg-[#1F1E21] text-blush border-blush" 
                    : "bg-[#1F1E21] text-[#AAA7AE] border-white/15"
                }`}
              >
                {milestone.status === "completed" && <CheckCircle size={18} />}
                {milestone.status === "in-progress" && <Activity size={18} />}
                {milestone.status === "planned" && <Clock size={18} />}
              </div>
            </div>
            <div className="flex-1 pt-1.5 bg-[#1F1E21] p-5 rounded-lg border border-white/10">
              <div className="flex items-center gap-3 mb-2">
                {milestone.date && <span className="font-mono text-xs text-[#AAA7AE]">{milestone.date}</span>}
                <span className={`px-2 py-0.5 rounded font-mono text-[10px] uppercase tracking-wider ${
                  milestone.status === "completed" 
                    ? "bg-blush/20 text-blush border border-blush/30" 
                    : milestone.status === "in-progress"
                    ? "bg-white/10 text-white border border-white/20" 
                    : "bg-white/5 text-[#AAA7AE] border border-white/10"
                }`}>
                  {milestone.status.replace("-", " ")}
                </span>
              </div>
              <h3 className="text-base font-display font-medium mb-1 text-[#F5F4F6] tracking-tight">{milestone.title}</h3>
              <p className="text-[#AAA7AE] text-sm font-light leading-relaxed">{milestone.description}</p>
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
  color = "#E7D0C8" 
}: {
  before: { title: string; description: string; icon: LucideIcon };
  after: { title: string; description: string; icon: LucideIcon };
  metrics: { label: string; before: number; after: number; unit: string }[];
  color?: string;
}) {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative p-6 rounded-lg border border-white/15 bg-[#1F1E21]"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-md bg-white/5 flex items-center justify-center text-[#AAA7AE] border border-white/10">
              <before.icon size={20} />
            </div>
            <div>
              <span className="font-mono text-[10px] text-[#AAA7AE] uppercase tracking-wider block">PREVIOUS STATE</span>
              <h3 className="text-lg font-display font-medium text-[#F5F4F6]">{before.title}</h3>
            </div>
          </div>
          <p className="text-[#AAA7AE] text-sm font-light leading-relaxed">{before.description}</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="relative p-6 rounded-lg border border-blush/30 bg-[#242226]"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-md bg-blush/10 flex items-center justify-center text-blush border border-blush/30">
              <after.icon size={20} />
            </div>
            <div>
              <span className="font-mono text-[10px] text-blush uppercase tracking-wider block">REDESIGNED STATE</span>
              <h3 className="text-lg font-display font-medium text-[#F5F4F6]">{after.title}</h3>
            </div>
          </div>
          <p className="text-[#AAA7AE] text-sm font-light leading-relaxed">{after.description}</p>
        </motion.div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {metrics.map((metric, index) => {
          const improvement = ((metric.after - metric.before) / metric.before) * 100;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#1F1E21] p-5 rounded-lg border border-white/10"
            >
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#AAA7AE] mb-2">{metric.label}</h4>
              <div className="flex items-end justify-between mb-3">
                <span className="text-xl font-display font-medium text-[#F5F4F6]">{metric.after}{metric.unit}</span>
                <span className="font-mono text-xs font-medium text-blush">
                  {improvement > 0 ? "+" : ""}{improvement.toFixed(1)}%
                </span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                <motion.div
                  className="h-full bg-blush"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${Math.min(100, Math.max(10, (metric.after / (metric.after + metric.before)) * 100))}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                />
              </div>
              <div className="flex justify-between text-[11px] font-mono text-[#AAA7AE]/80 mt-2">
                <span>Before: {metric.before}{metric.unit}</span>
                <span>After: {metric.after}{metric.unit}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

// 6. FloatingParticle
export function FloatingParticle({ delay = 0, duration = 20, size = 3, color = "rgba(231, 208, 200, 0.15)" }: {
  delay?: number;
  duration?: number;
  size?: number;
  color?: string;
}) {
  return (
    <motion.div
      className="absolute pointer-events-none rounded-full"
      style={{
        width: size,
        height: size,
        background: color,
      }}
      animate={{
        y: [-10, -60, -10],
        opacity: [0, 0.6, 0],
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
export function AnimatedGrid({ mouseX = 0, mouseY = 0 }: { mouseX?: number; mouseY?: number }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
      <div className="absolute inset-0 architectural-grid" />
    </div>
  );
}

// 8. StoryCard
export function StoryCard({ 
  icon: Icon, 
  title, 
  content, 
  color = "#E7D0C8", 
  delay, 
  index,
  isVisible 
}: {
  icon: LucideIcon;
  title: string;
  content: string;
  color?: string;
  delay: number;
  index: number;
  isVisible: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { 
        opacity: 1, 
        y: 0, 
        transition: {
          duration: 0.5,
          delay: delay,
          ease: [0.16, 1, 0.3, 1]
        }
      } : {}}
      className="relative group bg-[#1F1E21] p-6 sm:p-7 rounded-lg border border-white/10 hover:border-blush/40 card-tactile shadow-sm flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-blush">
            <Icon size={20} />
          </div>
          <span className="font-mono text-[10px] text-[#AAA7AE] uppercase tracking-widest">
            NOTE [ 0{index + 1} ]
          </span>
        </div>
        <h3 className="text-xl font-display font-medium text-[#F5F4F6] mb-2 tracking-tight">
          {title}
        </h3>
        <p className="text-[#AAA7AE] text-sm leading-relaxed font-light">
          {content}
        </p>
      </div>
    </motion.div>
  );
}
