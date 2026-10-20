import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";

interface DesignKnotLayerProps {
  progress: MotionValue<number>;
}

export default function DesignKnotLayer({ progress }: DesignKnotLayerProps) {
  // Global layer opacity: softly dissolves as ribbons finish separating (0.40 to 0.58)
  const globalOpacity = useTransform(progress, [0, 0.40, 0.58], [1, 0.85, 0]);

  // Motion transforms: Ribbons untangle and glide apart with smooth deceleration over ~1.2s (progress 0.00 to 0.55)
  const pathAX = useTransform(progress, [0.00, 0.20, 0.38, 0.55], [0, -75, -135, -170]);
  const pathAY = useTransform(progress, [0.00, 0.20, 0.38, 0.55], [0, 9, 16, 20]);
  const pathAScale = useTransform(progress, [0.00, 0.20, 0.38, 0.55], [1, 1.04, 1.08, 1.10]);
  const pathARotate = useTransform(progress, [0.00, 0.20, 0.38, 0.55], [0, -2.5, -4.8, -6]);
  const pathAOpacity = useTransform(progress, [0.00, 0.36, 0.55], [1, 0.75, 0]);

  const pathBX = useTransform(progress, [0.00, 0.20, 0.38, 0.55], [0, 75, 135, 170]);
  const pathBY = useTransform(progress, [0.00, 0.20, 0.38, 0.55], [0, -9, -16, -20]);
  const pathBScale = useTransform(progress, [0.00, 0.20, 0.38, 0.55], [1, 1.04, 1.08, 1.10]);
  const pathBRotate = useTransform(progress, [0.00, 0.20, 0.38, 0.55], [0, 2.5, 4.8, 6]);
  const pathBOpacity = useTransform(progress, [0.00, 0.36, 0.55], [1, 0.70, 0]);

  // Secondary paths fade out in first part of untangling
  const secondaryScale = useTransform(progress, [0.00, 0.24], [1, 1.08]);
  const secondaryOpacity = useTransform(progress, [0.00, 0.22], [1, 0]);

  // Subtle label drifts slightly and dissolves early
  const labelY = useTransform(progress, [0.00, 0.16], [0, -18]);
  const labelOpacity = useTransform(progress, [0.00, 0.14], [1, 0]);

  return (
    <motion.div
      style={{ opacity: globalOpacity }}
      className="absolute inset-0 z-20 pointer-events-none select-none overflow-hidden flex items-center justify-center px-4"
    >
      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* THE DESIGN KNOT: Asymmetrical Editorial Vector Artwork              */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <div className="relative w-full max-w-[1000px] h-[480px] sm:h-[560px] md:h-[620px] flex items-center justify-center">

        {/* Layer 1: Dominant Ribbon A (Primary Flow with Organic Inflection) */}
        <motion.div
          style={{
            x: pathAX,
            y: pathAY,
            scale: pathAScale,
            rotate: pathARotate,
            opacity: pathAOpacity,
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 1000 560"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="blush-grad-dominant" x1="10%" y1="15%" x2="90%" y2="85%">
                <stop offset="0%" stopColor="#AAA7AE" stopOpacity="0.2" />
                <stop offset="35%" stopColor="#E7D0C8" stopOpacity="0.85" />
                <stop offset="70%" stopColor="#E7D0C8" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#AAA7AE" stopOpacity="0.2" />
              </linearGradient>

              <linearGradient id="knot-soft-fill" x1="30%" y1="20%" x2="70%" y2="80%">
                <stop offset="0%" stopColor="#E7D0C8" stopOpacity="0.04" />
                <stop offset="100%" stopColor="#AAA7AE" stopOpacity="0.01" />
              </linearGradient>
            </defs>

            {/* Subtle translucent wash in the loop pocket for tactile depth */}
            <path
              d="M 470 310 C 580 310, 680 190, 660 290 C 640 390, 470 420, 430 320 Z"
              fill="url(#knot-soft-fill)"
            />

            {/* Dominant Path A: Heavy, continuous fluid ribbon with varied curvature */}
            <path
              d="M 140 210 C 270 180, 360 310, 470 310 C 580 310, 680 190, 660 290 C 640 390, 470 420, 430 320 C 390 220, 550 230, 630 340 C 700 430, 760 380, 860 330"
              stroke="url(#blush-grad-dominant)"
              strokeWidth="2.2"
              strokeLinecap="round"
            />

            {/* Deliberate focal intersection node on left crossing */}
            <circle cx="288" cy="255" r="2.5" fill="#E7D0C8" />
            <circle cx="540" cy="335" r="2.8" fill="#E7D0C8" />
          </svg>
        </motion.div>

        {/* Layer 2: Dominant Counter-Curve B (Asymmetric Cross-Tension) */}
        <motion.div
          style={{
            x: pathBX,
            y: pathBY,
            scale: pathBScale,
            rotate: pathBRotate,
            opacity: pathBOpacity,
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 1000 560"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Dominant Path B: Steep arch entering lower-left, cresting high, crossing down to right */}
            <path
              d="M 220 410 C 300 390, 320 160, 440 160 C 560 160, 580 270, 520 370 C 460 470, 620 450, 760 260"
              stroke="#E7D0C8"
              strokeWidth="1.6"
              strokeOpacity="0.75"
              strokeLinecap="round"
            />

            {/* Right exit crossing node */}
            <circle cx="682" cy="338" r="2.2" fill="#AAA7AE" />
          </svg>
        </motion.div>

        {/* Layer 3: Secondary Supporting Paths (Dashed Trajectory & Internal Loop) */}
        <motion.div
          style={{
            scale: secondaryScale,
            opacity: secondaryOpacity,
          }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 1000 560"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Secondary Path C: Oblique dashed trajectory cutting across negative space */}
            <path
              d="M 180 320 C 320 340, 440 230, 570 220 C 700 210, 750 360, 820 410"
              stroke="#AAA7AE"
              strokeWidth="1.1"
              strokeDasharray="4 6"
              strokeOpacity="0.45"
            />

            {/* Secondary Path D: Compact internal decision loop */}
            <path
              d="M 380 290 C 430 250, 500 280, 510 340 C 520 390, 460 380, 440 350"
              stroke="#E7D0C8"
              strokeWidth="1.1"
              strokeOpacity="0.5"
            />
          </svg>
        </motion.div>

        {/* Single Subtle Supporting Fragment: Positioned with breathing room above the knot */}
        <motion.div
          style={{
            y: labelY,
            opacity: labelOpacity,
          }}
          className="absolute top-8 sm:top-12 md:top-14 z-30 flex flex-col items-center justify-center text-center pointer-events-none select-none max-w-sm px-6"
        >
          <p className="font-mono text-[9px] sm:text-[10px] tracking-[0.32em] text-[#AAA7AE]/65 uppercase">
            the design knot
          </p>
        </motion.div>

      </div>
    </motion.div>
  );
}
