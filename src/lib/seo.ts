export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
}

export const defaultSEO: SEOProps = {
  title: "Lancashire Ag - Construction & Agriculture Contractor",
  description: "Professional construction and agriculture contracting services across Lancashire. Experienced, insured, and RAMS prepared.",
  ogImage: "/og.jpg",
  ogType: "website",
};

export const generatePageTitle = (pageTitle?: string) => {
  if (!pageTitle) return defaultSEO.title;
  return `${pageTitle} | Lancashire Ag`;
};

export const generateLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Lancashire Ag",
    "description": "Construction and agriculture contractor serving Lancashire",
    "url": import.meta.env.VITE_SITE_URL || "https://lancashireag.com",
    "telephone": "+44-1234-567890",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Lancashire",
      "addressCountry": "GB"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Lancashire"
    }
  };
};

export const generateServiceSchema = (service: { name: string; description: string }) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Lancashire Ag"
    }
  };
};

export const generateArticleSchema = (article: { 
  title: string; 
  description: string; 
  image?: string;
  datePublished?: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "image": article.image,
    "datePublished": article.datePublished || new Date().toISOString(),
    "author": {
      "@type": "Organization",
      "name": "Lancashire Ag"
    }
  };
};
