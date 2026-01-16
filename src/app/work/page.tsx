import { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { ArrowRightIcon } from '@/components/ui/Icons';

export const metadata: Metadata = {
  title: 'Our Work',
  description:
    'View our portfolio of successful projects and case studies showcasing our digital marketing and web development expertise.',
};

export default function WorkPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary-900 via-primary-950 to-secondary-900 pb-20 pt-32">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        
        <div className="container-custom relative z-10">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary-400">
              Our Work
            </span>
            <h1 className="heading-1 mb-6 text-white">
              Projects That Drive Results
            </h1>
            <p className="body-large text-secondary-300">
              Explore our portfolio of successful projects and see how we have 
              helped businesses achieve their digital goals.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { 
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
                title: 'E-Commerce Platform',
                category: 'Web Development'
              },
              { 
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                title: 'Analytics Dashboard',
                category: 'Web Application'
              },
              { 
                image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&h=400&fit=crop',
                title: 'Brand Identity Design',
                category: 'Digital Marketing'
              },
              { 
                image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop',
                title: 'Corporate Website',
                category: 'Web Development'
              },
              { 
                image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop',
                title: 'Mobile App UI',
                category: 'UI/UX Design'
              },
              { 
                image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop',
                title: 'SEO Campaign',
                category: 'Digital Marketing'
              },
            ].map((project, index) => (
              <AnimatedSection key={index} delay={index * 0.05}>
                <div className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-wider text-primary-600">
                      {project.category}
                    </span>
                    <h3 className="font-display text-lg font-semibold text-secondary-900">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What We Deliver Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <AnimatedSection className="mx-auto mb-16 max-w-3xl text-center">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary-600">
              What We Deliver
            </span>
            <h2 className="heading-2 mb-4 text-secondary-900">
              Results You Can Measure
            </h2>
            <p className="body-large">
              Our work focuses on delivering tangible outcomes that make a 
              real difference to your business.
            </p>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                metric: 'Websites',
                label: 'Built & Launched',
                description: 'Custom websites designed to convert visitors into customers.',
              },
              {
                metric: 'Campaigns',
                label: 'Managed',
                description: 'Digital marketing campaigns that drive real results.',
              },
              {
                metric: 'Businesses',
                label: 'Helped Grow',
                description: 'Companies that have benefited from our services.',
              },
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="card text-center">
                  <div className="mb-2 font-display text-4xl font-bold text-primary-600">
                    {item.metric}
                  </div>
                  <div className="mb-4 text-sm font-semibold uppercase tracking-wider text-secondary-500">
                    {item.label}
                  </div>
                  <p className="body-text">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <AnimatedSection direction="left">
              <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary-600">
                Our Approach
              </span>
              <h2 className="heading-2 mb-6 text-secondary-900">
                Every Project is Unique
              </h2>
              <p className="body-text mb-4">
                We do not believe in one-size-fits-all solutions. Each project we undertake 
                is carefully scoped and executed to meet the specific needs and objectives 
                of our clients.
              </p>
              <p className="body-text mb-6">
                From initial consultation through to delivery and beyond, we maintain 
                open communication and involve you at every step of the process.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  'Custom solutions',
                  'Transparent process',
                  'On-time delivery',
                  'Ongoing support',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary-600" />
                    <span className="text-secondary-700">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1531498860502-7c67cf02f657?w=800&h=600&fit=crop" 
                  alt="Team collaboration" 
                  className="h-full w-full object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="heading-2 mb-4 text-white">
              Ready to Start Your Project?
            </h2>
            <p className="body-large mb-8 text-primary-100">
              Let&apos;s discuss how we can bring your vision to life.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-medium text-primary-600 transition-all duration-300 hover:bg-secondary-50 hover:shadow-lg"
            >
              Get in Touch
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
