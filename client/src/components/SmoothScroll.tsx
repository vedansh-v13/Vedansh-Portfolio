import { ReactLenis, useLenis } from "lenis/react";
import type { LenisRef } from "lenis/react";
import { cancelFrame, frame, useReducedMotion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useLocation } from "wouter";
import "lenis/dist/lenis.css";

interface SmoothScrollProps {
  children: React.ReactNode;
}

function LenisRouteAndWindowSync() {
  const lenis = useLenis();
  const [location] = useLocation();

  // Expose global window.lenis for programmatic and anchor navigation
  useEffect(() => {
    if (lenis && typeof window !== "undefined") {
      (window as unknown as { lenis?: unknown }).lenis = lenis;
    }
    return () => {
      if (typeof window !== "undefined") {
        delete (window as unknown as { lenis?: unknown }).lenis;
      }
    };
  }, [lenis]);

  // Handle route changes: scroll to top immediately or to target hash
  useEffect(() => {
    if (!lenis) return;
    const hash = window.location.hash;
    if (hash) {
      const timer = setTimeout(() => {
        lenis.scrollTo(hash, { immediate: true });
      }, 50);
      return () => clearTimeout(timer);
    } else {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [lenis, location]);

  return null;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<LenisRef>(null);
  const shouldReduceMotion = useReducedMotion();

  // Synchronize Lenis's RAF directly with Framer Motion's frame update cycle
  useEffect(() => {
    function update(data: { timestamp: number }) {
      lenisRef.current?.lenis?.raf(data.timestamp);
    }

    // Register update in Framer Motion's frame loop
    frame.update(update, true);

    return () => {
      cancelFrame(update);
    };
  }, []);

  // Restrained, responsive options prioritising immediate, natural feel
  const options = {
    autoRaf: false,
    duration: shouldReduceMotion ? 0 : 0.9,
    smoothWheel: !shouldReduceMotion,
    wheelMultiplier: 1.0,
    touchMultiplier: 1.0,
    syncTouch: false, // preserve native touch scrolling on mobile
    anchors: true, // handle anchor links smoothly
  };

  return (
    <ReactLenis root options={options} ref={lenisRef}>
      <LenisRouteAndWindowSync />
      {children}
    </ReactLenis>
  );
}
