import { Section } from '@/components/ui/Section';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import copy from '@/content/copy.json';

export function HomeTestimonial() {
  return (
    <Section className="bg-gradient-to-br from-accent/5 via-white to-accent/5">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
          <Quote size={32} className="text-accent" />
        </div>

        <blockquote className="text-2xl md:text-3xl font-medium text-ink-2 mb-8 leading-relaxed">
          "{copy.testimonial.quote}"
        </blockquote>

        <div className="flex flex-col items-center">
          <p className="font-semibold text-ink-2 text-lg">
            {copy.testimonial.author}
          </p>
          <p className="text-ink-1/60">
            {copy.testimonial.role}
          </p>
        </div>
      </motion.div>
    </Section>
  );
}
