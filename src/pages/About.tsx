import { Helmet } from 'react-helmet-async';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Card, CardContent } from '@/components/ui/Card';
import { Check, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { generatePageTitle } from '@/lib/seo';
import copy from '@/content/copy.json';

export function About() {
  return (
    <>
      <Helmet>
        <title>{generatePageTitle('About Us')}</title>
        <meta name="description" content="Learn about Lancashire Ag - a family-run construction and agriculture contractor serving Lancashire with professional, reliable service." />
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
              About Lancashire Ag
            </h1>
            <p className="text-xl text-ink-1 leading-relaxed">
              Professional contractors serving Lancashire's construction and agricultural sectors with 
              reliability, quality, and honest communication.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Story Section */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-ink-2 mb-6">
              Our Story
            </h2>
            <p className="text-lg text-ink-1 leading-relaxed mb-6">
              {copy.about.story}
            </p>
            <p className="text-lg text-ink-1 leading-relaxed">
              Whether you're a farmer needing drainage work, a developer requiring groundworks, or a 
              homeowner planning an extension, we bring the same commitment to quality and safety to every project.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl bg-muted/30 overflow-hidden shadow-xl">
              <div className="w-full h-full flex items-center justify-center text-muted">
                <p className="text-sm">Company Image</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Values Section */}
      <Section className="bg-muted/10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-ink-2 mb-4">
            Our Values
          </h2>
          <p className="text-lg text-ink-1 max-w-2xl mx-auto">
            These principles guide everything we do, from the smallest repair to the largest project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {copy.about.values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card hoverable className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                      <Check size={16} className="text-accent" />
                    </div>
                    <p className="text-ink-1 font-medium leading-relaxed">{value}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Credentials Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
              <Shield size={32} className="text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-ink-2 mb-4">
              Credentials & Compliance
            </h2>
            <p className="text-lg text-ink-1">
              We maintain all necessary certifications and insurance to work safely and compliantly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {copy.about.credentials.map((credential, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start space-x-3 bg-white rounded-2xl p-4 border border-muted"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                  <Check size={14} className="text-accent" />
                </div>
                <p className="text-ink-1 leading-relaxed">{credential}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-ink-2 text-white">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Get in touch to discuss your project. We're here to help with honest advice and competitive quotes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-2xl bg-accent text-white hover:bg-accent/90 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Request a Quote
            </a>
            <a
              href={`tel:${copy.contact.phone}`}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-2xl border-2 border-white text-white hover:bg-white/10 transition-all hover:-translate-y-0.5"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
