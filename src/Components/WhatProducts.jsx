import React from 'react'
import Readmore from './ReadmoreBtn'

const ProductCard = ({ Cardradius, imgradius, text, para, productimg }) => {
    return (
        <div className={`w-[145px] sm:w-[150px] md:w-[200px] lg:w-[260px] h-auto bg-white rounded-[20px] p-2 sm:p-3 shadow-lg ${Cardradius} group`}>

            <div className="overflow-hidden rounded-[20px]">
                <img
                    src={productimg}
                    alt="Poultry"
                    className={`w-full h-[100px] sm:h-[125px] md:h-[160px] object-cover rounded-[20px] ${imgradius} group-hover:scale-105 transition-all duration-300`}
                    
                />
            </div>

            <div className="text-center py-2 sm:py-3 md:py-5">

                <h2 className="text-[14px] sm:text-[16px] md:text-[20px] font-semibold text-black">
                    {text}
                </h2>

                <p className="text-[11px] sm:text-[13px] md:text-[16px] text-gray-600 mt-1 sm:mt-2 md:mt-3">
                    {para}
                </p>

                <div className="mt-2 sm:mt-3 md:mt-5 scale-[0.75] sm:scale-[0.85] md:scale-100">
                    <Readmore
                        bgcolor="bg-[var(--bg-primary)]"
                        radius="rounded-[12px] rounded-br-[50px] rounded-tl-[50px]"
                        Text="Read More"
                    />
                </div>

            </div>
        </div>
    )
}

export default ProductCard