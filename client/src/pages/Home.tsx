import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <title>Vedansh Wandalkar - UX/UI Designer Portfolio</title>
        <meta name="description" content="Product Designer with 5+ years of experience crafting intuitive digital experiences. Specializing in enterprise solutions, UCaaS platforms, and AI integrated design workflows." />
        <meta property="og:title" content="Vedansh Wandalkar - UX/UI Designer Portfolio" />
        <meta property="og:description" content="Product Designer with 5+ years of experience crafting intuitive digital experiences. Specializing in enterprise solutions, UCaaS platforms, and AI integrated design workflows." />
        <meta property="og:image" content="https://vedanshwandalkar.com/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vedanshwandalkar.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vedansh Wandalkar - UX/UI Designer Portfolio" />
        <meta name="twitter:description" content="Product Designer with 5+ years of experience crafting intuitive digital experiences. Specializing in enterprise solutions, UCaaS platforms, and AI integrated design workflows." />
        <meta name="twitter:image" content="https://vedanshwandalkar.com/og-image.jpg" />
      </Helmet>
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
