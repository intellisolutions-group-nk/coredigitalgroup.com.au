import { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { ShieldIcon } from '@/components/ui/Icons';
import siteConfig from '@/data/siteConfig.json';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Core Digital Group - how we collect, use, and protect your personal information. Your privacy matters to us.',
  robots: {
    index: true,
    follow: false,
  },
  alternates: {
    canonical: 'https://coredigitalgroup.com.au/privacy-policy',
  },
};

const sections = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'collection', title: 'Information We Collect' },
  { id: 'usage', title: 'How We Use Your Information' },
  { id: 'sharing', title: 'Information Sharing' },
  { id: 'security', title: 'Data Security' },
  { id: 'rights', title: 'Your Rights' },
  { id: 'cookies', title: 'Cookies' },
  { id: 'changes', title: 'Changes to This Policy' },
  { id: 'contact', title: 'Contact Us' },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary-900 via-primary-950 to-secondary-900 pb-16 pt-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        
        <div className="container-custom relative z-10">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
              <ShieldIcon className="h-8 w-8 text-primary-400" />
            </div>
            <h1 className="heading-1 mb-4 text-white">Privacy Policy</h1>
            <p className="body-large text-secondary-300">
              Last updated: January 2026
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-4">
            {/* Sidebar Navigation */}
            <AnimatedSection direction="left" className="lg:col-span-1">
              <div className="sticky top-28 rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-secondary-500">
                  Contents
                </h3>
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="block rounded-lg px-3 py-2 text-sm text-secondary-600 transition-colors hover:bg-primary-50 hover:text-primary-600"
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>
            </AnimatedSection>

            {/* Main Content */}
            <AnimatedSection direction="right" className="lg:col-span-3">
              <div className="space-y-8">
                <div id="introduction" className="scroll-mt-28 rounded-2xl bg-white p-8 shadow-sm">
                  <h2 className="heading-3 mb-4 text-secondary-900">1. Introduction</h2>
                  <p className="body-text">
                    {siteConfig.brand.legalName} (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed 
                    to protecting your privacy. This Privacy Policy explains how we collect, use, 
                    disclose, and safeguard your information when you visit our website or use 
                    our services.
                  </p>
                </div>

                <div id="collection" className="scroll-mt-28 rounded-2xl bg-white p-8 shadow-sm">
                  <h2 className="heading-3 mb-4 text-secondary-900">2. Information We Collect</h2>
                  <p className="body-text mb-6">
                    We may collect information about you in a variety of ways:
                  </p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      {
                        title: 'Personal Data',
                        description: 'Name, email address, phone number, and other contact information you voluntarily provide.',
                      },
                      {
                        title: 'Business Information',
                        description: 'Company name, job title, and business requirements related to our services.',
                      },
                      {
                        title: 'Usage Data',
                        description: 'Information about how you interact with our website, including pages visited and time spent.',
                      },
                      {
                        title: 'Technical Data',
                        description: 'IP address, browser type, device information, and operating system.',
                      },
                    ].map((item, index) => (
                      <div key={index} className="rounded-xl bg-secondary-50 p-4">
                        <h4 className="mb-2 font-display font-semibold text-secondary-900">{item.title}</h4>
                        <p className="text-sm text-secondary-600">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div id="usage" className="scroll-mt-28 rounded-2xl bg-white p-8 shadow-sm">
                  <h2 className="heading-3 mb-4 text-secondary-900">3. How We Use Your Information</h2>
                  <p className="body-text mb-4">
                    We use the information we collect for various purposes:
                  </p>
                  <ul className="space-y-3">
                    {[
                      'To provide and maintain our services',
                      'To respond to your enquiries and requests',
                      'To send you updates and marketing communications (with your consent)',
                      'To improve our website and services',
                      'To comply with legal obligations',
                      'To protect against fraudulent or illegal activity',
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <svg className="h-5 w-5 flex-shrink-0 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-secondary-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div id="sharing" className="scroll-mt-28 rounded-2xl bg-white p-8 shadow-sm">
                  <h2 className="heading-3 mb-4 text-secondary-900">4. Information Sharing</h2>
                  <p className="body-text">
                    We do not sell, trade, or otherwise transfer your personal information 
                    to third parties without your consent, except as required by law or 
                    as necessary to provide our services. We may share information with 
                    service providers who assist us in operating our website and conducting 
                    our business, provided they agree to keep this information confidential.
                  </p>
                </div>

                <div id="security" className="scroll-mt-28 rounded-2xl bg-white p-8 shadow-sm">
                  <h2 className="heading-3 mb-4 text-secondary-900">5. Data Security</h2>
                  <p className="body-text">
                    We implement appropriate technical and organisational measures to 
                    protect your personal information against unauthorised access, 
                    alteration, disclosure, or destruction. However, no method of 
                    transmission over the internet or electronic storage is 100% secure, 
                    and we cannot guarantee absolute security.
                  </p>
                </div>

                <div id="rights" className="scroll-mt-28 rounded-2xl bg-white p-8 shadow-sm">
                  <h2 className="heading-3 mb-4 text-secondary-900">6. Your Rights</h2>
                  <p className="body-text mb-4">
                    You have the following rights regarding your personal data:
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      { icon: '1', text: 'Access the personal information we hold about you' },
                      { icon: '2', text: 'Request correction of inaccurate information' },
                      { icon: '3', text: 'Request deletion of your personal information' },
                      { icon: '4', text: 'Opt out of marketing communications' },
                      { icon: '5', text: 'Lodge a complaint with a supervisory authority' },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3 rounded-lg bg-primary-50 p-3">
                        <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary-600 text-xs font-bold text-white">
                          {item.icon}
                        </span>
                        <span className="text-sm text-secondary-700">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div id="cookies" className="scroll-mt-28 rounded-2xl bg-white p-8 shadow-sm">
                  <h2 className="heading-3 mb-4 text-secondary-900">7. Cookies</h2>
                  <p className="body-text">
                    Our website may use cookies and similar tracking technologies to 
                    enhance your browsing experience. You can choose to disable cookies 
                    through your browser settings, though this may affect certain 
                    functionality of the website.
                  </p>
                </div>

                <div id="changes" className="scroll-mt-28 rounded-2xl bg-white p-8 shadow-sm">
                  <h2 className="heading-3 mb-4 text-secondary-900">8. Changes to This Policy</h2>
                  <p className="body-text">
                    We may update this Privacy Policy from time to time. Any changes 
                    will be posted on this page with an updated revision date. We 
                    encourage you to review this Privacy Policy periodically.
                  </p>
                </div>

                <div id="contact" className="scroll-mt-28 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-700 p-8 text-white shadow-sm">
                  <h2 className="heading-3 mb-4">9. Contact Us</h2>
                  <p className="mb-6 text-primary-100">
                    If you have any questions about this Privacy Policy, please contact us:
                  </p>
                  <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                    <p className="font-semibold">{siteConfig.brand.legalName}</p>
                    <p className="mt-4 text-primary-100">
                      {siteConfig.contact.address.street}<br />
                      {siteConfig.contact.address.suburb} {siteConfig.contact.address.state} {siteConfig.contact.address.postcode}<br />
                      {siteConfig.contact.address.country}
                    </p>
                    <p className="mt-4">
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="font-medium text-white underline decoration-white/50 underline-offset-4 transition-colors hover:decoration-white"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Back Link */}
      <section className="bg-secondary-50 pb-16">
        <div className="container-custom">
          <div className="text-center">
            <Link
              href="/"
              className="inline-flex items-center text-sm font-medium text-secondary-600 transition-colors hover:text-primary-600"
            >
              <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
