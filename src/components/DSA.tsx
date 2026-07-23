import { Code2, ExternalLink, Github, Trophy, Zap, Brain, CheckCircle2, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const neetcodeScreenshots = [
  { id: 1, src: '/Images/neetcode/neetcode1.png', title: 'NeetCode Roadmap & Problem Submissions' },
  { id: 2, src: '/Images/neetcode/neetcode2.png', title: 'Algorithmic Problem Solutions & Passing Tests' },
  { id: 3, src: '/Images/neetcode/neetcode3.png', title: 'Data Structures & Algorithms Breakdown' },
  { id: 4, src: '/Images/neetcode/neetcode4.png', title: 'Complexity Analysis & Optimal Submissions' },
];

const dsaTopics = [
  'Arrays & Hashing',
  'Two Pointers',
  'Sliding Window',
  'Stack & Queue',
  'Binary Search',
  'Linked Lists',
  'Trees & BST',
  'Tries',
  'Heap / Priority Queue',
  'Backtracking',
  'Graphs (BFS/DFS)',
  '1D & 2D Dynamic Programming',
  'Bit Manipulation',
  'Intervals',
];

export function DSA() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImageIndex(null);
      }
    };
    if (selectedImageIndex !== null) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex]);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % neetcodeScreenshots.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (selectedImageIndex - 1 + neetcodeScreenshots.length) % neetcodeScreenshots.length
      );
    }
  };

  return (
    <section id="dsa" className="py-24 px-4 bg-slate-50/50 dark:bg-[#090d14] border-y border-slate-200/60 dark:border-slate-800/60 transition-colors">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-tag">// 06. ALGORITHMIC PRACTICE</span>
          <h2 className="section-title">Data Structures &amp; Problem Solving</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            Continuous practice solving NeetCode &amp; LeetCode challenges to engineer optimal algorithms with strict time and space complexity limits.
          </p>
        </div>

        {/* Top Highlights Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          
          <div className="dev-card p-6 text-left">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/80 dark:border-indigo-800/40">
                <Trophy size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Active Practice</h3>
                <p className="font-mono text-xs text-indigo-600 dark:text-indigo-400">NeetCode 150 &amp; Blind 75</p>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
              Consistently sharpening core problem-solving intuition across fundamental array manipulations, graph traversals, and dynamic programming.
            </p>
          </div>

          <div className="dev-card p-6 text-left">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/80 dark:border-indigo-800/40">
                <Zap size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Big-O Efficiency</h3>
                <p className="font-mono text-xs text-indigo-600 dark:text-indigo-400">Time &amp; Space Complexity</p>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
              Prioritizing optimal Big-O performance—striving for <code className="font-mono text-xs font-semibold px-1 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400">O(1)</code> space and <code className="font-mono text-xs font-semibold px-1 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400">O(N)</code> or <code className="font-mono text-xs font-semibold px-1 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400">O(N log N)</code> execution bounds.
            </p>
          </div>

          <div className="dev-card p-6 text-left">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/80 dark:border-indigo-800/40">
                <Brain size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Pattern Blueprint</h3>
                <p className="font-mono text-xs text-indigo-600 dark:text-indigo-400">Reusable Algorithmic Design</p>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
              Applying pattern recognition to real-world engineering—writing scalable algorithms for production database indexing, search, and queue execution.
            </p>
          </div>

        </div>

        {/* GitHub Repository Banner */}
        <div className="dev-card p-6 sm:p-8 mb-12 bg-slate-900 dark:bg-[#0e131f] text-white flex flex-col md:flex-row justify-between items-center gap-6 text-left">
          <div className="flex items-center gap-4">
            <div className="p-3.5 bg-slate-800 rounded-xl border border-slate-700 text-indigo-400 shrink-0">
              <Code2 size={28} />
            </div>
            <div>
              <div className="font-mono text-xs font-semibold text-indigo-400 mb-1">OPEN_SOURCE_REPO</div>
              <h3 className="text-xl font-bold text-slate-100">Track My NeetCode Submissions</h3>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                Explore my solution codebase, time/space complexity notes, and daily progress log on GitHub.
              </p>
            </div>
          </div>
          <a
            href="https://github.com/La-Phoenix/neetcode-submissions"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-mono font-semibold transition-colors shrink-0"
          >
            <Github size={16} />
            <span>View Submissions Repository</span>
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Topic Badges */}
        <div className="dev-card p-6 sm:p-8 mb-12 text-left">
          <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
            <CheckCircle2 className="text-indigo-600 dark:text-indigo-400" size={18} />
            <span>Core Patterns &amp; Topics Covered</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {dsaTopics.map((topic, idx) => (
              <span key={idx} className="tech-badge">
                {topic}
              </span>
            ))}
          </div>
        </div>

        {/* Screenshots Showcase */}
        <div className="text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
              NeetCode Progress Screenshots
            </h3>
            <span className="font-mono text-xs text-slate-500">Click any screenshot to expand</span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {neetcodeScreenshots.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setSelectedImageIndex(index)}
                className="dev-card p-2 cursor-pointer group hover:border-indigo-500 dark:hover:border-indigo-400 transition-colors"
              >
                <div className="relative h-40 w-full rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-1.5 text-white font-mono text-xs font-semibold">
                    <Maximize2 size={16} />
                    <span>Expand</span>
                  </div>
                </div>
                <p className="p-2 font-mono text-[11px] font-medium text-slate-700 dark:text-slate-300 truncate text-center">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div
          onClick={() => setSelectedImageIndex(null)}
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="flex justify-between items-center px-6 py-3.5 border-b border-slate-800 bg-slate-900 text-white">
              <div>
                <h4 className="text-base font-bold text-slate-100">
                  {neetcodeScreenshots[selectedImageIndex].title}
                </h4>
                <p className="font-mono text-xs text-slate-400">
                  Screenshot {selectedImageIndex + 1} of {neetcodeScreenshots.length}
                </p>
              </div>
              <button
                onClick={() => setSelectedImageIndex(null)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Display */}
            <div className="relative flex-1 bg-black flex items-center justify-center p-4 overflow-hidden min-h-[300px]">
              <img
                src={neetcodeScreenshots[selectedImageIndex].src}
                alt={neetcodeScreenshots[selectedImageIndex].title}
                className="max-h-[72vh] max-w-full object-contain rounded-lg"
              />

              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-slate-900/80 hover:bg-slate-800 text-white p-2.5 rounded-full transition-colors border border-slate-700"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-slate-900/80 hover:bg-slate-800 text-white p-2.5 rounded-full transition-colors border border-slate-700"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
