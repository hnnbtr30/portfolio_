import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  tag: string;
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  tag,
  title,
  subtitle,
  alignment = 'center',
}) => {
  const isCenter = alignment === 'center';

  return (
    <div className={`mb-16 ${isCenter ? 'text-center flex flex-col items-center' : 'text-left'}`}>
      {/* Category / HUD Tag */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-400 text-xs font-code tracking-widest uppercase mb-4 shadow-[0_0_12px_rgba(0,240,255,0.15)]"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
        <span>SYS://{tag}</span>
      </motion.div>

      {/* Main Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl md:text-5xl font-extrabold font-display tracking-wider text-white"
      >
        <span className="bg-gradient-to-r from-white via-slate-100 to-cyan-200 bg-clip-text text-transparent">
          {title}
        </span>
      </motion.h2>

      {/* Cyber Glowing Divider */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`flex items-center space-x-2 my-4 ${isCenter ? 'justify-center' : ''}`}
      >
        <div className="h-0.5 w-12 bg-gradient-to-r from-transparent to-cyan-500" />
        <div className="h-1.5 w-1.5 rotate-45 bg-cyan-400 shadow-[0_0_8px_#00f0ff]" />
        <div className="h-0.5 w-24 bg-gradient-to-r from-cyan-500 via-purple-500 to-transparent" />
      </motion.div>

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl text-slate-400 text-sm md:text-base leading-relaxed font-body"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
