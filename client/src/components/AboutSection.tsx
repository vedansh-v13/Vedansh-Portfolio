import { motion, useInView } from "framer-motion";
import { Book, Sparkles, Coffee, ArrowRight } from "lucide-react";
import { useRef } from "react";
import profileImage from "@assets/v1313_1751872364455.jpg";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const facts = [
    { label: "Experience", value: "5+", unit: "years" },
    { label: "Based in", value: "Bangalore", unit: "India" },
  ];

  const books = [
    { title: "Kusamakura", author: "Natsume Sōseki" },
    { title: "Meditations", author: "Marcus Aurelius" },
    { title: "Running Lean", author: "Ash Maurya" },
    { title: "Five Rings", author: "Miyamoto Musashi" },
    { title: "In Praise of Shadows", author: "Jun'ichirō Tanizaki" },
    { title: "Design of Everyday Things", author: "Don Norman" },
  ];

  return (
    <section ref={ref} id="about" className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            animate={isInView ? { rotate: [0, 10, -10, 0] } : {}}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
            className="inline-block mb-4"
          >
            <Sparkles className="w-8 h-8 text-accent mx-auto" />
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-extralight mb-6 text-white">
            About
            <motion.span 
              className="text-accent block md:inline md:ml-4"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Vedansh
            </motion.span>
          </h2>
        </motion.div>

        {/* Profile Image - Centered under title (mobile/tablet only) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex justify-center mb-16 lg:hidden"
        >
          <div className="relative">
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative overflow-hidden rounded-2xl shadow-2xl"
            >
              <img
                src={profileImage}
                alt="Vedansh Wandalkar"
                className="w-64 h-64 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </motion.div>
            {/* Subtle decorative elements */}
            <motion.div 
              className="absolute -top-2 -right-2 w-4 h-4 bg-accent/30 rounded-full blur-sm"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
            <motion.div 
              className="absolute -bottom-2 -left-2 w-3 h-3 bg-white/20 rounded-full blur-sm"
              animate={{ opacity: [0.7, 0.3, 0.7] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
          </div>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          
          {/* Hero Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="text-2xl md:text-3xl font-light text-gray-300 max-w-4xl mx-auto leading-relaxed">
              I design{" "}
              <motion.span 
                className="text-accent font-medium"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                digital experiences
              </motion.span>
              {" "}that make complex systems feel{" "}
              <motion.span 
                className="text-accent font-medium"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                intuitive
              </motion.span>
              .
            </p>
          </motion.div>

          {/* Stats Grid - Filtered to remove duplicate info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20"
          >
            {facts.filter(fact => 
              fact.label !== "Experience" && 
              fact.label !== "Based in"
            ).map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, type: "spring", stiffness: 200 }}
                  className="text-3xl font-bold text-accent mb-2"
                >
                  {fact.value}
                </motion.div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">{fact.label}</div>
                <div className="text-xs text-gray-500">{fact.unit}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* About Content - Improved Layout */}
          <div className="max-w-7xl mx-auto mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              
              {/* Left Column - Main Story & Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-3xl font-semibold mb-8 text-white">My Story</h3>
                  <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                    <p>
                      I'm a UX/UI designer creating digital products that are{" "}
                      <motion.span 
                        className="text-accent font-medium"
                        whileHover={{ scale: 1.05 }}
                      >
                        intuitive
                      </motion.span>
                      ,{" "}
                      <motion.span 
                        className="text-accent font-medium"
                        whileHover={{ scale: 1.05 }}
                      >
                        purposeful
                      </motion.span>
                      , and easy to use. My approach blends curiosity, clarity, and a focus on what truly matters to users.
                    </p>
                    <p>
                      Recently, I've been exploring how emerging{" "}
                      <motion.span 
                        className="text-accent"
                        whileHover={{ scale: 1.05 }}
                      >
                        AI tools
                      </motion.span>
                      {" "}can support—not replace—the design process. I'm interested in how they can deepen research, reveal patterns, and open up new ways of thinking creatively.
                    </p>
                    <motion.p
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="cursor-default"
                    >
                      Outside of work, I'm into books, football, and testing new design tools.
                    </motion.p>
                  </div>
                </div>

                {/* Profile Image - Positioned under story for web view */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="hidden lg:flex justify-start"
                >
                  <div className="relative">
                    <motion.div
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="relative overflow-hidden rounded-2xl shadow-2xl"
                    >
                      <img
                        src={profileImage}
                        alt="Vedansh Wandalkar"
                        className="w-64 h-64 object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    </motion.div>
                    {/* Subtle decorative elements */}
                    <motion.div 
                      className="absolute -top-2 -right-2 w-4 h-4 bg-accent/30 rounded-full blur-sm"
                      animate={{ opacity: [0.3, 0.7, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    ></motion.div>
                    <motion.div 
                      className="absolute -bottom-2 -left-2 w-3 h-3 bg-white/20 rounded-full blur-sm"
                      animate={{ opacity: [0.7, 0.3, 0.7] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    ></motion.div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Column - Quick Info & Highlights */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ delay: 1.0, duration: 0.8 }}
                className="space-y-8"
              >
                {/* Quick Info Cards */}
                <div className="space-y-6">
                  <h4 className="text-xl font-semibold text-white mb-6">At a Glance</h4>
                  
                  <div className="bg-gradient-to-r from-accent/10 to-white/5 border border-accent/20 rounded-xl p-6">
                    <div className="text-sm text-gray-400 uppercase tracking-wider mb-2">Experience</div>
                    <div className="text-2xl font-semibold text-white">5+ Years</div>
                    <div className="text-sm text-gray-400">UX/UI Design & Product Strategy</div>
                  </div>

                  <div className="bg-gradient-to-r from-white/5 to-accent/10 border border-white/10 rounded-xl p-6">
                    <div className="text-sm text-gray-400 uppercase tracking-wider mb-2">Focus Areas</div>
                    <div className="space-y-2">
                      <div className="text-accent font-medium">• Enterprise Applications</div>
                      <div className="text-accent font-medium">• Mobile-First Design</div>
                      <div className="text-accent font-medium">• AI-Enhanced Workflows</div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-accent/5 to-white/10 border border-white/10 rounded-xl p-6">
                    <div className="text-sm text-gray-400 uppercase tracking-wider mb-2">Location</div>
                    <div className="text-xl font-semibold text-white">Bangalore, India</div>
                    <div className="text-sm text-gray-400">Available for remote collaboration</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Books Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.6 }}
                className="inline-block mb-4"
              >
                <Book className="w-8 h-8 text-accent" />
              </motion.div>
              <h3 className="text-3xl font-semibold text-white mb-4">Reading List</h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Books that have influenced my approach to design and shaped my perspective on problem-solving.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {books.map((book, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-default"
                >
                  <h4 className="font-semibold text-white mb-2">{book.title}</h4>
                  <p className="text-gray-400 text-sm">{book.author}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-center bg-gradient-to-r from-accent/10 to-white/5 border border-accent/20 rounded-2xl p-12"
          >
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                repeatDelay: 8 
              }}
              className="inline-block mb-6"
            >
              <Coffee className="w-12 h-12 text-accent" />
            </motion.div>
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 px-4 leading-tight">
              Let's create something 
              <motion.span 
                className="text-accent ml-2 block sm:inline"
                whileHover={{ scale: 1.05 }}
              >
                remarkable
              </motion.span>
            </h3>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto px-4 leading-relaxed">
              Ready to transform complex challenges into elegant solutions? I'm always excited to discuss new projects and possibilities.
            </p>
            <motion.a
              href="mailto:vedansh.wandalkar@gmail.com?subject=Let's%20create%20something%20remarkable"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-accent hover:bg-accent/90 text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start a conversation
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}