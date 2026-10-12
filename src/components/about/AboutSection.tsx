import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { PORTFOLIO_DATA } from '../../config/portfolioData';
import { CyberImage } from '../common/CyberImage';
import { CyberButton } from '../common/CyberButton';
import { FileText, Compass, Terminal, CheckCircle2 } from 'lucide-react';
import { sounds } from '../common/SoundEffects';

export const AboutSection: React.FC = () => {
  const { personal, statistics } = PORTFOLIO_DATA;

  return (
    <section id="about" className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="BIOGRAPHY_&_TELEMETRY"
          title="About Me"
          subtitle="Engineering curiosity into tangible hardware prototypes and intelligent software solutions."
        />

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Photo / Technical Frame (Col 5) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md aspect-[4/5] rounded-2xl overflow-hidden border border-cyan-500/40 bg-slate-900/60 p-2 shadow-[0_0_35px_rgba(0,240,255,0.15)] group">
              {/* Corner brackets */}
              <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400 z-20" />
              <span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400 z-20" />
              <span className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400 z-20" />
              <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400 z-20" />

              <div className="w-full h-full rounded-xl overflow-hidden relative">
                <CyberImage
                  src={personal.aboutImage}
                  fallbackSrc="/images/about.svg"
                  alt={`Hanna Abigail Beter - About`}
                  cyberFrame={false}
                  scanline={true}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Floating HUD status */}
                <div className="absolute bottom-3 inset-x-3 bg-slate-950/85 backdrop-blur-md rounded-lg p-3 border border-cyan-500/30 text-xs font-code">
                  <div className="flex justify-between items-center text-cyan-400 mb-1">
                    <span className="font-semibold flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5" />
                      CpE ARCHITECTURE
                    </span>
                    <span className="text-[10px] text-slate-400">STATUS: ACTIVE</span>
                  </div>
                  <p className="text-[11px] text-slate-300">
                    Microcontroller Systems • Embedded IoT • Full-Stack Web
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Narrative & Statistics (Col 7) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <div className="flex items-center space-x-2 text-cyan-400 text-xs font-code uppercase tracking-wider mb-3">
              <Compass className="w-4 h-4 text-cyan-400 animate-spin" />
              <span>THE INNOVATOR'S PERSPECTIVE</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-4">
              Building the Bridge Between Silicon & Code
            </h3>

            <p className="text-slate-300 text-base leading-relaxed mb-4 font-body">
              {personal.bioIntro}
            </p>

            <div className="text-slate-400 text-sm leading-relaxed mb-8 whitespace-pre-line font-body">
              {personal.bioDescription}
            </div>

            {/* Core Competencies Quick List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 w-full">
              {[
                'Embedded IoT & Firmware Logic',
                'Digital System Design & FPGA',
                'Modern Frontend UI/UX Architecture',
                'Sensor Integration & Telemetry Bus',
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-2.5 p-2.5 rounded-lg bg-slate-900/50 border border-slate-800 text-xs font-tech text-slate-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Resume Button */}
            <div className="flex items-center space-x-4 mb-10">
              <CyberButton
                href={personal.resumeUrl}
                variant="primary"
                size="md"
                icon={<FileText className="w-4 h-4" />}
                onClick={() => {
                  if (personal.resumeUrl === '#') {
                    alert('Resume placeholder: You can upload your PDF resume to /public/resume.pdf and link it in src/config/portfolioData.ts!');
                  }
                }}
              >
                Download Curriculum Vitae
              </CyberButton>
            </div>
          </motion.div>
        </div>

        {/* Animated Statistics Counters Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statistics.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface StatCardProps {
  stat: {
    label: string;
    value: number;
    suffix?: string;
    description: string;
  };
  index: number;
}

const StatCard: React.FC<StatCardProps> = ({ stat, index }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = stat.value;
      const duration = 1500;
      const stepTime = Math.abs(Math.floor(duration / (end || 1)));

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        }
      }, Math.max(stepTime, 25));

      return () => clearInterval(timer);
    }
  }, [isInView, stat.value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => sounds.playHover()}
      className="relative p-6 rounded-xl bg-slate-900/60 border border-cyan-500/20 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,240,255,0.2)] group"
    >
      {/* Corner mini bracket */}
      <span className="absolute top-2 right-2 w-2 h-2 border-t border-r border-cyan-400 opacity-60" />

      <div className="flex items-baseline space-x-1 mb-2">
        <span className="text-4xl lg:text-5xl font-black font-display text-white group-hover:text-cyan-300 transition-colors">
          {count}
        </span>
        {stat.suffix && (
          <span className="text-xl font-bold font-display text-cyan-400">
            {stat.suffix}
          </span>
        )}
      </div>

      <h4 className="text-sm font-bold font-tech text-slate-200 uppercase tracking-wider mb-1">
        {stat.label}
      </h4>

      <p className="text-xs text-slate-400 font-body leading-relaxed">
        {stat.description}
      </p>

      {/* Cyber bottom line */}
      <div className="absolute bottom-0 inset-x-6 h-0.5 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent group-hover:via-cyan-400 transition-all" />
    </motion.div>
  );
};
