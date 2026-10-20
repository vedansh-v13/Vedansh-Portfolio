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
      className="relative"
    >
      <Helmet>
        <title>Vedansh Wandalkar — Product Designer</title>
        <meta name="description" content="Product designer working across fintech, enterprise software, operational systems, and AI-native products. Designing products that reduce uncertainty." />
        <meta property="og:title" content="Vedansh Wandalkar — Product Designer" />
        <meta property="og:description" content="Product designer working across fintech, enterprise software, operational systems, and AI-native products. Designing products that reduce uncertainty." />
        <meta property="og:image" content="https://vedanshwandalkar.com/og-image.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vedanshwandalkar.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vedansh Wandalkar — Product Designer" />
        <meta name="twitter:description" content="Product designer working across fintech, enterprise software, operational systems, and AI-native products. Designing products that reduce uncertainty." />
        <meta name="twitter:image" content="https://vedanshwandalkar.com/og-image.png" />
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
