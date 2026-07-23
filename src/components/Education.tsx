import { GraduationCap, Calendar, MapPin, BookOpen, CheckCircle2, FileText, ExternalLink } from 'lucide-react';

export function Education() {
  const coursework = [
    'System Architecture & Design',
    'Data Structures & Algorithms (DSA)',
    'Software Development Life Cycle (SDLC)',
    'Database Management Systems (DBMS)',
    'Object-Oriented Programming (OOP)',
    'Operating Systems & Computer Networks',
  ];

  return (
    <section
      id="education"
      className="py-24 px-4 bg-slate-50/50 dark:bg-[#090d14] border-y border-slate-200/60 dark:border-slate-800/60 transition-colors"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-tag">// 03. ACADEMIC BACKGROUND</span>
          <h2 className="section-title">Education &amp; Core CS Foundations</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            Academic training in computer science, algorithm design, software architecture, and engineering principles.
          </p>
        </div>

        {/* Education Main Card */}
        <div className="dev-card p-8 sm:p-10 text-left">
          
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                <GraduationCap size={28} />
              </div>

              <div>
                <div className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold px-2.5 py-1 rounded bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20 mb-2">
                  <span>First Class Distinction (3.79 / 4.00 CGPA)</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
                  Bachelor of Science in Computer Science
                </h3>

                <p className="text-base font-semibold text-indigo-600 dark:text-indigo-400 mt-1">
                  University of Ibadan
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 font-mono text-xs text-slate-500 dark:text-slate-400 lg:text-right">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 lg:ml-auto w-fit">
                <Calendar size={12} className="text-indigo-500" />
                <span>2023 – 2028 (Currently Studying)</span>
              </div>
              <div className="inline-flex items-center gap-1 lg:justify-end">
                <MapPin size={12} />
                <span>Ibadan, Nigeria</span>
              </div>
            </div>
          </div>

          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-8 font-normal">
            Maintaining a <strong className="text-slate-900 dark:text-slate-100">First Class standing (3.79/4.00)</strong> with a strong grounding in core computer science, discrete mathematics, software engineering life cycles, memory management, and high-performance algorithms.
          </p>

          {/* Coursework & Transcript Button */}
          <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div className="font-mono text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <BookOpen size={15} className="text-indigo-500" />
                <span>CORE_ACADEMIC_SUBJECTS</span>
              </div>

              <a
                href="/transcript.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-white transition-colors w-fit"
              >
                <FileText size={14} />
                <span>View Academic Transcript</span>
                <ExternalLink size={12} />
              </a>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {coursework.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300"
                >
                  <CheckCircle2 size={15} className="text-emerald-500 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
