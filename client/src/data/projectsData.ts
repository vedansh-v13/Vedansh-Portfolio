import React from "react";

// Project type definition for better TypeScript support
export interface Project {
  id?: string;      // Optional ID for direct URL linking
  title: string;
  category: string;
  description: string;
  icon: React.ReactElement[];
  image?: string;   // Optional image URL property
  comingSoon?: boolean; // Indicates if the project is coming soon
  caseStudyUrl?: string; // Optional URL to dedicated case study page
}

export const projectsData: Project[] = [
  {
    id: "bluejeans-verizon",
    title: "BlueJeans Conference",
    category: "Video Conferencing",
    description: "Redesigned Verizon's virtual events platform",
    icon: [
      React.createElement("rect", { key: 1, x: "50", y: "80", width: "300", height: "240", rx: "20", fill: "#0a0a0a", stroke: "#0066cc", strokeWidth: "3" }),
      React.createElement("rect", { key: 2, x: "70", y: "100", width: "260", height: "35", rx: "8", fill: "#0066cc" }),
      React.createElement("text", { key: 3, x: "200", y: "122", fontSize: "14", fill: "#ffffff", textAnchor: "middle", fontFamily: "Arial, sans-serif", fontWeight: "bold" }, "BlueJeans Conference"),
      React.createElement("rect", { key: 4, x: "80", y: "150", width: "70", height: "55", rx: "8", fill: "#2a2a2a", stroke: "#444", strokeWidth: "1" }),
      React.createElement("rect", { key: 5, x: "165", y: "150", width: "70", height: "55", rx: "8", fill: "#2a2a2a", stroke: "#444", strokeWidth: "1" }),
      React.createElement("rect", { key: 6, x: "250", y: "150", width: "70", height: "55", rx: "8", fill: "#2a2a2a", stroke: "#444", strokeWidth: "1" }),
      React.createElement("circle", { key: 7, cx: "115", cy: "177", r: "15", fill: "#ff6b6b" }),
      React.createElement("circle", { key: 8, cx: "200", cy: "177", r: "15", fill: "#51cf66" }),
      React.createElement("circle", { key: 9, cx: "285", cy: "177", r: "15", fill: "#ffd43b" }),
      React.createElement("rect", { key: 10, x: "70", y: "220", width: "260", height: "80", rx: "12", fill: "#1a1a1a", stroke: "#444", strokeWidth: "1" }),
      React.createElement("rect", { key: 11, x: "90", y: "240", width: "220", height: "12", rx: "6", fill: "#666" }),
      React.createElement("rect", { key: 12, x: "90", y: "260", width: "160", height: "12", rx: "6", fill: "#666" }),
      React.createElement("circle", { key: 13, cx: "280", cy: "275", r: "8", fill: "#0066cc" })
    ]
  },
  {
    id: "verizon-uccaas",
    title: "UCaaS [Verizon]",
    category: "Unified Communications",
    description: "An all-in-one communication platform",
    icon: [
      // Background
      React.createElement("rect", { key: 1, x: "50", y: "60", width: "300", height: "280", rx: "20", fill: "#0a0a0a", stroke: "#ff0000", strokeWidth: "2" }),
      
      // Header
      React.createElement("rect", { key: 2, x: "70", y: "80", width: "260", height: "30", rx: "6", fill: "#ff0000" }),
      React.createElement("text", { key: 3, x: "200", y: "100", fontSize: "12", fill: "#ffffff", textAnchor: "middle", fontFamily: "Arial, sans-serif", fontWeight: "bold" }, "Verizon UCaaS Mobile"),
      
      // iPhone (iOS) - Left side
      React.createElement("rect", { key: 4, x: "80", y: "130", width: "90", height: "180", rx: "20", fill: "#1a1a1a", stroke: "#666", strokeWidth: "2" }),
      React.createElement("rect", { key: 5, x: "85", y: "145", width: "80", height: "15", rx: "3", fill: "#ff0000" }),
      React.createElement("text", { key: 6, x: "125", y: "154", fontSize: "8", fill: "#ffffff", textAnchor: "middle", fontFamily: "Arial, sans-serif" }, "iOS"),
      React.createElement("rect", { key: 7, x: "90", y: "170", width: "70", height: "120", rx: "8", fill: "#2a2a2a" }),
      React.createElement("circle", { key: 8, cx: "125", cy: "200", r: "8", fill: "#00ff00" }),
      React.createElement("rect", { key: 9, x: "95", y: "220", width: "60", height: "6", rx: "3", fill: "#666" }),
      React.createElement("rect", { key: 10, x: "95", y: "235", width: "45", height: "6", rx: "3", fill: "#666" }),
      React.createElement("rect", { key: 11, x: "95", y: "250", width: "35", height: "15", rx: "4", fill: "#ff0000" }),
      React.createElement("circle", { key: 12, cx: "125", cy: "295", r: "12", fill: "#333", stroke: "#666", strokeWidth: "1" }),
      
      // Android - Right side
      React.createElement("rect", { key: 13, x: "230", y: "130", width: "90", height: "180", rx: "18", fill: "#1a1a1a", stroke: "#666", strokeWidth: "2" }),
      React.createElement("rect", { key: 14, x: "235", y: "145", width: "80", height: "15", rx: "3", fill: "#34d399" }),
      React.createElement("text", { key: 15, x: "275", y: "154", fontSize: "8", fill: "#ffffff", textAnchor: "middle", fontFamily: "Arial, sans-serif" }, "Android"),
      React.createElement("rect", { key: 16, x: "240", y: "170", width: "70", height: "120", rx: "8", fill: "#2a2a2a" }),
      React.createElement("circle", { key: 17, cx: "275", cy: "200", r: "8", fill: "#00ff00" }),
      React.createElement("rect", { key: 18, x: "245", y: "220", width: "60", height: "6", rx: "3", fill: "#666" }),
      React.createElement("rect", { key: 19, x: "245", y: "235", width: "45", height: "6", rx: "3", fill: "#666" }),
      React.createElement("rect", { key: 20, x: "245", y: "250", width: "35", height: "15", rx: "4", fill: "#34d399" }),
      React.createElement("rect", { key: 21, x: "245", y: "295", width: "60", height: "8", rx: "4", fill: "#333" }),
      React.createElement("circle", { key: 22, cx: "255", cy: "299", r: "3", fill: "#666" }),
      React.createElement("circle", { key: 23, cx: "275", cy: "299", r: "3", fill: "#666" }),
      React.createElement("circle", { key: 24, cx: "295", cy: "299", r: "3", fill: "#666" })
    ]
  },
  {
    id: "inaam-application",
    title: "Inaam, Application",
    category: "Mobile App",
    description: "Loyalty Program - App",
    icon: [
      React.createElement("rect", { key: 1, x: "80", y: "100", width: "240", height: "320", rx: "30", fill: "#1a1a1a", stroke: "#333", strokeWidth: "3" }),
      React.createElement("rect", { key: 2, x: "100", y: "130", width: "200", height: "40", rx: "6", fill: "#f59e0b" }),
      React.createElement("rect", { key: 3, x: "110", y: "190", width: "180", height: "120", rx: "8", fill: "#374151" }),
      React.createElement("circle", { key: 4, cx: "200", cy: "250", r: "20", fill: "#10b981" }),
      React.createElement("text", { key: 5, x: "200", y: "150", fontSize: "14", fill: "#ffffff", textAnchor: "middle", fontFamily: "Arial" }, "INAAM"),
      React.createElement("text", { key: 6, x: "200", y: "255", fontSize: "12", fill: "#ffffff", textAnchor: "middle", fontFamily: "Arial" }, "★"),
      React.createElement("rect", { key: 7, x: "110", y: "330", width: "180", height: "15", rx: "8", fill: "#374151" }),
      React.createElement("rect", { key: 8, x: "110", y: "355", width: "120", height: "15", rx: "8", fill: "#374151" }),
      React.createElement("rect", { key: 9, x: "240", y: "355", width: "50", height: "15", rx: "8", fill: "#10b981" })
    ]
  },
  {
    id: "omnycomm-ecommerce",
    title: "Omnycomm - Ecommerce",
    category: "E-commerce Platform",
    description: "Everything you need to sell online",
    icon: [
      // Browser window frame
      React.createElement("rect", { key: 1, x: "40", y: "60", width: "320", height: "280", rx: "12", fill: "#0a0a0a", stroke: "#333", strokeWidth: "2" }),
      
      // Browser header/tab bar
      React.createElement("rect", { key: 2, x: "40", y: "60", width: "320", height: "35", rx: "12", fill: "#1a1a1a" }),
      React.createElement("circle", { key: 3, cx: "55", cy: "77", r: "4", fill: "#ff5f56" }),
      React.createElement("circle", { key: 4, cx: "70", cy: "77", r: "4", fill: "#ffbd2e" }),
      React.createElement("circle", { key: 5, cx: "85", cy: "77", r: "4", fill: "#27ca3f" }),
      React.createElement("rect", { key: 6, x: "110", y: "70", width: "180", height: "14", rx: "7", fill: "#333" }),
      React.createElement("text", { key: 7, x: "200", y: "80", fontSize: "8", fill: "#888", textAnchor: "middle", fontFamily: "Arial, sans-serif" }, "omnycomm.com/store"),
      
      // Navigation bar
      React.createElement("rect", { key: 8, x: "50", y: "105", width: "300", height: "25", rx: "4", fill: "#059669" }),
      React.createElement("text", { key: 9, x: "200", y: "120", fontSize: "10", fill: "#ffffff", textAnchor: "middle", fontFamily: "Arial, sans-serif", fontWeight: "bold" }, "Omnycomm E-commerce Platform"),
      
      // Main content area with product grid
      React.createElement("rect", { key: 10, x: "60", y: "140", width: "280", height: "180", rx: "8", fill: "#f8f9fa" }),
      
      // Product cards
      React.createElement("rect", { key: 11, x: "70", y: "150", width: "80", height: "70", rx: "6", fill: "#ffffff", stroke: "#e5e7eb", strokeWidth: "1" }),
      React.createElement("rect", { key: 12, x: "160", y: "150", width: "80", height: "70", rx: "6", fill: "#ffffff", stroke: "#e5e7eb", strokeWidth: "1" }),
      React.createElement("rect", { key: 13, x: "250", y: "150", width: "80", height: "70", rx: "6", fill: "#ffffff", stroke: "#e5e7eb", strokeWidth: "1" }),
      
      // Product images (placeholders)
      React.createElement("rect", { key: 14, x: "75", y: "155", width: "70", height: "40", rx: "4", fill: "#e5e7eb" }),
      React.createElement("rect", { key: 15, x: "165", y: "155", width: "70", height: "40", rx: "4", fill: "#e5e7eb" }),
      React.createElement("rect", { key: 16, x: "255", y: "155", width: "70", height: "40", rx: "4", fill: "#e5e7eb" }),
      
      // Product prices
      React.createElement("text", { key: 17, x: "110", y: "210", fontSize: "8", fill: "#059669", textAnchor: "middle", fontFamily: "Arial, sans-serif", fontWeight: "bold" }, "$29.99"),
      React.createElement("text", { key: 18, x: "200", y: "210", fontSize: "8", fill: "#059669", textAnchor: "middle", fontFamily: "Arial, sans-serif", fontWeight: "bold" }, "$49.99"),
      React.createElement("text", { key: 19, x: "290", y: "210", fontSize: "8", fill: "#059669", textAnchor: "middle", fontFamily: "Arial, sans-serif", fontWeight: "bold" }, "$19.99"),
      
      // Second row of products
      React.createElement("rect", { key: 20, x: "70", y: "240", width: "80", height: "70", rx: "6", fill: "#ffffff", stroke: "#e5e7eb", strokeWidth: "1" }),
      React.createElement("rect", { key: 21, x: "160", y: "240", width: "80", height: "70", rx: "6", fill: "#ffffff", stroke: "#e5e7eb", strokeWidth: "1" }),
      React.createElement("rect", { key: 22, x: "250", y: "240", width: "80", height: "70", rx: "6", fill: "#ffffff", stroke: "#e5e7eb", strokeWidth: "1" }),
      
      React.createElement("rect", { key: 23, x: "75", y: "245", width: "70", height: "40", rx: "4", fill: "#e5e7eb" }),
      React.createElement("rect", { key: 24, x: "165", y: "245", width: "70", height: "40", rx: "4", fill: "#e5e7eb" }),
      React.createElement("rect", { key: 25, x: "255", y: "245", width: "70", height: "40", rx: "4", fill: "#e5e7eb" }),
      
      React.createElement("text", { key: 26, x: "110", y: "300", fontSize: "8", fill: "#059669", textAnchor: "middle", fontFamily: "Arial, sans-serif", fontWeight: "bold" }, "$39.99"),
      React.createElement("text", { key: 27, x: "200", y: "300", fontSize: "8", fill: "#059669", textAnchor: "middle", fontFamily: "Arial, sans-serif", fontWeight: "bold" }, "$24.99"),
      React.createElement("text", { key: 28, x: "290", y: "300", fontSize: "8", fill: "#059669", textAnchor: "middle", fontFamily: "Arial, sans-serif", fontWeight: "bold" }, "$59.99"),
      
      // Shopping cart icon
      React.createElement("circle", { key: 29, cx: "320", cy: "115", r: "8", fill: "#ff6b6b" }),
      React.createElement("text", { key: 30, x: "320", y: "119", fontSize: "8", fill: "#ffffff", textAnchor: "middle", fontFamily: "Arial, sans-serif" }, "3")
    ]
  }
];
