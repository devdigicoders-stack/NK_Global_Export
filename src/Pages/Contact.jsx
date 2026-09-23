import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import FooterTop from '../Components/FooterTop'
import { FaPhone, FaEnvelope, FaLocationDot, FaClock, FaLinkedinIn, FaInstagram } from "react-icons/fa6";

const Contact = () => {
    return (
        <>
            <Header />
            <div className="w-full bg-gray-50 px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 mt-20">

                <div className="max-w-[1200px] mx-auto">

                    <div className="text-center mb-10 sm:mb-14">
                        <p className="text-[var(--red-primary)] font-semibold text-xs sm:text-sm md:text-base mb-2">
                            GET IN TOUCH
                        </p>

                        <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-gray-900">
                            Contact Ettemad Agro
                        </h1>

                        <p className="max-w-[700px] mx-auto mt-4 text-xs sm:text-sm md:text-base text-gray-600 leading-6 sm:leading-7">
                            Reaching out to us is easy, quick, and reliable. Whether you have questions about our products, need assistance with bulk orders, or simply want to know more about our services, our team is always ready to help.
                        </p>
                    </div>

                    {/* FORM + CONTACT INFO */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">

                        {/* FORM */}
                        <div className="bg-white rounded-[25px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] p-5 sm:p-7 lg:p-8 h-full">

                            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2">
                                Send Us a Message
                            </h2>

                            <p className="text-xs sm:text-sm text-gray-500 mb-6 sm:mb-7">
                                Fill in the details below and our team will get back to you.
                            </p>

                            <form className="space-y-4 sm:space-y-5">

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">

                                    <div>
                                        <label className="block text-xs sm:text-sm font-medium mb-2">
                                            Name <span className="text-[var(--red-primary)]">*</span>
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            className="w-full h-11 sm:h-12 px-3 sm:px-4 text-sm border border-gray-300 rounded-xl outline-none focus:border-[var(--red-primary)] transition"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs sm:text-sm font-medium mb-2">
                                            Email <span className="text-[var(--red-primary)]">*</span>
                                        </label>

                                        <input
                                            type="email"
                                            placeholder="Email Address"
                                            className="w-full h-11 sm:h-12 px-3 sm:px-4 text-sm border border-gray-300 rounded-xl outline-none focus:border-[var(--red-primary)] transition"
                                        />
                                    </div>

                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">

                                    <div>
                                        <label className="block text-xs sm:text-sm font-medium mb-2">
                                            Company
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="Enter Company Name"
                                            className="w-full h-11 sm:h-12 px-3 sm:px-4 text-sm border border-gray-300 rounded-xl outline-none focus:border-[var(--red-primary)] transition"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs sm:text-sm font-medium mb-2">
                                            Country
                                        </label>

                                        <select className="w-full h-11 sm:h-12 px-3 sm:px-4 text-sm border border-gray-300 rounded-xl outline-none focus:border-[var(--red-primary)] transition text-gray-500">
                                            <option>Select Country</option>
                                            <option>India</option>
                                            <option>United Arab Emirates</option>
                                            <option>Saudi Arabia</option>
                                            <option>Other</option>
                                        </select>
                                    </div>

                                </div>

                                <div>
                                    <label className="block text-xs sm:text-sm font-medium mb-2">
                                        Mobile Number <span className="text-[var(--red-primary)]">*</span>
                                    </label>

                                    <input
                                        type="tel"
                                        placeholder="Mobile Number"
                                        className="w-full h-11 sm:h-12 px-3 sm:px-4 text-sm border border-gray-300 rounded-xl outline-none focus:border-[var(--red-primary)] transition"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs sm:text-sm font-medium mb-2">
                                        Your Message <span className="text-[var(--red-primary)]">*</span>
                                    </label>

                                    <textarea
                                        rows="5"
                                        placeholder="Tell us how we can help you..."
                                        className="w-full px-3 sm:px-4 py-3 text-sm border border-gray-300 rounded-xl outline-none resize-none focus:border-[var(--red-primary)] transition"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full h-11 sm:h-12 rounded-xl bg-[var(--red-primary)] text-white text-sm sm:text-base font-semibold hover:bg-[#8f002a] transition duration-300"
                                >
                                    Submit Form
                                </button>

                            </form>

                        </div>

                        {/* CONTACT INFO */}
                        <div className="bg-[var(--red-primary)] text-white rounded-[25px] p-5 sm:p-7 lg:p-8 h-full flex flex-col">

                            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3">
                                Let's Talk
                            </h2>

                            <p className="text-xs sm:text-sm md:text-base leading-6 text-white/90 mb-6 sm:mb-7">
                                Our team is available to assist you with product information, bulk orders, partnerships, and general enquiries.
                            </p>

                            <div className="space-y-5 sm:space-y-6">

                                <div className="flex items-start gap-3 sm:gap-4">
                                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                                        <FaPhone />
                                    </div>

                                    <div>
                                        <p className="text-[10px] sm:text-xs text-white/70 mb-1">
                                            Call Us Anytime
                                        </p>

                                        <p className="text-xs sm:text-sm md:text-base font-medium">
                                            +91 96675 40557
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 sm:gap-4">
                                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                                        <FaEnvelope />
                                    </div>

                                    <div className="min-w-0">
                                        <p className="text-[10px] sm:text-xs text-white/70 mb-1">
                                            Email Support
                                        </p>

                                        <p className="text-xs sm:text-sm md:text-base font-medium break-all">
                                            nsingh.nagendra@gmail.com
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 sm:gap-4">
                                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                                        <FaLocationDot />
                                    </div>

                                    <div>
                                        <p className="text-[10px] sm:text-xs text-white/70 mb-1">
                                            Our Location
                                        </p>

                                        <p className="text-xs sm:text-sm md:text-base font-medium leading-6">
                                            Plot No. 37, Gata No. 174,<br />
                                            Madhiyaon, Jankipuram Extn.,<br />
                                            Lucknow, Uttar Pradesh - 226031.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 sm:gap-4">
                                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                                        <FaClock />
                                    </div>

                                    <div>
                                        <p className="text-[10px] sm:text-xs text-white/70 mb-1">
                                            Business Hours
                                        </p>

                                        <p className="text-xs sm:text-sm md:text-base font-medium">
                                            Mon - Sat | 9:00 AM - 6:00 PM
                                        </p>
                                    </div>
                                </div>

                            </div>

                            <div className="border-t border-white/20 mt-auto pt-5 sm:pt-6">

                                <p className="text-[10px] sm:text-xs text-white/70 mb-3">
                                    SOCIAL NETWORKS
                                </p>

                                <div className="flex gap-3">

                                    <div className="w-9 h-9 rounded-full bg-white text-[var(--red-primary)] flex items-center justify-center cursor-pointer hover:scale-110 transition">
                                        <FaLinkedinIn />
                                    </div>

                                    <div className="w-9 h-9 rounded-full bg-white text-[var(--red-primary)] flex items-center justify-center cursor-pointer hover:scale-110 transition">
                                        <FaInstagram />
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                    <div className="w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[450px] mt-6 sm:mt-8 rounded-[25px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)]">

                        <iframe
                            src="https://www.google.com/maps?q=417%20ITO%2C%20IP%20Estate%2C%20New%20Delhi%20110002&output=embed"
                            className="w-full h-full border-0"
                            loading="lazy"
                            title="Ettemad Agro Location"
                        ></iframe>

                    </div>

                </div>

            </div>
            <Footer />
        </>
    )
}

export default Contact