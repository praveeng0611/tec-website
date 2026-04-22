'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Mail, Sun, Moon, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Sustainability', href: '/sustainability' },
  { label: 'Find Us', href: '/find-us' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('/');

  useEffect(() => {
    const saved = localStorage.getItem('tec-theme');
    if (saved === 'dark') {
      document.documentElement.classList.add('dark');
      setDark(true);
    }
    setActive(window.location.pathname);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('tec-theme', next ? 'dark' : 'light');
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-tec-navy/95 backdrop-blur-md shadow-md'
          : 'bg-white dark:bg-tec-navy'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 4C18 4 8 8 6 18C4.5 25 9 30 15 31C21 32 27 28 28 22C29 16 25 11 20 11C16 11 13 14 14 17C15 20 18 20 19 18" stroke="#29ABE2" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                <circle cx="19.5" cy="17.5" r="2" fill="#29ABE2"/>
              </svg>
              <div className="leading-tight">
                <div className="font-900 text-sm tracking-wider text-tec-navy dark:text-white font-black uppercase">TADPOLE</div>
                <div className="font-400 text-[9px] tracking-[0.2em] text-tec-blue dark:text-tec-cyan uppercase">ENGINEERING</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-500 rounded transition-colors duration-200 ${
                    active === link.href
                      ? 'text-tec-cyan border-b-2 border-tec-cyan font-600'
                      : 'text-tec-navy dark:text-gray-300 hover:text-tec-cyan dark:hover:text-tec-cyan'
                  }`}
                  onClick={() => setActive(link.href)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right CTAs */}
            <div className="hidden md:flex items-center gap-2">
              <a href="tel:+919999999999" className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 text-sm text-tec-navy dark:text-gray-300 hover:border-tec-cyan hover:text-tec-cyan transition-all duration-200">
                <Phone className="w-3.5 h-3.5" /> Call
              </a>
              <a href="mailto:info@tadpoleengineering.com" className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 text-sm text-tec-navy dark:text-gray-300 hover:border-tec-cyan hover:text-tec-cyan transition-all duration-200">
                <Mail className="w-3.5 h-3.5" /> Mail
              </a>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 text-tec-navy dark:text-gray-300 hover:border-tec-cyan hover:text-tec-cyan transition-all duration-200"
                aria-label="Toggle theme"
              >
                {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 text-tec-navy dark:text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white dark:bg-tec-navy border-t border-gray-100 dark:border-gray-800 px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-sm font-500 text-tec-navy dark:text-gray-300 hover:text-tec-cyan rounded"
                onClick={() => { setActive(link.href); setMobileOpen(false); }}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 pt-2 border-t border-gray-100 dark:border-gray-800 mt-2">
              <a href="tel:+919999999999" className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 text-sm text-tec-navy dark:text-gray-300">
                <Phone className="w-3.5 h-3.5" /> Call
              </a>
              <a href="mailto:info@tadpoleengineering.com" className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 text-sm text-tec-navy dark:text-gray-300">
                <Mail className="w-3.5 h-3.5" /> Mail
              </a>
              <button onClick={toggleTheme} className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 text-tec-navy dark:text-gray-300">
                {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
