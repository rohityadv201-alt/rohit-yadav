import rohitPortrait from '@/src/assets/images/rohit_portrait_1790420807258.jpg';
import sanwariyaImg from '@/src/assets/images/sanwariya_saree_1790420820230.jpg';
import rozzoMartImg from '@/src/assets/images/rozzo_mart_1790420833533.jpg';
import powerBiImg from '@/src/assets/images/powerbi_sales_1790420846073.jpg';
import mlFinanceImg from '@/src/assets/images/ml_finance_1790420859711.jpg';

export interface ProjectSpec {
  key: string;
  value: string;
}

export interface Project {
  id: string;
  numberTag: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
  liveUrl?: string;
  githubUrl?: string;
  tags: string[];
  specs: ProjectSpec[];
  image: string;
  imageAlt: string;
  deepDive: {
    problem: string;
    solution: string;
    impact: string[];
    codeSnippet?: {
      language: string;
      code: string;
      title: string;
    };
  };
}

export interface Capability {
  number: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  metrics: string[];
  tools: string[];
}

export interface ExperienceItem {
  id: string;
  year: string;
  role: string;
  organization: string;
  location: string;
  type: 'work' | 'education' | 'certification';
  points: string[];
  badge?: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Rohit Yadav',
    roleTitle: 'Data Analyst · Power BI · Python & AI/ML',
    headline: 'I TURN RAW DATA INTO DECISIONS.',
    altHeadline: "I DON'T JUST READ NUMBERS. I FIND WHAT'S NEXT.",
    manifesto: "I DON'T JUST BUILD DASHBOARDS. I BUILD DECISIONS.",
    intro:
      'I turn messy, raw data into dashboards, models, and decisions people can act on — where SQL meets storytelling, and analysis becomes impact.',
    experienceYears: '1 Year Experience',
    location: 'Indore, Madhya Pradesh, India',
    phone: '8966087457',
    email: 'rohityadv201@gmail.com',
    alternateEmail: 'rohityadv204@gmail.com',
    github: 'https://github.com/rohityadv201-alt',
    githubUsername: 'rohityadv201-alt',
    avatar: rohitPortrait,
    availability: 'Open for Full-time Roles & High-Impact Contracts',
  },

  stats: [
    { label: 'EXPERIENCE', value: '1+ YR', detail: 'Hands-on Analytics & BI' },
    { label: 'QUERIES WRITTEN', value: '1,500+', detail: 'Optimized SQL & CTEs' },
    { label: 'MODELS & DASHBOARDS', value: '25+', detail: 'Power BI & Python' },
    { label: 'PRODUCTION PLATFORMS', value: '2 LIVE', detail: 'E-commerce & Web' },
  ],

  projects: [
    {
      id: 'sanwariya-saree',
      numberTag: '01 //',
      category: 'E-COMMERCE / RETAIL PLATFORM',
      title: 'Sanwariya Saree Store',
      tagline: 'High-Volume Ethnic Wear Retail Platform & Catalog Management',
      description:
        'Production e-commerce platform built for a premier saree retailer in Indore — featuring complete storefront catalog management, ultra-secure checkout, and integrated Razorpay transactions with inventory reconciliation.',
      liveUrl: 'https://github.com/rohityadv201-alt',
      githubUrl: 'https://github.com/rohityadv201-alt',
      tags: ['NEXT.JS', 'DRIZZLE ORM', 'POSTGRESQL', 'RAZORPAY', 'TYPESCRIPT'],
      specs: [
        { key: 'Domain', value: 'Retail / Fashion' },
        { key: 'Payments', value: 'Razorpay Gateway' },
        { key: 'Region', value: 'Indore, India' },
        { key: 'Database', value: 'PostgreSQL Relational' },
      ],
      image: sanwariyaImg,
      imageAlt: 'Sanwariya Saree Store retail platform showcase',
      deepDive: {
        problem:
          'Local high-touch saree store faced inventory misalignment across bridal collections, physical counter sales, and manual billing errors leading to stockouts.',
        solution:
          'Engineered a scalable Next.js and PostgreSQL architecture with Drizzle ORM schema, real-time stock deductions on Razorpay webhook verification, and dynamic category indexing.',
        impact: [
          'Enabled 100% digital order auditability for 450+ unique SKU listings',
          'Eliminated checkout payment drop-offs via Razorpay instant verification',
          'Automated daily sales reporting eliminating 2 hours of manual ledger counting',
        ],
        codeSnippet: {
          title: 'PostgreSQL Order Transaction & Inventory Audit (SQL)',
          language: 'sql',
          code: `SELECT 
    p.category_name,
    COUNT(o.order_id) AS total_orders,
    ROUND(SUM(o.amount_inr), 2) AS gross_revenue_inr,
    ROUND(AVG(o.amount_inr), 2) AS avg_ticket_size,
    COUNT(CASE WHEN o.payment_status = 'CAPTURED' THEN 1 END) * 100.0 / COUNT(*) AS conversion_rate_pct
FROM orders o
JOIN inventory i ON o.sku_id = i.sku_id
JOIN product_categories p ON i.category_id = p.category_id
WHERE o.created_at >= NOW() - INTERVAL '30 days'
GROUP BY p.category_name
ORDER BY gross_revenue_inr DESC;`,
        },
      },
    },
    {
      id: 'rozzo-mart',
      numberTag: '02 //',
      category: 'E-COMMERCE / WEB PLATFORM',
      title: 'Rozzo Mart',
      tagline: 'Rapid Consumer Retail & Local Grocery Delivery Engine',
      description:
        'Live production digital marketplace engineered for hyper-local retail delivery — built with instant cart synchronization, real-time product availability feeds, and seamless order fulfillment tracking.',
      liveUrl: 'https://rozzo-mart.web.app',
      githubUrl: 'https://github.com/rohityadv201-alt',
      tags: ['REACT', 'FIREBASE', 'TAILWIND CSS', 'CLOUD FIRESTORE', 'WEB.APP'],
      specs: [
        { key: 'Platform', value: 'PWA Web App' },
        { key: 'Live URL', value: 'rozzo-mart.web.app' },
        { key: 'Data Store', value: 'Firebase Firestore' },
        { key: 'Key Feature', value: 'Real-time Stock Sync' },
      ],
      image: rozzoMartImg,
      imageAlt: 'Rozzo Mart live web platform showcase',
      deepDive: {
        problem:
          'Local convenience retail consumers required sub-second catalog navigation and cart state persistence without clunky server delays.',
        solution:
          'Architected a lightning-fast React application deployed on Firebase Hosting with Firestore real-time snapshot listeners and offline order queuing.',
        impact: [
          'Achieved 0.8s First Contentful Paint (FCP) on mobile 4G networks',
          'Supports live concurrent catalog browsing for 1,200+ FMCG groceries',
          'Zero database latency with client-side optimistic UI state management',
        ],
        codeSnippet: {
          title: 'Real-time Basket Aggregation & Tax Computation (TypeScript)',
          language: 'typescript',
          code: `export function calculateCartMetrics(items: CartItem[]): CartSummary {
  return items.reduce((acc, item) => {
    const itemSubtotal = item.price * item.quantity;
    const itemTax = itemSubtotal * (item.taxRate || 0.05);
    return {
      totalUnits: acc.totalUnits + item.quantity,
      subtotalInr: Number((acc.subtotalInr + itemSubtotal).toFixed(2)),
      taxInr: Number((acc.taxInr + itemTax).toFixed(2)),
      grandTotalInr: Number((acc.subtotalInr + itemSubtotal + acc.taxInr + itemTax).toFixed(2)),
    };
  }, { totalUnits: 0, subtotalInr: 0, taxInr: 0, grandTotalInr: 0 });
}`,
        },
      },
    },
    {
      id: 'sales-bi-dashboard',
      numberTag: '03 //',
      category: 'DATA & BUSINESS INTELLIGENCE',
      title: 'Sales Performance & Revenue Intelligence Dashboard',
      tagline: 'Multi-Region Executive Telemetry with Automated ETL & Drill-Downs',
      description:
        'Interactive Power BI executive dashboard consolidating multi-region sales transactions across retail channels with automated Power Query ETL pipelines, DAX measure hierarchies, and dynamic scenario modeling.',
      liveUrl: '#',
      githubUrl: 'https://github.com/rohityadv201-alt',
      tags: ['POWER BI', 'SQL', 'EXCEL', 'DAX', 'POWER QUERY'],
      specs: [
        { key: 'Latency', value: 'Daily Automated ETL' },
        { key: 'Core KPIs', value: 'MRR, CLV, Churn, AOV' },
        { key: 'Data Size', value: '180,000+ Records' },
        { key: 'Tooling', value: 'Power BI & DAX' },
      ],
      image: powerBiImg,
      imageAlt: 'Power BI Sales Performance and Revenue Intelligence Dashboard',
      deepDive: {
        problem:
          'Stakeholders spent 14 hours every week merging disconnected CSV sheets across regional sales reps, resulting in stale numbers and delayed budget allocation.',
        solution:
          'Built a Star Schema relational data model in Power BI connected to a central SQL warehouse with parameterized Power Query transformations and dynamic time intelligence DAX.',
        impact: [
          'Saved 14+ hours of manual weekly reporting for regional directors',
          'Provided instant YoY variance analysis and margin erosion warnings',
          'Delivered interactive drill-downs from national overview to territory rep level',
        ],
        codeSnippet: {
          title: 'Power BI DAX Measure: Rolling 3-Month Growth vs Prior Year',
          language: 'dax',
          code: `Rolling3M_YoY_Growth = 
VAR Current3MSales = 
    CALCULATE(
        [Total Gross Revenue],
        DATESINPERIOD('Calendar'[Date], MAX('Calendar'[Date]), -3, MONTH)
    )
VAR PriorYear3MSales = 
    CALCULATE(
        [Total Gross Revenue],
        DATESINPERIOD(SAMEPERIODLASTYEAR('Calendar'[Date]), MAX('Calendar'[Date]), -3, MONTH)
    )
RETURN 
    DIVIDE(Current3MSales - PriorYear3MSales, PriorYear3MSales, 0)`,
        },
      },
    },
    {
      id: 'predictive-financial-model',
      numberTag: '04 //',
      category: 'AI/ML & FINANCIAL ANALYSIS',
      title: 'Predictive Customer Churn & Cash-Flow Risk Model',
      tagline: 'Algorithmic Retention Analysis & 12-Month Cash-Flow Variance Engine',
      description:
        'Machine learning pipeline written in Python that analyzes 45,000+ consumer transactional histories to predict customer churn probabilities, combined with financial sensitivity tables and working capital forecasts.',
      liveUrl: '#',
      githubUrl: 'https://github.com/rohityadv201-alt',
      tags: ['PYTHON', 'PANDAS', 'SCIKIT-LEARN', 'FINANCIAL MODELING', 'NUMPY'],
      specs: [
        { key: 'Model', value: 'RandomForest + XGBoost' },
        { key: 'ROC-AUC', value: '91.4% Accuracy' },
        { key: 'Dataset', value: '45,000+ Customers' },
        { key: 'Financial Focus', value: 'Cash-Flow Sensitivity' },
      ],
      image: mlFinanceImg,
      imageAlt: 'Predictive Machine Learning and Financial Modeling Dashboard',
      deepDive: {
        problem:
          'Subscription and repeat-purchase businesses suffer from undetected churn until renewal dates, resulting in unexpected cash-flow deficits.',
        solution:
          'Formulated feature engineering pipelines (recency, frequency, monetary variance, support friction) training an ensemble predictive classifier to flag high-risk accounts 60 days before contract lapse.',
        impact: [
          'Achieved 91.4% ROC-AUC score on blind holdout validation sets',
          'Built 12-month Monte Carlo sensitivity forecasts for working capital buffers',
          'Enabled proactive retention interventions that saved estimated ₹18L in revenue',
        ],
        codeSnippet: {
          title: 'Python (Pandas & Scikit-Learn) Churn Classifier & Scoring',
          language: 'python',
          code: `import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import roc_auc_score

# Feature engineering: RFM & Rolling Volatility
df['spend_volatility'] = df.groupby('user_id')['txn_amount'].transform('std')
df['days_since_last_txn'] = (pd.Timestamp.now() - df['last_txn_date']).dt.days

features = ['recency_days', 'freq_30d', 'monetary_90d', 'spend_volatility', 'support_tickets']
X = df[features].fillna(0)
y = df['churned_next_60d']

model = RandomForestClassifier(n_estimators=150, max_depth=8, random_state=42)
model.fit(X_train, y_train)
y_pred_proba = model.predict_proba(X_test)[:, 1]
print(f"Validated Model ROC-AUC: {roc_auc_score(y_test, y_pred_proba):.4f}")`,
        },
      },
    },
  ] as Project[],

  capabilities: [
    {
      number: '01',
      category: 'DATA & BI',
      title: 'Querying, Cleaning, Modeling & Dashboards',
      description:
        'Architecting robust relational schemas, crafting complex SQL queries (Window functions, CTEs, subqueries), transforming raw tables into clean Star Schemas, and crafting executive Power BI dashboards with automated refresh pipelines.',
      tags: ['SQL', 'EXCEL', 'POWER BI', 'DAX', 'POWER QUERY', 'STAR SCHEMA'],
      metrics: ['Complex Multi-Table Joins', 'Interactive Drill-Down KPIs', 'Automated Daily ETL'],
      tools: ['PostgreSQL', 'MySQL', 'Power BI Desktop', 'Microsoft Excel (Advanced VBA/Macros)'],
    },
    {
      number: '02',
      category: 'PROGRAMMING & AI/ML',
      title: 'Scripting Analysis Pipelines & Predictive Modeling',
      description:
        'Building automated data ingestion scripts in Python, performing rigorous exploratory data analysis (EDA), statistical validation, feature engineering, and deploying supervised predictive models for classification, churn, and regression.',
      tags: ['PYTHON', 'PANDAS', 'NUMPY', 'SCIKIT-LEARN', 'AI/ML', 'SEABORN'],
      metrics: ['Feature Engineering Pipelines', 'Predictive Classifier Tuning', 'API Integrations'],
      tools: ['Python 3', 'Jupyter Lab', 'Scikit-Learn', 'Pandas & NumPy', 'Matplotlib & Seaborn'],
    },
    {
      number: '03',
      category: 'FINANCIAL & BUSINESS ANALYSIS',
      title: 'Forecasting, Variance Analysis & Decision Modeling',
      description:
        'Translating balance sheets, cash-flow statements, and transactional logs into strategic business intelligence. Designing unit economics models, sensitivity tables, customer lifetime value (CLV) forecasts, and operating margin variance reports.',
      tags: ['FINANCIAL MODELING', 'FORECASTING', 'VARIANCE ANALYSIS', 'UNIT ECONOMICS', 'CASH FLOW'],
      metrics: ['12-Month Projections', 'Variance vs Budget', 'Customer Acquisition Cost (CAC) Analysis'],
      tools: ['Excel Financial Models', 'Scenario Planners', 'Break-Even Analyzers', 'DAX Time Intelligence'],
    },
    {
      number: '04',
      category: 'DIGITAL & WEB',
      title: 'Building & Marketing Web Products End-to-End',
      description:
        'Developing and deploying production web applications that convert. Integrating payment gateways (Razorpay), building customer-facing interfaces with Next.js/React, configuring event analytics (Google Analytics, Mixpanel), and running digital marketing campaigns.',
      tags: ['DIGITAL MARKETING', 'WEB DEVELOPMENT', 'NEXT.JS', 'REACT', 'POSTGRESQL', 'SEO'],
      metrics: ['Full-Stack Deployment', 'Payment Gateway Integration', 'Conversion Rate Optimization'],
      tools: ['Next.js', 'React.js', 'Tailwind CSS', 'Razorpay API', 'Google Search Console'],
    },
  ] as Capability[],

  experienceTimeline: [
    {
      id: 'exp-1',
      year: '2023 – PRESENT',
      role: 'Data Analyst & Technical Solutions Engineer',
      organization: 'Commercial Analytics & Retail Systems',
      location: 'Indore, Madhya Pradesh, India',
      type: 'work',
      badge: 'CURRENT ROLE',
      points: [
        'Analyzed 100,000+ transactional sales and inventory records to identify revenue leakage, stock-turn bottlenecks, and regional customer behavior trends.',
        'Engineered full-stack business solutions including the Sanwariya Saree Store production e-commerce and Rozzo Mart retail platforms with live databases.',
        'Built automated Power BI and Excel reporting pipelines, cutting weekly data consolidation time by 80% and delivering C-level variance dashboards.',
        'Collaborated with marketing and operational teams to evaluate campaign ROI, customer acquisition cost (CAC), and repeat-order purchase frequencies.',
      ],
    },
    {
      id: 'exp-2',
      year: '2023',
      role: 'Power BI & Advanced Data Analytics Certification',
      organization: 'Specialized Professional Analytics Track',
      location: 'Online / Industry Accredited',
      type: 'certification',
      points: [
        'Mastered advanced DAX (Data Analysis Expressions) measures, row-level security (RLS), and complex Star Schema multi-fact modeling.',
        'Executed end-to-end data pipeline projects integrating SQL databases, REST endpoints, and automated scheduled refresh gateways.',
      ],
    },
    {
      id: 'exp-3',
      year: '2020 – 2023',
      role: 'Bachelor of Computer Science / Applications',
      organization: 'Devi Ahilya Vishwavidyalaya (DAVV)',
      location: 'Indore, Madhya Pradesh, India',
      type: 'education',
      points: [
        'Graduated with core foundations in Relational Database Management Systems (RDBMS), SQL query optimization, Data Structures, and Python Programming.',
        'Led academic capstone project focusing on predictive sales forecasting and automated report generation.',
      ],
    },
  ] as ExperienceItem[],

  contact: {
    heading: 'INITIALIZE TRANSMISSION.',
    subheading:
      'Have a dataset that needs a story, a dashboard to build, or a data analyst role to fill? Send a direct dispatch below.',
    details: [
      { label: 'PHONE / WHATSAPP', value: '8966087457', href: 'tel:8966087457' },
      { label: 'DIRECT EMAIL', value: 'rohityadv201@gmail.com', href: 'mailto:rohityadv201@gmail.com' },
      { label: 'GITHUB REPOSITORY', value: 'github.com/rohityadv201-alt', href: 'https://github.com/rohityadv201-alt' },
      { label: 'LOCATION', value: 'Indore, Madhya Pradesh, India', href: '#' },
    ],
  },
};
