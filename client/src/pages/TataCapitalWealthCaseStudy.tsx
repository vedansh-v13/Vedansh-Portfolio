import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Users, Globe, Clock, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import ProjectBottomNav from "@/components/project/ProjectBottomNav";
import { AnimatedGrid } from "@/components/project/ProjectDetailComponents";
import { ScreenCarousel } from "@/components/project/ScreenCarousel";
import { AnimatedExperienceMap } from "@/components/project/AnimatedExperienceMap";

// Asset imports
import sceneVideo from "@/assets/case-studies/tata-capital/Scene.mp4";
import overviewImg from "@/assets/case-studies/tata-capital/overview.png";
import designSystemImg from "@/assets/case-studies/tata-capital/design-system.png";

// Gallery imports
import g0 from "@/assets/case-studies/tata-capital/Final UI Gallery images/0.png";
import g1 from "@/assets/case-studies/tata-capital/Final UI Gallery images/1.png";
import g2 from "@/assets/case-studies/tata-capital/Final UI Gallery images/2.png";
import g3 from "@/assets/case-studies/tata-capital/Final UI Gallery images/3.png";
import g4 from "@/assets/case-studies/tata-capital/Final UI Gallery images/4.png";
import g5 from "@/assets/case-studies/tata-capital/Final UI Gallery images/5.png";
import g6 from "@/assets/case-studies/tata-capital/Final UI Gallery images/6.png";
import g7 from "@/assets/case-studies/tata-capital/Final UI Gallery images/7.png";
import g8 from "@/assets/case-studies/tata-capital/Final UI Gallery images/8.png";
import g9 from "@/assets/case-studies/tata-capital/Final UI Gallery images/9.png";
import g10 from "@/assets/case-studies/tata-capital/Final UI Gallery images/10.png";
import g11 from "@/assets/case-studies/tata-capital/Final UI Gallery images/11.png";
import g12 from "@/assets/case-studies/tata-capital/Final UI Gallery images/12.png";
import g13 from "@/assets/case-studies/tata-capital/Final UI Gallery images/13.png";
import g14 from "@/assets/case-studies/tata-capital/Final UI Gallery images/14.png";
import g15 from "@/assets/case-studies/tata-capital/Final UI Gallery images/15.png";
import g16 from "@/assets/case-studies/tata-capital/Final UI Gallery images/16.png";
import g17 from "@/assets/case-studies/tata-capital/Final UI Gallery images/17.png";
import g18 from "@/assets/case-studies/tata-capital/Final UI Gallery images/18.png";
import g19 from "@/assets/case-studies/tata-capital/Final UI Gallery images/19.png";
import g20 from "@/assets/case-studies/tata-capital/Final UI Gallery images/20.png";
import g21 from "@/assets/case-studies/tata-capital/Final UI Gallery images/21.png";
import g22 from "@/assets/case-studies/tata-capital/Final UI Gallery images/22.png";
import g23 from "@/assets/case-studies/tata-capital/Final UI Gallery images/23.png";
import g24 from "@/assets/case-studies/tata-capital/Final UI Gallery images/24.png";

const galleryImages = [
  g0,
  g1,
  g2,
  g3,
  g4,
  g5,
  g6,
  g7,
  g8,
  g9,
  g10,
  g11,
  g12,
  g13,
  g14,
  g15,
  g16,
  g17,
  g18,
  g19,
  g20,
  g21,
  g22,
  g23,
  g24,
];



// Split Screen Imports
import selfServeOnboardingScreens_0 from "@/assets/case-studies/tata-capital/split-screens/Self-Serve Onboarding/1.png";
import selfServeOnboardingScreens_1 from "@/assets/case-studies/tata-capital/split-screens/Self-Serve Onboarding/2.png";
import selfServeOnboardingScreens_2 from "@/assets/case-studies/tata-capital/split-screens/Self-Serve Onboarding/3.png";
import selfServeOnboardingScreens_3 from "@/assets/case-studies/tata-capital/split-screens/Self-Serve Onboarding/4.png";
import selfServeOnboardingScreens_4 from "@/assets/case-studies/tata-capital/split-screens/Self-Serve Onboarding/5.png";
import selfServeOnboardingScreens_5 from "@/assets/case-studies/tata-capital/split-screens/Self-Serve Onboarding/6.png";
import selfServeOnboardingScreens_6 from "@/assets/case-studies/tata-capital/split-screens/Self-Serve Onboarding/7.png";
import selfServeOnboardingScreens_7 from "@/assets/case-studies/tata-capital/split-screens/Self-Serve Onboarding/8.png";
import selfServeOnboardingScreens_8 from "@/assets/case-studies/tata-capital/split-screens/Self-Serve Onboarding/9.png";
import selfServeOnboardingScreens_9 from "@/assets/case-studies/tata-capital/split-screens/Self-Serve Onboarding/10.png";
import selfServeOnboardingScreens_10 from "@/assets/case-studies/tata-capital/split-screens/Self-Serve Onboarding/11.png";
import selfServeOnboardingScreens_11 from "@/assets/case-studies/tata-capital/split-screens/Self-Serve Onboarding/12.png";
import selfServeOnboardingScreens_12 from "@/assets/case-studies/tata-capital/split-screens/Self-Serve Onboarding/13.png";
import rmAssistedOnboardingScreens_0 from "@/assets/case-studies/tata-capital/split-screens/RM-Assisted Onboarding/1.png";
import rmAssistedOnboardingScreens_1 from "@/assets/case-studies/tata-capital/split-screens/RM-Assisted Onboarding/2.png";
import rmAssistedOnboardingScreens_2 from "@/assets/case-studies/tata-capital/split-screens/RM-Assisted Onboarding/3.png";
import rmAssistedOnboardingScreens_3 from "@/assets/case-studies/tata-capital/split-screens/RM-Assisted Onboarding/4.png";
import rmAssistedOnboardingScreens_4 from "@/assets/case-studies/tata-capital/split-screens/RM-Assisted Onboarding/5.png";
import rmAssistedOnboardingScreens_5 from "@/assets/case-studies/tata-capital/split-screens/RM-Assisted Onboarding/6.png";
import portfolioOverviewScreens_0 from "@/assets/case-studies/tata-capital/split-screens/Portfolio Overview/1.png";
import portfolioOverviewScreens_1 from "@/assets/case-studies/tata-capital/split-screens/Portfolio Overview/2.png";
import portfolioOverviewScreens_2 from "@/assets/case-studies/tata-capital/split-screens/Portfolio Overview/3.png";
import portfolioOverviewScreens_3 from "@/assets/case-studies/tata-capital/split-screens/Portfolio Overview/4.png";
import portfolioOverviewScreens_4 from "@/assets/case-studies/tata-capital/split-screens/Portfolio Overview/5.png";
import fundDiscoveryScreens_0 from "@/assets/case-studies/tata-capital/split-screens/Fund Discovery & Details/1.png";
import fundDiscoveryScreens_1 from "@/assets/case-studies/tata-capital/split-screens/Fund Discovery & Details/2.png";
import fundDiscoveryScreens_2 from "@/assets/case-studies/tata-capital/split-screens/Fund Discovery & Details/3.png";
import fundDiscoveryScreens_3 from "@/assets/case-studies/tata-capital/split-screens/Fund Discovery & Details/4.png";
import fundDiscoveryScreens_4 from "@/assets/case-studies/tata-capital/split-screens/Fund Discovery & Details/5.png";
import fundDiscoveryScreens_5 from "@/assets/case-studies/tata-capital/split-screens/Fund Discovery & Details/6.png";
import fundDiscoveryScreens_6 from "@/assets/case-studies/tata-capital/split-screens/Fund Discovery & Details/7.png";
import fundDiscoveryScreens_7 from "@/assets/case-studies/tata-capital/split-screens/Fund Discovery & Details/8.png";
import transactionScreens_0 from "@/assets/case-studies/tata-capital/split-screens/Transaction & Lifecycle Management/1.png";
import transactionScreens_1 from "@/assets/case-studies/tata-capital/split-screens/Transaction & Lifecycle Management/2.png";
import transactionScreens_2 from "@/assets/case-studies/tata-capital/split-screens/Transaction & Lifecycle Management/3.png";
import transactionScreens_3 from "@/assets/case-studies/tata-capital/split-screens/Transaction & Lifecycle Management/4.png";
import transactionScreens_4 from "@/assets/case-studies/tata-capital/split-screens/Transaction & Lifecycle Management/5.png";
import transactionScreens_5 from "@/assets/case-studies/tata-capital/split-screens/Transaction & Lifecycle Management/6.png";
import transactionScreens_6 from "@/assets/case-studies/tata-capital/split-screens/Transaction & Lifecycle Management/7.png";
import transactionScreens_7 from "@/assets/case-studies/tata-capital/split-screens/Transaction & Lifecycle Management/8.png";
import transactionScreens_8 from "@/assets/case-studies/tata-capital/split-screens/Transaction & Lifecycle Management/9.png";
import rmUpdatesScreens_0 from "@/assets/case-studies/tata-capital/split-screens/RM Updates & Ongoing Management/1.png";
import rmUpdatesScreens_1 from "@/assets/case-studies/tata-capital/split-screens/RM Updates & Ongoing Management/2.png";
import rmUpdatesScreens_2 from "@/assets/case-studies/tata-capital/split-screens/RM Updates & Ongoing Management/3.png";

const selfServeOnboardingScreens = [
  { src: selfServeOnboardingScreens_0, alt: "Self-Serve Onboarding Screen 1",  },
  { src: selfServeOnboardingScreens_1, alt: "Self-Serve Onboarding Screen 2",  },
  { src: selfServeOnboardingScreens_2, alt: "Self-Serve Onboarding Screen 3",  },
  { src: selfServeOnboardingScreens_3, alt: "Self-Serve Onboarding Screen 4",  },
  { src: selfServeOnboardingScreens_4, alt: "Self-Serve Onboarding Screen 5",  },
  { src: selfServeOnboardingScreens_5, alt: "Self-Serve Onboarding Screen 6", caption: "A clear step-by-step journey keeps users oriented from start to finish.",  },
  { src: selfServeOnboardingScreens_6, alt: "Self-Serve Onboarding Screen 7",  },
  { src: selfServeOnboardingScreens_7, alt: "Self-Serve Onboarding Screen 8", caption: "Related information is grouped together to make KYC feel less overwhelming.",  },
  { src: selfServeOnboardingScreens_8, alt: "Self-Serve Onboarding Screen 9",  },
  { src: selfServeOnboardingScreens_9, alt: "Self-Serve Onboarding Screen 10", caption: "Users can go back and review their details without starting over.",  },
  { src: selfServeOnboardingScreens_10, alt: "Self-Serve Onboarding Screen 11",  },
  { src: selfServeOnboardingScreens_11, alt: "Self-Serve Onboarding Screen 12",  },
  { src: selfServeOnboardingScreens_12, alt: "Self-Serve Onboarding Screen 13", caption: "Returning users pick up exactly where they left off.",  }
];

const rmAssistedOnboardingScreens = [
  { src: rmAssistedOnboardingScreens_0, alt: "RM-Assisted Onboarding Screen 1", caption: "Relationship Managers handle the paperwork before investors begin.",  },
  { src: rmAssistedOnboardingScreens_1, alt: "RM-Assisted Onboarding Screen 2", caption: "Investors verify their details instead of entering everything again.",  },
  { src: rmAssistedOnboardingScreens_2, alt: "RM-Assisted Onboarding Screen 3",  },
  { src: rmAssistedOnboardingScreens_3, alt: "RM-Assisted Onboarding Screen 4",  },
  { src: rmAssistedOnboardingScreens_4, alt: "RM-Assisted Onboarding Screen 5", caption: "Only identity verification, consent, and signatures require investor action.",  },
  { src: rmAssistedOnboardingScreens_5, alt: "RM-Assisted Onboarding Screen 6",  }
];

const portfolioOverviewScreens = [
  { src: portfolioOverviewScreens_0, alt: "Portfolio Overview Screen 1", caption: "The dashboard highlights what needs attention before anything else.",  },
  { src: portfolioOverviewScreens_1, alt: "Portfolio Overview Screen 2", caption: "Your portfolio stays front and center, with research tools always within reach.",  },
  { src: portfolioOverviewScreens_2, alt: "Portfolio Overview Screen 3", caption: "For first-time investors, the experience shifts from portfolio management to guided fund discovery.",  },
  { src: portfolioOverviewScreens_3, alt: "Portfolio Overview Screen 4", caption: "Performance is explained with context, not just numbers.",  },
  { src: portfolioOverviewScreens_4, alt: "Portfolio Overview Screen 5", caption: "As portfolios grow, insights replace long fund lists to make decisions easier.",  }
];

const fundDiscoveryScreens = [
  { src: fundDiscoveryScreens_0, alt: "Fund Discovery & Details Screen 1", caption: "Funds are easy to scan, making comparison effortless before diving deeper.",  },
  { src: fundDiscoveryScreens_1, alt: "Fund Discovery & Details Screen 2", caption: "Smart filters narrow hundreds of funds into a manageable shortlist.",  },
  { src: fundDiscoveryScreens_2, alt: "Fund Discovery & Details Screen 3", caption: "Everything investors need lives on one page, with details revealed as they explore.",  },
  { src: fundDiscoveryScreens_3, alt: "Fund Discovery & Details Screen 4", caption: "Side-by-side comparisons make trade-offs easier to understand.",  },
  { src: fundDiscoveryScreens_4, alt: "Fund Discovery & Details Screen 5",  },
  { src: fundDiscoveryScreens_5, alt: "Fund Discovery & Details Screen 6",  },
  { src: fundDiscoveryScreens_6, alt: "Fund Discovery & Details Screen 7",  },
  { src: fundDiscoveryScreens_7, alt: "Fund Discovery & Details Screen 8",  }
];

const transactionScreens = [
  { src: transactionScreens_0, alt: "Transaction & Lifecycle Management Screen 1", caption: "Investing is just the beginning. The experience is built for long-term portfolio management.",  },
  { src: transactionScreens_1, alt: "Transaction & Lifecycle Management Screen 2", caption: "Every screen adapts to the investor's current stage, from first SIP to active portfolio.",  },
  { src: transactionScreens_2, alt: "Transaction & Lifecycle Management Screen 3", caption: "Every order state is clear, so investors always know what's happening.",  },
  { src: transactionScreens_3, alt: "Transaction & Lifecycle Management Screen 4",  },
  { src: transactionScreens_4, alt: "Transaction & Lifecycle Management Screen 5",  },
  { src: transactionScreens_5, alt: "Transaction & Lifecycle Management Screen 6", caption: "Failed transactions lead to support instead of a dead end.",  },
  { src: transactionScreens_6, alt: "Transaction & Lifecycle Management Screen 7",  },
  { src: transactionScreens_7, alt: "Transaction & Lifecycle Management Screen 8", caption: "Everything needed to manage investments lives in one place.",  },
  { src: transactionScreens_8, alt: "Transaction & Lifecycle Management Screen 9", caption: "SIPs can be edited, skipped, stepped up, or cancelled without friction.",  }
];

const rmUpdatesScreens = [
  { src: rmUpdatesScreens_0, alt: "RM Updates & Ongoing Management Screen 1",  },
  { src: rmUpdatesScreens_1, alt: "RM Updates & Ongoing Management Screen 2",  },
  { src: rmUpdatesScreens_2, alt: "RM Updates & Ongoing Management Screen 3",  }
];



export default function TataCapitalWealthCaseStudy() {
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
        <title>Tata Capital Wealth Case Study | Vedansh Wandalkar</title>
        <meta name="description" content="Reimagining a wealth platform for high-net-worth investors." />
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
            {/* Left Column: Video */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative w-full aspect-[9/16] max-h-[70vh] rounded-xl overflow-hidden border border-white/15 shadow-2xl bg-[#0d0c0e] mx-auto max-w-[400px] lg:max-w-none"
            >
              <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-95">
                <source src={sceneVideo} type="video/mp4" />
              </video>
            </motion.div>

            {/* Right Column: Content & Metrics */}
            <div className="lg:col-span-7 space-y-10">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-blush block mb-3">
                  [ CASE STUDY // 01 ]
                </span>
                <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl sm:text-5xl lg:text-6xl font-display font-light mb-4 text-[#F5F4F6] leading-tight tracking-tight">
                  Tata Capital Wealth
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-xl sm:text-2xl md:text-3xl text-blush mb-4 font-light tracking-tight">
                  Designing Confidence Across the Investment Journey
                </motion.p>
                <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="text-[#AAA7AE] text-base sm:text-lg mb-8 font-light leading-relaxed">
                  Reimagining a wealth platform for high-net-worth investors.
                </motion.p>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-wrap gap-4 font-mono text-xs bg-[#1F1E21] p-3.5 rounded-lg border border-white/10 inline-flex">
                  <div className="flex items-center gap-2 text-[#F5F4F6]"><Users size={14} className="text-blush"/> Lead UX Designer</div>
                  <div className="w-px h-3.5 bg-white/20"></div>
                  <div className="flex items-center gap-2 text-[#F5F4F6]"><Globe size={14} className="text-blush"/> iOS & Android</div>
                  <div className="w-px h-3.5 bg-white/20"></div>
                  <div className="flex items-center gap-2 text-[#F5F4F6]"><Clock size={14} className="text-blush"/> Jan '26 to Apr '26</div>
                </motion.div>
              </div>

              {/* Metrics Grid */}
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }} className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#1F1E21] p-6 sm:p-8 rounded-lg border border-white/10 shadow-lg">
                <div className="space-y-6">
                  <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-blush">Product Metrics</h3>
                  <div className="grid grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <div className="text-2xl sm:text-3xl font-display font-medium text-[#F5F4F6] mb-1">5M+</div>
                      <div className="text-[11px] font-mono text-[#AAA7AE] uppercase tracking-wide">Downloads</div>
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-display font-medium text-[#F5F4F6] mb-1">600K+</div>
                      <div className="text-[11px] font-mono text-[#AAA7AE] uppercase tracking-wide">Registered Users</div>
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-display font-medium text-[#F5F4F6] mb-1">4.1★</div>
                      <div className="text-[11px] font-mono text-[#AAA7AE] uppercase tracking-wide">Play Store Rating</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-blush">UX Redesign Impact</h3>
                  <div className="space-y-3 font-mono text-xs">
                    <div className="flex justify-between items-center border-b border-white/10 pb-2">
                      <span className="text-[#AAA7AE]">Task Success</span>
                      <span className="text-[#F5F4F6]">81% → <span className="text-blush font-bold">95%</span></span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/10 pb-2">
                      <span className="text-[#AAA7AE]">Create SIP</span>
                      <span className="text-[#F5F4F6]">4.5 min → <span className="text-blush font-bold">2.5 min</span></span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/10 pb-2">
                      <span className="text-[#AAA7AE]">Find Fund</span>
                      <span className="text-[#F5F4F6]">95 sec → <span className="text-blush font-bold">45 sec</span></span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#AAA7AE]">Form Abandonment</span>
                      <span className="text-[#F5F4F6]">42% → <span className="text-blush font-bold">22%</span></span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-[#141315] border-b border-white/10">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-24 max-w-4xl">
            <span className="font-mono text-xs uppercase tracking-widest text-blush block mb-4">
              [ OVERVIEW // CONTEXT ]
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-light text-[#F5F4F6] leading-tight mb-8">
              Tata Capital Wealth already had a comprehensive platform.
            </h2>
            <div className="space-y-6 text-base sm:text-lg md:text-xl text-[#AAA7AE] font-light leading-relaxed">
              <p>
                The product had grown feature by feature over several years, each addition making sense in isolation. The whole was harder to navigate than any individual screen suggested. Users could complete tasks, but they had to work harder to figure out where to start.
              </p>
              <p>
                This project covered the full journey: onboarding, portfolio, fund discovery, investment flows, and ongoing transaction management. A design system runs underneath all of it, keeping the platform coherent as it grows.
              </p>
            </div>
            
            <div className="mt-16 space-y-5">
              <div className="flex gap-4 items-baseline p-4 rounded-lg bg-[#1F1E21] border border-white/10">
                <span className="font-mono text-xs text-blush">01</span>
                <h3 className="text-lg sm:text-xl font-display font-medium text-[#F5F4F6]">How do users become investors?</h3>
              </div>
              <div className="flex gap-4 items-baseline p-4 rounded-lg bg-[#1F1E21] border border-white/10">
                <span className="font-mono text-xs text-blush">02</span>
                <h3 className="text-lg sm:text-xl font-display font-medium text-[#F5F4F6]">How do investors make informed decisions?</h3>
              </div>
              <div className="flex gap-4 items-baseline p-4 rounded-lg bg-[#1F1E21] border border-white/10">
                <span className="font-mono text-xs text-blush">03</span>
                <h3 className="text-lg sm:text-xl font-display font-medium text-[#F5F4F6]">How do investors stay confident after investing?</h3>
              </div>
            </div>
          </motion.div>

          <AnimatedExperienceMap />
        </div>
      </section>

      {/* The Final Product Gallery */}
      <section className="py-24 bg-[#181719] border-b border-white/10 overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-blush block mb-2">
              [ GALLERY // COMPLETE INTERFACES ]
            </span>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-light text-[#F5F4F6] mb-3">The Final Product</h3>
            <p className="text-base sm:text-lg text-[#AAA7AE] font-light">Selected screens from the completed platform.</p>
          </motion.div>
          
          <div className="-mx-6 sm:mx-0 space-y-12">
            <ScreenCarousel 
              screens={galleryImages.slice(0, 12).map((src, i) => ({ src, alt: `Final UI Screen ${i + 1}` }))} 
            />
            <ScreenCarousel 
              screens={galleryImages.slice(12, 25).map((src, i) => ({ src, alt: `Final UI Screen ${i + 13}` }))} 
            />
          </div>
        </div>
      </section>

      {/* My Role + The Challenge */}
      <section className="py-24 bg-[#141315] border-b border-white/10">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-[#1F1E21] p-8 md:p-10 rounded-lg border border-white/10">
              <span className="font-mono text-xs text-blush uppercase tracking-widest block mb-2">SCOPE & DELIVERABLES</span>
              <h3 className="text-2xl font-display font-medium text-[#F5F4F6] mb-6">Lead UX Designer</h3>
              <ul className="space-y-3.5 text-[#AAA7AE] text-sm font-light mb-8">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-blush"></span> Product strategy</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-blush"></span> UX & UI design</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-blush"></span> Interaction design</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-blush"></span> Information architecture</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-blush"></span> Design system</li>
              </ul>
              <div className="pt-6 border-t border-white/10 font-mono text-xs">
                <p className="font-semibold uppercase tracking-wider text-[#AAA7AE] mb-1">Platform</p>
                <p className="text-blush">iOS & Android</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-6 sm:p-0">
              <span className="font-mono text-xs uppercase tracking-widest text-blush mb-4 block">[ THE CHALLENGE ]</span>
              <p className="text-xl sm:text-2xl md:text-3xl text-[#F5F4F6] font-display font-light leading-relaxed">
                Design a wealth management experience that helps high-net-worth investors move confidently through every stage, from onboarding to long-term portfolio management, without stripping out the information depth or cutting around regulatory requirements.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Act 1 */}
      <section className="py-24 bg-[#181719] border-b border-white/10 overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs uppercase tracking-widest text-blush">
                [ ACT 01 // FIRST STEP ]
              </span>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-light text-[#F5F4F6] mb-4">Becoming an investor</h3>
            <p className="text-base sm:text-lg text-[#AAA7AE] font-light leading-relaxed">
              The first obstacle isn't picking a fund. It's getting through the door. Onboarding for a regulated investment platform means identity verification, KYC, nominee setup, and document submission. None of it is skippable. The design question was whether it had to feel like a bureaucratic wall, or whether it could feel like a process with a clear end in sight.
            </p>
          </motion.div>

          <div className="space-y-16 md:space-y-28">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="font-mono text-xs text-blush uppercase tracking-wider block">FLOW 01</span>
                <h4 className="text-2xl font-display font-medium text-[#F5F4F6]">Self-Serve Onboarding</h4>
                <p className="text-[#AAA7AE] font-light text-sm sm:text-base leading-relaxed">
                  Every screen in the self-serve flow was built to answer the same three questions in sequence: what is this step, why is it required, what happens after I complete it. This was not always explicit. Sometimes it took the form of a progress indicator or a brief explanation line, but the structure was consistent across every stage of the flow. Regulatory requirements stayed intact. The friction was just made visible and predictable.
                </p>
              </div>
              <div className="lg:col-span-7 -mx-6 sm:mx-0">
                <ScreenCarousel screens={selfServeOnboardingScreens} />
              </div>
            </div>

            <div className="space-y-12">
              <div className="max-w-3xl space-y-4">
                <span className="font-mono text-xs text-blush uppercase tracking-wider block">FLOW 02</span>
                <h4 className="text-2xl font-display font-medium text-[#F5F4F6]">RM-Assisted Onboarding</h4>
                <p className="text-[#AAA7AE] font-light text-sm sm:text-base leading-relaxed">
                  The obvious fix was PAN OCR: auto-fill the form fields, reduce the typing. It wasn't feasible within scope.
                </p>
                <p className="text-[#AAA7AE] font-light text-sm sm:text-base leading-relaxed">
                  The more interesting question turned out to be whether HNI investors working with a Relationship Manager should be filling out forms at all. In the RM-assisted flow, the RM prepares the application; the investor reviews, confirms, and signs. Same regulatory steps, same data collected. The work moved from the investor to the person already paid to handle it.
                </p>
              </div>
              
              <div className="-mx-6 sm:mx-0">
                <ScreenCarousel screens={rmAssistedOnboardingScreens} />
              </div>

              <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center py-10 px-6 rounded-lg bg-[#1F1E21] border border-blush/20">
                <p className="text-xl sm:text-2xl md:text-3xl text-[#F5F4F6] font-display font-light italic mb-4">"The amount of work didn't change. Who performed it did."</p>
                <p className="text-blush font-mono text-xs uppercase tracking-widest">The improvement wasn't fewer steps. It was handing the steps to the right person.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Act 2 */}
      <section className="py-24 bg-[#141315] border-b border-white/10 overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs uppercase tracking-widest text-blush">
                [ ACT 02 // EVALUATION & DISCOVERY ]
              </span>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-light text-[#F5F4F6] mb-4">Making informed decisions</h3>
            <p className="text-base sm:text-lg text-[#AAA7AE] font-light leading-relaxed">
              Once onboarding is done, the product's job shifts. It's no longer about getting someone in the door. It's about helping them decide where to put money they care about, without dumbing down the information or burying them in it.
            </p>
          </motion.div>

          <div className="space-y-16 md:space-y-28">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="font-mono text-xs text-blush uppercase tracking-wider block">INTERFACE ARCHITECTURE</span>
                <h4 className="text-2xl font-display font-medium text-[#F5F4F6]">Portfolio Overview</h4>
                <p className="text-[#AAA7AE] font-light text-sm sm:text-base leading-relaxed">
                  The portfolio screen isn't a dashboard you visit once to check a number. Investors come back with different questions each time: how am I doing overall, where is my money sitting, who can I talk to. The navigation was designed around that.
                </p>
                <p className="text-[#AAA7AE] font-light text-sm sm:text-base leading-relaxed">
                  The Relationship Manager sits in the most prominent position in the interface. This was a deliberate decision that came after prototyping an AI assistant and dropping it. For this audience, a real person they already know built more trust than a capable chatbot they'd never met.
                </p>
              </div>
              <div className="lg:col-span-7 -mx-6 sm:mx-0">
                <ScreenCarousel screens={portfolioOverviewScreens} />
              </div>
            </div>

            <div className="space-y-12">
              <div className="max-w-3xl space-y-4">
                <span className="font-mono text-xs text-blush uppercase tracking-wider block">INFORMATION HIERARCHY</span>
                <h4 className="text-2xl font-display font-medium text-[#F5F4F6]">Fund Discovery & Details</h4>
                <p className="text-[#AAA7AE] font-light text-sm sm:text-base leading-relaxed">
                  Fund details pages carry a lot: performance history, risk rating, asset allocation, fund manager, regulatory documents. The design problem wasn't adding or removing information. The challenge was making sure the right things had the user's attention at the right moment.
                </p>
                <p className="text-[#AAA7AE] font-light text-sm sm:text-base leading-relaxed">
                  Tabs were prototyped and cut. They tucked too much behind an extra tap. Accordions let the important information stay visible while keeping the detail accessible rather than hidden.
                </p>
                <p className="text-[#AAA7AE] font-light text-sm sm:text-base leading-relaxed">
                  The investment CTA was split into two: One-Time Investment and Start SIP. By the time a user reaches this screen, they've already decided to invest. The only open question is how.
                </p>
              </div>
              
              <div className="-mx-6 sm:mx-0">
                <ScreenCarousel screens={fundDiscoveryScreens} />
              </div>

              <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center py-8 border-t border-white/10 font-mono text-sm uppercase tracking-wider text-blush">
                Good financial products don't reduce the information. They reduce the effort it takes to make sense of it.
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Act 3 */}
      <section className="py-24 bg-[#181719] border-b border-white/10 overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs uppercase tracking-widest text-blush">
                [ ACT 03 // FOLLOW-THROUGH ]
              </span>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-light text-[#F5F4F6] mb-4">Staying confident after investing</h3>
            <p className="text-base sm:text-lg text-[#AAA7AE] font-light leading-relaxed">
              The product doesn't stop being relevant after the first investment. Most of its working life is spent on follow-through: SIP processing, redemptions, switches, and the unglamorous business of tracking money that takes days to settle.
            </p>
          </motion.div>

          <div className="space-y-16 md:space-y-28">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="font-mono text-xs text-blush uppercase tracking-wider block">STATE VISIBILITY</span>
                <h4 className="text-2xl font-display font-medium text-[#F5F4F6]">Transaction & Lifecycle Management</h4>
                <p className="text-[#AAA7AE] font-light text-sm sm:text-base leading-relaxed">
                  Investments don't settle immediately. Money leaves the account, an order gets placed, units are allocated later, a confirmation comes after that. Without visibility into each step, the gap between "I paid" and "I invested" creates real anxiety.
                </p>
                <p className="text-[#AAA7AE] font-light text-sm sm:text-base leading-relaxed">
                  The order-detail screens were built to explain what happened at each stage and what to expect next, rather than just displaying a status badge.
                </p>
              </div>
              <div className="lg:col-span-7 -mx-6 sm:mx-0">
                <ScreenCarousel screens={transactionScreens} />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-4 lg:order-2">
                <span className="font-mono text-xs text-blush uppercase tracking-wider block">ACCOUNTABILITY</span>
                <h4 className="text-2xl font-display font-medium text-[#F5F4F6]">RM Updates & Ongoing Management</h4>
                <p className="text-[#AAA7AE] font-light text-sm sm:text-base leading-relaxed">
                  The RM-assisted principle from onboarding extends into ongoing portfolio management. RMs can prepare and recommend actions, such as a SIP step-up or a new allocation, but the investor approves every one individually.
                </p>
                <p className="text-[#AAA7AE] font-light text-sm sm:text-base leading-relaxed">
                  Each recommendation surfaces who initiated it, the reason, and what the investor needs to do. The delegation has a paper trail. It doesn't become a black box.
                </p>
              </div>
              <div className="lg:col-span-7 lg:order-1 -mx-6 sm:mx-0">
                <ScreenCarousel screens={rmUpdatesScreens} />
              </div>
            </div>

            <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center py-8 border-t border-white/10 font-mono text-sm uppercase tracking-wider text-blush">
              Trust doesn't end at the first transaction. It has to hold up every time money moves.
            </motion.div>
          </div>
        </div>
      </section>

      {/* Design System */}
      <section className="py-24 bg-[#141315] border-b border-white/10">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mb-12 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-blush block">
              [ SYSTEMS // COHESION ]
            </span>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-light text-[#F5F4F6]">Building a cohesive product language</h3>
            <p className="text-base sm:text-lg text-[#AAA7AE] font-light leading-relaxed">
              As the scope grew, the thing holding it together stopped being individual screens. A consistent language of typography, color, and components was what let the platform feel like one product across five distinct workflows.
            </p>
            <p className="text-base sm:text-lg text-[#AAA7AE] font-light leading-relaxed">
              The design system was built in parallel with the product work, not added at the end.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-lg overflow-hidden border border-white/15 bg-[#1F1E21] shadow-2xl p-2">
            <img src={designSystemImg} alt="Design System" className="w-full rounded h-auto object-cover" loading="lazy" decoding="async" />
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
              The question that kept changing through this project wasn't how to simplify the product. It was how to help people understand it. For anything involving money, the complexity is real. Hiding it doesn't make the decisions easier. It just makes them feel arbitrary.
            </p>
            <p className="text-[#F5F4F6] font-mono text-sm uppercase tracking-wider pt-4">
              Things worth exploring next, if the project continued:
            </p>
            <ul className="space-y-3 pt-4 border-t border-white/10 font-light text-sm sm:text-base text-[#AAA7AE]">
              <li className="flex items-start gap-3"><span className="text-blush font-bold mt-0.5">•</span> PAN OCR once it becomes feasible</li>
              <li className="flex items-start gap-3"><span className="text-blush font-bold mt-0.5">•</span> An adaptive onboarding path that adjusts based on what the RM has already prepared</li>
              <li className="flex items-start gap-3"><span className="text-blush font-bold mt-0.5">•</span> Cross-device resume so an interrupted flow doesn't restart from scratch</li>
              <li className="flex items-start gap-3"><span className="text-blush font-bold mt-0.5">•</span> Smarter document validation</li>
              <li className="flex items-start gap-3"><span className="text-blush font-bold mt-0.5">•</span> Context-sensitive assistance that shows up when it's needed rather than sitting in a menu</li>
            </ul>
          </motion.div>
        </div>
      </section>

      <ProjectBottomNav currentProjectTitle="Tata Capital Wealth" />

      <Footer />
    </div>
  );
}

