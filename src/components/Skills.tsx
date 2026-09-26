import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Play, Copy, Check, Terminal, Cpu, Database, TrendingUp, Globe } from 'lucide-react';
import { soundFX } from '../utils/audio';

export const Skills: React.FC = () => {
  const [activeCodeTab, setActiveCodeTab] = useState<'sql' | 'dax' | 'python' | 'financial'>('sql');
  const [copied, setCopied] = useState(false);

  const capabilityIcons = [Database, Cpu, TrendingUp, Globe];

  const codeSnippets = {
    sql: {
      title: 'Customer Cohort Retention & Churn Rate Matrix (PostgreSQL)',
      lang: 'SQL',
      description: 'Calculates monthly retention cohorts, repeat purchase rate, and average revenue per user (ARPU).',
      code: `WITH MonthlyCohorts AS (
    SELECT 
        user_id,
        DATE_TRUNC('month', MIN(order_date)) AS cohort_month
    FROM orders
    GROUP BY user_id
),
UserActivities AS (
    SELECT 
        o.user_id,
        DATE_TRUNC('month', o.order_date) AS activity_month,
        SUM(o.amount) AS monthly_spend
    FROM orders o
    GROUP BY o.user_id, DATE_TRUNC('month', o.order_date)
)
SELECT 
    c.cohort_month::DATE AS cohort,
    a.activity_month::DATE AS activity_period,
    COUNT(DISTINCT a.user_id) AS active_users,
    ROUND(SUM(a.monthly_spend), 2) AS total_revenue,
    ROUND(AVG(a.monthly_spend), 2) AS arpu_inr
FROM MonthlyCohorts c
JOIN UserActivities a ON c.user_id = a.user_id
WHERE c.cohort_month >= '2023-01-01'
GROUP BY 1, 2
ORDER BY 1, 2;`,
      output: `[Query Execution Complete: 12ms]
cohort     | activity_period | active_users | total_revenue | arpu_inr
-----------+-----------------+--------------+---------------+---------
2023-01-01 | 2023-01-01      | 1,420        | 8,52,000.00   | 600.00
2023-01-01 | 2023-02-01      |   980        | 6,37,000.00   | 650.00
2023-01-01 | 2023-03-01      |   840        | 5,88,000.00   | 700.00 (Retention: 59.1%)`,
    },
    dax: {
      title: 'Power BI DAX: Dynamic Target Variance & Churn Risk Score',
      lang: 'DAX',
      description: 'Computes variance against dynamic sales target and assigns behavioral risk categorization.',
      code: `Sales_Variance_Pct = 
VAR ActualRevenue = [Total Gross Sales]
VAR TargetRevenue = [Budgeted Sales Target]
RETURN 
    IF(
        NOT ISBLANK(ActualRevenue),
        DIVIDE(ActualRevenue - TargetRevenue, TargetRevenue, 0),
        BLANK()
    )

Customer_Health_Score = 
VAR RecencyDays = [Days Since Last Purchase]
VAR FrequencyCount = [Annual Transaction Count]
VAR MarginContribution = [Lifetime Gross Margin]
RETURN 
    SWITCH(
        TRUE(),
        RecencyDays <= 30 && FrequencyCount >= 12, "TIER 1 // CHAMPION",
        RecencyDays <= 60 && FrequencyCount >= 6,  "TIER 2 // LOYAL",
        RecencyDays > 90,                          "TIER 4 // HIGH CHURN RISK",
        "TIER 3 // AT-RISK"
    )`,
      output: `[DAX Engine Compiled: 0 Syntax Errors]
Measures Validated: 2
Calculated Column Health Distribution:
- Champion: 34.2% (₹42.5L LTV)
- Loyal: 28.6% (₹22.1L LTV)
- High Churn Risk: 11.4% (Flagged for Retention Alert)`,
    },
    python: {
      title: 'Python Pandas: Feature Engineering & Statistical Variance',
      lang: 'PYTHON',
      description: 'Automated data transformation, interquartile range outlier detection, and correlation metrics.',
      code: `import pandas as pd
import numpy as np

def compute_customer_health_index(df: pd.DataFrame) -> pd.DataFrame:
    """Computes z-score standardized RFM metrics and churn flag."""
    metrics = df.groupby('customer_id').agg({
        'order_value': ['sum', 'mean', 'std'],
        'order_id': 'count',
        'order_date': lambda d: (pd.Timestamp.now() - d.max()).days
    })
    metrics.columns = ['ltv_inr', 'aov_inr', 'spend_volatility', 'total_orders', 'recency_days']
    
    # Fill standard deviation for single-purchase customers
    metrics['spend_volatility'] = metrics['spend_volatility'].fillna(0)
    
    # 60-day Churn Propensity Heuristic
    metrics['churn_risk_flag'] = np.where(
        (metrics['recency_days'] > 75) & (metrics['total_orders'] > 2), 
        'HIGH_RISK', 
        'HEALTHY'
    )
    return metrics.reset_index()`,
      output: `[Process Exited with Code 0]
Processed 45,210 customer accounts in 0.42s
Identified 5,142 High-Risk accounts (11.37%)
Potential Revenue at Risk: ₹24,80,000 INR`,
    },
    financial: {
      title: 'Financial Variance & Working Capital Sensitivity Table',
      lang: 'FINANCIAL MODEL',
      description: 'Multi-scenario sensitivity table assessing cash-flow buffer under varying debtor payment delays.',
      code: `Working Capital Variance Equation:
Δ NWC = Δ Current Assets - Δ Current Liabilities
Cash Conversion Cycle (CCC) = DIO (Days Inventory) + DSO (Days Sales Outstanding) - DPO (Days Payable)

Indore Retail Operations Parameter Matrix:
DIO = 42 Days (Saree Inventory Turnover)
DSO = 14 Days (Retail UPI + Payment Gateway Clearance)
DPO = 35 Days (Supplier Credit Terms)
Net CCC = 42 + 14 - 35 = 21 Days

Sensitivity Scenarios (Monthly Revenue Baseline: ₹15,00,000):
- Case Alpha (DSO +10 Days): Required Working Capital +₹1,25,000
- Case Beta  (DIO -8 Days):   Freed Working Capital +₹95,000
- Optimal Cash Reserve Target: ₹4,50,000 (3 Months Operating Buffer)`,
      output: `[Financial Model Output]
Net Operating Margin: 18.4%
Break-Even Volume: 142 Bridal Sarees / Month
Safety Margin: 28.5% above break-even`,
    },
  };

  const handleCopyCode = () => {
    soundFX.playClick();
    navigator.clipboard.writeText(codeSnippets[activeCodeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="skills" className="relative py-28 bg-[#0a0a0a] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="pb-12 border-b border-white/[0.08]">
          <div className="flex items-center gap-2 font-code text-xs text-[#F5C542] tracking-widest uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A3E635]" />
            <span>04 // CORE CAPABILITIES</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl text-white tracking-tight">
            PRECISION APPLIED.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl font-normal">
            Every technical discipline is deployed with commercial intent — from writing performant SQL queries to executive financial forecasts.
          </p>
        </div>

        {/* 4 Capabilities Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PORTFOLIO_DATA.capabilities.map((cap, idx) => {
            const Icon = capabilityIcons[idx];
            return (
              <div
                key={cap.number}
                className="rounded-2xl glass-panel p-6 sm:p-8 border border-white/[0.08] hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-[0_0_30px_rgba(212,175,55,0.12)]"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 mb-4">
                    <span className="font-code text-sm text-[#F5C542] font-semibold">
                      {cap.number} // {cap.category}
                    </span>
                    <div className="p-2 rounded-lg bg-[#141519] border border-white/[0.08] text-[#D4AF37] group-hover:text-[#A3E635] transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl text-white tracking-wide mt-2 group-hover:text-gold-gradient transition-colors">
                    {cap.title}
                  </h3>

                  <p className="text-zinc-300 text-xs sm:text-sm mt-3 leading-relaxed font-normal">
                    {cap.description}
                  </p>

                  {/* Highlights list */}
                  <div className="mt-5 space-y-1.5">
                    {cap.metrics.map((m, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-code text-zinc-300">
                        <span className="text-[#A3E635]">▸</span>
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags & Tooling Footer */}
                <div className="mt-6 pt-4 border-t border-white/[0.06]">
                  <div className="flex flex-wrap gap-1.5">
                    {cap.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 text-[11px] font-code text-zinc-300 bg-[#16171b] border border-white/[0.1] rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-3 text-[11px] font-code text-zinc-400">
                    <span className="text-[#D4AF37]">TOOLS:</span> {cap.tools.join(' · ')}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Analyst Code & Query Sandbox */}
        <div className="mt-16 rounded-2xl glass-panel-gold border-gold-glow overflow-hidden shadow-2xl">
          
          {/* Sandbox Top Bar */}
          <div className="px-6 py-4 bg-[#0e1014] border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <Terminal className="w-4 h-4 text-[#F5C542]" />
              <span className="font-code text-xs text-white font-semibold tracking-wider uppercase">
                ANALYST CODE SANDBOX // VERIFIED LOGIC
              </span>
            </div>

            {/* Sandbox Tabs */}
            <div className="flex flex-wrap items-center gap-1">
              {(['sql', 'dax', 'python', 'financial'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    soundFX.playClick();
                    setActiveCodeTab(tab);
                  }}
                  className={`px-3 py-1 text-xs font-code font-semibold tracking-wider rounded-md uppercase transition-all ${
                    activeCodeTab === tab
                      ? 'bg-[#F5C542] text-black shadow'
                      : 'text-zinc-400 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Copy Button */}
            <button
              onClick={handleCopyCode}
              className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-code text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] rounded-md transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#A3E635]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'COPIED' : 'COPY'}</span>
            </button>
          </div>

          {/* Sandbox Content */}
          <div className="p-6 bg-[#0a0b0d]">
            <div className="text-xs font-code text-[#D4AF37] mb-1">
              {codeSnippets[activeCodeTab].title}
            </div>
            <p className="text-xs text-zinc-400 mb-4 font-normal">
              {codeSnippets[activeCodeTab].description}
            </p>

            {/* Code Body */}
            <div className="rounded-xl bg-[#07080a] border border-white/[0.08] p-4 text-xs font-code text-zinc-200 overflow-x-auto leading-relaxed">
              <pre>
                <code>{codeSnippets[activeCodeTab].code}</code>
              </pre>
            </div>

            {/* Output Panel */}
            <div className="mt-4 rounded-xl bg-[#090b0e] border border-[#A3E635]/20 p-4">
              <div className="flex items-center gap-2 text-[11px] font-code text-[#A3E635] uppercase tracking-wider mb-2">
                <Play className="w-3 h-3 fill-current" />
                <span>TERMINAL EXECUTION TELEMETRY</span>
              </div>
              <pre className="text-xs font-code text-zinc-300 whitespace-pre-wrap">
                {codeSnippets[activeCodeTab].output}
              </pre>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
