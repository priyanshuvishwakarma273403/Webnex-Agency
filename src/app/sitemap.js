export default function sitemap() {
  const baseUrl = 'https://webnex.co.in';

  return [
    { url: `${baseUrl}/`, lastModified: new Date(), changeFrequency: 'yearly', priority: 1 },
    { url: `${baseUrl}/services/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    
    // Core Target Service Pillar Pages
    { url: `${baseUrl}/services/ai-development/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.95 },
    { url: `${baseUrl}/services/nextjs-development/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.95 },
    { url: `${baseUrl}/services/spring-boot-development/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.95 },
    { url: `${baseUrl}/services/full-stack-development/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.95 },
    { url: `${baseUrl}/services/seo-optimized-development/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.95 },
    { url: `${baseUrl}/services/ai-agent-development/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.95 },

    { url: `${baseUrl}/portfolio/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/about/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/ai/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/pricing/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact/`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 },
    { url: `${baseUrl}/faq/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/blogs/`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    
    // Core SEO Blogs (Slugs matching filesystem)
    { url: `${baseUrl}/blogs/why-nextjs-ultimate-framework-2026/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/blogs/ai-automation-transforming-business-2026/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/blogs/mastering-microservices-architecture/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/blogs/ui-ux-trends-web-design-2026/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/blogs/building-scalable-ecommerce-store/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/blogs/website-security-ssl-importance/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
    
    // Policies
    { url: `${baseUrl}/privacy-policy/`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/terms-of-service/`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
  ]
}
