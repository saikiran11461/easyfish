import CategoriesSection from "@/components/Categories";
import Header from "@/components/Header";
import MakesFresh from "@/components/MakesFresh";
import MissionSection from "@/components/MissionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseUsSection from "@/components/WhyChooseUs";


export default function Home() {
  return (
    <>
     <Header/>
    <MakesFresh/>
    <CategoriesSection/>
    <MissionSection/>
    <WhyChooseUsSection/>
    <TestimonialsSection/>  
    </>
  );
}
