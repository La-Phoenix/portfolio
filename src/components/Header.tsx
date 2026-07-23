import { useTheme } from '../context/ThemeContext';
import { Moon, Sun, Menu, X, Terminal } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'dsa', label: 'DSA' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 dark:bg-[#0b0f17]/80 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => scrollToSection('home')}
          >
            <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-700 group-hover:border-indigo-500 transition-colors">
              <Terminal size={18} className="text-indigo-600 dark:text-indigo-400" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-sm font-bold text-slate-900 dark:text-slate-100 tracking-tight flex items-center gap-1.5">
                samuel.okundalaiye
                <span className="text-indigo-600 dark:text-indigo-400 font-normal">()</span>
              </span>
              <span className="font-mono text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Software Engineer
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="font-mono text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <span className="text-slate-400 dark:text-slate-500 mr-0.5">#</span>
                {item.label}
              </button>
            ))}

            <div className="h-4 w-px bg-slate-200 dark:bg-slate-800 mx-2" />

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200/60 dark:border-slate-700/60"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={16} className="text-amber-400" /> : <Moon size={16} />}
            </button>
          </nav>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
            >
              {isDark ? <Sun size={16} className="text-amber-400" /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <nav className="md:hidden py-3 border-t border-slate-200 dark:border-slate-800 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-2 font-mono text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
              >
                <span className="text-slate-400 dark:text-slate-500 mr-1.5">#</span>
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
