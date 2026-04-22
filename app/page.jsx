'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

/* ─── ICONS (inline SVGs to avoid extra deps) ─── */
const IconWrench = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
);
const IconStamp = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <rect x="3" y="14" width="18" height="4" rx="1"/><path strokeLinecap="round" d="M6 14V9a6 6 0 0 1 12 0v5"/>
  </svg>
);
const IconWeld = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
  </svg>
);
const IconPaint = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>
);
const ArrowUpRight = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10"/>
  </svg>
);

/* ─── DATA ─── */
const services = [
  {
    icon: <IconWrench />,
    title: 'Sheet Metal press tool, Welding & Checking fixtures',
    desc: 'State-of-the-art tool rooms with latest design capabilities for sheet metal heavy panels, progressive stamping tools, aluminum guide rails, skin panels & mechanisms.',
  },
  {
    icon: <IconStamp />,
    title: 'Sheet metal stamping (HPS, LPS), Wire & Tube forming',
    desc: 'TEC has cutting-edge technology on manufacturing automotive panels, hot stamping panels, skin panels, fuel tanks, functional components on ferrous/non ferrous metals varying tensile from 270 MPa to 1200 MPa.',
  },
  {
    icon: <IconWeld />,
    title: 'Welding, Hemming, Riveting, Brazing',
    desc: 'Spark to structure solutions through resistance welding, MIG welding, Arc welding (both robotic & manual), orbital riveting, tools/robotic hemming & brazing as well.',
  },
  {
    icon: <IconPaint />,
    title: 'Painting & CED Coating, Anodizing',
    desc: 'Precision crafted surface solutions through painting, ED coating, Powder coating and anodizing.',
  },
];

const stats = [
  { num: '5K+', label: 'Project Realize' },
  { num: '1,000+', label: 'Expert Joined' },
  { num: '7+', label: 'Awards Won' },
  { num: '7+', label: 'Years of Experience' },
];

const features = [
  { title: 'Resource', desc: 'Comprehensive resources for all your manufacturing needs.' },
  { title: 'Analyze', desc: 'In-depth analysis to ensure optimal solutions.' },
  { title: 'Target Oriented', desc: 'Focused on achieving your specific goals.' },
  { title: 'Transparent', desc: 'Clear and honest communication at every step.' },
  { title: 'Quality', desc: 'Uncompromising quality in every project.' },
  { title: 'Prestigious', desc: 'Renowned for excellence in the industry.' },
  { title: 'Environmentally', desc: 'Committed to sustainable practices.' },
  { title: 'Confidential', desc: 'Ensuring complete confidentiality for all clients.' },
  { title: '24/7 Premium Support', desc: 'Around-the-clock support for your convenience.' },
];

/* ─── COUNTER ANIMATION ─── */
function useCounter(target, duration = 1800) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const num = parseInt(target.replace(/\D/g, ''));
        const step = num / (duration / 16);
        let cur = 0;
        const timer = setInterval(() => {
          cur = Math.min(cur + step, num);
          setCount(Math.floor(cur));
          if (cur >= num) clearInterval(timer);
        }, 16);
        observer.disconnect();
      }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);
  return { count, ref };
}

/* ─── HERO SLIDER ─── */
// Unsplash images — free to use under Unsplash License (no attribution required)
const heroSlides = [
  {
    img: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=900&q=80&fit=crop&auto=format',
    label: 'Sheet Metal Stamping',
    sub: 'Precision forming from 270 MPa to 1200 MPa tensile steel',
  },
  {
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=80&fit=crop&auto=format',
    label: 'Advanced Manufacturing',
    sub: 'Ultra-high-strength automotive body panels',
  },
  {
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=900&q=80&fit=crop&auto=format',
    label: 'Precision Welding & Assembly',
    sub: 'Robotic MIG, Arc and resistance welding at scale',
  },
];

export default function HomePage() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSlide(s => (s + 1) % heroSlides.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="pt-16">

      {/* ── HERO ── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-white dark:bg-tec-dark-bg">
        {/* Decorative diamond outline */}
        <div className="absolute left-8 top-1/4 w-48 h-48 border border-dashed border-tec-cyan/30 rotate-45 hidden lg:block" />
        <div className="absolute left-20 top-1/3 w-32 h-32 border border-dashed border-tec-blue/20 rotate-45 hidden lg:block" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* Left */}
            <div className="relative z-10">
              <div className="tec-tag flex items-center gap-2 mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
                Manufacturing Solutions
              </div>

              {/* Decorative light-blue blob behind heading */}
              <div className="absolute -left-6 top-8 w-48 h-48 rounded-full bg-tec-light dark:bg-tec-blue/10 -z-10" />

              <h1 className="text-5xl lg:text-7xl font-black text-tec-navy dark:text-white leading-tight mb-6">
                Innovate.<br />
                Enhance.<br />
                <span className="text-tec-cyan">Persist.</span>
              </h1>
              <p className="text-gray-500 dark:text-gray-400 text-base max-w-md mb-10 leading-relaxed">
                Driving progress through innovative solutions, continuous enhancement to deliver products that persist.
              </p>
              <Link href="/products" className="tec-btn-primary text-sm tracking-widest">
                DISCOVER MORE <ArrowUpRight />
              </Link>
            </div>

            {/* Right — image slider */}
            <div className="relative rounded-2xl overflow-hidden h-80 lg:h-[480px] shadow-2xl">
              {heroSlides.map((s, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-opacity duration-1000 ${i === slide ? 'opacity-100' : 'opacity-0'}`}
                >
                  {/* Real Unsplash manufacturing photo */}
                  <img
                    src={s.img}
                    alt={s.label}
                    className="w-full h-full object-cover"
                    loading={i === 0 ? 'eager' : 'lazy'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <div className="text-white font-bold text-base leading-snug">{s.label}</div>
                    <div className="text-white/70 text-xs mt-1">{s.sub}</div>
                  </div>
                </div>
              ))}

              {/* Slider dots */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSlide(i)}
                    className={`w-2 h-2 rounded-full transition-all ${i === slide ? 'bg-tec-cyan w-5' : 'bg-white/50'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-tec-light dark:bg-tec-dark-card border-y border-tec-blue/10 dark:border-tec-cyan/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-tec-blue/15 dark:divide-tec-cyan/15">
            {stats.map((s) => {
              const { count, ref } = useCounter(s.num);
              const suffix = s.num.replace(/[0-9,]/g, '');
              return (
                <div key={s.label} ref={ref} className="py-8 px-6 text-center">
                  <div className="tec-stat-num">{count.toLocaleString()}{suffix}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 font-400">{s.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="py-16 bg-white dark:bg-tec-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((s) => (
              <div key={s.title} className="tec-service-card">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white flex-shrink-0">
                    {s.icon}
                  </div>
                  <h3 className="text-white font-700 text-base leading-snug">{s.title}</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="py-16 bg-tec-light dark:bg-tec-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left */}
            <div>
              <div className="tec-tag mb-3">Who We Are</div>
              <h2 className="text-3xl lg:text-4xl font-800 text-tec-navy dark:text-white mb-5 leading-snug">
                We are a global supplier for automobile components.
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
                At Tadpole Engineering Consultancy (TEC), we guarantee high degree of customer satisfaction for every product we deliver. Our primary focus is the Automotive Industry, where we stay ahead of daily transformations and market trends.
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-8">
                Our expertise also extends to Aerospace, Locomotive and Heavy Fabrication (Yellow Goods), building cost effective solutions at Global standards ensuring excellence.
              </p>
              <Link href="/about" className="tec-btn-primary text-sm">
                Learn More <ArrowUpRight />
              </Link>
            </div>

            {/* Right — Quote */}
            <div className="relative">
              <div className="text-5xl text-tec-cyan font-black leading-none mb-2">"</div>
              <div className="w-10 h-0.5 bg-tec-navy dark:bg-white mb-5" />
              <blockquote className="text-xl lg:text-2xl font-600 text-tec-navy dark:text-white leading-relaxed italic mb-6">
                "We believe that it takes great people to deliver a great product"
              </blockquote>
              <div className="font-600 text-gray-400 italic text-sm">— Signature</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FACTORY PHOTO GALLERY ── */}
      <section className="py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-3">
            {[
              {
                src: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=600&q=80&fit=crop&auto=format',
                alt: 'Industrial stamping press',
              },
              {
                src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80&fit=crop&auto=format',
                alt: 'Precision manufacturing',
              },
              {
                src: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80&fit=crop&auto=format',
                alt: 'Welding and fabrication',
              },
            ].map((img, i) => (
              <div key={i} className="rounded-xl h-52 lg:h-72 overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GLOBAL REACH ── */}
      <section className="py-20 bg-white dark:bg-tec-dark-bg text-center overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Globe illustration */}
          <div className="relative h-40 mb-2 flex items-end justify-center overflow-hidden">
            <div className="absolute bottom-0 w-80 h-80 rounded-full bg-gradient-to-b from-tec-cyan/10 to-tec-blue/5 dark:from-tec-cyan/15 dark:to-tec-blue/10 border border-tec-cyan/20" />
            <div className="absolute bottom-0 w-56 h-56 rounded-full bg-gradient-to-b from-tec-cyan/15 to-transparent dark:from-tec-cyan/20 border border-tec-cyan/15" />
            {/* Dashed cross lines */}
            <svg className="absolute top-4 left-1/2 -translate-x-1/2 w-48 h-16" viewBox="0 0 192 64">
              <line x1="0" y1="32" x2="80" y2="32" stroke="#29ABE2" strokeWidth="1" strokeDasharray="4,4" opacity="0.5"/>
              <line x1="112" y1="32" x2="192" y2="32" stroke="#29ABE2" strokeWidth="1" strokeDasharray="4,4" opacity="0.5"/>
              <line x1="96" y1="0" x2="96" y2="26" stroke="#29ABE2" strokeWidth="1" strokeDasharray="4,4" opacity="0.5"/>
              <line x1="96" y1="38" x2="96" y2="64" stroke="#29ABE2" strokeWidth="1" strokeDasharray="4,4" opacity="0.5"/>
              <circle cx="96" cy="32" r="5" fill="none" stroke="#29ABE2" strokeWidth="1.5" opacity="0.8"/>
            </svg>
          </div>

          <div className="text-5xl font-900 text-tec-cyan mb-3">23+</div>
          <h2 className="text-2xl lg:text-3xl font-800 text-tec-navy dark:text-white mb-4 leading-snug">
            Company From All Around The World trust on Tadpole for awesome project
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-xl mx-auto">
            Companies worldwide trust Tadpole Engineering Consultancy for exceptional projects, leveraging our expertise and dedication to deliver outstanding results.
          </p>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-16 bg-tec-blue dark:bg-[#0F2547]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-tec-cyan text-xs font-700 tracking-[0.15em] uppercase mb-3">Why Choose Us</div>
            <h2 className="text-3xl lg:text-4xl font-900 text-white mb-5">
              Precision in Performance.<br />Commitment to Quality.
            </h2>
            <p className="text-blue-200/70 text-sm max-w-2xl mx-auto leading-relaxed">
              At Tadpole Engineering Consultancy, we excel in precision and quality. Our expert team ensures meticulous craftsmanship and innovative solutions, surpassing expectations. Trust us for reliable and exceptional results in every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {features.map((f) => (
              <div key={f.title} className="tec-feature-card">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-700 text-sm mb-1">{f.title}</h4>
                  <p className="text-blue-200/65 text-xs leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIAL CTA ── */}
      <section className="py-16 bg-tec-light dark:bg-tec-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 bg-white dark:bg-tec-dark-bg shadow-lg border border-tec-blue/10 dark:border-tec-cyan/10">

            {/* Left — Car chassis image placeholder */}
            <div className="bg-gradient-to-br from-tec-blue/10 to-tec-cyan/5 dark:from-tec-dark-card dark:to-tec-blue/20 h-64 lg:h-auto flex items-center justify-center relative overflow-hidden p-8">
              {/* Geometric car chassis SVG representation */}
              <svg viewBox="0 0 400 220" className="w-full max-w-sm opacity-80" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Simple car silhouette */}
                <ellipse cx="120" cy="180" rx="35" ry="35" stroke="#29ABE2" strokeWidth="6" fill="none"/>
                <ellipse cx="280" cy="180" rx="35" ry="35" stroke="#29ABE2" strokeWidth="6" fill="none"/>
                <ellipse cx="120" cy="180" rx="15" ry="15" stroke="#1B4080" strokeWidth="3" fill="none"/>
                <ellipse cx="280" cy="180" rx="15" ry="15" stroke="#1B4080" strokeWidth="3" fill="none"/>
                <path d="M50 155 L50 100 L160 55 L240 55 L360 100 L360 155 Z" stroke="#1B4080" strokeWidth="3" fill="rgba(27,64,128,0.1)" strokeLinejoin="round"/>
                <path d="M85 145 L315 145" stroke="#29ABE2" strokeWidth="2"/>
                <path d="M160 55 L150 100 M240 55 L250 100" stroke="#29ABE2" strokeWidth="2" strokeDasharray="4,3"/>
                <rect x="170" y="65" width="60" height="35" rx="3" stroke="#29ABE2" strokeWidth="1.5" fill="rgba(41,171,226,0.1)"/>
                <path d="M50 120 L360 120" stroke="#1B4080" strokeWidth="1" strokeDasharray="6,4" opacity="0.5"/>
              </svg>
              <div className="absolute bottom-4 left-4 right-4">
                <Link href="/products" className="tec-btn-primary text-xs tracking-widest w-full justify-center">
                  DISCOVER MORE <ArrowUpRight />
                </Link>
              </div>
            </div>

            {/* Right */}
            <div className="p-10 flex flex-col justify-center">
              <h2 className="text-2xl lg:text-3xl font-800 text-tec-navy dark:text-white mb-5 leading-snug">
                Innovate. <span className="text-tec-cyan">Trusted industrial service provider.</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                At Tadpole Engineering Consultancy, we pride ourselves on being a trusted industrial service provider. Specializing in hot stamping parts manufacturing and the design of mechanical and automotive products, we deliver precision, quality, and innovation. Our dedicated team ensures each project meets the highest industry standards, fostering long-term partnerships with our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
