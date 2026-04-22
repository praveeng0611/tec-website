import Link from 'next/link';
export const metadata = {
  title: 'Products',
  description:
    'Tadpole Engineering products: Sunroof aluminum guide rails, BIW sheet metal components, hot stamping, seat frames & mechanisms, wire-formed parts, pipe-bending, CED coating, anodizing, and in-house tooling. IATF 16949 certified.',
  openGraph: {
    title: 'Automotive Products — Tadpole Engineering Consultancy',
    description:
      '9 core automotive product categories. Tandem HPS up to 1200 T, hot stamping 1000 T, 7-axis CNC wire bending, automatic anodizing & CED coating.',
    url: 'https://tec.gnosisolabs.com/products',
  },
  alternates: { canonical: 'https://tec.gnosisolabs.com/products' },
};


const products = [
  {
    id: 'sunroof-guide-rail',
    tag: 'Sunroof Systems',
    title: 'Sunroof Aluminum Guide Rail Profiles',
    desc: 'Precision-extruded and bent aluminum guide rail profiles for panoramic and sliding sunroof systems. Manufactured on CNC aluminum profile bending machines with automatic anodizing finish for superior corrosion resistance.',
    specs: ['CNC aluminum profile bending', 'Automatic anodizing coating', 'Guide rail assembly lines', 'Mechanism assembly integration', 'OEM-grade dimensional accuracy'],
  },
  {
    id: 'sunroof-sheet-metal',
    tag: 'Sunroof Systems',
    title: 'Sunroof Sheet Metal Frames',
    desc: 'Complex stamped and welded sheet metal frames for sunroof assemblies, produced on tandem press lines up to 1200 T. Robotic MIG welding ensures consistent weld quality across high-volume production runs.',
    specs: ['Tandem HPS press (up to 1200 T)', 'Robotic MIG welding', 'Resistance & spot welding', 'Clinching nut assembly', 'High-volume production'],
  },
  {
    id: 'biw-sheet-metal',
    tag: 'Body-in-White',
    title: 'Sheet Metal Components (BIW)',
    desc: 'Structural and semi-structural Body-in-White components stamped from a wide range of ferrous materials with tensile strength from 270 MPa to 1200 MPa. Tandem and progressive press lines serve complex panel and bracket requirements.',
    specs: ['Progressive line (150 T – 600 T)', 'Transfer Press (400 T)', 'Hydraulic press (400 T & 600 T)', '270–1200 MPa tensile range', '3D laser cutting & marking'],
  },
  {
    id: 'seat-frames',
    tag: 'Seating Systems',
    title: 'Seat Frames & Seat Mechanisms',
    desc: 'Full seat frame assemblies and recliner mechanisms for passenger and commercial vehicles, assembled on dedicated mechanism assembly lines with orbital riveting, MIG welding, and robotic hemming processes.',
    specs: ['Mechanism assembly lines', 'Orbital riveting', 'MIG & resistance welding', 'Seat belt metal parts', 'Checking fixture validation'],
  },
  {
    id: 'hot-stamping',
    tag: 'Hot Stamping',
    title: 'Hot Stamping Metal Components',
    desc: 'Ultra-high-strength hot-stamped parts manufactured on our 1000 T press with robotic pick-and-place and furnace line at Pune. Capable of producing components up to 1500 MPa for crash-critical structural applications.',
    specs: ['1000 T hot stamping press', 'Robotic pick-and-place', 'Full furnace infrastructure', 'Up to 1500 MPa strength', 'Hot forming simulation (AutoForm)'],
  },
  {
    id: 'wire-formed',
    tag: 'Wire & Tube Forming',
    title: 'Wire-Formed Parts',
    desc: 'Complex wire-formed components on 7-axis CNC wire bending machines, handling wire diameters up to 14 mm. Used in seat frames, restraint systems, and structural brackets across automotive and locomotive platforms.',
    specs: ['7-axis CNC wire bending', 'Up to 14 mm diameter', 'Complex 3D geometries', 'Seat & restraint systems', 'Wire forming simulation'],
  },
  {
    id: 'pipe-bent',
    tag: 'Wire & Tube Forming',
    title: 'Pipe-Bending Components',
    desc: 'Precision tube and pipe-bent parts on 5-axis CNC pipe bending machines, handling diameters up to 26 mm. Applications span exhaust brackets, chassis components, and hydraulic lines.',
    specs: ['5-axis CNC pipe bending', 'Up to 26 mm diameter', 'Chassis & exhaust parts', 'Hydraulic line components', 'Pipe bending simulation'],
  },
  {
    id: 'coating',
    tag: 'Surface Treatment',
    title: 'Coating Technologies',
    desc: 'End-to-end surface treatment with automatic anodizing, CED/ED coating, and Teflon coating lines. Our fully automated processes deliver uniform corrosion protection and aesthetic finishes at production scale.',
    specs: ['Automatic anodizing line', 'Automatic CED coating line', 'Automatic Teflon coating line', 'Powder coating', 'EcoVadis certified processes'],
  },
  {
    id: 'tooling',
    tag: 'In-House Tooling',
    title: 'Tool Dies, Fixtures & Automation',
    desc: 'Complete in-house tooling center with 3-axis and 5-axis VMC machining for hot stamping dies, cold stamping dies, welding fixtures, checking fixtures, and custom automation systems — all designed using AutoForm, UG NX CAD, and SolidWorks.',
    specs: ['VMC 3-axis & 5-axis machining', 'Hot & cold stamping dies', 'Welding & checking fixtures', 'Custom automation SPMs', 'AutoForm / UG NX / SolidWorks'],
  },
];

const capabilities = [
  { label: 'Max Tandem Press', value: '1200 T (HPS)' },
  { label: 'Tensile Range', value: '270–1500 MPa' },
  { label: 'Hot Stamping Press', value: '1000 T + Robot' },
  { label: 'Quality Standard', value: 'IATF 16949' },
  { label: 'CNC Wire Bending', value: '7-Axis / Ø14 mm' },
  { label: 'Coating Lines', value: 'Anodize · CED · Teflon' },
];

export default function ProductsPage() {
  return (
    <div className="pt-20 bg-white dark:bg-tec-dark-bg">

      {/* ── PAGE HERO ── */}
      <section className="relative bg-tec-navy dark:bg-tec-dark-bg py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 rounded-full border border-tec-cyan" />
          <div className="absolute bottom-0 left-20 w-48 h-48 rounded-full border border-tec-blue" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="tec-tag mb-4 inline-flex">Our Products</div>
          <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-6">
            Precision-built<br />
            <span className="text-tec-cyan">from material to component.</span>
          </h1>
          <p className="text-blue-200/70 text-base max-w-xl leading-relaxed">
            From sunroof systems and BIW sheet metal, to hot stamping, wire-formed parts, and coating technologies — TEC delivers end-to-end automotive manufacturing solutions.
          </p>
        </div>
      </section>

      {/* ── PRODUCT GRID ── */}
      <section className="py-20 bg-white dark:bg-tec-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <div
                key={p.id}
                className="flex flex-col rounded-2xl overflow-hidden border border-tec-blue/10 dark:border-tec-cyan/10 hover:border-tec-cyan/40 transition-all shadow-sm hover:shadow-md group"
              >
                {/* Header */}
                <div className="bg-gradient-to-br from-tec-blue to-tec-navy dark:from-[#0F2547] dark:to-tec-dark-bg p-6">
                  <div className="text-tec-cyan text-xs font-bold tracking-[0.15em] uppercase mb-2">{p.tag}</div>
                  <h3 className="text-white font-bold text-base leading-snug">{p.title}</h3>
                </div>

                {/* Body */}
                <div className="flex-1 bg-tec-light dark:bg-tec-dark-card p-6 flex flex-col">
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-5">{p.desc}</p>
                  <ul className="space-y-1.5 mb-6">
                    {p.specs.map((s) => (
                      <li key={s} className="flex items-center gap-2 text-tec-navy dark:text-gray-300 text-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-tec-cyan flex-shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="mt-auto self-start inline-flex items-center gap-2 text-tec-cyan font-semibold text-sm hover:gap-3 transition-all"
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
            <div className="text-tec-cyan text-xs font-bold tracking-[0.15em] uppercase mb-3">Manufacturing Capabilities</div>
            <h2 className="text-3xl font-black text-white">Numbers that speak for themselves.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {capabilities.map((c) => (
              <div key={c.label} className="bg-white/10 rounded-2xl p-5 text-center border border-white/10">
                <div className="text-tec-cyan font-bold text-sm mb-2">{c.value}</div>
                <div className="text-blue-200/65 text-xs">{c.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="py-16 bg-tec-light dark:bg-tec-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="tec-tag mb-4 inline-flex">Stamping Lines</div>
          <h2 className="text-2xl font-extrabold text-tec-navy dark:text-white mb-8">Full-spectrum press infrastructure</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Tandem LPS up to 320 T',
              'Tandem HPS up to 1200 T',
              'Progressive Line (150–600 T)',
              'Transfer Press 400 T',
              'Hydraulic Press 400 T & 600 T',
              'Hot Stamping 1000 T + Robot',
            ].map((item) => (
              <div key={item} className="bg-white dark:bg-tec-dark-bg rounded-xl px-4 py-2.5 border border-tec-blue/15 dark:border-tec-cyan/15 text-tec-navy dark:text-white text-sm hover:border-tec-cyan/50 transition-all">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-white dark:bg-tec-dark-bg text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-tec-navy dark:text-white mb-5">Have a project in mind?</h2>
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
