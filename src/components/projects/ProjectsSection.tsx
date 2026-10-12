import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { PORTFOLIO_DATA, ProjectItem } from '../../config/portfolioData';
import { ProjectCard } from './ProjectCard';
import { CyberImage } from '../common/CyberImage';
import { CyberButton } from '../common/CyberButton';
import { X, ExternalLink, Github, CheckCircle2, Terminal } from 'lucide-react';
import { sounds } from '../common/SoundEffects';

export const ProjectsSection: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Web Development', 'Software', 'Hardware', 'UI/UX'];

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const handleCloseModal = () => {
    sounds.playClick();
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="PORTFOLIO_DEPLOYMENTS"
          title="Featured Projects"
          subtitle="Explore academic engineering builds, embedded microcontroller systems, and full-stack software applications."
        />

        {/* Category Filters */}
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={(p) => setSelectedProject(p)}
            />
          ))}
        </div>
      </div>

      {/* Futuristic Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-3xl rounded-2xl bg-[#070e22] border border-cyan-500/40 shadow-[0_0_50px_rgba(0,240,255,0.25)] overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Corner Sci-Fi accents */}
              <span className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-400 z-30" />
              <span className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-400 z-30" />
              <span className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-cyan-400 z-30" />
              <span className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-400 z-30" />

              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-cyan-500/20 bg-slate-950/60">
                <div className="flex items-center space-x-2">
                  <Terminal className="w-4 h-4 text-cyan-400 animate-pulse" />
                  <span className="text-xs font-code text-cyan-300 uppercase tracking-widest">
                    PROJECT_SPECS://{selectedProject.id}
                  </span>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="p-1.5 rounded-lg border border-slate-700 hover:border-cyan-400 text-slate-400 hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body (Scrollable) */}
              <div className="p-6 overflow-y-auto space-y-6">
                <div className="aspect-video w-full rounded-xl overflow-hidden border border-cyan-500/30">
                  <CyberImage
                    src={selectedProject.image}
                    fallbackSrc={selectedProject.fallbackImage}
                    alt={selectedProject.title}
                    scanline={true}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-code bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 uppercase">
                      {selectedProject.category}
                    </span>
                    {selectedProject.featured && (
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-code bg-purple-950/80 border border-purple-500/40 text-purple-300 uppercase">
                        ★ FEATURED
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold font-display text-white mb-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed font-body">
                    {selectedProject.longDescription}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-xs font-code text-cyan-400 uppercase tracking-wider mb-3">
                    KEY TECHNICAL HIGHLIGHTS
                  </h4>
                  <div className="space-y-2">
                    {selectedProject.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start space-x-2.5 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-xs font-tech text-slate-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-xs font-code text-cyan-400 uppercase tracking-wider mb-2">
                    TECHNOLOGIES UTILISED
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded text-xs font-code bg-slate-900 border border-cyan-500/30 text-cyan-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="p-4 sm:p-6 border-t border-cyan-500/20 bg-slate-950/60 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center space-x-3">
                  {selectedProject.githubUrl && (
                    <CyberButton
                      href={selectedProject.githubUrl}
                      external={true}
                      variant="secondary"
                      size="sm"
                      icon={<Github className="w-4 h-4" />}
                    >
                      GitHub Repo
                    </CyberButton>
                  )}
                  {selectedProject.liveUrl && selectedProject.liveUrl !== '#' && (
                    <CyberButton
                      href={selectedProject.liveUrl}
                      external={true}
                      variant="primary"
                      size="sm"
                      icon={<ExternalLink className="w-4 h-4" />}
                    >
                      Live Demo
                    </CyberButton>
                  )}
                </div>

                <CyberButton
                  variant="ghost"
                  size="sm"
                  onClick={handleCloseModal}
                >
                  Close Window
                </CyberButton>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
