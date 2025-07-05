import CategoriesSection from "@/components/Categories";
import Header from "@/components/Header";
import MakesFresh from "@/components/MakesFresh";
import MissionSection from "@/components/MissionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhatsAppFloatingIcon from "@/components/WatsAppFloatIcon";
import WhyChooseUsSection from "@/components/WhyChooseUs";
import FishFactsSection from "@/components/FinFishFacts";


export const metadata = {
  title: 'EasyFish - Fresh Seafood Delivered',
  description: 'Get the freshest seafood delivered to your doorstep. Quality you can trust from EasyFish.',
  openGraph: {
    title: 'EasyFish - Fresh Seafood Delivered',
    description: 'Get the freshest seafood delivered to your doorstep.',
    url: 'https://easyfish.in/',
    siteName: 'EasyFish',
    images: [
      {
        url: 'https://res.cloudinary.com/dwdcs6tzo/image/upload/v1751547032/logo_nmtufl.png',
        width: 1200,
        height: 630,
        alt: 'EasyFish Logo',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EasyFish - Fresh Seafood Delivered',
    description: 'Get the freshest seafood delivered to your doorstep.',
    images: ['https://res.cloudinary.com/dwdcs6tzo/image/upload/v1751547032/logo_nmtufl.png'],
  },
};



export default function Home() {
  return (
    <>
    
     <Header/>
    <MakesFresh/>
    <CategoriesSection/>
    <MissionSection/>
    <WhyChooseUsSection/>
    <TestimonialsSection/>  
    <WhatsAppFloatingIcon/>
    <FishFactsSection/>
    </>
  );
}
