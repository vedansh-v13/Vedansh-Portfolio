import {
  Clock,
  Zap,
  ShieldCheck,
} from "lucide-react";
import React from "react";

export const benefitsData = [
  {
    title: "24/7 Operation",
    percentage: "100%",
    description:
      "AI agents work around the clock, eliminating wait times and ensuring continuous service for global customers.",
    icon: React.createElement(Clock, { className: "h-6 w-6 text-accent" }),
  },
  {
    title: "Rapid Response",
    percentage: "80%",
    description:
      "Advanced language models deliver instant responses to complex queries, reducing resolution time by up to 80%.",
    icon: React.createElement(Zap, { className: "h-6 w-6 text-accent" }),
  },
  {
    title: "Task Automation",
    percentage: "95%",
    description:
      "Automate repetitive tasks and workflows, freeing your team to focus on creative and strategic initiatives.",
    icon: React.createElement(ShieldCheck, { className: "h-6 w-6 text-accent" }),
  },
];
