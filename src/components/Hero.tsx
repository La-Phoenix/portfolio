import { ArrowRight, FileText, Flame, Code2, Briefcase, Cpu, Sparkles } from 'lucide-react';

export function Hero() {
  const techPills = [
    { name: 'React', color: 'from-blue-500/20 to-cyan-500/20 border-cyan-500/30 text-cyan-700 dark:text-cyan-300' },
    { name: 'TypeScript', color: 'from-blue-600/20 to-indigo-500/20 border-blue-500/30 text-blue-700 dark:text-blue-300' },
    { name: 'C#', color: 'from-blue-600/20 to-indigo-500/20 border-blue-500/30 text-blue-700 dark:text-blue-300' },
    { name: '.NET Core', color: 'from-purple-600/20 to-indigo-600/20 border-purple-500/30 text-purple-700 dark:text-purple-300' },
    { name: 'Node.js', color: 'from-emerald-600/20 to-teal-500/20 border-emerald-500/30 text-emerald-700 dark:text-emerald-300' },
    { name: 'Nestjs', color: 'from-emerald-600/20 to-teal-500/20 border-emerald-500/30 text-emerald-700 dark:text-emerald-300' },
    { name: 'Nestjs', color: 'from-emerald-600/20 to-teal-500/20 border-emerald-500/30 text-emerald-700 dark:text-emerald-300' },
    { name: 'Expressjs', color: 'from-emerald-600/20 to-teal-500/20 border-emerald-500/30 text-emerald-700 dark:text-emerald-300' },
    { name: 'PostgreSQL', color: 'from-blue-700/20 to-sky-600/20 border-sky-500/30 text-sky-700 dark:text-sky-300' },
    { name: 'MySQL', color: 'from-blue-700/20 to-sky-600/20 border-sky-500/30 text-sky-700 dark:text-sky-300' },
    { name: 'MongoDB', color: 'from-green-600/20 to-emerald-500/20 border-green-500/30 text-green-700 dark:text-green-300' },
    { name: 'Docker', color: 'from-sky-500/20 to-blue-500/20 border-sky-400/30 text-sky-600 dark:text-sky-300' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 pt-28 pb-16 overflow-hidden bg-gradient-to-b from-white via-purple-50/20 to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-black transition-colors"
    >
      {/* Ambient Lighting & Background Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-purple-600/20 via-indigo-600/20 to-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center z-10">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs md:text-sm font-semibold mb-8 backdrop-blur-md shadow-sm animate-fade-in">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span>Available for Full-Time Roles &amp; Engineering Contracts</span>
        </div>

        {/* Profile Avatar Frame */}
        <div className="mb-8 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 rounded-full blur-md opacity-80 group-hover:opacity-100 transition duration-500 group-hover:scale-105" />
            
            <div className="relative w-36 h-36 md:w-44 md:h-44 bg-gray-900 rounded-full p-1.5 shadow-2xl flex items-center justify-center overflow-hidden border-2 border-white/20">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-900 via-gray-900 to-indigo-950 flex flex-col items-center justify-center text-white relative">
                <Flame className="text-amber-400 mb-1 animate-pulse" size={28} />
                <span className="text-3xl md:text-4xl font-black tracking-wider bg-gradient-to-r from-amber-400 via-rose-400 to-purple-400 bg-clip-text text-transparent">
                  SO
                </span>
                <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mt-0.5">
                  LA-PHOENIX
                </span>
              </div>
            </div>

            {/* Experience Badge on Avatar */}
            <div className="absolute -bottom-2 -right-2 px-3 py-1 bg-gray-900/90 text-white rounded-full border border-purple-500/40 text-xs font-bold shadow-xl flex items-center gap-1">
              <Sparkles size={12} className="text-amber-400" />
              <span>3+ YOE</span>
            </div>
          </div>
        </div>

        {/* Main Name & Title */}
        <h2 className="text-lg md:text-xl font-bold text-purple-600 dark:text-purple-400 mb-3 tracking-wide">
          Hi, I&apos;m Samuel Okundalaiye
        </h2>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
          <span className="bg-gradient-to-r from-gray-900 via-purple-950 to-gray-800 dark:from-white dark:via-purple-200 dark:to-gray-300 bg-clip-text text-transparent">
            Full-Stack &amp; Backend
          </span>{' '}
          <span className="bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 dark:from-amber-400 dark:via-rose-400 dark:to-purple-400 bg-clip-text text-transparent">
            Engineer
          </span>
        </h1>

        <p className="text-base sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed font-medium">
          Architecting robust web applications, high-throughput microservices, and modern digital platforms using <strong className="text-purple-600 dark:text-purple-400">ASP.NET Core</strong>, <strong className="text-indigo-600 dark:text-indigo-400">React</strong>, and <strong className="text-emerald-600 dark:text-emerald-400">Node.js</strong>.
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 max-w-3xl mx-auto">
          {techPills.map((tech, idx) => (
            <span
              key={idx}
              className={`px-3.5 py-1.5 rounded-xl text-xs md:text-sm font-semibold bg-gradient-to-r ${tech.color} border backdrop-blur-md shadow-sm hover:scale-105 transition-transform duration-200`}
            >
              {tech.name}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl font-bold text-base transition-all duration-300 shadow-xl hover:shadow-purple-500/25 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 group cursor-pointer"
          >
            <span>View My Work</span>
            <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform" />
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Samuel_Okundalaiye_Resume.pdf"
            className="w-full sm:w-auto px-8 py-4 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800/90 dark:hover:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-xl font-bold text-base transition-all duration-300 shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2.5 backdrop-blur-md"
          >
            <FileText size={18} className="text-purple-600 dark:text-purple-400" />
            <span>Download CV</span>
          </a>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="card p-6 bg-white/70 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-100 dark:border-gray-700/60 rounded-2xl hover:shadow-xl transition-all duration-300 text-left relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-500" />
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-4xl font-black bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
                3+
              </h3>
              <div className="p-2.5 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-300">
                <Briefcase size={22} />
              </div>
            </div>
            <p className="text-gray-900 dark:text-white font-bold text-base">Years Experience</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Full-stack &amp; backend engineering</p>
          </div>

          <div className="card p-6 bg-white/70 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-100 dark:border-gray-700/60 rounded-2xl hover:shadow-xl transition-all duration-300 text-left relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-blue-500" />
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-4xl font-black bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-400 bg-clip-text text-transparent">
                15+
              </h3>
              <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-300">
                <Code2 size={22} />
              </div>
            </div>
            <p className="text-gray-900 dark:text-white font-bold text-base">Projects Delivered</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">SaaS, FinTech &amp; Enterprise platforms</p>
          </div>

          <div className="card p-6 bg-white/70 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-100 dark:border-gray-700/60 rounded-2xl hover:shadow-xl transition-all duration-300 text-left relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-rose-500" />
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-4xl font-black bg-gradient-to-r from-amber-500 to-rose-500 dark:from-amber-400 dark:to-rose-400 bg-clip-text text-transparent">
                10+
              </h3>
              <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-300">
                <Cpu size={22} />
              </div>
            </div>
            <p className="text-gray-900 dark:text-white font-bold text-base">Core Technologies</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Modern stacks &amp; cloud architecture</p>
          </div>
        </div>

      </div>
    </section>
  );
}
