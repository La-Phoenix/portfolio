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
      <div className="card rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-gray-100 dark:border-gray-800 flex flex-col h-full bg-white dark:bg-gray-900">
        {/* Image Frame Container */}
        <div className="p-3 bg-gray-50 dark:bg-gray-800/50">
          <div
            onClick={() => hasRealImage && openModal(currentImageIndex)}
            className={`relative h-56 w-full rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 ${
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
                {/* Hover overlay prompt */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-medium text-sm">
                  <Maximize2 size={18} />
                  <span>Click to expand</span>
                </div>
              </div>
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-purple-500 via-indigo-600 to-blue-600 flex items-center justify-center rounded-xl">
                <div className="text-center text-white">
                  <p className="text-sm font-semibold">{title}</p>
                  <p className="text-xs opacity-80">Image {currentImageIndex + 1} of {images.length}</p>
                </div>
              </div>
            )}

            {/* Slider Arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/85 text-white p-1.5 rounded-full transition-all opacity-0 group-hover:opacity-100 z-10"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/85 text-white p-1.5 rounded-full transition-all opacity-0 group-hover:opacity-100 z-10"
                  aria-label="Next image"
                >
                  <ChevronRight size={18} />
                </button>
              </>
            )}

            {/* Slide Indicators */}
            {images.length > 1 && (
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1.5 z-10">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(idx);
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentImageIndex ? 'bg-white w-5' : 'bg-white/50 w-1.5'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 flex flex-col flex-1 justify-between">
          <div>
            {company && (
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-100 dark:border-purple-800/40 mb-2.5">
                <Building2 size={13} className="text-purple-600 dark:text-purple-400" />
                <span>{company}</span>
              </div>
            )}
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
              {description}
            </p>

            {/* Technologies Pills */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs font-medium bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 rounded-lg border border-purple-100 dark:border-purple-800/40"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-2 pt-4 border-t border-gray-100 dark:border-gray-800">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-xl transition-all shadow-md hover:shadow-lg text-sm font-semibold"
              >
                <ExternalLink size={16} />
                Visit Site
              </a>
            )}
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-xl transition-all text-sm font-semibold"
              >
                <Github size={16} />
                Code
              </a>
            )}
            {!link && !githubLink && (
              <div className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 bg-gray-100 dark:bg-gray-800/80 text-gray-600 dark:text-gray-400 rounded-xl text-xs font-semibold border border-gray-200 dark:border-gray-700/60 shadow-inner">
                <Lock size={13} className="text-amber-500 flex-shrink-0" />
                <span>Internal Enterprise System (NDA)</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Image Lightbox Modal */}
      {isModalOpen && (
        <div
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-800 flex flex-col max-h-[90vh]"
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-800 bg-gray-900/90 text-white">
              <div>
                <h4 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>{title}</span>
                  {company && (
                    <span className="text-xs font-normal px-2 py-0.5 rounded bg-purple-900/80 text-purple-200 border border-purple-700/50">
                      {company}
                    </span>
                  )}
                </h4>
                <p className="text-xs text-gray-400">
                  Image {currentImageIndex + 1} of {images.length}
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="relative flex-1 bg-black flex items-center justify-center p-4 overflow-hidden min-h-[300px]">
              {hasRealImage ? (
                <img
                  src={images[currentImageIndex]}
                  alt={`${title} modal view ${currentImageIndex + 1}`}
                  className="max-h-[72vh] max-w-full object-contain rounded-lg shadow-xl"
                />
              ) : (
                <div className="text-center text-gray-400">No image preview available</div>
              )}

              {/* Modal Navigation Arrows */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-900/80 hover:bg-purple-600 text-white p-3 rounded-full transition-all shadow-lg border border-gray-700"
                    aria-label="Previous screenshot"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-900/80 hover:bg-purple-600 text-white p-3 rounded-full transition-all shadow-lg border border-gray-700"
                    aria-label="Next screenshot"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>

            {/* Modal Footer thumbnail strip */}
            {images.length > 1 && (
              <div className="flex justify-center gap-3 p-4 bg-gray-900 border-t border-gray-800">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                      idx === currentImageIndex
                        ? 'border-purple-500 scale-105 shadow-md'
                        : 'border-gray-700 opacity-60 hover:opacity-100'
                    }`}
                  >
                    {!img.startsWith('placeholder') ? (
                      <img
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-purple-700 flex items-center justify-center text-[10px] text-white font-bold">
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
