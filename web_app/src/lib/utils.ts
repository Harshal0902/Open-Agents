import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { type Metadata } from 'next';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function constructMetadata({
  title = 'Vaultra',
  description = 'Vaultra is an autonomous onchain treasury agent that helps individuals, DAOs, startups, and onchain organizations manage idle capital intelligently.',
  icons = '/favicon.ico',
  noIndex = false
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title, description,
      // images: [{url: image}]
    },
    twitter: { card: 'summary_large_image', title, description, creator: '@bit10app' },
    icons,
    // ToDo: Deploy app
    metadataBase: new URL('https://vaultra.vercel.app'),
    ...(noIndex && { robots: { index: false, follow: false } }),
  };
}

export const formatAddress = (id: string) => {
  if (!id) return '';
  if (id.length <= 7) return id;
  return `${id.slice(0, 8)}.....${id.slice(-8)}`;
};
