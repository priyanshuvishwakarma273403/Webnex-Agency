import PageHeader from '@/components/PageHeader';
import PortfolioSection from '@/sections/PortfolioSection';

import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'Portfolio',
  description: 'View our featured projects — AI dashboards, SaaS platforms, e-commerce sites, CNC systems, and more.',
  path: '/portfolio'
});

export default function PortfolioPage() {
  return (
    <main>
      <PageHeader
        badge="Our Work"
        title="Featured"
        highlight="Projects"
        subtitle="Real-world digital solutions that deliver measurable business impact across industries and technologies."
        image="/images/portfolio_header.png"
        breadcrumb={['Home', 'Portfolio']}
      />
      <PortfolioSection />
    </main>
  );
}
