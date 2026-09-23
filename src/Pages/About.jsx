import React, { useEffect } from 'react'
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutBg from '../images/Fishimg.jpeg'
import Header from '../Components/Header'
import About1 from '../images/About1.webp'
import MissionImg from '../images/About2.png'
import FooterTop from '../Components/FooterTop'
import Footer from '../Components/Footer';
import NagendraImg from "../images/Clientimg.jpeg";

import CompanyProfile from "../Documents/CPA-MBA-FIN, NAGENDRA SINGH-GCFO.pdf";
import CompanyCertificate from "../Documents/DOC-20260903-WA0009.pdf";
import RegistrationDocument from "../Documents/RUN LLP_Name Approval Letter.pdf";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [showDocuments, setShowDocuments] = useState(false);

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
            About Us
          </h1>
        </div>

      </div>


      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">

          {/* Main Content */}
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-start">

            {/* LEFT SIDE */}
            <div>

              {/* Image Box */}
              <div className="bg-[#f5f7fa] rounded-2xl border border-gray-200 overflow-hidden flex justify-center" data-aos="fade-right">
                <img
                  src={NagendraImg}
                  alt="Nagendra Singh"
                  className="w-full h-auto max-h-[540px] object-contain"
                />
              </div>


            </div>

            {/* RIGHT SIDE */}
            <div>

              <p className="text-sm font-semibold tracking-[2px] uppercase text-[#2A3855] mb-2" data-aos="fade-right">
                Leadership
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--red-primary)]]leading-tight mb-6" data-aos="fade-right">
                Meet Our Leadership
              </h2>

              <div className="space-y-4 text-gray-600 leading-7 text-[15px] sm:text-base" data-aos="fade-right">

                <p>
                  Nagendra Singh is a senior management professional with over
                  <span className="font-semibold text-gray-800">
                    {" "}27 years of professional experience
                  </span>
                  {" "}across finance, accounting, business operations and
                  strategic management.
                </p>

                <p>
                  His professional journey includes extensive experience in
                  financial planning, budgeting, auditing, taxation, management
                  reporting, business controls and operational management.
                </p>
              </div>

              {/* STATS */}
              <div className="grid grid-cols-2 gap-4 mt-8">

                <div className="border border-gray-200 rounded-xl p-4 bg-white hover:border-[#2A3855] transition duration-300" data-aos="fade-right">
                  <h3 className="text-2xl font-bold text-[#2A3855]">
                    27+
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Years of Experience
                  </p>
                </div>

                <div className="border border-gray-200 rounded-xl p-4 bg-white hover:border-[#2A3855] transition duration-300" data-aos="fade-right">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                    Finance & Accounts
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Core Expertise
                  </p>
                </div>

                <div className="border border-gray-200 rounded-xl p-4 bg-white hover:border-[#2A3855] transition duration-300" data-aos="fade-right">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                    International
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Professional Experience
                  </p>
                </div>

                <div className="border border-gray-200 rounded-xl p-4 bg-white hover:border-[#2A3855] transition duration-300" data-aos="fade-right">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                    Strategic Management
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Business Focus
                  </p>
                </div>
                <div className="mt-7">
                  <button
                    onClick={() => setShowDocuments(true)}
                    className="inline-flex items-center gap-2 bg-[var(--red-primary)] text-white px-5 py-3 rounded-lg font-semibold text-sm hover:bg-[#8f002a] transition duration-300 shadow-md"
                  >
                    📄 View Documents
                  </button>

                  {showDocuments && (
                    <div className="fixed inset-0 z-[9999] bg-black/60 flex items-center justify-center px-4">

                      <div className="bg-white w-full max-w-[500px] rounded-2xl shadow-2xl p-6 relative">

                        <button
                          onClick={() => setShowDocuments(false)}
                          className="absolute top-3 right-4 text-2xl text-gray-500 hover:text-black"
                        >
                          ×
                        </button>

                        <h3 className="text-2xl font-bold text-[var(--red-primary)] mb-2">
                          Client Documents
                        </h3>

                        <p className="text-gray-500 text-sm mb-6">
                          View or download the available documents.
                        </p>

                        <div className="space-y-3">

                          <a
                            href={CompanyProfile}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition"
                          >
                            <span className="font-medium text-gray-700">
                              Company Profile
                            </span>

                            <span className="text-[var(--red-primary)] font-semibold">
                              View PDF →
                            </span>
                          </a>

                          <a
                            href={CompanyCertificate}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition"
                          >
                            <span className="font-medium text-gray-700">
                              Company Certificate
                            </span>

                            <span className="text-[var(--red-primary)] font-semibold">
                              View PDF →
                            </span>
                          </a>

                          <a
                            href={RegistrationDocument}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition"
                          >
                            <span className="font-medium text-gray-700">
                              Registration Document
                            </span>

                            <span className="text-[var(--red-primary)] font-semibold">
                              View PDF →
                            </span>
                          </a>

                        </div>
                      </div>
                    </div>
                  )}
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-0 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

          <div className="w-full" data-aos="fade-up-right">
            <img src={About1} alt="Ettemad Agro" className="w-full h-auto object-cover" />

            <h2 className="text-xl sm:text-1xl font-semibold mt-5 mb-5 leading-tight">
              Ettemad Agro – Leading Wholesale Poultry Supplier India
            </h2>

            <p className="text-sm sm:text-[14px] leading-7 mb-7">
              Ettemad Agro is a leading Wholesale Poultry Supplier India, established in 2018. We specialize in supplying high-quality poultry, mutton, seafood, and eggs to businesses across the country. Our long-term vision includes expanding globally and exporting superior meat products to international markets.
            </p>

            <p className="text-sm sm:text-[14px] leading-7 mb-7">
              We have also ventured into the online segment through our brand Zresh. After gaining years of industry experience, we launched Ettemad Agro to cater specifically to the B2B sector. Today, we process and supply both fresh and frozen meat to a wide range of clients across India.
            </p>

            <p className="text-sm sm:text-[14px] leading-7">
              At Ettemad Agro, hygiene and safety are our top priorities. All our practices follow strict halal guidelines, ensuring that sourcing, slaughtering, and processing meet the highest standards of cleanliness and compliance. We also customize cuts and product requirements based on our clients’ needs.
            </p>
          </div>

          <div className="w-full" data-aos="fade-up-left">
            <h2 className="text-xl sm:text-1xl font-semibold mb-5 leading-tight">
              Why Ettemad Agro is the Preferred Wholesale Poultry Supplier India
            </h2>

            <p className="text-sm sm:text-[14px] leading-7 mb-7">
              We focus primarily on B2B clients, ensuring <strong>high-quality poultry supply</strong>, timely delivery, and consistent standards. Our passion drives us to maintain our promise—<strong>Quality Promised, Quality Delivered.</strong>
            </p>

            <p className="text-sm sm:text-[14px] leading-7 mb-10">
              We source products from young and healthy livestock, ensuring superior hygiene, extended shelf life, and rich nutritive value. Our modern processing technology ensures premium quality meat across all categories.
            </p>

            <h2 className="text-xl sm:text-1xl font-semibold mb-5 leading-tight">
              Complete Control Over Supply Chain
            </h2>

            <p className="text-sm sm:text-[14px] leading-7 mb-10">
              Through in-house poultry farming and strong collaborations, we maintain end-to-end control over the supply chain. This strengthens our position as a dependable wholesale poultry supplier India trusted by hotels, restaurants, and large distributors.
            </p>

            <h2 className="text-xl sm:text-1xl font-semibold mb-5 leading-tight">
              Nationwide Distribution Network
            </h2>

            <p className="text-sm sm:text-[14px] leading-7 mb-4">
              Ettemad Agro serves bulk orders Pan India, including North and South India. Our clients include:
            </p>

            <ul className="list-disc pl-5 space-y-1 text-sm sm:text-[14px] leading-6">
              <li>Hotels & restaurants</li>
              <li>Cloud kitchens</li>
              <li>Retailers</li>
              <li>Meat wholesalers</li>
              <li>Large-scale distributors</li>
            </ul>
          </div>

        </div>
      </div>




      <div className="w-full max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-0 py-10 sm:py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">

          <div className="w-full" data-aos="fade-up-right">
            <img src={MissionImg} alt="Mission and Vision" className="w-full h-auto aspect-[4/3] object-cover rounded-[20px] sm:rounded-[25px]" />
          </div>

          <div className="w-full" data-aos="fade-up-left">
            <div className="mb-5 sm:mb-12 lg:mb-4">
              <h2 className="text-2xl sm:text-2xl font-semibold">
                Mission
              </h2>

              <p className="text-sm sm:text-[12px] leading-7">
                Ettemad Agro is dedicated to providing exceptional meat products as a leading global supplier. Our mission is to maintain the highest quality standards in sourcing, processing, and distribution while supporting sustainability and enforcing strict hygiene practices. With customer satisfaction as our priority, we aim to become the preferred global choice in the meat industry through innovation and trustworthy service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-2xl font-semibold">
                Vision
              </h2>

              <p className="text-sm sm:text-[12px] leading-7">
                Our vision is to be the world’s leading meat supplier, recognized for our commitment to quality, sustainability, and customer satisfaction. We aim to achieve this by continuously improving our systems, building strong relationships with suppliers and customers, and maintaining the highest health and safety standards.
              </p>
            </div>
          </div>

        </div>
      </div>

      <FooterTop />
      <Footer />
    </>
  )
}

export default About