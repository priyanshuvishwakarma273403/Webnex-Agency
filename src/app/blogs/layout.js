import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'Insights & Technology Blog',
  description: 'Read the latest insights on AI automation, web development (Next.js, React), backend engineering (Spring Boot), database tuning, and SEO optimization.',
  path: '/blogs'
});

export default function BlogsLayout({ children }) {
  return <>{children}</>;
}
