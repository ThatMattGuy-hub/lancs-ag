import { Link } from 'react-router-dom';
import { Container } from './ui/Container';
import { Phone, Mail, MapPin } from 'lucide-react';
import copy from '@/content/copy.json';

const footerLinks = {
  services: [
    { name: 'Groundworks', href: '/services/groundworks' },
    { name: 'Fencing', href: '/services/fencing' },
    { name: 'Drainage', href: '/services/drainage' },
    { name: 'Demolition', href: '/services/demolition' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'Health & Safety', href: '/health-safety' },
    { name: 'Insurance & Accreditations', href: '/insurance' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-ink-2 text-white">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="space-y-4">
              <Link to="/" className="flex items-center">
                <img src="/logo.svg" alt="Lancashire Ag" className="h-14 w-auto brightness-0 invert" />
              </Link>
              <p className="text-sm text-white/80 leading-relaxed">
                {copy.footer.comfort}
              </p>
              <p className="text-xs text-accent font-medium">
                {copy.contact.winterNote}
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-white mb-4">Services</h3>
              <ul className="space-y-2">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-white/80 hover:text-accent transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-white/80 hover:text-accent transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-white mb-4">Contact</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href={`tel:${copy.contact.phone}`}
                    className="flex items-center space-x-2 text-sm text-white/80 hover:text-accent transition-colors"
                  >
                    <Phone size={16} />
                    <span>{copy.contact.phone}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${copy.contact.email}`}
                    className="flex items-center space-x-2 text-sm text-white/80 hover:text-accent transition-colors"
                  >
                    <Mail size={16} />
                    <span>{copy.contact.email}</span>
                  </a>
                </li>
                <li className="flex items-start space-x-2 text-sm text-white/80">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                  <span>{copy.contact.serviceArea}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-white/60">
                © {new Date().getFullYear()} Lancashire Ag. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                {footerLinks.legal.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-xs text-white/60 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
