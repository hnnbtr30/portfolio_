import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../config/portfolioData';
import { sounds } from '../common/SoundEffects';

export const Footer: React.FC = () => {
  const { personal, navigation, socialLinks, footer } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    sounds.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'github':
        return <Github className="w-4 h-4" />;
      case 'linkedin':
        return <Linkedin className="w-4 h-4" />;
      case 'twitter':
        return <Twitter className="w-4 h-4" />;
      default:
        return <Mail className="w-4 h-4" />;
    }
  };

  return (
    <footer className="relative bg-[#02050d] border-t border-cyan-500/20 pt-16 pb-12 overflow-hidden z-10">
      {/* Animated Glowing Cyber Scanline across top border */}
      <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#00f0ff] animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80 items-start">
          {/* Logo & Bio Quote (Col 5) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-950 to-slate-900 border border-cyan-400/50 flex items-center justify-center font-display font-black text-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.4)]">
                {personal.initials}
              </div>
              <div>
                <h3 className="font-display font-bold text-white text-base tracking-wider">
                  {personal.name}
                </h3>
                <p className="text-xs font-code text-cyan-400 uppercase tracking-widest">
                  {personal.title}
                </p>
              </div>
            </div>

            <p className="text-sm font-tech text-cyan-200/90 italic tracking-wide">
              "{footer.quote}"
            </p>

            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-slate-950 border border-slate-800 text-[10px] font-code text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>{footer.systemStatus}</span>
            </div>
          </div>

          {/* Quick Navigation Links (Col 4) */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-code text-cyan-400 uppercase tracking-wider mb-4">
              SYSTEM DIRECTORY
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    sounds.playClick();
                    document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  onMouseEnter={() => sounds.playHover()}
                  className="text-xs font-tech text-slate-400 hover:text-cyan-300 transition-colors py-1 flex items-center space-x-1"
                >
                  <span className="text-cyan-500/50">&gt;</span>
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Social Profiles & Back to Top (Col 3) */}
          <div className="md:col-span-3 flex flex-col md:items-end space-y-4">
            <h4 className="text-xs font-code text-cyan-400 uppercase tracking-wider">
              NETWORK TERMINALS
            </h4>

            <div className="flex items-center space-x-2">
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sounds.playClick()}
                  onMouseEnter={() => sounds.playHover()}
                  className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-400/50 hover:bg-slate-800 transition-all shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                  title={link.platform}
                >
                  {getSocialIcon(link.platform)}
                </a>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              onMouseEnter={() => sounds.playHover()}
              className="mt-4 px-3.5 py-2 rounded-lg bg-slate-900 border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-500/10 text-cyan-300 text-xs font-tech uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,240,255,0.15)]"
            >
              <span>Back To Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-code gap-4">
          <p>{footer.copyright}</p>
          <p className="flex items-center gap-1">
            <span>ENGINEERED WITH RIGOR</span>
            <span className="text-cyan-400">•</span>
            <span className="text-cyan-300">FUTURE READY</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
