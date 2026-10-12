import React, { useState } from 'react';
import { BootLoader } from './components/layout/BootLoader';
import { BackgroundMatrix } from './components/layout/BackgroundMatrix';
import { CyberCursor } from './components/layout/CyberCursor';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { AboutSection } from './components/about/AboutSection';
import { SkillsSection } from './components/skills/SkillsSection';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { ExperienceSection } from './components/experience/ExperienceSection';
import { ShowcaseSection } from './components/showcase/ShowcaseSection';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/layout/Footer';

export const App: React.FC = () => {
  const [bootComplete, setBootComplete] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#040711] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Cinematic Intro Boot Sequence */}
      {!bootComplete && <BootLoader onComplete={() => setBootComplete(true)} />}

      {/* Interactive Background Particle & Cyber Matrix Canvas */}
      <BackgroundMatrix />

      {/* Restrained Custom Futuristic Cursor */}
      <CyberCursor />

      {/* Fixed Futuristic Header Navigation */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <main className="relative z-10 flex flex-col">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ShowcaseSection />
        <ContactSection />
      </main>

      {/* Cyber Footer */}
      <Footer />
    </div>
  );
};

export default App;
