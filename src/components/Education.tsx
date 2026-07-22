import { GraduationCap, Award, Calendar, MapPin, BookOpen, CheckCircle2, Sparkles, FileText, ExternalLink } from 'lucide-react';

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
      className="py-24 px-4 bg-white dark:bg-gray-900 transition-colors relative overflow-hidden"
    >
      {/* Background Lighting Orbs */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="section-title mb-4">Education &amp; Academics</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-16 text-base md:text-lg">
          Academic foundation in Computer Science and software engineering fundamentals.
        </p>

        {/* Education Main Card */}
        <div className="card p-8 md:p-10 rounded-3xl border border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-xl relative overflow-hidden group">
          {/* Top Accent Gradient Bar */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600" />

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-2xl bg-gradient-to-br from-amber-500 via-rose-500 to-purple-600 text-white shadow-lg shadow-purple-500/20">
                <GraduationCap size={32} />
              </div>

              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 text-xs font-bold mb-2 border border-amber-200 dark:border-amber-800/40">
                  <Sparkles size={12} />
                  <span>First Class Distinction (3.79 / 4.00 CGPA)</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white tracking-tight">
                  Bachelor&apos;s in Computer Science
                </h3>

                <p className="text-lg font-bold bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent mt-1">
                  University of Ibadan
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 lg:text-right">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-bold lg:justify-end w-fit lg:ml-auto">
                <Calendar size={14} className="text-purple-500" />
                <span>2023 – 2028 (Currently Studying)</span>
              </div>
              <div className="inline-flex items-center gap-1.5 text-gray-500 dark:text-gray-400 text-xs font-medium lg:justify-end">
                <MapPin size={14} className="text-indigo-500" />
                <span>Ibadan, Nigeria</span>
              </div>
            </div>
          </div>

          <p className="text-gray-700 dark:text-gray-200 mb-8 leading-relaxed font-medium text-base md:text-lg">
            A <strong className="text-amber-600 dark:text-amber-400">First Class (3.79/4.00)</strong> student with a strong theoretical and practical grounding in System Architecture &amp; Design, Data Structures &amp; Algorithms, Software Development Life Cycle (SDLC), and low-level computer science principles.
          </p>

          {/* Core Academic Focus Areas */}
          <div className="pt-6 border-t border-gray-100 dark:border-gray-800/80">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                <BookOpen size={16} className="text-purple-600 dark:text-purple-400" />
                <span>Core Academic Focus Areas</span>
              </h4>

              <a
                href="/transcript.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 hover:from-amber-600 hover:to-purple-700 text-white rounded-xl text-xs font-bold transition-all shadow-md hover:shadow-lg group w-fit"
              >
                <FileText size={16} />
                <span>View Academic Transcript</span>
                <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {coursework.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-3 rounded-2xl bg-gray-50 dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700/60 text-xs font-semibold text-gray-800 dark:text-gray-200"
                >
                  <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
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
