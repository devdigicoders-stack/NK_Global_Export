import React from 'react'

const FruitsCard = ({ image, name, price }) => {
    return (
        <>
            <div className="w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

                <div className="w-full h-[130px] sm:h-[180px] lg:h-[230px] overflow-hidden bg-gray-50">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                </div>

                <div className="p-3 sm:p-4 lg:p-5 text-center">
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800">
                        {name}
                    </h3>

                    <div className="mx-auto mt-2 h-1 w-10 rounded-full bg-[var(--red-primary)]"></div>
                </div>

            </div>

        </>
    )
}

export default FruitsCard