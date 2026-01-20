import type { Metadata } from 'next';
import { Outfit, Syne } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
});

const siteUrl = 'https://coredigitalgroup.com.au';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Core Digital Group | IT & Digital Marketing Solutions Australia',
    template: '%s | Core Digital Group',
  },
  description:
    'Core Digital Group provides professional IT services and digital marketing solutions in Australia. Expert website design, SEO, social media marketing, paid advertising, and branding services.',
  keywords: [
    'digital marketing Australia',
    'web design Sydney',
    'SEO services Australia',
    'IT services NSW',
    'website development Australia',
    'social media marketing',
    'paid advertising',
    'Google Ads management',
    'branding agency Australia',
    'digital agency Sydney',
  ],
  authors: [{ name: 'Core Digital Group', url: siteUrl }],
  creator: 'Core Digital Group',
  publisher: 'Core Digital Group Pty Ltd',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: siteUrl,
    siteName: 'Core Digital Group',
    title: 'Core Digital Group | IT & Digital Marketing Solutions Australia',
    description: 'Professional IT services and digital marketing solutions in Australia. Website design, SEO, social media marketing, and more.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Core Digital Group - IT & Digital Marketing Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Core Digital Group | IT & Digital Marketing Solutions',
    description: 'Professional IT services and digital marketing solutions in Australia.',
    images: ['/og-image.png'],
    creator: '@coredigitalau',
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
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'technology',
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Core Digital Group',
  legalName: 'Core Digital Group Pty Ltd',
  url: siteUrl,
  logo: `${siteUrl}/CoreDigitalGroupLogo.png`,
  description: 'Professional IT services and digital marketing solutions in Australia.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Unit 15, 2 Patricia Street',
    addressLocality: 'Mays Hill',
    addressRegion: 'NSW',
    postalCode: '2145',
    addressCountry: 'AU',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'info@coredigitalgroup.com.au',
    contactType: 'customer service',
    availableLanguage: 'English',
  },
  sameAs: [
    'https://www.facebook.com/coredigitalgroup',
    'https://www.linkedin.com/company/coredigitalgroup',
    'https://www.instagram.com/coredigitalgroup',
  ],
  areaServed: {
    '@type': 'Country',
    name: 'Australia',
  },
  serviceType: [
    'Website Design',
    'SEO Services',
    'Digital Marketing',
    'Social Media Marketing',
    'Paid Advertising',
    'Branding',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU" className={`${outfit.variable} ${syne.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
