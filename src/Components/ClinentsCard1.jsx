import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const ClinentsCard1 = ({ Clinentsimage, Heading, Text }) => {

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);
    return (
        <>
            <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-0 py-12 sm:py-16 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                    <div
                        className="relative w-full"
                        data-aos="fade-up-right"
                    >
                        <div className="absolute -top-3 -left-3 w-20 h-20 bg-[#f5b400]/10 rounded-full"></div>

                        <div className="relative overflow-hidden rounded-[24px] sm:rounded-[30px] border border-gray-200 bg-white p-2 shadow-[0_20px_50px_rgba(0,0,0,0.10)]">
                            <img
                                src={Clinentsimage}
                                alt="Government Departments"
                                className="w-full h-auto aspect-[4/3] object-cover rounded-[18px] sm:rounded-[24px] hover:scale-105 transition-transform duration-700 ease-in-out"
                            />
                        </div>
                    </div>

                    <div
                        className="w-full"
                        data-aos="fade-up-left"
                    >
                        <div className="flex items-center gap-3 mb-4">
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold leading-[1.15] text-gray-900 mb-5 sm:mb-6">
                            {Heading}
                        </h2>

                        <p className="text-sm sm:text-[15px] lg:text-base leading-7 sm:leading-8 text-gray-600">
                            {Text}
                        </p>

                        <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-3">

                            <div className="border border-gray-200 rounded-xl px-3 py-4 bg-gray-50">
                                <p className="text-sm font-semibold text-gray-900">
                                    Quality
                                </p>
                                <p className="text-xs text-gray-500 mt-1">
                                    Strict Standards
                                </p>
                            </div>

                            <div className="border border-gray-200 rounded-xl px-3 py-4 bg-gray-50">
                                <p className="text-sm font-semibold text-gray-900">
                                    Reliable
                                </p>
                                <p className="text-xs text-gray-500 mt-1">
                                    Consistent Supply
                                </p>
                            </div>

                            <div className="border border-gray-200 rounded-xl px-3 py-4 bg-gray-50">
                                <p className="text-sm font-semibold text-gray-900">
                                    Bulk Supply
                                </p>
                                <p className="text-xs text-gray-500 mt-1">
                                    Institutional Needs
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ClinentsCard1