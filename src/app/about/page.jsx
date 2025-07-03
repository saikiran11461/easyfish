

export const metadata = {
  title: 'About Us - EasyFish',
  description: 'Learn about EasyFish’s mission to deliver the freshest seafood.',
  openGraph: {
    title: 'About Us - EasyFish',
    description: 'Discover the story behind EasyFish and our passion for seafood.',
    url: 'https://easyfish.vercel.app/about-us',
    siteName: 'EasyFish',
    images: [
      {
        url: 'https://github.com/user-attachments/assets/610787d2-3d3d-498b-8f2a-252430d5835a',
        width: 1200,
        height: 630,
        alt: 'About EasyFish',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us - EasyFish',
    description: 'Meet the team and values behind EasyFish.',
    images: ['https://github.com/user-attachments/assets/610787d2-3d3d-498b-8f2a-252430d5835a'],
  },
};

import AboutUs from './About'; 
export default function AboutPage() {
  return <AboutUs />;
}
