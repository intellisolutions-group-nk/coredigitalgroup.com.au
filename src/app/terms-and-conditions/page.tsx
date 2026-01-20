import { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { ShieldIcon } from '@/components/ui/Icons';
import siteConfig from '@/data/siteConfig.json';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and Conditions for Core Digital Group - the rules and guidelines for using our website and services.',
  robots: {
    index: true,
    follow: false,
  },
  alternates: {
    canonical: 'https://coredigitalgroup.com.au/terms-and-conditions',
  },
};

const sections = [
  { id: 'agreement', title: 'Agreement to Terms' },
  { id: 'use', title: 'Use of Website' },
  { id: 'ip', title: 'Intellectual Property' },
  { id: 'services', title: 'Services' },
  { id: 'payment', title: 'Payment Terms' },
  { id: 'liability', title: 'Limitation of Liability' },
  { id: 'disclaimer', title: 'Disclaimer' },
  { id: 'indemnification', title: 'Indemnification' },
  { id: 'governing', title: 'Governing Law' },
  { id: 'changes', title: 'Changes to Terms' },
  { id: 'contact', title: 'Contact Us' },
];

export default function TermsAndConditionsPage() {
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
            <h1 className="heading-1 mb-4 text-white">Terms & Conditions</h1>
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
                <div id="agreement" className="scroll-mt-28 rounded-2xl bg-white p-8 shadow-sm">
                  <h2 className="heading-3 mb-4 text-secondary-900">1. Agreement to Terms</h2>
                  <p className="body-text">
                    By accessing or using the website of {siteConfig.brand.legalName} 
                    (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), you agree to be bound by these Terms and 
                    Conditions. If you disagree with any part of these terms, you may 
                    not access the website or use our services.
                  </p>
                </div>

                <div id="use" className="scroll-mt-28 rounded-2xl bg-white p-8 shadow-sm">
                  <h2 className="heading-3 mb-4 text-secondary-900">2. Use of Website</h2>
                  <p className="body-text mb-4">
                    You may use our website only for lawful purposes and in accordance 
                    with these Terms. You agree not to:
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Use the website in any way that violates any applicable local, state, national, or international law or regulation',
                      'Attempt to gain unauthorised access to any portion of the website or any systems or networks connected to the website',
                      'Use any device, software, or routine that interferes with the proper working of the website',
                      'Introduce any viruses, trojan horses, worms, or other material that is malicious or technologically harmful',
                      'Collect or harvest any personal information from the website',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-xs font-semibold text-primary-600">
                          {index + 1}
                        </span>
                        <span className="text-secondary-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div id="ip" className="scroll-mt-28 rounded-2xl bg-white p-8 shadow-sm">
                  <h2 className="heading-3 mb-4 text-secondary-900">3. Intellectual Property</h2>
                  <p className="body-text">
                    The website and its entire contents, features, and functionality 
                    (including but not limited to all information, software, text, 
                    displays, images, graphics, and design) are owned by {siteConfig.brand.legalName} 
                    and are protected by Australian and international copyright, 
                    trademark, patent, trade secret, and other intellectual property 
                    or proprietary rights laws.
                  </p>
                </div>

                <div id="services" className="scroll-mt-28 rounded-2xl bg-white p-8 shadow-sm">
                  <h2 className="heading-3 mb-4 text-secondary-900">4. Services</h2>
                  <p className="body-text">
                    We provide IT services and digital marketing solutions as described 
                    on our website. Specific terms for individual services will be 
                    outlined in separate service agreements. We reserve the right to 
                    modify or discontinue any service at any time without notice.
                  </p>
                </div>

                <div id="payment" className="scroll-mt-28 rounded-2xl bg-white p-8 shadow-sm">
                  <h2 className="heading-3 mb-4 text-secondary-900">5. Payment Terms</h2>
                  <p className="body-text">
                    Payment terms for our services will be specified in individual 
                    service agreements or quotes. Unless otherwise stated, all prices 
                    are in Australian Dollars (AUD) and are exclusive of GST. Payment 
                    is due within the timeframe specified in your invoice.
                  </p>
                </div>

                <div id="liability" className="scroll-mt-28 rounded-2xl bg-white p-8 shadow-sm">
                  <h2 className="heading-3 mb-4 text-secondary-900">6. Limitation of Liability</h2>
                  <p className="body-text">
                    To the fullest extent permitted by law, {siteConfig.brand.legalName} 
                    shall not be liable for any indirect, incidental, special, 
                    consequential, or punitive damages, including without limitation, 
                    loss of profits, data, use, goodwill, or other intangible losses, 
                    resulting from your access to or use of or inability to access or 
                    use the website or services.
                  </p>
                </div>

                <div id="disclaimer" className="scroll-mt-28 rounded-2xl bg-white p-8 shadow-sm">
                  <h2 className="heading-3 mb-4 text-secondary-900">7. Disclaimer</h2>
                  <p className="body-text">
                    The information on this website is provided for general information 
                    purposes only. While we endeavour to keep the information up to date 
                    and correct, we make no representations or warranties of any kind, 
                    express or implied, about the completeness, accuracy, reliability, 
                    suitability, or availability of the website or the information, 
                    products, services, or related graphics contained on the website.
                  </p>
                </div>

                <div id="indemnification" className="scroll-mt-28 rounded-2xl bg-white p-8 shadow-sm">
                  <h2 className="heading-3 mb-4 text-secondary-900">8. Indemnification</h2>
                  <p className="body-text">
                    You agree to defend, indemnify, and hold harmless {siteConfig.brand.legalName} 
                    and its officers, directors, employees, and agents from and against 
                    any claims, liabilities, damages, judgments, awards, losses, costs, 
                    expenses, or fees (including reasonable legal fees) arising out of 
                    or relating to your violation of these Terms and Conditions or your 
                    use of the website.
                  </p>
                </div>

                <div id="governing" className="scroll-mt-28 rounded-2xl bg-white p-8 shadow-sm">
                  <h2 className="heading-3 mb-4 text-secondary-900">9. Governing Law</h2>
                  <p className="body-text">
                    These Terms and Conditions shall be governed by and construed in 
                    accordance with the laws of {siteConfig.brand.stateOfRegistration}, 
                    {siteConfig.brand.country}, without regard to its conflict of law 
                    provisions. Any disputes arising under or in connection with these 
                    terms shall be subject to the exclusive jurisdiction of the courts 
                    of {siteConfig.brand.stateOfRegistration}.
                  </p>
                </div>

                <div id="changes" className="scroll-mt-28 rounded-2xl bg-white p-8 shadow-sm">
                  <h2 className="heading-3 mb-4 text-secondary-900">10. Changes to Terms</h2>
                  <p className="body-text">
                    We reserve the right to modify or replace these Terms and Conditions 
                    at any time. If a revision is material, we will provide at least 
                    30 days notice prior to any new terms taking effect. What constitutes 
                    a material change will be determined at our sole discretion.
                  </p>
                </div>

                <div id="contact" className="scroll-mt-28 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-700 p-8 text-white shadow-sm">
                  <h2 className="heading-3 mb-4">11. Contact Us</h2>
                  <p className="mb-6 text-primary-100">
                    If you have any questions about these Terms and Conditions, please contact us:
                  </p>
                  <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                    <p className="font-semibold">{siteConfig.brand.legalName}</p>
                    <p className="mt-2 text-primary-100">ACN: {siteConfig.brand.acn}</p>
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
