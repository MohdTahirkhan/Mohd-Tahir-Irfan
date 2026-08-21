import React from 'react';
import {
  GraduationCap,
  Linkedin,
  Github,
  Mail,
  ArrowUp,
  Building2,
  Heart,
} from 'lucide-react';
import { PERSONAL_INFO, NAV_ITEMS } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => {
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="main-footer" className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80">
          {/* Col 1: Bio / Institution */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">
                <GraduationCap className="w-4 h-4" />
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed font-normal">
              Assistant Professor of Computer Science & Engineering at JECRC University, Jaipur. AI, ML, IoT, Blockchain & Theory of Computation researcher.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
              <Building2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
              <span>JECRC University, Jaipur, Rajasthan, India</span>
            </div>
          </div>

          {/* Col 2: Quick Jump Navigation */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="hover:text-blue-400 text-slate-400 transition-colors py-0.5"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Social & Top Action */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                Connect Directly
              </h4>
              <div className="flex items-center gap-2">
                <a
                  id="footer-social-linkedin"
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-blue-600 hover:text-white flex items-center justify-center text-slate-300 transition-colors border border-slate-700/50"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>

                <a
                  id="footer-social-github"
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 hover:text-white flex items-center justify-center text-slate-300 transition-colors border border-slate-700/50"
                  aria-label="GitHub"
                >
                  <Github className="w-3.5 h-3.5" />
                </a>

                <a
                  id="footer-social-email"
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-blue-600 hover:text-white flex items-center justify-center text-slate-300 transition-colors border border-slate-700/50"
                  aria-label="Email"
                >
                  <Mail className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="pt-4 md:pt-0">
              <button
                id="footer-back-to-top-btn"
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-blue-400 transition-colors"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p id="footer-copyright-text">
            © 2026 Mohd Tahir Irfan. All rights reserved.
          </p>
          <p className="text-slate-500">
            Assistant Professor • Department of Computer Science & Engineering
          </p>
        </div>
      </div>
    </footer>
  );
};
