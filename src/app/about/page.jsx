

export const metadata = {
  title: 'About Us - EasyFish',
  description: 'Learn about EasyFish’s mission to deliver the freshest seafood.',
  openGraph: {
    title: 'About Us - EasyFish',
    description: 'Discover the story behind EasyFish and our passion for seafood.',
    url: 'https://easyfish.in/about',
    siteName: 'EasyFish',
    images: [
      {
        url: 'https://res.cloudinary.com/dwdcs6tzo/image/upload/v1751547032/logo_nmtufl.png',
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
    images: ['https://res.cloudinary.com/dwdcs6tzo/image/upload/v1751547032/logo_nmtufl.png'],
  },
};

import AboutUs from './About'; 
export default function AboutPage() {
  return <AboutUs />;
}
