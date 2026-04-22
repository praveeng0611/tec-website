'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Mail, Sun, Moon, Menu, X, Flame } from 'lucide-react';
import Image from 'next/image';

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
  const [fire, setFire] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('/');

  /* ── Bootstrap saved preferences ── */
  useEffect(() => {
    const savedTheme = localStorage.getItem('tec-theme');
    const savedColor = localStorage.getItem('tec-color');

    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setDark(true);
    }
    if (savedColor === 'fire') {
      document.documentElement.classList.add('fire');
      setFire(true);
    }
    setActive(window.location.pathname);
  }, []);

  /* ── Scroll shadow ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Dark / Light toggle ── */
  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('tec-theme', next ? 'dark' : 'light');
  };

  /* ── Blue / Fire palette toggle ── */
  const toggleFire = () => {
    const next = !fire;
    setFire(next);
    document.documentElement.classList.toggle('fire', next);
    localStorage.setItem('tec-color', next ? 'fire' : 'blue');
  };

  const logoSrc = fire ? '/logo-fire.svg' : '/logo-blue.svg';

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-tec-navy/95 backdrop-blur-md shadow-md'
          : 'bg-white dark:bg-tec-navy'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* ── Logo ── */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <Image
                src={logoSrc}
                alt="Tadpole Engineering"
                width={60}
                height={60}
                className="object-contain"
                priority
              />
              <div className="leading-tight">
                <div className="font-black text-base tracking-widest text-tec-navy dark:text-white uppercase">TADPOLE</div>
                <div className="text-[10px] tracking-[0.25em] text-tec-blue dark:text-tec-cyan uppercase font-semibold">ENGINEERING</div>
              </div>
            </Link>

            {/* ── Desktop Nav Links ── */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium rounded transition-colors duration-200 ${
                    active === link.href
                      ? 'text-tec-cyan border-b-2 border-tec-cyan font-semibold'
                      : 'text-tec-navy dark:text-gray-300 hover:text-tec-cyan dark:hover:text-tec-cyan'
                  }`}
                  onClick={() => setActive(link.href)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* ── Right CTAs ── */}
            <div className="hidden md:flex items-center gap-2">
              <a href="tel:+912012345678"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 text-sm text-tec-navy dark:text-gray-300 hover:border-tec-cyan hover:text-tec-cyan transition-all">
                <Phone className="w-3.5 h-3.5" /> Call
              </a>
              <a href="mailto:info@tadpoletec.com"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 text-sm text-tec-navy dark:text-gray-300 hover:border-tec-cyan hover:text-tec-cyan transition-all">
                <Mail className="w-3.5 h-3.5" /> Mail
              </a>

              {/* Dark/Light toggle */}
              <button
                onClick={toggleDark}
                className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 text-tec-navy dark:text-gray-300 hover:border-tec-cyan hover:text-tec-cyan transition-all"
                title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
                aria-label="Toggle dark mode"
              >
                {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              {/* Fire / Blue palette toggle */}
              <button
                onClick={toggleFire}
                className={`p-2 rounded-lg border transition-all ${
                  fire
                    ? 'border-orange-400 text-orange-500 bg-orange-50 dark:bg-orange-950/30'
                    : 'border-gray-200 dark:border-gray-700 text-tec-navy dark:text-gray-300 hover:border-tec-cyan hover:text-tec-cyan'
                }`}
                title={fire ? 'Switch to Blue theme' : 'Switch to Fire theme'}
                aria-label="Toggle color theme"
              >
                <Flame className="w-4 h-4" />
              </button>
            </div>

            {/* ── Mobile hamburger ── */}
            <button
              className="md:hidden p-2 text-tec-navy dark:text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* ── Mobile menu ── */}
        {mobileOpen && (
          <div className="md:hidden bg-white dark:bg-tec-navy border-t border-gray-100 dark:border-gray-800 px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-sm font-medium text-tec-navy dark:text-gray-300 hover:text-tec-cyan rounded"
                onClick={() => { setActive(link.href); setMobileOpen(false); }}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 pt-2 border-t border-gray-100 dark:border-gray-800 mt-2">
              <a href="tel:+912012345678" className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 text-sm text-tec-navy dark:text-gray-300">
                <Phone className="w-3.5 h-3.5" /> Call
              </a>
              <a href="mailto:info@tadpoletec.com" className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 text-sm text-tec-navy dark:text-gray-300">
                <Mail className="w-3.5 h-3.5" /> Mail
              </a>
              <button onClick={toggleDark} className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 text-tec-navy dark:text-gray-300">
                {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              <button
                onClick={toggleFire}
                className={`p-2 rounded-lg border ${fire ? 'border-orange-400 text-orange-500' : 'border-gray-200 dark:border-gray-700 text-tec-navy dark:text-gray-300'}`}
              >
                <Flame className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
