import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Mail, ExternalLink, Target, Search, Smartphone, Palette, TrendingUp, BookOpen, Globe, Users, BarChart3, Zap, Shield, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";

// Floating particles component for background
const FloatingParticle = ({ delay = 0, duration = 20, size = 4, color = "rgba(255,255,255,0.1)" }: {
  delay?: number;
  duration?: number;
  size?: number;
  color?: string;
}) => {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        background: color,
      }}
      animate={{
        y: [-20, -100],
        x: [0, 20],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};

// Animated grid background
const AnimatedGrid = ({ mouseX, mouseY }: { mouseX: number; mouseY: number }) => {
  const gridX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const gridY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  return (
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
  );
};

// Story card component
const StoryCard = ({ 
  icon: Icon, 
  title, 
  content, 
  color, 
  delay, 
  index,
  isVisible 
}: {
  icon: React.ElementType;
  title: string;
  content: string;
  color: string;
  delay: number;
  index: number;
  isVisible: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = React.useRef<HTMLDivElement>(null);
  
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
      style={{
        scale,
        y,
        rotateX: rotation,
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      {/* Floating effect shadow */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          filter: "blur(20px)",
          transform: "translateY(10px)",
        }}
      />
      
      {/* Main card */}
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
        {/* Animated border glow */}
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
};

export default function OmnycommCaseStudy() {
  // Scroll progress for gradient shifts
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 0.3]);
  
  // Mouse position for grid animations
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Visibility state for cards
  const [visibleCards, setVisibleCards] = useState<Record<string, boolean>>({});
  
  // Mouse move handler for grid animations
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Storytelling cards data
  const storyCards = [
    { key: 'overview', icon: Globe, title: 'Project Overview', content: 'Omnycomm is a marketing OS for D2C brands, built to unify ecommerce data, campaign performance, and communication. I designed the first version of its ecommerce dashboard to help users understand their brand performance at a glance.', color: '#3b82f6', delay: 0.1 },
    { key: 'problem', icon: Target, title: 'The Problem', content: 'I discovered that the ecommerce dashboard was cluttered and hard to use. Users struggled to find information quickly, and the interface lacked clear visual hierarchy, leading to confusion and inefficiency.', color: '#ef4444', delay: 0.2 },
    { key: 'solution', icon: Search, title: 'The Solution', content: 'I designed the dashboard to prioritize important metrics, introduce clean layout, and enhance visual hierarchy. My new design provides intuitive and efficient user experience.', color: '#10b981', delay: 0.3 },
    { key: 'research', icon: Smartphone, title: 'Research & Discovery', content: 'I analyzed dashboards from Triple Whale, Peel Analytics, Google Ads, and Meta Business Suite. My findings revealed that users wanted clarity over complexity and high-level summaries.', color: '#8b5cf6', delay: 0.4 },
    { key: 'design', icon: Palette, title: 'UX Architecture', content: 'I structured the dashboard into vertical sections with persistent filters, modular components, and scalable KPI displays for traffic, attribution, and campaign views.', color: '#f97316', delay: 0.5 },
    { key: 'results', icon: TrendingUp, title: 'Results & Impact', content: 'I created a clean, focused layout for quick decision-making. I designed a modular system to extend across Omnycomm\'s other dashboards with improved user efficiency.', color: '#22c55e', delay: 0.6 },
    { key: 'learnings', icon: BookOpen, title: 'Key Learnings', content: 'I learned that users prioritize clarity over complexity. High-level summaries should tell 80% of the story. Filters need to be persistent, not buried in menus.', color: '#06b6d4', delay: 0.7, fullWidth: true },
  ];

  // Intersection observer for card visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => ({
              ...prev,
              [entry.target.getAttribute('data-card-key') || '']: true
            }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    // Observe all story cards
    const cards = document.querySelectorAll('[data-card-key]');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, [storyCards]);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Omnycomm Case Study - Ecommerce Dashboard Design | Vedansh Wandalkar</title>
        <meta name="description" content="Case study: Designing the first ecommerce dashboard experience for Omnycomm, a marketing OS for D2C brands. Learn about the UX/UI design process, challenges, and outcomes." />
        <meta property="og:title" content="Omnycomm Case Study - Ecommerce Dashboard Design | Vedansh Wandalkar" />
        <meta property="og:description" content="Case study: Designing the first ecommerce dashboard experience for Omnycomm, a marketing OS for D2C brands." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://vedanshwandalkar.com/projects/omnycomm-ecommerce" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Omnycomm Case Study - Ecommerce Dashboard Design" />
        <meta name="twitter:description" content="Case study: Designing the first ecommerce dashboard experience for Omnycomm, a marketing OS for D2C brands." />
      </Helmet>

      {/* Hero section */}
      <section className="relative w-full h-[60vh] min-h-[500px] overflow-hidden bg-gradient-to-br from-primary/20 via-background to-background">
        {/* Animated background with gradient shifts */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: backgroundY, opacity }}
        >
          <div className="absolute inset-0 grid-lines opacity-10"></div>
          <AnimatedGrid mouseX={mousePosition.x} mouseY={mousePosition.y} />
          
          {/* Floating particles */}
          {Array.from({ length: 20 }).map((_, i) => (
            <FloatingParticle
              key={i}
              delay={i * 0.5}
              duration={15 + Math.random() * 10}
              size={2 + Math.random() * 4}
              color={`rgba(255,255,255,${0.05 + Math.random() * 0.1})`}
            />
          ))}
        </motion.div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-between">
          {/* Enhanced Back button */}
          <div className="pt-6 md:pt-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Button 
                asChild 
                variant="outline" 
                size="sm" 
                className="group relative overflow-hidden bg-black/50 hover:bg-black/70 border-white/20 hover:border-white/40 backdrop-blur-sm transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <a href="/#projects" className="inline-flex items-center gap-2 px-4 py-2.5">
                  <motion.div
                    className="relative"
                    whileHover={{ x: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowLeft size={18} className="text-gray-300 group-hover:text-white transition-colors duration-300" />
                  </motion.div>
                  <span className="text-gray-300 group-hover:text-white font-medium transition-colors duration-300">
                    Back
                  </span>
                  
                  {/* Hover effect background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </a>
              </Button>
            </motion.div>
          </div>
          
          <div className="pb-16 md:pb-20 mt-8 md:mt-12 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-4xl md:text-6xl lg:text-7xl artistic-text font-extralight mb-6 text-white leading-tight"
            >
              Omnycomm
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-xl md:text-2xl text-gray-300 mb-8 artistic-text font-light max-w-3xl mx-auto"
            >
              Designing the First Ecommerce Dashboard Experience
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-wrap justify-center gap-4 text-sm"
            >
              <span className="bg-white/10 px-4 py-2 rounded-full text-gray-300 backdrop-blur-sm border border-white/20">UI/UX Design</span>
              <span className="bg-white/10 px-4 py-2 rounded-full text-gray-300 backdrop-blur-sm border border-white/20">Dashboard Design</span>
              <span className="bg-white/10 px-4 py-2 rounded-full text-gray-300 backdrop-blur-sm border border-white/20">Ecommerce</span>
              <span className="bg-white/10 px-4 py-2 rounded-full text-gray-300 backdrop-blur-sm border border-white/20">Figma</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project details section */}
      <section className="py-20 bg-card/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="bg-card/10 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="w-5 h-5 text-blue-400" />
                  <h4 className="text-lg font-semibold text-white">Role</h4>
                </div>
                <p className="text-gray-300">UI/UX Designer (end-to-end)</p>
              </div>
              <div className="bg-card/10 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <Palette className="w-5 h-5 text-purple-400" />
                  <h4 className="text-lg font-semibold text-white">Tools</h4>
                </div>
                <p className="text-gray-300">Figma, Notion</p>
              </div>
              <div className="bg-card/10 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="w-5 h-5 text-green-400" />
                  <h4 className="text-lg font-semibold text-white">Platform</h4>
                </div>
                <p className="text-gray-300">Web dashboard</p>
              </div>
              <div className="bg-card/10 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <BarChart3 className="w-5 h-5 text-orange-400" />
                  <h4 className="text-lg font-semibold text-white">Users</h4>
                </div>
                <p className="text-gray-300">Ecommerce marketers & founders</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Storytelling section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl artistic-text font-extralight mb-6 text-white">
                The Journey
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From research to implementation, here's how I designed the first ecommerce dashboard experience for Omnycomm
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {storyCards.map((card, index) => (
                <div
                  key={card.key}
                  data-card-key={card.key}
                  className={cn(
                    "relative",
                    card.fullWidth && "md:col-span-2 lg:col-span-3"
                  )}
                >
                  <StoryCard
                    icon={card.icon}
                    title={card.title}
                    content={card.content}
                    color={card.color}
                    delay={card.delay}
                    index={index}
                    isVisible={visibleCards[card.key] || false}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key features section */}
      <section className="py-20 bg-card/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl artistic-text font-extralight mb-6 text-white">
                Key Features
              </h2>
              <p className="text-xl text-gray-300">
                I designed the dashboard with these core principles in mind
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card/10 p-8 rounded-xl border border-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Quick Decision Making</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Clean, focused layout that prioritizes the most important metrics for rapid insights and decision-making.
                </p>
              </div>

              <div className="bg-card/10 p-8 rounded-xl border border-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Scalable Architecture</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Modular system designed to extend across Omnycomm's other dashboards with consistent patterns.
                </p>
              </div>

              <div className="bg-card/10 p-8 rounded-xl border border-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Persistent Filters</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Filters and controls that stay visible and accessible, not buried in menus or dropdowns.
                </p>
              </div>

              <div className="bg-card/10 p-8 rounded-xl border border-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">High-Level Summary</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Overview sections that tell 80% of the story at a glance, with drill-down capabilities for details.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Demo CTA section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl artistic-text font-extralight mb-6 text-white">
              Get in Touch for Product Demo
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Interested in seeing the Omnycomm dashboard in action? I'd be happy to walk you through my design process and show you how it works.
            </p>
            <Button 
              asChild 
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a href="mailto:vedanshwandalkar@gmail.com" className="inline-flex items-center gap-2 px-8 py-4">
                <Mail size={20} className="group-hover:scale-110 transition-transform duration-300" />
                Request Demo
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 