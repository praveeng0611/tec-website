import Link from 'next/link';

export const metadata = {
  title: 'Career',
  description: 'Join the Tadpole Engineering team. Explore career opportunities in automotive manufacturing, engineering, quality, and operations at our Chennai, Pune and NCR plants.',
  alternates: { canonical: 'https://tec.gnosisolabs.com/career' },
};

const values = [
  { icon: '🚀', title: 'Growth Culture', desc: 'We invest in training, mentorship, and career development. Your growth is our priority.' },
  { icon: '🤝', title: 'Collaborative Teams', desc: 'Work alongside 240+ skilled professionals in a culture built on teamwork and transparency.' },
  { icon: '🏆', title: 'Recognition', desc: 'We celebrate achievement. Your work and dedication are always recognised and rewarded.' },
  { icon: '🌱', title: 'Purpose-Driven', desc: 'Be part of a company that builds critical automotive components for global OEMs and contributes to cleaner, safer mobility.' },
];

const departments = [
  { name: 'Manufacturing & Production', roles: ['Press Shop Operator', 'Welding Engineer', 'Hot Stamping Technician', 'Assembly Line Supervisor'] },
  { name: 'Engineering & Design', roles: ['Tool & Die Designer (AutoForm / UG NX)', 'Process Engineer – Stamping', 'Quality Engineer (IATF 16949)', 'R&D – Wire & Pipe Forming'] },
  { name: 'Quality & Compliance', roles: ['Quality Control Inspector', 'IATF Auditor', 'Environmental Health & Safety Officer', 'Measurement & Calibration Engineer'] },
  { name: 'Corporate Functions', roles: ['Supply Chain & Procurement', 'HR & Talent Acquisition', 'Finance & Accounts', 'Sales & Business Development'] },
];

export default function CareerPage() {
  return (
    <div className="pt-20 bg-white dark:bg-tec-dark-bg">

      {/* Hero */}
      <section className="relative bg-tec-navy dark:bg-tec-dark-bg py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full border border-tec-cyan" />
          <div className="absolute bottom-0 right-20 w-48 h-48 rounded-full border border-tec-cyan" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="tec-tag mb-4 inline-flex">Join Our Team</div>
          <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-6">
            Build your career<br />
            <span className="text-tec-cyan">with purpose.</span>
          </h1>
          <p className="text-blue-200/70 text-base max-w-xl leading-relaxed">
            Tadpole Engineering is a fast-growing automotive component manufacturer with plants in Chennai, Pune, and NCR. We are always looking for passionate, skilled individuals to join our team.
          </p>
        </div>
      </section>

      {/* Why TEC */}
      <section className="py-20 bg-white dark:bg-tec-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="tec-tag mb-4 inline-flex">Why Tadpole Engineering</div>
            <h2 className="text-3xl font-extrabold text-tec-navy dark:text-white">A place where your work matters.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div key={v.title} className="bg-tec-light dark:bg-tec-dark-card rounded-2xl p-7 border border-tec-blue/10 dark:border-tec-cyan/10 hover:border-tec-cyan/40 transition-all text-center">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-bold text-tec-navy dark:text-white text-sm mb-2">{v.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 bg-tec-light dark:bg-tec-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="tec-tag mb-4 inline-flex">Open Areas</div>
            <h2 className="text-3xl font-extrabold text-tec-navy dark:text-white">Departments we hire across</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {departments.map((d) => (
              <div key={d.name} className="bg-white dark:bg-tec-dark-bg rounded-2xl p-6 border border-tec-blue/10 dark:border-tec-cyan/10">
                <h3 className="font-bold text-tec-navy dark:text-white text-base mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-tec-cyan"></span>
                  {d.name}
                </h3>
                <ul className="space-y-2">
                  {d.roles.map((r) => (
                    <li key={r} className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600 flex-shrink-0"></span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-tec-blue dark:bg-[#0F2547] text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-black text-white mb-5">Ready to leap forward?</h2>
          <p className="text-blue-200/75 text-sm mb-8 leading-relaxed">
            Send your CV and a brief note about the role you are interested in to our HR team. We review every application and will get back to you within 5 working days.
          </p>
          <a href="mailto:hr@tadpoletec.com" className="tec-btn-primary text-sm tracking-widest">
            SEND YOUR CV
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          </a>
          <p className="text-blue-200/50 text-xs mt-4">hr@tadpoletec.com · Locations: Chennai · Pune · NCR</p>
        </div>
      </section>
    </div>
  );
}
