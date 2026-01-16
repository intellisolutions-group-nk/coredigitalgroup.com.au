import { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { ArrowRightIcon, ZapIcon, HeartIcon, ShieldIcon, GlobeIcon } from '@/components/ui/Icons';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Core Digital Group - your trusted partner for IT services and digital marketing solutions in Australia.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary-900 via-primary-950 to-secondary-900 pb-20 pt-32">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        
        <div className="container-custom relative z-10">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary-400">
              About Us
            </span>
            <h1 className="heading-1 mb-6 text-white">
              Your Digital Growth Partner
            </h1>
            <p className="body-large text-secondary-300">
              We are a team of passionate professionals dedicated to helping 
              Australian businesses thrive in the digital world.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <AnimatedSection direction="left">
              <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary-600">
                Who We Are
              </span>
              <h2 className="heading-2 mb-6 text-secondary-900">
                Driven by Innovation, Focused on Results
              </h2>
              <p className="body-text mb-4">
                Core Digital Group is an Australian-based IT and digital marketing 
                company committed to delivering exceptional solutions that help 
                businesses succeed online.
              </p>
              <p className="body-text mb-4">
                We combine technical expertise with creative thinking to create 
                digital experiences that engage audiences and drive measurable 
                business outcomes.
              </p>
              <p className="body-text">
                Our approach is built on understanding your unique business needs 
                and developing tailored strategies that align with your goals.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <div className="aspect-square overflow-hidden rounded-3xl">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop" 
                    alt="Core Digital Group team" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-2xl bg-primary-100" />
                <div className="absolute -right-4 -top-4 h-12 w-12 rounded-xl bg-accent-100" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <AnimatedSection className="mx-auto mb-16 max-w-3xl text-center">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary-600">
              Our Values
            </span>
            <h2 className="heading-2 mb-4 text-secondary-900">
              What Guides Us
            </h2>
            <p className="body-large">
              The principles that shape our work and relationships with clients.
            </p>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: ZapIcon,
                title: 'Excellence',
                description: 'We strive for the highest quality in everything we deliver.',
              },
              {
                icon: ShieldIcon,
                title: 'Integrity',
                description: 'Honest communication and transparent practices guide our work.',
              },
              {
                icon: HeartIcon,
                title: 'Partnership',
                description: 'We treat your success as our success, working together as partners.',
              },
              {
                icon: GlobeIcon,
                title: 'Innovation',
                description: 'Staying ahead with the latest digital trends and technologies.',
              },
            ].map((value, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="card h-full text-center">
                  <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                    <value.icon className="h-7 w-7" />
                  </div>
                  <h3 className="heading-4 mb-2 text-secondary-900">{value.title}</h3>
                  <p className="body-text">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <AnimatedSection className="mb-12 text-center">
              <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary-600">
                Our Mission
              </span>
              <h2 className="heading-2 mb-6 text-secondary-900">
                Empowering Australian Businesses
              </h2>
            </AnimatedSection>
            
            <div className="grid gap-8 md:grid-cols-2">
              <AnimatedSection delay={0.1}>
                <div className="rounded-2xl border border-secondary-200 p-8">
                  <h3 className="heading-4 mb-4 text-secondary-900">Our Vision</h3>
                  <p className="body-text">
                    To be the leading digital partner for Australian businesses, helping them 
                    navigate the digital landscape with confidence and achieve sustainable growth 
                    through innovative solutions.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <div className="rounded-2xl border border-secondary-200 p-8">
                  <h3 className="heading-4 mb-4 text-secondary-900">Our Purpose</h3>
                  <p className="body-text">
                    We exist to bridge the gap between traditional business and digital success. 
                    Every client we work with receives personalised attention and strategies 
                    tailored to their unique needs.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <AnimatedSection direction="left" className="order-2 lg:order-1">
              <div className="relative">
                <div className="rounded-2xl bg-secondary-900 p-8 text-white">
                  <h3 className="heading-3 mb-6">Our Approach</h3>
                  <ul className="space-y-4">
                    {[
                      'Understanding your business objectives',
                      'Developing tailored digital strategies',
                      'Implementing with precision and care',
                      'Measuring and optimising for results',
                      'Providing ongoing support and guidance',
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary-600 text-sm font-bold">
                          {index + 1}
                        </span>
                        <span className="text-secondary-200">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" className="order-1 lg:order-2">
              <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary-600">
                Our Approach
              </span>
              <h2 className="heading-2 mb-6 text-secondary-900">
                Client-Centred Solutions
              </h2>
              <p className="body-text mb-4">
                Every business is unique, and so should be its digital strategy. 
                We take the time to understand your specific challenges, 
                opportunities, and goals before crafting solutions.
              </p>
              <p className="body-text mb-6">
                Our client-centred approach ensures that every project we 
                undertake is aligned with your vision and delivers tangible 
                value to your business.
              </p>
              <Link href="/contact" className="btn-primary">
                Work With Us
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection className="mx-auto mb-12 max-w-3xl text-center">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary-600">
              Our Experience
            </span>
            <h2 className="heading-2 mb-4 text-secondary-900">
              Trusted by Businesses Across Industries
            </h2>
            <p className="body-large">
              We have worked with businesses of all sizes, from startups to established 
              enterprises, across various industries throughout Australia.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              'Retail & E-Commerce',
              'Professional Services',
              'Healthcare & Wellness',
              'Hospitality & Tourism',
              'Real Estate',
              'Construction & Trades',
              'Education & Training',
              'Technology & SaaS',
            ].map((industry, index) => (
              <AnimatedSection key={index} delay={index * 0.05}>
                <div className="rounded-xl bg-secondary-50 px-6 py-4 text-center font-medium text-secondary-700">
                  {industry}
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
              Let&apos;s Create Something Great Together
            </h2>
            <p className="body-large mb-8 text-primary-100">
              Ready to transform your digital presence? Get in touch with our team.
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
