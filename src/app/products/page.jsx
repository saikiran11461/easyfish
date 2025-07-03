import Products from "./Products";

export const metadata = {
  title: 'Our Products - EasyFish',
  description: 'Browse our selection of fresh seafood, handpicked for quality.',
  openGraph: {
    title: 'Our Products - EasyFish',
    description: 'Browse our selection of fresh seafood, handpicked for quality.',
    url: 'https://easyfish.in/products',
    siteName: 'EasyFish',
    images: [
      {
        url: 'https://res.cloudinary.com/dwdcs6tzo/image/upload/v1751547032/logo_nmtufl.png',
        width: 1200,
        height: 630,
        alt: 'EasyFish Products',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Products - EasyFish',
    description: 'Fresh, quality seafood available now.',
    images: ['https://res.cloudinary.com/dwdcs6tzo/image/upload/v1751547032/logo_nmtufl.png'],
  },
};



export default function ProductsPage() {
  return <Products />;
}
