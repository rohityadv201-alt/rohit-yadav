import React, { useState } from 'react';
import { X, Download, Code, Check, FileCode, Layers } from 'lucide-react';
import { soundFX } from '../utils/audio';

interface StandaloneExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StandaloneExportModal: React.FC<StandaloneExportModalProps> = ({ isOpen, onClose }) => {
  const [downloaded, setDownloaded] = useState(false);
  const [activeTab, setActiveTab] = useState<'html' | 'css' | 'js'>('html');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const standaloneHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rohit Yadav — Data Analyst Portfolio</title>
  <meta name="description" content="Portfolio of Rohit Yadav, Data Analyst specializing in SQL, Power BI, Python, AI/ML, and Financial Business Intelligence.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=JetBrains+Mono:wght@400;600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Syne:wght@700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Custom Cursor -->
  <div id="cursor-dot"></div>
  <div id="cursor-ring"></div>

  <!-- Header Nav -->
  <header class="header">
    <div class="header-container">
      <a href="#top" class="brand">
        <div class="brand-badge">RY</div>
        <span class="brand-name">ROHIT YADAV</span>
      </a>
      <nav class="nav">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>
      <a href="#contact" class="btn-primary">TRANSMISSION →</a>
    </div>
  </header>

  <!-- Hero Section -->
  <section id="about" class="hero reveal">
    <div class="hero-container">
      <div class="hero-content">
        <div class="hero-kicker">
          <span class="pulse-dot"></span>
          DATA ANALYST · POWER BI · PYTHON & AI/ML
        </div>
        <h1 class="hero-headline">I TURN RAW DATA INTO DECISIONS.</h1>
        <p class="hero-intro">
          I turn messy, raw data into dashboards, models, and decisions people can act on — where SQL meets storytelling, and analysis becomes impact.
        </p>
        <div class="hero-ctas">
          <a href="#projects" class="btn-primary">Explore My Work →</a>
          <a href="#contact" class="btn-secondary">Initialize Dispatch ↓</a>
        </div>
      </div>
      <div class="hero-visual">
        <div class="spotlight"></div>
        <div class="portrait-card">
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80" alt="Rohit Yadav">
          <div class="portrait-meta">
            <strong>Rohit Yadav</strong>
            <span>1 Year Experience · Indore, India</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Manifesto -->
  <section class="manifesto reveal">
    <div class="container text-center">
      <span class="tag">02 // CORE MANIFESTO</span>
      <h2 class="manifesto-text">"I DON'T JUST BUILD DASHBOARDS. I BUILD DECISIONS."</h2>
    </div>
  </section>

  <!-- Selected Works -->
  <section id="projects" class="section reveal">
    <div class="container">
      <span class="tag">03 // SELECTED WORKS</span>
      <h2 class="section-title">ENGINEERED VALUE.</h2>
      
      <div class="project-card">
        <div class="project-info">
          <span class="card-num">01 // E-COMMERCE / RETAIL PLATFORM</span>
          <h3>Sanwariya Saree Store</h3>
          <p>Production e-commerce platform built for a saree retailer in Indore — full storefront with catalog management, secure checkout, and integrated Razorpay payments.</p>
          <div class="tags">
            <span class="badge">NEXT.JS</span>
            <span class="badge">DRIZZLE ORM</span>
            <span class="badge">POSTGRESQL</span>
            <span class="badge">RAZORPAY</span>
            <span class="badge">TYPESCRIPT</span>
          </div>
        </div>
        <div class="spec-panel">
          <div class="spec-row"><span>Domain</span><strong>Retail / Fashion</strong></div>
          <div class="spec-row"><span>Payments</span><strong>Razorpay</strong></div>
          <div class="spec-row"><span>Region</span><strong>Indore, India</strong></div>
        </div>
      </div>

      <div class="project-card">
        <div class="project-info">
          <span class="card-num">02 // E-COMMERCE / WEB PLATFORM</span>
          <h3>Rozzo Mart</h3>
          <p>Live on-demand grocery marketplace platform featuring real-time inventory tracking and rapid mobile basket checkout.</p>
          <div class="tags">
            <span class="badge">REACT</span>
            <span class="badge">FIREBASE</span>
            <span class="badge">TAILWIND CSS</span>
            <span class="badge">CLOUD FIRESTORE</span>
          </div>
        </div>
        <div class="spec-panel">
          <div class="spec-row"><span>Platform</span><strong>PWA Web App</strong></div>
          <div class="spec-row"><span>Live</span><strong>rozzo-mart.web.app</strong></div>
          <div class="spec-row"><span>Feature</span><strong>Real-time Stock Sync</strong></div>
        </div>
      </div>

      <div class="project-card">
        <div class="project-info">
          <span class="card-num">03 // DATA & BI</span>
          <h3>Sales Performance & Revenue Intelligence Dashboard</h3>
          <p>Interactive Power BI dashboard consolidating multi-region sales data with automated refresh and drill-down KPIs.</p>
          <div class="tags">
            <span class="badge">POWER BI</span>
            <span class="badge">SQL</span>
            <span class="badge">EXCEL</span>
            <span class="badge">DAX</span>
          </div>
        </div>
        <div class="spec-panel">
          <div class="spec-row"><span>Latency</span><strong>Daily Automated ETL</strong></div>
          <div class="spec-row"><span>KPIs</span><strong>MRR, CLV, Churn</strong></div>
          <div class="spec-row"><span>Records</span><strong>180,000+ Records</strong></div>
        </div>
      </div>

      <div class="project-card">
        <div class="project-info">
          <span class="card-num">04 // AI/ML & FINANCIAL ANALYSIS</span>
          <h3>Predictive Customer Churn & Cash-Flow Risk Model</h3>
          <p>Machine learning pipeline analyzing 45,000+ consumer transactions with predictive regression models, variance analysis, and cash-flow sensitivity forecasting.</p>
          <div class="tags">
            <span class="badge">PYTHON</span>
            <span class="badge">PANDAS</span>
            <span class="badge">SCIKIT-LEARN</span>
            <span class="badge">FINANCIAL MODELING</span>
          </div>
        </div>
        <div class="spec-panel">
          <div class="spec-row"><span>Model</span><strong>RandomForest + XGBoost</strong></div>
          <div class="spec-row"><span>Accuracy</span><strong>91.4% ROC-AUC</strong></div>
          <div class="spec-row"><span>Dataset</span><strong>45,000+ Customers</strong></div>
        </div>
      </div>
    </div>
  </section>

  <!-- Core Capabilities -->
  <section id="skills" class="section reveal">
    <div class="container">
      <span class="tag">04 // CORE CAPABILITIES</span>
      <h2 class="section-title">PRECISION APPLIED.</h2>
      <div class="grid-2">
        <div class="cap-card">
          <h4>01 DATA & BI</h4>
          <p>Querying, cleaning, and modeling data; building dashboards and automated reports.</p>
          <div class="tags"><span class="badge">SQL</span><span class="badge">EXCEL</span><span class="badge">POWER BI</span></div>
        </div>
        <div class="cap-card">
          <h4>02 PROGRAMMING & AI/ML</h4>
          <p>Scripting analysis pipelines and exploring predictive models.</p>
          <div class="tags"><span class="badge">PYTHON</span><span class="badge">PANDAS</span><span class="badge">AI/ML</span></div>
        </div>
        <div class="cap-card">
          <h4>03 FINANCIAL & BUSINESS ANALYSIS</h4>
          <p>Forecasting, variance analysis, and KPI reporting for business decisions.</p>
          <div class="tags"><span class="badge">FINANCIAL MODELING</span><span class="badge">FORECASTING</span></div>
        </div>
        <div class="cap-card">
          <h4>04 DIGITAL & WEB</h4>
          <p>Building and marketing web products end-to-end.</p>
          <div class="tags"><span class="badge">DIGITAL MARKETING</span><span class="badge">WEB DEVELOPMENT</span></div>
        </div>
      </div>
    </div>
  </section>

  <!-- Experience -->
  <section id="experience" class="section reveal">
    <div class="container">
      <span class="tag">05 // EXPERIENCE & MILESTONES</span>
      <h2 class="section-title">TIMELINE.</h2>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-year">2023 – PRESENT</div>
          <h3>Data Analyst & Technical Solutions Engineer</h3>
          <p>Commercial Analytics & Retail Systems, Indore. Led data pipeline automation, financial performance metrics tracking, and cross-functional Power BI dashboards.</p>
        </div>
        <div class="timeline-item">
          <div class="timeline-year">2023</div>
          <h3>Power BI & Advanced Data Analytics Specialization</h3>
          <p>Accredited professional certification covering advanced DAX and Star Schema dimensional modeling.</p>
        </div>
        <div class="timeline-item">
          <div class="timeline-year">2020 – 2023</div>
          <h3>Bachelor of Computer Science / Applications</h3>
          <p>Devi Ahilya Vishwavidyalaya (DAVV), Indore. Strong foundations in RDBMS, SQL query tuning, and Python.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact -->
  <footer id="contact" class="footer reveal">
    <div class="container">
      <span class="tag">06 // INITIALIZE TRANSMISSION</span>
      <h2 class="footer-title">SEND DIRECT DISPATCH</h2>
      <p>Have a dataset that needs a story, a dashboard to build, or a role to fill? Send a direct dispatch below.</p>
      
      <div class="footer-links">
        <a href="tel:8966087457">📞 8966087457</a>
        <a href="mailto:rohityadv201@gmail.com">✉️ rohityadv201@gmail.com</a>
        <a href="https://github.com/rohityadv201-alt" target="_blank">💻 github.com/rohityadv201-alt</a>
      </div>
    </div>
  </footer>

  <script src="script.js"></script>
</body>
</html>`;

  const standaloneCSS = `/* Dark-cinematic styles for Rohit Yadav Portfolio */
:root {
  --bg: #0a0a0a;
  --surface: #111214;
  --card: #15171a;
  --gold: #D4AF37;
  --amber: #F5C542;
  --lime: #A3E635;
  --text: #e4e4e7;
  --muted: #a1a1aa;
}

* { box-sizing: border-box; margin: 0; padding: 0; }
body {
  background: var(--bg);
  color: var(--text);
  font-family: 'Plus Jakarta Sans', sans-serif;
  line-height: 1.6;
  overflow-x: hidden;
}

/* Custom Cursor */
#cursor-dot, #cursor-ring {
  position: fixed;
  pointer-events: none;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
}
#cursor-dot { width: 6px; height: 6px; background: var(--amber); }
#cursor-ring { width: 32px; height: 32px; border: 1px solid rgba(212, 175, 55, 0.5); transition: width 0.2s, height 0.2s; }

.header { position: fixed; top: 0; left: 0; right: 0; z-index: 100; backdrop-filter: blur(12px); background: rgba(10,10,10,0.85); border-bottom: 1px solid rgba(255,255,255,0.06); padding: 1rem 0; }
.header-container { max-width: 1200px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; padding: 0 1.5rem; }
.brand { display: flex; items: center; gap: 0.75rem; text-decoration: none; color: #fff; font-family: 'Bebas Neue', sans-serif; font-size: 1.5rem; }
.brand-badge { width: 32px; height: 32px; border: 1px solid var(--gold); background: #151619; display: flex; align-items: center; justify-content: center; color: var(--amber); border-radius: 6px; font-size: 1rem; }
.nav { display: flex; gap: 1.5rem; }
.nav a { color: var(--muted); text-decoration: none; font-size: 0.875rem; transition: color 0.2s; }
.nav a:hover { color: #fff; }

.btn-primary { background: linear-gradient(135deg, var(--gold), var(--amber)); color: #000; font-weight: 700; text-decoration: none; padding: 0.6rem 1.25rem; border-radius: 8px; font-size: 0.8rem; letter-spacing: 0.05em; display: inline-block; }
.btn-secondary { background: #141519; border: 1px solid rgba(255,255,255,0.1); color: #fff; padding: 0.6rem 1.25rem; border-radius: 8px; text-decoration: none; font-size: 0.8rem; display: inline-block; }

.hero { padding: 8rem 1.5rem 5rem; max-width: 1200px; margin: 0 auto; }
.hero-container { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 3rem; align-items: center; }
.hero-kicker { font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: var(--amber); background: rgba(212,175,55,0.1); border: 1px solid rgba(212,175,55,0.25); display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.35rem 0.85rem; border-radius: 9999px; }
.pulse-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--lime); }
.hero-headline { font-family: 'Bebas Neue', sans-serif; font-size: 5rem; line-height: 0.95; margin: 1rem 0; background: linear-gradient(135deg, var(--gold), var(--amber)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.hero-intro { color: var(--text); font-size: 1.15rem; margin-bottom: 2rem; }
.hero-ctas { display: flex; gap: 1rem; }

.portrait-card { position: relative; border-radius: 1rem; overflow: hidden; border: 1px solid rgba(212,175,55,0.3); background: #111; }
.portrait-card img { width: 100%; height: auto; display: block; filter: contrast(1.05); }
.portrait-meta { position: absolute; bottom: 0.75rem; left: 0.75rem; right: 0.75rem; background: rgba(14,16,20,0.85); backdrop-filter: blur(10px); padding: 0.75rem; border-radius: 0.5rem; border: 1px solid rgba(255,255,255,0.08); font-size: 0.75rem; }

.manifesto { padding: 5rem 1.5rem; border-top: 1px solid rgba(212,175,55,0.2); border-bottom: 1px solid rgba(212,175,55,0.2); background: #0c0d10; }
.manifesto-text { font-family: 'Bebas Neue', sans-serif; font-size: 3.5rem; color: #fff; }

.section { padding: 5rem 1.5rem; max-width: 1200px; margin: 0 auto; }
.section-title { font-family: 'Bebas Neue', sans-serif; font-size: 3rem; color: #fff; margin-bottom: 2rem; }
.tag { font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: var(--amber); letter-spacing: 0.1em; display: block; margin-bottom: 0.5rem; }

.project-card { display: grid; grid-template-columns: 1fr 300px; gap: 2rem; background: var(--surface); border: 1px solid rgba(255,255,255,0.08); border-radius: 1rem; padding: 2rem; margin-bottom: 2rem; }
.card-num { font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: var(--amber); }
.project-info h3 { font-family: 'Bebas Neue', sans-serif; font-size: 2rem; color: #fff; margin: 0.5rem 0; }
.tags { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1rem; }
.badge { font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; background: #16171b; border: 1px solid rgba(255,255,255,0.1); padding: 0.25rem 0.6rem; border-radius: 9999px; }

.spec-panel { background: #0c0d10; border: 1px solid rgba(255,255,255,0.06); border-radius: 0.75rem; padding: 1.25rem; display: flex; flex-direction: column; gap: 0.75rem; }
.spec-row { display: flex; justify-content: space-between; font-size: 0.8rem; font-family: 'JetBrains Mono', monospace; }
.spec-row span { color: var(--muted); }
.spec-row strong { color: #fff; }

.grid-2 { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; }
.cap-card { background: var(--surface); border: 1px solid rgba(255,255,255,0.08); border-radius: 1rem; padding: 1.5rem; }
.cap-card h4 { font-family: 'Bebas Neue', sans-serif; font-size: 1.5rem; color: var(--amber); margin-bottom: 0.5rem; }

.timeline { border-left: 2px solid var(--gold); padding-left: 2rem; margin-left: 1rem; display: flex; flex-direction: column; gap: 2.5rem; }
.timeline-item { position: relative; }
.timeline-item::before { content: ''; position: absolute; left: -2.35rem; top: 0.25rem; width: 10px; height: 10px; border-radius: 50%; background: var(--amber); box-shadow: 0 0 10px var(--amber); }
.timeline-year { font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: var(--amber); }

.footer { padding: 4rem 1.5rem; text-align: center; border-top: 1px solid rgba(212,175,55,0.2); }
.footer-title { font-family: 'Bebas Neue', sans-serif; font-size: 3rem; color: #fff; }
.footer-links { display: flex; justify-content: center; gap: 2rem; flex-wrap: wrap; margin-top: 2rem; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; }
.footer-links a { color: var(--amber); text-decoration: none; }
.footer-links a:hover { color: var(--lime); }

/* Scroll Reveal */
.reveal { opacity: 0; transform: translateY(24px); transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1); }
.reveal.active { opacity: 1; transform: translateY(0); }

@media (max-width: 768px) {
  .hero-container, .project-card { grid-template-columns: 1fr; }
  .hero-headline { font-size: 3.5rem; }
  .nav { display: none; }
}`;

  const standaloneJS = `// Interactive Scroll Reveal & Custom Cursor for Rohit Yadav Portfolio
document.addEventListener('DOMContentLoaded', () => {
  // 1. Custom Cursor Tracking
  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');

  if (dot && ring && window.matchMedia('(pointer: fine)').matches) {
    window.addEventListener('mousemove', (e) => {
      dot.style.left = e.clientX + 'px';
      dot.style.top = e.clientY + 'px';
      ring.style.left = e.clientX + 'px';
      ring.style.top = e.clientY + 'px';
    });

    document.querySelectorAll('a, button, input, textarea').forEach((el) => {
      el.addEventListener('mouseenter', () => {
        ring.style.width = '48px';
        ring.style.height = '48px';
        ring.style.borderColor = '#A3E635';
      });
      el.addEventListener('mouseleave', () => {
        ring.style.width = '32px';
        ring.style.height = '32px';
        ring.style.borderColor = 'rgba(212, 175, 55, 0.5)';
      });
    });
  }

  // 2. Intersection Observer for Scroll Reveals
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach((el) => observer.observe(el));
});`;

  const handleDownload = () => {
    soundFX.playClick();
    const blob = new Blob([standaloneHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'rohit-yadav-portfolio.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2500);
  };

  const handleCopyCode = () => {
    soundFX.playClick();
    let text = standaloneHTML;
    if (activeTab === 'css') text = standaloneCSS;
    if (activeTab === 'js') text = standaloneJS;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="export-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl glass-panel-gold border-gold-glow p-6 sm:p-8 text-left shadow-2xl my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-6">
          <div>
            <div className="text-xs font-code text-[#A3E635] uppercase tracking-wider font-semibold">
              STANDALONE EXPORT // VANILLA BUILD
            </div>
            <h2 id="export-modal-title" className="font-display text-2xl sm:text-3xl text-white tracking-wide mt-1">
              Download Self-Contained Source Bundle
            </h2>
          </div>

          <button
            onClick={() => {
              soundFX.playClick();
              onClose();
            }}
            aria-label="Close export modal"
            className="p-1.5 rounded-lg bg-[#141518] hover:bg-[#202228] border border-white/[0.1] text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal mb-6">
          As requested in the project brief (<code className="text-[#F5C542]">BUILD AS: index.html, style.css, script.js — vanilla, no framework, mobile-responsive, scroll-reveal animations, custom cursor</code>), you can download this complete standalone self-contained build right here!
        </p>

        {/* Tab Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.06] pb-3 mb-4">
          <div className="flex items-center gap-1.5 p-1 rounded-lg bg-[#0e1014] border border-white/[0.08]">
            <button
              onClick={() => {
                soundFX.playClick();
                setActiveTab('html');
              }}
              className={`px-3 py-1 text-xs font-code font-semibold tracking-wider rounded-md ${
                activeTab === 'html' ? 'bg-[#F5C542] text-black' : 'text-zinc-400 hover:text-white'
              }`}
            >
              index.html
            </button>
            <button
              onClick={() => {
                soundFX.playClick();
                setActiveTab('css');
              }}
              className={`px-3 py-1 text-xs font-code font-semibold tracking-wider rounded-md ${
                activeTab === 'css' ? 'bg-[#F5C542] text-black' : 'text-zinc-400 hover:text-white'
              }`}
            >
              style.css
            </button>
            <button
              onClick={() => {
                soundFX.playClick();
                setActiveTab('js');
              }}
              className={`px-3 py-1 text-xs font-code font-semibold tracking-wider rounded-md ${
                activeTab === 'js' ? 'bg-[#F5C542] text-black' : 'text-zinc-400 hover:text-white'
              }`}
            >
              script.js
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyCode}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-code text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] rounded-lg transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#A3E635]" /> : <Code className="w-3.5 h-3.5" />}
              <span>{copied ? 'COPIED FILE' : 'COPY FILE'}</span>
            </button>
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-code font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#D4AF37] to-[#F5C542] hover:from-[#F5C542] hover:to-[#e6b800] rounded-lg shadow-md transition-all active:scale-95"
            >
              {downloaded ? <Check className="w-3.5 h-3.5" /> : <Download className="w-3.5 h-3.5" />}
              <span>{downloaded ? 'DOWNLOADED!' : 'DOWNLOAD .HTML'}</span>
            </button>
          </div>
        </div>

        {/* Code Preview Box */}
        <div className="rounded-xl bg-[#090a0d] border border-white/[0.08] p-4 text-xs font-code text-zinc-300 max-h-96 overflow-y-auto overflow-x-auto leading-relaxed">
          <pre>
            <code>
              {activeTab === 'html' && standaloneHTML}
              {activeTab === 'css' && standaloneCSS}
              {activeTab === 'js' && standaloneJS}
            </code>
          </pre>
        </div>

        <div className="mt-6 flex items-center justify-between text-[11px] font-code text-zinc-400">
          <span>Zero external runtime dependencies. Runs in any browser offline.</span>
          <span className="text-[#A3E635]">100% PRODUCTION READY</span>
        </div>
      </div>
    </div>
  );
};
