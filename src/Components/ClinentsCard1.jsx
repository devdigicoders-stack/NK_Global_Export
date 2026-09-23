import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const ClinentsCard1 = ({ Clinentsimage, Heading, Text }) => {
    
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);
    return (
        <>
            <div className="w-full max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-0 py-10 sm:py-12 lg:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">

                    <div className="w-full overflow-hidden rounded-[20px] sm:rounded-[25px]" data-aos="fade-up-right">
                        <img
                            src={Clinentsimage}
                            alt="Government Departments"
                            className="w-full h-auto aspect-[4/3] object-cover rounded-[20px] sm:rounded-[25px] hover:scale-105 transition-transform duration-500 ease-in-out"
                        />
                    </div>
                    <div className="w-full" data-aos="fade-up-left">
                        <h2 className="text-2xl sm:text-3xl md:text-3xl font-semibold leading-tight mb-5 sm:mb-6">
                            {Heading}
                        </h2>

                        <p className="text-sm sm:text-[15px] leading-7">
                            {Text}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ClinentsCard1