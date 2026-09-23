import React from 'react'
import Fishbottomimg from '../images/Fishimg.jpeg'
import ReadmoreBtn from './ReadmoreBtn'
import { IoIosCall } from "react-icons/io";

const FooterTop = () => {
    return (
        <>

            <section className='relative flex items-center justify-center'>
                <img src={Fishbottomimg} alt="" className='h-120 w-full' />
                <div className="absolute inset-0 bg-black/80"></div>

                <div className='absolute text-white flex flex-col items-center justify-center max-[400px]:px-4'>
                    <h2 className='text-4xl font-semibold'>Your One-Stop Shop For Premium Meats</h2>
                    <p className='mt-5 text-[18px]'>Ettemad Agro is a leading meat supply company specializing in the</p>
                    <p className='mt-1 text-[18px]'>distribution of poultry, mutton, seafood, and eggs.</p>
                </div>

                <div className='mt-5 absolute top-80 flex max-[400px]:mt-20'> <ReadmoreBtn  bgcolor="bg-[#E57A09]" radius="rounded-[15px] rounded-bl-[80px] rounded-tr-[80px]" Text="Contact" /></div>
            </section>
        </>
    )
}

export default FooterTop