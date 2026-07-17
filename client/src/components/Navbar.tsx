import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logoImage from "@/assets/images/vedansh-profile.jpg";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const isProjectPage = location.startsWith('/projects/');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-md border-b border-border/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center relative">
        <div className="flex items-center">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer group">
              {/* Logo Icon */}
              <div className="relative">
                <div className="w-10 h-10 rounded-lg overflow-hidden ring-1 ring-white/20 group-hover:ring-accent/40 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <img 
                    src={logoImage} 
                    alt="Vedansh Wandalkar"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    style={{ transform: 'scale(1.2)' }}
                  />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent/80 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </div>
              
              {/* Brand Text */}
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-tight group-hover:text-gray-300 transition-colors duration-300">
                  Vedansh
                </span>
                <span className="text-gray-400 text-xs font-medium -mt-1 hidden sm:block">
                  Product Designer
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Right side navigation */}
        <div className="flex items-center gap-8">
          {!isProjectPage ? (
            <div className="hidden md:flex items-center gap-8">
              <nav className="flex items-center gap-6">
                <a
                  href="#projects"
                  className="text-white/80 hover:text-white transition-all duration-300 text-sm font-medium relative group"
                >
                  Projects
                  <div className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-px bg-accent transition-all duration-300"></div>
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-all duration-300 text-sm font-medium relative group"
                >
                  Resume
                  <div className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-px bg-accent transition-all duration-300"></div>
                </a>
                <a
                  href="#about"
                  className="text-white/80 hover:text-white transition-all duration-300 text-sm font-medium relative group"
                >
                  About
                  <div className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-px bg-accent transition-all duration-300"></div>
                </a>
              </nav>
              <motion.a
                href="mailto:vedansh.wandalkar@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent/20 hover:bg-accent/30 border border-accent/30 hover:border-accent/50 px-4 py-2 rounded-full text-accent font-medium text-sm transition-all duration-300 backdrop-blur-sm"
              >
                Get in touch
              </motion.a>
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-6">
              <Link href="/">
                <motion.span 
                  whileHover={{ x: -2 }}
                  className="text-white/80 hover:text-white transition-colors flex items-center gap-2 cursor-pointer text-sm font-medium"
                >
                  <ArrowLeft size={16} />
                  Back to Home
                </motion.span>
              </Link>
              <Link href="/#projects">
                <span className="text-white/80 hover:text-white transition-colors cursor-pointer text-sm font-medium">
                  All Projects
                </span>
              </Link>
            </div>
          )}
          {/* Mobile menu button */}
          <button
            className="md:hidden text-white hover:text-accent transition-colors focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden relative overflow-hidden backdrop-blur-md border-b border-border/30"
            style={{
              background: 'linear-gradient(180deg, rgba(15, 15, 15, 0.98) 0%, rgba(30, 15, 40, 0.95) 50%, rgba(45, 25, 60, 0.92) 100%)'
            }}
          >
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full" style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                                  radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
                backgroundSize: '20px 20px'
              }}></div>
            </div>
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-4 relative z-10">
              {!isProjectPage ? (
                <>
                  <a
                    href="#projects"
                    className="text-white py-2 hover:text-accent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Projects
                  </a>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white py-2 hover:text-accent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Resume
                  </a>
                  <a
                    href="#about"
                    className="text-white py-2 hover:text-accent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </a>
                  <a
                    href="mailto:vedanshwandalkar@gmail.com"
                    className="text-white py-2 hover:text-accent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get in touch
                  </a>
                </>
              ) : (
                <>
                  <Link href="/">
                    <span 
                      className="text-white py-2 hover:text-accent transition-colors flex items-center gap-1 cursor-pointer"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <ArrowLeft size={16} />
                      <span>Back to Home</span>
                    </span>
                  </Link>
                  <Link href="/#projects">
                    <span
                      className="text-white py-2 hover:text-accent transition-colors cursor-pointer"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      View all projects
                    </span>
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
