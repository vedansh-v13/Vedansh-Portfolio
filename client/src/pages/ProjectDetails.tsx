import React, { useEffect, useRef, useState } from "react";
import { useRoute } from "wouter";
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";
import { ArrowLeft, ExternalLink, AlertTriangle, Globe, Smartphone, CheckCircle, Lightbulb, Target, Search, Palette, TrendingUp, BookOpen, LucideIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projectDetailsData } from "../data/projectDetailsData";
import { cn } from "@/lib/utils";
import Footer from "../components/Footer";

// Floating particle component
const FloatingParticle = ({ delay = 0, duration = 20, size = 4, color = "rgba(255,255,255,0.1)" }: {
  delay?: number;
  duration?: number;
  size?: number;
  color?: string;
}) => {
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
};

// Animated grid component
const AnimatedGrid = ({ mouseX, mouseY }: { mouseX: number; mouseY: number }) => {
  const gridX = useMotionValue(0);
  const gridY = useMotionValue(0);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      gridX.set((clientX / innerWidth) * 100);
      gridY.set((clientY / innerHeight) * 100);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
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
          backgroundSize: "50px 50px",
          x: useTransform(gridX, [0, 100], [-10, 10]),
          y: useTransform(gridY, [0, 100], [-10, 10]),
        }}
      />
    </div>
  );
};

// Enhanced card component with all motion effects
const StoryCard = ({ 
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
}) => {
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
          style={{
            background: `linear-gradient(45deg, ${color}20, transparent, ${color}20)`,
            backgroundSize: "200% 200%",
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              style={{ 
                scale: iconScale,
                background: isHovered ? `${color}30` : `${color}15`,
                boxShadow: isHovered ? `0 0 20px ${color}40` : "none",
              }}
              className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300",
                "group-hover:shadow-lg"
              )}
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

export default function ProjectDetails() {
  // Get project ID from URL
  const [, params] = useRoute("/projects/:id");
  const projectId = params?.id;
  
  // Find project details by ID
  const projectDetails = projectId ? projectDetailsData[projectId] : null;
  
  // Scroll progress for gradient shifts
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 0.3]);
  
  // Scroll-triggered micro-interactions
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const sectionScale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.9]);
  
  // Mouse position for grid animations
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Refs for horizontal scroll functionality
  const screenshotScrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  
  // Gallery control states
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  
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
  
  // Auto-scroll for screenshots with pause functionality
  useEffect(() => {
    if (!screenshotScrollRef.current || !isAutoScrolling || isHovering || isDragging) return;
    
    const scrollContainer = screenshotScrollRef.current;
    let animationFrameId: number;
    let scrollPosition = scrollContainer.scrollLeft;
    const scrollSpeed = 0.5; // Slower speed for better control
    
    const scroll = () => {
      if (!isAutoScrolling || isHovering || isDragging) {
        cancelAnimationFrame(animationFrameId);
        return;
      }
      
      scrollPosition += scrollSpeed;
      
      if (scrollPosition >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationFrameId = requestAnimationFrame(scroll);
    };
    
    animationFrameId = requestAnimationFrame(scroll);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [projectDetails, isAutoScrolling, isHovering, isDragging]);
  
  // Update current image index based on scroll position
  useEffect(() => {
    if (!screenshotScrollRef.current || !projectDetails?.screenshots) return;
    
    const scrollContainer = screenshotScrollRef.current;
    const handleScroll = () => {
      const scrollLeft = scrollContainer.scrollLeft;
      const containerWidth = scrollContainer.clientWidth;
      const imageWidth = containerWidth * 0.8; // Approximate image width
      const newIndex = Math.round(scrollLeft / imageWidth);
      setCurrentImageIndex(Math.max(0, Math.min(newIndex, projectDetails.screenshots.length - 1)));
    };
    
    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, [projectDetails?.screenshots]);
  
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!screenshotScrollRef.current || !projectDetails?.screenshots) return;
      
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          scrollToImage(currentImageIndex - 1);
          break;
        case 'ArrowRight':
          e.preventDefault();
          scrollToImage(currentImageIndex + 1);
          break;
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentImageIndex, projectDetails?.screenshots]);
  
  // Scroll to specific image
  const scrollToImage = (index: number) => {
    if (!screenshotScrollRef.current || !projectDetails?.screenshots) return;
    
    const scrollContainer = screenshotScrollRef.current;
    const containerWidth = scrollContainer.clientWidth;
    const imageWidth = containerWidth * 0.8; // Approximate image width
    const targetScroll = index * imageWidth;
    
    scrollContainer.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
    
    // Pause auto-scroll temporarily
    setIsAutoScrolling(false);
    setTimeout(() => setIsAutoScrolling(true), 3000);
  };
  
  // Navigation functions
  const navigateLeft = () => {
    scrollToImage(currentImageIndex - 1);
  };
  
  const navigateRight = () => {
    scrollToImage(currentImageIndex + 1);
  };
  
  // Handle mouse drag for screenshots
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!screenshotScrollRef.current) return;
    
    setIsDragging(true);
    setIsAutoScrolling(false);
    setStartX(e.pageX - screenshotScrollRef.current.offsetLeft);
    setScrollLeft(screenshotScrollRef.current.scrollLeft);
  };
  
  const handleMouseLeave = () => {
    setIsDragging(false);
    if (!isHovering) {
      setTimeout(() => setIsAutoScrolling(true), 1000);
    }
  };
  
  const handleMouseUp = () => {
    setIsDragging(false);
    setTimeout(() => setIsAutoScrolling(true), 1000);
  };
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !screenshotScrollRef.current) return;
    
    e.preventDefault();
    const x = e.pageX - screenshotScrollRef.current.offsetLeft;
    const walk = (x - startX) * 3;
    screenshotScrollRef.current.scrollLeft = scrollLeft - walk;
  };
  
  // Gallery hover handlers
  const handleGalleryMouseEnter = () => {
    setIsHovering(true);
    setIsAutoScrolling(false);
  };
  
  const handleGalleryMouseLeave = () => {
    setIsHovering(false);
    setTimeout(() => setIsAutoScrolling(true), 1000);
  };

  // Hide testimonial for Agent Ari project
  const shouldShowTestimonial = projectDetails?.testimonial && projectId !== "agent-ari";
  
  // Get the corresponding project data to check if it's coming soon
  const isComingSoon = projectDetails?.category === "Coming Soon";
  
  // Hide screenshots for: 1) Specifically mentioned projects and all "Coming Soon" projects
  const shouldShowScreenshots = 
    projectDetails?.screenshots && 
    projectDetails.screenshots.length > 0 && 
    projectId !== "agent-ari" && 
    projectId !== "agent-lav" && 
    projectId !== "agent-malcom" &&
    projectId !== "nyuyu" &&
    projectId !== "verizon-bluejeans" &&
    projectId !== "ess-dee" &&
    !isComingSoon;

  // Storytelling cards data
  const storyCards = [
    { key: 'overview', icon: Globe, title: 'Overview', content: projectDetails?.projectOverview, color: '#3b82f6', delay: 0.1 },
    { key: 'goals', icon: Target, title: 'Goals', content: projectDetails?.projectGoals, color: '#10b981', delay: 0.2 },
    { key: 'research', icon: Search, title: 'Research', content: projectDetails?.researchDiscovery, color: '#8b5cf6', delay: 0.3 },
    { key: 'ux', icon: Smartphone, title: 'UX Flow', content: projectDetails?.uxFlowWireframes, color: '#f97316', delay: 0.4 },
    { key: 'ui', icon: Palette, title: 'UI Design', content: projectDetails?.uiDesignComponents, color: '#ec4899', delay: 0.5 },
    { key: 'results', icon: TrendingUp, title: 'Results', content: projectDetails?.outcomeResults, color: '#22c55e', delay: 0.6 },
    { key: 'learnings', icon: BookOpen, title: 'Key Learnings', content: projectDetails?.whatILearned, color: '#06b6d4', delay: 0.7, fullWidth: true },
  ].filter(card => card.content && card.content.length > 0);

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

  // Render not found if project doesn't exist
  if (!projectDetails) {
    return (
      <div className="min-h-screen bg-background">
        {/* Hero section for not found page */}
        <section className="relative w-full h-[40vh] min-h-[300px] overflow-hidden bg-black">
          {/* Background with overlay */}
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full bg-card opacity-50"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
          </div>
          
          {/* Content */}
          <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-between">
            {/* Enhanced Back button - layered over the image for better visibility */}
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
              <h1 className="text-4xl md:text-6xl artistic-text font-extralight mb-8 text-gray-200">Project Not Found</h1>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto artistic-text font-light">
                The project you're looking for doesn't seem to exist.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
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
          {Array.from({ length: 15 }).map((_, i) => (
            <FloatingParticle
              key={i}
              delay={i * 0.5}
              duration={15 + Math.random() * 10}
              size={2 + Math.random() * 6}
              color={`rgba(255,255,255,${0.05 + Math.random() * 0.1})`}
            />
          ))}
          
          {/* Artistic geometric line */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <svg
              className="w-full h-full opacity-5"
              viewBox="0 0 800 600"
              preserveAspectRatio="xMidYMid slice"
            >
              <motion.path
                d="M100,100 Q400,50 700,100 T700,300 Q350,350 100,300 Z"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </svg>
          </div>
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
                className="group relative overflow-hidden bg-black/20 hover:bg-black/40 border-white/20 hover:border-white/40 backdrop-blur-sm transition-all duration-300 shadow-lg hover:shadow-xl"
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
          
          <div className="pb-16 md:pb-20 mt-8 md:mt-12">            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-4xl md:text-5xl lg:text-7xl artistic-text font-extralight mb-8 text-gray-200"
            >
              {projectDetails.title}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-gray-300 text-lg mb-8 max-w-2xl artistic-text font-light"
            >
              {projectDetails.description}
            </motion.p>
            
            <div className="flex flex-wrap gap-4 md:gap-8">
              <div className="bg-card/20 backdrop-blur-md px-4 md:px-5 py-3 rounded-md border border-white/10">
                <p className="text-sm text-gray-400">Project Timeline</p>
                <p className="text-lg md:text-xl font-medium">{projectDetails.date}</p>
              </div>
              
              {projectDetails.metrics.map((metric, index) => (
                <div 
                  key={index} 
                  className="bg-card/20 backdrop-blur-md px-4 md:px-5 py-3 rounded-md border border-white/10"
                >
                  <p className="text-sm text-gray-400">{metric.label}</p>
                  <p className="text-lg md:text-xl font-medium text-white">{metric.value}</p>
                </div>
              ))}
              
              {/* External Link Button (if available) */}
              {projectDetails.externalLink && (
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="bg-accent/20 hover:bg-accent/30 border border-white/10"
                >
                  <a 
                    href={projectDetails.externalLink.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    {projectDetails.externalLink.type === 'web' && <Globe size={18} />}
                    {projectDetails.externalLink.type === 'app_store' && <Smartphone size={18} />}
                    {projectDetails.externalLink.type === 'play_store' && <Smartphone size={18} />}
                    {projectDetails.externalLink.type === 'github' && <ExternalLink size={18} />}
                    {projectDetails.externalLink.label}
                    <ExternalLink size={16} />
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Video section (if available) */}
      {projectDetails.videoUrl && (
        <section className="py-20 bg-background relative grid-lines">
          {/* Grid overlay background */}
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">See it in action</h2>
            <div className="aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl shadow-accent/10">
              {projectDetails.videoUrl.includes('youtube.com') ? (
                <iframe 
                  src={projectDetails.videoUrl} 
                  title={`${projectDetails.title} Video`}
                  className="w-full h-full" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              ) : (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  preload="auto"
                  className="w-full h-full object-cover"
                >
                  <source src={projectDetails.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </div>
        </section>
      )}
      
      {/* Screenshots section */}
      {shouldShowScreenshots && (
        <section className="py-20 bg-card/5">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-5xl artistic-text font-extralight mb-12 text-gray-200">Project Gallery</h2>
            
            {/* Gallery Container with Controls */}
            <div className="relative group">
              {/* Navigation Buttons */}
              <motion.button
                onClick={navigateLeft}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 opacity-0 group-hover:opacity-100 disabled:opacity-0"
                disabled={currentImageIndex === 0}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft size={24} />
              </motion.button>
              
              <motion.button
                onClick={navigateRight}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 opacity-0 group-hover:opacity-100 disabled:opacity-0"
                disabled={currentImageIndex === (projectDetails?.screenshots?.length || 0) - 1}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight size={24} />
              </motion.button>
              
              {/* Scroll Container */}
              <div 
                ref={screenshotScrollRef}
                className="overflow-x-auto cursor-grab active:cursor-grabbing horizontal-scroll-container scrollbar-hide"
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleGalleryMouseEnter}
                onMouseLeave={handleGalleryMouseLeave}
              >
                <div className="inline-flex space-x-6">
                  {projectDetails.screenshots.map((screenshot, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex-none"
                    >
                      {screenshot.type === 'mobile' ? (
                        // Mobile screenshot - iPhone mockup for UCaaS and BlueJeans, simple for Inaam
                        projectDetails?.id === 'inaam-application' ? (
                          <div className="relative">
                            <img 
                              src={screenshot.url} 
                              alt={screenshot.alt}
                              className="flex-none rounded-lg shadow-lg w-[300px] md:w-[350px]"
                            />
                            {screenshot.caption && (
                              <p className="text-sm text-gray-400 mt-3 text-center">
                                {screenshot.caption}
                              </p>
                            )}
                          </div>
                        ) : (
                          // iPhone mockup for other projects
                          <div className="relative">
                            {/* iPhone frame */}
                            <div className="relative bg-black rounded-[2.5rem] p-2 shadow-2xl" style={{ width: '300px', height: '650px' }}>
                              {/* Screen */}
                              <div className="relative bg-white rounded-[2rem] overflow-hidden h-full">
                                <img 
                                  src={screenshot.url} 
                                  alt={screenshot.alt}
                                  className="w-full h-full object-cover object-top"
                                />
                              </div>
                              {/* Home indicator */}
                              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white rounded-full opacity-60"></div>
                            </div>
                            {/* Caption */}
                            {screenshot.caption && (
                              <p className="text-sm text-gray-400 mt-3 text-center max-w-[300px]">
                                {screenshot.caption}
                              </p>
                            )}
                          </div>
                        )
                      ) : (
                        // Desktop screenshot
                        <div className="relative">
                          <img 
                            src={screenshot.url} 
                            alt={screenshot.alt}
                            className="flex-none rounded-lg shadow-lg w-[400px] md:w-[500px]"
                          />
                          {screenshot.caption && (
                            <p className="text-sm text-gray-400 mt-3 text-center">
                              {screenshot.caption}
                            </p>
                          )}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Scroll Indicators */}
            {projectDetails?.screenshots && projectDetails.screenshots.length > 1 && (
              <div className="flex justify-center mt-6 space-x-2">
                {projectDetails.screenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToImage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-white scale-125' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            )}
            
            {/* Auto-scroll indicator */}
            <div className="flex justify-center mt-4">
              <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                isAutoScrolling ? 'bg-green-400 animate-pulse' : 'bg-gray-400'
              }`} />
              <span className="text-xs text-gray-400 ml-2">
                {isAutoScrolling ? 'Auto-scrolling' : 'Paused'}
              </span>
            </div>
          </div>
        </section>
      )}
      
      {/* Problem section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl artistic-text font-extralight mb-8 text-gray-200">The Challenge</h2>
              <p className="text-gray-300 mb-12">{projectDetails.problemDescription}</p>
            </motion.div>
            
            <div className="space-y-6">
              {projectDetails.painPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card/10 p-6 rounded-lg border border-white/10 flex gap-4 items-start hover:bg-card/15 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-rose-500/15 rounded-full flex items-center justify-center text-rose-400">
                    {point.icon || <AlertTriangle size={20} />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{point.title}</h3>
                    <p className="text-gray-400">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Solution section */}
      <section className="py-20 bg-card/5">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl artistic-text font-extralight mb-8 text-gray-200">Our Solution</h2>
              <p className="text-gray-300 mb-12">{projectDetails.solutionDescription}</p>
            </motion.div>
            
            <div className="space-y-6">
              {projectDetails.solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card/10 p-6 rounded-lg border border-white/10 flex gap-4 items-start hover:bg-card/15 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-emerald-500/15 rounded-full flex items-center justify-center text-emerald-400">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
                    <p className="text-gray-400">{solution.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Enhanced Storytelling sections with Motion Design */}
      {storyCards.length > 0 && (
        <section className="py-20 bg-background relative overflow-hidden">
          {/* Animated background with floating particles */}
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 8 }).map((_, i) => (
              <FloatingParticle
                key={i}
                delay={i * 0.8}
                duration={20 + Math.random() * 15}
                size={3 + Math.random() * 4}
                color={`rgba(255,255,255,${0.03 + Math.random() * 0.05})`}
              />
            ))}
          </div>
          
          {/* Parallax background elements */}
          <motion.div 
            className="absolute inset-0 pointer-events-none"
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
          >
            <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-pink-500/5 to-orange-500/5 rounded-full blur-3xl"></div>
          </motion.div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-center mb-16"
              >
                <motion.h2 
                  className="text-3xl md:text-5xl artistic-text font-extralight mb-8 text-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Project Journey
                </motion.h2>
                <motion.p 
                  className="text-gray-300 artistic-text font-light text-lg"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Key insights and learnings from this project
                </motion.p>
                
                {/* Animated progress indicator */}
                <motion.div
                  className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-8 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                />
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {storyCards.map((card, index) => (
                  <div 
                    key={card.key}
                    className={card.fullWidth ? "md:col-span-2 lg:col-span-3" : ""}
                    data-card-key={card.key}
                  >
                    <StoryCard
                      icon={card.icon}
                      title={card.title}
                      content={card.content || ''}
                      color={card.color}
                      delay={card.delay}
                      index={index}
                      isVisible={visibleCards[card.key] || false}
                    />
                  </div>
                ))}
              </div>
              
              {/* Bottom decorative element */}
              <motion.div
                className="flex justify-center mt-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-px bg-gradient-to-r from-transparent to-gray-500"></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                  <div className="w-8 h-px bg-gradient-to-l from-transparent to-gray-500"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Tech Stack section - Updated with simplified design */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl artistic-text font-extralight mb-8 text-gray-200">Technology Stack</h2>
              <p className="text-gray-300 artistic-text font-light text-lg">Tools and technologies used to deliver this project</p>
            </motion.div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {projectDetails.techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center gap-3 bg-card/10 px-4 py-2 rounded-full hover:bg-card/20 transition-all duration-300"
                >
                  {tech.logo ? (
                    <img src={tech.logo} alt={tech.name} className="w-5 h-5" />
                  ) : (
                    <div className="w-5 h-5 bg-card/50 rounded-md flex items-center justify-center text-xs font-bold">
                      {tech.name.charAt(0)}
                    </div>
                  )}
                  <span className="text-sm">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial section - hidden for Agent Ari project */}
      {shouldShowTestimonial && projectDetails.testimonial && (
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto bg-card/10 p-8 md:p-12 rounded-xl border border-white/10"
            >
              <div className="flex flex-col items-center text-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-accent/50 mb-6">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                </svg>
                
                <blockquote className="text-xl md:text-2xl italic text-gray-200 mb-8">
                  "{projectDetails.testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center flex-col">
                  <cite className="font-bold text-gray-100 not-italic">
                    {projectDetails.testimonial.author}
                  </cite>
                  <span className="text-gray-400 text-sm mt-1">
                    {projectDetails.testimonial.position}, {projectDetails.testimonial.company}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}
      
      <Footer />
    </div>
  );
}