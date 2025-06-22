import React from 'react';

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: '✔️',
      title: 'Rigorous Quality Control',
      description: 'Every catch is inspected and graded to ensure premium quality'
    },
    {
      icon: '🌐',
      title: 'Transparent Sourcing',
      description: 'Full traceability from boat to plate with verified origins'
    },
    {
      icon: '💰',
      title: 'Competitive Pricing',
      description: 'Direct sourcing eliminates middlemen for better prices'
    },
    {
      icon: '📦',
      title: 'Vacuum Packaging & 10 Cut Options',
      description: 'Professional packaging with customizable cuts for your needs'
    },
    {
      icon: '📍',
      title: 'Direct from Coastal Fishermen',
      description: 'Supporting local fishing communities while ensuring freshness'
    },
    {
      icon: '🧠',
      title: 'Expert Seafood Guidance',
      description: 'Our team provides cooking tips and selection advice'
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-50 to-[#7C1E12]/5">
      <div className="max-w-7xl mx-auto">
 
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#7C1E12] mb-4">
            Why Choose EasyFish?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the difference with our commitment to quality, sustainability, and customer satisfaction
          </p>
        </div>

    
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="text-3xl transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#7C1E12] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>


        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#F27C00] rounded-full mb-6 shadow-lg">
            <div className="text-white text-2xl">🐟</div>
          </div>
          <h3 className="text-2xl font-bold text-[#7C1E12] mb-4">
            Ready to Experience Premium Seafood?
          </h3>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto">
            Join hundreds of satisfied customers who trust EasyFish for their seafood needs
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
