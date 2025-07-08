import React from "react";

// Define the types for project details
export interface ProjectPainPoint {
  title: string;
  description: string;
  icon?: React.ReactElement;
}

export interface ProjectSolution {
  title: string;
  description: string;
  image?: string; // URL to solution image
}

export interface ProjectScreenshot {
  url: string;
  alt: string;
  caption?: string;
  type?: 'desktop' | 'mobile'; // Specify if it's a mobile or desktop screenshot
}

export interface ProjectTestimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
  image?: string; // URL to author image or company logo
}

export interface ProjectMetric {
  value: string;
  label: string;
  icon?: React.ReactElement;
}

export interface TechStackItem {
  name: string;
  logo?: string; // URL to logo image or icon
  category: 'design' | 'development' | 'analytics' | 'integration' | 'llm model' | 'AI-Image model';
}

export interface ProjectDetails {
  id: string; // Unique identifier, also used for URL routing
  title: string;
  category: string;
  description: string;
  coverImage: string;
  date: string;
  metrics: ProjectMetric[];
  externalLink?: {
    url: string;
    label: string;
    type: 'web' | 'app_store' | 'play_store' | 'github';
  }; // External link to project website, app store, etc.
  videoUrl?: string; // YouTube embed URL (optional)
  screenshots: ProjectScreenshot[];
  problemDescription: string;
  painPoints: ProjectPainPoint[];
  solutionDescription: string;
  solutions: ProjectSolution[];
  techStack: TechStackItem[]; // Tech stack used in the project
  testimonial?: ProjectTestimonial;
}

// Project details for detailed case studies
export const projectDetailsData: Record<string, ProjectDetails> = {
  "inaam-application": {
    id: "inaam-application",
    title: "Inaam, Application",
    category: "Mobile App Design",
    description: "A comprehensive loyalty program mobile application designed to enhance customer engagement through rewards, points tracking, and personalized offers.",
    coverImage: "/images/INAAM_JNT.webp",
    date: "2022 - 2023",
    metrics: [],
    screenshots: [
      { url: "/images/Inaam 10.png", alt: "Inaam Mobile Interface", caption: "Clean mobile interface with intuitive navigation", type: "mobile" },
      { url: "/images/Inaam 11.png", alt: "Inaam App Features", caption: "Key features and functionality overview", type: "mobile" },
      { url: "/images/Inaam 7.png", alt: "Inaam User Experience", caption: "Streamlined user experience design", type: "mobile" },
      { url: "/images/Inaam 8.png", alt: "Inaam Interface Design", caption: "Modern interface design with clear visual hierarchy", type: "mobile" }
    ],
    problemDescription: "Traditional loyalty programs suffer from poor user engagement, complex point systems, and lack of personalization, leading to low adoption rates and customer churn.",
    painPoints: [
      {
        title: "Complex Point Systems",
        description: "Users struggled to understand how to earn and redeem points, leading to confusion and abandonment."
      },
      {
        title: "Generic Rewards",
        description: "One-size-fits-all rewards didn't match individual user preferences and spending patterns."
      },
      {
        title: "Poor Mobile Experience",
        description: "Existing mobile interfaces were cluttered and difficult to navigate on smaller screens."
      },
      {
        title: "Lack of Engagement",
        description: "Users forgot about the program and missed opportunities to earn or redeem points."
      }
    ],
    solutionDescription: "Designed an intuitive mobile-first loyalty application with personalized rewards, gamified engagement, and transparent point tracking to maximize user participation and satisfaction.",
    solutions: [
      {
        title: "Simplified Point Visualization",
        description: "Created clear, visual representations of point earning and redemption processes with progress indicators and achievement badges."
      },
      {
        title: "Personalized Recommendations",
        description: "Implemented AI-driven reward suggestions based on user behavior, purchase history, and preferences."
      },
      {
        title: "Mobile-Optimized Interface",
        description: "Designed touch-friendly interfaces with intuitive navigation and quick access to key features."
      },
      {
        title: "Smart Notifications",
        description: "Developed contextual push notifications for point expiry, new rewards, and special offers to drive engagement."
      }
    ],
    techStack: [
      { name: "Figma", category: "design" },
      { name: "Sketch", category: "design" },
      { name: "Principle", category: "design" },
      { name: "React Native", category: "development" },
      { name: "TypeScript", category: "development" },
      { name: "Firebase", category: "development" },
      { name: "Node.js", category: "development" },
      { name: "Google Analytics", category: "analytics" },
      { name: "Mixpanel", category: "analytics" }
    ]
  },
  "bluejeans-verizon": {
    id: "bluejeans-verizon",
    title: "BlueJeans Conference by Verizon",
    category: "Enterprise Communication Platform",
    description: "Redesigned and enhanced web, voice, and video collaboration platform enabling seamless hybrid meetings and large-scale interactive events for global teams.",
    coverImage: "/images/bluejeans-overview.png",
    date: "2022 - 2024",
    metrics: [],
    externalLink: {
      url: "https://www.verizon.com/business/en-nl/products/voice-collaboration/conferencing/web-voice-video/",
      label: "View Live Platform",
      type: "web"
    },
    screenshots: [
      { url: "/images/bluejeans-overview.png", alt: "Event Management Overview", caption: "Main expo dashboard with event statistics and management tools", type: "desktop" },
      { url: "/images/bluejeans-add-event.png", alt: "Add Event Interface", caption: "Event creation modal with keynote and session options", type: "desktop" },
      { url: "/images/bluejeans-calendar.png", alt: "Event Scheduling Calendar", caption: "Calendar view showing scheduled sessions and events", type: "desktop" },
      { url: "/images/bluejeans-config.png", alt: "Event Configuration Panel", caption: "Detailed event settings with host management and customization options", type: "desktop" },
      { url: "/images/bluejeans-form.png", alt: "Event Creation Form", caption: "Form interface for creating new events with scheduling and settings", type: "desktop" }
    ],
    problemDescription: "Companies faced significant challenges with hybrid and virtual meetings across diverse global teams. Organizations struggled with inconsistent user experiences across devices, lack of inclusive features for international collaboration, and difficulty hosting large-scale interactive events with meaningful engagement.",
    painPoints: [
      {
        title: "Inconsistent Multi-Device Experience",
        description: "Poor video/audio quality and interface inconsistencies across desktop, mobile, and conference room setups leading to frustrating user experiences."
      },
      {
        title: "Low Virtual Event Engagement",
        description: "Traditional platforms failed to maintain participant attention and interaction during large-scale virtual events and presentations."
      },
      {
        title: "Accessibility and Inclusion Barriers",
        description: "Lack of features supporting diverse participants including language barriers, accessibility needs, and varying technical capabilities."
      },
      {
        title: "Complex Manual Setup Processes",
        description: "Time-consuming meeting setups and suboptimal presenter tools reduced efficiency and created technical friction."
      }
    ],
    solutionDescription: "We redesigned and enhanced the BlueJeans Meetings and Events platform to deliver a comprehensive collaboration solution. The redesign focused on creating seamless multi-device experiences, implementing inclusive features for global teams, and building scalable event capabilities that could support massive interactive gatherings while maintaining high engagement levels.",
    solutions: [
      {
        title: "Cross-Platform HD Collaboration",
        description: "Implemented consistent high-quality audio/video and content sharing across desktop, mobile, and Meta Portal devices with optimized performance."
      },
      {
        title: "Inclusive Communication Tools",
        description: "Developed real-time multi-language closed captions, hide self-view options, breakout session management, and accessibility-focused interface design."
      },
      {
        title: "Smart Presenter Enhancement Suite",
        description: "Created auto-camera framing, virtual backgrounds, presenter overlay modes, and 'weather person mode' for professional presentation delivery."
      },
      {
        title: "Massive-Scale Event Platform",
        description: "Built scalable event infrastructure supporting up to 150,000 interactive participants with live polling, Q&A, and engagement analytics."
      }
    ],
    techStack: [
      { name: "Figma", category: "design" },
      { name: "Adobe XD", category: "design" },
      { name: "WebRTC", category: "development" },
      { name: "Native iOS", category: "development" },
      { name: "Native Android", category: "development" },
      { name: "Meta Portal SDK", category: "development" },
      { name: "AWS Transcribe", category: "integration" },
      { name: "RTMP Streaming", category: "development" },
      { name: "Custom Analytics APIs", category: "analytics" }
    ]
  },
  "verizon-uccaas": {
    id: "verizon-uccaas",
    title: "Verizon UCaaS Platform",
    category: "Unified Communications as a Service",
    description: "Comprehensive unified communications suite integrating messaging, voice, video, and mobile device security for global enterprise teams.",
    coverImage: "/images/uccaas-messages.png",
    date: "2021 - 2023",
    metrics: [],
    externalLink: {
      url: "https://www.verizon.com/business/en-sg/products/voice-collaboration/unified-communications/unified-communications-and-collaboration-as-a-service/",
      label: "View UCaaS Platform",
      type: "web"
    },
    screenshots: [
      { url: "/images/uccaas-messages.png", alt: "Messages Interface", caption: "Comprehensive messaging hub with conversation threads and quick message access", type: "mobile" },
      { url: "/images/uccaas-dm.png", alt: "Direct Messages", caption: "Personal messaging interface with real-time chat and conversation history", type: "mobile" },
      { url: "/images/uccaas-actions.png", alt: "Message Actions", caption: "Quick actions and message controls for enhanced communication workflow", type: "mobile" },
      { url: "/images/uccaas-channel.png", alt: "Channel Communications", caption: "Team channel interface with group messaging and collaboration tools", type: "mobile" },
      { url: "/images/uccaas-attachments.png", alt: "File Attachments", caption: "File sharing and attachment management within conversations", type: "mobile" },
      { url: "/images/ucaas-contact-profile.png", alt: "Contact Profile", caption: "Detailed contact information with integrated messaging, calling, and meeting capabilities", type: "mobile" },
      { url: "/images/ucaas-active-call.png", alt: "Active Call Interface", caption: "Full-featured call control with mute, keypad, speaker, hold, transfer, and video options", type: "mobile" },
      { url: "/images/ucaas-dialpad.png", alt: "Smart Dialpad", caption: "Advanced dialing interface with caller ID selection and company number management", type: "mobile" },
      { url: "/images/verizon-uccaas.png", alt: "UCaaS Dashboard", caption: "Unified communications platform overview showing integrated messaging and calling features", type: "mobile" }
    ],
    problemDescription: "Verizon's global teams relied on disparate communication tools that hindered real-time collaboration and created security vulnerabilities. Organizations struggled with multiple platforms causing confusion, security gaps in mobile device usage, and operational overhead from managing fragmented communication systems.",
    painPoints: [
      {
        title: "Fragmented Communication Tools",
        description: "Multiple platforms like Webex, Jabber, and conference bridges caused confusion and reduced productivity across global teams."
      },
      {
        title: "Mobile Security Vulnerabilities",
        description: "Lack of secure device management and compliance controls exposed enterprise data to security risks."
      },
      {
        title: "Operational Complexity",
        description: "Managing disparate systems increased IT overhead and created inconsistent user experiences across departments."
      },
      {
        title: "Collaboration Inefficiencies",
        description: "Tool-switching and management complexity reduced team responsiveness and hindered real-time collaboration."
      }
    ],
    solutionDescription: "We designed and implemented a comprehensive unified communications suite that consolidated all communication channels into a single platform. The solution integrated Cisco Jabber for messaging, Webex for video collaboration, and MobileIron for secure device management, creating a seamless experience for over 160 employees while securing 100K+ mobile devices across global endpoints.",
    solutions: [
      {
        title: "Unified Platform Integration",
        description: "Consolidated messaging, voice, and video into one platform using Cisco Jabber and Webex, eliminating tool-switching confusion."
      },
      {
        title: "Enterprise Mobile Security",
        description: "Implemented MobileIron for comprehensive device management, ensuring compliance and data protection across all mobile endpoints."
      },
      {
        title: "Scalable Audio Conferencing",
        description: "Deployed Cloud Connect Audio for seamless conferencing with native audio bridges supporting enterprise-scale meetings."
      },
      {
        title: "Centralized IT Management",
        description: "Created unified administration portal for IT teams to manage users, security policies, and system-wide configurations from one interface."
      }
    ],
    techStack: [
      { name: "Figma", category: "design" },
      { name: "Miro", category: "design" },
      { name: "Adobe XD", category: "design" },
      { name: "Cisco Jabber", category: "integration" },
      { name: "Webex", category: "integration" },
      { name: "MobileIron", category: "integration" },
      { name: "Android SDK", category: "development" },
      { name: "iOS SDK", category: "development" },
      { name: "Java", category: "development" },
      { name: "Swift", category: "development" },
      { name: "Enterprise APIs", category: "integration" },
      { name: "LDAP", category: "integration" }
    ]
  },

  "omnycomm-ecommerce": {
    id: "omnycomm-ecommerce",
    title: "Omnycomm - Ecommerce",
    category: "E-commerce Platform",
    description: "A comprehensive e-commerce solution designed to empower businesses with everything they need to sell online effectively.",
    coverImage: "/images/OmynComm_JNT.webp",
    date: "2023 - 2024",
    metrics: [],
    externalLink: {
      url: "https://omnycomm.com",
      label: "Visit Platform",
      type: "web"
    },
    screenshots: [
      { url: "/images/OmynComm_JNT.webp", alt: "Omnycomm Platform Overview", caption: "Comprehensive e-commerce platform with integrated tools and analytics", type: "desktop" }
    ],
    problemDescription: "Small and medium businesses struggle with complex, expensive e-commerce solutions that require technical expertise and significant upfront investment, limiting their ability to compete in the digital marketplace.",
    painPoints: [
      {
        title: "High Setup Costs",
        description: "Traditional e-commerce platforms require significant upfront investment and ongoing maintenance costs that small businesses can't afford."
      },
      {
        title: "Technical Complexity",
        description: "Most platforms require technical knowledge for setup, customization, and maintenance, creating barriers for non-technical business owners."
      },
      {
        title: "Limited Customization",
        description: "Cookie-cutter solutions don't allow businesses to create unique brand experiences that differentiate them from competitors."
      },
      {
        title: "Poor Mobile Experience",
        description: "Many platforms don't prioritize mobile-first design, resulting in poor conversion rates on mobile devices where most shopping happens."
      }
    ],
    solutionDescription: "Omnycomm provides an all-in-one, user-friendly e-commerce platform that combines powerful functionality with intuitive design, enabling businesses of all sizes to create professional online stores without technical expertise.",
    solutions: [
      {
        title: "Drag-and-Drop Store Builder",
        description: "Intuitive visual editor allows anyone to create professional storefronts without coding knowledge."
      },
      {
        title: "Mobile-First Design System",
        description: "All templates and components are designed mobile-first to ensure optimal performance across all devices."
      },
      {
        title: "Integrated Payment Gateway",
        description: "Seamless payment processing with multiple payment options and secure checkout experience."
      },
      {
        title: "Advanced Analytics Dashboard",
        description: "Comprehensive insights into sales, customer behavior, and business performance with actionable recommendations."
      }
    ],
    techStack: [
      { name: "Figma", category: "design" },
      { name: "Adobe XD", category: "design" },
      { name: "React", category: "development" },
      { name: "TypeScript", category: "development" },
      { name: "Node.js", category: "development" },
      { name: "PostgreSQL", category: "development" },
      { name: "Stripe", category: "integration" },
      { name: "AWS", category: "development" },
      { name: "Docker", category: "development" },
      { name: "Google Analytics", category: "analytics" }
    ]
  }
};