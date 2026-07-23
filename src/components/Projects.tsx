import { useState } from 'react';
import { ProjectCard } from './ProjectCard';

const industryProjects = [
  {
    id: 1,
    title: 'Regent Account Management System',
    company: 'Regent Microfinance Bank',
    description: 'Enterprise internal banking core account system engineered for Regent MFB staff. Features NestJS REST API Gateway, Next.js Staff Portal, BullMQ job queues, Redis caching, Prisma ORM on PostgreSQL, BVN Verification engine, and BankOne CBA integration.',
    technologies: ['NestJS', 'Next.js App Router', 'TypeScript', 'PostgreSQL', 'Prisma ORM', 'BullMQ', 'Redis', 'BankOne CBA API', 'BVN Verification', 'Tailwind CSS'],
    images: [
      '/Images/banking/architecture.svg',
    ],
    link: undefined,
    githubLink: undefined,
  },
  {
    id: 2,
    title: 'Whatsella Commerce SaaS',
    company: 'ReenEdge Solutions',
    description: 'An AI-powered WhatsApp commerce SaaS platform empowering businesses to automatically generate online sub-domain stores, process customer checkout orders, track product inventory, and automate direct payouts.',
    technologies: ['ASP.NET Core', 'PostgreSQL', 'React', 'TypeScript', 'PayStack Payouts', 'Subdomain Multi-Tenancy', 'Tailwind CSS'],
    images: [
      '/Images/whatsella/whatsella1.png',
      '/Images/whatsella/whatsella2.png',
      '/Images/whatsella/whatsella3.png',
    ],
    link: 'https://staging.whatsella.com',
    githubLink: undefined,
  },
  {
    id: 3,
    title: 'Zheeta — Social Networking & Gifting Platform',
    company: 'DeCloud23 Technologies',
    description: 'A social discovery and gifting web application enabling users to match based on criteria, send and receive redeemable virtual gifts, discover nearby profiles, and earn affiliate downline commissions.',
    technologies: ['ASP.NET Core', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Virtual Wallet Engine'],
    images: [
      '/Images/zheeta/zheeta1.png',
      '/Images/zheeta/zheeta2.png',
      '/Images/zheeta/zheeta3.png',
      '/Images/zheeta/zheeta4.png',
      '/Images/zheeta/zheeta5.png',
    ],
    link: 'https://zheeta.com',
    githubLink: undefined,
  },
  {
    id: 4,
    title: 'Games4Africa / Games365Hub',
    company: 'DeCloud23 Technologies',
    description: 'A global reward-based competitive gaming platform enabling players to connect, join solo competitions and tournaments, track leaderboard rankings, and redeem performance rewards.',
    technologies: ['ASP.NET Core', 'SignalR WebSockets', 'React', 'Node.js', 'PostgreSQL', 'Leaderboard Engine'],
    images: [
      '/Images/games4africa/games4africa1.png',
      '/Images/games4africa/games4africa2.png',
      '/Images/games4africa/games4africa3.png',
      '/Images/games4africa/games4africa4.png',
      '/Images/games4africa/games4africa5.png',
    ],
    link: 'https://games4africa.com',
    githubLink: undefined,
  },
  {
    id: 5,
    title: 'iGEMBA — Digital Shopfloor Gemba Walk Platform',
    company: 'Ithena',
    description: 'An Industry 4.0 shopfloor digitizing solution replacing manual paper Gemba walks with structured digital checklists, real-time KPI generation, issue tracking, and analytics dashboards.',
    technologies: ['Angular', 'Express.js', 'Node.js', 'MongoDB', 'PostgreSQL', 'DevExtreme Analytics', 'REST APIs'],
    images: [
      '/Images/igemba/igemba1.png',
      '/Images/igemba/igemba2.png',
      '/Images/igemba/igemba3.png',
      '/Images/igemba/igemba4.png',
    ],
    link: 'https://ithena.ai/digital-shopfloor-igemba/',
    githubLink: undefined,
  },
  {
    id: 6,
    title: 'Kicest — Instant E-Commerce Store Generator',
    company: 'Kicest',
    description: 'An instant e-commerce store platform enabling merchants to launch online storefronts, manage product inventories, process customer orders, and route bank payouts.',
    technologies: ['Next.js App Router', 'React', 'TypeScript', 'Tailwind CSS', 'Subdomain Routing', 'SEO Engine'],
    images: [
      '/Images/kicest/kicest1.png',
      '/Images/kicest/kicest2.png',
      '/Images/kicest/kicest3.png',
      '/Images/kicest/kicest4.png',
      '/Images/kicest/kicest5.png',
    ],
    link: 'https://ng.kicest.com/',
    githubLink: undefined,
  },
];

const personalProjects = [
  {
    id: 1,
    title: 'Little Phoenix AI — Multi-Agent RAG Platform',
    company: 'Personal AI Platform',
    description: 'Production-ready AI assistant and real-time collaboration platform. Features a Multi-Agent RAG pipeline (RetrieverAgent & SummarizeAgent via Microsoft Semantic Kernel), 3072-dimensional vector search (Google Gemini + Qdrant Cloud), hybrid cosine/keyword scoring (0.7*Vector + 0.3*Keyword), client-side PDF/Word document parsing, and WebSockets (SignalR) real-time chat with automated AI responses.',
    technologies: ['.NET 9.0', 'React 19', 'TypeScript', 'SignalR', 'Groq (Llama 3.3)', 'Semantic Kernel', 'Gemini 3072d Embeddings', 'Qdrant Vector DB', 'PostgreSQL (Supabase)', 'EF Core 9', 'Tailwind CSS v4'],
    images: [
      '/Images/littlephoenix/architecture.svg',
    ],
    link: undefined,
    githubLink: undefined,
  },
  {
    id: 2,
    title: 'ResearchHub — Collaborative Research Management Platform',
    company: 'Personal Web Platform',
    description: 'A unified workspace for the full academic research lifecycle — managing projects, real-time collaboration with live document editors, survey distribution linked to datasets, role-based access control (RBAC across 4 user roles), interactive team network visualization, milestone tracking, and publication outputs.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'REST APIs', 'WebSockets', 'Data Visualization', 'Interactive Node Graphs'],
    images: [
      '/Images/researchhub/researchhub1.png',
      '/Images/researchhub/researchhub2.png',
      '/Images/researchhub/researchhub3.png',
      '/Images/researchhub/researchhub4.png',
    ],
    link: undefined,
    githubLink: undefined,
  },
];

export function Projects() {
  const [activeTab, setActiveTab] = useState<'industry' | 'personal'>('industry');

  const projects = activeTab === 'industry' ? industryProjects : personalProjects;

  return (
    <section
      id="projects"
      className="py-24 px-4 bg-slate-50/50 dark:bg-[#090d14] border-y border-slate-200/60 dark:border-slate-800/60 transition-colors"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="section-tag">// 04. FEATURED PROJECTS</span>
          <h2 className="section-title">Engineering Portfolio &amp; Systems</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            Production software applications, banking systems, SaaS products, and personal open-source projects.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-xl bg-slate-200/80 dark:bg-slate-800/80 border border-slate-300/60 dark:border-slate-700/60 font-mono text-xs font-semibold">
            <button
              onClick={() => setActiveTab('industry')}
              className={`px-5 py-2 rounded-lg transition-all cursor-pointer ${
                activeTab === 'industry'
                  ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
              }`}
            >
              Industry Work ({industryProjects.length})
            </button>
            <button
              onClick={() => setActiveTab('personal')}
              className={`px-5 py-2 rounded-lg transition-all cursor-pointer ${
                activeTab === 'personal'
                  ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
              }`}
            >
              Personal Systems ({personalProjects.length})
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

      </div>
    </section>
  );
}
