import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Check, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { generatePageTitle, generateServiceSchema } from '@/lib/seo';
import services from '@/content/services.json';

export function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const schema = generateServiceSchema({
    name: service.title,
    description: service.summary,
  });

  return (
    <>
      <Helmet>
        <title>{generatePageTitle(service.title)}</title>
        <meta name="description" content={service.summary} />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-br from-bg via-bg to-muted/20 py-12 md:py-16">
        <Container>
          <Link
            to="/services"
            className="inline-flex items-center space-x-2 text-ink-1 hover:text-accent transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            <span>Back to Services</span>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="accent" className="mb-4 capitalize">
              {service.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-ink-2 mb-4">
              {service.title}
            </h1>
            <p className="text-xl text-ink-1 max-w-3xl">
              {service.summary}
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* What We Do */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-ink-2 mb-4">
                  What We Do
                </h2>
                <p className="text-lg text-ink-1 leading-relaxed">
                  {service.whatWeDo}
                </p>
              </motion.div>

              {/* Where It Helps */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-ink-2 mb-4">
                  Where It Helps
                </h2>
                <p className="text-lg text-ink-1 leading-relaxed">
                  {service.whereItHelps}
                </p>
              </motion.div>

              {/* Deliverables */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-ink-2 mb-6">
                  What You Get
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.deliverables.map((deliverable, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 bg-white rounded-2xl p-4 border border-muted"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                        <Check size={14} className="text-accent" />
                      </div>
                      <p className="text-ink-1">{deliverable}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="sticky top-24"
              >
                <Card featured>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-ink-2 mb-4">
                      Request a Quote
                    </h3>
                    <p className="text-ink-1 mb-6">
                      Get a free, no-obligation quote for your project. We respond within 4 working hours.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center space-x-2 text-sm text-ink-1">
                        <Check size={16} className="text-accent" />
                        <span>Free consultation</span>
                      </li>
                      <li className="flex items-center space-x-2 text-sm text-ink-1">
                        <Check size={16} className="text-accent" />
                        <span>Transparent pricing</span>
                      </li>
                      <li className="flex items-center space-x-2 text-sm text-ink-1">
                        <Check size={16} className="text-accent" />
                        <span>Fast response time</span>
                      </li>
                    </ul>
                    <Button asChild size="lg" className="w-full">
                      <Link to="/contact">Get Your Quote</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
