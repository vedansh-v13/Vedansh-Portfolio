import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Users, Globe, Clock, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
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
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Tata Capital Wealth Case Study | Vedansh Wandalkar</title>
        <meta name="description" content="Reimagining a wealth platform for high-net-worth investors." />
      </Helmet>

      {/* Hero section */}
      <section className="relative w-full min-h-[450px] sm:min-h-[600px] overflow-hidden bg-gradient-to-br from-primary/20 via-background to-background pt-20 sm:pt-32 pb-16 sm:pb-24">
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
            {/* Left Column: Video */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative w-full aspect-[9/16] max-h-[70vh] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black/50 mx-auto max-w-[400px] lg:max-w-none"
            >
              <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-90">
                <source src={sceneVideo} type="video/mp4" />
              </video>
            </motion.div>

            {/* Right Column: Content & Metrics */}
            <div className="lg:col-span-7 space-y-12">
              <div>
                <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl artistic-text font-extralight mb-4 text-white leading-tight">
                  Tata Capital Wealth
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-xl md:text-2xl text-gray-300 mb-4 artistic-text font-light">
                  Designing Confidence Across the Investment Journey
                </motion.p>
                <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="text-gray-400 text-lg mb-8">
                  Reimagining a wealth platform for high-net-worth investors.
                </motion.p>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-wrap gap-4 text-sm bg-white/5 p-4 rounded-xl border border-white/10 inline-flex">
                  <div className="flex items-center gap-2 text-gray-300"><Users size={16} className="text-blue-400"/> Lead UX Designer</div>
                  <div className="w-px h-4 bg-white/20"></div>
                  <div className="flex items-center gap-2 text-gray-300"><Globe size={16} className="text-green-400"/> iOS & Android</div>
                  <div className="w-px h-4 bg-white/20"></div>
                  <div className="flex items-center gap-2 text-gray-300"><Clock size={16} className="text-orange-400"/> Jan '26 to Apr '26</div>
                </motion.div>
              </div>

              {/* Metrics Grid */}
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }} className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-black/20 p-8 rounded-2xl border border-white/5">
                <div className="space-y-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Product Metrics</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-3xl font-light text-white mb-1">5M+</div>
                      <div className="text-xs text-gray-400 uppercase tracking-wide">Downloads</div>
                    </div>
                    <div>
                      <div className="text-3xl font-light text-white mb-1">600K+</div>
                      <div className="text-xs text-gray-400 uppercase tracking-wide">Registered Users</div>
                    </div>
                    <div>
                      <div className="text-3xl font-light text-white mb-1">4.1★</div>
                      <div className="text-xs text-gray-400 uppercase tracking-wide">Play Store Rating</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">UX Redesign Impact</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-white/10 pb-2">
                      <span className="text-sm text-gray-300">Task Success</span>
                      <span className="text-sm font-medium text-white">81% → <span className="text-green-400">95%</span></span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/10 pb-2">
                      <span className="text-sm text-gray-300">Create SIP</span>
                      <span className="text-sm font-medium text-white">4.5 min → <span className="text-green-400">2.5 min</span></span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/10 pb-2">
                      <span className="text-sm text-gray-300">Find Fund</span>
                      <span className="text-sm font-medium text-white">95 sec → <span className="text-green-400">45 sec</span></span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">Form Abandonment</span>
                      <span className="text-sm font-medium text-white">42% → <span className="text-green-400">22%</span></span>
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
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-24 max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-light text-white leading-tight mb-12">
              Tata Capital Wealth already had a comprehensive platform.
            </h2>
            <div className="space-y-6 text-xl text-gray-400 leading-relaxed">
              <p>
                The product had grown feature by feature over several years, each addition making sense in isolation. The whole was harder to navigate than any individual screen suggested. Users could complete tasks, but they had to work harder to figure out where to start.
              </p>
              <p>
                This project covered the full journey: onboarding, portfolio, fund discovery, investment flows, and ongoing transaction management. A design system runs underneath all of it, keeping the platform coherent as it grows.
              </p>
            </div>
            
            <div className="mt-20 space-y-6">
              <div className="flex gap-6 items-baseline group">
                <span className="text-2xl font-light text-accent/50 group-hover:text-accent transition-colors">01</span>
                <h3 className="text-2xl md:text-3xl font-light text-gray-300 group-hover:text-white transition-colors">How do users become investors?</h3>
              </div>
              <div className="flex gap-6 items-baseline group">
                <span className="text-2xl font-light text-accent/50 group-hover:text-accent transition-colors">02</span>
                <h3 className="text-2xl md:text-3xl font-light text-gray-300 group-hover:text-white transition-colors">How do investors make informed decisions?</h3>
              </div>
              <div className="flex gap-6 items-baseline group">
                <span className="text-2xl font-light text-accent/50 group-hover:text-accent transition-colors">03</span>
                <h3 className="text-2xl md:text-3xl font-light text-gray-300 group-hover:text-white transition-colors">How do investors stay confident after investing?</h3>
              </div>
            </div>
          </motion.div>

          <AnimatedExperienceMap />
        </div>
      </section>

      {/* The Final Product Gallery */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl artistic-text text-white mb-4">The Final Product</h3>
            <p className="text-xl text-gray-400">Selected screens from the completed platform.</p>
          </motion.div>
          
          <div className="-mx-6 md:mx-0 space-y-12">
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
      <section className="py-24 bg-card/5 border-y border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10">
              <h3 className="text-2xl text-white font-bold mb-6">Lead UX Designer</h3>
              <ul className="space-y-4 text-gray-400 mb-8">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Product strategy</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> UX & UI design</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Interaction design</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Information architecture</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Design system</li>
              </ul>
              <div className="pt-8 border-t border-white/10">
                <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">Platform</p>
                <p className="text-gray-300">iOS & Android</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative overflow-hidden sm:overflow-visible rounded-3xl p-6 sm:p-0">
              <Quote className="absolute -top-4 sm:-top-10 -left-4 sm:-left-10 w-16 sm:w-24 h-16 sm:h-24 text-accent/10" />
              <h3 className="text-sm font-semibold uppercase tracking-widest text-accent mb-6">The Challenge</h3>
              <p className="text-2xl md:text-3xl text-gray-200 font-light leading-relaxed">
                Design a wealth management experience that helps high-net-worth investors move confidently through every stage, from onboarding to long-term portfolio management, without stripping out the information depth or cutting around regulatory requirements.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Act 1 */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mb-16">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm font-bold bg-accent/20 text-accent py-1 px-3 rounded-full">01</span>
              <h2 className="text-sm uppercase tracking-widest text-gray-400 font-semibold">Act 1</h2>
            </div>
            <h3 className="text-4xl md:text-5xl artistic-text text-white mb-6">Becoming an investor</h3>
            <p className="text-xl text-gray-400 leading-relaxed">
              The first obstacle isn't picking a fund. It's getting through the door. Onboarding for a regulated investment platform means identity verification, KYC, nominee setup, and document submission. None of it is skippable. The design question was whether it had to feel like a bureaucratic wall, or whether it could feel like a process with a clear end in sight.
            </p>
          </motion.div>

          <div className="space-y-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-6">
                <h4 className="text-2xl font-bold text-white">Self-Serve Onboarding</h4>
                <p className="text-gray-400 leading-relaxed">
                  Every screen in the self-serve flow was built to answer the same three questions in sequence: what is this step, why is it required, what happens after I complete it. This was not always explicit. Sometimes it took the form of a progress indicator or a brief explanation line, but the structure was consistent across every stage of the flow. Regulatory requirements stayed intact. The friction was just made visible and predictable.
                </p>
              </div>
              <div className="lg:col-span-7 -mx-6 md:mx-0">
                <ScreenCarousel screens={selfServeOnboardingScreens} />
              </div>
            </div>

            <div className="space-y-12">
              <div className="max-w-3xl">
                <h4 className="text-2xl font-bold text-white mb-6">RM-Assisted Onboarding</h4>
                <p className="text-gray-400 leading-relaxed mb-6">
                  The obvious fix was PAN OCR: auto-fill the form fields, reduce the typing. It wasn't feasible within scope.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  The more interesting question turned out to be whether HNI investors working with a Relationship Manager should be filling out forms at all. In the RM-assisted flow, the RM prepares the application; the investor reviews, confirms, and signs. Same regulatory steps, same data collected. The work moved from the investor to the person already paid to handle it.
                </p>
              </div>
              
              <div className="-mx-6 md:mx-0">
                <ScreenCarousel screens={rmAssistedOnboardingScreens} />
              </div>

              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center py-12 border-y border-white/5">
                <Quote className="w-8 h-8 text-accent/50 mx-auto mb-6" />
                <p className="text-xl sm:text-2xl md:text-3xl text-white font-medium italic mb-8">"The amount of work didn't change. Who performed it did."</p>
                <p className="text-gray-400 uppercase tracking-widest text-sm font-semibold">The improvement wasn't fewer steps. It was handing the steps to the right person.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Act 2 */}
      <section className="py-24 bg-card/5 overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mb-16">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm font-bold bg-accent/20 text-accent py-1 px-3 rounded-full">02</span>
              <h2 className="text-sm uppercase tracking-widest text-gray-400 font-semibold">Act 2</h2>
            </div>
            <h3 className="text-4xl md:text-5xl artistic-text text-white mb-6">Making informed decisions</h3>
            <p className="text-xl text-gray-400 leading-relaxed">
              Once onboarding is done, the product's job shifts. It's no longer about getting someone in the door. It's about helping them decide where to put money they care about, without dumbing down the information or burying them in it.
            </p>
          </motion.div>

          <div className="space-y-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-6">
                <h4 className="text-2xl font-bold text-white">Portfolio Overview</h4>
                <p className="text-gray-400 leading-relaxed">
                  The portfolio screen isn't a dashboard you visit once to check a number. Investors come back with different questions each time: how am I doing overall, where is my money sitting, who can I talk to. The navigation was designed around that.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  The Relationship Manager sits in the most prominent position in the interface. This was a deliberate decision that came after prototyping an AI assistant and dropping it. For this audience, a real person they already know built more trust than a capable chatbot they'd never met.
                </p>
              </div>
              <div className="lg:col-span-7 -mx-6 md:mx-0">
                <ScreenCarousel screens={portfolioOverviewScreens} />
              </div>
            </div>

            <div className="space-y-12">
              <div className="max-w-3xl space-y-6">
                <h4 className="text-2xl font-bold text-white">Fund Discovery & Details</h4>
                <p className="text-gray-400 leading-relaxed">
                  Fund details pages carry a lot: performance history, risk rating, asset allocation, fund manager, regulatory documents. The design problem wasn't adding or removing information. The challenge was making sure the right things had the user's attention at the right moment.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Tabs were prototyped and cut. They tucked too much behind an extra tap. Accordions let the important information stay visible while keeping the detail accessible rather than hidden.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  The investment CTA was split into two: One-Time Investment and Start SIP. By the time a user reaches this screen, they've already decided to invest. The only open question is how.
                </p>
              </div>
              
              <div className="-mx-6 md:mx-0">
                <ScreenCarousel screens={fundDiscoveryScreens} />
              </div>

              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center py-12 border-t border-white/5">
                <p className="text-gray-300 text-lg uppercase tracking-widest font-semibold">
                  Good financial products don't reduce the information. They reduce the effort it takes to make sense of it.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Act 3 */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mb-16">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm font-bold bg-accent/20 text-accent py-1 px-3 rounded-full">03</span>
              <h2 className="text-sm uppercase tracking-widest text-gray-400 font-semibold">Act 3</h2>
            </div>
            <h3 className="text-4xl md:text-5xl artistic-text text-white mb-6">Staying confident after investing</h3>
            <p className="text-xl text-gray-400 leading-relaxed">
              The product doesn't stop being relevant after the first investment. Most of its working life is spent on follow-through: SIP processing, redemptions, switches, and the unglamorous business of tracking money that takes days to settle.
            </p>
          </motion.div>

          <div className="space-y-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-6">
                <h4 className="text-2xl font-bold text-white">Transaction & Lifecycle Management</h4>
                <p className="text-gray-400 leading-relaxed">
                  Investments don't settle immediately. Money leaves the account, an order gets placed, units are allocated later, a confirmation comes after that. Without visibility into each step, the gap between "I paid" and "I invested" creates real anxiety.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  The order-detail screens were built to explain what happened at each stage and what to expect next, rather than just displaying a status badge.
                </p>
              </div>
              <div className="lg:col-span-7 -mx-6 md:mx-0">
                <ScreenCarousel screens={transactionScreens} />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-6 lg:order-2">
                <h4 className="text-2xl font-bold text-white">RM Updates & Ongoing Management</h4>
                <p className="text-gray-400 leading-relaxed">
                  The RM-assisted principle from onboarding extends into ongoing portfolio management. RMs can prepare and recommend actions, such as a SIP step-up or a new allocation, but the investor approves every one individually.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Each recommendation surfaces who initiated it, the reason, and what the investor needs to do. The delegation has a paper trail. It doesn't become a black box.
                </p>
              </div>
              <div className="lg:col-span-7 lg:order-1 -mx-6 md:mx-0">
                <ScreenCarousel screens={rmUpdatesScreens} />
              </div>
            </div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center py-12 border-t border-white/5">
              <p className="text-gray-300 text-lg uppercase tracking-widest font-semibold">
                Trust doesn't end at the first transaction. It has to hold up every time money moves.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Design System */}
      <section className="py-24 bg-card/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mb-16 space-y-6">
            <h3 className="text-4xl md:text-5xl artistic-text text-white mb-6">Building a cohesive product language</h3>
            <p className="text-xl text-gray-400 leading-relaxed">
              As the scope grew, the thing holding it together stopped being individual screens. A consistent language of typography, color, and components was what let the platform feel like one product across five distinct workflows.
            </p>
            <p className="text-xl text-gray-400 leading-relaxed">
              The design system was built in parallel with the product work, not added at the end.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <img src={designSystemImg} alt="Design System" className="w-full rounded-2xl border border-white/10 bg-white/5 shadow-2xl" />
          </motion.div>
        </div>
      </section>

      {/* Reflection */}
      <section className="py-32">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-8 text-lg text-gray-300 leading-relaxed">
            <h3 className="text-3xl font-bold text-white mb-8">Reflection</h3>
            <p>
              The question that kept changing through this project wasn't how to simplify the product. It was how to help people understand it. For anything involving money, the complexity is real. Hiding it doesn't make the decisions easier. It just makes them feel arbitrary.
            </p>
            <p>
              Things worth exploring next, if the project continued:
            </p>
            <ul className="space-y-4 pt-4 border-t border-white/10">
              <li className="flex items-start gap-4"><span className="text-accent font-bold mt-1">•</span> PAN OCR once it becomes feasible</li>
              <li className="flex items-start gap-4"><span className="text-accent font-bold mt-1">•</span> An adaptive onboarding path that adjusts based on what the RM has already prepared</li>
              <li className="flex items-start gap-4"><span className="text-accent font-bold mt-1">•</span> Cross-device resume so an interrupted flow doesn't restart from scratch</li>
              <li className="flex items-start gap-4"><span className="text-accent font-bold mt-1">•</span> Smarter document validation</li>
              <li className="flex items-start gap-4"><span className="text-accent font-bold mt-1">•</span> Context-sensitive assistance that shows up when it's needed rather than sitting in a menu</li>
            </ul>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
