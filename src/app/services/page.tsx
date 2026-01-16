import { Metadata } from 'next';
import AnimatedSection from '@/components/ui/AnimatedSection';
import ServiceCard from '@/components/ui/ServiceCard';
import servicesData from '@/data/services.json';
import Link from 'next/link';
import { ArrowRightIcon } from '@/components/ui/Icons';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore our comprehensive IT and digital marketing services including website design, SEO, social media marketing, paid advertising, and branding.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary-900 via-primary-950 to-secondary-900 pb-20 pt-32">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        
        <div className="container-custom relative z-10">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary-400">
              Our Services
            </span>
            <h1 className="heading-1 mb-6 text-white">
              Comprehensive Digital Solutions
            </h1>
            <p className="body-large text-secondary-300">
              From concept to execution, we provide end-to-end digital services 
              designed to help your business succeed in the online marketplace.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-2">
            {servicesData.services.map((service, index) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                shortDescription={service.shortDescription}
                icon={service.icon}
                features={service.features}
                index={index}
                showFeatures={true}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Services Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <AnimatedSection direction="left">
              <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary-600">
                Why Choose Us
              </span>
              <h2 className="heading-2 mb-6 text-secondary-900">
                Services That Deliver Real Value
              </h2>
              <p className="body-text mb-6">
                We do not just deliver services, we deliver outcomes. Every solution we 
                provide is designed to make a measurable difference to your business, 
                whether that is more leads, better conversions, or stronger brand recognition.
              </p>
              <ul className="space-y-4">
                {[
                  'Tailored strategies for your specific industry and goals',
                  'Transparent pricing with no hidden costs',
                  'Regular reporting so you can track your ROI',
                  'Dedicated account manager for personalised support',
                  'Flexible packages that scale with your business',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary-600" />
                    <span className="text-secondary-700">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=800&h=600&fit=crop" 
                  alt="Digital services team at work" 
                  className="h-full w-full object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection className="mx-auto mb-16 max-w-3xl text-center">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary-600">
              Our Process
            </span>
            <h2 className="heading-2 mb-4 text-secondary-900">
              How We Work
            </h2>
            <p className="body-large">
              A streamlined approach to delivering exceptional results for your business.
            </p>
          </AnimatedSection>

          <div className="relative">
            {/* Connector Line - behind all cards */}
            <div className="absolute left-0 right-0 top-8 hidden h-0.5 lg:block">
              <div className="mx-auto h-full w-3/4 bg-primary-200" />
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  step: '01',
                  title: 'Discovery',
                  description: 'We learn about your business, goals, and target audience.',
                },
                {
                  step: '02',
                  title: 'Strategy',
                  description: 'We develop a tailored plan to achieve your objectives.',
                },
                {
                  step: '03',
                  title: 'Execution',
                  description: 'Our team brings the strategy to life with precision.',
                },
                {
                  step: '04',
                  title: 'Optimisation',
                  description: 'Continuous improvement based on performance data.',
                },
              ].map((item, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="relative text-center">
                    <div className="relative z-10 mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-600 font-display text-2xl font-bold text-white shadow-lg">
                      {item.step}
                    </div>
                    <h3 className="heading-4 mb-2 text-secondary-900">{item.title}</h3>
                    <p className="body-text">{item.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <AnimatedSection className="mx-auto mb-12 max-w-3xl text-center">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary-600">
              Industries We Serve
            </span>
            <h2 className="heading-2 mb-4 text-secondary-900">
              Expertise Across Sectors
            </h2>
            <p className="body-large">
              Our experience spans multiple industries, allowing us to bring cross-sector 
              insights to every project.
            </p>
          </AnimatedSection>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: 'E-Commerce', desc: 'Online stores that convert' },
              { name: 'Professional Services', desc: 'Law firms, accountants, consultants' },
              { name: 'Healthcare', desc: 'Clinics, practitioners, wellness' },
              { name: 'Real Estate', desc: 'Agents, developers, property managers' },
              { name: 'Hospitality', desc: 'Restaurants, hotels, cafes' },
              { name: 'Construction', desc: 'Builders, trades, architects' },
              { name: 'Education', desc: 'Schools, training, tutoring' },
              { name: 'Retail', desc: 'Shops, boutiques, franchises' },
            ].map((industry, index) => (
              <AnimatedSection key={index} delay={index * 0.05}>
                <div className="rounded-xl bg-white p-6 shadow-sm">
                  <h3 className="font-display font-semibold text-secondary-900">{industry.name}</h3>
                  <p className="mt-1 text-sm text-secondary-500">{industry.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="heading-2 mb-4 text-white">
              Ready to Get Started?
            </h2>
            <p className="body-large mb-8 text-primary-100">
              Contact us today to discuss how our services can help grow your business.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-medium text-primary-600 transition-all duration-300 hover:bg-secondary-50 hover:shadow-lg"
            >
              Contact Us
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
