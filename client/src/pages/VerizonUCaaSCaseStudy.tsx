import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Users, Globe, Clock, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
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
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Verizon UCaaS Case Study | Vedansh Wandalkar</title>
        <meta name="description" content="Redesigning unified enterprise communications across desktop and mobile platforms." />
      </Helmet>

      {/* Hero section */}
      <section className="relative w-full min-h-[450px] sm:min-h-[600px] overflow-hidden bg-gradient-to-br from-[#cc0000]/10 via-background to-background pt-20 sm:pt-32 pb-16 sm:pb-24">
        <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY, opacity }}>
          <div className="absolute inset-0 grid-lines opacity-10"></div>
          <AnimatedGrid mouseX={mousePosition.x} mouseY={mousePosition.y} />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-16">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <Button asChild variant="outline" size="sm" className="group relative overflow-hidden bg-black/50 hover:bg-black/70 border-white/20 hover:border-white/40 backdrop-blur-sm transition-all duration-300">
                <a href="/#projects" className="inline-flex items-center gap-2 px-4 py-2.5">
                  <ArrowLeft size={18} className="text-gray-300 group-hover:text-white transition-colors" />
                  <span className="text-gray-300 group-hover:text-white font-medium">Back</span>
                </a>
              </Button>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-xs text-gray-500 max-w-[250px] md:text-right italic">
              Select screens shown. Full flows and final UI are under NDA.
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Hero Image/Video */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-black/20 mx-auto max-w-[500px] lg:max-w-none flex items-center justify-center"
            >
              <video src={heroVideo} autoPlay loop muted playsInline className="w-full h-full object-cover" />
            </motion.div>

            {/* Right Column: Content & Metrics */}
            <div className="lg:col-span-7 space-y-12">
              <div>
                <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-5xl lg:text-7xl artistic-text font-extralight mb-4 text-white leading-tight">
                  Verizon UCaaS
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-xl md:text-2xl text-gray-300 mb-4 artistic-text font-light">
                  Designing Inside a Machine That's Already Running
                </motion.p>
                <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="text-gray-400 text-lg mb-8">
                  Three modules. Four platforms. One design organisation that had already formed opinions about all of it.
                </motion.p>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-wrap gap-4 text-sm bg-white/5 p-4 rounded-xl border border-white/10 inline-flex">
                  <div className="flex items-center gap-2 text-gray-300"><Users size={16} className="text-[#e5313a]"/> Product Designer</div>
                  <div className="w-px h-4 bg-white/20"></div>
                  <div className="flex items-center gap-2 text-gray-300"><Globe size={16} className="text-[#e5313a]"/> Web, iOS & Android</div>
                  <div className="w-px h-4 bg-white/20"></div>
                  <div className="flex items-center gap-2 text-gray-300"><Clock size={16} className="text-[#e5313a]"/> Jun '22 to Feb '23</div>
                </motion.div>
              </div>

              {/* Metrics Grid */}
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }} className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-black/20 p-8 rounded-2xl border border-white/5">
                <div className="space-y-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Scale & Scope</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-3xl font-light text-white mb-1">10+</div>
                      <div className="text-xs text-gray-400 uppercase tracking-wide">Designers</div>
                    </div>
                    <div>
                      <div className="text-3xl font-light text-white mb-1">8</div>
                      <div className="text-xs text-gray-400 uppercase tracking-wide">Months</div>
                    </div>
                    <div className="col-span-2">
                      <div className="text-3xl font-light text-white mb-1">6</div>
                      <div className="text-xs text-gray-400 uppercase tracking-wide">Products Benchmarked</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Research Base</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-white/10 pb-2">
                      <span className="text-sm text-gray-300">Janet</span>
                      <span className="text-sm font-medium text-white">Interior <span className="text-[#e5313a]">Design</span></span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/10 pb-2">
                      <span className="text-sm text-gray-300">Dave</span>
                      <span className="text-sm font-medium text-white">General <span className="text-[#e5313a]">Practitioner</span></span>
                    </div>
                    <div className="flex justify-between items-center pb-2">
                      <span className="text-sm text-gray-300">Rachel</span>
                      <span className="text-sm font-medium text-white">Recruitment <span className="text-[#e5313a]">Manager</span></span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-card/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-light text-white leading-tight mb-12">
              Verizon UCaaS was a live product. Joining mid-cycle meant inheriting existing architecture and scaling it without disruption.
            </h2>
            <div className="space-y-6 text-xl text-gray-400 leading-relaxed">
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
            
            <div className="mt-20 space-y-6">
              <div className="flex gap-6 items-baseline group">
                <span className="text-2xl font-light text-[#e5313a]/50 group-hover:text-[#e5313a] transition-colors">01</span>
                <h3 className="text-2xl md:text-3xl font-light text-gray-300 group-hover:text-white transition-colors">What does it mean to own a module you don't control end to end?</h3>
              </div>
              <div className="flex gap-6 items-baseline group">
                <span className="text-2xl font-light text-[#e5313a]/50 group-hover:text-[#e5313a] transition-colors">02</span>
                <h3 className="text-2xl md:text-3xl font-light text-gray-300 group-hover:text-white transition-colors">How do 10+ designers across two countries, alongside a product writer, maintain a single product voice over 8 months?</h3>
              </div>
              <div className="flex gap-6 items-baseline group">
                <span className="text-2xl font-light text-[#e5313a]/50 group-hover:text-[#e5313a] transition-colors">03</span>
                <h3 className="text-2xl md:text-3xl font-light text-gray-300 group-hover:text-white transition-colors">What does "done" look like when the org around you keeps shipping?</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="py-8 bg-card/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <img src={ucaasBanner} alt="Verizon UCaaS Overview" className="w-full rounded-2xl border border-white/10 shadow-2xl" />
          </motion.div>
        </div>
      </section>

      {/* Systems Framing Bridge Line */}
      <section className="relative py-24 border-y border-white/5 bg-black/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#cc0000]/10 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <span className="block text-[120px] font-serif text-[#e5313a]/10 leading-none h-16 absolute -top-10 left-1/2 -translate-x-1/2">"</span>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-3xl md:text-4xl text-gray-200 font-light leading-relaxed italic mt-12"
          >
            Messaging sits in the middle of a communications platform. If it's inconsistent, every other module feels inconsistent. If it's slow, the product feels slow. You're not designing a chat window. You're designing the baseline expectation the rest of the product gets held against.
          </motion.p>
        </div>
      </section>

      {/* My Role + The Brief */}
      <section className="py-24 bg-card/5 border-b border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10">
              <h3 className="text-2xl text-white font-bold mb-6">Product Designer</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                Responsible for leading Messaging design across all platforms, contributing interaction patterns across Calling and Contacts modules, and building design system components used across the product.
              </p>
              <div className="pt-8 border-t border-white/10">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">Platform</p>
                    <p className="text-gray-300">Web, iOS & Android</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">Team</p>
                    <p className="text-gray-300">India + US</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative overflow-hidden sm:overflow-visible rounded-3xl p-6 sm:p-0">
              <Quote className="absolute -top-4 sm:-top-10 -left-4 sm:-left-10 w-16 sm:w-24 h-16 sm:h-24 text-[#e5313a]/10" />
              <h3 className="text-sm font-semibold uppercase tracking-widest text-[#e5313a] mb-6">The Brief</h3>
              <p className="text-2xl md:text-3xl text-gray-200 font-light leading-relaxed">
                Redesign enterprise communication experiences across three core product modules. Synthesise 60+ hours of user research into interaction improvements that hold across desktop, tablet, iOS, and Android. Contribute to a shared design system that keeps the platform coherent as it grows.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Messaging Section */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mb-16">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm font-bold bg-[#e5313a]/20 text-[#e5313a] py-1 px-3 rounded-full">Messaging</span>
              <h2 className="text-sm uppercase tracking-widest text-gray-400 font-semibold">The Surface in the Middle</h2>
            </div>
            <div className="space-y-6 text-xl text-gray-400 leading-relaxed">
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

          <div className="space-y-24">
            <div className="space-y-12">
              <h4 className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-4">Web Experience</h4>
              <div className="-mx-6 md:mx-0 space-y-12">
                <ScreenCarousel screens={webScreens} />
              </div>
            </div>

            <div className="space-y-12">
              <h4 className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-4">Mobile Experience</h4>
              <div className="-mx-6 md:mx-0 space-y-12">
                <ScreenCarousel screens={mobileScreens} />
              </div>
            </div>

            {/* Design Decisions Callout Blocks */}
            <div className="space-y-24 pt-16 border-t border-white/5 overflow-hidden">
              <div className="text-center mb-16">
                <h3 className="text-3xl font-bold text-white">What the Work Actually Looked Like</h3>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative"
              >
                <div className="absolute -left-6 -top-10 text-[120px] font-bold text-[#e5313a]/5 pointer-events-none select-none z-0">01</div>
                <div className="lg:col-span-6 space-y-6 relative z-10">
                  <h4 className="text-2xl md:text-3xl font-light text-white leading-tight">Bundling Permissions Up Front</h4>
                  <p className="text-gray-400 leading-relaxed text-base">
                    Onboarding required microphone, camera, and notification access. While competitors typically asked for these in-context, we tested whether bundling them reduced friction.
                  </p>
                  <p className="text-gray-400 leading-relaxed text-base">
                    The data was clear: contextual requests interrupted active workflows. Users wanted to get permissions out of the way immediately.
                  </p>
                  <p className="text-white text-sm font-semibold border-l-2 border-[#e5313a] pl-4 italic">
                    16 participants • 75% preferred bundled permissions.
                  </p>
                </div>
                <div className="lg:col-span-6 flex justify-center bg-transparent relative z-10">
                  <img src={decision1} alt="FTUX Permissions Decision" className="w-full h-auto rounded-2xl border border-white/10 shadow-2xl" />
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-16 border-t border-white/5 relative"
              >
                <div className="absolute -left-6 top-6 text-[120px] font-bold text-[#e5313a]/5 pointer-events-none select-none z-0">02</div>
                <div className="lg:col-span-6 space-y-6 lg:order-2 relative z-10">
                  <h4 className="text-2xl md:text-3xl font-light text-white leading-tight">Anchoring the Compose Action</h4>
                  <p className="text-gray-400 leading-relaxed text-base">
                    The compose action's placement failed initial visibility tests, with only 8 of 25 users finding it on their first click.
                  </p>
                  <p className="text-gray-400 leading-relaxed text-base">
                    However, 68% of participants strongly preferred a prominent, anchored entry point over contextual alternatives. We prioritized this stated preference over the raw first-click metric.
                  </p>
                  <p className="text-white text-sm font-semibold border-l-2 border-[#e5313a] pl-4 italic">
                    25 participants • 68% preferred a prominent entry point.
                  </p>
                </div>
                <div className="lg:col-span-6 flex justify-center bg-transparent lg:order-1 relative z-10">
                  <img src={decision2} alt="Compose Button Decision" className="w-full h-auto rounded-2xl border border-white/10 shadow-2xl" />
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-16 border-t border-white/5 relative"
              >
                <div className="absolute -left-6 top-6 text-[120px] font-bold text-[#e5313a]/5 pointer-events-none select-none z-0">03</div>
                <div className="lg:col-span-6 space-y-6 relative z-10">
                  <h4 className="text-2xl md:text-3xl font-light text-white leading-tight">Multitasking During Meetings</h4>
                  <p className="text-gray-400 leading-relaxed text-base">
                    Users constantly reference external documents during meetings. We tested three prototypes to see how controls should behave when focus shifted from the main window.
                  </p>
                  <p className="text-gray-400 leading-relaxed text-base">
                    The result: users prioritized multitasking over feature density. 73% preferred a persistent, stripped-down multi-window mode retaining only essential controls.
                  </p>
                  <p className="text-white text-sm font-semibold border-l-2 border-[#e5313a] pl-4 italic">
                    11 participants • 73% preferred essential multi-window controls.
                  </p>
                </div>
                <div className="lg:col-span-6 flex justify-center bg-transparent relative z-10">
                  <img src={decision3} alt="Multi-Window Controls Decision" className="w-full h-auto rounded-2xl border border-white/10 shadow-2xl" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Platform Contributions */}
      <section className="py-24 bg-card/5 border-y border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl space-y-6">
            <h3 className="text-4xl md:text-5xl artistic-text text-white mb-6">Working Across the Whole</h3>
            <div className="space-y-6 text-xl text-gray-400 leading-relaxed">
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
      <section className="py-32">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-8 text-lg text-gray-300 leading-relaxed">
            <h3 className="text-3xl font-bold text-white mb-8">Reflection</h3>
            <p>
              The research foundation was rock solid. With 60+ interviews across eight personas, the challenge shifted from discovery to translation. We had to convert raw findings into production-ready interactions across four platforms without breaking existing paradigms.
            </p>
            <p>
              Distributed work is a calibration problem. The US and India teams operated with different rhythms and stakeholder proximity. Maintaining consistency between Messaging and Calling demanded rigorous asynchronous coordination. Knowing when to escalate to a synchronous call became a crucial skill.
            </p>
            <p>
              In hindsight, I would have forced a single source of truth for component states earlier. Late in the project, subtle divergence appeared between iOS and Android. A shared cross-surface spec from day one would have prevented this.
            </p>
            <p className="pt-4 border-t border-white/10 italic text-gray-200">
              I arrived knowing how to design software. I left knowing how to ship within a system.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
