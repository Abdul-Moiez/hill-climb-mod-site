import type { Metadata } from 'next';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
}

const defaultSEO: Metadata = {
  metadataBase: new URL('https://hillclimbmod.example.com'),
  title: 'Hill Climb Racing Mod APK 1.70.0 - Unlimited Money & Diamonds',
  description: 'Download the latest Hill Climb Racing Mod APK version 1.70.0 with unlimited money, coins, and all vehicles unlocked. Enjoy ad-free premium gameplay safe and anti-ban.',
  keywords: ['Hill Climb Racing', 'Mod APK', 'Unlimited Money', 'Unlocked Vehicles', '1.70.0', 'Android Game'],
  authors: [{ name: 'Hill Climb Mod Team' }],
  openGraph: {
    title: 'Hill Climb Racing Mod APK 1.70.0 - Unlimited Money',
    description: 'Download the latest Hill Climb Racing Mod APK version 1.70.0 with unlimited money, coins, and all vehicles unlocked.',
    url: 'https://hillclimbmod.example.com',
    siteName: 'Hill Climb Mod',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Hill Climb Racing Mod APK',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hill Climb Racing Mod APK 1.70.0',
    description: 'Download the latest Hill Climb Racing Mod APK version 1.70.0 with unlimited money, coins, and all vehicles unlocked.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export function constructMetadata(overrides: SEOProps = {}): Metadata {
  return {
    ...defaultSEO,
    title: overrides.title ? `${overrides.title} | Hill Climb Mod` : defaultSEO.title,
    description: overrides.description || defaultSEO.description,
    keywords: overrides.keywords ? [...(defaultSEO.keywords as string[]), ...overrides.keywords] : defaultSEO.keywords,
    openGraph: {
      ...defaultSEO.openGraph,
      title: overrides.title || defaultSEO.openGraph?.title,
      description: overrides.description || defaultSEO.openGraph?.description,
      url: overrides.url || defaultSEO.openGraph?.url,
      ...(overrides.image && {
        images: [
          {
            url: overrides.image,
            width: 1200,
            height: 630,
            alt: overrides.title || 'Hill Climb Racing Mod APK',
          },
        ],
      }),
    },
    twitter: {
      ...defaultSEO.twitter,
      title: overrides.title || defaultSEO.twitter?.title,
      description: overrides.description || defaultSEO.twitter?.description,
      ...(overrides.image && {
        images: [overrides.image],
      }),
    },
  };
}
