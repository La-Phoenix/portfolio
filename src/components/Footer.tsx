import { Mail, Linkedin, Github, FileText, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h4 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Samuel
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed font-medium">
              Full Stack Developer passionate about building scalable, elegant web solutions with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#home" className="hover:text-purple-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-purple-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-purple-400 transition-colors">
                  Education
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-purple-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-purple-400 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#dsa" className="hover:text-purple-400 transition-colors">
                  DSA &amp; Problem Solving
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Web Development</li>
              <li>Full Stack Solutions</li>
              <li>API Development</li>
              <li>Database Design</li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex flex-wrap gap-3">
              {/* LinkedIn - Commented out for now
              <a
                href="https://linkedin.com/in/samuel-okundalaiye"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-purple-600 rounded-lg transition-colors"
                title="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              */}
              <a
                href="https://github.com/samuelokundalaiye"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                title="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:samuelokundalaiye@gmail.com"
                className="p-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors"
                title="Email Me"
              >
                <Mail size={20} />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Samuel_Okundalaiye_Resume.pdf"
                className="p-2 bg-gray-800 hover:bg-green-600 rounded-lg transition-colors"
                title="Download CV"
              >
                <FileText size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm mb-4 md:mb-0 font-medium">
            © {new Date().getFullYear()} Samuel Okundalaiye. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="p-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 rounded-full transition-all shadow-lg hover:shadow-xl"
            title="Back to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
