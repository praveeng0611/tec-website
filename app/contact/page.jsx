'use client';
import { useState } from 'react';

const inquiryTypes = [
  'General Inquiry',
  'Request a Quote',
  'Partnership / OEM Supply',
  'Careers',
  'Technical Support',
  'Other',
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', type: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-16 bg-white dark:bg-tec-dark-bg">

      {/* ── PAGE HERO ── */}
      <section className="relative bg-tec-navy dark:bg-tec-dark-bg py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 rounded-full border border-tec-cyan" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="tec-tag mb-4 inline-flex">Contact Us</div>
          <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-6">
            Let's build something<br />
            <span className="text-tec-cyan">great together.</span>
          </h1>
          <p className="text-blue-200/70 text-base max-w-lg leading-relaxed">
            Whether you need a quote, a technical consultation, or just want to learn more about TEC's capabilities — our team is here.
          </p>
        </div>
      </section>

      {/* ── CONTACT GRID ── */}
      <section className="py-20 bg-tec-light dark:bg-tec-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

            {/* Left info panel */}
            <div className="lg:col-span-2 space-y-5">
              {/* Quick contact */}
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  ),
                  label: 'Phone',
                  value: '+91 20 1234 5678',
                  href: 'tel:+912012345678',
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  ),
                  label: 'Email',
                  value: 'info@tadpoletec.com',
                  href: 'mailto:info@tadpoletec.com',
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  ),
                  label: 'Address',
                  value: 'Plot No. 12, Chakan Industrial Area, Pune – 410501, India',
                  href: 'https://maps.google.com/?q=Chakan+Industrial+Area+Pune',
                },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.label === 'Address' ? '_blank' : undefined}
                  rel="noreferrer"
                  className="flex items-start gap-4 bg-white dark:bg-tec-dark-bg rounded-2xl p-5 border border-tec-blue/10 dark:border-tec-cyan/10 hover:border-tec-cyan/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-tec-cyan/10 flex items-center justify-center text-tec-cyan flex-shrink-0">
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-0.5 font-500">{c.label}</div>
                    <div className="text-tec-navy dark:text-white text-sm font-500 group-hover:text-tec-cyan transition-colors leading-snug">{c.value}</div>
                  </div>
                </a>
              ))}

              {/* Working hours */}
              <div className="bg-tec-blue dark:bg-[#0F2547] rounded-2xl p-6 border border-white/10">
                <div className="text-tec-cyan text-xs font-700 tracking-widest uppercase mb-3">Working Hours</div>
                <div className="space-y-2 text-sm text-blue-200/80">
                  <div className="flex justify-between"><span>Monday – Friday</span><span className="text-white font-600">8:00 AM – 6:00 PM</span></div>
                  <div className="flex justify-between"><span>Saturday</span><span className="text-white font-600">8:00 AM – 2:00 PM</span></div>
                  <div className="flex justify-between"><span>Sunday</span><span className="text-white/40">Closed</span></div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10 text-xs text-blue-200/60">All times in Indian Standard Time (IST / UTC+5:30)</div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3 bg-white dark:bg-tec-dark-bg rounded-2xl p-8 border border-tec-blue/10 dark:border-tec-cyan/10 shadow-sm">
              {submitted ? (
                <div className="py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-tec-cyan/10 flex items-center justify-center mx-auto mb-5">
                    <svg className="w-8 h-8 text-tec-cyan" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-800 text-tec-navy dark:text-white mb-3">Message sent!</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Our team will get back to you within 1–2 business days.</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', company: '', email: '', phone: '', type: '', message: '' }); }}
                    className="mt-6 text-tec-cyan text-sm hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-800 text-tec-navy dark:text-white mb-6">Send us a message</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-600 text-gray-500 dark:text-gray-400 mb-1.5">Full Name *</label>
                        <input
                          required name="name" value={form.name} onChange={handleChange}
                          placeholder="John Smith"
                          className="w-full bg-tec-light dark:bg-tec-dark-card border border-tec-blue/15 dark:border-tec-cyan/15 rounded-xl px-4 py-3 text-sm text-tec-navy dark:text-white placeholder-gray-400 outline-none focus:border-tec-cyan transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-600 text-gray-500 dark:text-gray-400 mb-1.5">Company</label>
                        <input
                          name="company" value={form.company} onChange={handleChange}
                          placeholder="Acme Automotive Ltd."
                          className="w-full bg-tec-light dark:bg-tec-dark-card border border-tec-blue/15 dark:border-tec-cyan/15 rounded-xl px-4 py-3 text-sm text-tec-navy dark:text-white placeholder-gray-400 outline-none focus:border-tec-cyan transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-600 text-gray-500 dark:text-gray-400 mb-1.5">Email Address *</label>
                        <input
                          required type="email" name="email" value={form.email} onChange={handleChange}
                          placeholder="john@company.com"
                          className="w-full bg-tec-light dark:bg-tec-dark-card border border-tec-blue/15 dark:border-tec-cyan/15 rounded-xl px-4 py-3 text-sm text-tec-navy dark:text-white placeholder-gray-400 outline-none focus:border-tec-cyan transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-600 text-gray-500 dark:text-gray-400 mb-1.5">Phone</label>
                        <input
                          type="tel" name="phone" value={form.phone} onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full bg-tec-light dark:bg-tec-dark-card border border-tec-blue/15 dark:border-tec-cyan/15 rounded-xl px-4 py-3 text-sm text-tec-navy dark:text-white placeholder-gray-400 outline-none focus:border-tec-cyan transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-600 text-gray-500 dark:text-gray-400 mb-1.5">Inquiry Type</label>
                      <select
                        name="type" value={form.type} onChange={handleChange}
                        className="w-full bg-tec-light dark:bg-tec-dark-card border border-tec-blue/15 dark:border-tec-cyan/15 rounded-xl px-4 py-3 text-sm text-tec-navy dark:text-white outline-none focus:border-tec-cyan transition-colors appearance-none"
                      >
                        <option value="">Select inquiry type...</option>
                        {inquiryTypes.map((t) => <option key={t}>{t}</option>)}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-600 text-gray-500 dark:text-gray-400 mb-1.5">Message *</label>
                      <textarea
                        required name="message" value={form.message} onChange={handleChange} rows={5}
                        placeholder="Tell us about your project or inquiry..."
                        className="w-full bg-tec-light dark:bg-tec-dark-card border border-tec-blue/15 dark:border-tec-cyan/15 rounded-xl px-4 py-3 text-sm text-tec-navy dark:text-white placeholder-gray-400 outline-none focus:border-tec-cyan transition-colors resize-none"
                      />
                    </div>

                    <button type="submit" className="tec-btn-primary w-full justify-center text-sm tracking-widest">
                      SEND MESSAGE
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
