import React from 'react'
import AboutBg from '../images/Fishimg.jpeg'
import Header from '../Components/Header'
import ClinentsCard1 from '../Components/ClinentsCard1'
import ClinentsCard2 from '../Components/ClientsCard2'
import GovernmentImg from '../images/Clinent1.png'
import GovernmentImg1 from '../images/Clinent2.png'
import GovernmentImg2 from '../images/Clinents3.png'
import GovernmentImg3 from '../images/Clinets4.png'
import GovernmentImg4 from '../images/Clients5.png'
import GovernmentImg5 from '../images/Clients6.png'
import GovernmentImg6 from '../images/Clients7.png'
import GovernmentImg7 from '../images/Clients8.png'
import FooterTop from '../Components/FooterTop'
import Footer from '../Components/Footer'

const Clinets = () => {

    const clientsData = [
        { type: 1, image: GovernmentImg, heading: "Government Departments", text: "We are equipped to handle the massive logistical demands of the Indian Army, Navy, and Air Force. Ettemad Agro provides high-protein, strictly inspected meat products that meet the rigorous health and safety standards required for our nation’s defense personnel. We also serve government canteens and institutional mess facilities with reliable bulk meat supply." },
        { type: 2, image: GovernmentImg1, heading: "Airlines & Railways Caterings", text: "Airline Catering: We facilitate world-class in-flight dining by providing frozen meat supplies and fresh cuts that adhere to international safety protocols. Our halal meat supply ensures all dietary preferences are met for global travelers. Indian Railways: With our temperature-controlled meat delivery in India, we support railway catering services, ensuring freshness across long-distance transit." },
        { type: 1, image: GovernmentImg2, heading: "Cloud Kitchens & QSRs", text: "We are equipped to handle the massive logistical demands of the Indian Army, Navy, and Air Force. Ettemad Agro provides high-protein, strictly inspected meat products that meet the rigorous health and safety standards required for our nation’s defense personnel. We also serve government canteens and institutional mess facilities with reliable bulk meat supply." },
        { type: 2, image: GovernmentImg3, heading: "Hospitality: Hotels, Restaurants & Cafes", text: "Airline Catering: We facilitate world-class in-flight dining by providing frozen meat supplies and fresh cuts that adhere to international safety protocols. Our halal meat supply ensures all dietary preferences are met for global travelers. Indian Railways: With our temperature-controlled meat delivery in India, we support railway catering services, ensuring freshness across long-distance transit." },
        { type: 1, image: GovernmentImg4, heading: "Food Processing & Manufacturing", text: "We are equipped to handle the massive logistical demands of the Indian Army, Navy, and Air Force. Ettemad Agro provides high-protein, strictly inspected meat products that meet the rigorous health and safety standards required for our nation’s defense personnel. We also serve government canteens and institutional mess facilities with reliable bulk meat supply." },
        { type: 2, image: GovernmentImg5, heading: "Retailers & Hypermarket Chains", text: "Airline Catering: We facilitate world-class in-flight dining by providing frozen meat supplies and fresh cuts that adhere to international safety protocols. Our halal meat supply ensures all dietary preferences are met for global travelers. Indian Railways: With our temperature-controlled meat delivery in India, we support railway catering services, ensuring freshness across long-distance transit." },
        { type: 1, image: GovernmentImg6, heading: "Pet Food Manufacturers", text: "We are equipped to handle the massive logistical demands of the Indian Army, Navy, and Air Force. Ettemad Agro provides high-protein, strictly inspected meat products that meet the rigorous health and safety standards required for our nation’s defense personnel. We also serve government canteens and institutional mess facilities with reliable bulk meat supply." },
        { type: 2, image: GovernmentImg7, heading: "Wholesale & Large-Scale Distributors", text: "Airline Catering: We facilitate world-class in-flight dining by providing frozen meat supplies and fresh cuts that adhere to international safety protocols. Our halal meat supply ensures all dietary preferences are met for global travelers. Indian Railways: With our temperature-controlled meat delivery in India, we support railway catering services, ensuring freshness across long-distance transit." }
    ];
    return (
        <>

            <Header />
            <div className="relative w-full h-[200px] overflow-hidden mt-20">

                {/* Background Image */}
                <img
                    src={AboutBg}
                    alt="About Us"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/70"></div>

                {/* About Us */}
                <div className="relative z-10 h-full flex items-center justify-center">
                    <h1 className="text-white text-3xl sm:text-4xl font-bold">
                        Clients
                    </h1>
                </div>

            </div>


            <div className="w-full px-4 sm:px-6 lg:px-10 py-10 sm:py-12 lg:py-14">
                <div className="w-full max-w-[1000px] mx-auto text-center">
                    <h2 className="text-1xl sm:text-2xl md:text-3xl font-semibold leading-tight mb-5 sm:mb-6">
                        Leading B2B meat supplier for Global & Local Industries
                    </h2>

                    <p className="text-sm sm:text-base md:text-[15px] leading-6 sm:leading-7">
                        <strong>Ettemad Agro</strong> is a <strong>Leading B2B meat supplier</strong> for Global & Local Industries, dedicated to bridging the gap between farm-fresh quality and large-scale industrial requirements. We specialize in providing a consistent, <strong className="text-[var(--red-primary)] underline">halal-certified</strong>, and highly regulated supply of poultry, mutton, seafood, and eggs. As a trusted <strong>B2B meat supplier in India</strong>, we understand that procurement managers and business owners require more than just a vendor—they require a strategic partner who ensures food safety, timely logistics, and premium grading.
                    </p>

                    <h2 className="text-2xl sm:text-3xl md:text-3xl font-semibold leading-tight mt-12 sm:mt-14 lg:mt-16">
                        Industries We Serve
                    </h2>
                </div>
            </div>

            {clientsData.map((item, index) => item.type === 1 ?
            <ClinentsCard1 key={index} Clinentsimage={item.image} Heading={item.heading} Text={item.text} /> :
            <ClinentsCard2 key={index} clientsimage={item.image} Heading={item.heading} text={item.text} />)}
            <FooterTop />
            <Footer />
        </>
    )
}

export default Clinets