import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, Code, Eye, ExternalLink, Github } from 'lucide-react';
import { soundFX } from '../utils/audio';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('ALL');

  const filterCategories = ['ALL', 'E-COMMERCE', 'DATA & BI', 'AI & FINANCE'];

  const filteredProjects = PORTFOLIO_DATA.projects.filter((p) => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'E-COMMERCE') return p.category.includes('E-COMMERCE');
    if (activeFilter === 'DATA & BI') return p.category.includes('DATA & BUSINESS');
    if (activeFilter === 'AI & FINANCE') return p.category.includes('AI/ML');
    return true;
  });

  return (
    <section id="projects" className="relative py-28 bg-[#0a0a0a]">
      {/* Background ambient accents */}
      <div className="absolute top-1/3 left-0 w-96 h-96 spotlight-glow blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 lime-spotlight-glow blur-3xl opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-2 font-code text-xs text-[#F5C542] tracking-widest uppercase mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A3E635]" />
              <span>03 // SELECTED WORKS</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl text-white tracking-tight">
              ENGINEERED VALUE.
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl font-normal">
              Production e-commerce platforms, scalable relational databases, and executive BI dashboards built for commercial impact.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-[#121316] border border-white/[0.08]">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  soundFX.playClick();
                  setActiveFilter(cat);
                }}
                className={`px-3.5 py-1.5 text-xs font-code font-semibold tracking-wider rounded-lg transition-all ${
                  activeFilter === cat
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#F5C542] text-black shadow-md'
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Stack */}
        <div className="mt-12 space-y-12">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group relative rounded-2xl glass-panel border border-white/[0.08] hover:border-[#D4AF37]/50 transition-all duration-300 overflow-hidden shadow-2xl hover:shadow-[0_0_35px_rgba(212,175,55,0.15)]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-10 items-stretch">
                
                {/* Left Side: Information & Pill Badges (7 cols) */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                  <div>
                    {/* Category Header with Motif Tag */}
                    <div className="flex items-center gap-3 text-xs font-code tracking-wider">
                      <span className="text-[#F5C542] font-semibold">{project.numberTag}</span>
                      <span className="text-zinc-400 uppercase">{project.category}</span>
                    </div>

                    {/* Project Title */}
                    <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white tracking-wide mt-3 group-hover:text-gold-gradient transition-colors">
                      {project.title}
                    </h3>

                    {/* Tagline */}
                    <div className="text-xs sm:text-sm font-code text-[#A3E635] mt-1.5">
                      // {project.tagline}
                    </div>

                    {/* Project Description */}
                    <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mt-4 font-normal">
                      {project.description}
                    </p>

                    {/* Pill-shaped bordered tech badges */}
                    <div className="mt-6 flex flex-wrap items-center gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-code font-medium tracking-wide text-zinc-300 bg-[#16171b] border border-white/[0.12] group-hover:border-[#D4AF37]/40 rounded-full transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions & Inspect Trigger */}
                  <div className="pt-4 flex flex-wrap items-center gap-3 border-t border-white/[0.06]">
                    <button
                      onClick={() => {
                        soundFX.playClick();
                        setSelectedProject(project);
                      }}
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-code font-semibold tracking-wider uppercase text-black bg-[#F5C542] hover:bg-[#e6b800] rounded-lg shadow-[0_0_15px_rgba(245,197,66,0.25)] transition-all active:scale-95"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>INSPECT SPECS & TELEMETRY</span>
                    </button>

                    {project.liveUrl && project.liveUrl !== '#' && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => soundFX.playClick()}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-code font-medium text-[#A3E635] hover:text-white bg-[#A3E635]/10 hover:bg-[#A3E635]/20 border border-[#A3E635]/30 rounded-lg transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>LIVE DEMO</span>
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => soundFX.playClick()}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-code text-zinc-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] rounded-lg transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>GITHUB</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Side: Media Thumbnail & Right-Aligned "Spec Sheet" Panel (5 cols) */}
                <div className="lg:col-span-5 flex flex-col justify-between gap-5">
                  
                  {/* Media Visual Container */}
                  <div
                    onClick={() => {
                      soundFX.playClick();
                      setSelectedProject(project);
                    }}
                    className="relative rounded-xl overflow-hidden aspect-[16/9] border border-white/[0.1] bg-[#141519] cursor-pointer group/img"
                  >
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500 filter brightness-95"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover/img:opacity-30 transition-opacity" />
                    
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/75 backdrop-blur-md border border-white/[0.1] text-[10px] font-code text-[#F5C542] flex items-center gap-1">
                      <span>VIEW SPECS</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </div>
                  </div>

                  {/* Right-Aligned "Spec Sheet" Key/Value Stat Panel */}
                  <div className="rounded-xl p-4 bg-[#0d0e11] border border-white/[0.08]">
                    <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 mb-3">
                      <span className="text-[11px] font-code uppercase text-[#D4AF37] font-semibold tracking-wider">
                        SPEC SHEET // AUDIT
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A3E635]" />
                    </div>

                    <div className="space-y-2.5">
                      {project.specs.map((spec) => (
                        <div key={spec.key} className="flex items-center justify-between text-xs">
                          <span className="text-zinc-400 font-code">{spec.key}</span>
                          <span className="text-white font-medium font-code tracking-wide text-right">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Interactive Project Inspector Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};
