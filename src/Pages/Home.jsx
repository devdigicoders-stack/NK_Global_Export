import React, { useEffect } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { useNavigate } from 'react-router-dom';
import { FaLeaf, FaShieldAlt, FaTruck, FaHeart } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import useEmblaCarousel from 'embla-carousel-react'
import Image1 from '../images/HomeSalider2.png'
import Image2 from '../images/HomeSalider.png'
import Image3 from '../images/HomeSalider-3.png'
import HomeAbout3 from '../images/HomeAbout.png'
import Chiken from '../images/chiken1.jpeg'
import CardChiken from '../images/CardChiken.webp'
import CardChiken1 from '../images/chiken2.webp'
import CardChiken2 from '../images/chiken3.webp'
import Fish from '../images/Fish.avif'
import Whybg from '../images/Home-bg-2.jpeg'
import whyq1 from '../images/q1.webp'
import whyq2 from '../images/q2.webp'
import whyq3 from '../images/q3.webp'
import whyq4 from '../images/q4.png'
import FishImg from "../images/CT3.png";
import FooterTop from '../Components/FooterTop';
import Autoplay from 'embla-carousel-autoplay'
import ReadmoreBtn from '../Components/ReadmoreBtn'
import ProductCard from '../Components/WhatProducts'
import QualityCard from '../Components/QualityCard'
import Girlimg from '../images/GirlImg.png'

const Home = () => {

    const navigate = useNavigate();

    const abouthandle = () => {
        navigate('/about');
    }

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const [emblaRef] = useEmblaCarousel(
        { loop: true },
        [Autoplay({ delay: 4000, stopOnInteraction: false })]
    )

    const productData = [
        {
            text: "Poultry",
            para: "Chilled/Frozen",
            productimg: CardChiken,
        },
        {
            text: "Mutton",
            para: "Chilled/Frozen",
            productimg: CardChiken1,
        },
        {
            text: "Seafood",
            para: "Chilled/Frozen",
            productimg: CardChiken2,
        },
        {
            text: "Fish",
            para: "Fresh",
            productimg: Fish,
        }
    ];

    const qualityData = [
        { QualityImg: whyq1, radius: "rounded-tl-[20px] sm:rounded-tl-[20px] rounded-br-[20px] sm:rounded-br-[20px]", imgradius: "rounded-tl-[10px] sm:rounded-tl-[10px]" },
        { QualityImg: whyq2, radius: "rounded-tl-[20px] sm:rounded-tl-[20px] rounded-br-[20px] sm:rounded-br-[20px]", imgradius: "rounded-tl-[10px] sm:rounded-tl-[10px" },
        { QualityImg: whyq3, radius: "rounded-tl-[20px] sm:rounded-tl-[20px] rounded-br-[20px] sm:rounded-br-[20px]", imgradius: "rounded-tl-[10px] sm:rounded-tl-[10px" },
        { QualityImg: whyq4, radius: "rounded-tl-[20px] sm:rounded-tl-[20px] rounded-br-[20px] sm:rounded-br-[20px]", imgradius: "rounded-tl-[10px] sm:rounded-tl-[10px" }
    ];

    return (
        <>
            <Header />
            <div className="w-full max-w-full overflow-hidden mt-20" ref={emblaRef}>
                <div className="flex">
                    <div className="min-w-0 flex-[0_0_100%]">
                        <img src={Image1} className="w-full h-[160px] sm:h-[250px] md:h-[200px] lg:h-[500px] xl:h-[500px] object-cover" alt="Slide 1" />
                    </div>
                    <div className="min-w-0 flex-[0_0_100%]">
                        <img src={Image2} className="w-full h-[160px] sm:h-[250px] md:h-[200px] lg:h-[500px] xl:h-[500px] object-cover" alt="Slide 2" />
                    </div>
                    <div className="min-w-0 flex-[0_0_100%]">
                        <img src={Image3} className="w-full h-[160px] sm:h-[250px] md:h-[200px] lg:h-[500px] xl:h-[500px] object-cover" alt="Slide 3" />
                    </div>
                </div>
            </div>

            <section className="w-full py-12 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-16 bg-[#FAF9F5]">
                <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-8 md:gap-10 lg:gap-14">

                    {/* Left Image */}
                    <div className="w-full lg:w-1/2">
                        <div className="w-full max-w-[550px] mx-auto overflow-hidden rounded-[25px] sm:rounded-[35px]">
                            <img
                                src={HomeAbout3}
                                alt="Ettemad Agro"
                                className="w-full h-[280px] sm:h-[350px] md:h-[420px] lg:h-[500px] object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="w-full lg:w-1/2">

                        <p className="text-[var(--red-primary)] text-sm sm:text-base font-semibold tracking-widest uppercase mb-2 text-center lg:text-left">
                            Our Story
                        </p>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5 text-center lg:text-left text-[var(--text-primary)]">
                            About <span className="text-[var(--red-primary)]">Nk Global Export</span>
                        </h2>

                        <p className="text-base sm:text-lg font-medium leading-7 text-[var(--text-primary)] mb-5 text-center lg:text-left">
                            From farm to your table – Fresh, Healthy & Delicious.
                        </p>
                        <div className="space-y-4 text-[14px] sm:text-[15px] md:text-[16px] leading-7 text-[var(--text-primary)] text-justify">
                            <p>
                                Nk Global is a leading <strong>Wholesale Poultry Supplier India</strong>,
                                trusted for delivering premium poultry, mutton, seafood to
                                businesses nationwide. Our name, <strong>“Ettemad,”</strong> stands for
                                trust, which defines our values and service standards.
                            </p>

                            <p className="hidden sm:block">
                                We specialize in B2B supply and maintain strict consistency in quality.
                                As a professional <strong>Wholesale Poultry Supplier India</strong>, our
                                commitment is to reliability, hygiene, and fulfilling bulk requirements
                                with excellence.
                            </p>
                        </div>

                        {/* Features */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-7">

                            <div className="text-center lg:text-left">
                                <div className='w-full flex items-center justify-center lg:justify-start'>
                                    <FaLeaf className="text-[var(--red-primary)] text-2xl mb-2" />
                                </div>
                                <h4 className="font-semibold text-sm">Fresh & Natural</h4>
                                <p className="text-xs text-gray-500 mt-1">Quality products</p>
                            </div>

                            <div className="text-center lg:text-left">
                                <div className="w-full flex items-center justify-center lg:justify-start">
                                    <FaShieldAlt className="text-[var(--red-primary)] text-2xl mb-2" />
                                </div>
                                <h4 className="font-semibold text-sm">Premium Quality</h4>
                                <p className="text-xs text-gray-500 mt-1">Trusted products</p>
                            </div>

                            <div className="text-center lg:text-left">
                                <div className="w-full flex items-center justify-center lg:justify-start">
                                    <FaTruck className="text-[var(--red-primary)] text-2xl mb-2" />
                                </div>

                                <h4 className="font-semibold text-sm">On-Time Delivery</h4>
                                <p className="text-xs text-gray-500 mt-1">Fresh at doorstep</p>
                            </div>

                            <div className="text-center lg:text-left">
                                <div className="w-full flex items-center justify-center lg:justify-start">
                                    <FaHeart className="text-[var(--red-primary)] text-2xl mb-2" />
                                </div>
                                <h4 className="font-semibold text-sm">Healthy Living</h4>
                                <p className="text-xs text-gray-500 mt-1">Good food, better life</p>
                            </div>

                        </div>

                        {/* Read More */}
                        <div
                            className="mt-7 sm:mt-9 text-center lg:text-left"
                            onClick={abouthandle}
                        >
                            <ReadmoreBtn
                                bgcolor="bg-[var(--bg-primary)]"
                                radius="rounded-[15px] rounded-tr-[60px] sm:rounded-tr-[80px] rounded-bl-[60px] sm:rounded-bl-[80px]"
                                Text="Read More"
                            />
                        </div>

                    </div>
                </div>
            </section>


            {/* Why we offer */}

            <div className="relative w-full overflow-hidden">

                <img src={Chiken} alt="" className="absolute inset-0 w-full h-full object-cover" />

                <div className="absolute inset-0 bg-black/50"></div>

                <div className="relative z-20 w-full min-h-[650px] sm:min-h-[700px] md:min-h-[600px] lg:min-h-[550px] flex flex-col items-center px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">

                    <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 sm:mb-10 lg:mb-12 text-center">
                        What We Offer
                    </h2>

                    <div className="w-full max-w-[1200px] grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-6 justify-items-center" data-aos="fade-up">

                        {productData.map((item, index) => (
                            <ProductCard key={index} {...item} />
                        ))}

                    </div>

                </div>
            </div>


            {/* WHy us  */}

            <div className="relative w-full h-200 overflow-hidden">
                <img
                    src={Whybg}
                    alt=""
                    className="absolute inset-0 w-full h-200 object-cover"
                />

                <div className="absolute inset-0 bg-white/60"></div>

                <div className="relative z-20 flex flex-col items-center px-4 sm:px-6 py-12 sm:py-16 lg:py-20">

                    <div className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 sm:mb-10 text-center">
                        <span className="text-black">Why </span>
                        <span className="text-[var(--red-primary)]">Us</span>
                    </div>

                    <div
                        className="w-full max-w-[1200px] grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-5 sm:mt-40"
                        data-aos="fade-up"
                    >
                        {qualityData.map((item, index) => (
                            <div
                                key={index}
                                className="group w-full min-w-0 flex justify-center"
                            >
                                <QualityCard
                                    radius={item.radius}
                                    imgradius={item.imgradius}
                                    productimg={item.productimg}
                                    QualityImg={item.QualityImg}
                                />
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            <section className="w-full pt-10 sm:pt-14 md:pt-16 lg:pt-0 bg-[#FDF3F6]">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-end">

                        {/* Left Side */}
                        <div className="text-center md:text-left lg:py-10">
                            <h2 className="text-2xl sm:text-3xl font-bold text-black">
                                Need Help?{" "}
                                <span className="text-[#9E012E]">Contact Us</span>
                            </h2>

                            <p className="mt-5 sm:mt-7 text-[15px] sm:text-[17px] md:text-[18px] leading-[1.6] text-gray-600">
                                For orders, enquiries, or any assistance, feel free to get
                                in touch with our team. We are always happy to help you.
                            </p>

                            <div className="mt-6">
                                <p className="text-[15px] sm:text-[17px] text-gray-600">
                                    Call us directly
                                </p>

                                <a
                                    href="tel:+919999999999"
                                    className="inline-block mt-2 text-2xl sm:text-3xl font-bold text-[#9E012E] hover:underline"
                                >
                                    +91 8795095868
                                </a>
                            </div>
                        </div>

                        {/* Right Side */}
                        <div className="flex justify-center md:justify-end items-end">
                            <img
                                src={Girlimg}
                                alt="Contact NK GLOBAL EXPORT"
                                className="w-[260px] sm:w-[320px] md:w-[380px] lg:w-[430px] h-auto object-contain block"
                            />
                        </div>

                    </div>
                </div>
            </section>



            <section className="relative w-full py-12 sm:py-16 lg:py-20 overflow-hidden bg-[var(--bg-primary2)]">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                        {/* Left Image - 50% */}
                        <div
                            className="w-full lg:w-full"
                            data-aos="fade-right"
                        >
                            <div className="w-full overflow-hidden rounded-tr-[50px] rounded-bl-[50px] rounded-tl-[15px] rounded-br-[15px]">
                                <img
                                    src={FishImg}
                                    alt="Fish"
                                    className="w-full h-[260px] sm:h-[320px] lg:h-[430px] object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                        </div>

                        {/* Right Content - 50% */}
                        <div
                            className="w-full lg:w-full"
                            data-aos="fade-left"
                        >
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black text-center lg:text-left">
                                Client <span className="text-[#9E012E]">Testimonials</span>
                            </h2>

                            <div className="mt-3">
                                <span className="text-[#D99BAA] text-[70px] sm:text-[90px] font-serif leading-none">
                                    “
                                </span>
                            </div>

                            <p className="text-gray-500 text-[14px] sm:text-[15px] md:text-base leading-7 -mt-6 sm:-mt-8 text-justify">
                                Nk Global is actually complementing their brand name i.e. TRUST.
                                As per my experience, this is one of the most trusted, highly
                                qualitative, affordable and fastly growing brands. Their products
                                are very hygienic, highly standardized and neatly packed. As
                                compared to competitor brands, Ettemad maintains high standards
                                with affordable pricing, which is the reason it is highly
                                recommended.
                            </p>

                            <h3 className="mt-6 text-[#9E012E] text-sm sm:text-base font-semibold text-center lg:text-left">
                                — Vikash Singh
                            </h3>
                        </div>

                    </div>
                </div>
            </section>

            <FooterTop />
            <Footer />
        </>
    )
}

export default Home