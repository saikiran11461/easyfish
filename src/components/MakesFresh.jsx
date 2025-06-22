import { CheckCircle } from "lucide-react";

const MakesFresh = () => {
  const usps = [
    {
      title: "Cleaned & Cut",
      description: "Ready-to-cook fish, expertly cleaned and cut",
    },
    {
      title: "Non-Frozen",
      description: "Fresh fish, never frozen for optimal taste",
    },
    {
      title: "No Salt, No Sand",
      description: "Sun-dried dry fish without additives",
    },
    {
      title: "Sea Cage Cultivation",
      description: "Sustainable fishing practices",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50 relative overflow-hidden">
  
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg">
          <path fill="#7C1E12" d="M0,10 Q25,0 50,10 T100,10 V20 H0 Z" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
      
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#7C1E12] mb-6">
                What Makes Us Fresh?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At EasyFish by Nabhasya Foods, we bring you the finest seafood from the Bay of Bengal. 
                Our commitment to freshness means every fish is wild-caught, cleaned, and delivered 
                within hours of packaging - no preservatives, no compromises.
              </p>
            </div>

         
            <div className="grid sm:grid-cols-2 gap-6">
              {usps.map((usp, index) => (
                <div 
                  key={index}
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="text-[#F27C00] w-6 h-6 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-[#7C1E12] mb-2">{usp.title}</h3>
                      <p className="text-gray-600 text-sm">{usp.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

   
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&h=600&fit=crop"
                alt="Fresh seafood"
                className="w-full h-[500px] object-cover hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#7C1E12]/20 to-transparent" />
            </div>
            
          
            <div className="absolute -top-6 -right-6 bg-[#F27C00] text-white px-6 py-3 rounded-full font-semibold shadow-lg animate-pulse">
              100% Fresh
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakesFresh;