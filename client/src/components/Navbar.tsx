import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
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

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isProjectPage) return;

    const sectionIds = ["projects", "decisions", "about"];
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 180;
      let currentSection: string | null = null;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = id;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    handleScrollSpy();
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, [isProjectPage]);

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
                  className={`transition-colors duration-200 text-sm font-medium tracking-wide relative group py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blush/80 rounded-sm ${
                    activeSection === "projects" ? "text-[#F5F4F6]" : "text-[#AAA7AE] hover:text-[#F5F4F6]"
                  }`}
                >
                  Projects
                  <span
                    className={`absolute -bottom-0.5 left-0 h-[1.5px] bg-blush transition-all duration-200 ease-out origin-left ${
                      activeSection === "projects" ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
                <a
                  href="#decisions"
                  className={`transition-colors duration-200 text-sm font-medium tracking-wide relative group py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blush/80 rounded-sm ${
                    activeSection === "decisions" ? "text-[#F5F4F6]" : "text-[#AAA7AE] hover:text-[#F5F4F6]"
                  }`}
                >
                  Decisions
                  <span
                    className={`absolute -bottom-0.5 left-0 h-[1.5px] bg-blush transition-all duration-200 ease-out origin-left ${
                      activeSection === "decisions" ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#AAA7AE] hover:text-[#F5F4F6] transition-colors duration-200 text-sm font-medium tracking-wide relative group py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blush/80 rounded-sm"
                >
                  Resume
                  <span className="absolute -bottom-0.5 left-0 w-0 group-hover:w-full h-[1.5px] bg-blush transition-all duration-200 ease-out origin-left" />
                </a>
                <a
                  href="#about"
                  className={`transition-colors duration-200 text-sm font-medium tracking-wide relative group py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blush/80 rounded-sm ${
                    activeSection === "about" ? "text-[#F5F4F6]" : "text-[#AAA7AE] hover:text-[#F5F4F6]"
                  }`}
                >
                  About
                  <span
                    className={`absolute -bottom-0.5 left-0 h-[1.5px] bg-blush transition-all duration-200 ease-out origin-left ${
                      activeSection === "about" ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              </nav>
              <a
                href="mailto:vedansh.wandalkar@gmail.com"
                className="btn-tactile bg-blush text-ink font-medium text-xs uppercase tracking-wider px-4 py-2 rounded-md shadow-sm hover:bg-[#edd8d1] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blush"
              >
                Get in touch
              </a>
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-6">
              <Link href="/">
                <span className="text-[#AAA7AE] hover:text-[#F5F4F6] transition-colors duration-200 flex items-center gap-2 cursor-pointer text-sm font-medium group">
                  <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
                  Back to Home
                </span>
              </Link>
              <Link href="/#projects">
                <span className="text-[#AAA7AE] hover:text-[#F5F4F6] transition-colors duration-200 cursor-pointer text-sm font-medium">
                  All Projects
                </span>
              </Link>
            </div>
          )}
          {/* Mobile menu button */}
          <button
            className="md:hidden text-[#F5F4F6] hover:text-blush transition-colors p-1.5 rounded focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blush active:scale-95"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
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
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-[#181719]/95 backdrop-blur-md border-b border-white/10 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col space-y-4">
              {!isProjectPage ? (
                <>
                  <a
                    href="#projects"
                    className="text-[#F5F4F6] text-base font-medium py-2 hover:text-blush transition-colors border-b border-white/5 active:text-blush"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Projects
                  </a>
                  <a
                    href="#decisions"
                    className="text-[#F5F4F6] text-base font-medium py-2 hover:text-blush transition-colors border-b border-white/5 active:text-blush"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Decisions
                  </a>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F5F4F6] text-base font-medium py-2 hover:text-blush transition-colors border-b border-white/5 active:text-blush"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Resume
                  </a>
                  <a
                    href="#about"
                    className="text-[#F5F4F6] text-base font-medium py-2 hover:text-blush transition-colors border-b border-white/5 active:text-blush"
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
