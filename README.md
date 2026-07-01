# Portfolio

A modern, interactive personal portfolio website showcasing AI Engineering, Machine Learning, Python development, and React expertise with smooth animations and responsive design.

## Overview

This portfolio is built with cutting-edge web technologies and features:
- Interactive animated hero section
- AI-inspired UI components with animated visuals
- Responsive skills showcase
- Project portfolio with project cards
- Experience timeline
- Contact form with terminal-style UI
- 3D graphics integration
- Loading animations

Perfect for showcasing technical projects, skills, and professional experience as an AI Engineer and Full Stack Developer.

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 19.2.7 | UI framework |
| Vite | 8.1.1 | Build tool & dev server |
| Tailwind CSS | 4.3.2 | Utility-first CSS framework |
| Framer Motion | 12.42.2 | Advanced animations |
| Three.js | 0.185.0 | 3D graphics |
| React Three Fiber | 9.6.1 | React renderer for Three.js |
| React Icons | 5.7.0 | Icon library |
| React Type Animation | 3.2.0 | Typing effect animations |
| GSAP | 3.15.0 | Animation library |
| Lenis | 1.3.25 | Smooth scroll library |

---

## Features

✅ **Responsive Navigation** — Sticky navbar with mobile menu toggle and resume download  
✅ **Hero Section** — Animated intro with typing effect cycling through roles  
✅ **About Section** — Profile summary with statistics  
✅ **Skills Grid** — Technology cards with proficiency levels  
✅ **AI Stats** — Animated counters for projects, models, commits  
✅ **Projects Portfolio** — Dynamic project grid with project cards  
✅ **Experience Timeline** — Career journey showcase  
✅ **Contact Form** — Terminal-style contact section  
✅ **3D Graphics** — Three.js scene with floating orb  
✅ **Loading Animation** — Boot-style page loader  
✅ **Footer** — Links, social icons, scroll-to-top button  
✅ **Smooth Animations** — Framer Motion transitions throughout  

---

## Project Structure

```
portfolio/
├── public/                           # Static assets
│   ├── images/                       # Image assets
│   └── models/                       # 3D models
│
├── src/
│   ├── components/
│   │   ├── Navbar/                   # Navigation header
│   │   ├── Hero/                     # Landing section
│   │   ├── About/                    # About me section
│   │   ├── Skills/                   # Skills grid
│   │   ├── AIStats/                  # Animated statistics
│   │   ├── Projects/                 # Projects showcase
│   │   │   ├── Project.jsx
│   │   │   └── ProjectCard.jsx
│   │   ├── Experiences/              # Experience timeline
│   │   ├── Contact/                  # Contact form
│   │   ├── Footer/                   # Footer section
│   │   ├── AICore/                   # Animated AI visual
│   │   ├── Loader/                   # Page loader
│   │   ├── Threesence/               # 3D scene
│   │   │   ├── ThreeScene.jsx
│   │   │   ├── FloatingOrb.jsx
│   │   │   └── Lights.jsx
│   │   ├── Background/               # Background effects
│   │   └── Cursor/                   # Custom cursor (placeholder)
│   │
│   ├── data/
│   │   ├── projects.js               # Projects data
│   │   └── experience.js             # Experience data
│   │
│   ├── hooks/                        # Custom React hooks
│   ├── pages/                        # Page components
│   ├── style/                        # Global styles
│   │   ├── globals.css
│   │   ├── Variables.css
│   │   └── animations.css
│   ├── assets/                       # Local assets
│   │
│   ├── App.jsx                       # Root component
│   ├── App.css                       # Main styles
│   ├── index.css                     # Global styles + Tailwind
│   └── main.jsx                      # Entry point
│
├── vite.config.js                    # Vite configuration
├── package.json                      # Dependencies & scripts
├── README.md                         # This file
├── PROJECT_BRAIN.md                  # Project documentation
└── .oxlintrc.json                    # Linter configuration
```

---

## Dependencies

### Production Dependencies

```json
{
  "@react-three/drei": "^10.7.7",
  "@react-three/fiber": "^9.6.1",
  "@tailwindcss/vite": "^4.3.2",
  "framer-motion": "^12.42.2",
  "gsap": "^3.15.0",
  "lenis": "^1.3.25",
  "react": "^19.2.7",
  "react-dom": "^19.2.7",
  "react-icons": "^5.7.0",
  "react-type-animation": "^3.2.0",
  "tailwindcss": "^4.3.2",
  "three": "^0.185.0"
}
```

### Development Dependencies

```json
{
  "@types/react": "^19.2.17",
  "@types/react-dom": "^19.2.3",
  "@vitejs/plugin-react": "^6.0.3",
  "oxlint": "^1.71.0",
  "vite": "^8.1.1"
}
```

---

## Getting Started

### Prerequisites

- **Node.js** 18.0 or higher
- **npm** 9.0 or higher (or yarn, pnpm)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Rajmaheta009/Portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

---

## Running the Project

### Development Server

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

**Features:**
- Hot reload on file changes
- Fast refresh with Vite
- Development-friendly error messages

### Build for Production

Create an optimized production build:

```bash
npm run build
```

Output is generated in the `dist/` folder ready for deployment.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

Useful for testing the production build before deployment.

### Run Linter

Check code quality with Oxlint:

```bash
npm run lint
```

---

## Available Scripts

| Script | Command | Description |
|---|---|---|
| Dev | `npm run dev` | Start dev server with HMR |
| Build | `npm run build` | Build for production |
| Preview | `npm run preview` | Preview production build |
| Lint | `npm run lint` | Run Oxlint code quality check |

---

## Component Overview

### Navbar
- Sticky positioning on scroll
- Mobile hamburger menu
- Navigation links to all sections
- Resume download button
- Responsive design

### Hero Section
- Animated intro text
- Typing animation cycling through roles
- Call-to-action buttons
- AI Core visual component

### About Section
- Profile description
- Statistics cards
- Professional summary
- Contact action buttons

### Skills Section
- Technology cards grid
- Proficiency levels
- Version information
- Status indicators

### AI Stats
- Animated counters
- Project statistics
- ML model count
- GitHub commits

### Projects
- Dynamic project grid
- Project cards with details
- Links and descriptions
- Filtering capability

### Experience
- Timeline layout
- Career journey
- Job titles and descriptions
- Alternating layout

### Contact
- Terminal-style form UI
- Email integration ready
- Social media links
- Form validation

### Footer
- Navigation links
- Social media icons
- Copyright information
- Scroll-to-top button

---

## Styling

The project uses:
- **Tailwind CSS 4** for utility-first styling
- **CSS Variables** in `Variables.css` for theming
- **Custom animations** in `animations.css`
- **Component-scoped CSS** for isolated styles
- **Responsive design** with mobile-first approach

---

## Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Deploy to GitHub Pages

```bash
npm run build
# Push dist/ folder to gh-pages branch
```

---

## Performance Tips

- Uses Vite for fast development and optimized builds
- Code splitting for faster load times
- Image optimization with modern formats
- CSS-in-JS with Tailwind for minimal bundle size
- Lazy loading for 3D components

---

## Browser Support

- Chrome/Edge: Latest
- Firefox: Latest
- Safari: Latest (12+)
- Mobile browsers: All modern

---

## Development Guidelines

### Adding a New Section

1. Create a new component folder: `src/components/YourSection/`
2. Create JSX file: `YourSection.jsx`
3. Create CSS file: `YourSection.css`
4. Import in `App.jsx`
5. Add anchor ID for navigation

### Using Animations

```jsx
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

### Using Icons

```jsx
import { FiGithub, FiLinkedin } from "react-icons/fi";

<FiGithub className="icon" />
```

---

## Contributing

Contributions are welcome! Feel free to fork and submit pull requests.

---

## License

This project is open source and available under the MIT License.

---

## Contact & Social

- **GitHub:** [Rajmaheta009](https://github.com/Rajmaheta009)
- **LinkedIn:** [Connect here]
- **Email:** [Your email]

---

## Roadmap

- [x] Hero section with animations
- [x] About section
- [x] Skills showcase
- [x] Projects portfolio
- [x] Experience timeline
- [x] Contact section
- [ ] Blog section
- [ ] Dark mode toggle
- [ ] Advanced 3D scenes
- [ ] Performance optimizations

---

**Last Updated:** 2026-07-01  
**Repository:** [Rajmaheta009/Portfolio](https://github.com/Rajmaheta009/Portfolio)
