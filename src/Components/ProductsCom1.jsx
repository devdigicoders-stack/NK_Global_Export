import React from 'react'

const ProductsCom1 = ({ Heading, Text, ProductsCardImg }) => {
    return (
        <>
            <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14 lg:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                    <div className="w-full" data-aos="fade-up-right">
                        <h2 className="text-2xl sm:text-2xl md:text-2xl font-semibold leading-tight mb-5 sm:mb-6">
                            {Heading}
                        </h2>

                        <p className="text-sm sm:text-[14px] leading-6 sm:leading-7">
                            {Text}
                        </p>
                    </div>

                    <div className="w-full overflow-hidden rounded-[20px] sm:rounded-[25px]" data-aos="fade-up-left">
                        <img src={ProductsCardImg} alt="Ettemad Agro Products" className="w-full h-auto object-cover rounded-[20px] sm:rounded-[25px] hover:scale-105 transition-transform duration-500 ease-in-out" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default ProductsCom1