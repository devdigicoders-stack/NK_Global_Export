import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Header from '../Components/Header'
import ProductsBg from '../images/Fishimg.jpeg'
import ProductsCom1 from '../Components/ProductsCom1';
import ProductsCom2 from '../Components/ProductsCom2';
import ProductsImg from '../images/P1.png'
import ProductsImg4 from '../images/P6.png'
import ProductsImg1 from '../images/P2.png'
import ProductsImg2 from '../images/P4.png'
import ProductsImg3 from '../images/P5.png'
import FooterTop from '../Components/FooterTop'
import Footer from '../Components/Footer'
import ProductsTop from '../Components/ProductsTop';
import Apple from '../images/Apple.jpg'
import Orange from '../images/Orange.png'
import Grapes from '../images/Grapes.jpg'
import Potato from '../images/Potato.jpg'
import Tomato from '../images/Tomato.jpg'
import Carrot from '../images/Carrot.jpg'
import Rice from '../images/Rice1.jpg'
import Wheat from '../images/Wheat.jpg'
import Sugar from '../images/Sugar.avif'
import Salt from '../images/Salt.jpg'
import Lentils from '../images/Lentils.jpg'
import FLour from '../images/Flor.jpg'

const Products = () => {

    const ProductsTopData = [
        { products: Apple, Name: "Apple", },
        { products: Orange, Name: "Orange", },
        { products: Grapes, Name: "Grapes", },
        { products: Potato, Name: "Potato", },
        { products: Tomato, Name: "Tomato", },
        { products: Carrot, Name: "Carrot", },
    ];
    const ProductsTopData1 = [
        { products: Rice, Name: "Rice", },
        { products: Wheat, Name: "Wheat", },
        { products: Sugar, Name: "Sugar", },
        { products: Salt, Name: "Salt", },
        { products: Lentils, Name: "Lentils", },
        { products: FLour, Name: "Flour", },
    ];

    const productsData = [
        {
            type: 1,
            image: ProductsImg,
            heading: "Ettemad Agro Products – Fresh, Premium & Natural Choices",
            text: "Ettemad Agro Products bring you a powerful range of natural, farm-fresh essentials designed to support a healthy lifestyle. Our commitment to purity ensures every product is sourced responsibly and processed with utmost care. Whether EtteMad Agro Products deliver unmatched quality and freshness."
        },
        {
            type: 2,
            image: ProductsImg1,
            heading: "Poultry",
            text: "At Ettemad Agro, we take pride in providing the finest selection of premium poultry products to businesses across India. As a trusted fresh poultry supplier India and wholesale chicken distributor, our poultry category is designed to meet the diverse culinary needs of restaurants, hotels, cloud kitchens, retailers, and caterers. We offer a wide range of fresh, chilled, and frozen poultry, including: Chicken Curry Cut, Chicken Breast Boneless, Chicken Leg, Drumsticks & Wings, Chicken Mince (Keema), Whole Chicken, Customised Chicken Cuts for B2B. At Ettemad Agro, freshness and hygiene are our top priorities. Every chicken piece undergoes strict quality checks we ensure smooth and reliable B2B supply across major cities including Delhi NCR, Noida, Bangalore, Hyderabad, Chennai, Punjab, and Kerala. Whether you need fresh chicken supplier India, frozen chicken supplier India, or bulk poultry supply for your commercial kitchen."
        },
        {
            type: 1,
            image: ProductsImg4,
            heading: "Mutton",
            text: "At Ettemad Agro, we source the finest cuts of premium lamb and goat meat to deliver tender, flavourful, and succulent mutton products to our B2B clients across India. As a trusted mutton supplier India, we ensure that every piece meets the highest standards of freshness, hygiene, and authenticity. Our mutton range includes: Mutton Curry Cut, Mutton Keema, Mutton Chops & Ribs, Mutton Boneless, Customised Mutton Cuts for Restaurants & Cloud Kitchens. Each product is carefully selected and processed to maintain optimal taste, texture, and nutritional value. All mutton supplied by Ettemad Agro is: 100% halal-certified, sourced from healthy livestock, cleaned and processed under strict hygiene practices, delivered through temperature-controlled logistics for maximum freshness. As one of the most reliable wholesale mutton India."
        },
        {
            type: 2,
            image: ProductsImg2,
            heading: "Seafood",
            text: "Ettemad Agro provides a diverse range of fish, prawns, shrimps, shellfish, and customised seafood portions,checks to ensure natural freshness and authentic flavor. we maintain peak quality from shore to kitchen. As a reliable seafood wholesale supplier India, we cater to hotels, cloud kitchens, and restaurants across Delhi NCR, Bangalore, Hyderabad, Chennai, Punjab, and Kerala."
        },
        {
            type: 1,
            image: ProductsImg3,
            heading: "Chicken & Mutton for Bulk Supply",
            text: "Our chicken and mutton are sourced Each product is carefully processed, graded, and quality-checked to maintain freshness, texture, and nutritional value. As a trusted bulk chicken and mutton supplier in India, we deliver quality products to restaurants, hotels, caterers, food businesses, and cloud kitchens."
        }
    ];

    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <>
            <div className="w-full max-w-full overflow-x-hidden">

                <Header />

                {/* Hero Section */}
                <div className="relative w-full h-[170px] sm:h-[200px] overflow-hidden mt-16 sm:mt-20">

                    {/* Background Image */}
                    <img
                        src={ProductsBg}
                        alt="Products"
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/70"></div>

                    {/* Heading */}
                    <div className="relative z-10 w-full h-full flex items-center justify-center px-4">
                        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center">
                            Products
                        </h1>
                    </div>

                </div>


                {/* Top Products */}

                <div className="w-full px-4 sm:px-6 md:px-8 lg:w-[90%] xl:w-[82%] lg:px-0 mx-auto mt-10 sm:mt-12 mb-8">

                    <div className="flex items-end justify-between gap-4 mb-6 sm:mb-8">

                        <div className="flex items-start gap-3">
                            <div className="w-1 h-6 sm:h-8 bg-[var(--red-primary)] rounded-full"></div>

                            <div>
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--heading)] leading-tight">Fruits & Vegetables</h2>
                            </div>
                        </div>

                        <NavLink to="/fruitsvegetables" className="group shrink-0 inline-flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg border border-[var(--red-primary)] text-[var(--red-primary)] text-xs sm:text-sm font-semibold hover:bg-[var(--red-primary)] hover:text-white transition-all duration-300">
                            <span>View Products</span>
                            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </NavLink>

                    </div>

                    <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-5">
                        {ProductsTopData.map((item, index) => (
                            <div key={index} className={`${!showAll && index >= 6 ? "hidden sm:block" : "block"}`}>
                                <ProductsTop products={item.products} Name={item.Name} />
                            </div>
                        ))}
                    </div>

                </div>

                <div className="w-full px-4 sm:px-6 md:px-8 lg:w-[90%] xl:w-[82%] lg:px-0 mx-auto mt-10 sm:mt-12 mb-8">

                    <div className="flex items-end justify-between gap-4 mb-6 sm:mb-8">

                        <div className="flex items-start gap-3">
                            <div className="w-1 h-6 sm:h-8 bg-[var(--red-primary)] rounded-full"></div>

                            <div>
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--heading)] leading-tight">Dry Goods & Groceries</h2>
                            </div>
                        </div>

                        <NavLink to="/drygoodsgroceries" className="group shrink-0 inline-flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg border border-[var(--red-primary)] text-[var(--red-primary)] text-xs sm:text-sm font-semibold hover:bg-[var(--red-primary)] hover:text-white transition-all duration-300">
                            <span>View Products</span>
                            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </NavLink>

                    </div>

                    <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-5">
                        {ProductsTopData1.map((item, index) => (
                            <div key={index} className={`${!showAll && index >= 6 ? "hidden sm:block" : "block"}`}>
                                <ProductsTop products={item.products} Name={item.Name} />
                            </div>
                        ))}
                    </div>

                </div>


                {/* View More Button */}
                <div className="flex justify-center mb-8 sm:hidden px-4">

                    {!showAll && ProductsTopData.length > 6 && (

                        <button
                            onClick={() => setShowAll(true)}
                            className=" bg-[var(--red-primary)] text-white px-5 py-2 rounded-lg text-sm font-medium  hover:scale-105  transition duration-300 "  >
                            View More
                        </button>

                    )}

                </div>


                {/* Products Sections */}
                <div className="w-full max-w-full overflow-x-hidden overflow-y-hidden">
                    {productsData.map((item, index) =>
                        item.type === 1 ? (
                            <ProductsCom1
                                key={index}
                                ProductsCardImg={item.image}
                                Heading={item.heading}
                                Text={item.text}
                            />
                        ) : (
                            <ProductsCom2
                                key={index}
                                ProductsCardImg={item.image}
                                Heading={item.heading}
                                Text={item.text}
                            />
                        )
                    )}
                </div>
                <FooterTop />

                <Footer />

            </div>


        </>
    )
}

export default Products