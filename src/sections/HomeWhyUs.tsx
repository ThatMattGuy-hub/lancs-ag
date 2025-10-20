import { Section } from '@/components/ui/Section';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import copy from '@/content/copy.json';

export function HomeWhyUs() {
  return (
    <Section className="bg-muted/10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-ink-2 mb-6">
            {copy.whyUs.title}
          </h2>
          <p className="text-lg text-ink-1 leading-relaxed mb-8">
            {copy.whyUs.intro}
          </p>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-muted">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <span className="text-2xl">💬</span>
              </div>
              <div>
                <p className="text-sm italic text-ink-1 mb-2">
                  "{copy.testimonial.quote}"
                </p>
                <p className="text-xs font-semibold text-ink-2">
                  {copy.testimonial.author}
                </p>
                <p className="text-xs text-ink-1/60">
                  {copy.testimonial.role}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          {copy.whyUs.points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-start space-x-3 bg-white rounded-2xl p-4 shadow-sm border border-muted"
            >
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                <Check size={14} className="text-accent" />
              </div>
              <p className="text-ink-1 leading-relaxed">{point}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
