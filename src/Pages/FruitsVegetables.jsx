import React from 'react'
import Header from '../Components/Header'
import ProductSectionHeading from '../Components/ProductsSectionHeading'
import Fruits from '../images/Furits.png'
import Vegetabels from '../images/Vegetabels.png'
import FruitsCard from '../Components/FruitsCard'
import Apple from '../images/Applecard.jpg'
import Pineapple from '../images/Pineapple.jpg'
import Orange from '../images/Orange.png'
import Mango from '../images/Mango.jpg'
import ViewallBtn from '../Components/ViewallBtn'
import Tomato from '../images/tomatoes-canva.jpg'
import Potato from '../images/PotatoCard.jpg'
import Onion from '../images/onion.webp'
import Carrot from '../images/carrots.webp'
// import FooterTop from '../Components/FooterTop'
import Footer from '../Components/Footer'

const FruitsVegetables = () => {

  const categories = [
    {
      title: "Fruits",
      products: "12 Products",
      image: Fruits,
    },
    {
      title: "Vegetables",
      products: "15 Products",
      image: Vegetabels,
    },
  ];

  const VegetablesData = [
    {
      id: 1,
      name: "Tomato",
      price: 40,
      image: Tomato,
    },
    {
      id: 2,
      name: "Potato",
      price: 30,
      image: Potato,
    },
    {
      id: 3,
      name: "Onion",
      price: 35,
      image: Onion,
    },
    {
      id: 4,
      name: "Carrot",
      price: 50,
      image: Carrot,
    },
  ];
  const FruitsData = [
    {
      id: 1,
      name: "Apple",
      price: 120,
      image: Apple,
    },
    {
      id: 2,
      name: "Pineapple",
      price: 60,
      image: Pineapple,
    },
    {
      id: 3,
      name: "Orange",
      price: 80,
      image: Orange,
    },
    {
      id: 4,
      name: "Mango",
      price: 100,
      image: Mango,
    },
  ];
  return (
    <>
      <Header />

      <div className="w-full bg-white mt-20">

        {/* HERO SECTION  */}
        <section className="w-full bg-[var(--bg-primary2)]">

          <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

            <div className="min-h-[300px] sm:min-h-[380px] lg:min-h-[400px] flex items-center justify-center py-8 sm:py-12 lg:py-20">

              <div className="w-full max-w-[850px] text-center">

                <p className="text-sm sm:text-base font-medium text-[var(--bg-primary)] mb-3">
                  Fresh • Healthy • Naturally Delicious
                </p>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Fresh Fruits & Vegetables
                </h1>

                <p className="max-w-[650px] mx-auto mt-5 text-sm sm:text-base md:text-lg text-gray-600 leading-7">
                  Discover fresh and quality produce for your everyday needs.
                  Handpicked products delivered with freshness and care.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/*  FRESH CATEGORIES  */}

        <section className="w-full py-12 sm:py-16 lg:py-20">

          <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

            {/* Heading */}

            <div className="text-center mb-8 sm:mb-10 lg:mb-12">

              <p className="text-sm sm:text-base font-medium text-[var(--bg-primary)] mb-2">
                Explore Our Collection
              </p>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                Fresh Categories
              </h2>

              <p className="max-w-[600px] mx-auto mt-3 text-sm sm:text-base text-gray-500">
                Choose from our fresh and carefully selected fruits and vegetables.
              </p>

            </div>


            {/* Category Cards */}
            <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:gap-8 w-full max-w-[750px] mx-auto px-2 sm:px-0">

              {categories.map((item, index) => (

                <div
                  key={index}
                  className="group w-full overflow-hidden rounded-xl sm:rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300"
                >

                  {/* Image */}
                  <div className="w-full h-[130px] sm:h-[220px] lg:h-[260px] overflow-hidden bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-3 sm:p-5 lg:p-6 text-center">

                    <h3 className="text-base sm:text-xl lg:text-2xl font-bold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-xs sm:text-sm text-gray-500">
                      {item.products}
                    </p>

                    <button
                      className="mt-3 sm:mt-5 inline-flex items-center justify-center text-xs sm:text-sm font-semibold text-[var(--bg-primary)]"
                    >
                      View All

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

      </div>

      {/* Fruits  */}

      <ProductSectionHeading
        icon="🍎"
        title="FRESH FRUITS"
        subtitle="Fresh & Juicy Fruits"
      />

      <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4 lg:gap-8 w-full max-w-[1100px] mx-auto px-2 sm:px-0">

        {FruitsData.map((item) => (
          <FruitsCard
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}

      </div>

      <div className='w-[90%] flex justify-end mt-5 mb-5'>
        <ViewallBtn text="VIEW ALL FRUITS" />
      </div>



      {/* Vegetables  */}

      <ProductSectionHeading
        icon="🥕"
        title="FRESH VEGETABLES"
        subtitle="Farm Fresh & Quality Produce"
      />


      <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4 lg:gap-8 w-full max-w-[1100px] mx-auto px-2 sm:px-0">

        {VegetablesData.map((item) => (
          <FruitsCard
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}

      </div>


      <div className='w-[90%] flex justify-end mt-5 mb-5'>
        <ViewallBtn text="VIEW ALL VEGETABLES" />
      </div>

      {/* <FooterTop /> */}
      <Footer />


    </>
  )
}

export default FruitsVegetables