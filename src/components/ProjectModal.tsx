import React from 'react';
import { Project } from '../data/portfolioData';
import { X, ExternalLink, Github, Code, CheckCircle, Database } from 'lucide-react';
import { soundFX } from '../utils/audio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl glass-panel-gold border-gold-glow p-6 sm:p-8 text-left shadow-2xl my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            soundFX.playClick();
            onClose();
          }}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-lg bg-[#141518] hover:bg-[#202228] border border-white/[0.1] text-zinc-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Tag */}
        <div className="flex items-center gap-3">
          <span className="font-code text-xs text-[#F5C542] font-semibold tracking-wider">
            {project.numberTag} {project.category}
          </span>
        </div>

        {/* Title */}
        <h2 id="modal-title" className="font-display text-3xl sm:text-4xl text-white tracking-wide mt-2">
          {project.title}
        </h2>
        <p className="text-zinc-300 text-sm sm:text-base mt-2">{project.tagline}</p>

        {/* Image Showcase */}
        <div className="mt-6 rounded-xl overflow-hidden aspect-[16/9] border border-white/[0.1] bg-[#111215] relative group">
          <img
            src={project.image}
            alt={project.imageAlt}
            className="w-full h-full object-cover"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Specs Table */}
        <div className="mt-6 p-4 rounded-xl bg-[#0f1013] border border-white/[0.08]">
          <div className="text-xs font-code text-[#D4AF37] tracking-wider uppercase mb-3">
            TECHNICAL SPECIFICATION SHEET
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {project.specs.map((sp) => (
              <div key={sp.key} className="border-l-2 border-[#D4AF37]/40 pl-3">
                <div className="text-[11px] font-code text-zinc-400 uppercase tracking-wide">{sp.key}</div>
                <div className="text-sm font-semibold text-white mt-0.5">{sp.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Problem vs Solution */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 rounded-xl bg-[#141519] border border-white/[0.06]">
            <h3 className="text-xs font-code text-[#F5C542] uppercase tracking-wider mb-2">The Business Challenge</h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">{project.deepDive.problem}</p>
          </div>
          <div className="p-4 rounded-xl bg-[#141519] border border-white/[0.06]">
            <h3 className="text-xs font-code text-[#A3E635] uppercase tracking-wider mb-2">Analyst Solution & Architecture</h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">{project.deepDive.solution}</p>
          </div>
        </div>

        {/* Measurable Impact */}
        <div className="mt-6">
          <h3 className="text-xs font-code text-zinc-400 uppercase tracking-wider mb-3">Quantified Operational Impact</h3>
          <div className="space-y-2">
            {project.deepDive.impact.map((imp, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-200">
                <CheckCircle className="w-4 h-4 text-[#A3E635] shrink-0 mt-0.5" />
                <span>{imp}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Code / Query Snippet */}
        {project.deepDive.codeSnippet && (
          <div className="mt-6">
            <div className="flex items-center justify-between pb-2">
              <span className="text-xs font-code text-zinc-300 flex items-center gap-1.5">
                <Code className="w-3.5 h-3.5 text-[#F5C542]" />
                {project.deepDive.codeSnippet.title}
              </span>
              <span className="text-[10px] font-code text-zinc-400 uppercase">
                {project.deepDive.codeSnippet.language}
              </span>
            </div>
            <div className="rounded-xl overflow-hidden border border-white/[0.1] bg-[#0c0d10] p-4 text-xs font-code text-zinc-200 overflow-x-auto">
              <pre className="whitespace-pre">
                <code>{project.deepDive.codeSnippet.code}</code>
              </pre>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tg) => (
              <span
                key={tg}
                className="px-2.5 py-1 text-xs font-code font-medium text-zinc-300 bg-white/[0.04] border border-white/[0.1] rounded-full"
              >
                {tg}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {project.liveUrl && project.liveUrl !== '#' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => soundFX.playClick()}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wider uppercase text-black bg-[#A3E635] hover:bg-[#86efac] rounded-lg transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Visit Live Platform</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => soundFX.playClick()}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wider uppercase text-zinc-300 hover:text-white bg-[#16171b] border border-white/[0.1] rounded-lg transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Source Code</span>
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
