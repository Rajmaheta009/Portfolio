# Portfolio Project Brain

**Last Updated:** 2026-07-01
**Project:** Portfolio
**Repository:** Rajmaheta009/Portfolio
**Branch:** master
**Type:** Personal Portfolio Website

---

## Project Summary

A modern portfolio website built with React and Vite that highlights Raj's AI, machine learning, Python, and frontend development skills.

The current application renders a responsive landing page with an animated hero section, a skills section, and a floating AI core UI effect.

---

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4
- Framer Motion
- React Three Fiber / Three.js
- React Icons
- React Type Animation
- npm

---

## Current App Structure

- `src/main.jsx` — React entry point
- `src/App.jsx` — root component with all sections integrated
- `src/components/Navbar/Navbar.jsx` — responsive header with menu toggle and resume button
- `src/components/Hero/Hero.jsx` — landing section with typing animation and AICore visual
- `src/components/About/About.jsx` — about section with profile summary and stats
- `src/components/Skills/Skills.jsx` — skills grid with technology cards and proficiency levels
- `src/components/AIStats/AIStats.jsx` — animated statistics with counters (AI models, ML models, projects, commits)
- `src/components/Projects/Project.jsx` — portfolio projects grid with ProjectCard components
- `src/components/Projects/ProjectCard.jsx` — individual project card component
- `src/components/Experiences/Experiences.jsx` — timeline of work experience and journey
- `src/components/Contact/Contact.jsx` — contact form with terminal-style UI
- `src/components/Footer/Footer.jsx` — footer with links, social icons, and scroll-to-top button
- `src/components/AICore/AICore.jsx` — animated AI core visual with rings and pulses
- `src/components/Loader/Loader.jsx` — page loader with boot animation
- `src/components/Threesence/ThreeScene.jsx` — Three.js canvas with OrbitControls
- `src/components/Threesence/FloatingOrb.jsx` — 3D floating orb animation
- `src/components/Threesence/Lights.jsx` — Three.js lighting setup
- `src/components/Background/Background.jsx` — background gradients and grid pattern
- `src/data/projects.js` — projects data array
- `src/data/experience.js` — experience data array
- `src/index.css` — global styles and Tailwind import

---

## Installed Dependencies

- @react-three/drei
- @react-three/fiber
- @tailwindcss/vite
- framer-motion
- gsap
- lenis
- react
- react-dom
- react-icons
- react-type-animation
- tailwindcss
- three

Dev dependencies:

- @types/react
- @types/react-dom
- @vitejs/plugin-react
- oxlint
- vite

---

## Implemented Features

- Responsive navigation bar with mobile menu
- Hero section with animated intro and role typing effect
- About section with profile description and stats
- Skills section listing Python, React, FastAPI, PostgreSQL, MongoDB, TensorFlow, PyTorch, Java, Docker, and Git
- AI Core animated component in hero section
- Resume download links
- Project layout ready for additional sections such as Projects, Experience, and Contact

---

## Component Status

| Component | Status | Notes |
| --- | --- | --- |
| `Navbar` | Implemented | Responsive, scroll-aware, mobile menu, resume button |
| `Hero` | Implemented | Animated intro and typing roles |
| `About` | Implemented | Profile summary and skill stats |
| `Skills` | Implemented | Skill cards with levels and versions |
| `AICore` | Implemented | Animated UI element in hero section |
| `Background` | Implemented | Gradient and grid background |
| `Projects` | Placeholder | Component file exists but content is empty |
| `Experiences` | Placeholder | Component file exists but content is empty |
| `Contact` | Placeholder | Component file exists but content is empty |
| `Footer` | Placeholder | Component file exists but content is empty |
| `Threesence` | Placeholder | Three.js scene files exist; not yet integrated |
| `Cursor` | Placeholder | No explicit implementation details yet |
| `Loader` | Placeholder | No explicit implementation details yet |

---

## Development Notes

- The app uses Tailwind via `@import "tailwindcss"` in `src/index.css`.
- Navigation links reference sections like `#hero`, `#about`, `#skills`, `#projects`, `#experience`, and `#contact`.
- `Projects`, `Experiences`, `Contact`, and `Footer` components are present as empty placeholders and can be completed later.
- The current README is still the default Vite template and should be replaced with portfolio-specific documentation.

---

## Run Instructions

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Build production bundle:

```bash
npm run build
```

4. Preview production build:

```bash
npm run preview
```

---

## Roadmap

- [ ] Add Projects section content
- [ ] Add Experiences section content
- [ ] Add Contact section with a form or contact links
- [ ] Add Footer component and social links
- [ ] Integrate 3D Threesence scene into the page
- [ ] Add loader and custom cursor interactions
- [ ] Update `README.md` to reflect current portfolio content

---

## Notes

This file documents the current state of the portfolio application and serves as a project brain guide. Keep it updated as new sections and features are implemented.
