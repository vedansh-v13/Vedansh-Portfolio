import React from "react";

export default function DecisionsSection() {
  return (
    <section
      id="decisions"
      className="py-16 sm:py-20 md:py-24 bg-[#181719] relative border-t border-white/10"
    >
      {/* Section Header on Dark Canvas */}
      <div className="container mx-auto px-6 sm:px-8 md:px-12 mb-8 sm:mb-12">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-2.5">
            <span className="font-mono text-xs uppercase tracking-widest text-blush">
              [ 02 // PRINCIPLES IN ACTION ]
            </span>
            <span className="h-[1px] w-8 bg-white/20" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-light text-[#F5F4F6] tracking-tight leading-none mb-2.5">
            How I Actually Decide
          </h2>
          <p className="text-sm sm:text-base text-[#AAA7AE] font-light leading-relaxed max-w-xl">
            Four things that actually happened, not a list of skills.
          </p>
        </div>
      </div>

      {/* =========================================================================
          THE OPEN NOTEBOOK OBJECT
          ========================================================================= */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-5xl">
        
        {/* DESKTOP & TABLET VIEW (md+): Open Two-Page Spread */}
        <div className="hidden md:block relative bg-[#F6F3EB] text-[#1C1917] rounded-md sm:rounded-lg shadow-[0_20px_50px_-12px_rgba(0,0,0,0.65),0_0_0_1px_rgba(255,255,255,0.06)] overflow-hidden">
          
          {/* Central Gutter / Spine Shadow Effect */}
          <div
            className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-10 lg:w-12 pointer-events-none z-20"
            style={{
              background:
                "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.03) 30%, rgba(0,0,0,0.14) 50%, rgba(0,0,0,0.03) 70%, transparent 100%)",
            }}
            aria-hidden="true"
          />

          {/* Notebook Paper Surface: Two Equal Pages */}
          <div className="grid grid-cols-2 divide-x divide-[#E5DFD3] relative z-10">
            
            {/* ----------------- LEFT PAGE (Decisions 01 & 02) ----------------- */}
            <div className="p-6 md:p-8 lg:p-10 pr-8 lg:pr-12 flex flex-col justify-between space-y-6 relative">
              {/* Running Head */}
              <div className="flex items-center justify-between text-[11px] font-mono text-[#78716C] pb-2.5 border-b border-[#E5DFD3]">
                <span className="tracking-wider uppercase">TATA CAPITAL WEALTH // ONBOARDING & FLOWS</span>
                <span>p. 14</span>
              </div>

              {/* Decision 01 */}
              <div className="space-y-2 rounded-md p-2 -m-2 transition-colors duration-200 hover:bg-[#EAE4D8]/35 focus-within:bg-[#EAE4D8]/35">
                <span className="font-mono text-[10px] text-[#9E3D34] font-medium tracking-widest uppercase block">
                  DECISION 01 // TATA CAPITAL WEALTH
                </span>
                <h3 className="text-xl lg:text-2xl font-display font-normal text-[#1C1917] tracking-tight leading-snug">
                  Redistributing the work
                </h3>
                <p className="text-[#38332E] text-xs lg:text-sm font-light leading-relaxed">
                  Investors were filling in the same forms twice. I let the Relationship Manager prepare the application first, so investors only had to review and sign.
                </p>
                <div className="pt-2.5 mt-2.5 border-t border-[#EAE5DC] flex flex-wrap items-baseline gap-x-2 gap-y-1 font-mono text-xs">
                  <div className="flex items-baseline gap-1.5 whitespace-nowrap">
                    <span className="text-[#78716C] line-through">42%</span>
                    <span className="text-[#6B635B]">→</span>
                    <span className="text-[#9E3D34] font-semibold text-sm">22%</span>
                  </div>
                  <span className="text-[#78716C] ml-auto uppercase tracking-wider text-[10px] whitespace-nowrap">
                    Form abandonment
                  </span>
                </div>
              </div>

              {/* Page Break Divider */}
              <div className="border-b border-[#E5DFD3]" />

              {/* Decision 02 */}
              <div className="space-y-2 rounded-md p-2 -m-2 transition-colors duration-200 hover:bg-[#EAE4D8]/35 focus-within:bg-[#EAE4D8]/35">
                <span className="font-mono text-[10px] text-[#9E3D34] font-medium tracking-widest uppercase block">
                  DECISION 02 // TATA CAPITAL WEALTH
                </span>
                <h3 className="text-xl lg:text-2xl font-display font-normal text-[#1C1917] tracking-tight leading-snug">
                  One decision, not one button
                </h3>
                <p className="text-[#38332E] text-xs lg:text-sm font-light leading-relaxed">
                  Most platforms show a single &quot;Invest Now&quot; CTA. I split it into One-Time and SIP, because by that screen the real decision left was how, not whether.
                </p>
                <div className="pt-2.5 mt-2.5 border-t border-[#EAE5DC] flex flex-wrap items-baseline gap-x-2 gap-y-1 font-mono text-xs">
                  <div className="flex items-baseline gap-1.5 whitespace-nowrap">
                    <span className="text-[#78716C] line-through">4.5 min</span>
                    <span className="text-[#6B635B]">→</span>
                    <span className="text-[#9E3D34] font-semibold text-sm">2.5 min</span>
                  </div>
                  <span className="text-[#78716C] ml-auto uppercase tracking-wider text-[10px] whitespace-nowrap">
                    Time to create a SIP
                  </span>
                </div>
              </div>

              {/* Page Footer Note */}
              <div className="pt-3 text-[10px] font-mono text-[#8C827A] border-t border-[#EAE5DC] flex items-center justify-between">
                <span>VOL. 02 // DECISION LOG</span>
                <span>OCT 2025</span>
              </div>
            </div>

            {/* ----------------- RIGHT PAGE (Anchor & Decision 03) ----------------- */}
            <div className="p-6 md:p-8 lg:p-10 pl-8 lg:pl-12 flex flex-col justify-between space-y-6 relative">
              {/* Running Head */}
              <div className="flex items-center justify-between text-[11px] font-mono text-[#78716C] pb-2.5 border-b border-[#E5DFD3]">
                <span className="tracking-wider uppercase">MEEROLINK // FIELD ARCHITECTURE</span>
                <span>p. 15</span>
              </div>

              {/* Anchor Decision */}
              <div className="space-y-2 rounded-md p-2 -m-2 transition-colors duration-200 hover:bg-[#EAE4D8]/35 focus-within:bg-[#EAE4D8]/35">
                <span className="font-mono text-[10px] text-[#9E3D34] font-semibold tracking-widest uppercase block">
                  ANCHOR DECISION // CORE OPERATIONAL SHIFT
                </span>
                <h3 className="text-xl lg:text-2xl font-display font-normal text-[#1C1917] tracking-tight leading-snug">
                  Sorting by urgency, not by tab
                </h3>
                <p className="text-[#38332E] text-xs lg:text-sm font-light leading-relaxed">
                  MeeroLink pulled data from five separate sources: soil sensors, weather, imagery, lab reports, agronomist notes. I built one prioritized list instead of five dashboards.
                </p>
                <div className="pt-2.5 mt-2.5 border-t border-[#EAE5DC] flex flex-wrap items-baseline gap-x-2 gap-y-1 font-mono text-xs">
                  <div className="flex items-baseline gap-1.5 whitespace-nowrap">
                    <span className="text-[#78716C] line-through">6 days</span>
                    <span className="text-[#6B635B]">→</span>
                    <span className="text-[#9E3D34] font-semibold text-sm">1 day</span>
                  </div>
                  <span className="text-[#78716C] ml-auto uppercase tracking-wider text-[10px] whitespace-nowrap">
                    Report to action
                  </span>
                </div>
              </div>

              {/* Page Break Divider */}
              <div className="border-b border-[#E5DFD3]" />

              {/* Decision 03 */}
              <div className="space-y-2 rounded-md p-2 -m-2 transition-colors duration-200 hover:bg-[#EAE4D8]/35 focus-within:bg-[#EAE4D8]/35">
                <span className="font-mono text-[10px] text-[#9E3D34] font-medium tracking-widest uppercase block">
                  DECISION 03 // MEEROLINK
                </span>
                <h3 className="text-xl lg:text-2xl font-display font-normal text-[#1C1917] tracking-tight leading-snug">
                  A farm health card, not a dashboard
                </h3>
                <p className="text-[#38332E] text-xs lg:text-sm font-light leading-relaxed">
                  The home screen answered &quot;is my farm okay&quot; before asking farmers to read a single chart.
                </p>
                <div className="pt-2.5 mt-2.5 border-t border-[#EAE5DC] flex flex-wrap items-baseline gap-x-2 gap-y-1 font-mono text-xs">
                  <span className="text-[#9E3D34] font-semibold text-sm whitespace-nowrap">94%</span>
                  <span className="text-[#78716C] ml-auto uppercase tracking-wider text-[10px] whitespace-nowrap">
                    Dashboard adoption
                  </span>
                </div>
              </div>

              {/* Page Footer Note */}
              <div className="pt-3 text-[10px] font-mono text-[#8C827A] border-t border-[#EAE5DC] flex items-center justify-between">
                <span>VOL. 02 // FIELD SYSTEMS</span>
                <span>JAN 2026</span>
              </div>
            </div>

          </div>
        </div>

        {/* MOBILE VIEW (<md): Single Continuous Notebook Page */}
        <div className="md:hidden bg-[#F6F3EB] text-[#1C1917] rounded-md sm:rounded-lg shadow-xl p-5 sm:p-7 space-y-6">
          {/* Running Head */}
          <div className="flex items-center justify-between text-[11px] font-mono text-[#78716C] pb-2.5 border-b border-[#E5DFD3]">
            <span className="tracking-wider uppercase">FIELD NOTES // DECISION JOURNAL</span>
            <span>EST. 2022–2026</span>
          </div>

          {/* Decision 01 */}
          <div className="space-y-2 rounded-md p-2 -m-2 transition-colors duration-200 hover:bg-[#EAE4D8]/35 active:bg-[#EAE4D8]/40">
            <span className="font-mono text-[10px] text-[#9E3D34] font-medium tracking-widest uppercase block">
              DECISION 01 // TATA CAPITAL WEALTH
            </span>
            <h3 className="text-xl font-display font-normal text-[#1C1917] tracking-tight leading-snug">
              Redistributing the work
            </h3>
            <p className="text-[#38332E] text-xs font-light leading-relaxed">
              Investors were filling in the same forms twice. I let the Relationship Manager prepare the application first, so investors only had to review and sign.
            </p>
            <div className="pt-2.5 mt-2.5 border-t border-[#EAE5DC] flex flex-wrap items-baseline gap-x-2 gap-y-1 font-mono text-xs">
              <div className="flex items-baseline gap-1.5 whitespace-nowrap">
                <span className="text-[#78716C] line-through">42%</span>
                <span className="text-[#6B635B]">→</span>
                <span className="text-[#9E3D34] font-semibold text-sm">22%</span>
              </div>
              <span className="text-[#78716C] ml-auto uppercase tracking-wider text-[10px] whitespace-nowrap">
                Form abandonment
              </span>
            </div>
          </div>

          <div className="border-b border-[#E5DFD3]" />

          {/* Decision 02 */}
          <div className="space-y-2 rounded-md p-2 -m-2 transition-colors duration-200 hover:bg-[#EAE4D8]/35 active:bg-[#EAE4D8]/40">
            <span className="font-mono text-[10px] text-[#9E3D34] font-medium tracking-widest uppercase block">
              DECISION 02 // TATA CAPITAL WEALTH
            </span>
            <h3 className="text-xl font-display font-normal text-[#1C1917] tracking-tight leading-snug">
              One decision, not one button
            </h3>
            <p className="text-[#38332E] text-xs font-light leading-relaxed">
              Most platforms show a single &quot;Invest Now&quot; CTA. I split it into One-Time and SIP, because by that screen the real decision left was how, not whether.
            </p>
            <div className="pt-2.5 mt-2.5 border-t border-[#EAE5DC] flex flex-wrap items-baseline gap-x-2 gap-y-1 font-mono text-xs">
              <div className="flex items-baseline gap-1.5 whitespace-nowrap">
                <span className="text-[#78716C] line-through">4.5 min</span>
                <span className="text-[#6B635B]">→</span>
                <span className="text-[#9E3D34] font-semibold text-sm">2.5 min</span>
              </div>
              <span className="text-[#78716C] ml-auto uppercase tracking-wider text-[10px] whitespace-nowrap">
                Time to create a SIP
              </span>
            </div>
          </div>

          <div className="border-b border-[#E5DFD3]" />

          {/* Anchor Decision */}
          <div className="space-y-2 rounded-md p-2 -m-2 transition-colors duration-200 hover:bg-[#EAE4D8]/35 active:bg-[#EAE4D8]/40">
            <span className="font-mono text-[10px] text-[#9E3D34] font-semibold tracking-widest uppercase block">
              ANCHOR DECISION // CORE OPERATIONAL SHIFT
            </span>
            <h3 className="text-xl font-display font-normal text-[#1C1917] tracking-tight leading-snug">
              Sorting by urgency, not by tab
            </h3>
            <p className="text-[#38332E] text-xs font-light leading-relaxed">
              MeeroLink pulled data from five separate sources: soil sensors, weather, imagery, lab reports, agronomist notes. I built one prioritized list instead of five dashboards.
            </p>
            <div className="pt-2.5 mt-2.5 border-t border-[#EAE5DC] flex flex-wrap items-baseline gap-x-2 gap-y-1 font-mono text-xs">
              <div className="flex items-baseline gap-1.5 whitespace-nowrap">
                <span className="text-[#78716C] line-through">6 days</span>
                <span className="text-[#6B635B]">→</span>
                <span className="text-[#9E3D34] font-semibold text-sm">1 day</span>
              </div>
              <span className="text-[#78716C] ml-auto uppercase tracking-wider text-[10px] whitespace-nowrap">
                Report to action
              </span>
            </div>
          </div>

          <div className="border-b border-[#E5DFD3]" />

          {/* Decision 03 */}
          <div className="space-y-2 rounded-md p-2 -m-2 transition-colors duration-200 hover:bg-[#EAE4D8]/35 active:bg-[#EAE4D8]/40">
            <span className="font-mono text-[10px] text-[#9E3D34] font-medium tracking-widest uppercase block">
              DECISION 03 // MEEROLINK
            </span>
            <h3 className="text-xl font-display font-normal text-[#1C1917] tracking-tight leading-snug">
              A farm health card, not a dashboard
            </h3>
            <p className="text-[#38332E] text-xs font-light leading-relaxed">
              The home screen answered &quot;is my farm okay&quot; before asking farmers to read a single chart.
            </p>
            <div className="pt-2.5 mt-2.5 border-t border-[#EAE5DC] flex flex-wrap items-baseline gap-x-2 gap-y-1 font-mono text-xs">
              <span className="text-[#9E3D34] font-semibold text-sm whitespace-nowrap">94%</span>
              <span className="text-[#78716C] ml-auto uppercase tracking-wider text-[10px] whitespace-nowrap">
                Dashboard adoption
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
