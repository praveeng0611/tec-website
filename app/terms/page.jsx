export const metadata = {
  title: 'Terms of Use',
  description: 'Terms of Use for Tadpole Engineering Consultancy Pvt Ltd website.',
  alternates: { canonical: 'https://tec.gnosisolabs.com/terms' },
};

const sections = [
  {
    title: '1. Acceptance of Terms',
    body: 'By accessing and using the Tadpole Engineering Consultancy Pvt Ltd ("TECPL", "we", "our", "us") website at tec.gnosisolabs.com, you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our website.',
  },
  {
    title: '2. Use of Website',
    body: 'This website is provided for informational purposes about TECPL\'s products, services, and capabilities. You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others. You must not misuse our website by knowingly introducing viruses, trojans, worms, or other harmful material.',
  },
  {
    title: '3. Intellectual Property',
    body: 'All content on this website — including text, graphics, logos, images, and software — is the property of Tadpole Engineering Consultancy Pvt Ltd or its content suppliers and is protected by Indian and international copyright laws. You may not reproduce, distribute, or create derivative works without our express written permission.',
  },
  {
    title: '4. Accuracy of Information',
    body: 'While we endeavour to keep the information on this website up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics. Any reliance you place on such information is at your own risk.',
  },
  {
    title: '5. Links to Third-Party Websites',
    body: 'Our website may contain links to third-party websites. These links are provided for convenience only. TECPL has no control over the content of those sites and accepts no responsibility for them or for any loss or damage that may arise from your use of them.',
  },
  {
    title: '6. Limitation of Liability',
    body: 'TECPL shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of or inability to use this website or its content, even if TECPL has been advised of the possibility of such damages.',
  },
  {
    title: '7. Governing Law',
    body: 'These Terms of Use are governed by and construed in accordance with the laws of India. Any disputes relating to these terms shall be subject to the exclusive jurisdiction of the courts of Chennai, Tamil Nadu, India.',
  },
  {
    title: '8. Changes to Terms',
    body: 'We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website after any changes constitutes your acceptance of the new terms.',
  },
  {
    title: '9. Contact Us',
    body: 'If you have any questions about these Terms of Use, please contact us at info@tadpoletec.com or write to: Tadpole Engineering Consultancy Pvt Ltd, Chennai, Tamil Nadu, India.',
  },
];

export default function TermsPage() {
  return (
    <div className="pt-20 bg-white dark:bg-tec-dark-bg min-h-screen">
      <section className="relative bg-tec-navy dark:bg-tec-dark-bg py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-60 h-60 rounded-full border border-tec-cyan" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="tec-tag mb-3 inline-flex">Legal</div>
          <h1 className="text-3xl lg:text-5xl font-black text-white mb-4">Terms of Use</h1>
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
