import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Briefcase, Award, GraduationCap, CheckCircle2, Calendar } from 'lucide-react';

export const Experience: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'work':
        return Briefcase;
      case 'certification':
        return Award;
      case 'education':
        return GraduationCap;
      default:
        return Briefcase;
    }
  };

  return (
    <section id="experience" className="relative py-28 bg-[#0a0a0a] border-t border-white/[0.08]">
      {/* Background spotlight */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 spotlight-glow blur-3xl opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="pb-12 border-b border-white/[0.08]">
          <div className="flex items-center gap-2 font-code text-xs text-[#F5C542] tracking-widest uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A3E635]" />
            <span>05 // EXPERIENCE & MILESTONES</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl text-white tracking-tight">
            PROVEN TRACK RECORD.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl font-normal">
            Hands-on data analytics experience combined with rigorous computer science training and industry BI specializations.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="mt-14 max-w-4xl mx-auto relative">
          
          {/* Vertical Glowing Line */}
          <div className="absolute top-4 bottom-4 left-4 sm:left-8 w-[2px] bg-gradient-to-b from-[#F5C542] via-[#D4AF37]/50 to-white/[0.05]" />

          <div className="space-y-12">
            {PORTFOLIO_DATA.experienceTimeline.map((item) => {
              const Icon = getIcon(item.type);
              return (
                <div key={item.id} className="relative pl-12 sm:pl-20 group">
                  
                  {/* Timeline Node Icon */}
                  <div className="absolute left-1.5 sm:left-5.5 -translate-x-1/2 top-1.5 w-7 h-7 rounded-full bg-[#121316] border-2 border-[#D4AF37] group-hover:border-[#A3E635] flex items-center justify-center text-[#F5C542] group-hover:text-[#A3E635] shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-colors z-10">
                    <Icon className="w-3.5 h-3.5" />
                  </div>

                  {/* Timeline Card */}
                  <div className="rounded-2xl glass-panel p-6 sm:p-8 border border-white/[0.08] group-hover:border-[#D4AF37]/40 transition-all duration-300 shadow-xl">
                    
                    {/* Header Row */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.06] pb-3 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="font-code text-xs font-semibold text-[#F5C542] flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.year}
                        </span>
                        {item.badge && (
                          <span className="px-2 py-0.5 text-[10px] font-code font-bold text-black bg-[#A3E635] rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <span className="text-xs font-code text-zinc-400">
                        {item.location}
                      </span>
                    </div>

                    {/* Role & Org */}
                    <h3 className="font-display text-2xl sm:text-3xl text-white tracking-wide group-hover:text-gold-gradient transition-colors">
                      {item.role}
                    </h3>
                    <div className="text-xs sm:text-sm font-code text-zinc-300 mt-1">
                      {item.organization}
                    </div>

                    {/* Bullet Points */}
                    <div className="mt-4 space-y-2.5">
                      {item.points.map((pt, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                          <CheckCircle2 className="w-4 h-4 text-[#A3E635] shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>

                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
