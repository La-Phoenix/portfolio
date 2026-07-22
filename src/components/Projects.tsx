import { useState } from 'react';
import { ProjectCard } from './ProjectCard';

const industryProjects = [
  {
    id: 1,
    title: 'Enterprise Banking Account System',
    company: 'Regent Microfinance Bank',
    description: 'Standalone banking microservice digitizing account opening, tier upgrades, and staff audit trails. Features real-time BVN/NIN identity verification, multi-tier approval workflows (Internal Control & Operations Head), PIN-authenticated sensitive operations, asynchronous BullMQ queue processing, and Core Banking System (BankOne CBA) integration.',
    technologies: ['NestJS', 'TypeScript', 'PostgreSQL', 'Prisma ORM', 'Redis', 'BullMQ Queues', 'Next.js', 'Core Banking (BankOne)', 'BVN API Integration', 'RBAC & Audit Compliance'],
    images: [
      '/Images/banking/architecture.svg',
    ],
    link: undefined,
    githubLink: undefined,
  },
  {
    id: 2,
    title: 'Whatsella',
    company: 'ReenEdge Solutions',
    description: 'Commerce platform turning WhatsApp into a sales engine. Enable businesses to list products, automate customer conversations with AI, manage storefronts, send bulk messages, track orders, and handle secure payments — all from one dashboard.',
    technologies: ['ASP.NET Core', 'PostgreSQL', 'PayStack', 'Firebase Notifications', 'WhatsApp API', 'SaaS', 'Multi-Tenancy', 'AI Automation'],
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
    title: 'Zheeta',
    company: 'DeCloud23 Technologies',
    description: 'Social networking & matchmaking platform with smart discovery, nearby hangouts, and buddy event creation. Features private messaging, profile boosting, virtual gifting with redeemable coins, in-app wallet integration with bank withdrawals, fundraising, and a 10% affiliate referral program.',
    technologies: ['ASP.NET Core', 'PostgreSQL', 'Docker', 'Clean Architecture', 'SignalR', 'Paystack', 'In-App Wallet', 'Affiliate Engine'],
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
    description: 'Reward-based multiplayer gaming platform enabling players worldwide to compete in solo matches and tournaments to earn cash and gift rewards. Combines classic digital games with real-time multiplayer engagement and performance reward systems.',
    technologies: ['Node.js', 'Express.js', 'MySQL', 'EJS', 'WebSockets', 'In-App Purchases - Android and iOS', 'Fincra', 'PayStack','Reward Engine'],
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
    title: 'iGEMBA - Digital Shopfloor',
    company: 'Ithena',
    description: 'Industry 4.0 Digital Gemba Walk solution for smart manufacturing operations. Replaces manual paper huddles with real-time KPI tracking, configurable checklists, Kanban issue management, and advanced historical analytics — delivering a 26% reduction in issue resolution time for a global battery manufacturer.',
    technologies: ['Angular', 'Express.js', 'PostgreSQL', 'DevExtreme/DevExpress', 'Kanban Boards', 'Industry 4.0', 'Analytics Dashboards'],
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
    title: 'Kicest',
    company: 'Kicest',
    description: 'Instant e-commerce storefront platform empowering businesses to launch custom online stores in minutes and boost sales by up to 150%. Features automated inventory management, direct bank payout routing, real-time order alerts, smart buyer analytics, loyalty marketing tools, integrated logistics, and QR digital business cards.',
    technologies: ['Next.js App Router', 'React', 'Node.js', 'PostgreSQL', 'Payment Gateways', 'SaaS', 'Multi-Tenancy', 'Subdomain Engine'],
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
      '/Images/littlephoenix/littlephoenix1.png',
      '/Images/littlephoenix/littlephoenix2.png',
      '/Images/littlephoenix/littlephoenix3.png',
      '/Images/littlephoenix/littlephoenix4.png',
      '/Images/littlephoenix/littlephoenix5.png',
      '/Images/littlephoenix/littlephoenix6.png',
    ],
    link: 'https://littlephoenixai.vercel.app',
    githubLink: 'https://github.com/La-Phoenix/AIRadAPI',
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
    link: 'https://res-crmp.justinch.dev',
    githubLink: 'https://github.com/La-Phoenix/CollaborativeResearchManagmentPlatform',
  },
];

export function Projects() {
  const [activeTab, setActiveTab] = useState<'industry' | 'personal'>('industry');

  const projects = activeTab === 'industry' ? industryProjects : personalProjects;

  return (
    <section
      id="projects"
      className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title mb-12">Featured Projects</h2>

        {/* Tabs */}
        <div className="flex gap-4 mb-12 justify-center">
          <button
            onClick={() => setActiveTab('industry')}
            className={`px-6 py-3 font-semibold rounded-lg transition-all ${
              activeTab === 'industry'
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
            }`}
          >
            Industry Projects
          </button>
          <button
            onClick={() => setActiveTab('personal')}
            className={`px-6 py-3 font-semibold rounded-lg transition-all ${
              activeTab === 'personal'
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
            }`}
          >
            Personal Projects
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              company={project.company}
              description={project.description}
              technologies={project.technologies}
              images={project.images}
              link={project.link || undefined}
              githubLink={project.githubLink || undefined}
            />
          ))}
        </div>

        {/* Placeholder for empty personal projects */}
        {activeTab === 'personal' && personalProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Personal projects coming soon. Add your portfolio projects here!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
