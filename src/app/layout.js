import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import CustomCursor from '@/components/CustomCursor';
import ScrollProgress from '@/components/ScrollProgress';
import FloatingChatbot from '@/components/FloatingChatbot';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({
  weight: ['300','400','500','600','700','800','900'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata = {
  title: { default: 'WebNex | AI-Powered Digital Agency & Software Development', template: '%s | WebNex' },
  description: 'WebNex is a premium digital innovation agency specializing in AI integration, React & Next.js development, SaaS platforms, and enterprise cloud DevOps.',
  keywords: ['WebNex', 'AI development agency', 'React development', 'Next.js', 'DevOps', 'SaaS platform development', 'Spring Boot APIs', 'Web Design', 'Digital Transformation'],
  authors: [{ name: 'WebNex Team' }],
  creator: 'WebNex',
  publisher: 'WebNex',
  metadataBase: new URL('https://www.webnex.co.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'WebNex | Premium Digital & AI Innovation Agency',
    description: 'Transforming ideas into scalable digital products with cutting-edge tech and AI automation.',
    url: 'https://www.webnex.co.in',
    siteName: 'WebNex',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'WebNex - Digital Agency' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebNex | Premium Digital & AI Innovation Agency',
    description: 'Transforming ideas into scalable digital products with cutting-edge tech and AI automation.',
    images: ['/og-image.png'],
  },
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
  verification: {
    google: 'zlLELJ1wpsui1Hw7dHU1juJMquERfrIrclqIFqYMixI',
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'WebNex',
    image: 'https://www.webnex.co.in/logo.png',
    description: 'AI-powered digital innovation agency delivering React, DevOps, SaaS, AI chatbots, and branding.',
    url: 'https://www.webnex.co.in',
    sameAs: [
      'https://twitter.com/webnex',
      'https://linkedin.com/company/webnex',
      'https://github.com/webnex'
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tech Hub City',
      addressCountry: 'India'
    }
  };

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <CustomCursor />
        <ScrollProgress />
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
          <FloatingChatbot />
        </SmoothScroll>
      </body>
    </html>
  );
}
