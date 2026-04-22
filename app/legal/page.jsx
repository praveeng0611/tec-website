export const metadata = {
  title: 'Legal Notice',
  description: 'Legal notice, disclaimers, and intellectual property information for Tadpole Engineering Consultancy.',
  openGraph: {
    title: 'Legal Notice | Tadpole Engineering Consultancy',
    description: 'Legal notice, disclaimers, and intellectual property information for Tadpole Engineering Consultancy.',
  },
  alternates: { canonical: '/legal' },
};

export default function LegalPage() {
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
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Legal Notice</h1>
          <p className="text-lg opacity-80">Last updated: April 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-12">

        {/* Company Information */}
        <div>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--tec-navy)' }}>1. Company Information</h2>
          <div className="rounded-2xl p-6 space-y-2" style={{ background: 'var(--tec-card)', border: '1px solid var(--tec-border)' }}>
            <p style={{ color: 'var(--tec-text)' }}><strong>Company Name:</strong> Tadpole Engineering Consultancy Private Limited</p>
            <p style={{ color: 'var(--tec-text)' }}><strong>CIN:</strong> U74999TN2017PTC117422</p>
            <p style={{ color: 'var(--tec-text)' }}><strong>Registered Office:</strong> Chennai, Tamil Nadu, India</p>
            <p style={{ color: 'var(--tec-text)' }}><strong>Other Offices:</strong> Pune (Maharashtra) · NCR (Delhi-NCR)</p>
            <p style={{ color: 'var(--tec-text)' }}><strong>Email:</strong> info@tadpoletec.com</p>
            <p style={{ color: 'var(--tec-text)' }}><strong>Website:</strong> https://tec.gnosisolabs.com</p>
          </div>
        </div>

        {/* Website Disclaimer */}
        <div>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--tec-navy)' }}>2. Website Disclaimer</h2>
          <div className="space-y-4" style={{ color: 'var(--tec-text-muted)' }}>
            <p>
              The information contained on this website is for general information purposes only. Tadpole Engineering Consultancy Private Limited makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
            </p>
            <p>
              Any reliance you place on such information is strictly at your own risk. In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
            </p>
          </div>
        </div>

        {/* Intellectual Property */}
        <div>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--tec-navy)' }}>3. Intellectual Property</h2>
          <div className="space-y-4" style={{ color: 'var(--tec-text-muted)' }}>
            <p>
              All content on this website, including but not limited to text, graphics, logos, images, audio clips, and software, is the property of Tadpole Engineering Consultancy Private Limited and is protected by applicable Indian and international intellectual property laws.
            </p>
            <p>
              The TEC name, logo, and all related product and service names, design marks, and slogans are the trademarks or service marks of Tadpole Engineering Consultancy Private Limited. You may not use, copy, reproduce, republish, upload, post, transmit, distribute, or modify these trademarks in any way without our prior written permission.
            </p>
          </div>
        </div>

        {/* Certifications & Accreditations */}
        <div>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--tec-navy)' }}>4. Certifications & Standards</h2>
          <p className="mb-4" style={{ color: 'var(--tec-text-muted)' }}>
            References to certifications on this website are current as of the date of publication. Certification status is subject to periodic audits and renewals. For the most current certification status, please contact us directly.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {['ISO 9001:2015', 'IATF 16949:2016', 'ISO 14001:2015', 'ISO 45001:2018', 'ISO/IEC 17025', 'ISO 50001:2018'].map(cert => (
              <div key={cert} className="flex items-center gap-2 rounded-xl px-4 py-3" style={{ background: 'var(--tec-card)', border: '1px solid var(--tec-border)' }}>
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: 'var(--tec-cyan)' }} />
                <span className="text-sm font-semibold" style={{ color: 'var(--tec-navy)' }}>{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Third-Party Links */}
        <div>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--tec-navy)' }}>5. Third-Party Links</h2>
          <p style={{ color: 'var(--tec-text-muted)' }}>
            Through this website you may be able to link to other websites which are not under the control of Tadpole Engineering Consultancy Private Limited. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorsement of the views expressed within them.
          </p>
        </div>

        {/* Limitation of Liability */}
        <div>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--tec-navy)' }}>6. Limitation of Liability</h2>
          <p style={{ color: 'var(--tec-text-muted)' }}>
            To the fullest extent permitted by applicable law, Tadpole Engineering Consultancy Private Limited shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of (or inability to access or use) the website; (ii) any conduct or content of any third party on the website; (iii) any content obtained from the website; and (iv) unauthorized access, use, or alteration of your transmissions or content.
          </p>
        </div>

        {/* Governing Law */}
        <div>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--tec-navy)' }}>7. Governing Law</h2>
          <p style={{ color: 'var(--tec-text-muted)' }}>
            This Legal Notice shall be governed by and construed in accordance with the laws of India. Any disputes relating to this Legal Notice shall be subject to the exclusive jurisdiction of the courts located in Chennai, Tamil Nadu, India.
          </p>
        </div>

        {/* Contact */}
        <div className="rounded-2xl p-8 text-center" style={{ background: 'linear-gradient(135deg, var(--tec-navy), var(--tec-blue))', color: 'white' }}>
          <h2 className="text-2xl font-bold mb-2">Questions?</h2>
          <p className="opacity-80 mb-6">If you have any questions about this Legal Notice, please contact us.</p>
          <a
            href="mailto:info@tadpoletec.com"
            className="inline-block px-8 py-3 rounded-full font-bold text-sm"
            style={{ background: 'var(--tec-cyan)', color: 'var(--tec-navy)' }}
          >
            info@tadpoletec.com
          </a>
        </div>

      </section>
    </main>
  );
}
