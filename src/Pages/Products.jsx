import React, { useEffect } from 'react'
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
import ProductsChiken from '../images/ProductsChiken.avif'
import ProductsMutton from '../images/Pmutton.avif'
import ProductsColdcuds from '../images/Pcoldcuds.avif'
import Productscombo from '../images/Pcombo.avif'
import Productspfish from '../images/Pfish.avif'
import Productsparty from '../images/Pparty.avif'
import Productscook from '../images/PCook.avif'
import ProductsLicio from '../images/Plicious.avif'
import ProductsMasala from '../images/Pmasala.avif'
import ProductsBurger from '../images/Pburgur.avif'
import ProductsMomo from '../images/Pmomo.avif'
import ProductsBeastSeller from '../images/PbestSeller.avif'

const Products = () => {

    const ProductsTopData = [
        { products: ProductsChiken, Name: "Chiken", },
        { products: ProductsMutton, Name: "Mutton", },
        { products: ProductsColdcuds, Name: "Cold Cuts", },
        { products: Productscombo, Name: "Combos", },
        { products: Productspfish, Name: "Fish & Seafood", },
        { products: Productsparty, Name: "Party Starters", },
        { products: Productscook, Name: "Ready to cook", },
        { products: ProductsLicio, Name: "Licious", },
        { products: ProductsMasala, Name: "Curries", },
        { products: ProductsBurger, Name: "Wings", },
        { products: ProductsMomo, Name: "Momos", },
        { products: ProductsBeastSeller, Name: "Bestsellers", },
        { products: ProductsChiken, Name: "Chiken", },
        { products: ProductsMutton, Name: "Mutton", },
        { products: ProductsColdcuds, Name: "Cold Cuts", },
        { products: Productscombo, Name: "Combos", },
        { products: Productspfish, Name: "Fish & Seafood", },
        { products: Productsparty, Name: "Party Starters", },
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
            <Header />

            <div className="relative w-full h-[200px] overflow-hidden mt-20">

                {/* Background Image */}
                <img
                    src={ProductsBg}
                    alt="About Us"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/70"></div>

                {/* About Us */}
                <div className="relative z-10 h-full flex items-center justify-center">
                    <h1 className="text-white text-3xl sm:text-4xl font-bold">
                        Products
                    </h1>
                </div>
            </div>

            <div className='h-auto w-[82%] mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 mt-10 mb-5'>
                {ProductsTopData.map((item, index) => (
                    <div key={index} className={`${!showAll && index >= 6 ? 'hidden sm:block' : 'block'}`}>
                        <ProductsTop products={item.products} Name={item.Name} />
                    </div>
                ))}
            </div>

            <div className='flex justify-center mb-8 sm:hidden'>
                {!showAll && ProductsTopData.length > 6 && (
                    <button
                        onClick={() => setShowAll(true)}
                        className='bg-[var(--red-primary)] text-white px-6 py-2.5 rounded-lg font-medium hover:scale-105 transition duration-300'
                    >
                        View More
                    </button>
                )}
            </div>

            {productsData.map((item, index) => item.type === 1 ?
                <ProductsCom1 key={index} ProductsCardImg={item.image} Heading={item.heading} Text={item.text} /> :
                <ProductsCom2 key={index} ProductsCardImg={item.image} Heading={item.heading} Text={item.text} />)}

            <FooterTop />
            <Footer />


        </>
    )
}

export default Products