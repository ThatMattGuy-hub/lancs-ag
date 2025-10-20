import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Phone, Mail, MapPin, Clock, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { generatePageTitle } from '@/lib/seo';
import { contactFormSchema, type ContactFormData, submitContactForm } from '@/lib/forms';
import copy from '@/content/copy.json';
import services from '@/content/services.json';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export function Contact() {
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      honeypot: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setFormStatus('loading');
    setErrorMessage('');

    try {
      await submitContactForm(data);
      setFormStatus('success');
      reset();
    } catch (error) {
      setFormStatus('error');
      setErrorMessage('Failed to send message. Please try again or contact us directly.');
    }
  };

  return (
    <>
      <Helmet>
        <title>{generatePageTitle('Contact Us')}</title>
        <meta name="description" content="Get in touch with Lancashire Ag for a free quote. We respond to all enquiries within 4 working hours." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-bg via-bg to-muted/20 py-16 md:py-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-ink-2 mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-ink-1 leading-relaxed">
              Ready to start your project? Fill out the form below or contact us directly. 
              We respond to all enquiries within 4 working hours during business hours.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Contact Section */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-ink-2 mb-6">
                  Request a Quote
                </h2>

                {formStatus === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-accent/10 border border-accent/20 rounded-2xl p-6 text-center"
                    role="alert"
                    aria-live="polite"
                  >
                    <CheckCircle2 size={48} className="text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-ink-2 mb-2">
                      Thank You!
                    </h3>
                    <p className="text-ink-1 mb-4">
                      We've received your enquiry and will get back to you within 4 working hours.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <a
                        href={`tel:${copy.contact.phone}`}
                        className="text-accent hover:text-accent/80 font-medium"
                      >
                        Call us: {copy.contact.phone}
                      </a>
                      <span className="hidden sm:inline text-muted">|</span>
                      <a
                        href={`mailto:${copy.contact.email}`}
                        className="text-accent hover:text-accent/80 font-medium"
                      >
                        Email: {copy.contact.email}
                      </a>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Honeypot field (hidden) */}
                    <input
                      type="text"
                      {...register('honeypot')}
                      style={{ display: 'none' }}
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-ink-2 mb-2">
                        Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        {...register('name')}
                        className="w-full px-4 py-3 rounded-2xl border border-muted bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Company */}
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-ink-2 mb-2">
                        Company (Optional)
                      </label>
                      <input
                        id="company"
                        type="text"
                        {...register('company')}
                        className="w-full px-4 py-3 rounded-2xl border border-muted bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                        placeholder="Company name"
                      />
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-ink-2 mb-2">
                          Email *
                        </label>
                        <input
                          id="email"
                          type="email"
                          {...register('email')}
                          className="w-full px-4 py-3 rounded-2xl border border-muted bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                          placeholder="your@email.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-ink-2 mb-2">
                          Phone *
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          {...register('phone')}
                          className="w-full px-4 py-3 rounded-2xl border border-muted bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                          placeholder="01234 567890"
                        />
                        {errors.phone && (
                          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Postcode & Service */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="postcode" className="block text-sm font-medium text-ink-2 mb-2">
                          Site Postcode *
                        </label>
                        <input
                          id="postcode"
                          type="text"
                          {...register('postcode')}
                          className="w-full px-4 py-3 rounded-2xl border border-muted bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                          placeholder="PR1 1AA"
                        />
                        {errors.postcode && (
                          <p className="mt-1 text-sm text-red-600">{errors.postcode.message}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-ink-2 mb-2">
                          Service Interest *
                        </label>
                        <select
                          id="service"
                          {...register('service')}
                          className="w-full px-4 py-3 rounded-2xl border border-muted bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service.slug} value={service.title}>
                              {service.title}
                            </option>
                          ))}
                          <option value="Other">Other / Multiple Services</option>
                        </select>
                        {errors.service && (
                          <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-ink-2 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        {...register('message')}
                        rows={6}
                        className="w-full px-4 py-3 rounded-2xl border border-muted bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                        placeholder="Tell us about your project..."
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                      )}
                      <p className="mt-1 text-xs text-ink-1/60">Maximum 1000 characters</p>
                    </div>

                    {/* Error Message */}
                    {formStatus === 'error' && (
                      <div className="bg-red-50 border border-red-200 rounded-2xl p-4 flex items-start space-x-3" role="alert">
                        <AlertCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-red-800">{errorMessage}</p>
                      </div>
                    )}

                    {/* Privacy Notice */}
                    <p className="text-xs text-ink-1/60">
                      By submitting this form, you agree to our{' '}
                      <a href="/privacy" className="text-accent hover:underline">
                        Privacy Policy
                      </a>{' '}
                      and{' '}
                      <a href="/terms" className="text-accent hover:underline">
                        Terms & Conditions
                      </a>
                      .
                    </p>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={formStatus === 'loading'}
                    >
                      {formStatus === 'loading' ? (
                        <>
                          <Loader2 size={20} className="animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        'Send Enquiry'
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-ink-2 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <a
                    href={`tel:${copy.contact.phone}`}
                    className="flex items-start space-x-3 text-ink-1 hover:text-accent transition-colors group"
                  >
                    <Phone size={20} className="text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium group-hover:underline">{copy.contact.phone}</p>
                      <p className="text-sm text-ink-1/60">Call us directly</p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${copy.contact.email}`}
                    className="flex items-start space-x-3 text-ink-1 hover:text-accent transition-colors group"
                  >
                    <Mail size={20} className="text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium group-hover:underline">{copy.contact.email}</p>
                      <p className="text-sm text-ink-1/60">Email enquiries</p>
                    </div>
                  </a>

                  <div className="flex items-start space-x-3 text-ink-1">
                    <MapPin size={20} className="text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">{copy.contact.serviceArea}</p>
                      <p className="text-sm text-ink-1/60">Service area</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 text-ink-1">
                    <Clock size={20} className="text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">{copy.contact.hours}</p>
                      <p className="text-sm text-ink-1/60">Business hours</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-accent/5 border-accent/20">
              <CardContent className="p-6">
                <h3 className="font-semibold text-ink-2 mb-2">Winter Operations</h3>
                <p className="text-sm text-ink-1">
                  {copy.contact.winterNote}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
