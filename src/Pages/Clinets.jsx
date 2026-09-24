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


            <div className="w-full px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20">
                <div className="w-full max-w-[1050px] mx-auto">

                    {/* Main Content */}
                    <div className="text-center">
                        <span className="inline-block text-[var(--red-primary)] text-xs sm:text-sm font-semibold uppercase tracking-[2px] mb-3">
                            Nk Global  Export
                        </span>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-gray-900 mb-5 sm:mb-6">
                            Leading B2B Meat Supplier for
                            <span className="text-[var(--red-primary)]"> Global & Local Industries</span>
                        </h2>

                        <p className="text-sm sm:text-base md:text-[16px] text-gray-600 leading-7 sm:leading-8 max-w-[950px] mx-auto">
                            <strong className="text-gray-900">Nk Global Export</strong> is a{" "}
                            <strong className="text-gray-900">Leading B2B meat supplier</strong>{" "}
                            for Global & Local Industries, dedicated to bridging the gap between
                            farm-fresh quality and large-scale industrial requirements. We
                            specialize in providing a consistent,{" "}
                            <strong className="text-[var(--red-primary)] underline underline-offset-4">
                                halal-certified
                            </strong>
                            , and highly regulated supply of poultry, mutton, seafood.
                            As a trusted{" "}
                            <strong className="text-gray-900">
                                B2B meat supplier in India
                            </strong>
                            , we understand that procurement managers and business owners require
                            more than just a vendor—they require a strategic partner who ensures
                            food safety, timely logistics, and premium grading.
                        </p>
                    </div>

                    {/* Industries Heading */}
                    <div className="flex items-center gap-4 mt-14 sm:mt-16 lg:mt-20">
                        <div className="h-[1px] flex-1 bg-gray-200"></div>

                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-center whitespace-nowrap">
                            Industries We Serve
                        </h2>

                        <div className="h-[1px] flex-1 bg-gray-200"></div>
                    </div>

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