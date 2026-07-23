import { Github, FileText, Code2, ShieldCheck, Cpu, ExternalLink, Mail, Layers } from 'lucide-react';

export function About() {
  const corePrinciples = [
    {
      icon: Cpu,
      title: 'Scalable Microservices & Architecture',
      description: 'Designing clean, maintainable microservices, RESTful APIs, multi-tenant SaaS backends, and background queue workers.',
    },
    {
      icon: ShieldCheck,
      title: 'Enterprise Security & Authentication',
      description: 'Enforcing RBAC guards, PIN verification, JWT token authorization, Google OAuth 2.0, and DataProtection key encryption.',
    },
    {
      icon: Layers,
      title: 'API Performance & Data Engineering',
      description: 'Optimizing $O(N)$ runtime bounds, Redis session caching, Prisma / EF Core 9 query execution, and vector search indexing.',
    },
  ];

  return (
    <section
      id="about"
      className="py-24 px-4 bg-slate-50/50 dark:bg-[#090d14] border-y border-slate-200/60 dark:border-slate-800/60 transition-colors"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-tag">// 01. ABOUT ME</span>
          <h2 className="section-title">Engineering Background &amp; Approach</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            Software engineer focused on constructing reliable software systems, clean API contracts, and high-performance web solutions.
          </p>
        </div>

        {/* Main 2-Column Grid */}
        <div className="grid lg:grid-cols-12 gap-8 mb-12">
          
          {/* Bio Column */}
          <div className="lg:col-span-7 dev-card p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-4 flex items-center gap-2">
                <Code2 size={16} />
                <span>TECHNICAL_SUMMARY</span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                Samuel Okundalaiye
              </h3>

              <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed text-sm sm:text-base font-normal">
                Full-Stack &amp; Backend Software Engineer with <strong className="text-slate-900 dark:text-slate-100 font-semibold">3+ years of experience</strong> architecting web applications across e-commerce SaaS platforms, FinTech banking backends, and multi-agent AI platforms.
              </p>

              <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed text-sm sm:text-base font-normal">
                Proficient across modern software stacks including <span className="font-mono text-xs font-semibold text-indigo-600 dark:text-indigo-400">ASP.NET Core (C#)</span>, <span className="font-mono text-xs font-semibold text-indigo-600 dark:text-indigo-400">TypeScript / JavaScript</span>, <span className="font-mono text-xs font-semibold text-indigo-600 dark:text-indigo-400">Node.js (NestJS / Express)</span>, <span className="font-mono text-xs font-semibold text-indigo-600 dark:text-indigo-400">React &amp; Next.js</span>, and relational/NoSQL databases (<span className="font-mono text-xs font-semibold text-slate-700 dark:text-slate-300">PostgreSQL, MongoDB, MySQL</span>).
              </p>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base font-normal">
                Active problem solver dedicated to continuous Data Structures &amp; Algorithms practice, API security compliance, containerized deployment via <span className="font-mono text-xs font-semibold text-slate-700 dark:text-slate-300">Docker</span>, and clean software architecture.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200/80 dark:border-slate-800 flex flex-wrap gap-2">
              {['ASP.NET Core', 'TypeScript', 'Node.js', 'NestJS', 'React', 'Next.js', 'PostgreSQL', 'Docker', 'Redis', 'SignalR'].map((tag, idx) => (
                <span key={idx} className="tech-badge">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-5 dev-card p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-4 flex items-center gap-2">
                <FileText size={16} />
                <span>QUICK_RESOURCES</span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                Developer Links &amp; Profiles
              </h3>

              <div className="space-y-3">
                {/* GitHub */}
                <a
                  href="https://github.com/samuelokundalaiye"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-100 border border-slate-200/80 dark:border-slate-800 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Github size={18} className="text-slate-700 dark:text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
                    <div>
                      <p className="font-mono text-xs font-bold">GitHub Profile</p>
                      <p className="font-mono text-[11px] text-slate-500">github.com/samuelokundalaiye</p>
                    </div>
                  </div>
                  <ExternalLink size={14} className="text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200" />
                </a>

                {/* NeetCode Submissions */}
                <a
                  href="https://github.com/La-Phoenix/neetcode-submissions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-100 border border-slate-200/80 dark:border-slate-800 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Code2 size={18} className="text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="font-mono text-xs font-bold">DSA Submissions Repo</p>
                      <p className="font-mono text-[11px] text-slate-500">github.com/La-Phoenix/neetcode</p>
                    </div>
                  </div>
                  <ExternalLink size={14} className="text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200" />
                </a>

                {/* Email */}
                <a
                  href="mailto:samuelokundalaiye@gmail.com"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-100 border border-slate-200/80 dark:border-slate-800 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="font-mono text-xs font-bold">Direct Email</p>
                      <p className="font-mono text-[11px] text-slate-500">samuelokundalaiye@gmail.com</p>
                    </div>
                  </div>
                  <ExternalLink size={14} className="text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200" />
                </a>

                {/* Resume Download */}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Samuel_Okundalaiye_Resume.pdf"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 text-indigo-950 dark:text-indigo-100 border border-indigo-200 dark:border-indigo-800/60 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <FileText size={18} className="text-indigo-600 dark:text-indigo-400" />
                    <div>
                      <p className="font-mono text-xs font-bold text-indigo-900 dark:text-indigo-200">Official Resume PDF</p>
                      <p className="font-mono text-[11px] text-indigo-600 dark:text-indigo-400">Download CV Document</p>
                    </div>
                  </div>
                  <ExternalLink size={14} className="text-indigo-500 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Architecture Focus Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {corePrinciples.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="dev-card p-6 text-left">
                <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 w-fit mb-4 text-indigo-600 dark:text-indigo-400 border border-slate-200 dark:border-slate-700">
                  <Icon size={20} />
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-2">
                  {item.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
