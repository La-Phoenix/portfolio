import { Github, FileText, Code2, ShieldCheck, Cpu, UserCheck, Sparkles, ExternalLink } from 'lucide-react';

export function About() {
  const corePrinciples = [
    {
      icon: Cpu,
      title: 'Scalable Architecture',
      description: 'Designing clean, maintainable microservices, REST APIs, and multi-tenant SaaS platforms.',
      color: 'text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-950/60 border-purple-200 dark:border-purple-800/40',
    },
    {
      icon: ShieldCheck,
      title: 'Enterprise Security',
      description: 'Enforcing RBAC guards, PIN verification, token authorization, and automated compliance logging.',
      color: 'text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-950/60 border-indigo-200 dark:border-indigo-800/40',
    },
    {
      icon: Code2,
      title: 'Performance & Optimization',
      description: 'Optimizing $O(N)$ runtime bounds, Redis session caching, and async BullMQ queue workers.',
      color: 'text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-800/40',
    },
  ];

  return (
    <section
      id="about"
      className="py-24 px-4 bg-white dark:bg-gray-900 transition-colors relative overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="section-title mb-4">About Me</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-16 text-base md:text-lg">
          Dedicated Full-Stack &amp; Backend Engineer passionate about turning complex business requirements into seamless, high-performance software.
        </p>

        {/* Main 2-Column Grid */}
        <div className="grid lg:grid-cols-12 gap-8 mb-12">
          
          {/* Bio Column (7 cols) */}
          <div className="lg:col-span-7 card p-8 md:p-10 rounded-3xl border border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-xl flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 text-xs font-bold mb-6 border border-purple-200 dark:border-purple-800/40">
                <Sparkles size={14} />
                <span>Full-Stack &amp; Backend Specialist</span>
              </div>

              <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-6">
                Samuel Okundalaiye
              </h3>

              <p className="text-gray-700 dark:text-gray-200 mb-5 leading-relaxed font-medium text-base">
                Passionate Full-Stack Web Developer with <strong className="text-purple-600 dark:text-purple-400">3+ years of experience</strong> engineering web applications across e-commerce SaaS, FinTech banking services, and multiplayer platforms.
              </p>

              <p className="text-gray-700 dark:text-gray-200 mb-5 leading-relaxed font-medium text-base">
                Proficient in modern full-stack languages including <strong className="text-indigo-600 dark:text-indigo-400">TypeScript, JavaScript, C# (.NET Core), and Node.js</strong>. Experienced with relational and NoSQL databases such as <strong className="text-blue-600 dark:text-blue-400">PostgreSQL, MongoDB, and MySQL</strong>, utilizing Prisma ORM and EF Core.
              </p>

              <p className="text-gray-700 dark:text-gray-200 leading-relaxed font-medium text-base">
                Extensive hands-on background with <strong className="text-emerald-600 dark:text-emerald-400">Docker, CI/CD pipelines, BullMQ job queues, Redis caching, and Swagger API documentation</strong>. Dedicated to continuous algorithmic problem solving and writing clean, auditable code.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 flex flex-wrap gap-2">
              {['TypeScript', 'ASP.NET Core', 'NestJS', 'React', 'Next.js', 'PostgreSQL', 'Docker', 'Redis', 'BullMQ'].map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-semibold rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Connect & Links Column (5 cols) */}
          <div className="lg:col-span-5 card p-8 md:p-10 rounded-3xl border border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-xl flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-bold mb-6 border border-indigo-200 dark:border-indigo-800/40">
                <UserCheck size={14} />
                <span>Connect &amp; Resources</span>
              </div>

              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Quick Links
              </h3>

              <div className="space-y-3.5">
                {/* LinkedIn - Commented out for now
                <a
                  href="https://linkedin.com/in/samuel-okundalaiye"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 hover:bg-blue-50/80 dark:bg-gray-800/60 dark:hover:bg-blue-950/40 text-gray-900 dark:text-gray-100 border border-gray-100 dark:border-gray-700/60 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                      <Linkedin size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-sm">LinkedIn</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">linkedin.com/in/samuel-okundalaiye</p>
                    </div>
                  </div>
                  <ExternalLink size={16} className="text-gray-400 group-hover:text-blue-500 transition-colors" />
                </a>
                */}

                {/* GitHub */}
                <a
                  href="https://github.com/samuelokundalaiye"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 hover:bg-purple-50/80 dark:bg-gray-800/60 dark:hover:bg-purple-950/40 text-gray-900 dark:text-gray-100 border border-gray-100 dark:border-gray-700/60 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-purple-100 dark:bg-purple-900/60 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                      <Github size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-sm">GitHub Profile</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">github.com/samuelokundalaiye</p>
                    </div>
                  </div>
                  <ExternalLink size={16} className="text-gray-400 group-hover:text-purple-500 transition-colors" />
                </a>

                {/* NeetCode Submissions */}
                <a
                  href="https://github.com/La-Phoenix/neetcode-submissions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 hover:bg-amber-50/80 dark:bg-gray-800/60 dark:hover:bg-amber-950/40 text-gray-900 dark:text-gray-100 border border-gray-100 dark:border-gray-700/60 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-amber-100 dark:bg-amber-900/60 text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform">
                      <Code2 size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-sm">DSA Submissions</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">github.com/La-Phoenix/neetcode</p>
                    </div>
                  </div>
                  <ExternalLink size={16} className="text-gray-400 group-hover:text-amber-500 transition-colors" />
                </a>

                {/* Resume Download */}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Samuel_Okundalaiye_Resume.pdf"
                  className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 hover:from-emerald-500/20 hover:to-teal-500/20 text-gray-900 dark:text-gray-100 border border-emerald-500/30 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-emerald-500 text-white group-hover:scale-110 transition-transform shadow-md">
                      <FileText size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-emerald-700 dark:text-emerald-300">Official Resume</p>
                      <p className="text-xs text-emerald-600/80 dark:text-emerald-400/80">Download CV (PDF)</p>
                    </div>
                  </div>
                  <ExternalLink size={16} className="text-emerald-500 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Principles Highlight Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {corePrinciples.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="card p-6 md:p-8 rounded-3xl border border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className={`p-3.5 rounded-2xl w-fit mb-5 border ${item.color}`}>
                  <Icon size={24} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed font-medium">
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
