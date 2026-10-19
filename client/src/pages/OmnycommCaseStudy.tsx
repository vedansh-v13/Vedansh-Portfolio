import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Mail, ExternalLink, Target, Search, Smartphone, Palette, TrendingUp, BookOpen, Globe, Users, BarChart3, Zap, Shield, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";
import ProjectBottomNav from "@/components/project/ProjectBottomNav";

import { 
  FloatingParticle, 
  AnimatedGrid, 
  StoryCard 
} from "@/components/project/ProjectDetailComponents";

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
    <div className="min-h-screen bg-[#181719] text-[#F5F4F6]">
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
      <section className="relative w-full min-h-[500px] overflow-hidden bg-[#181719] border-b border-white/10 pt-20 sm:pt-28 pb-16 sm:pb-24">
        {/* Animated background with grid */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: backgroundY, opacity }}
        >
          <div className="absolute inset-0 architectural-grid opacity-50"></div>
          <AnimatedGrid mouseX={mousePosition.x} mouseY={mousePosition.y} />
          
          {/* Floating particles */}
          {Array.from({ length: 12 }).map((_, i) => (
            <FloatingParticle
              key={i}
              delay={i * 0.5}
              duration={15 + Math.random() * 10}
              size={2 + Math.random() * 3}
              color="rgba(231, 208, 200, 0.12)"
            />
          ))}
        </motion.div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-between">
          {/* Back button */}
          <div className="pt-2 md:pt-4 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Button 
                asChild 
                variant="outline" 
                size="sm" 
                className="group relative overflow-hidden bg-[#1F1E21] hover:bg-blush hover:text-ink border-white/15 transition-all duration-200"
              >
                <a href="/#projects" className="inline-flex items-center gap-2 px-4 py-2.5">
                  <ArrowLeft size={16} className="text-[#AAA7AE] group-hover:text-ink transition-colors" />
                  <span className="text-[#AAA7AE] group-hover:text-ink font-mono text-xs uppercase tracking-wider">
                    Back
                  </span>
                </a>
              </Button>
            </motion.div>
          </div>
          
          <div className="pb-8 text-center max-w-4xl mx-auto">
            <span className="font-mono text-xs uppercase tracking-widest text-blush block mb-3">
              [ CASE STUDY // 04 ]
            </span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-display font-light mb-6 text-[#F5F4F6] leading-tight tracking-tight"
            >
              Omnycomm
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl text-blush mb-8 font-light max-w-3xl mx-auto tracking-tight"
            >
              Designing the First Ecommerce Dashboard Experience
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-3 font-mono text-xs"
            >
              <span className="bg-[#1F1E21] px-3.5 py-1.5 rounded border border-white/10 text-[#AAA7AE]">UI/UX Design</span>
              <span className="bg-[#1F1E21] px-3.5 py-1.5 rounded border border-white/10 text-[#AAA7AE]">Dashboard Design</span>
              <span className="bg-[#1F1E21] px-3.5 py-1.5 rounded border border-white/10 text-[#AAA7AE]">Ecommerce</span>
              <span className="bg-[#1F1E21] px-3.5 py-1.5 rounded border border-white/10 text-[#AAA7AE]">Figma</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project details section */}
      <section className="py-16 md:py-20 bg-[#141315] border-b border-white/10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-[#1F1E21] p-6 rounded-lg border border-white/10 card-tactile">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="w-4 h-4 text-blush" />
                  <h4 className="text-sm font-mono uppercase tracking-wider text-blush">Role</h4>
                </div>
                <p className="text-[#F5F4F6] text-sm font-medium">Product Designer (end-to-end)</p>
              </div>
              <div className="bg-[#1F1E21] p-6 rounded-lg border border-white/10 card-tactile">
                <div className="flex items-center gap-3 mb-3">
                  <Palette className="w-4 h-4 text-blush" />
                  <h4 className="text-sm font-mono uppercase tracking-wider text-blush">Tools</h4>
                </div>
                <p className="text-[#F5F4F6] text-sm font-medium">Figma, Notion</p>
              </div>
              <div className="bg-[#1F1E21] p-6 rounded-lg border border-white/10 card-tactile">
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="w-4 h-4 text-blush" />
                  <h4 className="text-sm font-mono uppercase tracking-wider text-blush">Platform</h4>
                </div>
                <p className="text-[#F5F4F6] text-sm font-medium">Web dashboard</p>
              </div>
              <div className="bg-[#1F1E21] p-6 rounded-lg border border-white/10 card-tactile">
                <div className="flex items-center gap-3 mb-3">
                  <BarChart3 className="w-4 h-4 text-blush" />
                  <h4 className="text-sm font-mono uppercase tracking-wider text-blush">Users</h4>
                </div>
                <p className="text-[#F5F4F6] text-sm font-medium">Ecommerce marketers & founders</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Storytelling section */}
      <section className="py-20 md:py-24 bg-[#181719] border-b border-white/10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <span className="font-mono text-xs uppercase tracking-widest text-blush block mb-3">
                [ NARRATIVE & PROCESS ]
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-light mb-4 text-[#F5F4F6] tracking-tight">
                The Journey
              </h2>
              <p className="text-base sm:text-lg text-[#AAA7AE] font-light leading-relaxed">
                From research to implementation, here's how I designed the first ecommerce dashboard experience for Omnycomm
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      <section className="py-20 md:py-24 bg-[#141315] border-b border-white/10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-16">
              <span className="font-mono text-xs uppercase tracking-widest text-blush block mb-3">
                [ ARCHITECTURAL PILLARS ]
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-light mb-4 text-[#F5F4F6] tracking-tight">
                Key Features
              </h2>
              <p className="text-base sm:text-lg text-[#AAA7AE] font-light">
                I designed the dashboard with these core principles in mind
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#1F1E21] p-8 rounded-lg border border-white/10 card-tactile">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-blush">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-display font-medium text-[#F5F4F6]">Quick Decision Making</h3>
                </div>
                <p className="text-[#AAA7AE] text-sm sm:text-base font-light leading-relaxed">
                  Clean, focused layout that prioritizes the most important metrics for rapid insights and decision-making.
                </p>
              </div>

              <div className="bg-[#1F1E21] p-8 rounded-lg border border-white/10 card-tactile">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-blush">
                    <Shield className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-display font-medium text-[#F5F4F6]">Scalable Architecture</h3>
                </div>
                <p className="text-[#AAA7AE] text-sm sm:text-base font-light leading-relaxed">
                  Modular system designed to extend across Omnycomm's other dashboards with consistent patterns.
                </p>
              </div>

              <div className="bg-[#1F1E21] p-8 rounded-lg border border-white/10 card-tactile">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-blush">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-display font-medium text-[#F5F4F6]">Persistent Filters</h3>
                </div>
                <p className="text-[#AAA7AE] text-sm sm:text-base font-light leading-relaxed">
                  Filters and controls that stay visible and accessible, not buried in menus or dropdowns.
                </p>
              </div>

              <div className="bg-[#1F1E21] p-8 rounded-lg border border-white/10 card-tactile">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-blush">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-display font-medium text-[#F5F4F6]">High-Level Summary</h3>
                </div>
                <p className="text-[#AAA7AE] text-sm sm:text-base font-light leading-relaxed">
                  Overview sections that tell 80% of the story at a glance, with drill-down capabilities for details.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Demo CTA section */}
      <section className="py-24 bg-[#181719]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-blush block mb-3">
              [ INQUIRY // DEMO ]
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-light mb-4 text-[#F5F4F6]">
              Get in Touch for Product Demo
            </h2>
            <p className="text-base sm:text-lg text-[#AAA7AE] mb-8 font-light leading-relaxed">
              Interested in seeing the Omnycomm dashboard in action? I'd be happy to walk you through my design process and show you how it works.
            </p>
            <a
              href="mailto:vedanshwandalkar@gmail.com"
              className="btn-tactile inline-flex items-center gap-2 bg-blush text-ink font-medium text-sm px-8 py-3.5 rounded-md hover:bg-[#edd8d1] transition-all shadow-md"
            >
              <Mail size={18} />
              <span>Request Demo</span>
            </a>
          </motion.div>
        </div>
      </section>

      <ProjectBottomNav currentProjectTitle="Omnycomm" />

      <Footer />
    </div>
  );
} 