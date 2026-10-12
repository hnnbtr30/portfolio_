import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2, Calendar, Tag } from 'lucide-react';
import { ShowcaseItem } from '../../config/portfolioData';
import { CyberImage } from '../common/CyberImage';
import { sounds } from '../common/SoundEffects';

interface LightboxModalProps {
  items: ShowcaseItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}) => {
  const currentItem = items[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !currentItem) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 sm:p-6 select-none">
        {/* Close Button */}
        <button
          onClick={() => {
            sounds.playClick();
            onClose();
          }}
          className="absolute top-6 right-6 z-50 p-2.5 rounded-xl border border-cyan-500/40 bg-slate-900/80 text-cyan-400 hover:text-white hover:bg-cyan-500/20 transition-all shadow-[0_0_15px_rgba(0,240,255,0.3)]"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Previous Button */}
        <button
          onClick={() => {
            sounds.playClick();
            onPrev();
          }}
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-xl border border-cyan-500/40 bg-slate-900/80 text-cyan-400 hover:text-white hover:bg-cyan-500/20 transition-all shadow-[0_0_15px_rgba(0,240,255,0.3)]"
          aria-label="Previous Image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={() => {
            sounds.playClick();
            onNext();
          }}
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-xl border border-cyan-500/40 bg-slate-900/80 text-cyan-400 hover:text-white hover:bg-cyan-500/20 transition-all shadow-[0_0_15px_rgba(0,240,255,0.3)]"
          aria-label="Next Image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Modal Center Window */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="relative max-w-4xl w-full max-h-[85vh] rounded-2xl overflow-hidden border border-cyan-500/40 bg-[#070e22] shadow-[0_0_50px_rgba(0,240,255,0.3)] flex flex-col"
        >
          {/* Top Info Bar */}
          <div className="flex items-center justify-between px-6 py-3 border-b border-cyan-500/20 bg-slate-950/70 text-xs font-code">
            <span className="text-cyan-400 uppercase tracking-widest flex items-center gap-1.5">
              <Maximize2 className="w-3.5 h-3.5" />
              HUD_IMAGE_VIEWER [{currentIndex + 1} / {items.length}]
            </span>
            <span className="px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 uppercase">
              {currentItem.category}
            </span>
          </div>

          {/* Central Image Slot */}
          <div className="relative flex-1 bg-slate-950 flex items-center justify-center p-2 overflow-hidden min-h-[300px] max-h-[60vh]">
            <CyberImage
              src={currentItem.image}
              fallbackSrc={currentItem.fallbackImage}
              alt={currentItem.title}
              scanline={true}
              className="max-h-full max-w-full object-contain mx-auto"
            />
          </div>

          {/* Bottom Caption Bar */}
          <div className="p-6 bg-slate-950/80 border-t border-cyan-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold font-display text-white mb-1">
                {currentItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-body">
                {currentItem.description}
              </p>
            </div>

            <div className="flex items-center space-x-3 text-xs font-code text-slate-400 flex-shrink-0">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                {currentItem.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-cyan-300">
                <Tag className="w-3.5 h-3.5" />
                {currentItem.tag}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
