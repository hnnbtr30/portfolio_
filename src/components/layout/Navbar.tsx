import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Volume2, VolumeX, Sparkles, Send } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../config/portfolioData';
import { sounds } from '../common/SoundEffects';
import { CyberButton } from '../common/CyberButton';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(sounds.isEnabled());
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section spy
      const sections = PORTFOLIO_DATA.navigation.map((nav) => nav.id);
      for (const sectionId of [...sections].reverse()) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAudio = () => {
    const next = !audioEnabled;
    sounds.setEnabled(next);
    setAudioEnabled(next);
    if (next) sounds.playSuccess();
  };

  const handleNavClick = (href: string) => {
    sounds.playClick();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#040711]/90 backdrop-blur-md border-b border-cyan-500/20 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.7)]'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / HB Initials */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="group flex items-center space-x-3 cursor-pointer"
          >
            {/* Hexagonal Sci-Fi Badge */}
            <div className="relative w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-cyan-950 via-[#0a1128] to-slate-900 border border-cyan-400/50 group-hover:border-cyan-300 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.6)] transition-all duration-300">
              <span className="font-display font-black text-cyan-400 group-hover:text-cyan-200 text-lg tracking-wider">
                {PORTFOLIO_DATA.personal.initials}
              </span>
              <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping" />
            </div>

            <div className="flex flex-col">
              <span className="font-display font-bold text-sm tracking-wider text-slate-100 group-hover:text-cyan-300 transition-colors">
                HANNA BETER
              </span>
              <span className="font-code text-[10px] text-cyan-500/80 tracking-widest uppercase">
                CpE // ARCHITECT
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-slate-950/40 border border-cyan-500/10 rounded-full px-4 py-1.5 backdrop-blur-sm">
            {PORTFOLIO_DATA.navigation.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  onMouseEnter={() => sounds.playHover()}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium font-tech tracking-wider uppercase transition-all duration-200 ${
                    isActive
                      ? 'text-cyan-300 bg-cyan-950/60 shadow-[0_0_12px_rgba(0,240,255,0.3)] border border-cyan-500/40'
                      : 'text-slate-400 hover:text-cyan-300 hover:bg-cyan-950/20'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="navGlow"
                      className="absolute inset-0 rounded-full -z-10 bg-cyan-400/10"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Audio Toggle */}
            <button
              onClick={toggleAudio}
              className="p-2 rounded-lg border border-cyan-500/20 text-slate-400 hover:text-cyan-300 hover:border-cyan-400/50 hover:bg-cyan-950/30 transition-all text-xs flex items-center gap-1.5 font-code"
              title={audioEnabled ? 'Mute synthesized sound effects' : 'Enable synthesized sound effects'}
            >
              {audioEnabled ? (
                <>
                  <Volume2 className="w-4 h-4 text-cyan-400 animate-pulse" />
                  <span className="text-[10px] text-cyan-400">SFX: ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4 text-slate-500" />
                  <span className="text-[10px] text-slate-500">SFX: OFF</span>
                </>
              )}
            </button>

            {/* Glowing "Let's Connect" Button */}
            <CyberButton
              href="#contact"
              variant="primary"
              size="sm"
              icon={<Send className="w-3.5 h-3.5" />}
              className="shadow-[0_0_20px_rgba(0,240,255,0.4)]"
            >
              Let's Connect
            </CyberButton>
          </div>

          {/* Mobile Menu Button & Sound Toggle */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={toggleAudio}
              className="p-2 rounded-lg border border-cyan-500/30 text-slate-400 hover:text-cyan-300"
              title="Toggle sound"
            >
              {audioEnabled ? <Volume2 className="w-4 h-4 text-cyan-400" /> : <VolumeX className="w-4 h-4" />}
            </button>

            <button
              onClick={() => {
                sounds.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2 rounded-lg border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-30 bg-[#070e22]/95 border-b border-cyan-500/30 backdrop-blur-xl p-6 md:hidden shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
          >
            <div className="flex flex-col space-y-3">
              {PORTFOLIO_DATA.navigation.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`px-4 py-2.5 rounded-lg text-sm font-medium font-tech tracking-wider uppercase transition-colors flex items-center justify-between ${
                      isActive
                        ? 'text-cyan-300 bg-cyan-950/60 border border-cyan-500/40 shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                        : 'text-slate-300 hover:text-cyan-400 hover:bg-slate-900/60'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <Sparkles className="w-4 h-4 text-cyan-400" />}
                  </a>
                );
              })}

              <div className="pt-3 border-t border-slate-800">
                <CyberButton
                  href="#contact"
                  variant="primary"
                  size="md"
                  icon={<Send className="w-4 h-4" />}
                  className="w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Let's Connect
                </CyberButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
