import {
  ImageIcon,
  Mic,
  BarChart3,
  MessageSquare,
  Zap,
  Workflow,
  Globe,
  Database,
  Video,
  Monitor,
  Smartphone,
  Palette,
  Users,
  Eye,
  Target
} from "lucide-react";
import React from "react";

export const servicesData = [
  {
    title: "UI/UX Design",
    description: "I create intuitive and impactful digital experiences through user-centered design principles",
    icon: React.createElement(Monitor, { className: "h-5 w-5 text-accent" }),
    features: ["User Research & Testing", "Wireframing & Prototyping", "Design Systems", "Interaction Design"],
    demoContent: "I provide comprehensive design solutions for web and mobile applications"
  },
  {
    title: "Creative Direction",
    description: "I lead design strategy and vision to deliver cohesive brand experiences across digital platforms",
    icon: React.createElement(Palette, { className: "h-5 w-5 text-accent" }),
    features: ["Brand Strategy", "Visual Identity", "Design Leadership", "Creative Consulting"],
    demoContent: "I offer strategic creative direction for How Iconic Design Studio and client projects"
  },
  {
    title: "Mobile App Design",
    description: "I design native and cross-platform mobile applications with focus on usability and engagement",
    icon: React.createElement(Smartphone, { className: "h-5 w-5 text-accent" }),
    features: ["iOS & Android Design", "Mobile-First Approach", "Touch Interactions", "Responsive Design"],
    demoContent: "I create native mobile experiences for loyalty programs and e-commerce platforms"
  },
  {
    title: "Enterprise Solutions",
    description: "I craft complex enterprise software interfaces that simplify workflows and boost productivity",
    icon: React.createElement(Users, { className: "h-5 w-5 text-accent" }),
    features: ["Enterprise UX", "Dashboard Design", "Workflow Optimization", "Scalable Systems"],
    demoContent: "I build enterprise communication platforms for Verizon and large-scale collaboration tools"
  },
  {
    title: "User Research",
    description: "I conduct comprehensive user research to inform design decisions and validate solutions",
    icon: React.createElement(Eye, { className: "h-5 w-5 text-accent" }),
    features: ["User Interviews", "Usability Testing", "Analytics Review", "Persona Development"],
    demoContent: "I provide data-driven insights to create user-centered design solutions"
  },
  {
    title: "Product Strategy",
    description: "I align design strategy with business goals to create successful digital products",
    icon: React.createElement(Target, { className: "h-5 w-5 text-accent" }),
    features: ["Product Planning", "Feature Prioritization", "Market Analysis", "Design-Business Alignment"],
    demoContent: "I deliver strategic product design for startups and established enterprises"
  }
];