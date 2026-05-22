import HeroSection from '@/sections/HeroSection';
import ServicesPreview from '@/sections/ServicesPreview';
import WhyChooseUs from '@/sections/WhyChooseUs';
import TestimonialsSection from '@/sections/TestimonialsSection';

export const metadata = {
  title: 'WebNex — Building Future Businesses with AI',
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
