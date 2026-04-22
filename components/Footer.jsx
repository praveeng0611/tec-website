'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const support = ['Ticket support', 'Help Center', 'FAQ', 'Contact Us', 'Community'];
const company = ['About Us', 'Leadership', 'Career', 'News & Article', 'Legal Notice'];

export default function Footer() {
  const [fire, setFire] = useState(false);

  useEffect(() => {
    const check = () => setFire(document.documentElement.classList.contains('fire'));
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return (
    <footer className="bg-tec-light dark:bg-tec-navy border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Image src={fire ? '/logo-fire.svg' : '/logo-blue.svg'} alt="Tadpole Engineering" width={42} height={42} className="object-contain" />
              <div>
                <div className="font-black text-sm tracking-wider text-tec-navy dark:text-white uppercase">TADPOLE</div>
                <div className="text-[9px] tracking-[0.2em] text-tec-blue dark:text-tec-cyan uppercase">ENGINEERING</div>
              </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">Make way for your leap</p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-8 h-8 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:border-tec-cyan hover:text-tec-cyan transition-all">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:border-tec-cyan hover:text-tec-cyan transition-all">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:border-tec-cyan hover:text-tec-cyan transition-all">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:border-tec-cyan hover:text-tec-cyan transition-all">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75,15.02 15.5,12 9.75,8.98 9.75,15.02" fill="white"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-tec-navy dark:text-white mb-4 text-sm">Support</h4>
            <ul className="space-y-2.5">
              {support.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-tec-cyan flex-shrink-0" />
                  <Link href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-tec-cyan transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-tec-navy dark:text-white mb-4 text-sm">Company</h4>
            <ul className="space-y-2.5">
              {company.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-tec-cyan flex-shrink-0" />
                  <Link href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-tec-cyan transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-tec-navy dark:text-white mb-3 text-sm">Newsletter</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Subscribe to our Newsletter & Event right now to be updated.</p>
            <div className="flex gap-2 mb-3">
              <div className="flex-1 flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2.5">
                <svg className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                <input type="text" placeholder="Name" className="bg-transparent text-sm text-gray-700 dark:text-gray-300 placeholder-gray-400 outline-none w-full" />
              </div>
              <div className="flex-1 flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2.5">
                <svg className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <input type="email" placeholder="Email" className="bg-transparent text-sm text-gray-700 dark:text-gray-300 placeholder-gray-400 outline-none w-full" />
              </div>
            </div>
            <button className="w-full tec-btn-primary justify-center text-xs py-3 tracking-widest rounded-full">
              SIGN UP NEWSLETTER
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7v10"/></svg>
            </button>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400">Copyright &copy; {new Date().getFullYear()} TEC, All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-xs text-gray-400 hover:text-tec-cyan transition-colors">Terms of use</Link>
            <span className="text-gray-300 dark:text-gray-700">|</span>
            <Link href="#" className="text-xs text-gray-400 hover:text-tec-cyan transition-colors">Privacy Policy</Link>
            <span className="text-gray-300 dark:text-gray-700">|</span>
            <Link href="#" className="text-xs text-gray-400 hover:text-tec-cyan transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
