import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  structuredData?: object;
}

export default function SEO({
  title = 'LendMuusik OÜ | Artistide Agentuur ja Helikandijate Müük Eestis',
  description = 'LendMuusik OÜ - professionaalne artistide agentuur Eestis. Pakume artiste üritustele, müüme klassikalist muusikat CD ja DVD kandjatel. 40+ aastat kogemust, üle 500 edukat üritust.',
  keywords = 'artistide agentuur, muusikud üritustele, klassikaline muusika, CD müük, DVD müük, ürituste korraldamine, tantsumuusika, salongimuusika, Eesti artistid, LendMuusik',
  image = 'hero-live-music.png',
  url = 'https://lendmusic.ee',
  type = 'website',
  structuredData,
}: SEOProps) {
  useEffect(() => {
    // Update title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, attribute: string = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Primary meta tags
    updateMetaTag('title', title);
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // Open Graph tags
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    // Use absolute URL for images in meta tags (for social media sharing)
    const baseUrl = import.meta.env.BASE_URL || '/';
    const imageUrl = image.startsWith('http') ? image : `${url}${baseUrl}${image}`;
    updateMetaTag('og:image', imageUrl, 'property');
    updateMetaTag('og:url', url, 'property');
    updateMetaTag('og:type', type, 'property');

    // Twitter Card tags
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', imageUrl);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

    // Structured Data
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }
  }, [title, description, keywords, image, url, type, structuredData]);

  return null;
}
