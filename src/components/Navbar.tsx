import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, Download, ArrowUpRight } from 'lucide-react';
import { soundFX } from '../utils/audio';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenExport: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenExport }) => {
  const [scrolled, setScrolled] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleSound = () => {
    const newState = soundFX.toggle();
    setSoundEnabled(newState);
  };

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-2xl shadow-black/80'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark (Single text element in display style) */}
        <a
          href="#top"
          onClick={() => soundFX.playClick()}
          className="group flex items-center gap-3 text-left focus-visible:outline-none"
        >
          <div className="w-8 h-8 rounded border border-[#D4AF37]/50 bg-[#121316] flex items-center justify-center font-display text-lg text-[#F5C542] shadow-[0_0_15px_rgba(212,175,55,0.25)] group-hover:border-[#A3E635] group-hover:text-[#A3E635] transition-colors">
            RY
          </div>
          <div>
            <span className="font-display text-xl sm:text-2xl tracking-wider text-white group-hover:text-[#F5C542] transition-colors">
              ROHIT YADAV
            </span>
          </div>
        </a>

        {/* Zone 2: Clean Text Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => soundFX.playClick()}
              className="text-zinc-400 hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#F5C542] hover:after:w-full after:transition-all after:duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Sound FX Toggle */}
          <button
            onClick={handleToggleSound}
            aria-label={soundEnabled ? 'Mute sound effects' : 'Enable sound effects'}
            className="p-2 rounded-lg border border-white/[0.08] bg-[#121316] hover:bg-white/[0.05] text-zinc-400 hover:text-[#F5C542] transition-colors"
            title={soundEnabled ? 'Audio FX: Active' : 'Audio FX: Muted'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-[#A3E635]" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Standalone Vanilla Build Download */}
          <button
            onClick={() => {
              soundFX.playClick();
              onOpenExport();
            }}
            className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-xs font-code font-semibold tracking-wider text-[#A3E635] hover:text-white bg-[#A3E635]/10 hover:bg-[#A3E635]/20 border border-[#A3E635]/30 rounded-lg transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            STANDALONE BUILD
          </button>

          {/* Resume CTA */}
          <button
            onClick={() => {
              soundFX.playClick();
              onOpenResume();
            }}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-[#D4AF37] to-[#F5C542] hover:from-[#F5C542] hover:to-[#e6b800] rounded-lg shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(245,197,66,0.5)] transition-all whitespace-nowrap active:scale-95"
          >
            RESUME
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={handleToggleSound}
            className="p-2 rounded border border-white/[0.08] text-zinc-400"
            aria-label="Toggle sound"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-[#A3E635]" /> : <VolumeX className="w-4 h-4" />}
          </button>
          <button
            onClick={() => {
              soundFX.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="p-2 rounded border border-white/[0.08] text-zinc-300 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0d0e11] border-b border-white/[0.1] px-5 py-6 space-y-4 shadow-2xl">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => {
                  soundFX.playClick();
                  setMobileMenuOpen(false);
                }}
                className="text-base font-medium text-zinc-300 hover:text-[#F5C542] py-2 border-b border-white/[0.04]"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="pt-2 flex flex-col gap-2.5">
            <button
              onClick={() => {
                soundFX.playClick();
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-2.5 text-center text-xs font-semibold tracking-wider uppercase text-black bg-gradient-to-r from-[#D4AF37] to-[#F5C542] rounded-lg shadow"
            >
              View & Download Resume
            </button>
            <button
              onClick={() => {
                soundFX.playClick();
                setMobileMenuOpen(false);
                onOpenExport();
              }}
              className="w-full py-2.5 text-center text-xs font-code font-semibold tracking-wider text-[#A3E635] bg-[#A3E635]/10 border border-[#A3E635]/30 rounded-lg"
            >
              Download Standalone Source (HTML+CSS+JS)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
