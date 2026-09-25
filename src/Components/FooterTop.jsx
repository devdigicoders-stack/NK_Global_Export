import React from 'react'
import Fishbottomimg from '../images/Fishimg.jpeg'

const FooterTop = () => {
    return (
        <>

            <section className="relative flex items-center justify-center">
                <img
                    src={Fishbottomimg}
                    alt=""
                    className="h-[400px] sm:h-[450px] lg:h-[450px] w-full object-cover"
                />

                <div className="absolute inset-0 bg-black/80"></div>

                <div className="absolute w-full px-4 sm:px-6 md:px-8 text-white flex flex-col items-center justify-center text-center">

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
                        Your One-Stop Shop For Premium Meats
                    </h2>

                    <p className="mt-4 text-sm sm:text-base md:text-[18px] leading-6">
                        NK GLOBAL EXPORT SOURCING LLP is a leading meat supply company specializing in the
                    </p>

                    <p className="mt-1 text-sm sm:text-base md:text-[18px] leading-6">
                        distribution of poultry, mutton, seafood.
                    </p>

                </div>
            </section>
        </>
    )
}

export default FooterTop