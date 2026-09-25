import React from 'react'
import Header from '../Components/Header'
import FooterTop from '../Components/FooterTop';
import Footer from '../Components/Footer';

import Safety from '../images/Safety Equipment.jpg'
import Bearings from '../images/Bearings.jpg'
import Fasteners from '../images/Fasteners.jpg'
import Industrial from '../images/Industrial Tools.jpg'
import Electrical from '../images/Electrical Components.jpg'
import Pipes from '../images/Pipes & Fittings.jpg'

const EngineeringItems = () => {
  const engineeringCategories = [
    {
      title: "Bearings",
      products: "20 Products",
      description: "Reliable bearings for industrial machinery and equipment.",
      image: Bearings,
    },
    {
      title: "Fasteners",
      products: "25 Products",
      description: "Bolts, nuts, screws and fasteners for industrial applications.",
      image: Fasteners,
    },
    {
      title: "Industrial Tools",
      products: "30 Products",
      description: "Professional tools designed for engineering and industrial work.",
      image: Industrial,
    },
    {
      title: "Electrical Components",
      products: "18 Products",
      description: "Quality electrical components for industrial applications.",
      image: Electrical,
    },
    {
      title: "Pipes & Fittings",
      products: "22 Products",
      description: "Durable pipes and fittings for industrial systems.",
      image: Pipes,
    },
    {
      title: "Safety Equipment",
      products: "15 Products",
      description: "Essential safety products for industrial workplaces.",
      image: Safety,
    },
  ];
  return (
    <>
      <Header />

      <section className="w-full py-12 sm:py-16 lg:py-20 bg-[var(--bg-primary2)] mt-20">

        <div className="w-full max-w-[1200px] mx-auto px-3 sm:px-6 lg:px-8">

          {/* Heading */}

          <div className="text-center mb-8 sm:mb-10 lg:mb-12">

            <p className="text-sm sm:text-base font-medium text-[var(--bg-primary)] mb-2">
              Industrial Solutions
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Engineering Items
            </h2>

            <p className="max-w-[680px] mx-auto mt-3 text-sm sm:text-base text-gray-500 leading-6">
              Quality engineering products and industrial components for
              reliable performance and professional applications.
            </p>

          </div>


          {/* Engineering Cards */}

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-7 max-w-[1000px] mx-auto">

            {engineeringCategories.map((item, index) => (

              <div
                key={index}
                className="group w-full overflow-hidden rounded-xl sm:rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300"
              >

                {/* Image */}

                <div className="relative w-full h-[160px] sm:h-[250px] overflow-hidden bg-gray-100">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

                  <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-5">

                    <span className="text-white text-xs sm:text-sm font-medium">
                      {item.products}
                    </span>

                  </div>

                </div>


                {/* Content */}

                <div className="p-3 sm:p-5">

                  <h3 className="text-sm sm:text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="hidden sm:block mt-2 text-sm text-gray-500 leading-5">
                    {item.description}
                  </p>

                  <button
                    className="mt-3 sm:mt-4 inline-flex items-center text-xs sm:text-sm font-semibold text-[var(--bg-primary)]"
                  >
                    Explore Items

                    <span className="ml-1 sm:ml-2 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>

                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* <FooterTop/> */}
      <Footer/>
    </>
  )
}

export default EngineeringItems