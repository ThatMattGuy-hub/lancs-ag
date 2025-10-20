import { Link } from 'react-router-dom';
import { Section } from '@/components/ui/Section';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Snowflake, Shovel, Fence, Droplets, Hammer, Trees, Truck, Square } from 'lucide-react';
import { motion } from 'framer-motion';
import services from '@/content/services.json';

const iconMap = {
  Snowflake,
  Shovel,
  Fence,
  Droplets,
  Hammer,
  Trees,
  Truck,
  Square,
};

export function HomeServices() {
  return (
    <Section className="bg-muted/10">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-ink-2 mb-4"
        >
          Our Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-ink-1/80 max-w-2xl mx-auto"
        >
          Professional contracting services for construction and agriculture across Lancashire
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {services.slice(0, 6).map((service, index) => {
          const Icon = iconMap[service.icon as keyof typeof iconMap];
          
          return (
            <Card key={service.slug} hoverable>
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-accent/10 text-accent">
                    <Icon size={24} />
                  </div>
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.summary}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link to={`/services/${service.slug}`}>Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <Button asChild size="lg" variant="secondary">
          <Link to="/services">View All Services</Link>
        </Button>
      </motion.div>
    </Section>
  );
}
