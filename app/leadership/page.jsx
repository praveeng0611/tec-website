export const metadata = {
  title: 'Leadership',
  description: 'Meet the leadership team driving innovation and excellence at Tadpole Engineering Consultancy — automotive manufacturing experts with decades of industry experience.',
  openGraph: {
    title: 'Leadership | Tadpole Engineering Consultancy',
    description: 'Meet the leadership team driving innovation and excellence at Tadpole Engineering Consultancy.',
  },
  alternates: { canonical: '/leadership' },
};

const leaders = [
  {
    name: 'Founder & CEO',
    title: 'Founder & Chief Executive Officer',
    bio: 'A visionary leader with over 25 years of experience in the automotive manufacturing sector, the founder established TEC in 2017 with a mission to deliver world-class engineering solutions to India\'s rapidly evolving automotive ecosystem. Under this leadership, TEC has grown from a boutique consultancy to a 240+ strong organisation with a pan-India presence.',
    expertise: ['Strategic Leadership', 'Automotive OEM Relationships', 'Business Development', 'Manufacturing Innovation'],
    icon: '👤',
  },
  {
    name: 'Chief Operating Officer',
    title: 'Chief Operating Officer',
    bio: 'Overseeing day-to-day operations across all three manufacturing plants, the COO brings deep expertise in lean manufacturing, supply chain optimisation, and operational excellence. With a background spanning Tier-1 automotive suppliers and OEM partners, this leader ensures TEC\'s commitments to quality and on-time delivery are met consistently.',
    expertise: ['Operations Management', 'Lean Manufacturing', 'Supply Chain', 'Multi-Plant Coordination'],
    icon: '👤',
  },
  {
    name: 'VP – Engineering',
    title: 'Vice President, Engineering',
    bio: 'Leading a team of 80+ engineers, the VP of Engineering is the technical backbone of TEC\'s product innovation. A graduate of IIT Madras with post-graduate specialisation in automotive systems, this leader has been instrumental in developing TEC\'s proprietary tooling solutions and securing multiple design patents for the organisation.',
    expertise: ['CAD/CAE Design', 'Sheet Metal Engineering', 'Tooling & Fixtures', 'R&D Strategy'],
    icon: '👤',
  },
  {
    name: 'VP – Quality & Compliance',
    title: 'Vice President, Quality & Compliance',
    bio: 'The custodian of TEC\'s six ISO and IATF certifications, the VP of Quality has built a zero-compromise culture across all facilities. With over 20 years of quality management experience in the automotive supply chain, this leader drives continuous improvement initiatives that have helped TEC achieve a customer satisfaction score of 98.4%.',
    expertise: ['ISO / IATF 16949', 'Quality Systems', 'Audit Management', 'Continuous Improvement'],
    icon: '👤',
  },
  {
    name: 'Head – Sales & Business Development',
    title: 'Head of Sales & Business Development',
    bio: 'Responsible for TEC\'s revenue growth strategy, this leader manages relationships with key OEM and Tier-1 customers across India and international markets. Having joined TEC in its early years, this individual has been pivotal in expanding TEC\'s customer base from 5 to 50+ active accounts.',
    expertise: ['OEM Partnerships', 'Key Account Management', 'Export Development', 'Commercial Strategy'],
    icon: '👤',
  },
  {
    name: 'Head – Human Resources',
    title: 'Head of Human Resources',
    bio: 'Championing TEC\'s people-first culture, the HR head oversees talent acquisition, learning & development, and employee engagement across all locations. Under this leadership, TEC has been recognised as one of the preferred employers in the automotive engineering space in South India.',
    expertise: ['Talent Acquisition', 'Learning & Development', 'Employee Engagement', 'HR Technology'],
    icon: '👤',
  },
];

const values = [
  { label: 'Years of Combined Leadership Experience', value: '150+' },
  { label: 'IIT / NIT Graduates in Leadership', value: '4' },
  { label: 'Average Tenure at TEC', value: '6 Yrs' },
  { label: 'Industries Served by Leadership', value: '3+' },
];

export default function LeadershipPage() {
  return (
    <main className="min-h-screen" style={{ background: 'var(--tec-bg)' }}>
      {/* Hero */}
      <section
        className="py-24 text-white relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, var(--tec-navy) 0%, var(--tec-blue) 100%)' }}
      >
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span
            className="inline-block text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-6"
            style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)' }}
          >
            Our People
          </span>
          <h1 className="text-4xl md:text-5xl font-black mb-6">Leadership Team</h1>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Experienced professionals united by a shared passion for engineering excellence and a commitment to delivering measurable value to our customers.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-5xl mx-auto px-6 -mt-8 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {values.map(v => (
            <div key={v.label} className="rounded-2xl p-5 text-center shadow-lg" style={{ background: 'var(--tec-card)', border: '1px solid var(--tec-border)' }}>
              <div className="text-3xl font-black mb-1" style={{ color: 'var(--tec-blue)' }}>{v.value}</div>
              <div className="text-xs leading-tight" style={{ color: 'var(--tec-text-muted)' }}>{v.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Leaders Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black mb-3" style={{ color: 'var(--tec-navy)' }}>Meet the Team</h2>
          <p style={{ color: 'var(--tec-text-muted)' }}>The minds behind TEC's growth story</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader) => (
            <div
              key={leader.name}
              className="rounded-3xl overflow-hidden shadow-md flex flex-col"
              style={{ background: 'var(--tec-card)', border: '1px solid var(--tec-border)' }}
            >
              {/* Avatar */}
              <div
                className="h-40 flex items-center justify-center text-6xl"
                style={{ background: 'linear-gradient(135deg, var(--tec-navy) 0%, var(--tec-blue) 100%)' }}
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-black text-white"
                  style={{ background: 'rgba(255,255,255,0.2)' }}
                >
                  {leader.name.charAt(0)}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-black mb-0.5" style={{ color: 'var(--tec-navy)' }}>{leader.name}</h3>
                <p className="text-xs font-semibold mb-3" style={{ color: 'var(--tec-blue)' }}>{leader.title}</p>
                <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: 'var(--tec-text-muted)' }}>{leader.bio}</p>

                {/* Expertise tags */}
                <div className="flex flex-wrap gap-2">
                  {leader.expertise.map(tag => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full font-medium"
                      style={{ background: 'var(--tec-bg)', color: 'var(--tec-navy)', border: '1px solid var(--tec-border)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Join CTA */}
      <section
        className="py-20 text-white text-center"
        style={{ background: 'linear-gradient(135deg, var(--tec-blue) 0%, var(--tec-navy) 100%)' }}
      >
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-black mb-4">Want to work with us?</h2>
          <p className="opacity-80 mb-8">Join a leadership-driven organisation where your contributions shape the future of automotive manufacturing.</p>
          <a
            href="/career"
            className="inline-block px-8 py-3 rounded-full font-bold text-sm"
            style={{ background: 'var(--tec-cyan)', color: 'var(--tec-navy)' }}
          >
            Explore Careers
          </a>
        </div>
      </section>
    </main>
  );
}
