'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Modal from '@/components/ui/Modal';
import { MailIcon, MapPinIcon } from '@/components/ui/Icons';
import siteConfig from '@/data/siteConfig.json';

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  phone: yup.string(),
  subject: yup.string().required('Subject is required'),
  message: yup.string().required('Message is required').min(10, 'Message must be at least 10 characters'),
});

type FormData = yup.InferType<typeof schema>;

export default function ContactPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Form submitted:', data);
    setIsSubmitting(false);
    setIsModalOpen(true);
    reset();
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary-900 via-primary-950 to-secondary-900 pb-20 pt-32">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        
        <div className="container-custom relative z-10">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary-400">
              Contact Us
            </span>
            <h1 className="heading-1 mb-6 text-white">
              Let&apos;s Start a Conversation
            </h1>
            <p className="body-large text-secondary-300">
              Ready to discuss your project? Get in touch and let us help you 
              achieve your digital goals.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact Information */}
            <AnimatedSection direction="left" className="lg:col-span-1">
              <div className="space-y-8">
                <div>
                  <h2 className="heading-3 mb-6 text-secondary-900">Get in Touch</h2>
                  <p className="body-text">
                    We would love to hear from you. Reach out to us using any of 
                    the methods below or fill out the contact form.
                  </p>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                    <MailIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-secondary-900">
                      Email
                    </h3>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-primary-600 transition-colors hover:text-primary-700"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                    <MapPinIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-secondary-900">
                      Office
                    </h3>
                    <address className="not-italic text-secondary-600">
                      {siteConfig.contact.address.street}
                      <br />
                      {siteConfig.contact.address.suburb} {siteConfig.contact.address.state}{' '}
                      {siteConfig.contact.address.postcode}
                      <br />
                      {siteConfig.contact.address.country}
                    </address>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection direction="right" className="lg:col-span-2">
              <div className="rounded-2xl bg-secondary-50 p-8 sm:p-10">
                <h3 className="heading-3 mb-6 text-secondary-900">Send Us a Message</h3>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-secondary-700"
                      >
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        {...register('name')}
                        className={`input-field ${errors.name ? 'border-red-500' : ''}`}
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-secondary-700"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        {...register('email')}
                        className={`input-field ${errors.email ? 'border-red-500' : ''}`}
                        placeholder="you@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-medium text-secondary-700"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        {...register('phone')}
                        className="input-field"
                        placeholder="Your phone number"
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label
                        htmlFor="subject"
                        className="mb-2 block text-sm font-medium text-secondary-700"
                      >
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        {...register('subject')}
                        className={`input-field ${errors.subject ? 'border-red-500' : ''}`}
                        placeholder="How can we help?"
                      />
                      {errors.subject && (
                        <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-secondary-700"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      {...register('message')}
                      className={`textarea-field ${errors.message ? 'border-red-500' : ''}`}
                      placeholder="Tell us about your project..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <AnimatedSection className="mx-auto mb-12 max-w-3xl text-center">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary-600">
              FAQ
            </span>
            <h2 className="heading-2 mb-4 text-secondary-900">
              Common Questions
            </h2>
          </AnimatedSection>

          <div className="mx-auto max-w-3xl">
            <div className="space-y-4">
              {[
                {
                  question: 'How quickly can you start on my project?',
                  answer: 'We typically begin new projects within 1-2 weeks of signing off on the proposal. For urgent requirements, we can often accommodate faster timelines.',
                },
                {
                  question: 'What is your typical project timeline?',
                  answer: 'Project timelines vary based on scope. A basic website takes 2-4 weeks, while more complex projects may take 6-12 weeks. We provide detailed timelines during the proposal stage.',
                },
                {
                  question: 'Do you offer ongoing support after project completion?',
                  answer: 'Yes, we offer various support and maintenance packages to ensure your digital assets continue to perform optimally after launch.',
                },
                {
                  question: 'Can you work with my existing branding?',
                  answer: 'Absolutely. We are experienced in working with existing brand guidelines and can ensure all digital assets align with your established identity.',
                },
              ].map((faq, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="rounded-xl bg-white p-6 shadow-sm">
                    <h3 className="font-display text-lg font-semibold text-secondary-900">
                      {faq.question}
                    </h3>
                    <p className="mt-2 text-secondary-600">{faq.answer}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Message Sent!"
        message="Thank you for contacting us. We will get back to you shortly."
      />
    </>
  );
}
