import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
          ? "bg-[#181719]/90 backdrop-blur-md border-b border-white/10 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center relative">
        <div className="flex items-center">
          <Link href="/">
            <div className="flex items-baseline gap-2.5 cursor-pointer group py-1">
              <span className="text-[#F5F4F6] font-display font-medium text-base tracking-tight group-hover:text-blush transition-colors duration-200">
                Vedansh
              </span>
              <span className="text-[#AAA7AE] font-mono text-[11px] uppercase tracking-wider hidden sm:inline-block">
                / Product Designer
              </span>
            </div>
          </Link>
        </div>

        {/* Right side navigation */}
        <div className="flex items-center gap-6">
          {!isProjectPage ? (
            <div className="hidden md:flex items-center gap-8">
              <nav className="flex items-center gap-7">
                <a
                  href="#projects"
                  className="text-[#AAA7AE] hover:text-[#F5F4F6] transition-colors duration-200 text-sm font-medium tracking-wide relative group"
                >
                  Projects
                  <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-[1px] bg-blush transition-all duration-200"></span>
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#AAA7AE] hover:text-[#F5F4F6] transition-colors duration-200 text-sm font-medium tracking-wide relative group"
                >
                  Resume
                  <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-[1px] bg-blush transition-all duration-200"></span>
                </a>
                <a
                  href="#about"
                  className="text-[#AAA7AE] hover:text-[#F5F4F6] transition-colors duration-200 text-sm font-medium tracking-wide relative group"
                >
                  About
                  <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-[1px] bg-blush transition-all duration-200"></span>
                </a>
              </nav>
              <a
                href="mailto:vedansh.wandalkar@gmail.com"
                className="btn-tactile bg-blush text-ink font-medium text-xs uppercase tracking-wider px-4 py-2 rounded-md transition-all duration-150 shadow-sm hover:bg-[#edd8d1]"
              >
                Get in touch
              </a>
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-6">
              <Link href="/">
                <span className="text-[#AAA7AE] hover:text-[#F5F4F6] transition-colors flex items-center gap-2 cursor-pointer text-sm font-medium">
                  <ArrowLeft size={16} />
                  Back to Home
                </span>
              </Link>
              <Link href="/#projects">
                <span className="text-[#AAA7AE] hover:text-[#F5F4F6] transition-colors cursor-pointer text-sm font-medium">
                  All Projects
                </span>
              </Link>
            </div>
          )}
          {/* Mobile menu button */}
          <button
            className="md:hidden text-[#F5F4F6] hover:text-blush transition-colors p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
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
            className="md:hidden bg-[#181719] border-b border-white/10 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col space-y-4">
              {!isProjectPage ? (
                <>
                  <a
                    href="#projects"
                    className="text-[#F5F4F6] text-base font-medium py-2 hover:text-blush transition-colors border-b border-white/5"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Projects
                  </a>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F5F4F6] text-base font-medium py-2 hover:text-blush transition-colors border-b border-white/5"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Resume
                  </a>
                  <a
                    href="#about"
                    className="text-[#F5F4F6] text-base font-medium py-2 hover:text-blush transition-colors border-b border-white/5"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </a>
                  <a
                    href="mailto:vedansh.wandalkar@gmail.com"
                    className="btn-tactile inline-block text-center bg-blush text-ink font-medium text-sm py-2.5 px-4 rounded-md mt-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get in touch
                  </a>
                </>
              ) : (
                <>
                  <Link href="/">
                    <span 
                      className="text-[#F5F4F6] py-2 hover:text-blush transition-colors flex items-center gap-2 cursor-pointer text-base font-medium border-b border-white/5"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <ArrowLeft size={16} />
                      <span>Back to Home</span>
                    </span>
                  </Link>
                  <Link href="/#projects">
                    <span
                      className="text-[#F5F4F6] py-2 hover:text-blush transition-colors cursor-pointer text-base font-medium"
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
