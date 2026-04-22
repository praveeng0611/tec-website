import Link from 'next/link';

const pillars = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Green Manufacturing',
    desc: 'Our facilities operate on optimised energy cycles, reducing consumption per part by 18% YoY through smart press scheduling and LED-converted infrastructure.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: 'Circular Material Use',
    desc: 'Steel offcuts and aluminium scrap are fully recirculated back to approved smelters. Our material waste diversion rate stands at 96%, targeting 100% by 2027.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: 'Water Management',
    desc: 'Closed-loop water systems in our CED coating lines recycle over 85% of process water. Zero untreated effluent is released from any TEC facility.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Carbon Reduction Targets',
    desc: 'Committed to a 40% reduction in Scope 1 & 2 emissions by 2030 against our 2022 baseline. Quarterly progress tracked and disclosed to key stakeholders.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'People & Community',
    desc: 'Safety-first culture with zero Lost Time Injury target. We invest in local talent development programs and support community welfare initiatives near our plants.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'Responsible Sourcing',
    desc: 'Supplier code of conduct enforced across the entire supply chain. Only certified, conflict-free raw materials are approved for use in TEC products.',
  },
];

const certifications = [
  { name: 'IATF 16949', desc: 'Automotive Quality Management System' },
  { name: 'ISO 14001', desc: 'Environmental Management System' },
  { name: 'ISO 45001', desc: 'Occupational Health & Safety' },
  { name: 'ISO 9001', desc: 'Quality Management System' },
];

const metrics = [
  { value: '96%', label: 'Material waste diverted from landfill' },
  { value: '85%', label: 'Process water recycled in CED lines' },
  { value: '18%', label: 'YoY energy reduction per part' },
  { value: '40%', label: 'Target Scope 1 & 2 reduction by 2030' },
];

export default function SustainabilityPage() {
  return (
    <div className="pt-20 bg-white dark:bg-tec-dark-bg">

      {/* ── PAGE HERO ── */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-tec-navy via-tec-blue to-tec-navy dark:from-tec-dark-bg dark:via-[#0F2547] dark:to-tec-dark-bg">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full border border-tec-cyan" />
          <div className="absolute bottom-0 right-20 w-48 h-48 rounded-full border border-tec-cyan" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="tec-tag mb-4 inline-flex">Sustainability</div>
          <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-6">
            Manufacturing for today.<br />
            <span className="text-tec-cyan">Protecting tomorrow.</span>
          </h1>
          <p className="text-blue-200/70 text-base max-w-xl leading-relaxed">
            Sustainability at TEC is not a policy — it is built into every press cycle, every weld bead, and every decision we make on the plant floor.
          </p>
        </div>
      </section>

      {/* ── KEY METRICS ── */}
      <section className="py-16 bg-tec-light dark:bg-tec-dark-card border-b border-tec-blue/10 dark:border-tec-cyan/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {metrics.map((m) => (
              <div key={m.label} className="bg-white dark:bg-tec-dark-bg rounded-2xl p-6 text-center border border-tec-blue/10 dark:border-tec-cyan/10">
                <div className="text-3xl font-900 text-tec-cyan mb-2">{m.value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SIX PILLARS ── */}
      <section className="py-20 bg-white dark:bg-tec-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="tec-tag mb-4 inline-flex">Our Commitments</div>
            <h2 className="text-3xl lg:text-4xl font-800 text-tec-navy dark:text-white">Six pillars of responsible manufacturing.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.map((p) => (
              <div key={p.title} className="bg-tec-light dark:bg-tec-dark-card rounded-2xl p-7 border border-tec-blue/10 dark:border-tec-cyan/10 hover:border-tec-cyan/40 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-tec-cyan/10 flex items-center justify-center text-tec-cyan mb-5">
                  {p.icon}
                </div>
                <h3 className="font-700 text-tec-navy dark:text-white text-base mb-2">{p.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section className="py-16 bg-tec-blue dark:bg-[#0F2547]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-tec-cyan text-xs font-700 tracking-[0.15em] uppercase mb-3">Certifications</div>
            <h2 className="text-3xl font-900 text-white">Compliance you can trust.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {certifications.map((c) => (
              <div key={c.name} className="bg-white/10 rounded-2xl p-6 text-center border border-white/10">
                <div className="text-tec-cyan font-900 text-lg mb-2">{c.name}</div>
                <div className="text-blue-200/70 text-xs">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-tec-light dark:bg-tec-dark-card text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-800 text-tec-navy dark:text-white mb-5">Partner with a manufacturer you can trust.</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-8 leading-relaxed">
            Our sustainability practices are aligned with the expectations of global OEMs and Tier-1 suppliers. Get in touch to learn more.
          </p>
          <Link href="/contact" className="tec-btn-primary text-sm tracking-widest">
            CONTACT US
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" /></svg>
          </Link>
        </div>
      </section>

    </div>
  );
}
