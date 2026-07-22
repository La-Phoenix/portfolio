import { Code2, Database, GitBranch, Cloud, Sparkles, CheckCircle } from 'lucide-react';

const skillCategories = [
  {
    icon: GitBranch,
    title: 'Backend & Microservices',
    skills: ['C#', 'ASP.NET Core', 'NestJS', 'Node.js', 'Express.js', 'REST APIs', 'SignalR WebSockets', 'OAuth 2.0', 'JWT Auth'],
    color: 'text-purple-600 dark:text-purple-400',
    bgColor: 'bg-purple-100 dark:bg-purple-950/60 border-purple-200 dark:border-purple-800/40',
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    icon: Code2,
    title: 'Languages & Frontend',
    skills: ['TypeScript', 'JavaScript', 'React.js (v19)', 'Next.js App Router', 'Angular', 'Tailwind CSS (v4)', 'Material UI', 'DevExtreme'],
    color: 'text-indigo-600 dark:text-indigo-400',
    bgColor: 'bg-indigo-100 dark:bg-indigo-950/60 border-indigo-200 dark:border-indigo-800/40',
    gradient: 'from-indigo-500 to-blue-500',
  },
  {
    icon: Database,
    title: 'Databases & AI / Vector Search',
    skills: ['PostgreSQL (Supabase)', 'Prisma ORM', 'EF Core 9', 'Qdrant Vector DB', 'MongoDB', 'MySQL', 'Redis Cache', 'Google Gemini Embeddings', 'Microsoft Semantic Kernel'],
    color: 'text-blue-600 dark:text-blue-400',
    bgColor: 'bg-blue-100 dark:bg-blue-950/60 border-blue-200 dark:border-blue-800/40',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Cloud,
    title: 'DevOps, Queues & Tools',
    skills: ['Docker', 'BullMQ Async Queues', 'CI/CD Pipelines', 'Cloud Storage (S3/R2)', 'Cloudflare Logpush', 'Git', 'Swagger', 'Postman'],
    color: 'text-emerald-600 dark:text-emerald-400',
    bgColor: 'bg-emerald-100 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-800/40',
    gradient: 'from-emerald-500 to-teal-500',
  },
];

const proficiencies = [
  { name: 'Backend Development (.NET 9 / NestJS / Node)', level: 95, detail: 'ASP.NET Core, NestJS, REST APIs, Microservices & Multi-Tenancy' },
  { name: 'Full Stack Web Development (React / Next.js)', level: 90, detail: 'React 19, Next.js App Router, TypeScript & Tailwind CSS v4' },
  { name: 'Database Architecture (PostgreSQL / Redis / Qdrant)', level: 90, detail: 'Prisma ORM, EF Core 9, Vector Search & Redis Caching' },
  { name: 'API Architecture & Real-Time Communications', level: 90, detail: 'SignalR WebSockets, Groq AI Integration & OAuth 2.0 Security' },
  { name: 'DevOps, Queues & Infrastructure', level: 80, detail: 'Docker, BullMQ Queues, Cloud Storage & CI/CD Pipelines' },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-4 bg-white dark:bg-gray-900 transition-colors relative overflow-hidden"
    >
      {/* Background Lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="section-title mb-4">Technical Skills</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-16 text-base md:text-lg">
          Core technical competencies, language proficiencies, frameworks, database architectures, and engineering tools.
        </p>

        {/* Skill Category Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="card p-8 rounded-3xl border border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all relative overflow-hidden group"
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.gradient}`} />
                
                <div className="flex items-center gap-3.5 mb-6">
                  <div className={`p-3 rounded-2xl border ${category.bgColor}`}>
                    <Icon className={`${category.color}`} size={26} />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-xl text-xs md:text-sm font-semibold bg-gray-50 dark:bg-gray-800/70 text-gray-800 dark:text-gray-200 border border-gray-200/80 dark:border-gray-700/60 transition-all duration-200 hover:scale-105 hover:border-purple-400 dark:hover:border-purple-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Proficiency Matrix Overview */}
        <div className="card p-8 md:p-10 rounded-3xl border border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-2xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800/40">
              <Sparkles size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-black text-gray-900 dark:text-white">
                Engineering Proficiency Matrix
              </h3>
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                Core domain breakdown based on production delivery experience
              </p>
            </div>
          </div>

          <div className="space-y-7">
            {proficiencies.map((skill, idx) => (
              <div key={idx} className="group">
                <div className="flex justify-between items-baseline mb-2">
                  <div>
                    <span className="font-bold text-gray-900 dark:text-white text-base">
                      {skill.name}
                    </span>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                      {skill.detail}
                    </p>
                  </div>
                  <span className="text-sm font-black text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/60 px-2.5 py-1 rounded-lg border border-purple-100 dark:border-purple-800/40">
                    {skill.level}%
                  </span>
                </div>

                <div className="w-full bg-gray-100 dark:bg-gray-800 h-3.5 rounded-full overflow-hidden p-0.5 border border-gray-200/60 dark:border-gray-700/60">
                  <div
                    className="h-full bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 rounded-full transition-all duration-700 ease-out shadow-sm"
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
