'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogs = [
  {
    title: 'How AI Automation is Transforming Modern Businesses in 2026',
    excerpt: 'Discover how artificial intelligence and AI agents are reshaping industries, from drastic cost reduction to infinite scalability.',
    category: 'Technology',
    author: 'WebNex Team',
    date: 'May 23, 2026',
    image: '/images/blogs/ai_automation_2026.png',
    color: '#6C63FF',
    slug: 'ai-automation-transforming-business-2026'
  },
  {
    title: 'Why Next.js is the Ultimate Framework for 2026',
    excerpt: 'A deep dive into Server Components, Edge computing, and why enterprises are migrating their frontends to Next.js.',
    category: 'Development',
    author: 'Tech Lead',
    date: 'May 12, 2026',
    image: '/images/blogs/nextjs_2026_blog.png',
    color: '#00C2FF',
    slug: 'why-nextjs-ultimate-framework-2026'
  },
  {
    title: 'Mastering Microservices Architecture',
    excerpt: 'Learn the core principles of designing, deploying, and maintaining scalable microservices using Kubernetes and Docker.',
    category: 'DevOps',
    author: 'Cloud Architect',
    date: 'May 05, 2026',
    image: '/images/blogs/microservices_blog.png',
    color: '#2ECC71',
    slug: 'mastering-microservices-architecture'
  },
  {
    title: '10 UI/UX Trends to Watch in Web Design',
    excerpt: 'From glassmorphism to 3D interactive scrolls, here are the top design trends that are capturing user attention this year.',
    category: 'Design',
    author: 'Design Team',
    date: 'April 28, 2026',
    image: '/images/blogs/uiux_trends_blog.png',
    color: '#FF6B9D',
    slug: 'ui-ux-trends-web-design-2026'
  },
  {
    title: 'Building a Scalable E-commerce Store',
    excerpt: 'Scaling past 1,000 orders a day requires more than basic hosting—it requires a robust headless architecture.',
    category: 'E-Commerce',
    author: 'Retail Strategist',
    date: 'March 14, 2026',
    image: '/images/blogs/ecommerce_blog.png',
    color: '#F1C40F',
    slug: 'building-scalable-ecommerce-store'
  },
  {
    title: 'The Importance of Website Security & SSL',
    excerpt: 'In an era of sophisticated AI-driven cyber attacks, a basic firewall is no longer sufficient. Secure your digital business.',
    category: 'Security',
    author: 'Security Analyst',
    date: 'Feb 02, 2026',
    image: '/images/blogs/security_blog.png',
    color: '#E74C3C',
    slug: 'website-security-ssl-importance'
  },
  {
    title: 'Building a Multi-Tenant SaaS Platform with Next.js App Router',
    excerpt: 'Learn the core architecture to design, build, and deploy multi-tenant SaaS structures with Stripe subscriptions, secure middleware, and database isolation.',
    category: 'Development',
    author: 'SaaS Specialist',
    date: 'April 20, 2026',
    image: '/images/blogs/saas_platform_blog.png',
    color: '#635BFF',
    slug: 'building-scalable-saas-platform-nextjs'
  },
  {
    title: 'Securing Spring Boot REST APIs with JWT & OAuth2',
    excerpt: 'Complete implementation guide to hardening enterprise Java backends with stateless JWT authentication, CORS protocols, and role-based permissions.',
    category: 'Security',
    author: 'Security Architect',
    date: 'April 10, 2026',
    image: '/images/blogs/spring_security_blog.png',
    color: '#F89820',
    slug: 'securing-spring-boot-rest-api-jwt'
  },
  {
    title: 'Building Stateful Autonomous AI Agents with LangGraph & LlamaIndex',
    excerpt: 'A comprehensive developer guide to structuring cyclic agent state graphs, integrating tools, and deploying autonomous AI assistants in enterprise environments.',
    category: 'AI Agents',
    author: 'AI Lead',
    date: 'April 02, 2026',
    image: '/images/blogs/ai_agents_graph_blog.png',
    color: '#10A37F',
    slug: 'build-autonomous-agents-langgraph'
  },
  {
    title: 'Tailwind CSS Performance Tuning for Production Next.js Builds',
    excerpt: 'How to eliminate CSS bloat, optimize layout rendering, configure customized HSL design tokens, and build stunning user interfaces loading in milliseconds.',
    category: 'Design',
    author: 'Frontend Lead',
    date: 'March 28, 2026',
    image: '/images/blogs/tailwind_perf_blog.png',
    color: '#38BDF8',
    slug: 'tailwind-css-performance-tuning-nextjs'
  },
  {
    title: 'Spring Boot & PostgreSQL Query Optimization: Tuning JPA & Hibernate',
    excerpt: 'Eliminate N+1 queries, configure connection pools, set database indexes, and cache results using Redis to maintain sub-50ms endpoint executions.',
    category: 'Database',
    author: 'Backend Lead',
    date: 'March 20, 2026',
    image: '/images/blogs/db_tuning_blog.png',
    color: '#2ECC71',
    slug: 'spring-boot-postgresql-performance-tuning'
  },
  {
    title: 'Implementing a Programmatic SEO Strategy in Next.js App Router',
    excerpt: 'How to design database-driven dynamic routes in Next.js to deploy hundreds of high-quality localized service pages without duplicate content penalties.',
    category: 'Marketing',
    author: 'SEO Engineer',
    date: 'March 05, 2026',
    image: '/images/blogs/programmatic_seo_blog.png',
    color: '#00C2FF',
    slug: 'programmatic-seo-strategy-nextjs'
  }
];

export default function BlogsPage() {
  return (
    <main style={{ paddingTop: '140px', paddingBottom: '100px', minHeight: '100vh', background: '#f8fafc' }}>
      <div className="container-custom">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: '#0F172A', marginBottom: 16, fontFamily: 'Poppins, sans-serif' }}>
            Latest <span style={{ color: '#00C2FF' }}>Insights</span>
          </h1>
          <p style={{ color: '#64748b', fontSize: 18, maxWidth: 600, margin: '0 auto' }}>
            Read our latest articles on software engineering, AI, design, and digital business growth.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32 }}>
          {blogs.map((blog, i) => (
            <motion.div 
              key={blog.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              style={{ background: 'white', borderRadius: 24, overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.04)', transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ height: 220, position: 'relative', overflow: 'hidden' }}>
                <img src={blog.image} alt={blog.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: 16, left: 16, background: blog.color, color: 'white', padding: '6px 14px', borderRadius: 100, fontSize: 12, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  {blog.category}
                </div>
              </div>
              
              <div style={{ padding: 32, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16, color: '#94a3b8', fontSize: 13, fontWeight: 500 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Calendar size={14} /> {blog.date}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><User size={14} /> {blog.author}</span>
                </div>
                
                <h2 style={{ fontSize: 22, fontWeight: 800, color: '#0F172A', marginBottom: 12, fontFamily: 'Poppins, sans-serif', lineHeight: 1.3 }}>
                  {blog.title}
                </h2>
                <p style={{ color: '#64748b', fontSize: 15, lineHeight: 1.6, marginBottom: 24, flexGrow: 1 }}>
                  {blog.excerpt}
                </p>
                
                <Link href={`/blogs/${blog.slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: blog.color, fontWeight: 700, fontSize: 15, textDecoration: 'none', marginTop: 'auto' }}>
                  Read Article <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
