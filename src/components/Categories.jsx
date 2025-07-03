import React from 'react';
import { Fish, Waves, Sun, Sparkles, ChefHat } from 'lucide-react';

const CategoriesSection = () => {
  const categories = [
    {
      id: 1,
      name: '▪️ Finfish - Premium',
      type: 'Premium',
      description: 'Fresh catch from deep waters',
      icon: Fish,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-teal-600',
      image: 'https://www.globalseafood.org/wp-content/uploads/2023/11/eva-bronzini_salmon_pexels_1500-768x512.png'
    },
    {
      id: 2,
      name: '▪️ Finfish - Regular',
      type: 'Regular',
      description: 'Everyday healthy seafood options',
      icon: Fish,
      color: 'from-blue-400 to-blue-500',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-500',
      image: 'https://i.cbc.ca/1.3735904.1472151457!/cpImage/httpImage/image.jpg'
    },
    {
      id: 3,
      name: '▪️ Shellfish - Premium',
      type: 'Premium',
      description: 'Premium crabs, prawns & lobsters',
      icon: Fish,
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50',
      iconColor: 'text-teal-600',
      image: 'https://foodallergiesatlanta.com/wp-content/uploads/2022/03/atlanta-shellfish-allergy-faq.jpg'
    },
    {
      id: 4,
      name: '▪️ Shellfish - Regular',
      type: 'Regular',
      description: 'Great taste, everyday choice',
      icon: Fish,
      color: 'from-teal-400 to-teal-500',
      bgColor: 'bg-teal-50',
      iconColor: 'text-blue-500',
      image: 'https://aanmc.org/wp-content/uploads/2022/07/shellfish-lemon-wedge.jpg'
    },
    {
      id: 5,
      name: '▪️ Dry Fish',
      type: null,
      description: 'Sun-dried traditional delicacies',
      icon: Fish,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      iconColor: 'text-black-600',
      image: 'https://5.imimg.com/data5/ANDROID/Default/2023/3/295501302/ZA/QT/RC/156754038/product-jpeg-500x500.jpg'
    }
  ];

  return (
    <section id='categories'  className="py-24 px-6 bg-gradient-to-br from-white via-slate-50 to-blue-50/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#F27C00]/10 px-4 py-2 rounded-full mb-6">
            <Fish className="w-4 h-4 text-[#F27C00]" />
            <span className="text-[#F27C00] font-medium text-sm">Categories</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-[#7C1E12] mb-6 leading-tight">
            Shop by
            <span className="block text-[#F27C00]">Category</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our premium seafood collection, carefully organized into categories 
            to help you find exactly what you're looking for
          </p>
        </div>

        {/* Categories Grid */}
        <a href="/products">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={category.id}
                  className="group cursor-pointer hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white shadow-lg overflow-hidden rounded-2xl"
                >
                  {/* Image with overlay */}
                  <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent z-10" />
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <div className={`w-12 h-12 ${category.bgColor} rounded-full flex items-center justify-center shadow-lg`}>
                        <IconComponent className={`w-6 h-6 ${category.iconColor}`} />
                      </div>
                    </div>
                    {category.type && (
                      <div className="absolute top-4 right-4 z-20">
                        <span className={`text-xs font-bold px-3 py-1 rounded-full ${category.type === 'Premium' ? 'bg-green-600 text-white' : 'bg-gray-900 text-white'}`}>
                          {category.type}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#7C1E12] mb-2 group-hover:text-[#F27C00] transition-colors duration-300">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-[#F27C00] font-semibold text-sm group-hover:text-[#7C1E12] transition-colors duration-300">
                        Explore →
                      </span>
                      <div
                        className={`w-8 h-8 bg-gradient-to-r ${category.color} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0`}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </a>

        {/* CTA */}
        <div className="text-center mt-16">
          <a href="/products">
            <button className="bg-gradient-to-r from-[#F27C00] to-[#F27C00]/80 hover:from-[#F27C00]/90 hover:to-[#F27C00]/70 text-white px-12 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-semibold">
              Browse All Categories
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;

