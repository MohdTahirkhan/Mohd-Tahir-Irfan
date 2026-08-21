/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Expertise } from './components/Expertise';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Publications } from './components/Publications';
import { Courses } from './components/Courses';
import { Achievements } from './components/Achievements';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ArrowUp } from 'lucide-react';
import { NAV_ITEMS } from './data/portfolioData';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle floating back-to-top button
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Calculate which section is currently closest to view
      const sectionIds = NAV_ITEMS.map((item) => item.id);
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sectionIds[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-blue-600 selection:text-white antialiased">
      {/* Fixed Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Area with Seamless Section Flow */}
      <main id="main-content" className="flex-1">
        {/* 1. Hero / Home Section */}
        <Hero />

        {/* 2. About Me Section */}
        <About />

        {/* 3. Areas of Expertise */}
        <Expertise />

        {/* 4. Professional Experience */}
        <Experience />

        {/* 5. Education */}
        <Education />

        {/* 6. Publications (Peer-Reviewed) */}
        <Publications />

        {/* 7. Courses Taught */}
        <Courses />

        {/* 8. Achievements & Recognition (Patents, Projects, FDPs & Certifications) */}
        <Achievements />

        {/* 9. Technical Skills */}
        <Skills />

        {/* 10. Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <button
          id="floating-scroll-to-top-btn"
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll back to top of page"
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-slate-900 hover:bg-blue-600 text-white shadow-md hover:shadow-lg border border-slate-700/50 hover:scale-105 active:scale-95 transition-all duration-200"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
