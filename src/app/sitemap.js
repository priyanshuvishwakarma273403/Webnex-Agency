export default function sitemap() {
  const baseUrl = 'https://www.webnex.co.in';

  return [
    { url: `${baseUrl}/`, lastModified: new Date(), changeFrequency: 'yearly', priority: 1 },
    { url: `${baseUrl}/services/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/portfolio/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/about/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/ai/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/pricing/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact/`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 },
    { url: `${baseUrl}/faq/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/blogs/`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    // Core SEO Blogs
    { url: `${baseUrl}/blogs/why-nextjs-ultimate-framework-2026/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/blogs/ai-automation-transforming-business-2026/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/blogs/microservices-architecture-spring-boot/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/blogs/ui-ux-trends-web-design-2026/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/blogs/building-scalable-ecommerce-store/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/blogs/website-security-ssl-importance/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
    // Policies
    { url: `${baseUrl}/privacy-policy/`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/terms-of-service/`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
  ]
}
