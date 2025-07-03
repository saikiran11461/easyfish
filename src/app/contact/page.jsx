// ✅ This file is a SERVER component (NO "use client")

export const metadata = {
  title: 'Contact Us - EasyFish',
  description: 'Get in touch with EasyFish for fresh seafood delivery or questions.',
  openGraph: {
    title: 'Contact Us - EasyFish',
    description: 'Reach out to EasyFish for seafood inquiries, support, or feedback.',
    url: 'https://easyfish.in/contact',
    siteName: 'EasyFish',
    images: [
      {
        url: 'https://res.cloudinary.com/dwdcs6tzo/image/upload/v1751547032/logo_nmtufl.png',
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
    images: ['https://res.cloudinary.com/dwdcs6tzo/image/upload/v1751547032/logo_nmtufl.png'],
  },
};

import Contact from './Contact'; 

export default function ContactPage() {
  return <Contact />;
}
