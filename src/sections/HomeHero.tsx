import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Shield, FileCheck, Award } from 'lucide-react';
import copy from '@/content/copy.json';

const trustBadges = [
  { icon: Shield, text: 'Fully Insured' },
  { icon: FileCheck, text: 'RAMS Prepared' },
  { icon: Award, text: 'CPCS Certified' },
];

export function HomeHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Hero Image Background */}
      <div className="absolute inset-0">
        <img 
          src="/Hero.jpg" 
          alt="Lancashire Ag - Construction and Agriculture Contractor" 
          className="w-full h-full object-cover"
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink-2/80 via-ink-2/60 to-ink-2/40" />
      </div>

      <Container>
        <div className="relative py-20 md:py-28 lg:py-36">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance drop-shadow-lg"
            >
              {copy.hero.headline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white/95 mb-8 max-w-2xl text-balance drop-shadow-md"
            >
              {copy.hero.subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Button asChild size="lg">
                <Link to="/contact">{copy.hero.primaryCTA}</Link>
              </Button>
              <Button asChild variant="secondary" size="lg" className="bg-white text-ink-2 hover:bg-white/90">
                <a href={`tel:${copy.contact.phone}`}>{copy.hero.secondaryCTA}</a>
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-6"
            >
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={badge.text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="flex items-center space-x-2 text-white/90 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
                >
                  <badge.icon size={20} className="text-accent" />
                  <span className="text-sm font-medium">{badge.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
