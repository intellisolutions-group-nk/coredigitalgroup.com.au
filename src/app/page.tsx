'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import ServiceCard from '@/components/ui/ServiceCard';
import { ArrowRightIcon, SparklesIcon, ZapIcon, ShieldIcon, HeartIcon } from '@/components/ui/Icons';
import servicesData from '@/data/services.json';
import siteConfig from '@/data/siteConfig.json';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-secondary-900 via-primary-950 to-secondary-900 pt-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-600/20 blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, 80, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute -right-40 bottom-20 h-[500px] w-[500px] rounded-full bg-accent-600/20 blur-3xl"
          />
        </div>

        <div className="container-custom relative z-10 flex min-h-screen items-center py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-2"
              >
                <SparklesIcon className="h-4 w-4 text-primary-400" />
                <span className="text-sm font-medium text-primary-300">
                  IT & Digital Marketing Solutions
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="heading-1 mb-6 text-white"
              >
                Grow Your Business{' '}
                <span className="gradient-text">Digitally</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="body-large mb-8 text-secondary-300"
              >
                We help Australian businesses succeed online with professional 
                website design, digital marketing, and SEO services that deliver 
                measurable results.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
              >
                <Link href="/contact" className="btn-primary">
                  Start Your Project
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
                <Link href="/services" className="btn-secondary border-white/20 text-white hover:bg-white hover:text-secondary-900">
                  View Our Services
                </Link>
              </motion.div>
            </div>

            {/* Hero Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                {/* Main Card */}
                <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="h-3 w-3 rounded-full bg-red-400" />
                      <div className="h-3 w-3 rounded-full bg-yellow-400" />
                      <div className="h-3 w-3 rounded-full bg-green-400" />
                    </div>
                    <div className="space-y-3">
                      <div className="h-4 w-3/4 rounded bg-white/20" />
                      <div className="h-4 w-full rounded bg-white/10" />
                      <div className="h-4 w-2/3 rounded bg-white/15" />
                      <div className="h-20 w-full rounded-lg bg-gradient-to-r from-primary-500/30 to-accent-500/30" />
                      <div className="grid grid-cols-3 gap-3">
                        <div className="h-16 rounded bg-white/10" />
                        <div className="h-16 rounded bg-white/15" />
                        <div className="h-16 rounded bg-white/10" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Cards */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -right-8 -top-8 rounded-xl bg-white p-4 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 text-green-600">
                      <ZapIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-secondary-500">Performance</p>
                      <p className="font-semibold text-secondary-900">Optimised</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-4 -left-8 rounded-xl bg-white p-4 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
                      <ShieldIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-secondary-500">Security</p>
                      <p className="font-semibold text-secondary-900">Protected</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

      </section>

      {/* Services Overview Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection className="mx-auto mb-16 max-w-3xl text-center">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary-600">
              Our Services
            </span>
            <h2 className="heading-2 mb-4 text-secondary-900">
              Everything You Need to Succeed Online
            </h2>
            <p className="body-large">
              From website design to digital marketing, we provide comprehensive 
              solutions to help your business thrive in the digital landscape.
            </p>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {servicesData.services.map((service, index) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                shortDescription={service.shortDescription}
                icon={service.icon}
                index={index}
              />
            ))}
          </div>

          <AnimatedSection className="mt-12 text-center" delay={0.4}>
            <Link href="/services" className="btn-secondary">
              View All Services
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>


      {/* Why Choose Us Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <AnimatedSection direction="left">
              <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary-600">
                Why Choose Us
              </span>
              <h2 className="heading-2 mb-6 text-secondary-900">
                Your Partner in Digital Success
              </h2>
              <p className="body-large mb-8">
                We combine creativity with technical expertise to deliver 
                solutions that not only look great but also drive real 
                business results.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: ZapIcon,
                    title: 'Results-Driven Approach',
                    description: 'Every strategy we implement is focused on achieving measurable outcomes for your business.',
                  },
                  {
                    icon: HeartIcon,
                    title: 'Dedicated Support',
                    description: 'We provide ongoing support and guidance to ensure your digital presence continues to grow.',
                  },
                  {
                    icon: ShieldIcon,
                    title: 'Transparent Process',
                    description: 'Clear communication and regular updates keep you informed throughout every project.',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-display text-lg font-semibold text-secondary-900">
                        {item.title}
                      </h3>
                      <p className="text-secondary-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" className="relative">
              <div className="relative">
                <div className="aspect-square overflow-hidden rounded-3xl">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=800&fit=crop" 
                    alt="Digital team collaboration" 
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-2xl bg-primary-100" />
                <div className="absolute -right-4 -top-4 h-16 w-16 rounded-xl bg-accent-100" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection className="mx-auto mb-12 max-w-3xl text-center">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary-600">
              Testimonials
            </span>
            <h2 className="heading-2 text-secondary-900">
              What Our Clients Say
            </h2>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote: 'Core Digital Group transformed our online presence completely. Our website traffic increased by 150% within three months.',
                name: 'James Mitchell',
                role: 'Managing Director',
              },
              {
                quote: 'Professional, responsive, and results-driven. They understood our business needs and delivered beyond expectations.',
                name: 'Sarah Thompson',
                role: 'Marketing Manager',
              },
              {
                quote: 'The team is fantastic to work with. They made the whole process seamless and our new website looks incredible.',
                name: 'Michael Chen',
                role: 'Business Owner',
              },
            ].map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="card h-full">
                  <div className="mb-4 text-4xl text-primary-300">&ldquo;</div>
                  <p className="body-text mb-6 italic">{testimonial.quote}</p>
                  <div className="mt-auto">
                    <p className="font-display font-semibold text-secondary-900">{testimonial.name}</p>
                    <p className="text-sm text-secondary-500">{testimonial.role}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-primary-600 py-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        
        <div className="container-custom relative z-10">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="heading-2 mb-4 text-white">
              Ready to Grow Your Business?
            </h2>
            <p className="body-large mb-8 text-primary-100">
              Get in touch with our team today and discover how we can help 
              you achieve your digital goals.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-medium text-primary-600 transition-all duration-300 hover:bg-secondary-50 hover:shadow-lg"
              >
                Start Your Project
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-8 py-4 text-base font-medium text-white transition-all duration-300 hover:bg-white/10"
              >
                {siteConfig.contact.email}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
