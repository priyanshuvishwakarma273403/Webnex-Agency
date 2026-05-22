import PageHeader from '@/components/PageHeader';
import ContactSection from '@/sections/ContactSection';

export const metadata = {
  title: 'Contact — WebNex',
  description: 'Get in touch with WebNex. Start your project, book a free consultation, or chat with our AI assistant.',
};

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        badge="Let's Connect"
        title="Start Your"
        highlight="Project Today"
        subtitle="Ready to build something amazing? Drop us a message and we'll get back to you within 24 hours."
        image="/images/contact_header.png"
        breadcrumb={['Home', 'Contact']}
      />
      <ContactSection />
    </main>
  );
}
