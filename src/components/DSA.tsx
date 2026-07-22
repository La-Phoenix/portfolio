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
  'Stack',
  'Binary Search',
  'Linked List',
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
    <section id="dsa" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/60 transition-colors">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title mb-4">DSA &amp; Problem Solving</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12 text-base md:text-lg">
          Continuous algorithmic practice and data structure mastery. Solving NeetCode &amp; LeetCode challenges to build clean, performant, and optimal code.
        </p>

        {/* Top Highlights Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Card 1 */}
          <div className="card p-6 border border-gray-100 dark:border-gray-700/60 hover:shadow-xl transition-all">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 rounded-xl bg-purple-100 dark:bg-purple-900/60 text-purple-600 dark:text-purple-300">
                <Trophy size={26} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-gray-900 dark:text-white">Active Solving</h3>
                <p className="text-xs font-semibold text-purple-600 dark:text-purple-400">NeetCode 150 &amp; Blind 75</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Consistently sharpening core problem-solving intuition across fundamental array manipulations, tree traversals, and dynamic programming.
            </p>
          </div>

          {/* Card 2 */}
          <div className="card p-6 border border-gray-100 dark:border-gray-700/60 hover:shadow-xl transition-all">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 rounded-xl bg-indigo-100 dark:bg-indigo-900/60 text-indigo-600 dark:text-indigo-300">
                <Zap size={26} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-gray-900 dark:text-white">Optimal Solutions</h3>
                <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">Time &amp; Space Complexity</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Prioritizing Big-O efficiency—striving for optimal <code className="text-xs bg-indigo-50 dark:bg-indigo-950 px-1 py-0.5 rounded text-indigo-600 dark:text-indigo-300">O(1)</code> space and <code className="text-xs bg-indigo-50 dark:bg-indigo-950 px-1 py-0.5 rounded text-indigo-600 dark:text-indigo-300">O(N)</code> runtime performance.
            </p>
          </div>

          {/* Card 3 */}
          <div className="card p-6 border border-gray-100 dark:border-gray-700/60 hover:shadow-xl transition-all">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-300">
                <Brain size={26} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-gray-900 dark:text-white">Pattern Mindset</h3>
                <p className="text-xs font-semibold text-blue-600 dark:text-blue-400">Reusable Algorithmic Blueprints</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Applying pattern-recognition to real-world engineering—writing scalable algorithms for production database indexing, search, and data processing.
            </p>
          </div>
        </div>

        {/* GitHub Progress Repository Banner */}
        <div className="card p-6 md:p-8 mb-12 bg-gradient-to-r from-gray-900 via-indigo-950 to-purple-950 text-white rounded-2xl border border-indigo-900/50 shadow-2xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-md">
              <Code2 size={36} className="text-purple-400" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 text-xs font-bold bg-purple-500/30 text-purple-300 rounded-full border border-purple-400/30">
                  Open Source Repo
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white">Track My NeetCode Submissions</h3>
              <p className="text-gray-300 text-sm mt-1">
                Explore my solution codebase, time/space complexity notes, and daily progress log on GitHub.
              </p>
            </div>
          </div>
          <a
            href="https://github.com/La-Phoenix/neetcode-submissions"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3.5 bg-purple-600 hover:bg-purple-500 text-white rounded-xl transition-all font-bold shadow-lg hover:shadow-purple-500/25 flex-shrink-0 group"
          >
            <Github size={20} />
            <span>View GitHub Repository</span>
            <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Topic Badges */}
        <div className="card p-6 md:p-8 mb-12">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <CheckCircle2 className="text-purple-600 dark:text-purple-400" size={20} />
            <span>Core Topics &amp; Patterns Covered</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {dsaTopics.map((topic, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/40 hover:scale-105 transition-transform"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        {/* NeetCode Screenshots Showcase Gallery */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center justify-between">
            <span>NeetCode Progress Screenshots</span>
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Click any screenshot to view full resolution</span>
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {neetcodeScreenshots.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setSelectedImageIndex(index)}
                className="card p-2 rounded-xl overflow-hidden cursor-pointer group border border-gray-200 dark:border-gray-700/60 hover:border-purple-500 dark:hover:border-purple-400 transition-all hover:shadow-xl bg-white dark:bg-gray-900"
              >
                <div className="relative h-44 w-full rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-medium text-xs">
                    <Maximize2 size={16} />
                    <span>Expand</span>
                  </div>
                </div>
                <div className="p-2 text-center">
                  <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 truncate">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div
          onClick={() => setSelectedImageIndex(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-800 flex flex-col max-h-[90vh]"
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-800 bg-gray-900/90 text-white">
              <div>
                <h4 className="text-lg font-bold text-white">
                  {neetcodeScreenshots[selectedImageIndex].title}
                </h4>
                <p className="text-xs text-gray-400">
                  Screenshot {selectedImageIndex + 1} of {neetcodeScreenshots.length}
                </p>
              </div>
              <button
                onClick={() => setSelectedImageIndex(null)}
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Image */}
            <div className="relative flex-1 bg-black flex items-center justify-center p-4 overflow-hidden min-h-[300px]">
              <img
                src={neetcodeScreenshots[selectedImageIndex].src}
                alt={neetcodeScreenshots[selectedImageIndex].title}
                className="max-h-[72vh] max-w-full object-contain rounded-lg shadow-xl"
              />

              {/* Navigation Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-900/80 hover:bg-purple-600 text-white p-3 rounded-full transition-all border border-gray-700"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-900/80 hover:bg-purple-600 text-white p-3 rounded-full transition-all border border-gray-700"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
