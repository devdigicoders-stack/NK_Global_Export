import React from 'react'

const ProductsCom1 = ({ Heading, Text, ProductsCardImg }) => {
    return (
        <>
            <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14 lg:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">

                    <div className="w-full" data-aos="fade-up-right">
                        <h2 className="text-2xl sm:text-3xl md:text-3xl font-semibold leading-tight mb-5 sm:mb-6 text-gray-900">
                            {Heading}
                        </h2>

                        <p className="text-sm sm:text-[15px] text-gray-600 leading-7 sm:leading-8 max-w-[600px]">
                            {Text}
                        </p>
                    </div>

                    <div
                        className="w-full overflow-hidden rounded-[20px] sm:rounded-[25px] shadow-sm"
                        data-aos="fade-up-left"
                    >
                        <img
                            src={ProductsCardImg}
                            alt="Ettemad Agro Products"
                            className="w-full h-auto object-cover rounded-[20px] sm:rounded-[25px] hover:scale-105 transition-transform duration-500 ease-in-out"
                        />
                    </div>

                </div>
            </div>
        </>
    )
}

export default ProductsCom1