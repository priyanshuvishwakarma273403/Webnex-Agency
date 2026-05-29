import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'Frequently Asked Questions',
  description: 'Got questions? We have answers. Learn about our services, pricing, timelines, AI automation, and after-launch support.',
  path: '/faq'
});

export default function FAQLayout({ children }) {
  return <>{children}</>;
}
