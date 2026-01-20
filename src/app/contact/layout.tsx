import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch',
  description:
    'Contact Core Digital Group for professional IT services and digital marketing solutions. Get a free consultation for your website design, SEO, or digital marketing needs.',
  keywords: ['contact digital agency', 'digital marketing consultation', 'website design quote', 'SEO consultation Australia'],
  openGraph: {
    title: 'Contact Core Digital Group',
    description: 'Get in touch for professional IT services and digital marketing solutions.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://coredigitalgroup.com.au/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
