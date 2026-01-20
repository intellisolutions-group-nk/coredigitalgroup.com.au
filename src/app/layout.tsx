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

export const metadata: Metadata = {
  title: {
    default: 'Core Digital Group | IT & Digital Marketing Solutions',
    template: '%s | Core Digital Group',
  },
  description:
    'Core Digital Group provides professional IT services and digital marketing solutions in Australia. Website design, SEO, social media marketing, and more.',
  keywords: [
    'digital marketing',
    'web design',
    'SEO',
    'Australia',
    'IT services',
    'website development',
  ],
  authors: [{ name: 'Core Digital Group' }],
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: 'Core Digital Group',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU" className={`${outfit.variable} ${syne.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
