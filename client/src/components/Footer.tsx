import { Link } from "wouter";
import { motion } from "framer-motion";
import { Linkedin, Instagram, Mail, Phone, MapPin, ArrowUpRight, Download } from "lucide-react";
import logoImage from "@assets/Vedansh commission copy_1751925553130.jpg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Instagram size={20} />,
      href: "https://www.instagram.com/overcoming.eternal.recurrence/",
      label: "Instagram",
      handle: "@overcoming.eternal.recurrence"
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/vedansh-wandalkar/",
      label: "LinkedIn",
      handle: "vedansh-wandalkar"
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:vedansh.wandalkar@gmail.com",
      label: "Email",
      handle: "vedansh.wandalkar@gmail.com"
    }
  ];

  const navigationLinks = [
    { label: "Selected Work", href: "#projects" },
    { label: "Design Services", href: "#services" },
    { label: "About Me", href: "#about" },
    { label: "Get in Touch", href: "#contact" }
  ];

  const services = [
    "UI/UX Design",
    "Creative Direction", 
    "Mobile App Design",
    "Enterprise Solutions",
    "Design Systems",
    "User Research"
  ];

  return (
    <footer id="about" className="relative py-12 bg-gradient-to-b from-secondary to-black border-t border-white/10 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-10 h-10 rounded-lg overflow-hidden ring-1 ring-accent/30 shadow-lg">
                <img 
                  src={logoImage} 
                  alt="Vedansh Wandalkar"
                  className="w-full h-full object-cover"
                  style={{ transform: 'scale(1.2)' }}
                />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Vedansh Wandalkar
              </span>
            </motion.div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed text-sm">
              I'm a UX/UI designer passionate about creating meaningful digital experiences that solve real problems. I specialize in enterprise solutions and design systems.
            </p>
            <div className="flex items-center gap-4">
              <motion.a
                href="https://www.instagram.com/overcoming.eternal.recurrence/"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 bg-white/5 hover:bg-accent/20 border border-white/10 hover:border-accent/30 rounded-lg flex items-center justify-center text-gray-400 hover:text-accent transition-all duration-300"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={16} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/vedansh-wandalkar/"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 bg-white/5 hover:bg-accent/20 border border-white/10 hover:border-accent/30 rounded-lg flex items-center justify-center text-gray-400 hover:text-accent transition-all duration-300"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={16} />
              </motion.a>
              <motion.a
                href="mailto:vedansh.wandalkar@gmail.com"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 bg-white/5 hover:bg-accent/20 border border-white/10 hover:border-accent/30 rounded-lg flex items-center justify-center text-gray-400 hover:text-accent transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={16} />
              </motion.a>
            </div>
          </div>

          {/* Services Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5">
              {["UI/UX Design", "Creative Direction", "Mobile App Design", "Enterprise Solutions"].map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="text-gray-400 hover:text-accent transition-colors text-sm flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-gray-600 group-hover:bg-accent rounded-full transition-colors"></div>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Featured Work Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Featured Work</h4>
            <ul className="space-y-2.5">
              {[
                { name: "UCaaS [Verizon]", url: "/projects/verizon-uccaas" },
                { name: "BlueJeans Conference", url: "/projects/bluejeans-verizon" },
                { name: "Inaam Application", url: "/projects/inaam-application" },
                { name: "Omnycomm", url: "/projects/omnycomm-ecommerce" }
              ].map((project, index) => (
                <li key={index}>
                  <a 
                    href={project.url} 
                    className="text-gray-400 hover:text-accent transition-colors text-sm flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-gray-600 group-hover:bg-accent rounded-full transition-colors"></div>
                    {project.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2.5">
              <li>
                <a 
                  href="tel:+917022900324" 
                  className="text-gray-400 hover:text-accent transition-colors text-sm flex items-center gap-2 group"
                >
                  <div className="w-1 h-1 bg-gray-600 group-hover:bg-accent rounded-full transition-colors"></div>
                  +91 70229 00324
                </a>
              </li>
              <li>
                <a 
                  href="mailto:vedansh.wandalkar@gmail.com" 
                  className="text-gray-400 hover:text-accent transition-colors text-sm flex items-center gap-2 group"
                >
                  <div className="w-1 h-1 bg-gray-600 group-hover:bg-accent rounded-full transition-colors"></div>
                  vedansh.wandalkar@gmail.com
                </a>
              </li>
              <li className="text-gray-400 text-sm flex items-center gap-2">
                <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                Bangalore, India
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="flex items-center gap-4">
            <p className="text-gray-500 text-xs">
              © {currentYear} Vedansh Wandalkar. All rights reserved.
            </p>
            <div className="hidden md:flex items-center gap-1 text-xs text-green-400">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
              Available for projects
            </div>
          </div>
          
          <div className="flex items-center gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-accent transition-colors relative group">
              Privacy
              <div className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-px bg-accent transition-all duration-300"></div>
            </a>
            <a href="#" className="hover:text-accent transition-colors relative group">
              Terms
              <div className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-px bg-accent transition-all duration-300"></div>
            </a>
            <a href="#" className="hover:text-accent transition-colors relative group">
              Cookies
              <div className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-px bg-accent transition-all duration-300"></div>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
