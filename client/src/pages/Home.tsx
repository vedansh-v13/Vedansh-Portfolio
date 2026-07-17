import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import SamuraiSwordDivider from "../components/SamuraiSwordDivider";
import ProjectShowcase from "../components/ProjectShowcase";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import DecisionsSection from "../components/DecisionsSection";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="overflow-x-hidden"
    >
      <Helmet>
        <title>Vedansh Wandalkar - Product Designer Portfolio</title>
        <meta name="description" content="I design products across finance, enterprise software, and AI. I write about the gap between how systems are designed and how people actually use them." />
        <meta property="og:title" content="Vedansh Wandalkar - Product Designer Portfolio" />
        <meta property="og:description" content="I design products across finance, enterprise software, and AI. I write about the gap between how systems are designed and how people actually use them." />
        <meta property="og:image" content="https://vedanshwandalkar.com/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vedanshwandalkar.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vedansh Wandalkar - Product Designer Portfolio" />
        <meta name="twitter:description" content="I design products across finance, enterprise software, and AI. I write about the gap between how systems are designed and how people actually use them." />
        <meta name="twitter:image" content="https://vedanshwandalkar.com/og-image.jpg" />
      </Helmet>
      <Navbar />
      <HeroSection />
      <SamuraiSwordDivider />
      <ProjectShowcase />
      <DecisionsSection />
      <AboutSection />
      <Footer />
    </motion.div>
  );
}
