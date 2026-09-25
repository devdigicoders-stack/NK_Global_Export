import React from 'react'

const ProductsSectionHeading = ({title, subtitle, icon}) => {
    return (
        <>
            <div className="w-full text-center mb-6 sm:mb-8">

                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                    {icon} {title}
                </h2>

                <p className="mt-2 text-sm sm:text-base text-gray-500">
                    {subtitle}
                </p>

            </div>
        </>
    )
}

export default ProductsSectionHeading