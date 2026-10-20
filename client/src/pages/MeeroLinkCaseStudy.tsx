import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Users, Globe, Clock, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import ProjectBottomNav from "@/components/project/ProjectBottomNav";
import { AnimatedGrid, GalleryScreenshotFrame } from "@/components/project/ProjectDetailComponents";
import { ScreenCarousel } from "@/components/project/ScreenCarousel";

// Asset imports
import heroVideo from "@/assets/case-studies/meerolink/hero-images/meero-heo.mp4";
import ds888 from "@/assets/case-studies/meerolink/design-system/888.png";
import ds889 from "@/assets/case-studies/meerolink/design-system/889.png";
import ds890 from "@/assets/case-studies/meerolink/design-system/890.png";
import ds891 from "@/assets/case-studies/meerolink/design-system/891.png";
import ds892 from "@/assets/case-studies/meerolink/design-system/892.png";

// Design Decision imports
import appHealthCardImg from "@/assets/case-studies/meerolink/design-decisions/app-health-card.png";
import appNeedsAttImg from "@/assets/case-studies/meerolink/design-decisions/app-needs-att.png";
import dashHealthCardImg from "@/assets/case-studies/meerolink/design-decisions/dash-health-card.png";
import dashNeedsAttImg from "@/assets/case-studies/meerolink/design-decisions/dash-needs-att.png";

import app0 from "@/assets/case-studies/meerolink/app-product-screens/0.png";
import app1 from "@/assets/case-studies/meerolink/app-product-screens/1.png";
import app2 from "@/assets/case-studies/meerolink/app-product-screens/2.png";
import app3 from "@/assets/case-studies/meerolink/app-product-screens/3.png";
import app4 from "@/assets/case-studies/meerolink/app-product-screens/4.png";
import app5 from "@/assets/case-studies/meerolink/app-product-screens/5.png";
import app6 from "@/assets/case-studies/meerolink/app-product-screens/6.png";
import app7 from "@/assets/case-studies/meerolink/app-product-screens/7.png";
import app8 from "@/assets/case-studies/meerolink/app-product-screens/8.png";
import app9 from "@/assets/case-studies/meerolink/app-product-screens/9.png";
import app10 from "@/assets/case-studies/meerolink/app-product-screens/10.png";
import app11 from "@/assets/case-studies/meerolink/app-product-screens/11.png";
import app12 from "@/assets/case-studies/meerolink/app-product-screens/12.png";
import app13 from "@/assets/case-studies/meerolink/app-product-screens/13.png";
import app14 from "@/assets/case-studies/meerolink/app-product-screens/14.png";
import app15 from "@/assets/case-studies/meerolink/app-product-screens/15.png";
import app16 from "@/assets/case-studies/meerolink/app-product-screens/16.png";
import app17 from "@/assets/case-studies/meerolink/app-product-screens/17.png";
import app18 from "@/assets/case-studies/meerolink/app-product-screens/18.png";

import dash0 from "@/assets/case-studies/meerolink/dash-product-screens/0.png";
import dash1 from "@/assets/case-studies/meerolink/dash-product-screens/1.png";
import dash2 from "@/assets/case-studies/meerolink/dash-product-screens/2.png";
import dash3 from "@/assets/case-studies/meerolink/dash-product-screens/3.png";
import dash4 from "@/assets/case-studies/meerolink/dash-product-screens/4.png";
import dash5 from "@/assets/case-studies/meerolink/dash-product-screens/5.png";
import dash6 from "@/assets/case-studies/meerolink/dash-product-screens/6.png";
import dash7 from "@/assets/case-studies/meerolink/dash-product-screens/7.png";
import dash8 from "@/assets/case-studies/meerolink/dash-product-screens/8.png";
import dash9 from "@/assets/case-studies/meerolink/dash-product-screens/9.png";
import dash10 from "@/assets/case-studies/meerolink/dash-product-screens/10.png";
import dash11 from "@/assets/case-studies/meerolink/dash-product-screens/11.png";

const appScreens = [app0, app1, app2, app3, app4, app5, app6, app7, app8, app9, app10, app11, app12, app13, app14, app15, app16, app17, app18];
const dashScreens = [dash0, dash1, dash2, dash3, dash4, dash5, dash6, dash7, dash8, dash9, dash10, dash11];


export default function MeeroLinkCaseStudy() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 0.3]);
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#181719] text-[#F5F4F6] overflow-x-hidden w-full max-w-full">
      <Helmet>
        <title>MeeroLink Case Study | Vedansh Wandalkar</title>
        <meta name="description" content="Operational coordination and farm advisory platform for agronomists and field teams." />
      </Helmet>

      {/* Hero section */}
      <section className="relative w-full min-h-[450px] sm:min-h-[600px] overflow-hidden bg-[#181719] border-b border-white/10 pt-20 sm:pt-32 pb-16 sm:pb-24">
        <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY, opacity }}>
          <div className="absolute inset-0 architectural-grid opacity-50"></div>
          <AnimatedGrid mouseX={mousePosition.x} mouseY={mousePosition.y} />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8 sm:mb-12 md:mb-16">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <Button asChild variant="outline" size="sm" className="group relative overflow-hidden bg-[#1F1E21] hover:bg-blush hover:text-ink border-white/15 transition-all duration-200">
                <a href="/#projects" className="inline-flex items-center gap-2 px-4 py-2.5">
                  <ArrowLeft size={16} className="text-[#AAA7AE] group-hover:text-ink transition-colors" />
                  <span className="text-[#AAA7AE] group-hover:text-ink font-mono text-xs uppercase tracking-wider">Back</span>
                </a>
              </Button>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="font-mono text-xs text-[#AAA7AE] max-w-[280px] md:text-right">
              Select screens shown. Full flows and final UI are under NDA.
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Hero Video */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative w-full aspect-[16/9] lg:aspect-[4/3] rounded-xl overflow-hidden border border-white/15 shadow-2xl bg-[#0d0c0e] mx-auto max-w-[500px] lg:max-w-none"
            >
              <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-95">
                <source src={heroVideo} type="video/mp4" />
              </video>
            </motion.div>

            {/* Right Column: Content & Metrics */}
            <div className="lg:col-span-7 space-y-10">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-blush block mb-3">
                  [ CASE STUDY // 02 ]
                </span>
                <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl sm:text-5xl lg:text-7xl font-display font-light mb-4 text-[#F5F4F6] leading-tight tracking-tight">
                  MeeroLink
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-xl sm:text-2xl md:text-3xl text-blush mb-4 font-light tracking-tight">
                  One Platform. Two Realities.
                </motion.p>
                <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="text-[#AAA7AE] text-base sm:text-lg mb-8 font-light leading-relaxed">
                  Three user groups, two surfaces, one design system — and no shared assumptions about what technology should feel like.
                </motion.p>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-wrap gap-4 font-mono text-xs bg-[#1F1E21] p-3.5 rounded-lg border border-white/10 inline-flex">
                  <div className="flex items-center gap-2 text-[#F5F4F6]"><Users size={14} className="text-blush"/> Lead Product Designer</div>
                  <div className="w-px h-3.5 bg-white/20"></div>
                  <div className="flex items-center gap-2 text-[#F5F4F6]"><Globe size={14} className="text-blush"/> Web & Android</div>
                  <div className="w-px h-3.5 bg-white/20"></div>
                  <div className="flex items-center gap-2 text-[#F5F4F6]"><Clock size={14} className="text-blush"/> Sep '25 to Dec '25</div>
                </motion.div>
              </div>

              {/* Metrics Grid */}
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }} className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#1F1E21] p-6 sm:p-8 rounded-lg border border-white/10 shadow-lg">
                <div className="space-y-6">
                  <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-blush">Scale & Reach</h3>
                  <div className="grid grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <div className="text-2xl sm:text-3xl font-display font-medium text-[#F5F4F6] mb-1">2,400+</div>
                      <div className="text-[11px] font-mono text-[#AAA7AE] uppercase tracking-wide">Farms Tracked</div>
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-display font-medium text-[#F5F4F6] mb-1">53+</div>
                      <div className="text-[11px] font-mono text-[#AAA7AE] uppercase tracking-wide">Field Agents</div>
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-display font-medium text-[#F5F4F6] mb-1">94%</div>
                      <div className="text-[11px] font-mono text-[#AAA7AE] uppercase tracking-wide">Dashboard Adoption</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-blush">Operational Impact</h3>
                  <div className="space-y-3 font-mono text-xs">
                    <div className="flex justify-between items-center border-b border-white/10 pb-2">
                      <span className="text-[#AAA7AE]">Report to Action Time</span>
                      <span className="text-[#F5F4F6]">6 days → <span className="text-blush font-bold">1 day</span></span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/10 pb-2">
                      <span className="text-[#AAA7AE]">Advisory Delivery Rate</span>
                      <span className="text-[#F5F4F6]">64% → <span className="text-blush font-bold">98%</span></span>
                    </div>
                    <div className="flex justify-between items-center pb-2">
                      <span className="text-[#AAA7AE]">Field Data Sync Success</span>
                      <span className="text-[#F5F4F6]">73% → <span className="text-blush font-bold">99.6%</span></span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-24 bg-[#141315] border-b border-white/10">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-4xl">
            <span className="font-mono text-xs uppercase tracking-widest text-blush block mb-4">
              [ OVERVIEW // OPERATIONAL CONFLICT ]
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-light text-[#F5F4F6] leading-tight mb-8">
              MeeroLink started as an internal operations tool.
            </h2>
            <div className="space-y-6 text-base sm:text-lg md:text-xl text-[#AAA7AE] font-light leading-relaxed">
              <p>
                The brief was narrow: give agronomists somewhere to look that wasn't a shared spreadsheet. What it turned into was more interesting: a platform that had to coordinate agronomists, field agents, and farmers, three groups with very different relationships to technology and data.
              </p>
              <p>
                The project covered the operational dashboard, the farmer-facing mobile app, and the MeeTag field-tagging workflow. But the real design problem wasn't the surface count. It was that the same data had to speak to someone with a graduate degree in agronomy and someone with a Class 6 education, both confidently.
              </p>
            </div>
            
            <div className="mt-16 space-y-5">
              <div className="flex gap-4 items-baseline p-4 rounded-lg bg-[#1F1E21] border border-white/10">
                <span className="font-mono text-xs text-blush">01</span>
                <h3 className="text-lg sm:text-xl font-display font-medium text-[#F5F4F6]">How do field teams act on shared data without a shared meeting?</h3>
              </div>
              <div className="flex gap-4 items-baseline p-4 rounded-lg bg-[#1F1E21] border border-white/10">
                <span className="font-mono text-xs text-blush">02</span>
                <h3 className="text-lg sm:text-xl font-display font-medium text-[#F5F4F6]">How do farmers engage with a product that assumes trust they haven't given yet?</h3>
              </div>
              <div className="flex gap-4 items-baseline p-4 rounded-lg bg-[#1F1E21] border border-white/10">
                <span className="font-mono text-xs text-blush">03</span>
                <h3 className="text-lg sm:text-xl font-display font-medium text-[#F5F4F6]">How do you design for offline-first when connectivity is inconsistent, not absent?</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Systems Framing Bridge Line */}
      <section className="relative py-16 md:py-24 border-b border-white/10 bg-[#181719] overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <span className="font-mono text-xs uppercase tracking-widest text-blush block mb-4">[ THE DUALITY PRINCIPLE ]</span>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl text-[#F5F4F6] font-display font-light leading-relaxed italic"
          >
            One data model, two users who share almost no relationship to urgency. A farmer needs to know what to do today. A coordinator needs to know what to do about everyone's today, all at once. Everything below is what stays the same and what has to change when you move between them.
          </motion.p>
        </div>
      </section>

      {/* My Role + The Brief */}
      <section className="py-16 md:py-24 bg-[#141315] border-b border-white/10">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-[#1F1E21] p-8 md:p-10 rounded-lg border border-white/10">
              <span className="font-mono text-xs text-blush uppercase tracking-widest block mb-2">SCOPE & DELIVERABLES</span>
              <h3 className="text-2xl font-display font-medium text-[#F5F4F6] mb-4">Lead Designer</h3>
              <p className="text-[#AAA7AE] font-light leading-relaxed mb-8 text-sm sm:text-base">
                Responsible for product strategy, end-to-end UX & UI across mobile and web, design system, interaction design, and field research.
              </p>
              <div className="pt-6 border-t border-white/10 font-mono text-xs">
                <p className="font-semibold uppercase tracking-wider text-[#AAA7AE] mb-1">Platform</p>
                <p className="text-blush">Web & Android</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-6 sm:p-0">
              <span className="font-mono text-xs uppercase tracking-widest text-blush mb-4 block">[ THE BRIEF ]</span>
              <p className="text-xl sm:text-2xl md:text-3xl text-[#F5F4F6] font-display font-light leading-relaxed">
                Design intuitive, efficient experiences for both farmers and operations teams, enabling better decision-making, streamlined workflows, and improved agricultural outcomes — across two completely different surfaces.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* App Section */}
      <section className="py-16 md:py-24 bg-[#181719] border-b border-white/10 overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs uppercase tracking-widest text-blush">
                [ APP // FARMER APP & MEETAG ]
              </span>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-light text-[#F5F4F6] mb-4">The App Had to Earn Its Place</h3>
            <div className="space-y-6 text-base sm:text-lg text-[#AAA7AE] font-light leading-relaxed">
              <p>
                Low-end Android phones, patchy connectivity, multiple spoken languages, and a preference for face-to-face over software. These weren't edge cases to design around — they were the primary context.
              </p>
              <p>
                Farmers don't read manuals. They adopt things that feel legible on the first try. Every screen in the app had one job: be immediately understandable without a tutorial, then be correct.
              </p>
            </div>
          </motion.div>

          <div className="space-y-16 md:space-y-24">
            <div className="space-y-8">
              <h4 className="font-mono text-xs uppercase tracking-widest text-blush">Farmer App & MeeTag Workflow Gallery</h4>
              <div className="-mx-6 md:mx-0 space-y-12">
                <ScreenCarousel screens={appScreens.slice(0, 10).map((src, i) => ({ src, alt: `App Screen ${i + 1}` }))} />
                <ScreenCarousel screens={appScreens.slice(10, 19).map((src, i) => ({ src, alt: `App Screen ${i + 11}` }))} />
              </div>
            </div>

            {/* Design Decisions Callout Blocks */}
            <div className="space-y-16 pt-16 border-t border-white/10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#1F1E21] p-8 sm:p-10 rounded-lg border border-white/10"
              >
                <div className="lg:col-span-6 space-y-4">
                  <div className="font-mono text-xs uppercase tracking-widest text-blush">Design Decision 01</div>
                  <h4 className="text-2xl sm:text-3xl font-display font-light text-[#F5F4F6] leading-tight">Health Report Card Framing</h4>
                  <p className="text-[#AAA7AE] font-light leading-relaxed text-sm sm:text-base">
                    Weather and soil moisture sit at the top like vitals. Crop health is a traffic-light percentage bar rather than a table, and the soil test reminder reads like a checkup notice. Farmers already know how to read a health report, so the interface borrowed that literacy instead of asking for a new one.
                  </p>
                  <p className="font-mono text-xs text-blush border-l-2 border-blush pl-4 pt-1">
                    Dashboard adoption: 94% in 3 months
                  </p>
                </div>
                <div className="lg:col-span-6 flex justify-center">
                  <img 
                    src={appHealthCardImg} 
                    alt="Health Report Card Framing Screen" 
                    className="w-full rounded-md border border-white/10 shadow-xl bg-[#0d0c0e] object-contain max-h-[480px]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#1F1E21] p-8 sm:p-10 rounded-lg border border-white/10"
              >
                <div className="lg:col-span-6 space-y-4 lg:order-1">
                  <div className="font-mono text-xs uppercase tracking-widest text-blush">Design Decision 02</div>
                  <h4 className="text-2xl sm:text-3xl font-display font-light text-[#F5F4F6] leading-tight">Needs Attention, Split by Urgency Type</h4>
                  <p className="text-[#AAA7AE] font-light leading-relaxed text-sm sm:text-base">
                    Alerts, insights, and notifications are visually differentiated instead of one undifferentiated feed. Triage happens on the surface instead of asking the user to figure out what matters in the moment.
                  </p>
                  <p className="font-mono text-xs text-blush border-l-2 border-blush pl-4 pt-1">
                    Report-to-action time: 6 days to 1 day
                  </p>
                </div>
                <div className="lg:col-span-6 flex justify-center lg:order-2">
                  <img 
                    src={appNeedsAttImg} 
                    alt="Needs Attention Screen" 
                    className="w-full rounded-md border border-white/10 shadow-xl bg-[#0d0c0e] object-contain max-h-[480px]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="py-16 md:py-24 bg-[#141315] border-b border-white/10 overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs uppercase tracking-widest text-blush">
                [ DASHBOARD // OPERATIONS & FIELD TEAMS ]
              </span>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-light text-[#F5F4F6] mb-4">From Scattered to Seen</h3>
            <div className="space-y-6 text-base sm:text-lg text-[#AAA7AE] font-light leading-relaxed">
              <p>
                Before MeeroLink, an agronomist managing 200 farms operated like a dispatcher without a board: calls coming in, reports filed in different folders, no way to see everything at once. If something went wrong on a farm, they'd find out from a phone call, not a system.
              </p>
              <p>
                The dashboard didn't just centralize the data. It made the problem visible at the right resolution — national view, regional clusters, individual farm drill-down — so the team could act before the phone rang.
              </p>
            </div>
          </motion.div>

          <div className="space-y-16 md:space-y-24">
            <div className="space-y-8">
              <h4 className="font-mono text-xs uppercase tracking-widest text-blush">Operational Dashboard Gallery</h4>
              <div className="-mx-6 md:mx-0 space-y-12">
                <ScreenCarousel screens={dashScreens.map((src, i) => ({ src, alt: `Dashboard Screen ${i + 1}`, isAnnotation: true }))} />
              </div>
            </div>

            {/* Design Decisions Callout Blocks */}
            <div className="space-y-16 pt-16 border-t border-white/10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#1F1E21] p-8 sm:p-10 rounded-lg border border-white/10"
              >
                <div className="lg:col-span-6 space-y-4">
                  <div className="font-mono text-xs uppercase tracking-widest text-blush">Design Decision 01</div>
                  <h4 className="text-2xl sm:text-3xl font-display font-light text-[#F5F4F6] leading-tight">Health Card, Scaled Up</h4>
                  <p className="text-[#AAA7AE] font-light leading-relaxed text-sm sm:text-base">
                    The dashboard opens with key metrics at a glance: sensors installed, acres scanned, tickets raised, and notifications sent. This is the same card language as the app's vitals, just counting farms instead of farm health. Drill into a single farmer's profile and the metaphor becomes literal: there is an actual Farm Health Card link on the page.
                  </p>
                  <p className="font-mono text-xs text-blush border-l-2 border-blush pl-4 pt-1">
                    Dashboard adoption: 94% in 3 months
                  </p>
                </div>
                <div className="lg:col-span-6 flex justify-center">
                  <img 
                    src={dashHealthCardImg} 
                    alt="Health Card Scaled Up Screen" 
                    className="w-full rounded-md border border-white/10 shadow-xl bg-[#0d0c0e] object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#1F1E21] p-8 sm:p-10 rounded-lg border border-white/10"
              >
                <div className="lg:col-span-6 space-y-4 lg:order-1">
                  <div className="font-mono text-xs uppercase tracking-widest text-blush">Design Decision 02</div>
                  <h4 className="text-2xl sm:text-3xl font-display font-light text-[#F5F4F6] leading-tight">Needs Attention, Retriaged by Domain</h4>
                  <p className="text-[#AAA7AE] font-light leading-relaxed text-sm sm:text-base">
                    A coordinator watches soil moisture, imaging, labs, advisory, and meeTAG across thousands of farms at once. The same "surface what needs a response" instinct gets retriaged by domain instead of urgency type: Soil Moisture (5), Multispectral Imaging (2), Advisory (2), each with timestamped entries and a drill-in link.
                  </p>
                  <p className="font-mono text-xs text-blush border-l-2 border-blush pl-4 pt-1">
                    Report-to-action time: 6 days to 1 day
                  </p>
                </div>
                <div className="lg:col-span-6 flex justify-center lg:order-2">
                  <img 
                    src={dashNeedsAttImg} 
                    alt="Needs Attention Retriaged Screen" 
                    className="w-full rounded-md border border-white/10 shadow-xl bg-[#0d0c0e] object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Design System */}
      <section className="py-16 md:py-24 bg-[#181719] border-b border-white/10">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mb-12 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-blush block">
              [ SYSTEMS // DESIGN SYSTEM ]
            </span>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-light text-[#F5F4F6]">A Shared Product Language</h3>
            <div className="space-y-4 text-base sm:text-lg text-[#AAA7AE] font-light leading-relaxed">
              <p>
                The farmer app and the operational dashboard share a design language, but they don't share a grid, a density expectation, or an interaction pattern. The app runs on portrait-mode Android with large touch targets and high-contrast status colors. The dashboard runs full-width on web with dense data tables and a sidebar navigation.
              </p>
              <p>
                Building a unified token system — color, type, states — across both meant making decisions once that held up in two very different contexts. The green system wasn't a brand choice. It was the thread.
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="-mx-6 md:mx-0">
            <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar pt-4 px-4 md:px-0 scroll-pl-4 md:scroll-pl-0" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
              {[ds888, ds889, ds890, ds891, ds892].map((src, i) => (
                <div key={i} className="flex-none w-[240px] sm:w-[280px] md:w-[400px] snap-start transition-transform hover:scale-[1.01] duration-200">
                  <img src={src} alt={`Design System Component ${i + 1}`} className="w-full h-auto object-contain rounded-md border border-white/15 shadow-xl bg-[#0d0c0e]" loading="lazy" decoding="async" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reflection */}
      <section className="py-28 bg-[#181719]">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-blush block">
              [ RETROSPECTIVE ]
            </span>
            <h3 className="text-3xl sm:text-4xl font-display font-medium text-[#F5F4F6] tracking-tight mb-6">Reflection</h3>
            <p className="text-[#AAA7AE] text-base sm:text-lg font-light leading-relaxed">
              The hardest constraint on this project wasn't the technology or the field conditions. It was that the people using the farmer app and the people using the operational dashboard had almost no shared mental model. Designing for both in the same product cycle meant constant calibration — deciding which user's clarity to optimize for when both couldn't be satisfied simultaneously.
            </p>
            <p className="text-[#AAA7AE] text-base sm:text-lg font-light leading-relaxed">
              Some things I'd push further if the project continued: language switching that persists per-user session rather than per-device, a light offline mode for the dashboard (not just the app), and a better model for how agronomists hand off a farm recommendation to a field agent without picking up the phone.
            </p>
            <p className="text-[#AAA7AE] text-base sm:text-lg font-light leading-relaxed">
              One thing I got wrong early: I assumed the dashboard's primary user was making analytical decisions. They weren't. They were making operational ones — fast, reactive, and time-pressured. Once that clicked, the design stopped being about showing data and started being about surfacing what needed a response.
            </p>
            <p className="pt-6 border-t border-white/10 font-display italic text-[#F5F4F6] text-lg sm:text-xl leading-relaxed">
              Somewhere in the middle of this project the dashboard stopped being a dashboard. It became a health card. That's still the best explanation I have for why anyone used&nbsp;it.
            </p>
          </motion.div>
        </div>
      </section>

      <ProjectBottomNav currentProjectTitle="MeeroLink" />

      <Footer />
    </div>
  );
}

