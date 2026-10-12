import React from 'react';
import { motion } from 'framer-motion';
import { CyberImage } from '../common/CyberImage';
import { Cpu, ShieldCheck } from 'lucide-react';

interface HolographicFrameProps {
  imageSrc: string;
  fallbackSrc?: string;
  alt: string;
}

export const HolographicFrame: React.FC<HolographicFrameProps> = ({
  imageSrc,
  fallbackSrc = '/images/profile.svg',
  alt,
}) => {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-[4/5] p-3 flex items-center justify-center">
      {/* Outer Rotating Cyber Tech Rings */}
      <div className="absolute -inset-4 rounded-3xl border border-dashed border-cyan-500/20 animate-[spin_40s_linear_infinite] pointer-events-none" />
      <div className="absolute -inset-8 rounded-full border border-dotted border-purple-500/20 animate-[spin_60s_linear_infinite_reverse] pointer-events-none" />

      {/* Radiant Glowing Holographic Backing */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-purple-600/15 to-blue-500/20 rounded-2xl blur-xl animate-pulse" />

      {/* Main Glass Frame */}
      <div className="relative w-full h-full rounded-2xl overflow-hidden border border-cyan-400/50 bg-[#070e22]/80 backdrop-blur-md shadow-[0_0_35px_rgba(0,240,255,0.3)]">
        {/* Holographic Top Status HUD */}
        <div className="absolute top-0 inset-x-0 z-20 flex items-center justify-between px-4 py-2 bg-gradient-to-b from-[#040711]/90 to-transparent border-b border-cyan-500/20 text-[10px] font-code text-cyan-400">
          <div className="flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="font-bold tracking-widest">ID://HB-CpE</span>
          </div>
          <div className="flex items-center space-x-1 text-slate-400">
            <Cpu className="w-3 h-3 text-cyan-400" />
            <span>NEURAL_NODE_ON</span>
          </div>
        </div>

        {/* The Image Itself */}
        <div className="w-full h-full pt-8 pb-10">
          <CyberImage
            src={imageSrc}
            fallbackSrc={fallbackSrc}
            alt={alt}
            scanline={true}
            className="w-full h-full object-cover object-center filter contrast-105"
          />
        </div>

        {/* Bottom HUD Bar */}
        <div className="absolute bottom-0 inset-x-0 z-20 flex items-center justify-between px-4 py-2 bg-gradient-to-t from-[#040711]/95 to-transparent border-t border-cyan-500/20 text-[10px] font-code">
          <span className="text-cyan-300 tracking-wider flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-cyan-400" />
            PORTRAIT_FEED
          </span>
          <span className="text-slate-400 tracking-widest font-mono">
            SYS: 100% NOMINAL
          </span>
        </div>

        {/* Cyber Neon Corner Accents */}
        <span className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-400 shadow-[0_0_8px_#00f0ff] z-30" />
        <span className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-400 shadow-[0_0_8px_#00f0ff] z-30" />
        <span className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-cyan-400 shadow-[0_0_8px_#00f0ff] z-30" />
        <span className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-400 shadow-[0_0_8px_#00f0ff] z-30" />
      </div>

      {/* Floating Futuristic Tech Badges */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-6 top-1/4 z-30 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-cyan-500/40 text-cyan-300 text-xs font-code shadow-[0_0_15px_rgba(0,240,255,0.2)] backdrop-blur-md hidden sm:flex items-center gap-1.5"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
        <span>HARDWARE_READY</span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute -right-6 bottom-1/4 z-30 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-purple-500/40 text-purple-300 text-xs font-code shadow-[0_0_15px_rgba(157,78,221,0.2)] backdrop-blur-md hidden sm:flex items-center gap-1.5"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
        <span>EMBEDDED_IoT</span>
      </motion.div>
    </div>
  );
};
