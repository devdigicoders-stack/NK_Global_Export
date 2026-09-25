import React from 'react'

const FruitsCard = ({ image, name, price }) => {
    return (
        <>
            <div className="w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300">

                {/* Product Image */}
                <div className="w-full h-[130px] sm:h-[180px] lg:h-[230px] overflow-hidden bg-gray-50">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Product Details */}
                <div className="p-3 sm:p-4 lg:p-4 text-center">

                    <h3 className="text-base sm:text-lg lg:text-lg font-bold text-gray-800">
                        {name}
                    </h3>

                    <p className="mt-1 text-xs sm:text-sm font-medium text-gray-500">
                        ₹{price} / kg
                    </p>

                    <button
                        className="mt-3 sm:mt-2 w-full rounded-lg bg-[var(--bg-primary)] px-3 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-[var(--red-primary)] transition-colors duration-300"
                    >
                        Add Cart
                    </button>

                </div>

            </div>
        </>
    )
}

export default FruitsCard