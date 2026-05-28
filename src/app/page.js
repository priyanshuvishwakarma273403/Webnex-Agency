import HeroSection from '@/sections/HeroSection';
import ServicesPreview from '@/sections/ServicesPreview';
import WhyChooseUs from '@/sections/WhyChooseUs';
import TestimonialsSection from '@/sections/TestimonialsSection';

export const metadata = {
  title: 'WebNex | AI, Next.js & Spring Boot Enterprise Development Agency',
  description: 'WebNex is a premium digital agency engineering custom AI Agents, lightning-fast Next.js frontends, and enterprise-grade Spring Boot microservices. Skyrocket your organic search traffic with our SEO-optimized builds.',
  alternates: {
    canonical: '/'
  }
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesPreview />
      <WhyChooseUs />
      <TestimonialsSection />
    </main>
  );
}
