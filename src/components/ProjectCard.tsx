import { Building2, ChevronLeft, ChevronRight, ExternalLink, Github, Lock, Maximize2, X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface ProjectCardProps {
  title: string;
  company?: string;
  description: string;
  technologies: string[];
  images: string[];
  link?: string;
  githubLink?: string;
}

export function ProjectCard({
  title,
  company,
  description,
  technologies,
  images,
  link,
  githubLink,
}: ProjectCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  const hasRealImage = images[currentImageIndex] && !images[currentImageIndex].startsWith('placeholder');

  return (
    <>
      <div className="dev-card overflow-hidden flex flex-col h-full text-left group">
        
        {/* Image Preview Container */}
        <div className="p-3 bg-slate-50 dark:bg-[#151b28]/80 border-b border-slate-200/80 dark:border-slate-800">
          <div
            onClick={() => hasRealImage && openModal(currentImageIndex)}
            className={`relative h-56 w-full rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-800 ${
              hasRealImage ? 'cursor-pointer' : ''
            }`}
          >
            {hasRealImage ? (
              <div className="relative w-full h-full group/img">
                <img
                  src={images[currentImageIndex]}
                  alt={`${title} screenshot ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-mono text-xs font-semibold">
                  <Maximize2 size={16} />
                  <span>Click to Expand</span>
                </div>
              </div>
            ) : (
              <div className="w-full h-full bg-slate-900 flex items-center justify-center rounded-xl p-4 text-center">
                <p className="font-mono text-xs text-slate-300 font-semibold">{title}</p>
              </div>
            )}

            {/* Slider Arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-slate-900/80 hover:bg-slate-900 text-white p-1.5 rounded-full transition-opacity opacity-0 group-hover:opacity-100 z-10"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-slate-900/80 hover:bg-slate-900 text-white p-1.5 rounded-full transition-opacity opacity-0 group-hover:opacity-100 z-10"
                  aria-label="Next image"
                >
                  <ChevronRight size={16} />
                </button>
              </>
            )}

            {/* Dots */}
            {images.length > 1 && (
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1 z-10">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(idx);
                    }}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === currentImageIndex ? 'bg-white w-4' : 'bg-white/50 w-1.5'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 flex flex-col flex-1 justify-between">
          <div>
            {company && (
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md font-mono text-[11px] font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800/40 mb-3">
                <Building2 size={12} />
                <span>{company}</span>
              </div>
            )}

            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 tracking-tight">
              {title}
            </h3>

            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
              {description}
            </p>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {technologies.map((tech, idx) => (
                <span key={idx} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex gap-2 pt-4 border-t border-slate-200/80 dark:border-slate-800">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-white text-white dark:text-slate-900 rounded-lg text-xs font-semibold transition-colors"
              >
                <ExternalLink size={14} />
                <span>Visit Application</span>
              </a>
            )}

            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-mono font-semibold transition-colors"
              >
                <Github size={14} />
                <span>View Source</span>
              </a>
            )}

            {!link && !githubLink && (
              <div className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 rounded-lg font-mono text-[11px] font-medium border border-slate-200 dark:border-slate-700/60">
                <Lock size={12} className="text-amber-500 shrink-0" />
                <span>Internal Enterprise System (NDA)</span>
              </div>
            )}
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {isModalOpen && (
        <div
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col max-h-[90vh]"
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center px-6 py-3.5 border-b border-slate-800 bg-slate-900 text-white">
              <div>
                <h4 className="text-base font-bold text-slate-100 flex items-center gap-2">
                  <span>{title}</span>
                  {company && (
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-indigo-900/60 text-indigo-300 border border-indigo-700/50">
                      {company}
                    </span>
                  )}
                </h4>
                <p className="font-mono text-xs text-slate-400">
                  Image {currentImageIndex + 1} of {images.length}
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Image View */}
            <div className="relative flex-1 bg-black flex items-center justify-center p-4 overflow-hidden min-h-[300px]">
              {hasRealImage ? (
                <img
                  src={images[currentImageIndex]}
                  alt={`${title} view ${currentImageIndex + 1}`}
                  className="max-h-[72vh] max-w-full object-contain rounded-lg"
                />
              ) : (
                <div className="text-center text-slate-400 font-mono text-xs">No image preview</div>
              )}

              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-slate-900/80 hover:bg-slate-800 text-white p-2.5 rounded-full transition-colors border border-slate-700"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-slate-900/80 hover:bg-slate-800 text-white p-2.5 rounded-full transition-colors border border-slate-700"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Strip */}
            {images.length > 1 && (
              <div className="flex justify-center gap-2 p-3 bg-slate-900 border-t border-slate-800">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-14 h-10 rounded-lg overflow-hidden border transition-all ${
                      idx === currentImageIndex
                        ? 'border-indigo-500 scale-105'
                        : 'border-slate-700 opacity-50 hover:opacity-100'
                    }`}
                  >
                    {!img.startsWith('placeholder') ? (
                      <img src={img} alt={`Thumb ${idx + 1}`} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-slate-800 text-[10px] text-white flex items-center justify-center font-mono">
                        #{idx + 1}
                      </div>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
