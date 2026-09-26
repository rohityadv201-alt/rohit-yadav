import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Activity, Database, TrendingUp, Cpu } from 'lucide-react';

export const Manifesto: React.FC = () => {
  const tickerItems = [
    { icon: Database, text: 'RELATIONAL ARCHITECTURE & STAR SCHEMAS' },
    { icon: Activity, text: 'REAL-TIME KPI TELEMETRY & ETL PIPELINES' },
    { icon: TrendingUp, text: 'FINANCIAL MODELING & CASH FLOW SENSITIVITY' },
    { icon: Cpu, text: 'SUPERVISED ML & PREDICTIVE CHURN CLASSIFIERS' },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#0a0a0a] via-[#111215] to-[#0a0a0a] border-y border-[#D4AF37]/20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[250px] spotlight-glow blur-3xl opacity-50 pointer-events-none" />

      {/* Repeating telemetry marquee ribbon */}
      <div className="overflow-hidden whitespace-nowrap border-b border-white/[0.05] pb-4 mb-10 select-none">
        <div className="inline-flex items-center gap-12 animate-pulse text-xs font-code tracking-[0.25em] text-[#D4AF37]">
          {tickerItems.concat(tickerItems).map((item, idx) => {
            const Icon = item.icon;
            return (
              <span key={idx} className="inline-flex items-center gap-2 text-zinc-400">
                <Icon className="w-3.5 h-3.5 text-[#F5C542]" />
                <span className="text-zinc-300 font-semibold">{item.text}</span>
                <span className="text-[#A3E635]">///</span>
              </span>
            );
          })}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Editorial Sub-lead */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.1] bg-[#141519] text-xs font-code text-zinc-300 mb-6 uppercase tracking-widest">
          <span className="text-[#D4AF37]">CORE CREED</span>
          <span>·</span>
          <span>ANALYST PHILOSOPHY</span>
        </div>

        {/* Full-bleed Manifesto Statement */}
        <blockquote className="font-display text-4xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-[1.02] text-white max-w-5xl mx-auto">
          "I DON'T JUST BUILD DASHBOARDS.{' '}
          <span className="text-gold-gradient block sm:inline">
            I BUILD DECISIONS.
          </span>"
        </blockquote>

        {/* Supporting proof statement */}
        <p className="mt-8 text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
          Dashboards only matter when they change behavior. Every query, measure, and pipeline is calibrated to turn latent figures into operating leverage.
        </p>

        {/* Precision pillars */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
          <div className="p-4 rounded-xl glass-panel border-white/[0.08]">
            <div className="text-xs font-code text-[#A3E635] tracking-wider mb-1">01 / INTEGRITY</div>
            <div className="font-semibold text-white text-sm">Clean Relational Models</div>
            <p className="text-xs text-zinc-400 mt-1">Zero ambiguous joins. Strict data integrity verification from source to report.</p>
          </div>
          <div className="p-4 rounded-xl glass-panel border-white/[0.08]">
            <div className="text-xs font-code text-[#F5C542] tracking-wider mb-1">02 / VELOCITY</div>
            <div className="font-semibold text-white text-sm">Automated Data Pipelines</div>
            <p className="text-xs text-zinc-400 mt-1">Automated scheduled refreshes that eliminate manual spreadsheet copy-pasting.</p>
          </div>
          <div className="p-4 rounded-xl glass-panel border-white/[0.08]">
            <div className="text-xs font-code text-[#D4AF37] tracking-wider mb-1">03 / OUTCOME</div>
            <div className="font-semibold text-white text-sm">Actionable Strategic Storytelling</div>
            <p className="text-xs text-zinc-400 mt-1">Executive KPIs that clearly reveal what to scale, what to cut, and what to watch.</p>
          </div>
        </div>

      </div>
    </section>
  );
};
