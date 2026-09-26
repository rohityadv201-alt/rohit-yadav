import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Send, Phone, Mail, Github, MapPin, Copy, Check, ArrowUp } from 'lucide-react';
import { soundFX } from '../utils/audio';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    sender: '',
    channel: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundFX.playClick();

    if (!formData.sender || !formData.channel || !formData.message) {
      setStatus('error');
      return;
    }

    // Trigger success feedback and mailto
    setStatus('success');
    soundFX.playSuccess();

    // Prepare mailto link for direct mail client dispatch
    const mailtoSubject = encodeURIComponent(
      formData.subject || `Portfolio Dispatch from ${formData.sender}`
    );
    const mailtoBody = encodeURIComponent(
      `Sender: ${formData.sender}\nEmail: ${formData.channel}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:rohityadv201@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  const handleCopy = (key: string, val: string) => {
    soundFX.playClick();
    navigator.clipboard.writeText(val);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const scrollToTop = () => {
    soundFX.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative pt-28 pb-12 bg-[#08090a] border-t border-[#D4AF37]/20">
      {/* Background spotlights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] spotlight-glow blur-3xl opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/[0.1] bg-[#121316] text-xs font-code text-[#F5C542] mb-3 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A3E635] animate-ping" />
            <span>06 // DIRECT DISPATCH</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight">
            INITIALIZE TRANSMISSION.
          </h2>

          <p className="mt-4 text-zinc-300 text-sm sm:text-base leading-relaxed font-normal">
            Have a dataset that needs a story, a dashboard to build, or a role to fill? Send a direct dispatch below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
          
          {/* Left Column: Direct Transmission Coordinates (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl glass-panel-gold border-gold-glow">
              <div className="text-xs font-code text-[#D4AF37] uppercase tracking-wider mb-4 border-b border-white/[0.08] pb-2">
                DIRECT CONTACT CHANNELS
              </div>

              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#0f1013] border border-white/[0.06] group">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#191b20] text-[#A3E635]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-code text-zinc-400 uppercase">PHONE / WHATSAPP</div>
                      <a href="tel:8966087457" className="text-sm font-code text-white hover:text-[#F5C542] transition-colors">
                        8966087457
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy('phone', '8966087457')}
                    className="p-1.5 text-zinc-400 hover:text-white"
                    title="Copy phone number"
                  >
                    {copiedKey === 'phone' ? <Check className="w-4 h-4 text-[#A3E635]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Email Primary */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#0f1013] border border-white/[0.06] group">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#191b20] text-[#F5C542]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-code text-zinc-400 uppercase">PRIMARY DISPATCH</div>
                      <a
                        href="mailto:rohityadv201@gmail.com"
                        className="text-xs sm:text-sm font-code text-white hover:text-[#F5C542] transition-colors truncate block"
                      >
                        rohityadv201@gmail.com
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy('email', 'rohityadv201@gmail.com')}
                    className="p-1.5 text-zinc-400 hover:text-white shrink-0"
                    title="Copy email"
                  >
                    {copiedKey === 'email' ? <Check className="w-4 h-4 text-[#A3E635]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* GitHub */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#0f1013] border border-white/[0.06] group">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#191b20] text-zinc-300">
                      <Github className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-code text-zinc-400 uppercase">OPEN SOURCE // GITHUB</div>
                      <a
                        href="https://github.com/rohityadv201-alt"
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs sm:text-sm font-code text-white hover:text-[#A3E635] transition-colors truncate block"
                      >
                        github.com/rohityadv201-alt
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy('github', 'https://github.com/rohityadv201-alt')}
                    className="p-1.5 text-zinc-400 hover:text-white shrink-0"
                    title="Copy GitHub URL"
                  >
                    {copiedKey === 'github' ? <Check className="w-4 h-4 text-[#A3E635]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#0f1013] border border-white/[0.06]">
                  <div className="p-2 rounded-lg bg-[#191b20] text-[#D4AF37]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-code text-zinc-400 uppercase">BASE OF OPERATIONS</div>
                    <div className="text-xs sm:text-sm font-code text-white">Indore, Madhya Pradesh, India</div>
                  </div>
                </div>

              </div>
            </div>

            {/* Availability Badge Card */}
            <div className="p-4 rounded-xl glass-panel border border-[#A3E635]/25 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#A3E635] animate-ping shrink-0" />
              <div className="text-xs font-code text-zinc-300">
                <span className="text-[#A3E635] font-semibold">STATUS: READY FOR DEPLOYMENT</span>
                <div className="text-[11px] text-zinc-400 mt-0.5">
                  Available for full-time Data Analyst, BI, or technical freelance contracts.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dispatch Form (7 cols) */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-2xl glass-panel border border-white/[0.08] space-y-5">
              
              <div className="text-xs font-code text-[#F5C542] uppercase tracking-wider border-b border-white/[0.06] pb-2">
                TRANSMISSION DISPATCH PROTOCOL
              </div>

              {/* Sender Name */}
              <div>
                <label className="block text-xs font-code text-zinc-300 uppercase tracking-wider mb-2">
                  Sender (Your Name) <span className="text-[#F5C542]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vikram Sharma / Talent Partner"
                  value={formData.sender}
                  onChange={(e) => setFormData({ ...formData, sender: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0d0e11] border border-white/[0.1] focus:border-[#F5C542] text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors"
                />
              </div>

              {/* Channel (Email) */}
              <div>
                <label className="block text-xs font-code text-zinc-300 uppercase tracking-wider mb-2">
                  Channel (Your Email) <span className="text-[#F5C542]">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.channel}
                  onChange={(e) => setFormData({ ...formData, channel: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0d0e11] border border-white/[0.1] focus:border-[#F5C542] text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-code text-zinc-300 uppercase tracking-wider mb-2">
                  Subject / Role Scope
                </label>
                <input
                  type="text"
                  placeholder="e.g. Data Analyst Opportunity / Dashboard Project"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0d0e11] border border-white/[0.1] focus:border-[#F5C542] text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-code text-zinc-300 uppercase tracking-wider mb-2">
                  Message / Brief <span className="text-[#F5C542]">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your dataset, business problem, or opening..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0d0e11] border border-white/[0.1] focus:border-[#F5C542] text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Status Alert */}
              {status === 'success' && (
                <div className="p-3.5 rounded-xl bg-[#A3E635]/15 border border-[#A3E635]/40 text-xs font-code text-[#A3E635] flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>TRANSMISSION INITIALIZED. Opening your email client to complete dispatch.</span>
                </div>
              )}
              {status === 'error' && (
                <div className="p-3.5 rounded-xl bg-red-500/15 border border-red-500/40 text-xs font-code text-red-400">
                  Please fill out all required fields before dispatching.
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 text-xs sm:text-sm font-code font-bold tracking-widest uppercase text-black bg-gradient-to-r from-[#D4AF37] to-[#F5C542] hover:from-[#F5C542] hover:to-[#e6b800] rounded-xl shadow-[0_0_25px_rgba(212,175,55,0.35)] hover:shadow-[0_0_35px_rgba(245,197,66,0.6)] transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <span>EXECUTE DISPATCH →</span>
                <Send className="w-4 h-4" />
              </button>

            </form>
          </div>

        </div>

        {/* Bottom Footer Band */}
        <div className="mt-20 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-code text-zinc-400">
          <div>
            © {new Date().getFullYear()} ROHIT YADAV · DATA ANALYST · INDORE, INDIA
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/rohityadv201-alt"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#F5C542] transition-colors"
            >
              github.com/rohityadv201-alt
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
