import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { X, Printer, Download, Mail, Phone, MapPin, Github, CheckCircle } from 'lucide-react';
import { soundFX } from '../utils/audio';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    soundFX.playClick();
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto print:p-0 print:bg-white"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl glass-panel-gold border-gold-glow p-6 sm:p-10 text-left shadow-2xl my-6 print:m-0 print:border-none print:shadow-none print:max-h-none print:bg-white print:text-black"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-6 print:hidden">
          <div className="flex items-center gap-2 text-xs font-code text-[#F5C542] uppercase tracking-wider">
            <span>CURRICULUM VITAE // VERIFIED DOCUMENT</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-code font-semibold tracking-wider uppercase text-black bg-[#A3E635] hover:bg-[#86efac] rounded-lg transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>PRINT / PDF</span>
            </button>
            <button
              onClick={() => {
                soundFX.playClick();
                onClose();
              }}
              aria-label="Close resume viewer"
              className="p-1.5 rounded-lg bg-[#141518] hover:bg-[#202228] border border-white/[0.1] text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document */}
        <div className="space-y-6 print:text-black">
          
          {/* Header */}
          <div className="border-b border-white/[0.1] pb-6 print:border-neutral-300">
            <h1 id="resume-title" className="font-display text-4xl sm:text-5xl text-white print:text-black tracking-tight">
              ROHIT YADAV
            </h1>
            <div className="text-sm font-code text-[#F5C542] print:text-neutral-700 tracking-wider font-semibold mt-1">
              DATA ANALYST · POWER BI · PYTHON & AI/ML
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs font-code text-zinc-300 print:text-neutral-600">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#D4AF37]" /> Indore, MP, India
              </span>
              <a href="tel:8966087457" className="flex items-center gap-1 hover:text-[#F5C542]">
                <Phone className="w-3 h-3 text-[#D4AF37]" /> +91 8966087457
              </a>
              <a href="mailto:rohityadv201@gmail.com" className="flex items-center gap-1 hover:text-[#F5C542]">
                <Mail className="w-3 h-3 text-[#D4AF37]" /> rohityadv201@gmail.com
              </a>
              <a href="https://github.com/rohityadv201-alt" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-[#A3E635]">
                <Github className="w-3 h-3 text-[#D4AF37]" /> github.com/rohityadv201-alt
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-code font-bold uppercase tracking-widest text-[#D4AF37] print:text-black mb-2">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs sm:text-sm text-zinc-200 print:text-neutral-800 leading-relaxed font-normal">
              Results-driven Data Analyst with 1 year of hands-on experience transforming transactional and business data into high-leverage commercial decisions. Proficient in crafting high-performance SQL queries, developing automated executive Power BI dashboards with complex DAX measures, scripting statistical pipelines in Python, and deploying full-stack web platforms. Proven ability to bridge technical engineering with stakeholder decision-making.
            </p>
          </div>

          {/* Technical Skills Matrix */}
          <div>
            <h2 className="text-xs font-code font-bold uppercase tracking-widest text-[#D4AF37] print:text-black mb-2">
              TECHNICAL COMPETENCIES
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-code">
              <div className="p-3 rounded-lg bg-[#0e1014] print:bg-neutral-50 border border-white/[0.06] print:border-neutral-200">
                <span className="text-[#F5C542] print:text-black font-semibold">Data & BI:</span>
                <span className="text-zinc-300 print:text-neutral-700 ml-1">
                  SQL (PostgreSQL, MySQL), Power BI, Advanced DAX, Power Query, Star Schema Modeling, Microsoft Excel (VLOOKUP, Pivot, Macros)
                </span>
              </div>
              <div className="p-3 rounded-lg bg-[#0e1014] print:bg-neutral-50 border border-white/[0.06] print:border-neutral-200">
                <span className="text-[#F5C542] print:text-black font-semibold">Programming & AI/ML:</span>
                <span className="text-zinc-300 print:text-neutral-700 ml-1">
                  Python, Pandas, NumPy, Scikit-Learn, Predictive Churn Modeling, Feature Engineering, EDA, REST APIs
                </span>
              </div>
              <div className="p-3 rounded-lg bg-[#0e1014] print:bg-neutral-50 border border-white/[0.06] print:border-neutral-200">
                <span className="text-[#F5C542] print:text-black font-semibold">Business & Finance:</span>
                <span className="text-zinc-300 print:text-neutral-700 ml-1">
                  Financial Modeling, Cash Flow Projections, Variance vs Budget Analysis, Customer Lifetime Value (CLV), Unit Economics
                </span>
              </div>
              <div className="p-3 rounded-lg bg-[#0e1014] print:bg-neutral-50 border border-white/[0.06] print:border-neutral-200">
                <span className="text-[#F5C542] print:text-black font-semibold">Web & Digital:</span>
                <span className="text-zinc-300 print:text-neutral-700 ml-1">
                  Web Development, Next.js, React, TypeScript, Drizzle ORM, Razorpay Gateway, Digital Marketing, SEO Tracking
                </span>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-code font-bold uppercase tracking-widest text-[#D4AF37] print:text-black mb-3">
              PROFESSIONAL EXPERIENCE
            </h2>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#0e1014] print:bg-white border border-white/[0.06] print:border-neutral-200">
                <div className="flex flex-wrap items-center justify-between text-xs font-code">
                  <span className="text-sm font-semibold text-white print:text-black font-sans">
                    Data Analyst & Technical Solutions Engineer
                  </span>
                  <span className="text-[#F5C542] print:text-neutral-600 font-semibold">
                    2023 – PRESENT (1 Year)
                  </span>
                </div>
                <div className="text-xs font-code text-zinc-400 print:text-neutral-600 mb-2">
                  Commercial Analytics & Retail Systems · Indore, MP, India
                </div>
                <ul className="space-y-1.5 text-xs text-zinc-300 print:text-neutral-800 list-disc list-inside">
                  <li>Formulated automated SQL queries and ETL pipelines evaluating 100,000+ transactional records, identifying inventory bottlenecks and cross-sell patterns.</li>
                  <li>Architected and launched the Sanwariya Saree Store production retail platform and Rozzo Mart web application with real-time database synchronizations.</li>
                  <li>Designed executive Power BI dashboards with custom DAX time-intelligence metrics, reducing weekly manual spreadsheet reconciliation from 14 hours to under 20 minutes.</li>
                  <li>Conducted quantitative marketing variance and customer lifetime value (CLV) analysis to optimize promotional spending.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Production Projects */}
          <div>
            <h2 className="text-xs font-code font-bold uppercase tracking-widest text-[#D4AF37] print:text-black mb-2">
              KEY PRODUCTION PROJECTS
            </h2>
            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-lg bg-[#0e1014] print:bg-white border border-white/[0.06] print:border-neutral-200">
                <span className="font-semibold text-white print:text-black">Sanwariya Saree Store:</span>
                <span className="text-zinc-300 print:text-neutral-700 ml-1">
                  Full-stack e-commerce platform in Indore with Next.js, Drizzle ORM, PostgreSQL, and Razorpay payment gateway audit logs.
                </span>
              </div>
              <div className="p-3 rounded-lg bg-[#0e1014] print:bg-white border border-white/[0.06] print:border-neutral-200">
                <span className="font-semibold text-white print:text-black">Rozzo Mart (rozzo-mart.web.app):</span>
                <span className="text-zinc-300 print:text-neutral-700 ml-1">
                  Live hyperlocal grocery delivery web platform built on React & Firebase with real-time inventory snapshots.
                </span>
              </div>
              <div className="p-3 rounded-lg bg-[#0e1014] print:bg-white border border-white/[0.06] print:border-neutral-200">
                <span className="font-semibold text-white print:text-black">Sales Performance & Revenue Intelligence:</span>
                <span className="text-zinc-300 print:text-neutral-700 ml-1">
                  Enterprise Power BI dashboard with 180k+ records, dynamic target variance, and churn risk categorizations.
                </span>
              </div>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h2 className="text-xs font-code font-bold uppercase tracking-widest text-[#D4AF37] print:text-black mb-2">
                EDUCATION
              </h2>
              <div className="p-3 rounded-lg bg-[#0e1014] print:bg-white border border-white/[0.06] print:border-neutral-200 text-xs">
                <div className="font-semibold text-white print:text-black">Bachelor of Computer Science / Applications</div>
                <div className="text-zinc-400 print:text-neutral-600 font-code mt-0.5">Devi Ahilya Vishwavidyalaya (DAVV), Indore · 2023</div>
              </div>
            </div>

            <div>
              <h2 className="text-xs font-code font-bold uppercase tracking-widest text-[#D4AF37] print:text-black mb-2">
                CERTIFICATIONS
              </h2>
              <div className="p-3 rounded-lg bg-[#0e1014] print:bg-white border border-white/[0.06] print:border-neutral-200 text-xs">
                <div className="font-semibold text-white print:text-black">Power BI & Advanced Data Analytics Specialization</div>
                <div className="text-zinc-400 print:text-neutral-600 font-code mt-0.5">Industry Accredited Analytics Track · 2023</div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="mt-8 pt-4 border-t border-white/[0.08] flex justify-end gap-3 print:hidden">
          <button
            onClick={handlePrint}
            className="px-5 py-2.5 text-xs font-code font-semibold tracking-wider uppercase text-black bg-gradient-to-r from-[#D4AF37] to-[#F5C542] rounded-lg shadow-md"
          >
            Download as PDF
          </button>
        </div>

      </div>
    </div>
  );
};
