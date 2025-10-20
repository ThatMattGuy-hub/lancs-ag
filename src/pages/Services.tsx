import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Snowflake, Shovel, Fence, Droplets, Hammer, Trees, Truck, Square } from 'lucide-react';
import { motion } from 'framer-motion';
import { generatePageTitle } from '@/lib/seo';
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

const categories = [
  { id: 'all', label: 'All Services' },
  { id: 'construction', label: 'Construction' },
  { id: 'agriculture', label: 'Agriculture' },
];

export function Services() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices = activeCategory === 'all'
    ? services
    : services.filter(s => s.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>{generatePageTitle('Services')}</title>
        <meta name="description" content="Professional construction and agriculture contracting services including groundworks, fencing, drainage, demolition, and more." />
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
              Our Services
            </h1>
            <p className="text-lg text-ink-1 leading-relaxed">
              We provide comprehensive contracting services for construction and agricultural projects across Lancashire. 
              Every job is completed to the highest standards with full insurance and safety compliance.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Services Grid */}
      <Section>
        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-accent text-white shadow-md'
                  : 'bg-white border border-muted text-ink-1 hover:border-accent'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            
            return (
              <Card key={service.slug} hoverable>
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/10 text-accent">
                      <Icon size={28} />
                    </div>
                    <Badge variant="outline" className="capitalize">
                      {service.category}
                    </Badge>
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.summary}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.deliverables.slice(0, 3).map((deliverable, idx) => (
                      <li key={idx} className="text-sm text-ink-1 flex items-start">
                        <span className="text-accent mr-2">•</span>
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link to={`/services/${service.slug}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-muted/10">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-ink-2 mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-lg text-ink-1 mb-8">
            We're happy to discuss bespoke requirements and provide tailored solutions for your project.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
