import { Mail, Github, FileText, ArrowUp, Terminal } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-100 border-t border-slate-800 pt-16 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 text-left">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="p-2 rounded-lg bg-slate-800 text-indigo-400 border border-slate-700">
                <Terminal size={18} />
              </div>
              <span className="font-mono text-base font-bold text-slate-100 tracking-tight">
                samuel.okundalaiye<span className="text-indigo-400">()</span>
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-normal max-w-sm">
              Full-Stack &amp; Backend Software Engineer crafting high-scale microservices, REST APIs, and modern web applications.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>All System Microservices Operational</span>
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="md:col-span-3 text-left">
            <h4 className="font-mono text-xs font-bold text-slate-200 uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 font-mono text-xs text-slate-400">
              <li>
                <a href="#about" className="hover:text-indigo-400 transition-colors">
                  # About
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-indigo-400 transition-colors">
                  # Experience
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-indigo-400 transition-colors">
                  # Education
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-indigo-400 transition-colors">
                  # Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-indigo-400 transition-colors">
                  # Skills
                </a>
              </li>
              <li>
                <a href="#dsa" className="hover:text-indigo-400 transition-colors">
                  # DSA &amp; Algorithms
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Resources (4 cols) */}
          <div className="md:col-span-4 text-left">
            <h4 className="font-mono text-xs font-bold text-slate-200 uppercase tracking-wider mb-4">
              Developer Connections
            </h4>
            <div className="space-y-3">
              <a
                href="https://github.com/la-phoenix"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 transition-colors group"
              >
                <Github size={16} className="text-slate-400 group-hover:text-indigo-400" />
                <span className="font-mono text-xs">github.com/la-phoenix</span>
              </a>

              <a
                href="mailto:samuelokundalaiye@gmail.com"
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 transition-colors group"
              >
                <Mail size={16} className="text-slate-400 group-hover:text-indigo-400" />
                <span className="font-mono text-xs">samuelokundalaiye@gmail.com</span>
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Samuel_Okundalaiye_Resume.pdf"
                className="flex items-center gap-3 p-3 rounded-xl bg-indigo-950/60 hover:bg-indigo-900/60 text-indigo-200 border border-indigo-800/60 transition-colors group"
              >
                <FileText size={16} className="text-indigo-400" />
                <span className="font-mono text-xs">Official Resume (PDF)</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 font-mono">
          <p>© {new Date().getFullYear()} Samuel Okundalaiye (La-Phoenix). All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="mt-4 sm:mt-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
            title="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
