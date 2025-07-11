import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

export default function OmnycommCaseStudy() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Omnycomm Case Study - Ecommerce Dashboard Design | Vedansh Wandalkar</title>
        <meta name="description" content="Case study: Designing the first ecommerce dashboard experience for Omnycomm, a marketing OS for D2C brands. Learn about the UX/UI design process, challenges, and outcomes." />
        <meta property="og:title" content="Omnycomm Case Study - Ecommerce Dashboard Design | Vedansh Wandalkar" />
        <meta property="og:description" content="Case study: Designing the first ecommerce dashboard experience for Omnycomm, a marketing OS for D2C brands." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://vedanshwandalkar.com/case-studies/omnycomm" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Omnycomm Case Study - Ecommerce Dashboard Design" />
        <meta name="twitter:description" content="Case study: Designing the first ecommerce dashboard experience for Omnycomm, a marketing OS for D2C brands." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] bg-gradient-to-br from-primary/20 via-background to-background">
        <div className="container mx-auto px-6 py-20">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
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
                  Back to Projects
                </span>
              </a>
            </Button>
          </motion.div>

          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl artistic-text font-extralight mb-6 text-white leading-tight">
              🧩 Case Study: Omnycomm
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 artistic-text font-light">
              Designing the First Ecommerce Dashboard Experience
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span className="bg-white/10 px-3 py-1 rounded-full">UI/UX Design</span>
              <span className="bg-white/10 px-3 py-1 rounded-full">Dashboard Design</span>
              <span className="bg-white/10 px-3 py-1 rounded-full">Ecommerce</span>
              <span className="bg-white/10 px-3 py-1 rounded-full">Figma</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Study Content */}
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="prose prose-invert prose-lg max-w-none"
        >
          {/* Project Overview */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl artistic-text font-extralight mb-8 text-white">🔹 Project Overview</h2>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              <strong>Omnycomm</strong> is a marketing OS for D2C brands, built to unify ecommerce data, campaign performance, and communication. I was responsible for designing the <strong>first version</strong> of its ecommerce dashboard — helping users understand their brand's performance at a glance, without needing a manual or analyst.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-card/10 p-6 rounded-lg border border-white/10">
                <h4 className="text-lg font-semibold mb-3 text-white">Role</h4>
                <p className="text-gray-300">UI/UX Designer (end-to-end)</p>
              </div>
              <div className="bg-card/10 p-6 rounded-lg border border-white/10">
                <h4 className="text-lg font-semibold mb-3 text-white">Tools Used</h4>
                <p className="text-gray-300">Figma, Notion</p>
              </div>
              <div className="bg-card/10 p-6 rounded-lg border border-white/10">
                <h4 className="text-lg font-semibold mb-3 text-white">Platform</h4>
                <p className="text-gray-300">Web dashboard</p>
              </div>
              <div className="bg-card/10 p-6 rounded-lg border border-white/10">
                <h4 className="text-lg font-semibold mb-3 text-white">Users</h4>
                <p className="text-gray-300">Ecommerce marketers, founders, and growth teams</p>
              </div>
            </div>
          </section>

          {/* Problem */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl artistic-text font-extralight mb-8 text-white">❗ Problem</h2>
            <blockquote className="border-l-4 border-red-500/50 pl-6 py-4 bg-red-500/5 rounded-r-lg">
              <p className="text-xl text-gray-300 italic leading-relaxed">
                The ecommerce dashboard was cluttered and hard to use. Users struggled to find the information they needed quickly, and the interface lacked a clear visual hierarchy, leading to confusion and inefficiency.
              </p>
            </blockquote>
            <p className="text-gray-400 mt-4">
              📝 <em>Note: This problem was anticipated based on early layouts and strategy calls — I helped shape the product to prevent these usability issues before launch.</em>
            </p>
          </section>

          {/* Solution */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl artistic-text font-extralight mb-8 text-white">💡 Solution</h2>
            <blockquote className="border-l-4 border-green-500/50 pl-6 py-4 bg-green-500/5 rounded-r-lg">
              <p className="text-xl text-gray-300 italic leading-relaxed">
                I designed the dashboard to prioritize the most important metrics, introduce a clean layout, and enhance visual hierarchy. The new design provides a more intuitive and efficient user experience.
              </p>
            </blockquote>
          </section>

          {/* Goals */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl artistic-text font-extralight mb-8 text-white">🎯 Goals</h2>
            <ul className="space-y-4 text-lg text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>Build a clean, focused layout for quick decision-making</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>Create scalable sections for KPIs, traffic, attribution, and campaign views</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>Support daily use cases like channel switching and time filtering</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>Design a modular system to extend across Omnycomm's other dashboards</span>
              </li>
            </ul>
          </section>

          {/* Research & Discovery */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl artistic-text font-extralight mb-8 text-white">🔍 Research & Discovery</h2>
            
            <h3 className="text-2xl md:text-3xl artistic-text font-extralight mb-6 text-white">🧠 Competitive Research</h3>
            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              I analyzed dashboards from:
            </p>
            <ul className="space-y-2 text-lg text-gray-300 mb-6">
              <li>• Triple Whale</li>
              <li>• Peel Analytics</li>
              <li>• Google Ads</li>
              <li>• Meta Business Suite</li>
            </ul>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Most shared two flaws:
            </p>
            <ul className="space-y-2 text-lg text-gray-300 mb-6">
              <li>• Overwhelming data density</li>
              <li>• Poor scannability</li>
            </ul>

            <h3 className="text-2xl md:text-3xl artistic-text font-extralight mb-6 text-white">📋 Insights</h3>
            <ul className="space-y-4 text-lg text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">•</span>
                <span>Users wanted clarity, not complexity</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">•</span>
                <span>A high-level summary should tell 80% of the story</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">•</span>
                <span>Filters needed to be persistent, not buried</span>
              </li>
            </ul>
          </section>

          {/* UX Architecture & Flow */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl artistic-text font-extralight mb-8 text-white">🧭 UX Architecture & Flow</h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              The dashboard was structured into vertical sections:
            </p>
            <ol className="space-y-4 text-lg text-gray-300 mb-8">
              <li className="flex items-start gap-3">
                <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-sm font-medium">1</span>
                <span><strong>Top KPI Row</strong> – key metrics like Spend, Revenue, ROAS</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-sm font-medium">2</span>
                <span><strong>Traffic & Attribution Panels</strong> – segmented by source</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-sm font-medium">3</span>
                <span><strong>Campaign Overview Table</strong> – sortable, with clear deltas</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-sm font-medium">4</span>
                <span><strong>Filters Bar</strong> – docked with time range and channel toggles</span>
              </li>
            </ol>

            <div className="bg-card/10 p-6 rounded-lg border border-white/10 mb-8">
              <img 
                src="https://cdn.super.so/d645b58d-f5b9-4a29-a970-84ab90e7dbdf/images/41b99915-cf8e-4228-a94f-96b6b85e31ef.webp" 
                alt="KPI Layout Wireframe" 
                className="w-full rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-400 mt-3 text-center">KPI Layout Wireframe</p>
            </div>
          </section>

          {/* UI Design System */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl artistic-text font-extralight mb-8 text-white">🎨 UI Design System</h2>
            <ul className="space-y-4 text-lg text-gray-300 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">•</span>
                <span>Built modular component system in Figma</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">•</span>
                <span>Used neutral base with focused color accents for trends</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">•</span>
                <span>Introduced color-coded KPIs (green/red) for visual scanning</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">•</span>
                <span>Created responsive card-based layouts with clear hover & selection states</span>
              </li>
            </ul>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-card/10 p-6 rounded-lg border border-white/10">
                <img 
                  src="https://cdn.super.so/d645b58d-f5b9-4a29-a970-84ab90e7dbdf/images/37e91f02-81cb-439f-9d00-dc4c1dfb2351.webp" 
                  alt="KPI Cards" 
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-sm text-gray-400 mt-3 text-center">KPI Cards</p>
              </div>
              <div className="bg-card/10 p-6 rounded-lg border border-white/10">
                <img 
                  src="https://cdn.super.so/d645b58d-f5b9-4a29-a970-84ab90e7dbdf/images/2e4dbb65-d409-4375-a403-13ff55b8396e.webp" 
                  alt="Filters & Structure" 
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-sm text-gray-400 mt-3 text-center">Filters & Structure</p>
              </div>
            </div>
          </section>

          {/* Outcomes & Feedback */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl artistic-text font-extralight mb-8 text-white">📈 Outcomes & Feedback</h2>
            <ul className="space-y-4 text-lg text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 mt-1">•</span>
                <span>Adopted as part of Omnycomm's v1 product launch</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 mt-1">•</span>
                <span>Used as the baseline dashboard system for future modules</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 mt-1">•</span>
                <span>Test users found the layout "clear and self-explanatory"</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 mt-1">•</span>
                <span>Helped reduce onboarding time during early demos</span>
              </li>
            </ul>
          </section>

          {/* What I Learned */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl artistic-text font-extralight mb-8 text-white">🧠 What I Learned</h2>
            <ul className="space-y-4 text-lg text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Designing from scratch means you're shaping both the structure and the behavior</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Simplicity is not minimalism — it's strategic clarity</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Collaborating with product early helps define not just how things look, but <em>how they work</em></span>
              </li>
            </ul>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-8 rounded-xl border border-white/10 text-center">
            <h2 className="text-3xl md:text-4xl artistic-text font-extralight mb-6 text-white">📬 Let's Build Your Dashboard Together</h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Whether you're launching an internal tool, analytics platform, or a multi-team dashboard, I specialize in designing intuitive interfaces that prioritize speed, clarity, and scale.
            </p>
            <Button 
              asChild 
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <a href="mailto:vedansh@foxo.club" className="inline-flex items-center gap-2">
                <Mail size={20} />
                Start a conversation →
              </a>
            </Button>
          </section>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
} 