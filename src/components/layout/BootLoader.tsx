import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, ShieldCheck, Zap } from 'lucide-react';
import { sounds } from '../common/SoundEffects';

interface BootLoaderProps {
  onComplete: () => void;
}

export const BootLoader: React.FC<BootLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [isDone, setIsDone] = useState(false);

  const bootLogs = [
    'BOOTING CpE://CORE_SYSTEMS.v2026',
    'MOUNTING HARDWARE TELEMETRY BUS... [OK]',
    'INITIALIZING FPGA & EMBEDDED MODULES... [OK]',
    'ALLOCATING NEURAL HEURISTICS... [OK]',
    'ESTABLISHING ENCRYPTED HUD DISPLAY... [OK]',
    'SYSTEM READY: HANNA ABIGAIL B. BETER',
  ];

  useEffect(() => {
    sounds.playBoot();

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 8) + 4;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 400);
          }, 350);
          return 100;
        }
        return next;
      });
    }, 45);

    // Progressive logs
    bootLogs.forEach((log, index) => {
      setTimeout(() => {
        setLogs((prev) => [...prev, log]);
      }, (index + 1) * 200);
    });

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        clearInterval(interval);
        setIsDone(true);
        onComplete();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsDone(true);
    onComplete();
  };

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#040711] text-cyan-400 p-6 select-none font-code"
        >
          {/* Subtle background radar scanlines */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.06)_0%,transparent_70%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.02)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none opacity-40" />

          {/* Holographic Box */}
          <div className="relative w-full max-w-lg p-8 rounded-xl border border-cyan-500/30 bg-[#070d1e]/90 shadow-[0_0_40px_rgba(0,240,255,0.15)] backdrop-blur-xl">
            {/* Corner cyber brackets */}
            <span className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-cyan-400" />
            <span className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-cyan-400" />
            <span className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-cyan-400" />
            <span className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-cyan-400" />

            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-cyan-500/20 mb-6">
              <div className="flex items-center space-x-2">
                <Terminal className="w-5 h-5 text-cyan-400 animate-pulse" />
                <span className="text-xs uppercase tracking-widest text-cyan-300 font-bold">
                  HB://DIAGNOSTIC_INIT
                </span>
              </div>
              <button
                onClick={handleSkip}
                className="text-xs px-3 py-1 rounded border border-cyan-500/40 hover:bg-cyan-500/20 text-cyan-300 transition-colors flex items-center space-x-1"
                title="Skip boot sequence"
              >
                <span>SKIP [ESC]</span>
                <Zap className="w-3 h-3 text-cyan-400" />
              </button>
            </div>

            {/* Terminal output */}
            <div className="space-y-2 min-h-[140px] text-xs text-slate-300">
              {logs.map((log, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span className="text-cyan-500">&gt;</span>
                  <span className={index === logs.length - 1 ? 'text-cyan-300 font-semibold' : 'text-slate-400'}>
                    {log}
                  </span>
                </div>
              ))}
            </div>

            {/* Progress bar */}
            <div className="mt-8 space-y-2">
              <div className="flex justify-between text-xs text-slate-400 font-code">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  LOADING_PORTFOLIO_SYSTEMS
                </span>
                <span className="text-cyan-400 font-bold">{progress}%</span>
              </div>
              <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-cyan-500/30">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 via-sky-400 to-purple-500 rounded-full transition-all duration-150 shadow-[0_0_12px_#00f0ff]"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
