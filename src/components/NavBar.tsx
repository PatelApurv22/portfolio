"use client"
import React, { useState, useEffect } from 'react';
import { Award, BriefcaseBusiness, ExternalLink, Home, Mail, Menu, Sparkles, UserRound, X } from 'lucide-react';
import { useTheme } from './theme-provider';

const resumeUrl = "https://drive.google.com/file/d/1KY5VMfRHEzbXxgEvgbGM85Rgl20zzv3Y/view?usp=drive_link";
const sectionIds = ['home', 'about', 'projects', 'skills', 'achievements', 'contact'];

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');
  const { theme, setTheme } = useTheme();
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const syncActiveLink = () => {
      setActiveLink(window.location.hash || '#home');
    };

    syncActiveLink();
    window.addEventListener('hashchange', syncActiveLink);

    return () => window.removeEventListener('hashchange', syncActiveLink);
  }, []);

  useEffect(() => {
    const syncActiveSection = () => {
      const viewportTop = 80;
      const reachedPageBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

      if (reachedPageBottom) {
        setActiveLink('#contact');
        return;
      }

      let activeSection = 'home';
      let largestVisibleHeight = 0;

      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId);
        if (!section) {
          continue;
        }

        const bounds = section.getBoundingClientRect();
        const visibleHeight = Math.max(
          0,
          Math.min(bounds.bottom, window.innerHeight) -
            Math.max(bounds.top, viewportTop),
        );

        if (visibleHeight > largestVisibleHeight) {
          largestVisibleHeight = visibleHeight;
          activeSection = sectionId;
        }
      }

      setActiveLink(`#${activeSection}`);
    };

    syncActiveSection();
    window.addEventListener('scroll', syncActiveSection, { passive: true });

    return () => window.removeEventListener('scroll', syncActiveSection);
  }, []);

  // Close menu when screen size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { href: "#home", text: "Home", icon: Home },
    { href: "#about", text: "About Me", icon: UserRound },
    { href: "#projects", text: "Projects", icon: BriefcaseBusiness },
    { href: "#skills", text: "Skills", icon: Sparkles },
    { href: "#achievements", text: "Highlights", icon: Award },
    { href: "#contact", text: "Contact", icon: Mail },
  ];

  return (
    <header className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg' 
        : 'bg-white/90 dark:bg-gray-900/80 backdrop-blur-md'
    } border-b border-gray-200 dark:border-gray-800`}>
      <div className="w-full px-2 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex h-14 sm:h-16 lg:h-20 items-center justify-between">
          {/* Logo and Name */}
          <div className="flex items-center">
            <a href="#home" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-gray-900 dark:bg-gray-50 rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                <span className="text-white dark:text-gray-900 font-bold text-base sm:text-lg lg:text-xl">AP</span>
              </div>
              <span className="font-bold text-lg sm:text-xl lg:text-2xl text-gray-900 dark:text-gray-100">Apurv Patel</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-3 lg:gap-4 rounded-full border border-gray-200 bg-white/70 p-1.5 shadow-sm backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/70">
            {navLinks.map((link) => (
              <a
                key={link.text}
                href={link.href}
                aria-current={activeLink === link.href ? 'page' : undefined}
                onClick={() => setActiveLink(link.href)}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm lg:text-base font-semibold transition-all duration-200 ${
                  activeLink === link.href
                    ? 'bg-gray-900 text-white shadow-lg shadow-gray-900/20 dark:bg-gray-100 dark:text-gray-900'
                    : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white'
                }`}
              >
                <link.icon className="h-4 w-4" />
                {link.text}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-1.5 lg:space-x-2 px-3 lg:px-4 py-1.5 lg:py-2 text-xs lg:text-sm font-medium text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-all hover:shadow-md"
            >
              <span>Resume</span>
              <ExternalLink className="h-3 w-3 lg:h-4 lg:w-4" />
            </a>
            <button
                onClick={() =>
                    setTheme(theme === "dark" ? "light" : "dark")
                }
                className="px-4 lg:px-6 py-1.5 lg:py-2 text-xs lg:text-sm font-medium bg-gray-900 text-white dark:bg-gray-50 dark:text-gray-900 rounded-md hover:bg-gray-800 dark:hover:bg-gray-200 transition-all shadow-sm hover:shadow-lg"
                >
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.text}
                  href={link.href}
                  onClick={() => {
                    setActiveLink(link.href);
                    setIsMenuOpen(false);
                  }}
                  className={`flex items-center gap-2 rounded-full px-3 py-2.5 text-sm sm:text-base font-semibold transition-all ${
                    activeLink === link.href
                      ? 'bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900'
                      : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                  }`}
                >
                  <link.icon className="h-4 w-4" />
                  {link.text}
                </a>
              ))}
              <div className="pt-4 mt-2 border-t border-gray-200 dark:border-gray-700 flex flex-col space-y-2">
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center space-x-2 px-3 py-2.5 text-sm font-medium border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <span>Download Resume</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
                <button
                    onClick={() =>
                        setTheme(theme === "dark" ? "light" : "dark")
                    }
                    className="px-4 lg:px-6 py-1.5 lg:py-2 text-xs lg:text-sm font-medium bg-gray-900 text-white dark:bg-gray-50 dark:text-gray-900 rounded-md hover:bg-gray-800 dark:hover:bg-gray-200 transition-all shadow-sm hover:shadow-lg"
                    >
                        {theme === "dark" ? "Light Mode" : "Dark Mode"}
                    </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
