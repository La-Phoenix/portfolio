import { Code2, Database, GitBranch, Cloud, Terminal } from 'lucide-react';

const skillCategories = [
  {
    icon: GitBranch,
    title: 'Backend & Microservices',
    skills: ['C#', 'ASP.NET Core', 'NestJS', 'Node.js', 'Express.js', 'Laravel', 'REST APIs', 'SignalR WebSockets', 'OAuth 2.0', 'JWT Auth'],
  },
  {
    icon: Code2,
    title: 'Languages & Frontend',
    skills: ['TypeScript', 'JavaScript', 'React (v19)', 'Next.js App Router', 'Angular', 'Tailwind CSS (v4)', 'Material UI', 'DevExtreme'],
  },
  {
    icon: Database,
    title: 'Databases & AI Vector Search',
    skills: ['PostgreSQL (Supabase)', 'Prisma ORM', 'EF Core 9', 'Qdrant Vector DB', 'MongoDB', 'MySQL', 'Redis Cache', 'Gemini Embeddings', 'Semantic Kernel'],
  },
  {
    icon: Cloud,
    title: 'DevOps, Queues & Tooling',
    skills: ['Docker', 'BullMQ Async Queues', 'CI/CD Pipelines', 'Cloud Storage (S3/R2)', 'Cloudflare Logpush', 'Git', 'Swagger', 'Postman'],
  },
];

const proficiencies = [
  { name: 'Backend Engineering (.NET 9 / NestJS / Node)', level: 95, detail: 'ASP.NET Core, RESTful APIs, Microservices & Multi-Tenancy' },
  { name: 'Full-Stack Web Development (React / Next.js)', level: 90, detail: 'React 19, Next.js App Router, TypeScript & Tailwind CSS v4' },
  { name: 'Database Architecture & Caching (PostgreSQL / Redis)', level: 90, detail: 'Prisma ORM, EF Core 9, Vector DBs & Redis Session Caching' },
  { name: 'API Security & Real-Time Messaging (SignalR / OAuth)', level: 90, detail: 'SignalR WebSockets, Groq AI Integration & JWT Security' },
  { name: 'DevOps & Asynchronous Workers (Docker / BullMQ)', level: 80, detail: 'Docker Containerization, BullMQ Worker Queues & CI/CD' },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-4 bg-white dark:bg-[#0b0f17] transition-colors"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-tag">// 05. SKILLS &amp; ARCHITECTURE</span>
          <h2 className="section-title">Technical Stack &amp; Proficiency</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            Core programming languages, frameworks, database architectures, and engineering infrastructure.
          </p>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className="dev-card p-6 sm:p-8 text-left">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/80 dark:border-indigo-800/40">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span key={idx} className="tech-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Proficiency Matrix Card */}
        <div className="dev-card p-6 sm:p-10 text-left">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              <Terminal size={20} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                Core Domain Proficiency
              </h3>
              <p className="font-mono text-xs text-slate-500">
                Self-assessment based on production engineering delivery
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {proficiencies.map((skill, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-baseline mb-2">
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-slate-100 text-sm sm:text-base">
                      {skill.name}
                    </span>
                    <p className="text-xs text-slate-500 font-mono mt-0.5">
                      {skill.detail}
                    </p>
                  </div>
                  <span className="font-mono text-xs font-bold text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/80 dark:border-indigo-800/40">
                    {skill.level}%
                  </span>
                </div>

                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden border border-slate-200/80 dark:border-slate-700/60">
                  <div
                    className="h-full bg-indigo-600 dark:bg-indigo-500 rounded-full transition-all duration-700"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
