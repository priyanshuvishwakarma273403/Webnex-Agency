import PageHeader from '@/components/PageHeader';
import ServicesSection from '@/sections/ServicesSection';

export const metadata = {
  title: '12 Premium Digital Services',
  description: 'Explore our full range of AI-powered digital services including React development, DevOps, SaaS, AI chatbots, branding and more.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'WebNex Services | AI & Cloud Development',
    description: 'Explore our full range of AI-powered digital services including React development, DevOps, SaaS, and AI chatbots.',
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
