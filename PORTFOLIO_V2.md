# Vision
The goal of Version 2 is to evolve the portfolio to compete with the best Senior Product Designer portfolios. The emphasis is on showing product thinking, systems thinking, UX rationale, craftsmanship, and clean storytelling, while maintaining the established, premium visual language.

# Design Principles
- **Minimal & Editorial**: Typography-led, spacious, and calm.
- **Product-Focused**: Showing systems design and reasoning over marketing flare.
- **Motion with Restraint**: Subtle, performant transitions that aid comprehension.
- **Performance & Craft**: Extremely fast, clean implementation.

# Completed
- Cloned original repository into [original-portfolio](file:///Users/vedansh/.gemini/vedansh-folio-26/original-portfolio) as a pristine backup.
- Configured working copy [portfolio-v2](file:///Users/vedansh/.gemini/vedansh-folio-26/portfolio-v2) for development.
- Verified build pipeline correctness locally for both static hosting (`npm run build:netlify`) and full-stack targets (`npm run build`).
- **[Option A]** Extracted all storytelling and visualization subcomponents from `ProjectDetails.tsx` into a modular component helper `ProjectDetailComponents.tsx` to simplify page codes.
- **[Option A]** Removed duplicate code for `StoryCard`, `FloatingParticle`, and `AnimatedGrid` from `OmnycommCaseStudy.tsx` and imported them from the shared module.
- **[Option C]** Added hidden Netlify Forms parsing elements to `client/index.html` to auto-register submission backend functionality for future UI hookups.
- **[Hero Update]** Updated landing page Hero messaging with revised subtitle `"Designing products that reduce uncertainty."` and description paragraph to showcase senior-level UX focus.
- **[Featured Work Update]** Filtered the portfolio's project showcase to display exactly 4 projects in order (Tata Capital Wealth, MeeroLink, Verizon UCaaS, and Sherlock as Coming Soon) with revised copy and SVG previews.
- **[About Section Update]** Replaced the bio content with a product-focused systems design statement, refreshed the information cards mapping to the core domains, and replaced the profile picture asset with a new portrait photo.

# In Progress
- None.

# Planned
- Improved homepage layout.
- Better navigation and page transitions.
- Better project cards.
- Rewritten case studies for stronger storytelling.
- Decoupling unused server/database logic.

# Technical Decisions
- Set up `portfolio-v2` as the active development copy, leaving `original-portfolio` untouched.
- Preserved existing framework stack (React, Vite, Tailwind CSS, Framer Motion, and Wouter).
- Grouped case study subcomponents inside `client/src/components/project/ProjectDetailComponents.tsx` to prevent duplicating storytelling modules across custom case studies.
- Preserved exact SVG visual mockups for first 3 projects and custom-coded a matching abstract vector for Sherlock.
- Overwrote the underlying `vedansh-profile.jpg` image binary to update the portrait seamlessly across responsive viewports without adding layout code.

# Files Modified
- [ProjectDetails.tsx](file:///Users/vedansh/.gemini/vedansh-folio-26/portfolio-v2/client/src/pages/ProjectDetails.tsx)
- [OmnycommCaseStudy.tsx](file:///Users/vedansh/.gemini/vedansh-folio-26/portfolio-v2/client/src/pages/OmnycommCaseStudy.tsx)
- [index.html](file:///Users/vedansh/.gemini/vedansh-folio-26/portfolio-v2/client/index.html)
- [HeroSection.tsx](file:///Users/vedansh/.gemini/vedansh-folio-26/portfolio-v2/client/src/components/HeroSection.tsx)
- [projectsData.ts](file:///Users/vedansh/.gemini/vedansh-folio-26/portfolio-v2/client/src/data/projectsData.ts)
- [AboutSection.tsx](file:///Users/vedansh/.gemini/vedansh-folio-26/portfolio-v2/client/src/components/AboutSection.tsx)
- [vedansh-profile.jpg](file:///Users/vedansh/.gemini/vedansh-folio-26/portfolio-v2/client/src/assets/images/vedansh-profile.jpg)

# Components Added
- [ProjectDetailComponents.tsx](file:///Users/vedansh/.gemini/vedansh-folio-26/portfolio-v2/client/src/components/project/ProjectDetailComponents.tsx) (exposes `GalleryScreenshotFrame`, `ProcessFlow`, `MetricsCard`, `Timeline`, `ComparisonChart`, `FloatingParticle`, `AnimatedGrid`, `StoryCard`).

# Known Issues
- Contact and newsletter UI forms are not yet implemented in the frontend (represented by hidden Netlify registration elements only).
- Hardcoded GA measurement ID in [main.tsx](file:///Users/vedansh/.gemini/vedansh-folio-26/portfolio-v2/client/src/main.tsx).

# Next Recommended Step
- Review and refine project case study content mapping (e.g. updating stats and detailed sections inside `projectDetailsData.ts` to align with the new senior design story).
