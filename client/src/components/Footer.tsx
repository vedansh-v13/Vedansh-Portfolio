import { motion } from "framer-motion";
import { Linkedin, Instagram, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-background border-t border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-400 text-sm font-medium tracking-wide">
            © {currentYear} Vedansh Wandalkar.
          </div>
          
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/overcoming.eternal.recurrence/"
              className="text-gray-500 hover:text-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/vedansh-wandalkar/"
              className="text-gray-500 hover:text-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:vedansh.wandalkar@gmail.com"
              className="text-gray-500 hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
