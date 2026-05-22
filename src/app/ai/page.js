import PageHeader from '@/components/PageHeader';
import AIChatSection from '@/sections/AIChatSection';

export const metadata = {
  title: 'AI Assistant — WebNex',
  description: 'Chat with WebNex AI — get instant answers about our services, pricing, and how we can help your business.',
};

export default function AIPage() {
  return (
    <main>
      <PageHeader
        badge="AI-Powered"
        title="Ask WebNex"
        highlight="AI"
        subtitle="Our intelligent assistant is trained on our services and expertise. Get instant, accurate answers 24/7."
        image="/images/ai_header.png"
        breadcrumb={['Home', 'AI Assistant']}
      />
      <AIChatSection />
    </main>
  );
}
