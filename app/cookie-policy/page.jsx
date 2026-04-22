export const metadata = {
  title: 'Cookie Policy',
  description: 'Cookie Policy for Tadpole Engineering Consultancy Pvt Ltd — how we use cookies on our website.',
  alternates: { canonical: 'https://tec.gnosisolabs.com/cookie-policy' },
};

const cookieTypes = [
  {
    type: 'Strictly Necessary Cookies',
    purpose: 'These cookies are essential for the website to function properly. They enable core features such as security, network management, and accessibility. You cannot opt out of these cookies as the website cannot function without them.',
    examples: 'Session management, security tokens',
    duration: 'Session',
  },
  {
    type: 'Analytics Cookies',
    purpose: 'We use analytics cookies to understand how visitors interact with our website — which pages are visited most often, how long visitors stay, and where they navigate from. This helps us improve our website\'s performance and content.',
    examples: 'Google Analytics (_ga, _gid)',
    duration: 'Up to 2 years',
  },
  {
    type: 'Preference Cookies',
    purpose: 'These cookies remember your preferences and settings — such as your chosen theme (light/dark or blue/fire colour palette) — so that you have a consistent experience on return visits.',
    examples: 'tec-theme, tec-color',
    duration: 'Persistent (localStorage)',
  },
  {
    type: 'Marketing Cookies',
    purpose: 'Marketing cookies track your visit to our website and other websites. They are used to display ads that are relevant to you. We currently do not serve advertising, but third-party embedded content may set marketing cookies.',
    examples: 'Third-party embeds',
    duration: 'Varies',
  },
];

export default function CookiePolicyPage() {
  return (
    <div className="pt-20 bg-white dark:bg-tec-dark-bg min-h-screen">
      <section className="relative bg-tec-navy dark:bg-tec-dark-bg py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-20 w-56 h-56 rounded-full border border-tec-cyan" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="tec-tag mb-3 inline-flex">Legal</div>
          <h1 className="text-3xl lg:text-5xl font-black text-white mb-4">Cookie Policy</h1>
          <p className="text-blue-200/70 text-sm">Last updated: April 2025</p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <h2 className="text-lg font-bold text-tec-navy dark:text-white mb-3">What Are Cookies?</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">Cookies are small text files placed on your device by websites you visit. They are widely used to make websites work, or work more efficiently, and to provide information to website owners. Our website uses cookies to improve your experience and to help us understand how our site is used.</p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-tec-navy dark:text-white mb-5">Types of Cookies We Use</h2>
            <div className="space-y-4">
              {cookieTypes.map((c) => (
                <div key={c.type} className="bg-tec-light dark:bg-tec-dark-card rounded-xl p-5 border border-tec-blue/10 dark:border-tec-cyan/10">
                  <div className="flex flex-wrap gap-3 items-start justify-between mb-2">
                    <h3 className="font-bold text-tec-navy dark:text-white text-sm">{c.type}</h3>
                    <span className="text-xs bg-tec-cyan/10 text-tec-cyan rounded-full px-3 py-0.5 font-medium">{c.duration}</span>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-2">{c.purpose}</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500"><span className="font-medium">Examples:</span> {c.examples}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-lg font-bold text-tec-navy dark:text-white mb-3">How to Control Cookies</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-3">You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit a site.</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">To opt out of being tracked by Google Analytics across all websites, visit <span className="text-tec-cyan">tools.google.com/dlpage/gaoptout</span>.</p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-tec-navy dark:text-white mb-3">Contact Us</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">If you have any questions about our use of cookies, please contact us at <span className="text-tec-cyan">info@tadpoletec.com</span>.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
