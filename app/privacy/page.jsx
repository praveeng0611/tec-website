export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy of Tadpole Engineering Consultancy Pvt Ltd — how we collect, use and protect your data.',
  alternates: { canonical: 'https://tec.gnosisolabs.com/privacy' },
};

const sections = [
  {
    title: '1. Introduction',
    body: 'Tadpole Engineering Consultancy Pvt Ltd ("TECPL", "we", "our", "us") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this policy carefully.',
  },
  {
    title: '2. Information We Collect',
    body: 'We may collect personal information that you voluntarily provide when you contact us, submit an inquiry, or sign up for our newsletter — including your name, email address, phone number, company name, and the content of your messages. We also collect non-personal data such as browser type, IP address, pages visited, and time spent on the website via analytics tools.',
  },
  {
    title: '3. How We Use Your Information',
    body: 'We use the information collected to: respond to your inquiries and requests; send you newsletters and company updates (only with your consent); improve our website and services; comply with legal obligations; and prevent fraudulent activity. We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law.',
  },
  {
    title: '4. Cookies',
    body: 'Our website uses cookies to enhance your browsing experience. Cookies are small data files stored on your device. You can control cookie settings through your browser. For detailed information, please refer to our Cookie Policy. Disabling cookies may affect the functionality of certain parts of our website.',
  },
  {
    title: '5. Data Security',
    body: 'We implement appropriate technical and organisational security measures to protect your personal data against accidental or unlawful destruction, loss, alteration, unauthorised disclosure, or access. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.',
  },
  {
    title: '6. Data Retention',
    body: 'We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, including satisfying any legal, accounting, or reporting requirements. When data is no longer required, we securely delete or anonymise it.',
  },
  {
    title: '7. Your Rights',
    body: 'Subject to applicable law, you have the right to: access the personal data we hold about you; request correction of inaccurate data; request deletion of your data; object to or restrict processing of your data; and withdraw consent at any time where processing is based on consent. To exercise any of these rights, please contact us at info@tadpoletec.com.',
  },
  {
    title: '8. Third-Party Links',
    body: 'Our website may contain links to third-party websites. This Privacy Policy applies only to our website. We are not responsible for the privacy practices of third-party websites and encourage you to review their privacy policies.',
  },
  {
    title: '9. Changes to This Policy',
    body: 'We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page with an updated date. Your continued use of our website after changes constitutes acceptance of the updated policy.',
  },
  {
    title: '10. Contact Us',
    body: 'If you have questions or concerns about this Privacy Policy, please contact us at: info@tadpoletec.com | Tadpole Engineering Consultancy Pvt Ltd, Chennai, Tamil Nadu, India.',
  },
];

export default function PrivacyPage() {
  return (
    <div className="pt-20 bg-white dark:bg-tec-dark-bg min-h-screen">
      <section className="relative bg-tec-navy dark:bg-tec-dark-bg py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-60 h-60 rounded-full border border-tec-cyan" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="tec-tag mb-3 inline-flex">Legal</div>
          <h1 className="text-3xl lg:text-5xl font-black text-white mb-4">Privacy Policy</h1>
          <p className="text-blue-200/70 text-sm">Last updated: April 2025</p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="text-lg font-bold text-tec-navy dark:text-white mb-3">{s.title}</h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
