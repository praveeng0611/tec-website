import Link from 'next/link';

const milestones = [
  { year: '2017', title: 'Founded', desc: 'Tadpole Engineering Consultancy established with a vision to transform automotive manufacturing.' },
  { year: '2018', title: 'First Major OEM Contract', desc: 'Secured first Tier-1 automotive supplier contract, setting the standard for quality delivery.' },
  { year: '2020', title: 'Hot Stamping Technology', desc: 'Invested in cutting-edge hot stamping presses for ultra-high-strength steel components up to 1200 MPa.' },
  { year: '2022', title: 'Global Expansion', desc: 'Extended partnerships to 23+ international companies across automotive, aerospace and heavy fabrication sectors.' },
  { year: '2024', title: '5,000+ Projects', desc: 'Crossed 5,000 successful project deliveries with zero quality recalls across all major OEM clients.' },
];

const values = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Quality First',
    desc: 'Every component undergoes rigorous quality assurance before leaving our facilities. No compromise, ever.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Innovation',
    desc: 'Continuously investing in advanced manufacturing technologies to stay ahead of industry demands.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'People-Centric',
    desc: 'Our 1,000+ expert engineers are the backbone of everything we deliver. Great people make great products.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    title: 'Global Standards',
    desc: 'Adherence to international quality management standards ensuring consistent delivery across all geographies.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Sustainability',
    desc: 'Environmentally responsible practices embedded in every process — from material selection to waste management.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: 'Transparency',
    desc: 'Open and honest communication with every client, from project kick-off through final delivery.',
  },
];

const industries = [
  { label: 'Automotive', icon: '🚗' },
  { label: 'Aerospace', icon: '✈️' },
  { label: 'Locomotive', icon: '🚂' },
  { label: 'Heavy Fabrication', icon: '⚙️' },
];

export default function AboutPage() {
  return (
    <div className="pt-16 bg-white dark:bg-tec-dark-bg">

      {/* ── PAGE HERO ── */}
      <section className="relative bg-tec-navy dark:bg-tec-dark-bg py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full border border-tec-cyan" />
          <div className="absolute bottom-0 right-20 w-48 h-48 rounded-full border border-tec-cyan" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="tec-tag mb-4 inline-flex">About TEC</div>
          <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-6">
            Engineering Excellence,<br />
            <span className="text-tec-cyan">Delivered Globally.</span>
          </h1>
          <p className="text-blue-200/70 text-base max-w-xl leading-relaxed">
            Tadpole Engineering Consultancy (TEC) is a global supplier of high-precision automobile components — built on innovation, powered by expertise.
          </p>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="py-20 bg-white dark:bg-tec-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="tec-tag mb-4">Our Story</div>
              <h2 className="text-3xl lg:text-4xl font-800 text-tec-navy dark:text-white mb-6 leading-snug">
                A decade of precision manufacturing and global partnerships.
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
                Founded in 2017, Tadpole Engineering Consultancy was born from a simple belief: that manufacturing excellence comes from combining advanced technology with deep engineering expertise.
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
                Our primary focus is the Automotive Industry, where we stay ahead of daily transformations and market trends. We deliver everything from sheet metal stamping tools and hot stamping panels to complex welded assemblies and precision-coated components.
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                Our expertise also extends to Aerospace, Locomotive and Heavy Fabrication (Yellow Goods), building cost-effective solutions at global standards to ensure excellence across every sector we serve.
              </p>
            </div>

            {/* Stats panel */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: '5,000+', label: 'Projects Delivered' },
                { num: '1,000+', label: 'Expert Engineers' },
                { num: '23+', label: 'Global Partners' },
                { num: '7+', label: 'Awards Won' },
              ].map((s) => (
                <div key={s.label} className="bg-tec-light dark:bg-tec-dark-card rounded-2xl p-6 text-center border border-tec-blue/10 dark:border-tec-cyan/10">
                  <div className="text-3xl font-900 text-tec-cyan mb-1">{s.num}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="py-16 bg-tec-light dark:bg-tec-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="tec-tag mb-4 inline-flex">Industries We Serve</div>
          <h2 className="text-3xl font-800 text-tec-navy dark:text-white mb-10">Built for the sectors that move the world.</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {industries.map((ind) => (
              <div key={ind.label} className="bg-white dark:bg-tec-dark-bg rounded-2xl p-8 border border-tec-blue/10 dark:border-tec-cyan/10 hover:border-tec-cyan/50 transition-all group">
                <div className="text-4xl mb-3">{ind.icon}</div>
                <div className="font-700 text-tec-navy dark:text-white text-sm group-hover:text-tec-cyan transition-colors">{ind.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="py-20 bg-white dark:bg-tec-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="tec-tag mb-4 inline-flex">Our Values</div>
            <h2 className="text-3xl lg:text-4xl font-800 text-tec-navy dark:text-white">What drives every decision we make.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v) => (
              <div key={v.title} className="bg-tec-light dark:bg-tec-dark-card rounded-2xl p-7 border border-tec-blue/10 dark:border-tec-cyan/10 hover:border-tec-cyan/40 transition-all">
                <div className="w-11 h-11 rounded-full bg-tec-cyan/10 flex items-center justify-center text-tec-cyan mb-4">
                  {v.icon}
                </div>
                <h3 className="font-700 text-tec-navy dark:text-white text-base mb-2">{v.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="py-20 bg-tec-blue dark:bg-[#0F2547]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-tec-cyan text-xs font-700 tracking-[0.15em] uppercase mb-3">Our Journey</div>
            <h2 className="text-3xl lg:text-4xl font-900 text-white">Milestones that define us.</h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-tec-cyan/20 md:-translate-x-px" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div key={m.year} className={`relative flex gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-tec-cyan md:-translate-x-1.5 mt-1.5" />
                  <div className="ml-14 md:ml-0 md:w-1/2 md:pr-10">
                    {i % 2 === 0 ? (
                      <div className="bg-white/10 rounded-2xl p-5 border border-white/10">
                        <div className="text-tec-cyan font-800 text-sm mb-1">{m.year}</div>
                        <div className="text-white font-700 text-base mb-2">{m.title}</div>
                        <p className="text-blue-200/70 text-xs leading-relaxed">{m.desc}</p>
                      </div>
                    ) : <div className="hidden md:block" />}
                  </div>
                  <div className="hidden md:block md:w-1/2 md:pl-10">
                    {i % 2 !== 0 ? (
                      <div className="bg-white/10 rounded-2xl p-5 border border-white/10">
                        <div className="text-tec-cyan font-800 text-sm mb-1">{m.year}</div>
                        <div className="text-white font-700 text-base mb-2">{m.title}</div>
                        <p className="text-blue-200/70 text-xs leading-relaxed">{m.desc}</p>
                      </div>
                    ) : <div />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-tec-light dark:bg-tec-dark-card text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-800 text-tec-navy dark:text-white mb-5">Ready to work with us?</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-8 leading-relaxed">
            Let's discuss how TEC can deliver precision engineering solutions for your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="tec-btn-primary text-sm tracking-widest">
              CONTACT US
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" /></svg>
            </Link>
            <Link href="/products" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-tec-blue/30 dark:border-tec-cyan/30 text-tec-navy dark:text-white text-sm font-600 hover:border-tec-cyan hover:text-tec-cyan transition-all">
              VIEW PRODUCTS
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
