import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import SamuraiSwordDivider from "../components/SamuraiSwordDivider";
import ProjectShowcase from "../components/ProjectShowcase";
import ServicesSection from "../components/ServicesSection";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";

export default function Home() {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="overflow-x-hidden"
    >
      <Navbar />
      <HeroSection />
      <SamuraiSwordDivider />
      <ProjectShowcase />
      <ServicesSection />
      <AboutSection />
      <Footer />
    </motion.div>
  );
}
