'use client';
import { useState } from 'react';

const locations = [
  {
    id: 'pune',
    city: 'Pune',
    country: 'India',
    type: 'Headquarters & Manufacturing',
    address: 'Plot No. 12, Industrial Area, Chakan, Pune – 410501, Maharashtra, India',
    phone: '+91 20 1234 5678',
    email: 'pune@tadpoletec.com',
    hours: 'Mon – Sat: 8:00 AM – 6:00 PM IST',
    mapQuery: 'Chakan Industrial Area, Pune, Maharashtra, India',
  },
  {
    id: 'chennai',
    city: 'Chennai',
    country: 'India',
    type: 'Manufacturing Plant',
    address: 'SIPCOT Industrial Complex, Gummidipoondi, Chennai – 601201, Tamil Nadu, India',
    phone: '+91 44 2345 6789',
    email: 'chennai@tadpoletec.com',
    hours: 'Mon – Sat: 8:00 AM – 6:00 PM IST',
    mapQuery: 'SIPCOT Gummidipoondi, Chennai, Tamil Nadu, India',
  },
  {
    id: 'global',
    city: 'Global Offices',
    country: 'Worldwide',
    type: 'Sales & Liaison',
    address: 'TEC serves clients across 23+ countries. Regional liaison offices available in Europe, South-East Asia and the Middle East.',
    phone: '+91 98765 43210',
    email: 'global@tadpoletec.com',
    hours: 'By appointment',
    mapQuery: 'India',
  },
];

export default function FindUsPage() {
  const [active, setActive] = useState('pune');
  const loc = locations.find((l) => l.id === active);

  return (
    <div className="pt-16 bg-white dark:bg-tec-dark-bg">

      {/* ── PAGE HERO ── */}
      <section className="relative bg-tec-navy dark:bg-tec-dark-bg py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full border border-tec-cyan" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="tec-tag mb-4 inline-flex">Find Us</div>
          <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-6">
            Where precision<br />
            <span className="text-tec-cyan">meets the world.</span>
          </h1>
          <p className="text-blue-200/70 text-base max-w-lg leading-relaxed">
            TEC operates manufacturing plants and sales offices across India, with global client partnerships spanning 23+ countries.
          </p>
        </div>
      </section>

      {/* ── LOCATION SELECTOR + MAP ── */}
      <section className="py-20 bg-tec-light dark:bg-tec-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Sidebar */}
            <div className="space-y-3">
              {locations.map((l) => (
                <button
                  key={l.id}
                  onClick={() => setActive(l.id)}
                  className={`w-full text-left rounded-2xl p-5 border transition-all ${
                    active === l.id
                      ? 'bg-tec-blue border-tec-cyan text-white'
                      : 'bg-white dark:bg-tec-dark-bg border-tec-blue/10 dark:border-tec-cyan/10 text-tec-navy dark:text-white hover:border-tec-cyan/40'
                  }`}
                >
                  <div className={`text-xs font-700 tracking-widest uppercase mb-1 ${active === l.id ? 'text-tec-cyan' : 'text-tec-blue dark:text-tec-cyan'}`}>
                    {l.type}
                  </div>
                  <div className="font-800 text-base">{l.city}</div>
                  <div className={`text-xs mt-0.5 ${active === l.id ? 'text-blue-200/70' : 'text-gray-400'}`}>{l.country}</div>
                </button>
              ))}
            </div>

            {/* Map + details */}
            <div className="lg:col-span-2 bg-white dark:bg-tec-dark-bg rounded-2xl overflow-hidden border border-tec-blue/10 dark:border-tec-cyan/10 shadow-sm">
              {/* Embedded map */}
              <div className="h-64 bg-tec-blue/10 dark:bg-tec-dark-card relative overflow-hidden">
                <iframe
                  key={loc.id}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(loc.mapQuery)}&output=embed`}
                />
              </div>

              {/* Address details */}
              <div className="p-8">
                <div className="text-tec-cyan text-xs font-700 tracking-widest uppercase mb-1">{loc.type}</div>
                <h2 className="text-2xl font-800 text-tec-navy dark:text-white mb-6">{loc.city}, {loc.country}</h2>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-tec-light dark:bg-tec-dark-card flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-tec-cyan" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{loc.address}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-tec-light dark:bg-tec-dark-card flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-tec-cyan" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                    </div>
                    <a href={`tel:${loc.phone}`} className="text-gray-500 dark:text-gray-400 text-sm hover:text-tec-cyan transition-colors">{loc.phone}</a>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-tec-light dark:bg-tec-dark-card flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-tec-cyan" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                    </div>
                    <a href={`mailto:${loc.email}`} className="text-gray-500 dark:text-gray-400 text-sm hover:text-tec-cyan transition-colors">{loc.email}</a>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-tec-light dark:bg-tec-dark-card flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-tec-cyan" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                      </svg>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">{loc.hours}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GLOBAL PRESENCE ── */}
      <section className="py-16 bg-tec-blue dark:bg-[#0F2547] text-center">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-tec-cyan text-xs font-700 tracking-[0.15em] uppercase mb-3">Global Footprint</div>
          <h2 className="text-3xl font-900 text-white mb-5">Trusted by companies in 23+ countries.</h2>
          <p className="text-blue-200/70 text-sm leading-relaxed mb-10">
            From Pune to Paris, our components are found in vehicles manufactured by leading OEMs across Asia, Europe, and the Americas. Wherever precision is required, TEC delivers.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {['India', 'Germany', 'Japan', 'USA', 'South Korea', 'Thailand', 'UAE', 'UK', 'France', 'Mexico'].map((c) => (
              <span key={c} className="bg-white/10 border border-white/15 rounded-full px-4 py-1.5 text-white/80 text-xs">{c}</span>
            ))}
            <span className="bg-white/10 border border-white/15 rounded-full px-4 py-1.5 text-tec-cyan text-xs">+13 more</span>
          </div>
        </div>
      </section>

    </div>
  );
}
