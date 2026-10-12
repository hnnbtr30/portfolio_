import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { PORTFOLIO_DATA } from '../../config/portfolioData';
import { Code2, Globe, Cpu, Palette, Database, Wrench, Sparkles, CheckCircle } from 'lucide-react';
import { sounds } from '../common/SoundEffects';

export const SkillsSection: React.FC = () => {
  const { skills } = PORTFOLIO_DATA;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-6 h-6" />;
      case 'Globe':
        return <Globe className="w-6 h-6" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6" />;
      case 'Palette':
        return <Palette className="w-6 h-6" />;
      case 'Database':
        return <Database className="w-6 h-6" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6" />;
      default:
        return <Sparkles className="w-6 h-6" />;
    }
  };

  const filteredSkills =
    selectedCategory === 'all'
      ? skills
      : skills.filter((item) => item.id === selectedCategory);

  return (
    <section id="skills" className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="TECH_STACK_&_SYSTEMS"
          title="Technical Skills"
          subtitle="A comprehensive toolkit spanning embedded hardware systems, computer architecture, and modern full-stack web technologies."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => {
              sounds.playClick();
              setSelectedCategory('all');
            }}
            className={`px-4 py-2 rounded-full text-xs font-tech uppercase tracking-wider transition-all duration-200 ${
              selectedCategory === 'all'
                ? 'bg-cyan-500 text-black font-bold shadow-[0_0_15px_rgba(0,240,255,0.5)]'
                : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300'
            }`}
          >
            All Categories ({skills.length})
          </button>

          {skills.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                sounds.playClick();
                setSelectedCategory(cat.id);
              }}
              className={`px-4 py-2 rounded-full text-xs font-tech uppercase tracking-wider transition-all duration-200 ${
                selectedCategory === cat.id
                  ? 'bg-cyan-500 text-black font-bold shadow-[0_0_15px_rgba(0,240,255,0.5)]'
                  : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((category, index) => (
            <motion.div
              key={category.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onMouseEnter={() => sounds.playHover()}
              className="relative rounded-2xl p-6 bg-slate-900/60 border border-cyan-500/20 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] group flex flex-col justify-between"
            >
              {/* Corner accents */}
              <span className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyan-400/40 group-hover:border-cyan-400 transition-colors" />
              <span className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyan-400/40 group-hover:border-cyan-400 transition-colors" />
              <span className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-cyan-400/40 group-hover:border-cyan-400 transition-colors" />
              <span className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-cyan-400/40 group-hover:border-cyan-400 transition-colors" />

              <div>
                {/* Header with Icon & Accent */}
                <div className="flex items-center space-x-3 mb-4">
                  <div
                    className="p-3 rounded-xl border border-cyan-500/30 group-hover:border-cyan-400 transition-colors shadow-[0_0_15px_rgba(0,240,255,0.15)]"
                    style={{
                      backgroundColor: `${category.accent}15`,
                      color: category.accent,
                    }}
                  >
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
                      {category.category}
                    </h3>
                    <span className="text-[10px] font-code text-slate-400 uppercase tracking-widest">
                      {category.skills.length} TECHNOLOGIES
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mb-6 font-body">
                  {category.description}
                </p>

                {/* Skills Badges List */}
                <div className="space-y-2.5">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center justify-between p-2 rounded-lg transition-colors text-xs font-tech ${
                        skill.highlight
                          ? 'bg-cyan-950/40 border border-cyan-500/30 text-cyan-200'
                          : 'bg-slate-950/50 border border-slate-800/80 text-slate-300'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <CheckCircle
                          className="w-3.5 h-3.5 flex-shrink-0"
                          style={{ color: category.accent }}
                        />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-[10px] font-code text-slate-400 uppercase tracking-wider px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Bar */}
              <div
                className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-code text-slate-500"
              >
                <span>SYS_NODE://READY</span>
                <span style={{ color: category.accent }}>● VERIFIED</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
