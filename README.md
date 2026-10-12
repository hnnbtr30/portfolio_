# ⚡ Hanna Abigail B. Beter — Futuristic & Interactive Personal Portfolio

> **Computer Engineering Student | Future Technology Innovator**  
> *"Exploring the intersection of technology, creativity, and innovation. Building ideas into meaningful digital experiences."*

A cyber-tech digital portfolio engineered to combine a futuristic technology interface, a premium developer portfolio, and a cinematic command center experience.

---

## 🌟 Key Features

- **Futuristic HUD Navigation Bar:** Fixed glassmorphism bar with custom HB initials logo, section scroll spy, synthesized audio toggle, responsive mobile drawer, and glowing *"Let's Connect"* CTA.
- **Cinematic Boot Sequence:** Terminal initialization boot sequence with hardware diagnostics, audio chime, progress bar, and immediate `[ESC]` skip button.
- **Interactive Cyber Matrix Background:** Hardware-accelerated canvas with dynamic constellation particles, cursor proximity reactivity, and reduced-motion accessibility.
- **Restrained Custom Reticle Cursor:** Smooth trailing cyber cursor with hover expansion over interactive elements and click feedback.
- **Synthesized Web Audio SFX:** 100% client-side synthesized futuristic audio effects (blips, clicks, boot chimes) using the browser's native Web Audio API — zero external audio dependencies.
- **Hero Command Center:**
  - `HELLO, WORLD. I'M HANNA ABIGAIL B. BETER`
  - Terminal status indicator: `● AVAILABLE FOR OPPORTUNITIES`
  - Holographic photo frame with rotating cyber rings, scanline overlay, and floating tech badges
  - Dual action buttons: `Explore My Work` & `Let's Connect`
  - Animated scroll-down indicator
- **About Me & Telemetry:** Split layout with biography, engineering focus areas, downloadable CV button, and animated count-up statistics (Projects Completed, Technologies Learned, Years of Learning, Certifications Earned).
- **Technical Skills Matrix:** Filterable skill categories (Programming Languages, Web Development, Hardware & Electronics, UI/UX Design, Database Management, Tools & Technologies) with glowing badges and proficiency levels.
- **Featured Projects Gallery:** Interactive 3D perspective tilt cards that respond to mouse position, category filtering (All, Web Development, Software, Hardware, UI/UX), and a full modal view for deep-dive technical specifications and links.
- **Experience & Education Timeline:** Circuit-style timeline tracking Computer Engineering degree progression, academic milestones, leadership roles, and verified certifications.
- **Personal Showcase:** High-resolution media archive with categories (Portraits, Academic Projects, Certificates, Hardware & Labs, Design Previews) featuring a fullscreen interactive Lightbox viewer with keyboard navigation (`←`, `→`, `ESC`).
- **Cyber Contact Uplink:** Contact console with direct email copy-to-clipboard, social identifiers (GitHub, LinkedIn, Email, Twitter), and an interactive form with realistic packet transmission feedback.
- **Futuristic Footer:** Personal branding, system telemetry, quick navigation, social links, and a back-to-top button.

---

## 🛠️ Technology Stack

- **Framework:** React 18 with TypeScript
- **Bundler:** Vite 5
- **Styling:** Tailwind CSS 3.4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Sound:** Web Audio API (Native browser synthesizer)
- **Visuals:** HTML5 Canvas Cyber Grid & Constellation Particles

---

## 🚀 Getting Started Locally

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18 or higher) installed.

### 1. Clone or Open the Repository
```bash
cd c:\Portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Launch Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` (or the port displayed in the console).

### 4. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` folder.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 🖼️ How to Replace Your Images

All image placeholders are located in the `public/images/` directory. You can replace them simply by dropping your own photos into that folder with the exact filenames:

| Filename | Purpose | Recommended Aspect Ratio |
|---|---|---|
| `profile.jpg` | Main hero portrait | Portrait (4:5 or 3:4) |
| `about.jpg` | About Me section photo | Portrait (4:5 or 3:4) |
| `project-1.jpg` | Project 1 thumbnail | Landscape (16:9) |
| `project-2.jpg` | Project 2 thumbnail | Landscape (16:9) |
| `project-3.jpg` | Project 3 thumbnail | Landscape (16:9) |
| `project-4.jpg` | Project 4 thumbnail | Landscape (16:9) |
| `project-5.jpg` | Project 5 thumbnail | Landscape (16:9) |
| `project-6.jpg` | Project 6 thumbnail | Landscape (16:9) |
| `certificate-1.jpg` | Certificate or award photo | Landscape (4:3 or 16:9) |
| `lab-1.jpg` | Hardware lab or workbench photo | Landscape (4:3 or 16:9) |
| `lab-2.jpg` | Robotics or field testing photo | Landscape (4:3 or 16:9) |
| `resume.pdf` | Your resume for the Download CV button | PDF format |

> **Smart Fallback:** If an image is missing or hasn't been uploaded yet, the website automatically displays a high-tech SVG blueprint placeholder so there are never any broken images or layout glitches!

---

## ⚙️ How to Edit Text, Skills, Projects & Links

All portfolio content is centralized in a single file:  
`src/config/portfolioData.ts`

You can edit:
- **Personal Details:** Full name, title, bio, email, status (`● AVAILABLE FOR OPPORTUNITIES`), and resume link.
- **Statistics:** Real numbers for projects completed, technologies learned, years of study, and certifications.
- **Skills:** Add, remove, or edit programming languages, hardware microcontrollers, databases, and tools.
- **Projects:** Add new projects, update GitHub URLs, live demo links, descriptions, and feature bullet points.
- **Timeline:** Add your real educational milestones, academic honors, and internship positions.
- **Showcase:** Add or organize photos for your personal gallery.
- **Social Links:** Update your GitHub, LinkedIn, Twitter, and email links.

---

## 🚢 Deployment Instructions

### Deploy to Vercel (Recommended)
1. Push your code to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Hanna Beter portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/portfolio.git
   git push -u origin main
   ```
2. Log in to [Vercel](https://vercel.com).
3. Click **"Add New Project"** and select your GitHub repository.
4. Framework Preset will be automatically detected as **Vite**.
5. Click **"Deploy"**. Your website will be live in seconds with an SSL certificate.

### Deploy to Netlify
1. Log in to [Netlify](https://netlify.com).
2. Click **"Add new site"** > **"Import an existing project"**.
3. Connect your GitHub repository.
4. Set **Build command**: `npm run build`
5. Set **Publish directory**: `dist`
6. Click **"Deploy site"**.

---

## 🌐 Accessibility & Performance

- **Reduced Motion:** Fully complies with `prefers-reduced-motion` settings for users who prefer minimal movement.
- **Semantic HTML:** Accessible headings (`h1` - `h4`), landmarks, ARIA labels, and keyboard navigation (`ESC` to exit loader/modals/lightbox, arrow keys for lightbox navigation).
- **Audio Control:** Audio is polite (default off, toggleable with a single click in the navbar).
- **Fast Loading:** Production assets optimized and gzipped for instant loading.

---

*Designed with curiosity. Built for the future.*
