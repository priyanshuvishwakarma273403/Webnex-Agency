import PageHeader from '@/components/PageHeader';
import PricingSection from '@/sections/PricingSection';

import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'Pricing',
  description: 'Transparent, flexible pricing for every stage of your business. No hidden fees, no surprises.',
  path: '/pricing'
});

export default function PricingPage() {
  return (
    <main>
      <PageHeader
        badge="Transparent Pricing"
        title="Simple, Fair"
        highlight="Pricing"
        subtitle="No hidden fees. No surprises. Choose the plan that fits your business and scale as you grow."
        image="/images/pricing_header.png"
        breadcrumb={['Home', 'Pricing']}
      />
      <PricingSection />
    </main>
  );
}
