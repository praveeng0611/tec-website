import Link from 'next/link';

const products = [
  {
    id: 'tool-room',
    tag: 'Tool Room',
    title: 'Sheet Metal Press Tools, Welding & Checking Fixtures',
    desc: 'State-of-the-art tool rooms with latest design capabilities for sheet metal heavy panels, progressive stamping tools, aluminum guide rails, skin panels & mechanisms.',
    specs: ['Heavy panel press tools', 'Progressive stamping tools', 'Aluminum guide rails', 'Skin panel tooling', 'Checking fixtures & gauges'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
  },
  {
    id: 'stamping',
    tag: 'Stamping',
    title: 'Sheet Metal Stamping (HPS, LPS), Wire & Tube Forming',
    desc: 'Cutting-edge technology for manufacturing automotive panels, hot stamping panels, skin panels, fuel tanks and functional components on ferrous/non-ferrous metals varying tensile from 270 MPa to 1200 MPa.',
    specs: ['Hot Press Stamping (HPS)', 'Low Press Stamping (LPS)', 'Wire forming', 'Tube forming', 'Tensile range 270–1200 MPa', 'Ferrous & non-ferrous metals'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="3" y="14" width="18" height="4" rx="1"/>
        <path strokeLinecap="round" d="M6 14V9a6 6 0 0 1 12 0v5"/>
      </svg>
    ),
  },
  {
    id: 'welding',
    tag: 'Welding & Assembly',
    title: 'Welding, Hemming, Riveting & Brazing',
    desc: 'Spark-to-structure solutions through resistance welding, MIG welding, Arc welding (both robotic & manual), orbital riveting, tool/robotic hemming and brazing.',
    specs: ['Resistance welding', 'MIG welding', 'Arc welding (robotic & manual)', 'Orbital riveting', 'Robotic & tool hemming', 'Brazing'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    id: 'coating',
    tag: 'Surface Treatment',
    title: 'Painting, CED Coating & Anodizing',
    desc: 'Precision-crafted surface solutions through painting, electro-deposition (ED/CED) coating, powder coating and anodizing for superior corrosion resistance and finish quality.',
    specs: ['Painting', 'CED / ED coating', 'Powder coating', 'Anodizing', 'Corrosion protection'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
      </svg>
    ),
  },
];

const capabilities = [
  { label: 'Max Press Tonnage', value: '2,500 T' },
  { label: 'Tensile Strength Range', value: '270–1200 MPa' },
  { label: 'Annual Capacity', value: '5M+ Parts' },
  { label: 'Quality Standard', value: 'IATF 16949' },
  { label: 'Materials', value: 'Ferrous & Non-Ferrous' },
  { label: 'Delivery Lead Time', value: 'On-Time, Every Time' },
];

export default function ProductsPage() {
  return (
    <div className="pt-16 bg-white dark:bg-tec-dark-bg">

      {/* ── PAGE HERO ── */}
      <section className="relative bg-tec-navy dark:bg-tec-dark-bg py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 rounded-full border border-tec-cyan" />
          <div className="absolute bottom-0 left-20 w-48 h-48 rounded-full border border-tec-blue" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="tec-tag mb-4 inline-flex">Our Products & Services</div>
          <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-6">
            Precision-built<br />
            <span className="text-tec-cyan">from material to component.</span>
          </h1>
          <p className="text-blue-200/70 text-base max-w-xl leading-relaxed">
            From tool room to finished part — TEC delivers end-to-end manufacturing solutions for the world's most demanding industries.
          </p>
        </div>
      </section>

      {/* ── PRODUCT CARDS ── */}
      <section className="py-20 bg-white dark:bg-tec-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {products.map((p, i) => (
              <div
                key={p.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-tec-blue/10 dark:border-tec-cyan/10 shadow-sm ${i % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
              >
                {/* Visual panel */}
                <div className={`bg-gradient-to-br from-tec-blue to-tec-navy dark:from-[#0F2547] dark:to-tec-dark-bg p-10 flex flex-col justify-center ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <div className="w-14 h-14 rounded-2xl bg-tec-cyan/15 flex items-center justify-center text-tec-cyan mb-5">
                    {p.icon}
                  </div>
                  <div className="text-tec-cyan text-xs font-700 tracking-[0.15em] uppercase mb-2">{p.tag}</div>
                  <h3 className="text-white font-800 text-xl leading-snug mb-5">{p.title}</h3>
                  <ul className="space-y-2">
                    {p.specs.map((s) => (
                      <li key={s} className="flex items-center gap-2 text-blue-200/75 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-tec-cyan flex-shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Description panel */}
                <div className={`bg-tec-light dark:bg-tec-dark-card p-10 flex flex-col justify-center ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed text-lg">{p.desc}</p>
                  <Link
                    href="/contact"
                    className="mt-8 self-start inline-flex items-center gap-2 text-tec-cyan font-600 text-sm hover:gap-3 transition-all"
                  >
                    Request a quote
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES BAR ── */}
      <section className="py-16 bg-tec-blue dark:bg-[#0F2547]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-tec-cyan text-xs font-700 tracking-[0.15em] uppercase mb-3">Manufacturing Capabilities</div>
            <h2 className="text-3xl font-900 text-white">Numbers that speak for themselves.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {capabilities.map((c) => (
              <div key={c.label} className="bg-white/10 rounded-2xl p-5 text-center border border-white/10">
                <div className="text-tec-cyan font-800 text-sm mb-2">{c.value}</div>
                <div className="text-blue-200/65 text-xs">{c.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-tec-light dark:bg-tec-dark-card text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-800 text-tec-navy dark:text-white mb-5">Have a project in mind?</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-8 leading-relaxed">
            Our engineering team is ready to evaluate your requirements and deliver the right manufacturing solution — on time and within spec.
          </p>
          <Link href="/contact" className="tec-btn-primary text-sm tracking-widest">
            GET IN TOUCH
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" /></svg>
          </Link>
        </div>
      </section>

    </div>
  );
}
