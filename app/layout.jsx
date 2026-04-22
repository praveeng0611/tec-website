import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Tadpole Engineering Company — Innovate. Enhance. Persist.',
  description: 'Tadpole Engineering Consultancy (TEC) — Global supplier for automobile components. Sheet metal stamping, welding, painting & surface coating solutions.',
  keywords: ['Tadpole Engineering', 'TEC', 'sheet metal stamping', 'automotive components', 'hot stamping', 'welding', 'manufacturing India'],
  openGraph: {
    title: 'Tadpole Engineering Company — Manufacturing Solutions',
    description: 'Global supplier for automobile components. Precision in Performance. Commitment to Quality.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
