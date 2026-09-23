import React, { useEffect } from 'react'

const ProductsTop = ({ products, Name }) => {

    return (
        <>
            <div className='h-45 w-35 flex flex-col items-center justify-center mt-4'>


                <div className='hover:translate-y-[-6px] transition-all duration-300'>
                    <img src={products} alt="" className='h-32' />
                </div>


                <p className='font-semibold text-[18px] mt-3'>{Name}</p>
            </div>

        </>
    )
}

export default ProductsTop