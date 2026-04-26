import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SITE_URL = 'https://tec.gnosisolabs.com';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Tadpole Engineering Consultancy — Automotive Component Manufacturing',
    template: '%s | Tadpole Engineering Consultancy',
  },
  description:
    'Tadpole Engineering Consultancy Pvt Ltd (TECPL) — Rapidly growing automotive component manufacturer. Sunroof guide rails, BIW sheet metal, hot stamping, seat frames, wire-formed parts, coating technologies. IATF 16949 | ISO 9001 certified. Chennai · Pune · NCR.',
  keywords: [
    'Tadpole Engineering Consultancy',
    'TECPL',
    'automotive component manufacturer India',
    'sunroof guide rail',
    'BIW sheet metal stamping',
    'hot stamping India',
    'seat frame manufacturer',
    'wire forming automotive',
    'CED coating automotive',
    'IATF 16949 certified',
    'stamping press Chennai',
    'automotive supplier Pune',
  ],
  authors: [{ name: 'Tadpole Engineering Consultancy Pvt Ltd', url: SITE_URL }],
  creator: 'Tadpole Engineering Consultancy Pvt Ltd',
  publisher: 'Tadpole Engineering Consultancy Pvt Ltd',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'Tadpole Engineering Consultancy',
    title: 'Tadpole Engineering Consultancy — Automotive Component Manufacturing',
    description:
      'IATF 16949 certified automotive component manufacturer. Sunroof systems, BIW sheet metal, hot stamping, seat frames & mechanisms, wire-formed parts, CED coating. Plants in Chennai, Pune & NCR.',
    images: [
      {
        url: '/hero-press.jpg',
        width: 1999,
        height: 1333,
        alt: 'Tadpole Engineering — Stamping Press Line',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tadpole Engineering Consultancy — Automotive Component Manufacturing',
    description:
      'IATF 16949 certified automotive manufacturer. Sunroof guide rails, hot stamping, BIW sheet metal, seat frames, wire-formed parts. Chennai · Pune · NCR.',
    images: ['/hero-press.jpg'],
    creator: '@tadpole_tec',
    site: '@tadpole_tec',
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: '',   // Add Google Search Console verification ID when available
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0A1525' },
  ],
};

/* JSON-LD Structured Data */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Tadpole Engineering Consultancy Pvt Ltd',
      alternateName: ['TECPL', 'TEC', 'Tadpole Engineering'],
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo-blue.svg`,
        width: 60,
        height: 60,
      },
      image: `${SITE_URL}/hero-press.jpg`,
      description:
        'Rapidly growing Automotive component manufacturing organization founded by seasoned industry professionals with over 20 years of experience. IATF 16949 and ISO 9001 certified.',
      foundingDate: '2017',
      numberOfEmployees: { '@type': 'QuantitativeValue', value: 240 },
      slogan: 'Make Way for Your Leap',
      contactPoint: [
        {
          '@type': 'ContactPoint',
          email: 'info@tadpoletec.com',
          contactType: 'customer service',
          availableLanguage: ['English', 'Hindi'],
        },
      ],
      address: [
        {
          '@type': 'PostalAddress',
          addressLocality: 'Chennai',
          addressRegion: 'Tamil Nadu',
          addressCountry: 'IN',
        },
        {
          '@type': 'PostalAddress',
          addressLocality: 'Pune',
          addressRegion: 'Maharashtra',
          addressCountry: 'IN',
        },
        {
          '@type': 'PostalAddress',
          addressLocality: 'NCR',
          addressRegion: 'Delhi',
          addressCountry: 'IN',
        },
      ],
      sameAs: [
        'https://www.linkedin.com/company/tadpoletec/',
        'https://x.com/tadpole_tec',
        'https://www.instagram.com/tadpole_tec',
        'https://youtube.com/@tadpoletec',
        'https://www.tadpoletec.com',
      ],
      hasCredential: [
        { '@type': 'EducationalOccupationalCredential', name: 'IATF 16949' },
        { '@type': 'EducationalOccupationalCredential', name: 'ISO 9001' },
        { '@type': 'EducationalOccupationalCredential', name: 'ISO 14001' },
        { '@type': 'EducationalOccupationalCredential', name: 'ISO 45001' },
        { '@type': 'EducationalOccupationalCredential', name: 'ISO 28000' },
        { '@type': 'EducationalOccupationalCredential', name: 'EcoVadis Certified' },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Tadpole Engineering Consultancy',
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect for Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preload hero image for LCP */}
        <link rel="preload" as="image" href="/hero-press.webp" type="image/webp" />
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
