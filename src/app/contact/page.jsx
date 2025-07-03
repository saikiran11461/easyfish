// ✅ This file is a SERVER component (NO "use client")

export const metadata = {
  title: 'Contact Us - EasyFish',
  description: 'Get in touch with EasyFish for fresh seafood delivery or questions.',
  openGraph: {
    title: 'Contact Us - EasyFish',
    description: 'Reach out to EasyFish for seafood inquiries, support, or feedback.',
    url: 'https://easyfish.vercel.app/contact',
    siteName: 'EasyFish',
    images: [
      {
        url: 'https://github.com/user-attachments/assets/610787d2-3d3d-498b-8f2a-252430d5835a',
        width: 1200,
        height: 630,
        alt: 'Contact EasyFish',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - EasyFish',
    description: 'Questions or feedback? Contact EasyFish today.',
    images: ['https://github.com/user-attachments/assets/610787d2-3d3d-498b-8f2a-252430d5835a'],
  },
};

import Contact from './Contact'; 

export default function ContactPage() {
  return <Contact />;
}
