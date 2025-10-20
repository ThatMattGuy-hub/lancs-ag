import { Helmet } from 'react-helmet-async';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { motion } from 'framer-motion';
import { generatePageTitle } from '@/lib/seo';

interface LegalPageProps {
  title: string;
  content: React.ReactNode;
}

function LegalPage({ title, content }: LegalPageProps) {
  return (
    <>
      <Helmet>
        <title>{generatePageTitle(title)}</title>
      </Helmet>

      <section className="bg-gradient-to-br from-bg via-bg to-muted/20 py-16 md:py-24">
        <Container size="md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-ink-2 mb-6">
              {title}
            </h1>
          </motion.div>
        </Container>
      </section>

      <Section>
        <Container size="md">
          <div className="prose prose-lg max-w-none">
            {content}
          </div>
        </Container>
      </Section>
    </>
  );
}

export function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      content={
        <div className="space-y-6 text-ink-1">
          <p className="text-lg">
            Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section>
            <h2 className="text-2xl font-bold text-ink-2 mb-4">Introduction</h2>
            <p>
              Lancashire Ag ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy 
              explains how we collect, use, and safeguard your personal information when you use our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink-2 mb-4">Information We Collect</h2>
            <p>We collect information that you provide directly to us, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name and contact information (email, phone number, address)</li>
              <li>Company name and project details</li>
              <li>Information provided in enquiry forms</li>
              <li>Communication preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink-2 mb-4">How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your enquiries and provide quotes</li>
              <li>Deliver our services and manage projects</li>
              <li>Communicate with you about our services</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink-2 mb-4">Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink-2 mb-4">Your Rights</h2>
            <p>Under UK GDPR, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Request data portability</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink-2 mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:info@lancashireag.com" className="text-accent hover:underline">
                info@lancashireag.com
              </a>
            </p>
          </section>
        </div>
      }
    />
  );
}

export function Terms() {
  return (
    <LegalPage
      title="Terms & Conditions"
      content={
        <div className="space-y-6 text-ink-1">
          <p className="text-lg">
            Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section>
            <h2 className="text-2xl font-bold text-ink-2 mb-4">Agreement to Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by these Terms and Conditions. 
              If you do not agree to these terms, please do not use our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink-2 mb-4">Services</h2>
            <p>
              Lancashire Ag provides construction and agricultural contracting services. All work is subject to 
              separate written quotations and contracts. These terms govern the use of our website only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink-2 mb-4">Quotations</h2>
            <p>
              Quotations provided are valid for 30 days unless otherwise stated. All quotations are subject to 
              site survey and may be adjusted based on actual site conditions. Prices exclude VAT unless stated.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink-2 mb-4">Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and images, is the property of 
              Lancashire Ag and protected by copyright laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink-2 mb-4">Limitation of Liability</h2>
            <p>
              While we strive to ensure accuracy, we make no warranties about the completeness, reliability, 
              or accuracy of information on this website. We shall not be liable for any losses or damages 
              arising from the use of this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink-2 mb-4">Contact</h2>
            <p>
              For questions about these Terms & Conditions, contact us at{' '}
              <a href="mailto:info@lancashireag.com" className="text-accent hover:underline">
                info@lancashireag.com
              </a>
            </p>
          </section>
        </div>
      }
    />
  );
}

export function HealthSafety() {
  return (
    <LegalPage
      title="Health & Safety Policy"
      content={
        <div className="space-y-6 text-ink-1">
          <section>
            <h2 className="text-2xl font-bold text-ink-2 mb-4">Our Commitment</h2>
            <p>
              Lancashire Ag is committed to ensuring the health, safety, and welfare of all employees, contractors, 
              clients, and members of the public who may be affected by our operations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink-2 mb-4">Risk Assessment</h2>
            <p>
              We conduct comprehensive Risk Assessments and Method Statements (RAMS) for all projects before work 
              commences. These documents identify potential hazards and outline control measures to minimize risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink-2 mb-4">Training & Competence</h2>
            <p>All our operatives hold relevant qualifications including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>CSCS (Construction Skills Certification Scheme) cards</li>
              <li>CPCS (Construction Plant Competence Scheme) licenses</li>
              <li>First Aid certification</li>
              <li>Equipment-specific training and certification</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink-2 mb-4">Equipment & Maintenance</h2>
            <p>
              All plant and equipment is regularly inspected, maintained, and certified to ensure safe operation. 
              We maintain detailed service records and comply with all statutory inspection requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink-2 mb-4">Site Safety</h2>
            <p>On every project, we:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Conduct site-specific safety briefings</li>
              <li>Implement appropriate traffic management</li>
              <li>Provide and maintain suitable PPE</li>
              <li>Ensure proper signage and barriers</li>
              <li>Monitor and review safety performance</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink-2 mb-4">Incident Reporting</h2>
            <p>
              We maintain a comprehensive incident reporting system. All accidents, near misses, and safety concerns 
              are recorded, investigated, and used to improve our safety procedures.
            </p>
          </section>
        </div>
      }
    />
  );
}

export function Insurance() {
  return (
    <LegalPage
      title="Insurance & Accreditations"
      content={
        <div className="space-y-6 text-ink-1">
          <section>
            <h2 className="text-2xl font-bold text-ink-2 mb-4">Insurance Coverage</h2>
            <p>Lancashire Ag maintains comprehensive insurance coverage including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Public Liability Insurance: £10,000,000</li>
              <li>Employers' Liability Insurance: £10,000,000</li>
              <li>Professional Indemnity Insurance</li>
              <li>Plant and Equipment Insurance</li>
              <li>Goods in Transit Insurance</li>
            </ul>
            <p className="mt-4">
              Copies of our insurance certificates are available on request and can be provided to clients 
              and principal contractors as required.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink-2 mb-4">Accreditations & Certifications</h2>
            <p>Our team holds the following accreditations:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>CSCS (Construction Skills Certification Scheme)</li>
              <li>CPCS (Construction Plant Competence Scheme)</li>
              <li>CITB (Construction Industry Training Board) registered</li>
              <li>Environmental awareness certification</li>
              <li>First Aid at Work certification</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink-2 mb-4">Quality Standards</h2>
            <p>
              We are committed to delivering work to the highest standards. All projects are completed in 
              accordance with relevant British Standards, building regulations, and industry best practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink-2 mb-4">Compliance</h2>
            <p>
              We comply with all relevant legislation including the Health and Safety at Work Act, 
              Construction (Design and Management) Regulations, and environmental protection regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink-2 mb-4">Documentation</h2>
            <p>
              We can provide copies of insurance certificates, risk assessments, method statements, and 
              operator certifications as required by clients and principal contractors.
            </p>
          </section>
        </div>
      }
    />
  );
}
