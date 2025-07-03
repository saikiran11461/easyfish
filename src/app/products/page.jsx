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
        url: 'https://github.com/user-attachments/assets/610787d2-3d3d-498b-8f2a-252430d5835a',
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
    images: ['https://github.com/user-attachments/assets/610787d2-3d3d-498b-8f2a-252430d5835a'],
  },
};



export default function ProductsPage() {
  return <Products />;
}
