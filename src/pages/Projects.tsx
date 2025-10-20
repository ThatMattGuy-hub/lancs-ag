import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Clock, Users, Truck } from 'lucide-react';
import { motion } from 'framer-motion';
import { generatePageTitle } from '@/lib/seo';
import projects from '@/content/projects.json';

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'construction', label: 'Construction' },
  { id: 'agriculture', label: 'Agriculture' },
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>{generatePageTitle('Projects')}</title>
        <meta name="description" content="View our completed construction and agriculture projects across Lancashire. Quality work delivered on time and within budget." />
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
              Our Projects
            </h1>
            <p className="text-lg text-ink-1 leading-relaxed">
              Explore our portfolio of completed projects across Lancashire. From agricultural drainage systems 
              to construction groundworks, we deliver quality results every time.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Projects Grid */}
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={project.id} hoverable>
              <div className="aspect-video bg-muted/30 rounded-t-2xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-muted">
                  <p className="text-sm">Project Image</p>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="outline" className="capitalize">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.client}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-ink-1 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="bg-accent/5 border-l-4 border-accent rounded-r-2xl p-3 mb-4">
                  <p className="text-sm font-medium text-ink-2">
                    <span className="text-accent">Outcome:</span> {project.outcome}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-1 text-accent mb-1">
                      <Clock size={14} />
                    </div>
                    <p className="text-xs font-semibold text-ink-2">{project.metrics.duration}</p>
                    <p className="text-xs text-ink-1/60">Duration</p>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-1 text-accent mb-1">
                      <Users size={14} />
                    </div>
                    <p className="text-xs font-semibold text-ink-2">{project.metrics.team}</p>
                    <p className="text-xs text-ink-1/60">Team</p>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-1 text-accent mb-1">
                      <Truck size={14} />
                    </div>
                    <p className="text-xs font-semibold text-ink-2">{project.metrics.plant}</p>
                    <p className="text-xs text-ink-1/60">Plant</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
