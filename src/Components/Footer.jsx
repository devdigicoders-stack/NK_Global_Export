import React from "react";
import {
    FaPhone,
    FaEnvelope,
    FaLocationDot,
    FaLinkedinIn,
    FaInstagram,
    FaFacebookF,
} from "react-icons/fa6";

import MakeInIndia from "../images/MakeInIndia.webp";

const Footer = () => {
    return (
        <footer className="bg-[#A90032] text-white w-full">

            <div className="w-full max-w-[1350px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-10 sm:pt-12 lg:pt-14 pb-6 sm:pb-8">

                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 sm:gap-x-10 sm:gap-y-12 lg:gap-10">

                    {/* About */}
                    <div className="col-span-2 lg:col-span-1">
                        <img src="" alt="Ettemad Agro" className="w-[130px] sm:w-[160px] lg:w-[190px] h-auto mb-3 sm:mb-4" />

                        <p className="text-[11px] sm:text-[13px] lg:text-[14px] leading-6 sm:leading-7 max-w-[310px]">
                            Ettemad Agro is a leading meat supply company specializing in the distribution of poultry, mutton, seafood, and eggs.
                        </p>

                        <div className="mt-6 sm:mt-8">
                            <h3 className="text-[14px] sm:text-[16px] lg:text-[18px] font-semibold mb-4 sm:mb-5">
                                Let's Be Friends
                            </h3>

                            <div className="flex gap-5 sm:gap-7 items-center">
                                <FaLinkedinIn className="text-[14px] sm:text-[17px] lg:text-[18px] cursor-pointer hover:scale-110 transition duration-300" />
                                <FaInstagram className="text-[14px] sm:text-[17px] lg:text-[18px] cursor-pointer hover:scale-110 transition duration-300" />
                                <FaFacebookF className="text-[14px] sm:text-[17px] lg:text-[18px] cursor-pointer hover:scale-110 transition duration-300" />
                            </div>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-[14px] sm:text-[16px] lg:text-[18px] font-semibold mb-4 sm:mb-6">
                            Contact Us
                        </h3>

                        <div className="space-y-4 sm:space-y-5 text-[11px] sm:text-[13px] lg:text-[14px]">

                            <div className="flex gap-3 sm:gap-4 items-start">
                                <FaPhone className="text-[14px] sm:text-[17px] lg:text-lg mt-1 shrink-0" />
                                <span>+91 96675 40557</span>
                            </div>

                            <div className="flex gap-3 sm:gap-4 items-start">
                                <FaEnvelope className="text-[14px] sm:text-[17px] lg:text-lg mt-1 shrink-0" />
                                <span className="break-all">nsingh.nagendra@gmail.com</span>
                            </div>

                            <div className="flex gap-3 sm:gap-4 items-start">
                                <FaLocationDot className="text-[14px] sm:text-[17px] lg:text-lg mt-1 shrink-0" />
                                <span className="leading-6 sm:leading-7">
                                    417 ITO, IP Estate,
                                    <br />
                                    New Delhi - 110002.
                                </span>
                            </div>

                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-[14px] sm:text-[16px] lg:text-[18px] font-semibold mb-4 sm:mb-6">
                            Company
                        </h3>

                        <ul className="space-y-3 sm:space-y-4 text-[11px] sm:text-[13px] lg:text-[14px]">
                            <li className="cursor-pointer hover:opacity-70 transition">About Us</li>
                            <li className="cursor-pointer hover:opacity-70 transition">Products</li>
                            <li className="cursor-pointer hover:opacity-70 transition">Our Brands</li>
                            <li className="cursor-pointer hover:opacity-70 transition">Our Business</li>
                            <li className="cursor-pointer hover:opacity-70 transition">Certificate</li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-[14px] sm:text-[16px] lg:text-[18px] font-semibold mb-4 sm:mb-6">
                            Quick Links
                        </h3>

                        <ul className="space-y-3 sm:space-y-4 text-[11px] sm:text-[13px] lg:text-[14px]">
                            <li className="cursor-pointer hover:opacity-70 transition">Contact Us</li>
                            <li className="cursor-pointer hover:opacity-70 transition">FAQ</li>
                            <li className="cursor-pointer hover:opacity-70 transition">Careers</li>
                            <li className="cursor-pointer hover:opacity-70 transition">Gallery</li>
                            <li className="cursor-pointer hover:opacity-70 transition">Clients</li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Line */}
                <div className="border-t border-white/30 mt-8 sm:mt-10 lg:mt-12"></div>

                {/* Policies */}
                <div className="flex flex-wrap justify-center gap-x-4 sm:gap-x-7 lg:gap-x-10 gap-y-2 sm:gap-y-3 mt-4 sm:mt-5 text-[10px] sm:text-[12px] lg:text-[14px] text-center">
                    <span className="cursor-pointer hover:opacity-70 transition">Terms and Conditions</span>
                    <span className="cursor-pointer hover:opacity-70 transition">Privacy Policy</span>
                    <span className="cursor-pointer hover:opacity-70 transition">Shipping Policy</span>
                    <span className="cursor-pointer hover:opacity-70 transition">Refund and Return Policy</span>
                </div>

                {/* Copyright */}
                <p className="text-center mt-5 sm:mt-6 text-[10px] sm:text-[12px] lg:text-[14px] leading-5 sm:leading-6">
                    © 2026 NameNK Global Export Sourcing LLP All Rights Reserved.
                </p>

            </div>

        </footer>
    );
};

export default Footer;