import { Link } from 'react-router-dom';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import copy from '@/content/copy.json';

export function HomeLeadCapture() {
  return (
    <Section className="bg-ink-2 text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          Get in touch today for a free, no-obligation quote. We respond to all enquiries within 4 working hours.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
            <Link to="/contact">Request a Quote</Link>
          </Button>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${copy.contact.phone}`}
              className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
            >
              <Phone size={20} />
              <span className="font-medium">{copy.contact.phone}</span>
            </a>
            <span className="text-white/40">or</span>
            <a
              href={`mailto:${copy.contact.email}`}
              className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
            >
              <Mail size={20} />
              <span className="font-medium">{copy.contact.email}</span>
            </a>
          </div>
        </div>

        <p className="text-sm text-white/60">
          {copy.contact.responseTime}
        </p>
      </motion.div>
    </Section>
  );
}
