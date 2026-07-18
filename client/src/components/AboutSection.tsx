import { motion, useInView } from "framer-motion";
import { Book, Coffee, ArrowRight } from "lucide-react";
import { useRef } from "react";
import profileImage from "@/assets/images/vedansh-profile.jpg";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
        
        <div className="max-w-7xl mx-auto mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              <h2 className="text-xl md:text-2xl font-light text-white leading-relaxed">
                Five years, four industries that don't talk to each other: wealth management, enterprise software, agriculture, AI. The domains change. The problem doesn't: helping people understand complex information so they can make confident decisions.
              </h2>
              
              <p className="text-xl md:text-2xl font-light text-gray-300 leading-relaxed">
                I learn by{" "}
                <motion.span 
                  className="text-accent font-medium inline-block"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  doing the work
                </motion.span>
                , not by theorising about it first. I design products where thoughtful execution is what makes people trust a complex system enough to use it.
              </p>
            </motion.div>

            {/* Right Column - Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex justify-center lg:justify-end"
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
                    className="w-full max-w-md h-auto aspect-[4/5] object-cover object-center"
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

          </div>
        </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="text-center bg-gradient-to-r from-accent/10 to-white/5 border border-accent/20 rounded-2xl p-6 sm:p-8 md:p-12 mb-20"
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
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 leading-tight">
              Working on something that needs this?
            </h3>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              I'm looking for new roles. If the problem involves people trying to trust a complicated system, I'd like to hear about it.
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

          {/* Books Section (Moved to bottom) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1.2, duration: 0.8 }}
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
                Books that influence how I design and solve problems.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {books.map((book, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-default"
                >
                  <h4 className="font-semibold text-white mb-2">{book.title}</h4>
                  <p className="text-gray-400 text-sm">{book.author}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

      </div>
    </section>
  );
}