import React from "react";

// Project type definition for better TypeScript support
export interface Project {
  id?: string;      // Optional ID for direct URL linking
  title: string;
  category: string;
  description: string;
  role: string;
  year: string;
  icon: React.ReactElement[];
  image?: string;
  comingSoon?: boolean;
  caseStudyUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: "tata-capital-wealth",
    title: "Tata Capital Wealth",
    category: "Wealth Management • FinTech • Product Design",
    description: "Led the redesign of Tata Capital's investment experience, making wealth management easier to understand and navigate.",
    role: "Lead Product Designer",
    year: "2025–2026",
    icon: [
      React.createElement("rect", { key: 1, x: "50", y: "60", width: "300", height: "280", rx: "20", fill: "#0a0a0a", stroke: "#1e40af", strokeWidth: "3" }),
      React.createElement("rect", { key: 2, x: "70", y: "80", width: "260", height: "30", rx: "6", fill: "#1e40af" }),
      React.createElement("text", { key: 3, x: "200", y: "100", fontSize: "11", fill: "#ffffff", textAnchor: "middle", fontFamily: "Arial, sans-serif", fontWeight: "bold" }, "Tata Capital Wealth"),
      React.createElement("rect", { key: 4, x: "130", y: "130", width: "140", height: "190", rx: "18", fill: "#1a1a1a", stroke: "#444", strokeWidth: "2" }),
      React.createElement("rect", { key: 5, x: "140", y: "145", width: "120", height: "20", rx: "4", fill: "#1e40af" }),
      React.createElement("rect", { key: 6, x: "145", y: "175", width: "110", height: "35", rx: "6", fill: "#2a2a2a", stroke: "#444", strokeWidth: "1" }),
      React.createElement("text", { key: 7, x: "200", y: "197", fontSize: "10", fill: "#ffffff", textAnchor: "middle", fontFamily: "Arial, sans-serif", fontWeight: "bold" }, "₹1.3L"),
      React.createElement("polyline", { key: 8, points: "150,260 170,240 190,250 210,220 230,230 250,210", fill: "none", stroke: "#3b82f6", strokeWidth: "2" }),
      React.createElement("rect", { key: 9, x: "145", y: "270", width: "50", height: "8", rx: "4", fill: "#374151" }),
      React.createElement("rect", { key: 10, x: "205", y: "270", width: "50", height: "8", rx: "4", fill: "#374151" }),
      React.createElement("rect", { key: 11, x: "145", y: "285", width: "110", height: "25", rx: "6", fill: "#1e40af", opacity: "0.8" }),
    ]
  },
  {
    id: "meerolink",
    title: "MeeroLink",
    category: "AgriTech • Operations • Product Design",
    description: "Led the design of digital tools that helped farmers and field teams make better decisions using shared data.",
    role: "Lead Product Designer",
    year: "2025–2026",
    icon: [
      React.createElement("rect", { key: 1, x: "50", y: "60", width: "300", height: "280", rx: "20", fill: "#0a0a0a", stroke: "#16a34a", strokeWidth: "3" }),
      React.createElement("rect", { key: 2, x: "70", y: "80", width: "260", height: "30", rx: "6", fill: "#16a34a" }),
      React.createElement("text", { key: 3, x: "200", y: "100", fontSize: "12", fill: "#ffffff", textAnchor: "middle", fontFamily: "Arial, sans-serif", fontWeight: "bold" }, "MeeroLink"),
      React.createElement("rect", { key: 4, x: "80", y: "130", width: "70", height: "180", rx: "8", fill: "#14532d", stroke: "#16a34a", strokeWidth: "1" }),
      React.createElement("rect", { key: 5, x: "88", y: "145", width: "54", height: "6", rx: "3", fill: "#22c55e" }),
      React.createElement("rect", { key: 6, x: "88", y: "160", width: "54", height: "6", rx: "3", fill: "#166534" }),
      React.createElement("rect", { key: 7, x: "88", y: "175", width: "54", height: "6", rx: "3", fill: "#166534" }),
      React.createElement("rect", { key: 8, x: "88", y: "190", width: "54", height: "6", rx: "3", fill: "#166534" }),
      React.createElement("rect", { key: 9, x: "170", y: "130", width: "90", height: "180", rx: "18", fill: "#1a1a1a", stroke: "#444", strokeWidth: "2" }),
      React.createElement("rect", { key: 10, x: "178", y: "145", width: "74", height: "15", rx: "3", fill: "#16a34a" }),
      React.createElement("circle", { key: 11, cx: "215", cy: "190", r: "12", fill: "#22c55e", opacity: "0.6" }),
      React.createElement("path", { key: 12, d: "M205,220 Q215,200 225,220", fill: "none", stroke: "#22c55e", strokeWidth: "2" }),
      React.createElement("rect", { key: 13, x: "183", y: "235", width: "64", height: "6", rx: "3", fill: "#374151" }),
      React.createElement("rect", { key: 14, x: "183", y: "250", width: "45", height: "6", rx: "3", fill: "#374151" }),
      React.createElement("rect", { key: 15, x: "183", y: "270", width: "64", height: "20", rx: "6", fill: "#16a34a" }),
    ]
  },
  {
    id: "verizon-uccaas",
    title: "Verizon UCaaS",
    category: "Enterprise • Collaboration • Product Design",
    description: "Contributed to Verizon's unified communications platform across messaging, calling, and enterprise collaboration.",
    role: "UX Designer",
    year: "2022–2023",
    icon: [
      React.createElement("rect", { key: 1, x: "50", y: "60", width: "300", height: "280", rx: "20", fill: "#0a0a0a", stroke: "#ff0000", strokeWidth: "2" }),
      React.createElement("rect", { key: 2, x: "70", y: "80", width: "260", height: "30", rx: "6", fill: "#ff0000" }),
      React.createElement("text", { key: 3, x: "200", y: "100", fontSize: "12", fill: "#ffffff", textAnchor: "middle", fontFamily: "Arial, sans-serif", fontWeight: "bold" }, "Verizon UCaaS Mobile"),
      React.createElement("rect", { key: 4, x: "80", y: "130", width: "90", height: "180", rx: "20", fill: "#1a1a1a", stroke: "#666", strokeWidth: "2" }),
      React.createElement("rect", { key: 5, x: "85", y: "145", width: "80", height: "15", rx: "3", fill: "#ff0000" }),
      React.createElement("text", { key: 6, x: "125", y: "154", fontSize: "8", fill: "#ffffff", textAnchor: "middle", fontFamily: "Arial, sans-serif" }, "iOS"),
      React.createElement("rect", { key: 7, x: "90", y: "170", width: "70", height: "120", rx: "8", fill: "#2a2a2a" }),
      React.createElement("circle", { key: 8, cx: "125", cy: "200", r: "8", fill: "#00ff00" }),
      React.createElement("rect", { key: 9, x: "95", y: "220", width: "60", height: "6", rx: "3", fill: "#666" }),
      React.createElement("rect", { key: 10, x: "95", y: "235", width: "45", height: "6", rx: "3", fill: "#666" }),
      React.createElement("rect", { key: 11, x: "95", y: "250", width: "35", height: "15", rx: "4", fill: "#ff0000" }),
      React.createElement("circle", { key: 12, cx: "125", cy: "295", r: "12", fill: "#333", stroke: "#666", strokeWidth: "1" }),
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
    id: "sherlock",
    title: "Sherlock",
    category: "AI • B2B SaaS • Product Design",
    description: "Designed an AI-native lead generation platform that helps sales teams qualify and act on opportunities faster.",
    role: "Product Designer",
    year: "2026",
    comingSoon: true,
    icon: [
      React.createElement("rect", { key: 1, x: "50", y: "60", width: "300", height: "280", rx: "20", fill: "#0a0a0a", stroke: "#8b5cf6", strokeWidth: "3" }),
      React.createElement("rect", { key: 2, x: "70", y: "80", width: "260", height: "30", rx: "6", fill: "#8b5cf6" }),
      React.createElement("text", { key: 3, x: "200", y: "100", fontSize: "12", fill: "#ffffff", textAnchor: "middle", fontFamily: "Arial, sans-serif", fontWeight: "bold" }, "Sherlock AI"),
      React.createElement("circle", { key: 4, cx: "200", cy: "210", r: "45", fill: "#1a1a1a", stroke: "#8b5cf6", strokeWidth: "2" }),
      React.createElement("path", { key: 5, d: "M 230,240 L 270,280", stroke: "#8b5cf6", strokeWidth: "6", strokeLinecap: "round" }),
      React.createElement("path", { key: 6, d: "M 200,185 L 200,235 M 175,210 L 225,210", stroke: "#a855f7", strokeWidth: "2", strokeDasharray: "4 4" }),
      React.createElement("circle", { key: 7, cx: "200", cy: "210", r: "8", fill: "#8b5cf6" }),
      React.createElement("circle", { key: 8, cx: "185", cy: "195", r: "4", fill: "#a855f7" }),
      React.createElement("circle", { key: 9, cx: "215", cy: "225", r: "4", fill: "#a855f7" }),
    ]
  }
];
