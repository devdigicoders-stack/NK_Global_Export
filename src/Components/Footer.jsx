import React from "react";
import { FaPhone, FaEnvelope, FaLocationDot, FaLinkedinIn, FaInstagram, FaFacebookF, FaArrowRight, FaLeaf, } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Footer1 from '../images/Footer1.png'

const Footer = () => {
    const navigate = useNavigate();

    const footerclick = () => {
        navigate('/contact')
    }
    return (
        <footer className="w-full bg-[var(--bg-primary)] text-white">

            {/* Top CTA */}
            <div className="w-full px-4 sm:px-6 lg:px-10 pt-8 sm:pt-12">
                <div className="max-w-[1350px] mx-auto bg-white rounded-[25px] sm:rounded-[35px] px-5 sm:px-8 lg:px-12 py-7 sm:py-9 flex flex-col md:flex-row items-center justify-between gap-5">

                    <div className="text-center md:text-left">
                        <p className="text-[#A90032] text-xs sm:text-sm font-semibold uppercase tracking-widest mb-1">
                            Fresh • Trusted • Quality
                        </p>

                        <h2 className="text-[#222] text-xl sm:text-2xl lg:text-3xl font-bold">
                            Looking for Quality Products?
                        </h2>

                        <p className="text-gray-500 text-xs sm:text-sm mt-2">
                            Connect with Nk Global Export for bulk and business enquiries.
                        </p>
                    </div>

                    <button className="shrink-0 bg-[#A90032] hover:bg-[#850027] text-white px-5 sm:px-7 py-3 rounded-full font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        onClick={footerclick}
                    >
                        Contact Us
                        <FaArrowRight />
                    </button>

                </div>
            </div>


            {/* Main Footer */}
            <div className="max-w-[1350px] mx-auto px-5 sm:px-8 lg:px-12 pt-10 sm:pt-14 lg:pt-16 pb-8">

                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr] gap-x-5 gap-y-10 sm:gap-x-8 sm:gap-y-12 lg:gap-14">

                    {/* Brand */}
                    <div className="col-span-2 lg:col-span-1">

                        <div className="flex items-center mb-4 sm:-mb-2">
                            <img
                                src={Footer1}
                                alt="Ettemad Agro"
                                className="w-[120px] xs:w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] xl:w-[220px] h-auto object-contain"
                            />
                        </div>

                        <p className="text-white/75 text-[12px] sm:text-[13px] lg:text-sm leading-6 sm:leading-7 max-w-[360px]">
                            Nk Global Export is a trusted meat supply company specializing
                            in poultry, mutton, seafood. We focus on quality.
                        </p>

                        {/* Social */}
                        <div className="mt-5 sm:mt-6">

                            <p className="text-xs sm:text-sm font-semibold mb-3">
                                Follow Us
                            </p>

                            <div className="flex gap-2.5 sm:gap-3">

                                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-white hover:text-[#A90032] transition-all duration-300">
                                    <FaLinkedinIn className="text-xs sm:text-sm" />
                                </div>

                                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-white hover:text-[#A90032] transition-all duration-300">
                                    <FaInstagram className="text-xs sm:text-sm" />
                                </div>

                                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-white hover:text-[#A90032] transition-all duration-300">
                                    <FaFacebookF className="text-xs sm:text-sm" />
                                </div>

                            </div>

                        </div>

                    </div>


                    {/* Company */}
                    <div>

                        <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-4 sm:mb-5">
                            Company
                        </h3>

                        <ul className="space-y-2.5 sm:space-y-3 text-[11px] sm:text-[13px] lg:text-sm text-white/70">

                            <li className="hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">
                                About Us
                            </li>

                            <li className="hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">
                                Products
                            </li>

                            <li className="hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">
                                Our Brands
                            </li>

                            <li className="hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">
                                Our Business
                            </li>

                            <li className="hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">
                                Certificates
                            </li>

                        </ul>

                    </div>


                    {/* Quick Links */}
                    <div>

                        <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-4 sm:mb-5">
                            Quick Links
                        </h3>

                        <ul className="space-y-2.5 sm:space-y-3 text-[11px] sm:text-[13px] lg:text-sm text-white/70">

                            <li className="hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">
                                Contact Us
                            </li>

                            <li className="hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">
                                FAQ
                            </li>

                            <li className="hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">
                                Careers
                            </li>

                            <li className="hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">
                                Gallery
                            </li>

                            <li className="hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">
                                Clients
                            </li>

                        </ul>

                    </div>


                    {/* Contact */}
                    <div className="col-span-2 sm:col-span-2 lg:col-span-1">

                        <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-4 sm:mb-5">
                            Get In Touch
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">

                            {/* Phone */}
                            <div className="flex items-start gap-3">

                                <div className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 rounded-lg bg-white/10 flex items-center justify-center">
                                    <FaPhone className="text-xs sm:text-sm" />
                                </div>

                                <div>
                                    <p className="text-[10px] sm:text-[11px] text-white/50 mb-1">
                                        Call Us
                                    </p>

                                    <p className="text-[11px] sm:text-[13px] lg:text-sm">
                                        +91 8795095868
                                    </p>
                                </div>

                            </div>


                            {/* Email */}
                            <div className="flex items-start gap-3">

                                <div className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 rounded-lg bg-white/10 flex items-center justify-center">
                                    <FaEnvelope className="text-xs sm:text-sm" />
                                </div>

                                <div>
                                    <p className="text-[10px] sm:text-[11px] text-white/50 mb-1">
                                        Email
                                    </p>

                                    <p className="text-[11px] sm:text-[13px] lg:text-sm break-all">
                                        nsingh.nagendra@gmail.com
                                    </p>
                                </div>

                            </div>


                            {/* Location */}
                            <div className="flex items-start gap-3">

                                <div className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 rounded-lg bg-white/10 flex items-center justify-center">
                                    <FaLocationDot className="text-xs sm:text-sm" />
                                </div>

                                <div>
                                    <p className="text-[10px] sm:text-[11px] text-white/50 mb-1">
                                        Address
                                    </p>

                                    <p className="text-[11px] sm:text-[13px] lg:text-sm leading-5 sm:leading-6 text-white/80">
                                        417 ITO, IP Estate,
                                        <br />
                                        New Delhi - 110002
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                {/* Divider */}
                <div className="border-t border-white/15 mt-8 sm:mt-10"></div>


                {/* Bottom */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-5 text-[10px] sm:text-xs text-white/60">

                    <p className="text-center md:text-left">
                        © 2026 Nk Global Export. All Rights Reserved.
                    </p>

                    <div className="flex flex-wrap justify-center gap-x-4 sm:gap-x-5 gap-y-2">

                        <span className="cursor-pointer hover:text-white transition">
                            Terms & Conditions
                        </span>

                        <span className="cursor-pointer hover:text-white transition">
                            Privacy Policy
                        </span>

                        <span className="cursor-pointer hover:text-white transition">
                            Shipping Policy
                        </span>

                        <span className="cursor-pointer hover:text-white transition">
                            Refund & Return
                        </span>

                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;