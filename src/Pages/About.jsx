import React, { useEffect } from 'react'
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutBg from '../images/Fishimg.jpeg'
import Header from '../Components/Header'
import About1 from '../images/About1.png'
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


      <section className="bg-[var(--bg-primary2)] py-16 sm:py-20">
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
                  <button onClick={() => setShowDocuments(true)} className="inline-flex items-center gap-2 bg-[var(--red-primary)] text-white px-5 py-3 rounded-lg font-semibold text-sm hover:bg-[#8f002a] transition duration-300 shadow-md">
                    📄 View Documents
                  </button>

                  {showDocuments && (
                    <div className="fixed inset-0 z-[9999] bg-black/60 flex items-center justify-center p-3 sm:p-4">
                      <div className="bg-white w-full max-w-[500px] max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl p-4 sm:p-6 relative">
                        <button onClick={() => setShowDocuments(false)} className="absolute top-3 right-3 sm:right-4 text-2xl sm:text-3xl text-gray-500 hover:text-black leading-none">
                          ×
                        </button>

                        <h3 className="text-xl sm:text-2xl font-bold text-[var(--red-primary)] mb-2 pr-8">
                          Client Documents
                        </h3>

                        <p className="text-gray-500 text-xs sm:text-sm mb-5 sm:mb-6">
                          View or download the available documents.
                        </p>

                        <div className="space-y-3">
                          <a href={CompanyProfile} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-3 p-3 sm:p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition">
                            <span className="font-medium text-gray-700 text-sm sm:text-base">Company Profile</span>
                            <span className="text-[var(--red-primary)] font-semibold text-xs sm:text-sm whitespace-nowrap">View PDF →</span>
                          </a>

                          <a href={CompanyCertificate} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-3 p-3 sm:p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition">
                            <span className="font-medium text-gray-700 text-sm sm:text-base">Company Certificate</span>
                            <span className="text-[var(--red-primary)] font-semibold text-xs sm:text-sm whitespace-nowrap">View PDF →</span>
                          </a>

                          <a href={RegistrationDocument} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-3 p-3 sm:p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition">
                            <span className="font-medium text-gray-700 text-sm sm:text-base">Registration Document</span>
                            <span className="text-[var(--red-primary)] font-semibold text-xs sm:text-sm whitespace-nowrap">View PDF →</span>
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


      <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-0">

          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left Image */}
            <div className="relative" data-aos="fade-right">

              <div className="overflow-hidden rounded-3xl">
                <img
                  src={About1}
                  alt="Ettemad Agro"
                  className="w-full h-[350px] sm:h-[450px] lg:h-[540px] object-cover"
                />
              </div>

            </div>


            {/* Right Content */}
            <div data-aos="fade-left">

              <span className="inline-block text-sm font-semibold tracking-wider uppercase text-[#9E012E] mb-3">
                About Nk Global Export
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold leading-tight text-gray-900">
                Your Trusted
                <span className="text-[#9E012E]"> Wholesale Meat </span>
                Supplier
              </h2>

              <p className="mt-5 text-[15px] sm:text-[16px] leading-7 text-gray-600">
                Nk Global is a leading wholesale poultry supplier in India,
                established in 2018. We specialize in supplying high-quality
                poultry, mutton, seafood to businesses across the country.
              </p>

              <p className="mt-4 text-[15px] sm:text-[16px] leading-7 text-gray-600">
                With years of industry experience, we provide fresh and frozen
                meat products to hotels, restaurants, retailers, cloud kitchens,
                wholesalers, and large distributors.
              </p>


              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">

                <div className="rounded-2xl bg-[#FDF3F6] p-5">
                  <div className="text-2xl mb-3">✓</div>
                  <h3 className="font-semibold text-gray-900">
                    Quality
                  </h3>
                  <p className="text-xs text-gray-600 mt-2 leading-5">
                    Premium quality meat with consistent standards.
                  </p>
                </div>

                <div className="rounded-2xl bg-[#FDF3F6] p-5">
                  <div className="text-2xl mb-3">🚚</div>
                  <h3 className="font-semibold text-gray-900">
                    Fast Supply
                  </h3>
                  <p className="text-xs text-gray-600 mt-2 leading-5">
                    Reliable bulk delivery across India.
                  </p>
                </div>

                <div className="rounded-2xl bg-[#FDF3F6] p-5">
                  <div className="text-2xl mb-3">✓</div>
                  <h3 className="font-semibold text-gray-900">
                    Hygiene
                  </h3>
                  <p className="text-xs text-gray-600 mt-2 leading-5">
                    Strict hygiene and halal processing standards.
                  </p>
                </div>

              </div>

            </div>
          </div>


          {/* Bottom Information */}
          <div className="mt-14 sm:mt-16 lg:mt-20 rounded-3xl bg-[#FDF3F6] p-6 sm:p-8 lg:p-10">

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

              {/* Supply Chain */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Complete Supply Chain
                </h3>

                <p className="mt-3 text-sm sm:text-[15px] leading-7 text-gray-600">
                  Through in-house poultry farming and strong collaborations,
                  we maintain end-to-end control over our supply chain,
                  ensuring dependable and consistent product quality.
                </p>
              </div>


              {/* Distribution */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Nationwide Distribution
                </h3>

                <p className="mt-3 text-sm sm:text-[15px] leading-7 text-gray-600">
                  We serve bulk orders across India, including both North
                  and South India, with reliable distribution support.
                </p>
              </div>


              {/* Clients */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Our B2B Clients
                </h3>

                <div className="flex flex-wrap gap-2 mt-4">

                  <span className="px-3 py-2 rounded-full bg-white text-xs sm:text-sm text-gray-700">
                    Hotels
                  </span>

                  <span className="px-3 py-2 rounded-full bg-white text-xs sm:text-sm text-gray-700">
                    Restaurants
                  </span>

                  <span className="px-3 py-2 rounded-full bg-white text-xs sm:text-sm text-gray-700">
                    Cloud Kitchens
                  </span>

                  <span className="px-3 py-2 rounded-full bg-white text-xs sm:text-sm text-gray-700">
                    Retailers
                  </span>

                  <span className="px-3 py-2 rounded-full bg-white text-xs sm:text-sm text-gray-700">
                    Wholesalers
                  </span>

                  <span className="px-3 py-2 rounded-full bg-white text-xs sm:text-sm text-gray-700">
                    Distributors
                  </span>

                </div>
              </div>

            </div>
          </div>

        </div>
      </section>


      <section className="w-full">
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-0 py-12 sm:py-16 lg:py-20">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">

            {/* Image */}
            <div
              className="relative w-full"
              data-aos="fade-right"
            >
              <div className="overflow-hidden rounded-[25px] sm:rounded-[30px]">
                <img
                  src={MissionImg}
                  alt="Ettemad Agro Mission and Vision"
                  className="w-full h-[320px] sm:h-[420px] lg:h-[520px] object-cover"
                />
              </div>
            </div>


            {/* Content */}
            <div data-aos="fade-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-gray-900 leading-tight mt-2">
                Driven by Quality,
                <span className="text-[#9E012E]"> Guided by Trust.</span>
              </h2>


              {/* Mission Card */}
              <div className="mt-7 bg-[#FDF3F6] rounded-2xl p-5 sm:p-6">

                <div className="flex items-start gap-4">

                  <div className="min-w-[45px] h-[45px] rounded-full bg-[#9E012E] flex items-center justify-center text-white font-bold">
                    M
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      Our Mission
                    </h3>

                    <p className="mt-2 text-sm sm:text-[15px] leading-7 text-gray-600">
                      Nk Global is dedicated to providing exceptional
                      meat products as a leading global supplier. We maintain
                      high standards in sourcing, processing, and distribution
                      while supporting sustainability, hygiene, and customer
                      satisfaction.
                    </p>
                  </div>

                </div>
              </div>


              {/* Vision Card */}
              <div className="mt-5 bg-[#FDF3F6] rounded-2xl p-5 sm:p-6">

                <div className="flex items-start gap-4">

                  <div className="min-w-[45px] h-[45px] rounded-full bg-[#9E012E] flex items-center justify-center text-white font-bold">
                    V
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      Our Vision
                    </h3>

                    <p className="mt-2 text-sm sm:text-[15px] leading-7 text-gray-600">
                      Our vision is to become a globally recognized meat
                      supplier known for quality, sustainability, customer
                      satisfaction, and strong health and safety standards.
                      We continuously improve our systems and relationships
                      to achieve this vision.
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <FooterTop />
      <Footer />
    </>
  )
}

export default About