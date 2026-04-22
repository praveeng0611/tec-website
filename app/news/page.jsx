export const metadata = {
  title: 'News & Articles',
  description: 'Latest news, industry insights, and engineering articles from Tadpole Engineering Consultancy — stay updated on TEC milestones and automotive manufacturing trends.',
  openGraph: {
    title: 'News & Articles | Tadpole Engineering Consultancy',
    description: 'Latest news, insights, and articles from Tadpole Engineering Consultancy.',
  },
  alternates: { canonical: '/news' },
};

const featured = {
  tag: 'Company News',
  date: 'March 2025',
  title: 'TEC Expands Manufacturing Footprint with New Pune Facility',
  excerpt:
    'Tadpole Engineering Consultancy inaugurates its third manufacturing plant in Pune, adding 50,000 sq ft of state-of-the-art production space to serve growing demand from Tier-1 customers in the western region.',
  readTime: '4 min read',
};

const articles = [
  {
    tag: 'Certification',
    date: 'January 2025',
    title: 'TEC Achieves IATF 16949:2016 Recertification with Zero Non-Conformances',
    excerpt: 'Following a rigorous three-day audit by DNV, TEC\'s quality management system has been recertified to IATF 16949:2016 across all facilities — with zero major non-conformances for the second consecutive cycle.',
    readTime: '3 min read',
  },
  {
    tag: 'Industry Insight',
    date: 'December 2024',
    title: 'The Rise of High-Strength Steel in Indian Automotive Body Structures',
    excerpt: 'As vehicle safety regulations tighten under Bharat NCAP, OEMs are accelerating adoption of Advanced High-Strength Steel (AHSS). We explore the tooling and process implications for Tier-1 suppliers.',
    readTime: '6 min read',
  },
  {
    tag: 'Awards',
    date: 'October 2024',
    title: 'TEC Recognised as Preferred Supplier of the Year by Leading 2-Wheeler OEM',
    excerpt: 'Tadpole Engineering Consultancy has been honoured with the "Preferred Supplier of the Year" award by a leading two-wheeler OEM, recognising consistent delivery performance and quality excellence.',
    readTime: '2 min read',
  },
  {
    tag: 'Engineering',
    date: 'September 2024',
    title: 'Optimising Progressive Die Tooling for Electric Vehicle Battery Enclosures',
    excerpt: 'EV battery enclosures demand tight tolerances and complex geometries in lightweight aluminium alloys. Our engineering team shares learnings from recent tooling projects for next-gen EV platforms.',
    readTime: '7 min read',
  },
  {
    tag: 'Sustainability',
    date: 'July 2024',
    title: 'TEC Reduces Carbon Footprint by 18% Through Lean Energy Initiatives',
    excerpt: 'In line with our ISO 14001 and ISO 50001 commitments, TEC has achieved an 18% reduction in energy intensity per unit of production through a combination of LED retrofits, compressor optimisation, and solar rooftop installations.',
    readTime: '5 min read',
  },
  {
    tag: 'Company News',
    date: 'April 2024',
    title: 'TEC Crosses the 200-Employee Milestone',
    excerpt: 'From a team of 12 in 2017 to 200+ skilled professionals today — TEC marks this milestone with renewed focus on talent development, internal promotions, and a new Learning & Development Centre at our Chennai campus.',
    readTime: '3 min read',
  },
];

const categories = ['All', 'Company News', 'Engineering', 'Industry Insight', 'Certification', 'Awards', 'Sustainability'];

const tagColors = {
  'Company News': { bg: '#EFF6FF', text: '#1D4ED8' },
  'Engineering': { bg: '#F0FDF4', text: '#15803D' },
  'Industry Insight': { bg: '#FFF7ED', text: '#C2410C' },
  'Certification': { bg: '#F5F3FF', text: '#6D28D9' },
  'Awards': { bg: '#FFFBEB', text: '#B45309' },
  'Sustainability': { bg: '#ECFDF5', text: '#047857' },
};

function TagBadge({ tag }) {
  const colors = tagColors[tag] || { bg: '#F3F4F6', text: '#374151' };
  return (
    <span
      className="inline-block text-xs font-bold px-3 py-1 rounded-full"
      style={{ background: colors.bg, color: colors.text }}
    >
      {tag}
    </span>
  );
}

export default function NewsPage() {
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
            Newsroom
          </span>
          <h1 className="text-4xl md:text-5xl font-black mb-6">News & Articles</h1>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Company milestones, engineering insights, and industry perspectives from the TEC team.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* Featured Article */}
        <div className="mb-16">
          <h2 className="text-sm font-bold tracking-widest uppercase mb-6" style={{ color: 'var(--tec-blue)' }}>Featured</h2>
          <div
            className="rounded-3xl overflow-hidden shadow-lg"
            style={{ background: 'var(--tec-card)', border: '1px solid var(--tec-border)' }}
          >
            {/* Placeholder visual */}
            <div
              className="h-48 md:h-64 flex items-center justify-center relative"
              style={{ background: 'linear-gradient(135deg, var(--tec-navy) 0%, var(--tec-blue) 100%)' }}
            >
              <div className="text-white text-center px-8">
                <div className="text-5xl mb-3">🏭</div>
                <div className="text-sm opacity-70 font-medium">TEC Pune Facility — 2025</div>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <TagBadge tag={featured.tag} />
                <span className="text-sm" style={{ color: 'var(--tec-text-muted)' }}>{featured.date}</span>
                <span className="text-sm" style={{ color: 'var(--tec-text-muted)' }}>· {featured.readTime}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black mb-4" style={{ color: 'var(--tec-navy)' }}>{featured.title}</h3>
              <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--tec-text-muted)' }}>{featured.excerpt}</p>
              <button
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold"
                style={{ background: 'var(--tec-blue)', color: 'white' }}
              >
                Read Full Story
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter (static display) */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat, i) => (
            <button
              key={cat}
              className="px-4 py-1.5 rounded-full text-sm font-semibold transition-colors"
              style={i === 0
                ? { background: 'var(--tec-navy)', color: 'white' }
                : { background: 'var(--tec-card)', color: 'var(--tec-text-muted)', border: '1px solid var(--tec-border)' }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.title}
              className="rounded-3xl overflow-hidden shadow-md flex flex-col hover:shadow-xl transition-shadow"
              style={{ background: 'var(--tec-card)', border: '1px solid var(--tec-border)' }}
            >
              {/* Color bar */}
              <div
                className="h-2"
                style={{ background: 'linear-gradient(90deg, var(--tec-blue), var(--tec-cyan))' }}
              />
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <TagBadge tag={article.tag} />
                </div>
                <h3 className="text-base font-black mb-3 leading-snug" style={{ color: 'var(--tec-navy)' }}>{article.title}</h3>
                <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: 'var(--tec-text-muted)' }}>{article.excerpt}</p>
                <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid var(--tec-border)' }}>
                  <span className="text-xs" style={{ color: 'var(--tec-text-muted)' }}>{article.date} · {article.readTime}</span>
                  <button className="text-xs font-bold" style={{ color: 'var(--tec-blue)' }}>Read →</button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter signup */}
        <div
          className="mt-20 rounded-3xl p-10 text-center"
          style={{ background: 'linear-gradient(135deg, var(--tec-navy) 0%, var(--tec-blue) 100%)', color: 'white' }}
        >
          <h2 className="text-2xl font-black mb-3">Stay in the Loop</h2>
          <p className="opacity-80 mb-8 max-w-md mx-auto">
            Subscribe to our newsletter for the latest TEC news, technical articles, and industry updates — delivered quarterly.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-5 py-3 rounded-full text-sm"
              style={{ background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', outline: 'none' }}
            />
            <button
              className="px-6 py-3 rounded-full text-sm font-bold"
              style={{ background: 'var(--tec-cyan)', color: 'var(--tec-navy)' }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
