import { ArrowRight, FileText, Github, Terminal, Copy, Check } from 'lucide-react';
import { useState } from 'react';

export function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('samuelokundalaiye@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const techStack = [
    'ASP.NET Core',
    'TypeScript',
    'React',
    'Node.js / NestJS',
    'PostgreSQL',
    'Docker',
    'SignalR',
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 pt-28 pb-16 bg-grid-pattern transition-colors"
    >
      <div className="max-w-6xl mx-auto z-10 grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Bio & Core Pitch */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          {/* Developer Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 font-mono text-xs font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>AVAILABLE_FOR_FULLTIME_&amp;_CONTRACT_ROLES</span>
          </div>

          {/* Name & Title */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight leading-none mb-3">
              Samuel Okundalaiye
            </h1>
            <p className="text-xl sm:text-2xl font-bold text-indigo-600 dark:text-indigo-400 tracking-tight">
              Software Engineer — Backend &amp; Full-Stack
            </p>
          </div>

          {/* Short Narrative */}
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
            Specializing in high-performance backend microservices, distributed system architectures, RESTful APIs, and multi-tenant SaaS platforms using <span className="font-semibold text-slate-900 dark:text-slate-100">ASP.NET Core</span>, <span className="font-semibold text-slate-900 dark:text-slate-100">Node.js</span>, <span className="font-semibold text-slate-900 dark:text-slate-100">React</span>, and <span className="font-semibold text-slate-900 dark:text-slate-100">PostgreSQL</span>.
          </p>

          {/* Tech Stack Monospace Pills */}
          <div className="flex flex-wrap gap-2 pt-1">
            {techStack.map((tech, idx) => (
              <span key={idx} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-3 pt-4">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary"
            >
              <span>Explore Projects</span>
              <ArrowRight size={16} className="ml-2" />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Samuel_Okundalaiye_Resume.pdf"
              className="btn-secondary"
            >
              <FileText size={16} className="mr-2 text-indigo-600 dark:text-indigo-400" />
              <span>Resume PDF</span>
            </a>

            <button
              onClick={copyEmail}
              className="btn-secondary font-mono text-xs"
              title="Copy Email to Clipboard"
            >
              {copied ? (
                <>
                  <Check size={14} className="mr-1.5 text-emerald-500" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={14} className="mr-1.5 text-slate-500" />
                  <span>samuelokundalaiye@gmail.com</span>
                </>
              )}
            </button>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/80 dark:border-slate-800/80">
            <div>
              <div className="font-mono text-2xl font-bold text-slate-900 dark:text-slate-100">3+ YOE</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Production Development</div>
            </div>
            <div>
              <div className="font-mono text-2xl font-bold text-slate-900 dark:text-slate-100">15+</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Projects Delivered</div>
            </div>
            <div>
              <div className="font-mono text-2xl font-bold font-semibold text-emerald-600 dark:text-emerald-400">3.79/4.0</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">First Class CS Degree</div>
            </div>
          </div>

        </div>

        {/* Right Column: Code IDE Terminal Card */}
        <div className="lg:col-span-5">
          <div className="dev-card overflow-hidden shadow-xl text-left">
            
            {/* Terminal Window Header */}
            <div className="px-4 py-3 bg-slate-100 dark:bg-[#181e2b] border-b border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="font-mono text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <Terminal size={12} className="text-indigo-500" />
                <span>engineer.config.ts</span>
              </div>
              <a
                href="https://github.com/samuelokundalaiye"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                title="GitHub Profile"
              >
                <Github size={15} />
              </a>
            </div>

            {/* Code Content */}
            <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto bg-slate-900 text-slate-100 dark:bg-[#0d1117]">
              <div>
                <span className="text-purple-400">export const</span> <span className="text-blue-400">engineer</span> = &#123;
              </div>
              <div className="pl-4">
                <span className="text-slate-400">name:</span> <span className="text-emerald-300">&quot;Samuel Okundalaiye&quot;</span>,
              </div>
              <div className="pl-4">
                <span className="text-slate-400">handle:</span> <span className="text-emerald-300">&quot;La-Phoenix&quot;</span>,
              </div>
              <div className="pl-4">
                <span className="text-slate-400">role:</span> <span className="text-emerald-300">&quot;Backend &amp; Full-Stack Engineer&quot;</span>,
              </div>
              <div className="pl-4">
                <span className="text-slate-400">education:</span> <span className="text-emerald-300">&quot;B.Sc. CS (First Class) — Univ. of Ibadan&quot;</span>,
              </div>
              <div className="pl-4">
                <span className="text-slate-400">primaryStack:</span> [
              </div>
              <div className="pl-8 text-amber-300">
                &quot;ASP.NET Core&quot;, &quot;TypeScript&quot;, &quot;React&quot;, &quot;PostgreSQL&quot;, &quot;Docker&quot;
              </div>
              <div className="pl-4">
                ],
              </div>
              <div className="pl-4">
                <span className="text-slate-400">architectureFocus:</span> [
              </div>
              <div className="pl-8 text-amber-300">
                &quot;REST APIs&quot;, &quot;Multi-Tenancy&quot;, &quot;RAG Pipelines&quot;, &quot;SignalR WebSockets&quot;
              </div>
              <div className="pl-4">
                ],
              </div>
              <div className="pl-4">
                <span className="text-slate-400">status:</span> <span className="text-emerald-400">&quot;Ready for production deployment&quot;</span>
              </div>
              <div>&#125;;</div>

              <div className="mt-4 pt-3 border-t border-slate-800 text-slate-500 text-[11px] flex items-center justify-between">
                <span>// UTF-8 | TypeScript 5.9</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  0 errors, 0 warnings
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
