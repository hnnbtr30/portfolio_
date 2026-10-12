import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { ProjectItem } from '../../config/portfolioData';
import { CyberImage } from '../common/CyberImage';
import { sounds } from '../common/SoundEffects';

interface ProjectCardProps {
  project: ProjectItem;
  onOpenDetails: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -8;
    const rotY = ((x - centerX) / centerX) * 8;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => sounds.playHover()}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.15s ease-out',
      }}
      className="relative rounded-2xl overflow-hidden bg-slate-900/60 border border-cyan-500/25 hover:border-cyan-400/80 transition-shadow duration-300 hover:shadow-[0_0_35px_rgba(0,240,255,0.25)] flex flex-col justify-between group"
    >
      {/* Corner Cyber Brackets */}
      <span className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity z-20" />
      <span className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity z-20" />
      <span className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity z-20" />
      <span className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity z-20" />

      {/* Top Media Area with Scanline & Category Overlay */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
        <CyberImage
          src={project.image}
          fallbackSrc={project.fallbackImage}
          alt={project.title}
          scanline={true}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Category Badge */}
        <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded bg-[#040711]/85 border border-cyan-500/40 text-[10px] font-code tracking-wider text-cyan-300 uppercase backdrop-blur-md">
          {project.category}
        </div>

        {/* Featured Tag if applicable */}
        {project.featured && (
          <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded bg-purple-950/85 border border-purple-500/40 text-[10px] font-code tracking-wider text-purple-300 uppercase backdrop-blur-md">
            ★ FEATURED
          </div>
        )}

        {/* Hover Action Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
          <button
            onClick={() => {
              sounds.playClick();
              onOpenDetails(project);
            }}
            className="px-4 py-2 rounded-lg bg-cyan-400 text-black text-xs font-bold font-tech uppercase tracking-wider shadow-[0_0_20px_#00f0ff] flex items-center gap-1.5 transition-transform hover:scale-105"
          >
            <span>View Project Details</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-xl font-bold font-display text-white group-hover:text-cyan-300 transition-colors mb-2">
            {project.title}
          </h3>

          <p className="text-slate-400 text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4 font-body">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded text-[10px] font-code bg-slate-950/80 border border-slate-800 text-cyan-300"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Card Footer Actions */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
          <button
            onClick={() => {
              sounds.playClick();
              onOpenDetails(project);
            }}
            className="text-xs font-tech font-bold text-cyan-400 hover:text-cyan-200 transition-colors flex items-center gap-1"
          >
            <span>SPECIFICATIONS</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center space-x-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sounds.playClick()}
                className="p-1.5 rounded-lg border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 hover:bg-slate-800 transition-all"
                title="View Source on GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && project.liveUrl !== '#' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sounds.playClick()}
                className="p-1.5 rounded-lg border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 hover:bg-slate-800 transition-all"
                title="View Live Prototype"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
