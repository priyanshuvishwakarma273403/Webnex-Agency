/**
 * WebNex Dynamic SEO & Schema Markup System
 * Author: Elite SEO Strategist & Next.js SEO Engineer
 */

export const siteConfig = {
  name: 'WebNex',
  legalName: 'WebNex India',
  baseUrl: 'https://webnex.co.in',
  defaultTitle: 'WebNex | Best Web Development, Software & Graphic Design Agency',
  defaultDescription: 'WebNex India is a top-rated digital agency offering Software & App Development, Graphic Design, Website Maintenance, E-commerce, SEO, CNC Jali Design, and AI Automation services to skyrocket your business growth.',
  logo: 'https://webnex.co.in/logo.png',
  address: {
    streetAddress: 'Sector 62, Electronic City',
    addressLocality: 'Noida',
    addressRegion: 'Uttar Pradesh',
    postalCode: '201301',
    addressCountry: 'IN',
  },
  contact: {
    phone: '+919999999999', // Replace with active contact number
    email: 'info@webnex.co.in',
  },
  socials: [
    'https://twitter.com/webnex',
    'https://linkedin.com/company/webnex',
    'https://github.com/webnex',
    'https://facebook.com/webnex'
  ]
};

/**
 * Generates dynamic Next.js Metadata objects with correct canonicals and og tags
 */
export function generateMetadata({
  title,
  description,
  path = '',
  ogImage = '/og-image.png',
  noIndex = false,
  keywords = []
} = {}) {
  const canonicalUrl = `${siteConfig.baseUrl}${path.startsWith('/') ? path : `/${path}`}`;
  const displayTitle = title ? `${title} | WebNex` : siteConfig.defaultTitle;
  const displayDescription = description || siteConfig.defaultDescription;

  const defaultKeywords = [
    'WebNex', 'WebNex India', 'Software Development Company', 'Top Web Development Agency', 'Best Graphic Design Services', 
    'React & Next.js Development', 'Mobile App Development', 'E-commerce Store Development', 'Website Maintenance Services',
    'Logo & Brand Identity Design', 'Visiting Card & Flex Printing', 'CNC Jali Design', 'Payment Gateway Integration',
    'SEO & Digital Marketing', 'SaaS Platform Development', 'Spring Boot APIs', 'Cloud & DevOps Solutions', 'AI Automation Agency',
    'AI Development', 'Next.js Development', 'Spring Boot Development', 'Full Stack Development', 'SEO Optimized Website Development',
    'AI Agent Development'
  ];

  const mergedKeywords = Array.from(new Set([...defaultKeywords, ...keywords]));

  return {
    title: title ? { absolute: displayTitle } : { default: siteConfig.defaultTitle, template: '%s | WebNex' },
    description: displayDescription,
    keywords: mergedKeywords,
    metadataBase: new URL(siteConfig.baseUrl),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: displayTitle,
      description: displayDescription,
      url: canonicalUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage.startsWith('http') ? ogImage : `${siteConfig.baseUrl}${ogImage}`,
          width: 1200,
          height: 630,
          alt: title || siteConfig.name,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: displayTitle,
      description: displayDescription,
      images: [ogImage.startsWith('http') ? ogImage : `${siteConfig.baseUrl}${ogImage}`],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

/**
 * Returns Organization JSON-LD schema
 */
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.baseUrl}/#organization`,
    name: siteConfig.legalName,
    url: siteConfig.baseUrl,
    logo: siteConfig.logo,
    sameAs: siteConfig.socials,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: siteConfig.contact.phone,
        contactType: 'sales',
        email: siteConfig.contact.email,
        areaServed: 'Worldwide',
        availableLanguage: ['en', 'hi']
      }
    ]
  };
}

/**
 * Returns LocalBusiness JSON-LD schema
 */
export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteConfig.baseUrl}/#localbusiness`,
    name: siteConfig.legalName,
    url: siteConfig.baseUrl,
    logo: siteConfig.logo,
    image: `${siteConfig.baseUrl}/og-image.png`,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.addressCountry,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ],
        opens: '09:00',
        closes: '18:00'
      }
    ]
  };
}

/**
 * Returns Breadcrumb JSON-LD schema
 * @param {Array<{name: string, item: string}>} items
 */
export function getBreadcrumbSchema(items = []) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.item.startsWith('http') ? item.item : `${siteConfig.baseUrl}${item.item}`
    }))
  };
}

/**
 * Returns FAQ JSON-LD schema
 * @param {Array<{question: string, answer: string}>} faqs
 */
export function getFAQSchema(faqs = []) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

/**
 * Returns Product/Service Schema
 */
export function getServiceSchema({
  name,
  description,
  urlPath
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: name,
    provider: {
      '@type': 'LocalBusiness',
      name: siteConfig.legalName,
      url: siteConfig.baseUrl,
      logo: siteConfig.logo,
      address: {
        '@type': 'PostalAddress',
        addressLocality: siteConfig.address.addressLocality,
        addressCountry: siteConfig.address.addressCountry
      }
    },
    areaServed: [
      {
        '@type': 'Country',
        name: 'India'
      },
      {
        '@type': 'Country',
        name: 'United States'
      },
      {
        '@type': 'Country',
        name: 'United Kingdom'
      }
    ],
    name: name,
    description: description,
    url: `${siteConfig.baseUrl}${urlPath}`
  };
}
