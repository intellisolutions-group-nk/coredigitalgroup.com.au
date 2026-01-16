import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { ArrowRightIcon, ArrowLeftIcon, CheckIcon } from '@/components/ui/Icons';
import servicesData from '@/data/services.json';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return servicesData.services.map((service) => ({
    slug: service.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.services.find((s) => s.id === slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.services.find((s) => s.id === slug);

  if (!service) {
    notFound();
  }

  // Get other services for the sidebar
  const otherServices = servicesData.services.filter((s) => s.id !== slug);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary-900 via-primary-950 to-secondary-900 pb-20 pt-32">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />

        <div className="container-custom relative z-10">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <Link
              href="/services"
              className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-primary-300 transition-colors hover:text-primary-200"
            >
              <ArrowLeftIcon className="h-4 w-4" />
              All Services
            </Link>
            <h1 className="heading-1 mb-6 text-white">{service.title}</h1>
            <p className="body-large text-secondary-300">{service.shortDescription}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Overview */}
              <AnimatedSection>
                <h2 className="heading-3 mb-4 text-secondary-900">Overview</h2>
                <p className="body-text mb-8">{service.fullDescription}</p>
              </AnimatedSection>

              {/* Features */}
              <AnimatedSection delay={0.1}>
                <h2 className="heading-3 mb-6 text-secondary-900">What We Offer</h2>
                <div className="mb-8 grid gap-4 sm:grid-cols-2">
                  {service.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 rounded-xl bg-secondary-50 p-4"
                    >
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                        <CheckIcon className="h-4 w-4" />
                      </span>
                      <span className="text-secondary-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Benefits */}
              <AnimatedSection delay={0.2}>
                <h2 className="heading-3 mb-6 text-secondary-900">Benefits</h2>
                <div className="mb-8 grid gap-6 sm:grid-cols-2">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="rounded-xl border border-secondary-200 p-6">
                      <h3 className="mb-2 font-display text-lg font-semibold text-secondary-900">
                        {benefit.title}
                      </h3>
                      <p className="text-secondary-600">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Process */}
              <AnimatedSection delay={0.3}>
                <h2 className="heading-3 mb-6 text-secondary-900">Our Process</h2>
                <div className="mb-8">
                  <div className="space-y-4">
                    {service.process.map((step, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary-600 font-display text-lg font-bold text-white">
                          {index + 1}
                        </span>
                        <span className="text-lg text-secondary-700">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* CTA */}
              <AnimatedSection delay={0.4}>
                <div className="rounded-2xl bg-primary-600 p-8 text-center">
                  <h3 className="heading-3 mb-4 text-white">Ready to Get Started?</h3>
                  <p className="mb-6 text-primary-100">
                    Contact us today to discuss how our {service.title.toLowerCase()} services can
                    help your business grow.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-medium text-primary-600 transition-all duration-300 hover:bg-secondary-50"
                  >
                    Get a Free Quote
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <AnimatedSection direction="right">
                <div className="sticky top-24 space-y-6">
                  {/* Quick Contact */}
                  <div className="rounded-2xl bg-secondary-50 p-6">
                    <h3 className="mb-4 font-display text-lg font-semibold text-secondary-900">
                      Quick Enquiry
                    </h3>
                    <p className="mb-4 text-sm text-secondary-600">
                      Have questions about this service? Get in touch with our team.
                    </p>
                    <Link href="/contact" className="btn-primary w-full text-center">
                      Contact Us
                    </Link>
                  </div>

                  {/* Other Services */}
                  <div className="rounded-2xl border border-secondary-200 p-6">
                    <h3 className="mb-4 font-display text-lg font-semibold text-secondary-900">
                      Other Services
                    </h3>
                    <div className="space-y-3">
                      {otherServices.map((s) => (
                        <Link
                          key={s.id}
                          href={`/services/${s.id}`}
                          className="block rounded-lg bg-secondary-50 px-4 py-3 text-sm font-medium text-secondary-700 transition-all hover:bg-primary-50 hover:text-primary-600"
                        >
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
