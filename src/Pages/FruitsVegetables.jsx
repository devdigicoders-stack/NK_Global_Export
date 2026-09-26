import React from 'react'
import { useState } from 'react'
import Header from '../Components/Header'
import ProductSectionHeading from '../Components/ProductsSectionHeading'
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
import Grapes from '../images/Grapes.jpg'
import Papaya from '../images/Papaya.jpg'
import Watermelon from '../images/Watermelon.jpg'
import Guava from '../images/Guava.jpg'
import Kiwi from '../images/Kiwi.jpg'
import Pomegranate from '../images/Pomegranate.jpg'
import Banana from '../images/Banana.webp'
import Cabbage from '../images/Cabbage.jpg'
import Cauliflower from '../images/Cauliflower.jpg'
import Spinach from '../images/Spinach.jpg'
import Capsicum from '../images/Capsicum.jpg'
import Brinjal from '../images/Brinjal.jpg'
import LadyFinger from '../images/Lady Finger.jpg'
import GreenPeas from '../images/Green Peas.jpg'
import Cucumber from '../images/Cucumber.jpg'
import Footer from '../Components/Footer'

const FruitsVegetables = () => {

  const [showMoreFruits, setShowMoreFruits] = useState(false);
  const [showMoreVegetables, setShowMoreVegetables] = useState(false);

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

  const MoreVegetablesData = [
    {
      id: 5,
      name: "Cabbage",
      price: 40,
      image: Cabbage,
    },
    {
      id: 6,
      name: "Cauliflower",
      price: 50,
      image: Cauliflower,
    },
    {
      id: 7,
      name: "Spinach",
      price: 30,
      image: Spinach,
    },
    {
      id: 8,
      name: "Capsicum",
      price: 80,
      image: Capsicum,
    },
    {
      id: 9,
      name: "Brinjal",
      price: 45,
      image: Brinjal,
    },
    {
      id: 10,
      name: "Lady Finger",
      price: 60,
      image: LadyFinger,
    },
    {
      id: 11,
      name: "Green Peas",
      price: 100,
      image: GreenPeas,
    },
    {
      id: 12,
      name: "Cucumber",
      price: 40,
      image: Cucumber,
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

  const MoreFruitsData = [
    {
      id: 5,
      name: "Banana",
      price: 60,
      image: Banana,
    },
    {
      id: 6,
      name: "Grapes",
      price: 90,
      image: Grapes,
    },
    {
      id: 7,
      name: "Papaya",
      price: 70,
      image: Papaya,
    },
    {
      id: 8,
      name: "Watermelon",
      price: 40,
      image: Watermelon,
    },
    {
      id: 9,
      name: "Guava",
      price: 80,
      image: Guava,
    },
    {
      id: 10,
      name: "Pomegranate",
      price: 140,
      image: Pomegranate,
    },
    {
      id: 11,
      name: "Kiwi",
      price: 180,
      image: Kiwi,
    },
    {
      id: 12,
      name: "Papaya",
      price: 70,
      image: Papaya,
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
      </div>

      {/* Fruits  */}

      <div className='mt-10'>
        <ProductSectionHeading
          icon="🍎"
          title="FRESH FRUITS"
          subtitle="Fresh & Juicy Fruits"
        />
      </div>

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
        <ViewallBtn text="VIEW ALL FRUITS" onClick={() => setShowMoreFruits(true)} />
      </div>

      {showMoreFruits && (
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4 lg:gap-8 w-full max-w-[1100px] mx-auto px-2 sm:px-0">
          {MoreFruitsData.map((item) => (
            <FruitsCard
              key={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      )}



      {/* Vegetables  */}

      <div className='mt-10'>
        <ProductSectionHeading
          icon="🥕"
          title="FRESH VEGETABLES"
          subtitle="Farm Fresh & Quality Produce"
        />

      </div>

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
        <ViewallBtn
          text="VIEW ALL VEGETABLES"
          onClick={() => setShowMoreVegetables(true)}
        />
      </div>
      {showMoreVegetables && (
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4 lg:gap-8 w-full max-w-[1100px] mx-auto px-2 sm:px-0 mb-5">
          {MoreVegetablesData.map((item) => (
            <FruitsCard
              key={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      )}

      {/* <FooterTop /> */}
      <Footer />


    </>
  )
}

export default FruitsVegetables