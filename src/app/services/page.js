import PageHeader from '@/components/PageHeader';
import ServicesSection from '@/sections/ServicesSection';

export const metadata = {
  title: 'Premium Web Development, AI Solutions & Branding Services | WebNex',
  description: 'Explore our full suite of digital engineering services. From custom Next.js frontends and Spring Boot microservices to cognitive AI Agents, SaaS setups, and brand identity design.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Enterprise Digital Services & AI Engineering | WebNex',
    description: 'Explore our full suite of digital engineering services. From custom Next.js frontends and Spring Boot microservices to cognitive AI Agents and brand design.',
    url: '/services',
  }
};

export default function ServicesPage() {
  return (
    <main>
      <PageHeader
        badge="What We Offer"
        title="Our Premium"
        highlight="Services"
        subtitle="End-to-end digital solutions crafted with cutting-edge technology to accelerate your business growth and dominate your market."
        image="/images/services_header.png"
        breadcrumb={['Home', 'Services']}
      />
      <ServicesSection />
    </main>
  );
}
