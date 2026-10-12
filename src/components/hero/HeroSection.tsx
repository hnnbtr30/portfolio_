import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Send, FolderGit2, Cpu, Code, CpuIcon, Layers } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../config/portfolioData';
import { HolographicFrame } from './HolographicFrame';
import { CyberButton } from '../common/CyberButton';
import { sounds } from '../common/SoundEffects';

export const HeroSection: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  const scrollToSection = (id: string) => {
    sounds.playClick();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const techPills = [
    { label: 'C / C++', icon: <Code className="w-3.5 h-3.5 text-cyan-400" /> },
    { label: 'Embedded IoT', icon: <Cpu className="w-3.5 h-3.5 text-purple-400" /> },
    { label: 'Digital Logic', icon: <CpuIcon className="w-3.5 h-3.5 text-sky-400" /> },
    { label: 'Full-Stack Web', icon: <Layers className="w-3.5 h-3.5 text-emerald-400" /> },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Dynamic Cyber Light Beams & Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column (Col 7) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Terminal Status Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-emerald-500/40 text-emerald-400 text-xs font-code mb-6 shadow-[0_0_15px_rgba(16,185,129,0.2)] backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-semibold tracking-wider uppercase">
                {personal.status}
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center space-x-2 text-cyan-400 font-code text-sm md:text-base tracking-widest uppercase mb-2 font-medium"
            >
              <Terminal className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span>{personal.greeting}</span>
            </motion.div>

            {/* Full Name */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black font-display tracking-tight text-white mb-4 leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_2px_20px_rgba(0,240,255,0.3)]">
                {personal.name}
              </span>
            </motion.h1>

            {/* Subheading: Computer Engineering Student | Future Technology Innovator */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg sm:text-xl md:text-2xl font-bold font-tech text-cyan-300 tracking-wide mb-6 flex flex-wrap items-center gap-2"
            >
              <span>Computer Engineering Student</span>
              <span className="text-purple-400">|</span>
              <span className="text-slate-200">Future Technology Innovator</span>
            </motion.h2>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed mb-8 font-body font-light"
            >
              "{personal.tagline}"
            </motion.p>

            {/* Interactive Floating Tech Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-2.5 mb-10"
            >
              {techPills.map((pill, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-1.5 px-3 py-1 rounded-md bg-slate-900/70 border border-slate-700/60 text-xs font-code text-slate-300 hover:border-cyan-400/50 hover:text-cyan-200 transition-all duration-200 hover:-translate-y-0.5"
                >
                  {pill.icon}
                  <span>{pill.label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <CyberButton
                onClick={() => scrollToSection('projects')}
                variant="primary"
                size="lg"
                icon={<FolderGit2 className="w-5 h-5" />}
                className="w-full sm:w-auto shadow-[0_0_25px_rgba(0,240,255,0.4)]"
              >
                Explore My Work
              </CyberButton>

              <CyberButton
                onClick={() => scrollToSection('contact')}
                variant="secondary"
                size="lg"
                icon={<Send className="w-5 h-5" />}
                className="w-full sm:w-auto"
              >
                Let's Connect
              </CyberButton>
            </motion.div>
          </div>

          {/* Right Holographic Photo Area (Col 5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <HolographicFrame
              imageSrc={personal.profileImage}
              fallbackSrc="/images/profile.svg"
              alt={personal.name}
            />
          </motion.div>
        </div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center cursor-pointer group"
        onClick={() => scrollToSection('about')}
      >
        <span className="text-[11px] font-code uppercase tracking-widest text-slate-400 group-hover:text-cyan-400 transition-colors mb-2">
          SCROLL TO EXPLORE
        </span>
        <div className="w-6 h-10 rounded-full border-2 border-cyan-500/40 group-hover:border-cyan-400 flex items-start justify-center p-1.5 transition-colors shadow-[0_0_10px_rgba(0,240,255,0.2)]">
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#00f0ff]"
          />
        </div>
      </motion.div>
    </section>
  );
};
