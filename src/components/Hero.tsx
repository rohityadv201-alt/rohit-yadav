import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowRight, Download, RefreshCw, Sparkles, Terminal, MapPin, CheckCircle2 } from 'lucide-react';
import { soundFX } from '../utils/audio';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [headlineIndex, setHeadlineIndex] = useState<number>(0);
  const headlines = [
    PORTFOLIO_DATA.personal.headline,
    PORTFOLIO_DATA.personal.altHeadline,
  ];

  const toggleHeadline = () => {
    soundFX.playClick();
    setHeadlineIndex((prev) => (prev + 1) % headlines.length);
  };

  return (
    <section id="about" className="relative min-h-[92vh] pt-32 pb-20 flex items-center bg-grid-pattern overflow-hidden">
      {/* Background Cinematic Spotlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] spotlight-glow pointer-events-none blur-3xl opacity-75" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] lime-spotlight-glow pointer-events-none blur-3xl opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic & Strategic Core (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Monospace System Kicker / Role Tagline */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#16171b]/90 text-xs font-code font-medium text-[#F5C542]">
                <span className="w-2 h-2 rounded-full bg-[#A3E635] animate-pulse" />
                <span>{PORTFOLIO_DATA.personal.roleTitle}</span>
              </div>
              <div className="hidden sm:inline-flex items-center gap-1.5 text-xs font-code text-zinc-400">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{PORTFOLIO_DATA.personal.location}</span>
              </div>
            </div>

            {/* Giant Gradient Headline with Alt Switcher */}
            <div className="relative group">
              <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.92] text-gold-gradient transition-all duration-300">
                {headlines[headlineIndex]}
              </h1>

              {/* Subtle headline toggle */}
              <button
                onClick={toggleHeadline}
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-code text-zinc-400 hover:text-[#A3E635] transition-colors py-1 focus:outline-none"
                title="Toggle alternative headline"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>SWITCH PERSPECTIVE ({headlineIndex + 1}/2)</span>
              </button>
            </div>

            {/* Intro Prose (2 lines exact match) */}
            <p className="text-lg sm:text-xl text-zinc-300 font-normal leading-relaxed max-w-2xl">
              {PORTFOLIO_DATA.personal.intro}
            </p>

            {/* Quick Tech Badges */}
            <div className="pt-1 flex flex-wrap items-center gap-2">
              <span className="text-xs font-code text-zinc-400 uppercase tracking-widest mr-2">CORE STACK:</span>
              {['SQL', 'POWER BI', 'EXCEL', 'PYTHON', 'AI/ML', 'FINANCIAL ANALYSIS', 'WEB DEV'].map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 text-xs font-code font-semibold tracking-wider text-zinc-300 bg-[#131417] border border-white/[0.08] hover:border-[#D4AF37]/50 hover:text-[#F5C542] transition-colors rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                onClick={() => soundFX.playClick()}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold tracking-wider uppercase text-black bg-gradient-to-r from-[#D4AF37] to-[#F5C542] hover:from-[#F5C542] hover:to-[#e6b800] rounded-xl shadow-[0_0_30px_rgba(212,175,55,0.35)] hover:shadow-[0_0_35px_rgba(245,197,66,0.6)] transition-all group active:scale-95"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={() => {
                  soundFX.playClick();
                  onOpenResume();
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold tracking-wider uppercase text-zinc-200 hover:text-white bg-[#141519] hover:bg-[#1a1c22] border border-white/[0.12] hover:border-[#D4AF37]/40 rounded-xl transition-all shadow-lg active:scale-95"
              >
                <Download className="w-4 h-4 text-[#F5C542]" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Direct Verification Metrics Grid */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-white/[0.08]">
              {PORTFOLIO_DATA.stats.map((st) => (
                <div key={st.label} className="p-3 rounded-lg bg-[#111215]/80 border border-white/[0.05]">
                  <div className="font-display text-2xl text-white tracking-wide">{st.value}</div>
                  <div className="text-[11px] font-code text-[#D4AF37] tracking-wider uppercase">{st.label}</div>
                  <div className="text-[10px] text-zinc-400 mt-0.5">{st.detail}</div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Full-Height Portrait with Spotlight Glow (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            
            {/* The Soft Spotlight Halo Behind Portrait */}
            <div className="absolute inset-0 m-auto w-[360px] h-[480px] rounded-full spotlight-glow blur-2xl opacity-90 pointer-events-none" />

            <div className="relative w-full max-w-[380px] sm:max-w-[420px] rounded-2xl p-2.5 glass-panel-gold border-gold-glow group">
              
              {/* Outer Decorative Frame Details */}
              <div className="absolute -top-2.5 -left-2.5 px-2.5 py-0.5 bg-[#0a0a0a] border border-[#D4AF37]/40 text-[10px] font-code text-[#F5C542] rounded uppercase tracking-widest shadow-md">
                ROHIT YADAV // DATA INTEL
              </div>

              <div className="absolute -bottom-3 -right-2 px-3 py-1 bg-[#0a0a0a] border border-[#A3E635]/40 text-[11px] font-code text-[#A3E635] rounded-full flex items-center gap-1.5 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-[#A3E635] animate-ping" />
                <span>AVAILABLE FOR HIRE</span>
              </div>

              {/* Portrait Container */}
              <div className="relative rounded-xl overflow-hidden aspect-[3/4] bg-[#16171b]">
                <img
                  src={PORTFOLIO_DATA.personal.avatar}
                  alt="Rohit Yadav — Data Analyst"
                  className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500 filter contrast-[1.05]"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle dark gradient scrim at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />

                {/* Overlaid Bio Card on Image Bottom */}
                <div className="absolute bottom-3 inset-x-3 p-3 rounded-lg bg-[#0e1014]/90 backdrop-blur-md border border-white/[0.1] text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-white tracking-wide">Rohit Yadav</span>
                    <span className="text-[10px] font-code text-[#D4AF37]">1 YR EXP</span>
                  </div>
                  <div className="text-[11px] text-zinc-300 mt-1 line-clamp-1">
                    SQL · Power BI · Python · AI/ML
                  </div>
                  <div className="mt-2 flex items-center justify-between text-[10px] font-code text-zinc-400 border-t border-white/[0.08] pt-1.5">
                    <span className="text-[#A3E635] flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> VERIFIED
                    </span>
                    <span>INDORE, INDIA</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
