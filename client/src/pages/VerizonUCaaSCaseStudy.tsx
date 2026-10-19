import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Users, Globe, Clock, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import ProjectBottomNav from "@/components/project/ProjectBottomNav";
import { AnimatedGrid, GalleryScreenshotFrame } from "@/components/project/ProjectDetailComponents";
import { ScreenCarousel } from "@/components/project/ScreenCarousel";

// Web Screens
import web0 from "@/assets/case-studies/verizon/web/1_! DM with info panel with pin.png";
import web1 from "@/assets/case-studies/verizon/web/Calls - call log onhover.png";
import web2 from "@/assets/case-studies/verizon/web/Compose_4_1_5_Create channel instead - new channel popover with participants populated.png";
import web3 from "@/assets/case-studies/verizon/web/Recent - conversation selected - 1_1 DM.png";
import web4 from "@/assets/case-studies/verizon/web/Send attachments_3.png";

// Decisions & Banner
import decision1 from "@/assets/case-studies/verizon/decisions/1.png";
import decision2 from "@/assets/case-studies/verizon/decisions/2.png";
import decision3 from "@/assets/case-studies/verizon/decisions/3.png";
import ucaasBanner from "@/assets/case-studies/verizon/ucaas.banner.png";

// Mobile Screens
import heroVideo from "@/assets/case-studies/verizon/hero/hero.mp4";
import mobile0 from "@/assets/case-studies/verizon/mobile/Channel.png";
import mobile1 from "@/assets/case-studies/verizon/mobile/Hunt Group conversation.png";
import mobile2 from "@/assets/case-studies/verizon/mobile/Messages_go to the new message.png";
import mobile3 from "@/assets/case-studies/verizon/mobile/Team messaging - Pinned.png";
import mobile4 from "@/assets/case-studies/verizon/mobile/Multiple emojis.png";



const webScreens = [
  { src: web0, alt: "Web Screen 1", isAnnotation: true },
  { src: web1, alt: "Web Screen 2", isAnnotation: true },
  { src: web2, alt: "Web Screen 3", isAnnotation: true },
  { src: web3, alt: "Web Screen 4", isAnnotation: true },
  { src: web4, alt: "Web Screen 5", isAnnotation: true }
];

const mobileScreens = [
  { src: mobile0, alt: "Mobile Screen 1" },
  { src: mobile1, alt: "Mobile Screen 2" },
  { src: mobile2, alt: "Mobile Screen 3" },
  { src: mobile3, alt: "Mobile Screen 4" },
  { src: mobile4, alt: "Mobile Screen 5" }
];

export default function VerizonUCaaSCaseStudy() {
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
    <div className="min-h-screen bg-[#181719] text-[#F5F4F6]">
      <Helmet>
        <title>Verizon UCaaS Case Study | Vedansh Wandalkar</title>
        <meta name="description" content="Redesigning unified enterprise communications across desktop and mobile platforms." />
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
            {/* Left Column: Hero Image/Video */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/15 shadow-2xl bg-[#0d0c0e] mx-auto max-w-[500px] lg:max-w-none flex items-center justify-center"
            >
              <video src={heroVideo} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-95" />
            </motion.div>

            {/* Right Column: Content & Metrics */}
            <div className="lg:col-span-7 space-y-10">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-blush block mb-3">
                  [ CASE STUDY // 03 ]
                </span>
                <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl sm:text-5xl lg:text-7xl font-display font-light mb-4 text-[#F5F4F6] leading-tight tracking-tight">
                  Verizon UCaaS
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-xl sm:text-2xl md:text-3xl text-blush mb-4 font-light tracking-tight">
                  Designing Inside a Machine That's Already Running
                </motion.p>
                <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="text-[#AAA7AE] text-base sm:text-lg mb-8 font-light leading-relaxed">
                  Three modules. Four platforms. One design organisation that had already formed opinions about all of it.
                </motion.p>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-wrap gap-4 font-mono text-xs bg-[#1F1E21] p-3.5 rounded-lg border border-white/10 inline-flex">
                  <div className="flex items-center gap-2 text-[#F5F4F6]"><Users size={14} className="text-blush"/> Product Designer</div>
                  <div className="w-px h-3.5 bg-white/20"></div>
                  <div className="flex items-center gap-2 text-[#F5F4F6]"><Globe size={14} className="text-blush"/> Web, iOS & Android</div>
                  <div className="w-px h-3.5 bg-white/20"></div>
                  <div className="flex items-center gap-2 text-[#F5F4F6]"><Clock size={14} className="text-blush"/> Jun '22 to Feb '23</div>
                </motion.div>
              </div>

              {/* Metrics Grid */}
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }} className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#1F1E21] p-6 sm:p-8 rounded-lg border border-white/10 shadow-lg">
                <div className="space-y-6">
                  <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-blush">Scale & Scope</h3>
                  <div className="grid grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <div className="text-2xl sm:text-3xl font-display font-medium text-[#F5F4F6] mb-1">10+</div>
                      <div className="text-[11px] font-mono text-[#AAA7AE] uppercase tracking-wide">Designers</div>
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-display font-medium text-[#F5F4F6] mb-1">8</div>
                      <div className="text-[11px] font-mono text-[#AAA7AE] uppercase tracking-wide">Months</div>
                    </div>
                    <div className="col-span-2">
                      <div className="text-2xl sm:text-3xl font-display font-medium text-[#F5F4F6] mb-1">6</div>
                      <div className="text-[11px] font-mono text-[#AAA7AE] uppercase tracking-wide">Products Benchmarked</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-blush">Research Base</h3>
                  <div className="space-y-3 font-mono text-xs">
                    <div className="flex justify-between items-center border-b border-white/10 pb-2">
                      <span className="text-[#AAA7AE]">Janet</span>
                      <span className="text-[#F5F4F6]">Interior <span className="text-blush font-medium">Design</span></span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/10 pb-2">
                      <span className="text-[#AAA7AE]">Dave</span>
                      <span className="text-[#F5F4F6]">General <span className="text-blush font-medium">Practitioner</span></span>
                    </div>
                    <div className="flex justify-between items-center pb-2">
                      <span className="text-[#AAA7AE]">Rachel</span>
                      <span className="text-[#F5F4F6]">Recruitment <span className="text-blush font-medium">Manager</span></span>
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
              [ OVERVIEW // INTEGRATION COMPLEXITY ]
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-light text-[#F5F4F6] leading-tight mb-8">
              Verizon UCaaS was a live product. Joining mid-cycle meant inheriting existing architecture and scaling it without disruption.
            </h2>
            <div className="space-y-6 text-base sm:text-lg md:text-xl text-[#AAA7AE] font-light leading-relaxed">
              <p>
                As remote work drove UC&C revenue past $47.2B, BlueJeans UCaaS had to integrate seamlessly into an already active environment.
              </p>
              <p>
                We solved for distinct SMB personas. Janet, an interior designer with 5+ projects, struggled with fragmented communication. Dave, a general practitioner, juggled Email, Skype, and Slack. Rachel, a recruiter, needed strict internal privacy alongside external professionalism.
              </p>
              <p>
                I led Messaging while building reusable components and aligning interaction patterns across the platform. Every design choice rippled outward.
              </p>
            </div>
            
            <div className="mt-16 space-y-5">
              <div className="flex gap-4 items-baseline p-4 rounded-lg bg-[#1F1E21] border border-white/10">
                <span className="font-mono text-xs text-blush">01</span>
                <h3 className="text-lg sm:text-xl font-display font-medium text-[#F5F4F6]">What does it mean to own a module you don't control end to end?</h3>
              </div>
              <div className="flex gap-4 items-baseline p-4 rounded-lg bg-[#1F1E21] border border-white/10">
                <span className="font-mono text-xs text-blush">02</span>
                <h3 className="text-lg sm:text-xl font-display font-medium text-[#F5F4F6]">How do 10+ designers across two countries, alongside a product writer, maintain a single product voice over 8 months?</h3>
              </div>
              <div className="flex gap-4 items-baseline p-4 rounded-lg bg-[#1F1E21] border border-white/10">
                <span className="font-mono text-xs text-blush">03</span>
                <h3 className="text-lg sm:text-xl font-display font-medium text-[#F5F4F6]">What does "done" look like when the org around you keeps shipping?</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="py-12 bg-[#181719] border-b border-white/10">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <img src={ucaasBanner} alt="Verizon UCaaS Overview" className="w-full rounded-lg border border-white/15 shadow-2xl bg-[#0d0c0e]" />
          </motion.div>
        </div>
      </section>

      {/* Systems Framing Bridge Line */}
      <section className="relative py-16 md:py-24 border-b border-white/10 bg-[#141315] overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <span className="font-mono text-xs uppercase tracking-widest text-blush block mb-4">[ THE BASELINE PRINCIPLE ]</span>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl text-[#F5F4F6] font-display font-light leading-relaxed italic"
          >
            Messaging sits in the middle of a communications platform. If it's inconsistent, every other module feels inconsistent. If it's slow, the product feels slow. You're not designing a chat window. You're designing the baseline expectation the rest of the product gets held against.
          </motion.p>
        </div>
      </section>

      {/* My Role + The Brief */}
      <section className="py-16 md:py-24 bg-[#181719] border-b border-white/10">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-[#1F1E21] p-8 md:p-10 rounded-lg border border-white/10">
              <span className="font-mono text-xs text-blush uppercase tracking-widest block mb-2">SCOPE & DELIVERABLES</span>
              <h3 className="text-2xl font-display font-medium text-[#F5F4F6] mb-4">Product Designer</h3>
              <p className="text-[#AAA7AE] font-light leading-relaxed mb-8 text-sm sm:text-base">
                Responsible for leading Messaging design across all platforms, contributing interaction patterns across Calling and Contacts modules, and building design system components used across the product.
              </p>
              <div className="pt-6 border-t border-white/10 font-mono text-xs">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold uppercase tracking-wider text-[#AAA7AE] mb-1">Platform</p>
                    <p className="text-blush">Web, iOS & Android</p>
                  </div>
                  <div>
                    <p className="font-semibold uppercase tracking-wider text-[#AAA7AE] mb-1">Team</p>
                    <p className="text-blush">India + US</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-6 sm:p-0">
              <span className="font-mono text-xs uppercase tracking-widest text-blush mb-4 block">[ THE BRIEF ]</span>
              <p className="text-xl sm:text-2xl md:text-3xl text-[#F5F4F6] font-display font-light leading-relaxed">
                Redesign enterprise communication experiences across three core product modules. Synthesise 60+ hours of user research into interaction improvements that hold across desktop, tablet, iOS, and Android. Contribute to a shared design system that keeps the platform coherent as it grows.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Messaging Section */}
      <section className="py-16 md:py-24 bg-[#181719] border-b border-white/10 overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs uppercase tracking-widest text-blush">
                [ MESSAGING // SYSTEM SPINE ]
              </span>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-light text-[#F5F4F6] mb-4">The Surface in the Middle</h3>
            <div className="space-y-6 text-base sm:text-lg text-[#AAA7AE] font-light leading-relaxed">
              <p>
                Messaging feels like a solved problem: until it doesn't match the rest of the app. Thread models, presence states, and cross-platform notification behaviors are neither trivial nor isolated.
              </p>
              <p>
                The redesign spanned conversation lists, typing indicators, inline media, and active-call notifications. The constraints were tight. The web app competes with other browser tabs, while the mobile experience competes with native OS messengers.
              </p>
              <p>
                This required close collaboration. Surfacing a message mid-conversation is simultaneously a Messaging decision and a Calling decision.
              </p>
            </div>
          </motion.div>

          <div className="space-y-16 md:space-y-24">
            <div className="space-y-8">
              <h4 className="font-mono text-xs uppercase tracking-widest text-blush">Web Experience</h4>
              <div className="-mx-6 md:mx-0 space-y-12">
                <ScreenCarousel screens={webScreens} />
              </div>
            </div>

            <div className="space-y-8">
              <h4 className="font-mono text-xs uppercase tracking-widest text-blush">Mobile Experience</h4>
              <div className="-mx-6 md:mx-0 space-y-12">
                <ScreenCarousel screens={mobileScreens} />
              </div>
            </div>

            {/* Design Decisions Callout Blocks */}
            <div className="space-y-16 pt-16 border-t border-white/10">
              <div className="text-center mb-12">
                <span className="font-mono text-xs text-blush uppercase tracking-widest block mb-2">[ RESEARCH TRANSLATION ]</span>
                <h3 className="text-2xl sm:text-3xl font-display font-medium text-[#F5F4F6]">What the Work Actually Looked Like</h3>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#1F1E21] p-8 sm:p-10 rounded-lg border border-white/10"
              >
                <div className="lg:col-span-6 space-y-4">
                  <div className="font-mono text-xs uppercase tracking-widest text-blush">Decision 01</div>
                  <h4 className="text-2xl sm:text-3xl font-display font-light text-[#F5F4F6] leading-tight">Bundling Permissions Up Front</h4>
                  <p className="text-[#AAA7AE] font-light leading-relaxed text-sm sm:text-base">
                    Onboarding required microphone, camera, and notification access. While competitors typically asked for these in-context, we tested whether bundling them reduced friction.
                  </p>
                  <p className="text-[#AAA7AE] font-light leading-relaxed text-sm sm:text-base">
                    The data was clear: contextual requests interrupted active workflows. Users wanted to get permissions out of the way immediately.
                  </p>
                  <p className="font-mono text-xs text-blush border-l-2 border-blush pl-4 pt-1">
                    16 participants • 75% preferred bundled permissions.
                  </p>
                </div>
                <div className="lg:col-span-6 flex justify-center">
                  <img src={decision1} alt="FTUX Permissions Decision" className="w-full h-auto rounded-md border border-white/10 shadow-xl bg-[#0d0c0e]" />
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#1F1E21] p-8 sm:p-10 rounded-lg border border-white/10"
              >
                <div className="lg:col-span-6 space-y-4 lg:order-2">
                  <div className="font-mono text-xs uppercase tracking-widest text-blush">Decision 02</div>
                  <h4 className="text-2xl sm:text-3xl font-display font-light text-[#F5F4F6] leading-tight">Anchoring the Compose Action</h4>
                  <p className="text-[#AAA7AE] font-light leading-relaxed text-sm sm:text-base">
                    The compose action's placement failed initial visibility tests, with only 8 of 25 users finding it on their first click.
                  </p>
                  <p className="text-[#AAA7AE] font-light leading-relaxed text-sm sm:text-base">
                    However, 68% of participants strongly preferred a prominent, anchored entry point over contextual alternatives. We prioritized this stated preference over the raw first-click metric.
                  </p>
                  <p className="font-mono text-xs text-blush border-l-2 border-blush pl-4 pt-1">
                    25 participants • 68% preferred a prominent entry point.
                  </p>
                </div>
                <div className="lg:col-span-6 flex justify-center lg:order-1">
                  <img src={decision2} alt="Compose Button Decision" className="w-full h-auto rounded-md border border-white/10 shadow-xl bg-[#0d0c0e]" />
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#1F1E21] p-8 sm:p-10 rounded-lg border border-white/10"
              >
                <div className="lg:col-span-6 space-y-4">
                  <div className="font-mono text-xs uppercase tracking-widest text-blush">Decision 03</div>
                  <h4 className="text-2xl sm:text-3xl font-display font-light text-[#F5F4F6] leading-tight">Multitasking During Meetings</h4>
                  <p className="text-[#AAA7AE] font-light leading-relaxed text-sm sm:text-base">
                    Users constantly reference external documents during meetings. We tested three prototypes to see how controls should behave when focus shifted from the main window.
                  </p>
                  <p className="text-[#AAA7AE] font-light leading-relaxed text-sm sm:text-base">
                    The result: users prioritized multitasking over feature density. 73% preferred a persistent, stripped-down multi-window mode retaining only essential controls.
                  </p>
                  <p className="font-mono text-xs text-blush border-l-2 border-blush pl-4 pt-1">
                    11 participants • 73% preferred essential multi-window controls.
                  </p>
                </div>
                <div className="lg:col-span-6 flex justify-center">
                  <img src={decision3} alt="Multi-Window Controls Decision" className="w-full h-auto rounded-md border border-white/10 shadow-xl bg-[#0d0c0e]" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Platform Contributions */}
      <section className="py-16 md:py-24 bg-[#141315] border-b border-white/10">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-blush block">
              [ SYSTEMS // ECOSYSTEM ALIGNMENT ]
            </span>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-light text-[#F5F4F6] mb-4">Working Across the Whole</h3>
            <div className="space-y-6 text-base sm:text-lg text-[#AAA7AE] font-light leading-relaxed">
              <p>
                You don't stay in your lane on a platform. Calling patterns dictated how threads surfaced. Contacts required in-message card models. A shared navigation bound it all together.
              </p>
              <p>
                Cross-platform contribution is unglamorous coordination work. It means enforcing consistency and building system components. The output isn't a flashy feature. It's the absence of friction.
              </p>
              <p>
                The design system expanded to 30+ components. More importantly, it meant decisions about responsive behavior and accessibility were solved once, ready for any designer to pull off the shelf.
              </p>
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
              The research foundation was rock solid. With 60+ interviews across eight personas, the challenge shifted from discovery to translation. We had to convert raw findings into production-ready interactions across four platforms without breaking existing paradigms.
            </p>
            <p className="text-[#AAA7AE] text-base sm:text-lg font-light leading-relaxed">
              Distributed work is a calibration problem. The US and India teams operated with different rhythms and stakeholder proximity. Maintaining consistency between Messaging and Calling demanded rigorous asynchronous coordination. Knowing when to escalate to a synchronous call became a crucial skill.
            </p>
            <p className="text-[#AAA7AE] text-base sm:text-lg font-light leading-relaxed">
              In hindsight, I would have forced a single source of truth for component states earlier. Late in the project, subtle divergence appeared between iOS and Android. A shared cross-surface spec from day one would have prevented this.
            </p>
            <p className="pt-6 border-t border-white/10 font-display italic text-[#F5F4F6] text-lg sm:text-xl leading-relaxed">
              I arrived knowing how to design software. I left knowing how to ship within a system.
            </p>
          </motion.div>
        </div>
      </section>

      <ProjectBottomNav currentProjectTitle="Verizon UCaaS" />

      <Footer />
    </div>
  );
}
