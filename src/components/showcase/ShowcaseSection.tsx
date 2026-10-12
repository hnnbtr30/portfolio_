import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { PORTFOLIO_DATA } from '../../config/portfolioData';
import { LightboxModal } from './LightboxModal';
import { CyberImage } from '../common/CyberImage';
import { Maximize2, UploadCloud } from 'lucide-react';
import { sounds } from '../common/SoundEffects';

export const ShowcaseSection: React.FC = () => {
  const { showcase } = PORTFOLIO_DATA;
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = [
    'All',
    'Portraits',
    'Academic Projects',
    'Certificates',
    'Hardware & Labs',
    'Design Previews',
  ];

  const filteredItems =
    activeCategory === 'All'
      ? showcase
      : showcase.filter((item) => item.category === activeCategory);

  const handleOpenLightbox = (index: number) => {
    sounds.playClick();
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section id="showcase" className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="VISUAL_ARCHIVE"
          title="Personal Showcase"
          subtitle="A high-resolution media gallery highlighting engineering prototypes, certifications, lab sessions, and design concepts."
        />

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                sounds.playClick();
                setActiveCategory(cat);
              }}
              className={`px-4 py-2 rounded-full text-xs font-tech uppercase tracking-wider transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-cyan-500 text-black font-bold shadow-[0_0_15px_rgba(0,240,255,0.5)]'
                  : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onMouseEnter={() => sounds.playHover()}
              onClick={() => handleOpenLightbox(index)}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900/60 border border-cyan-500/20 hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] cursor-pointer group"
            >
              <CyberImage
                src={item.image}
                fallbackSrc={item.fallbackImage}
                alt={item.title}
                scanline={true}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Category pill */}
              <div className="absolute top-3 left-3 z-10 px-2.5 py-0.5 rounded bg-slate-950/80 border border-cyan-500/30 text-[10px] font-code text-cyan-300 uppercase">
                {item.category}
              </div>

              {/* Hover Dark Overlay with Zoom & Title */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-base font-bold font-display text-white">
                    {item.title}
                  </h4>
                  <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 shadow-[0_0_10px_#00f0ff]">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-xs text-slate-300 line-clamp-1 font-body">
                  {item.description}
                </p>
                <span className="text-[10px] font-code text-cyan-400 mt-2">
                  CLICK TO EXPAND LIGHTBOX
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Helpful Customization Guide Callout */}
        <div className="mt-16 p-6 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-cyan-400">
            <UploadCloud className="w-8 h-8 flex-shrink-0 animate-bounce" />
            <div>
              <h4 className="text-sm font-bold font-display text-white">
                Effortless Photo Customization
              </h4>
              <p className="text-xs text-slate-400 font-body">
                Drop your real photos into <code className="text-cyan-300 bg-slate-900 px-1.5 py-0.5 rounded">/public/images/</code> to instantly update your portraits, certificates, and lab snapshots.
              </p>
            </div>
          </div>
          <span className="text-xs font-code text-cyan-300 px-3 py-1.5 rounded-lg bg-cyan-900/40 border border-cyan-500/40">
            AUTODETECT // ENABLED
          </span>
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        items={filteredItems}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
};
