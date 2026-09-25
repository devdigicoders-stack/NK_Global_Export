import React from 'react'
import Header from '../Components/Header'
import FooterTop from '../Components/FooterTop';
import Footer from '../Components/Footer';

import Rice from '../images/Rice & Grains.jpg'
import Wheat from '../images/Wheat & Flour.webp'
import Pulse from '../images/Pulses & Lentils.jpg'
import Salt from '../images/Salt.jpg'
import Spices from '../images/Spices.jpg'
import Fruits from '../images/Dry Fruits.jpg'

const DryGoodsGroceries = () => {

  const groceryCategories = [
    {
      title: "Rice & Grains",
      products: "12 Products",
      image: Rice,
    },
    {
      title: "Wheat & Flour",
      products: "10 Products",
      image: Wheat,
    },
    {
      title: "Pulses & Lentils",
      products: "15 Products",
      image: Pulse,
    },
    {
      title: "Sugar & Salt",
      products: "8 Products",
      image: Salt,
    },
    {
      title: "Spices",
      products: "18 Products",
      image: Spices,
    },
    {
      title: "Dry Fruits",
      products: "10 Products",
      image: Fruits,
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
              Everyday Essentials
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Dry Goods & Groceries
            </h2>

            <p className="max-w-[650px] mx-auto mt-3 text-sm sm:text-base text-gray-500 leading-6">
              Quality grocery essentials carefully selected for your everyday needs.
            </p>

          </div>


          {/* Grocery Cards */}

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-7 max-w-[1000px] mx-auto">

            {groceryCategories.map((item, index) => (

              <div
                key={index}
                className="group w-full overflow-hidden rounded-xl sm:rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300"
              >

                {/* Image */}

                <div className="w-full h-[150px] sm:h-[250px] overflow-hidden bg-gray-100">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                </div>


                {/* Content */}

                <div className="p-3 sm:p-6">

                  <h3 className="text-sm sm:text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-xs sm:text-sm text-gray-500">
                    {item.products}
                  </p>

                  <button
                    className="mt-3 sm:mt-4 inline-flex items-center text-xs sm:text-sm font-semibold text-[var(--bg-primary)]"
                  >
                    View Products

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
      {/* <FooterTop /> */}
      <Footer />
    </>
  )
}

export default DryGoodsGroceries





