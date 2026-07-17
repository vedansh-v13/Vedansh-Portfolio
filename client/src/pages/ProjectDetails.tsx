import React, { useEffect, useRef, useState } from "react";
import { useRoute } from "wouter";
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";
import { ArrowLeft, ExternalLink, AlertTriangle, Globe, Smartphone, CheckCircle, Lightbulb, Target, Search, Palette, TrendingUp, BookOpen, LucideIcon, ChevronLeft, ChevronRight, ArrowUpRight, ArrowDownRight, Activity, Clock, TrendingDown, Minus, BarChart3, Code, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projectDetailsData } from "../data/projectDetailsData";
import { cn } from "@/lib/utils";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

import { 
  GalleryScreenshotFrame, 
  ProcessFlow, 
  MetricsCard, 
  Timeline, 
  ComparisonChart, 
  FloatingParticle, 
  AnimatedGrid, 
  StoryCard 
} from "@/components/project/ProjectDetailComponents";

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
  const desktopScreenshotScrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isDesktopDragging, setIsDesktopDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPosition, setScrollLeftPosition] = useState(0);
  
  // Gallery control states
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [isDesktopAutoScrolling, setIsDesktopAutoScrolling] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [isDesktopHovering, setIsDesktopHovering] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentDesktopImageIndex, setCurrentDesktopImageIndex] = useState(0);
  
  // Visibility state for cards
  const [visibleCards, setVisibleCards] = useState<Record<string, boolean>>({});
  
  // Mouse move handler for grid animations
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", handleGlobalMouseMove);
    return () => window.removeEventListener("mousemove", handleGlobalMouseMove);
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
  
  // Auto-scroll for desktop screenshots
  useEffect(() => {
    if (!desktopScreenshotScrollRef.current || !isDesktopAutoScrolling || isDesktopHovering || isDesktopDragging) return;
    
    const scrollContainer = desktopScreenshotScrollRef.current;
    let animationFrameId: number;
    let scrollPosition = scrollContainer.scrollLeft;
    const scrollSpeed = 0.5; // Slower speed for better control
    
    const scroll = () => {
      if (!isDesktopAutoScrolling || isDesktopHovering || isDesktopDragging) {
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
  }, [projectDetails, isDesktopAutoScrolling, isDesktopHovering, isDesktopDragging]);
  
  // Update current image index based on scroll position
  useEffect(() => {
    if (!screenshotScrollRef.current || !projectDetails?.screenshots) return;
    
    const scrollContainer = screenshotScrollRef.current;
    const handleScroll = () => {
      const currentScrollLeft = scrollContainer.scrollLeft;
      const containerWidth = scrollContainer.clientWidth;
      const imageWidth = containerWidth * 0.8; // Approximate image width
      const newIndex = Math.round(currentScrollLeft / imageWidth);
      setCurrentImageIndex(Math.max(0, Math.min(newIndex, projectDetails.screenshots.length - 1)));
    };
    
    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, [projectDetails?.screenshots]);
  
  // Update current desktop image index based on scroll position
  useEffect(() => {
    if (!desktopScreenshotScrollRef.current || !projectDetails?.screenshots) return;
    
    const desktopScreenshots = projectDetails.screenshots.filter(s => s.type === 'desktop');
    if (desktopScreenshots.length === 0) return;
    
    const scrollContainer = desktopScreenshotScrollRef.current;
    const handleScroll = () => {
      const currentScrollLeft = scrollContainer.scrollLeft;
      const containerWidth = scrollContainer.clientWidth;
      const imageWidth = containerWidth * 0.8; // Approximate image width
      const newIndex = Math.round(currentScrollLeft / imageWidth);
      setCurrentDesktopImageIndex(Math.max(0, Math.min(newIndex, desktopScreenshots.length - 1)));
    };
    
    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, [projectDetails?.screenshots]);
  
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const mobileScreenshots = projectDetails?.screenshots?.filter(s => s.type === 'mobile') || [];
      const desktopScreenshots = projectDetails?.screenshots?.filter(s => s.type === 'desktop') || [];
      
      // Check if we're focused on mobile gallery
      if (screenshotScrollRef.current && mobileScreenshots.length > 0) {
        switch (e.key) {
          case 'ArrowLeft':
            e.preventDefault();
            scrollToImage(currentImageIndex - 1, mobileScreenshots);
            break;
          case 'ArrowRight':
            e.preventDefault();
            scrollToImage(currentImageIndex + 1, mobileScreenshots);
            break;
        }
      }
      
      // Check if we're focused on desktop gallery
      if (desktopScreenshotScrollRef.current && desktopScreenshots.length > 0) {
        switch (e.key) {
          case 'ArrowLeft':
            e.preventDefault();
            scrollToDesktopImage(currentDesktopImageIndex - 1);
            break;
          case 'ArrowRight':
            e.preventDefault();
            scrollToDesktopImage(currentDesktopImageIndex + 1);
            break;
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentImageIndex, currentDesktopImageIndex, projectDetails?.screenshots]);
  
  // Scroll to specific image
  const scrollToImage = (index: number, screenshots = projectDetails?.screenshots) => {
    if (!screenshotScrollRef.current || !screenshots) return;
    
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
  
  // Scroll to specific desktop image
  const scrollToDesktopImage = (index: number, screenshots = projectDetails?.screenshots?.filter(s => s.type === 'desktop')) => {
    if (!desktopScreenshotScrollRef.current || !screenshots) return;
    
    const scrollContainer = desktopScreenshotScrollRef.current;
    const containerWidth = scrollContainer.clientWidth;
    const imageWidth = containerWidth * 0.8; // Approximate image width
    const targetScroll = index * imageWidth;
    
    scrollContainer.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
    
    // Pause auto-scroll temporarily
    setIsDesktopAutoScrolling(false);
    setTimeout(() => setIsDesktopAutoScrolling(true), 3000);
  };
  
  // Rename scrollLeft function to navigateLeft
  const navigateLeft = () => {
    scrollToImage(currentImageIndex - 1);
  };
  
  const handleNavigateRight = () => {
    scrollToImage(currentImageIndex + 1);
  };
  
  // Handle mouse and touch drag for screenshots
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!screenshotScrollRef.current) return;
    
    setIsDragging(true);
    setIsAutoScrolling(false);
    setStartX(e.pageX - screenshotScrollRef.current.offsetLeft);
    setScrollLeftPosition(screenshotScrollRef.current.scrollLeft);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!screenshotScrollRef.current) return;
    
    e.preventDefault(); // Prevent default touch behaviors
    setIsDragging(true);
    setIsAutoScrolling(false);
    const touch = e.touches[0];
    setStartX(touch.pageX - screenshotScrollRef.current.offsetLeft);
    setScrollLeftPosition(screenshotScrollRef.current.scrollLeft);
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

  const handleTouchEnd = (e: React.TouchEvent) => {
    e.preventDefault(); // Prevent default touch behaviors
    setIsDragging(false);
    setTimeout(() => setIsAutoScrolling(true), 1000);
  };
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !screenshotScrollRef.current) return;
    
    e.preventDefault();
    const x = e.pageX - screenshotScrollRef.current.offsetLeft;
    const walk = (x - startX) * 3;
    screenshotScrollRef.current.scrollLeft = scrollLeftPosition - walk;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !screenshotScrollRef.current) return;
    
    e.preventDefault();
    const touch = e.touches[0];
    const x = touch.pageX - screenshotScrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Reduced multiplier for smoother touch scrolling
    screenshotScrollRef.current.scrollLeft = scrollLeftPosition - walk;
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

  // Desktop gallery handlers
  const handleDesktopMouseDown = (e: React.MouseEvent) => {
    if (!desktopScreenshotScrollRef.current) return;
    
    setIsDesktopDragging(true);
    setIsDesktopAutoScrolling(false);
    setStartX(e.pageX - desktopScreenshotScrollRef.current.offsetLeft);
    setScrollLeftPosition(desktopScreenshotScrollRef.current.scrollLeft);
  };

  const handleDesktopTouchStart = (e: React.TouchEvent) => {
    if (!desktopScreenshotScrollRef.current) return;
    
    e.preventDefault();
    setIsDesktopDragging(true);
    setIsDesktopAutoScrolling(false);
    const touch = e.touches[0];
    setStartX(touch.pageX - desktopScreenshotScrollRef.current.offsetLeft);
    setScrollLeftPosition(desktopScreenshotScrollRef.current.scrollLeft);
  };
  
  const handleDesktopMouseLeave = () => {
    setIsDesktopDragging(false);
    if (!isDesktopHovering) {
      setTimeout(() => setIsDesktopAutoScrolling(true), 1000);
    }
  };
  
  const handleDesktopMouseUp = () => {
    setIsDesktopDragging(false);
    setTimeout(() => setIsDesktopAutoScrolling(true), 1000);
  };

  const handleDesktopTouchEnd = (e: React.TouchEvent) => {
    e.preventDefault();
    setIsDesktopDragging(false);
    setTimeout(() => setIsDesktopAutoScrolling(true), 1000);
  };
  
  const handleDesktopMouseMove = (e: React.MouseEvent) => {
    if (!isDesktopDragging || !desktopScreenshotScrollRef.current) return;
    
    e.preventDefault();
    const x = e.pageX - desktopScreenshotScrollRef.current.offsetLeft;
    const walk = (x - startX) * 3;
    desktopScreenshotScrollRef.current.scrollLeft = scrollLeftPosition - walk;
  };

  const handleDesktopTouchMove = (e: React.TouchEvent) => {
    if (!isDesktopDragging || !desktopScreenshotScrollRef.current) return;
    
    e.preventDefault();
    const touch = e.touches[0];
    const x = touch.pageX - desktopScreenshotScrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    desktopScreenshotScrollRef.current.scrollLeft = scrollLeftPosition - walk;
  };
  
  const handleDesktopGalleryMouseEnter = () => {
    setIsDesktopHovering(true);
    setIsDesktopAutoScrolling(false);
  };
  
  const handleDesktopGalleryMouseLeave = () => {
    setIsDesktopHovering(false);
    setTimeout(() => setIsDesktopAutoScrolling(true), 1000);
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

  // Reset gallery index when project changes
  useEffect(() => {
    setCurrentImageIndex(0);
    setCurrentDesktopImageIndex(0);
  }, [projectId]);

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

  const mobileScreenshots = projectDetails.screenshots.filter(s => s.type === 'mobile');
  const desktopScreenshots = projectDetails.screenshots.filter(s => s.type === 'desktop');

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{projectDetails.title} - Vedansh Wandalkar Portfolio</title>
        <meta name="description" content={projectDetails.description} />
        <meta property="og:title" content={`${projectDetails.title} - Vedansh Wandalkar Portfolio`} />
        <meta property="og:description" content={projectDetails.description} />
        <meta property="og:image" content={projectDetails.screenshots?.[0]?.url || 'https://vedanshwandalkar.com/og-image.jpg'} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://vedanshwandalkar.com/projects/${projectId}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${projectDetails.title} - Vedansh Wandalkar Portfolio`} />
        <meta name="twitter:description" content={projectDetails.description} />
        <meta name="twitter:image" content={projectDetails.screenshots?.[0]?.url || 'https://vedanshwandalkar.com/og-image.jpg'} />
      </Helmet>
      {/* Hero section */}
      <section className="relative w-full h-[60vh] min-h-[500px] overflow-hidden bg-gradient-to-br from-primary/20 via-background to-background">
        {/* Animated background with gradient shifts */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: backgroundY, opacity }}
        >
          <div className="absolute inset-0 grid-lines opacity-10"></div>
          
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
              
              {projectDetails.metrics.length > 0 && projectDetails.metrics.map((metric, index) => (
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
      {shouldShowScreenshots && (mobileScreenshots.length > 0 || desktopScreenshots.length > 0) && (
        <section className="py-20 bg-card/5">
          <div className="container mx-auto px-6">
            {mobileScreenshots.length > 0 && (
              <>
                <h2 className="text-3xl md:text-5xl artistic-text font-extralight mb-12 text-gray-200">Mobile Experience Gallery</h2>
                
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
                onClick={() => scrollToImage(currentImageIndex + 1, mobileScreenshots)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 opacity-0 group-hover:opacity-100 disabled:opacity-0"
                disabled={currentImageIndex === (mobileScreenshots.length || 0) - 1}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight size={24} />
              </motion.button>
              
              {/* Scroll Container */}
              <div 
                ref={screenshotScrollRef}
                className="overflow-x-auto cursor-grab active:cursor-grabbing horizontal-scroll-container scrollbar-hide touch-pan-x"
                style={{
                  WebkitOverflowScrolling: 'touch',
                  scrollBehavior: 'smooth',
                  userSelect: 'none',
                  touchAction: 'pan-x'
                }}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleGalleryMouseEnter}
                onMouseLeave={handleGalleryMouseLeave}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                onTouchMove={handleTouchMove}
              >
                <div className="inline-flex items-stretch space-x-6 pb-2">
                  {mobileScreenshots.map((screenshot, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex-none"
                    >
                      <GalleryScreenshotFrame
                        src={screenshot.url}
                        alt={screenshot.alt}
                        caption={screenshot.caption}
                        variant={projectDetails?.id === "verizon-uccaas" ? "iphone" : "mobile"}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Scroll Indicators */}
            {mobileScreenshots.length > 1 && (
              <div className="flex justify-center mt-6 space-x-2">
                {mobileScreenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToImage(index, mobileScreenshots)}
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
          </>
            )}
          </div>
        </section>
      )}
      
      {/* Desktop Screenshots section */}
      {shouldShowScreenshots && desktopScreenshots.length > 0 && (
        <section className="py-20 bg-card/5">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-5xl artistic-text font-extralight mb-12 text-gray-200">Desktop Experience Gallery</h2>
            
            {/* Desktop Gallery Container with Controls */}
            <div className="relative group">
              {/* Navigation Buttons */}
              <motion.button
                onClick={() => scrollToDesktopImage(currentDesktopImageIndex - 1)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 opacity-0 group-hover:opacity-100 disabled:opacity-0"
                disabled={currentDesktopImageIndex === 0}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft size={24} />
              </motion.button>
              
              <motion.button
                onClick={() => scrollToDesktopImage(currentDesktopImageIndex + 1)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 opacity-0 group-hover:opacity-100 disabled:opacity-0"
                disabled={currentDesktopImageIndex === (desktopScreenshots.length || 0) - 1}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight size={24} />
              </motion.button>
              
              {/* Scroll Container */}
              <div 
                ref={desktopScreenshotScrollRef}
                className="overflow-x-auto cursor-grab active:cursor-grabbing horizontal-scroll-container scrollbar-hide touch-pan-x"
                style={{
                  WebkitOverflowScrolling: 'touch',
                  scrollBehavior: 'smooth',
                  userSelect: 'none',
                  touchAction: 'pan-x'
                }}
                onMouseDown={handleDesktopMouseDown}
                onMouseUp={handleDesktopMouseUp}
                onMouseMove={handleDesktopMouseMove}
                onMouseEnter={handleDesktopGalleryMouseEnter}
                onMouseLeave={handleDesktopGalleryMouseLeave}
                onTouchStart={handleDesktopTouchStart}
                onTouchEnd={handleDesktopTouchEnd}
                onTouchMove={handleDesktopTouchMove}
              >
                <div className="inline-flex items-stretch space-x-6 pb-2">
                  {desktopScreenshots.map((screenshot, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex-none"
                    >
                      <GalleryScreenshotFrame
                        src={screenshot.url}
                        alt={screenshot.alt}
                        caption={screenshot.caption}
                        variant="desktop"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Scroll Indicators */}
            {desktopScreenshots.length > 1 && (
              <div className="flex justify-center mt-6 space-x-2">
                {desktopScreenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToDesktopImage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentDesktopImageIndex 
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
                isDesktopAutoScrolling ? 'bg-green-400 animate-pulse' : 'bg-gray-400'
              }`} />
              <span className="text-xs text-gray-400 ml-2">
                {isDesktopAutoScrolling ? 'Auto-scrolling' : 'Paused'}
              </span>
            </div>
          </div>
        </section>
      )}
      
      {/* Problem section */}
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
              <h2 className="text-3xl md:text-5xl artistic-text font-extralight mb-8 text-gray-200">The Challenge</h2>
              <p className="text-gray-300 mb-12 max-w-3xl mx-auto">{projectDetails.problemDescription}</p>
            </motion.div>
            
            {/* Visual Problem Flow */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-16"
            >
              <ProcessFlow 
                steps={[
                  { 
                    title: "Identify Issues", 
                    description: "Analyze user pain points and system inefficiencies", 
                    icon: Search 
                  },
                  { 
                    title: "Understand Impact", 
                    description: "Measure the business and user experience impact", 
                    icon: BarChart3 
                  },
                  { 
                    title: "Define Goals", 
                    description: "Set clear objectives for improvement", 
                    icon: Target 
                  }
                ]}
                color="#ef4444"
              />
            </motion.div>
            
            {/* Pain Points with Enhanced Visuals */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projectDetails.painPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card/10 p-6 rounded-xl border border-white/10 hover:bg-card/15 hover:border-white/20 transition-all duration-300 relative overflow-hidden group"
                >
                  {/* Background gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10 flex gap-4 items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-rose-500/15 rounded-xl flex items-center justify-center text-rose-400 group-hover:scale-110 transition-transform duration-300">
                      {point.icon || <AlertTriangle size={24} />}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-200">{point.title}</h3>
                      <p className="text-gray-400">{point.description}</p>
                    </div>
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
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl artistic-text font-extralight mb-8 text-gray-200">The Solution</h2>
              <p className="text-gray-300 mb-12 max-w-3xl mx-auto">{projectDetails.solutionDescription}</p>
            </motion.div>
            
            {/* Visual Solution Process */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-16"
            >
              <ProcessFlow 
                steps={[
                  { 
                    title: "Research & Design", 
                    description: "User research, wireframes, and design system", 
                    icon: Search 
                  },
                  { 
                    title: "Development", 
                    description: "Build and implement the solution", 
                    icon: Code 
                  },
                  { 
                    title: "Testing & Launch", 
                    description: "Quality assurance and deployment", 
                    icon: Rocket 
                  }
                ]}
                color="#10b981"
              />
            </motion.div>
            
            {/* Solutions with Enhanced Visuals */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projectDetails.solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card/10 p-6 rounded-xl border border-white/10 hover:bg-card/15 hover:border-white/20 transition-all duration-300 relative overflow-hidden group"
                >
                  {/* Background gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10 flex gap-4 items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-emerald-500/15 rounded-xl flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-200">{solution.title}</h3>
                      <p className="text-gray-400">{solution.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Before/After Comparison (if metrics are available) */}
            {projectDetails.metrics && projectDetails.metrics.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-16"
              >
                <h3 className="text-2xl md:text-3xl artistic-text font-extralight mb-8 text-gray-200 text-center">Impact & Results</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projectDetails.metrics.map((metric, index) => (
                    <MetricsCard
                      key={index}
                      title={metric.label}
                      value={metric.value}
                      change="+25%"
                      icon={TrendingUp}
                      color="#10b981"
                      trend="up"
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
      
      {/* Project Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl artistic-text font-extralight mb-8 text-gray-200">Project Timeline</h2>
              <p className="text-gray-300 mb-12 max-w-3xl mx-auto">The journey from concept to completion</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Timeline 
                milestones={[
                  { 
                    date: "", 
                    title: "Discovery & Research", 
                    description: "User interviews, competitive analysis, and requirement gathering", 
                    status: "completed" 
                  },
                  { 
                    date: "", 
                    title: "Design & Prototyping", 
                    description: "Wireframes, user flows, and interactive prototypes", 
                    status: "completed" 
                  },
                  { 
                    date: "", 
                    title: "Development", 
                    description: "Frontend and backend implementation with regular testing", 
                    status: "completed" 
                  },
                  { 
                    date: "", 
                    title: "Testing & Launch", 
                    description: "Quality assurance, bug fixes, and production deployment", 
                    status: "completed" 
                  }
                ]}
                color="#3b82f6"
              />
            </motion.div>
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