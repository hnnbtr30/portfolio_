import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { PORTFOLIO_DATA } from '../../config/portfolioData';
import { GraduationCap, Award, Briefcase, Flag, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { sounds } from '../common/SoundEffects';

export const ExperienceSection: React.FC = () => {
  const { timeline } = PORTFOLIO_DATA;
  const [filter, setFilter] = useState<string>('all');

  const getTimelineIcon = (type: string) => {
    switch (type) {
      case 'education':
        return <GraduationCap className="w-5 h-5 text-cyan-400" />;
      case 'certification':
        return <Award className="w-5 h-5 text-purple-400" />;
      case 'experience':
        return <Briefcase className="w-5 h-5 text-emerald-400" />;
      case 'milestone':
        return <Flag className="w-5 h-5 text-amber-400" />;
      default:
        return <GraduationCap className="w-5 h-5 text-cyan-400" />;
    }
  };

  const filteredTimeline =
    filter === 'all'
      ? timeline
      : timeline.filter((item) => item.type === filter);

  return (
    <section id="experience" className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="ACADEMIC_&_CAREER_TRACK"
          title="Experience & Education"
          subtitle="A futuristic timeline tracing my academic progression in Computer Engineering, technical milestones, and earned credentials."
        />

        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {[
            { id: 'all', label: 'All Milestones' },
            { id: 'education', label: 'Education' },
            { id: 'certification', label: 'Certifications' },
            { id: 'milestone', label: 'Project Leadership' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                sounds.playClick();
                setFilter(item.id);
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-tech uppercase tracking-wider transition-all duration-200 ${
                filter === item.id
                  ? 'bg-cyan-500 text-black font-bold shadow-[0_0_15px_rgba(0,240,255,0.5)]'
                  : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Futuristic Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Glowing Circuit Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-cyan-500 -translate-x-1/2 shadow-[0_0_10px_#00f0ff] opacity-40" />

          <div className="space-y-12">
            {filteredTimeline.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={() => sounds.playHover()}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node Dot / Icon */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-xl bg-slate-950 border-2 border-cyan-400 shadow-[0_0_15px_#00f0ff] z-20 group-hover:scale-110 transition-transform">
                    {getTimelineIcon(item.type)}
                  </div>

                  {/* Spacer for Desktop alignment */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Content Card */}
                  <div
                    className={`w-full md:w-1/2 pl-14 md:pl-0 ${
                      isEven ? 'md:pr-12' : 'md:pl-12'
                    }`}
                  >
                    <div className="relative p-6 rounded-2xl bg-slate-900/70 border border-cyan-500/20 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,240,255,0.2)] group">
                      {/* Corner Accents */}
                      <span className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-cyan-400 opacity-60" />
                      <span className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-cyan-400 opacity-60" />

                      {/* Header with Period & Badge */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="inline-flex items-center space-x-1.5 text-xs font-code text-cyan-400 font-semibold">
                          <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{item.period}</span>
                        </span>

                        {item.badge && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-code bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 uppercase">
                            {item.badge}
                          </span>
                        )}
                      </div>

                      {/* Title & Institution */}
                      <h3 className="text-lg font-bold font-display text-white group-hover:text-cyan-300 transition-colors mb-1">
                        {item.title}
                      </h3>

                      <div className="flex items-center space-x-2 text-xs font-tech text-purple-300 mb-3">
                        <span>{item.institution}</span>
                        {item.location && (
                          <>
                            <span>•</span>
                            <span className="flex items-center text-slate-400">
                              <MapPin className="w-3 h-3 mr-0.5" />
                              {item.location}
                            </span>
                          </>
                        )}
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 font-body">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-1.5 pt-3 border-t border-slate-800">
                        {item.highlights.map((hl, idx) => (
                          <div
                            key={idx}
                            className="flex items-start space-x-2 text-xs font-body text-slate-400"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
