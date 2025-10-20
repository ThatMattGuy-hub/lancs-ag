import { Helmet } from 'react-helmet-async';
import { HomeHero } from '@/sections/HomeHero';
import { HomeHighlights } from '@/sections/HomeHighlights';
import { HomeServices } from '@/sections/HomeServices';
import { HomeProject } from '@/sections/HomeProject';
import { HomeWhyUs } from '@/sections/HomeWhyUs';
import { HomeTestimonial } from '@/sections/HomeTestimonial';
import { HomeLeadCapture } from '@/sections/HomeLeadCapture';
import { defaultSEO, generateLocalBusinessSchema } from '@/lib/seo';

export function Home() {
  const schema = generateLocalBusinessSchema();

  return (
    <>
      <Helmet>
        <title>{defaultSEO.title}</title>
        <meta name="description" content={defaultSEO.description} />
        <meta property="og:title" content={defaultSEO.title} />
        <meta property="og:description" content={defaultSEO.description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={defaultSEO.ogImage} />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>

      <HomeHero />
      <HomeHighlights />
      <HomeServices />
      <HomeProject />
      <HomeWhyUs />
      <HomeTestimonial />
      <HomeLeadCapture />
    </>
  );
}
