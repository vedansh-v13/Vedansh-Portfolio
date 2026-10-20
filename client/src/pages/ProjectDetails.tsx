import React, { useEffect, useRef, useState } from "react";
import { useRoute } from "wouter";
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";
import { ArrowLeft, ExternalLink, AlertTriangle, Globe, Smartphone, CheckCircle, Lightbulb, Target, Search, Palette, TrendingUp, BookOpen, LucideIcon, ChevronLeft, ChevronRight, ArrowUpRight, ArrowDownRight, Activity, Clock, TrendingDown, Minus, BarChart3, Code, Rocket, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projectDetailsData } from "../data/projectDetailsData";
import { cn } from "@/lib/utils";
import Footer from "../components/Footer";
import ProjectBottomNav from "@/components/project/ProjectBottomNav";
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
    { key: 'overview', icon: Globe, title: 'Overview', content: projectDetails?.projectOverview, color: '#E7D0C8', delay: 0.1 },
    { key: 'goals', icon: Target, title: 'Goals', content: projectDetails?.projectGoals, color: '#E7D0C8', delay: 0.2 },
    { key: 'research', icon: Search, title: 'Research', content: projectDetails?.researchDiscovery, color: '#E7D0C8', delay: 0.3 },
    { key: 'ux', icon: Smartphone, title: 'UX Flow', content: projectDetails?.uxFlowWireframes, color: '#E7D0C8', delay: 0.4 },
    { key: 'ui', icon: Palette, title: 'UI Design', content: projectDetails?.uiDesignComponents, color: '#E7D0C8', delay: 0.5 },
    { key: 'results', icon: TrendingUp, title: 'Results', content: projectDetails?.outcomeResults, color: '#E7D0C8', delay: 0.6 },
    { key: 'learnings', icon: BookOpen, title: 'Key Learnings', content: projectDetails?.whatILearned, color: '#E7D0C8', delay: 0.7, fullWidth: true },
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
      <div className="min-h-screen bg-[#181719] text-[#F5F4F6] relative">
        <section className="relative w-full h-[50vh] min-h-[360px] overflow-hidden bg-[#181719] border-b border-white/10 flex flex-col justify-between">
          <div className="absolute inset-0 architectural-grid opacity-30 pointer-events-none" />
          
          <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-between py-8">
            <div>
              <Button 
                asChild 
                variant="outline" 
                size="sm" 
                className="btn-tactile bg-[#1F1E21] hover:bg-blush hover:text-ink text-[#F5F4F6] border-white/20 transition-all duration-200"
              >
                <a href="/#projects" className="inline-flex items-center gap-2 px-4 py-2">
                  <ArrowLeft size={16} />
                  <span className="font-mono text-xs uppercase tracking-wider">Back</span>
                </a>
              </Button>
            </div>
            
            <div className="pb-12 text-center max-w-2xl mx-auto">
              <span className="font-mono text-xs uppercase tracking-widest text-blush block mb-3">
                [ 404 // NOT FOUND ]
              </span>
              <h1 className="text-4xl md:text-5xl font-display font-light mb-4 text-[#F5F4F6] tracking-tight">Project Not Found</h1>
              <p className="text-[#AAA7AE] text-base md:text-lg font-light leading-relaxed">
                The project you're looking for doesn't seem to exist.
              </p>
            </div>
          </div>
        </section>
        <ProjectBottomNav />
        <Footer />
      </div>
    );
  }

  const mobileScreenshots = projectDetails.screenshots.filter(s => s.type === 'mobile');
  const desktopScreenshots = projectDetails.screenshots.filter(s => s.type === 'desktop');

  return (
    <div className="min-h-screen bg-[#181719] text-[#F5F4F6]">
      <Helmet>
        <title>{projectDetails.title} - Vedansh Wandalkar Portfolio</title>
        <meta name="description" content={projectDetails.description} />
        <meta property="og:title" content={`${projectDetails.title} - Vedansh Wandalkar Portfolio`} />
        <meta property="og:description" content={projectDetails.description} />
        <meta property="og:image" content={projectDetails.screenshots?.[0]?.url || 'https://vedanshwandalkar.com/og-image.png'} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://vedanshwandalkar.com/projects/${projectId}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${projectDetails.title} - Vedansh Wandalkar Portfolio`} />
        <meta name="twitter:description" content={projectDetails.description} />
        <meta name="twitter:image" content={projectDetails.screenshots?.[0]?.url || 'https://vedanshwandalkar.com/og-image.png'} />
      </Helmet>
      {/* Hero section */}
      <section className="relative w-full min-h-[500px] overflow-hidden bg-[#181719] border-b border-white/10 pt-8 pb-16">
        <div className="absolute inset-0 architectural-grid opacity-30 pointer-events-none" />
        
        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">
          {/* Back button */}
          <div className="mb-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Button 
                asChild 
                variant="outline" 
                size="sm" 
                className="btn-tactile bg-[#1F1E21] hover:bg-blush hover:text-ink text-[#F5F4F6] border-white/20 transition-all duration-200"
              >
                <a href="/#projects" className="inline-flex items-center gap-2 px-4 py-2">
                  <ArrowLeft size={16} />
                  <span className="font-mono text-xs uppercase tracking-wider">Back</span>
                </a>
              </Button>
            </motion.div>
          </div>
          
          <div className="max-w-4xl">            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-mono text-xs uppercase tracking-widest text-blush mb-3"
            >
              [ CASE STUDY // ARCHIVE ]
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-light mb-6 text-[#F5F4F6] tracking-tight leading-tight"
            >
              {projectDetails.title}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-[#AAA7AE] text-lg sm:text-xl mb-10 max-w-3xl font-light leading-relaxed"
            >
              {projectDetails.description}
            </motion.p>
            
            <div className="flex flex-wrap items-center gap-4">
              <div className="bg-[#1F1E21] px-5 py-3 rounded-lg border border-white/10 font-mono">
                <p className="text-[11px] uppercase tracking-wider text-[#AAA7AE]">Project Timeline</p>
                <p className="text-base sm:text-lg font-medium text-[#F5F4F6] mt-0.5">{projectDetails.date}</p>
              </div>
              
              {projectDetails.metrics.length > 0 && projectDetails.metrics.map((metric, index) => (
                <div 
                  key={index} 
                  className="bg-[#1F1E21] px-5 py-3 rounded-lg border border-white/10 font-mono"
                >
                  <p className="text-[11px] uppercase tracking-wider text-[#AAA7AE]">{metric.label}</p>
                  <p className="text-base sm:text-lg font-medium text-blush mt-0.5">{metric.value}</p>
                </div>
              ))}
              
              {/* External Link Button (if available) */}
              {projectDetails.externalLink && (
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="btn-tactile bg-blush text-ink hover:bg-white border-0 font-mono text-xs uppercase tracking-wider font-semibold"
                >
                  <a 
                    href={projectDetails.externalLink.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3"
                  >
                    {projectDetails.externalLink.type === 'web' && <Globe size={16} />}
                    {projectDetails.externalLink.type === 'app_store' && <Smartphone size={16} />}
                    {projectDetails.externalLink.type === 'play_store' && <Smartphone size={16} />}
                    {projectDetails.externalLink.type === 'github' && <ExternalLink size={16} />}
                    {projectDetails.externalLink.label}
                    <ExternalLink size={14} className="ml-1 opacity-70" />
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Video section (if available) */}
      {projectDetails.videoUrl && (
        <section className="py-20 bg-[#141315] border-b border-white/10 relative">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <span className="font-mono text-xs uppercase tracking-widest text-blush block mb-2">
                [ DEMO // WALKTHROUGH ]
              </span>
              <h2 className="text-2xl md:text-3xl font-display font-light mb-8 text-[#F5F4F6] tracking-tight">See it in action</h2>
              <div className="aspect-video w-full rounded-lg overflow-hidden border border-white/10 bg-[#1F1E21] shadow-2xl">
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
          </div>
        </section>
      )}
      
      {/* Screenshots section */}
      {shouldShowScreenshots && (mobileScreenshots.length > 0 || desktopScreenshots.length > 0) && (
        <section className="py-20 bg-[#181719] border-b border-white/10">
          <div className="container mx-auto px-6">
            {mobileScreenshots.length > 0 && (
              <>
                <div className="mb-10">
                  <span className="font-mono text-xs uppercase tracking-widest text-blush block mb-2">
                    [ INTERACTION // MOBILE ]
                  </span>
                  <h2 className="text-3xl md:text-4xl font-display font-light text-[#F5F4F6] tracking-tight">Mobile Experience Gallery</h2>
                </div>
                
                {/* Gallery Container with Controls */}
                <div className="relative group">
              {/* Navigation Buttons */}
              <motion.button
                onClick={navigateLeft}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-[#1F1E21] hover:bg-blush hover:text-ink text-[#F5F4F6] p-3 rounded-lg border border-white/20 transition-all duration-200 opacity-0 group-hover:opacity-100 disabled:opacity-0 shadow-lg"
                disabled={currentImageIndex === 0}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Previous mobile screenshot"
              >
                <ChevronLeft size={20} />
              </motion.button>
              
              <motion.button
                onClick={() => scrollToImage(currentImageIndex + 1, mobileScreenshots)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-[#1F1E21] hover:bg-blush hover:text-ink text-[#F5F4F6] p-3 rounded-lg border border-white/20 transition-all duration-200 opacity-0 group-hover:opacity-100 disabled:opacity-0 shadow-lg"
                disabled={currentImageIndex === (mobileScreenshots.length || 0) - 1}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Next mobile screenshot"
              >
                <ChevronRight size={20} />
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
                    className={`h-1.5 transition-all duration-300 rounded-full ${
                      index === currentImageIndex 
                        ? 'w-6 bg-blush' 
                        : 'w-1.5 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
            )}
            
            {/* Auto-scroll indicator */}
            <div className="flex justify-center items-center mt-4 font-mono text-[11px] text-[#AAA7AE]">
              <div className={`w-1.5 h-1.5 rounded-full mr-2 ${
                isAutoScrolling ? 'bg-blush animate-pulse' : 'bg-[#AAA7AE]/40'
              }`} />
              <span>
                {isAutoScrolling ? '[ AUTO-SCROLL ACTIVE ]' : '[ PAUSED ]'}
              </span>
            </div>
          </>
            )}
          </div>
        </section>
      )}
      
      {/* Desktop Screenshots section */}
      {shouldShowScreenshots && desktopScreenshots.length > 0 && (
        <section className="py-20 bg-[#181719] border-b border-white/10">
          <div className="container mx-auto px-6">
            <div className="mb-10">
              <span className="font-mono text-xs uppercase tracking-widest text-blush block mb-2">
                [ INTERACTION // DESKTOP ]
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-light text-[#F5F4F6] tracking-tight">Desktop Experience Gallery</h2>
            </div>
            
            {/* Desktop Gallery Container with Controls */}
            <div className="relative group">
              {/* Navigation Buttons */}
              <motion.button
                onClick={() => scrollToDesktopImage(currentDesktopImageIndex - 1)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-[#1F1E21] hover:bg-blush hover:text-ink text-[#F5F4F6] p-3 rounded-lg border border-white/20 transition-all duration-200 opacity-0 group-hover:opacity-100 disabled:opacity-0 shadow-lg"
                disabled={currentDesktopImageIndex === 0}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Previous desktop screenshot"
              >
                <ChevronLeft size={20} />
              </motion.button>
              
              <motion.button
                onClick={() => scrollToDesktopImage(currentDesktopImageIndex + 1)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-[#1F1E21] hover:bg-blush hover:text-ink text-[#F5F4F6] p-3 rounded-lg border border-white/20 transition-all duration-200 opacity-0 group-hover:opacity-100 disabled:opacity-0 shadow-lg"
                disabled={currentDesktopImageIndex === (desktopScreenshots.length || 0) - 1}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Next desktop screenshot"
              >
                <ChevronRight size={20} />
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
                    className={`h-1.5 transition-all duration-300 rounded-full ${
                      index === currentDesktopImageIndex 
                        ? 'w-6 bg-blush' 
                        : 'w-1.5 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
            )}
            
            {/* Auto-scroll indicator */}
            <div className="flex justify-center items-center mt-4 font-mono text-[11px] text-[#AAA7AE]">
              <div className={`w-1.5 h-1.5 rounded-full mr-2 ${
                isDesktopAutoScrolling ? 'bg-blush animate-pulse' : 'bg-[#AAA7AE]/40'
              }`} />
              <span>
                {isDesktopAutoScrolling ? '[ AUTO-SCROLL ACTIVE ]' : '[ PAUSED ]'}
              </span>
            </div>
          </div>
        </section>
      )}
      
      {/* Problem section */}
      <section className="py-24 bg-[#141315] border-b border-white/10">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-blush block mb-3">
                [ 01 // THE CHALLENGE ]
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-light mb-6 text-[#F5F4F6] tracking-tight">The Challenge</h2>
              <p className="text-[#AAA7AE] text-base md:text-lg font-light leading-relaxed mb-12 max-w-3xl mx-auto">{projectDetails.problemDescription}</p>
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
                color="#E7D0C8"
              />
            </motion.div>
            
            {/* Pain Points with Enhanced Visuals */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projectDetails.painPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#1F1E21] p-6 sm:p-7 rounded-lg border border-white/10 hover:border-blush/40 card-tactile transition-all duration-300 relative group"
                >
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-blush">
                      {point.icon || <AlertTriangle size={20} />}
                    </div>
                    <div>
                      <h3 className="text-lg font-display font-medium mb-2 text-[#F5F4F6] tracking-tight">{point.title}</h3>
                      <p className="text-sm text-[#AAA7AE] font-light leading-relaxed">{point.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Solution section */}
      <section className="py-24 bg-[#181719] border-b border-white/10">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-blush block mb-3">
                [ 02 // THE SOLUTION ]
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-light mb-6 text-[#F5F4F6] tracking-tight">The Solution</h2>
              <p className="text-[#AAA7AE] text-base md:text-lg font-light leading-relaxed mb-12 max-w-3xl mx-auto">{projectDetails.solutionDescription}</p>
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
                color="#E7D0C8"
              />
            </motion.div>
            
            {/* Solutions with Enhanced Visuals */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projectDetails.solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#1F1E21] p-6 sm:p-7 rounded-lg border border-white/10 hover:border-blush/40 card-tactile transition-all duration-300 relative group"
                >
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-blush">
                      <CheckCircle size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-display font-medium mb-2 text-[#F5F4F6] tracking-tight">{solution.title}</h3>
                      <p className="text-sm text-[#AAA7AE] font-light leading-relaxed">{solution.description}</p>
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
                className="mt-20"
              >
                <div className="text-center mb-8">
                  <span className="font-mono text-xs uppercase tracking-widest text-blush block mb-2">[ OUTCOMES // METRICS ]</span>
                  <h3 className="text-2xl md:text-3xl font-display font-light text-[#F5F4F6] tracking-tight">Impact & Results</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projectDetails.metrics.map((metric, index) => (
                    <MetricsCard
                      key={index}
                      title={metric.label}
                      value={metric.value}
                      change="+25%"
                      icon={TrendingUp}
                      color="#E7D0C8"
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
      <section className="py-24 bg-[#141315] border-b border-white/10">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-blush block mb-3">
                [ 03 // EXECUTION ]
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-light mb-4 text-[#F5F4F6] tracking-tight">Project Timeline</h2>
              <p className="text-[#AAA7AE] text-base md:text-lg font-light leading-relaxed mb-12 max-w-2xl mx-auto">The journey from concept to completion</p>
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
                color="#E7D0C8"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Enhanced Storytelling sections */}
      {storyCards.length > 0 && (
        <section className="py-24 bg-[#181719] border-b border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 architectural-grid opacity-30 pointer-events-none" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-center mb-16"
              >
                <span className="font-mono text-xs uppercase tracking-widest text-blush block mb-3">
                  [ 04 // REFLECTIONS ]
                </span>
                <motion.h2 
                  className="text-3xl md:text-5xl font-display font-light mb-4 text-[#F5F4F6] tracking-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Project Journey
                </motion.h2>
                <motion.p 
                  className="text-[#AAA7AE] text-base md:text-lg font-light leading-relaxed"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Key insights and learnings from this project
                </motion.p>
                
                {/* Clean architectural hairline rule */}
                <div className="w-16 h-px bg-blush mx-auto mt-6" />
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
              
              {/* Monospace terminal mark */}
              <div className="flex justify-center mt-16 font-mono text-xs text-[#AAA7AE]/60 uppercase tracking-widest">
                + [ END OF LOG // VEDANSH.WANDALKAR ] +
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Testimonial section - hidden for Agent Ari project */}
      {shouldShowTestimonial && projectDetails.testimonial && (
        <section className="py-24 bg-[#141315] border-b border-white/10">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto bg-[#1F1E21] p-8 md:p-14 rounded-lg border border-white/10 relative"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-blush block mb-6 text-center">
                [ TESTIMONIAL // ENDORSEMENT ]
              </span>
              <div className="flex flex-col items-center text-center">
                <Quote className="w-10 h-10 text-blush/60 mb-6" />
                
                <blockquote className="text-xl md:text-2xl font-light text-[#F5F4F6] leading-relaxed mb-8 italic">
                  "{projectDetails.testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center flex-col">
                  <cite className="font-display font-medium text-base text-[#F5F4F6] not-italic tracking-wide">
                    {projectDetails.testimonial.author}
                  </cite>
                  <span className="text-[#AAA7AE] font-mono text-xs uppercase tracking-wider mt-1">
                    {projectDetails.testimonial.position}, {projectDetails.testimonial.company}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}
      
      <ProjectBottomNav currentProjectTitle={projectDetails.title} />

      <Footer />
    </div>
  );
}