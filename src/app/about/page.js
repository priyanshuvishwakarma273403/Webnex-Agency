import PageHeader from '@/components/PageHeader';
import FounderSection from '@/sections/FounderSection';
import WhyChooseUs from '@/sections/WhyChooseUs';
import ProcessTimeline from '@/sections/ProcessTimeline';
import TestimonialsSection from '@/sections/TestimonialsSection';

export const metadata = {
  title: 'About — WebNex',
  description: 'Learn about WebNex — our mission, values, process, and why 50+ clients trust us to build their digital future.',
};

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        badge="About WebNex"
        title="Built for"
        highlight="Excellence"
        subtitle="We are an AI-powered digital innovation agency on a mission to build the future of business — one exceptional product at a time."
        image="/images/about_header.png"
        breadcrumb={['Home', 'About']}
      />
      <FounderSection />
      <WhyChooseUs />
      <ProcessTimeline />
      <TestimonialsSection />
    </main>
  );
}
