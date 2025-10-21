import { Link } from 'react-router-dom';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Clock, Users, Truck } from 'lucide-react';
import { motion } from 'framer-motion';
import projects from '@/content/projects.json';

function AnimatedMetric({ value, label, icon: Icon }: { value: string; label: string; icon: any }) {
  return (
    <div className="flex items-center space-x-2">
      <Icon size={16} className="text-accent" />
      <div>
        <p className="text-sm font-semibold text-ink-2">{value}</p>
        <p className="text-xs text-ink-1/60">{label}</p>
      </div>
    </div>
  );
}

export function HomeProject() {
  const featuredProject = projects.find((p: any) => p.featured) || projects[0];

  return (
    <Section className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="accent" className="mb-4">Featured Project</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-ink-2 mb-4">
            {featuredProject.title}
          </h2>
          <p className="text-lg text-ink-1/80 mb-4">
            {featuredProject.client}
          </p>
          <p className="text-ink-1 mb-6 leading-relaxed">
            {featuredProject.description}
          </p>

          <div className="bg-muted/20 rounded-2xl p-6 mb-6">
            <h3 className="font-semibold text-ink-2 mb-4">Project Metrics</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <AnimatedMetric
                value={featuredProject.metrics.duration}
                label="Duration"
                icon={Clock}
              />
              <AnimatedMetric
                value={featuredProject.metrics.team}
                label="Team Size"
                icon={Users}
              />
              <AnimatedMetric
                value={featuredProject.metrics.plant}
                label="Plant Used"
                icon={Truck}
              />
            </div>
          </div>

          <div className="bg-accent/5 border-l-4 border-accent rounded-r-2xl p-4 mb-6">
            <p className="text-sm font-medium text-ink-2">
              <span className="text-accent">Outcome:</span> {featuredProject.outcome}
            </p>
          </div>

          <Button asChild size="lg">
            <Link to="/projects">View All Projects</Link>
          </Button>
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
              {/* Placeholder for project image */}
              <p className="text-sm">Project Image</p>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-2xl -z-10" />
        </motion.div>
      </div>
    </Section>
  );
}
