import { Section } from '@/components/ui/Section';
import { Card, CardContent } from '@/components/ui/Card';
import { Shield, MapPin, FileCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import copy from '@/content/copy.json';

const iconMap = {
  Shield,
  MapPin,
  FileCheck,
};

export function HomeHighlights() {
  return (
    <Section className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {copy.highlights.map((highlight, index) => {
          const Icon = iconMap[highlight.icon as keyof typeof iconMap];
          
          return (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hoverable className="h-full group">
                <CardContent className="p-6">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-accent/10 text-accent mb-4"
                  >
                    <Icon size={24} />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-ink-2 mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-ink-1/80 leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
