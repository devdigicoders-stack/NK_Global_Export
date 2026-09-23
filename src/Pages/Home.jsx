import React, { useEffect } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { useNavigate } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import useEmblaCarousel from 'embla-carousel-react'
import Image1 from '../images/Home-hero.png'
import Image2 from '../images/Home-hero-2.png'
import Image3 from '../images/Home-hero-3.png'
import HomeAbout1 from '../images/Home-about-1.webp'
import HomeAbout2 from '../images/Home-about-2.webp'
import HomeAbout3 from '../images/Home-about-3.webp'
import HomeAbout4 from '../images/Home-about-4.webp'
import Chiken from '../images/chiken1.jpeg'
import CardChiken from '../images/CardChiken.webp'
import CardChiken1 from '../images/chiken2.webp'
import CardChiken2 from '../images/chiken3.webp'
import egg from '../images/egg1.webp'
import Whybg from '../images/Home-bg-2.jpeg'
import whyq1 from '../images/q1.webp'
import whyq2 from '../images/q2.webp'
import whyq3 from '../images/q3.webp'
import whyq4 from '../images/q4.webp'
import EventImg from "../images/EventImg.webp";
import ReeferImg from "../images/ReeferImg.webp";
import ChickenImg from "../images/CT1.webp";
import MuttonImg from "../images/CT2.webp";
import FishImg from "../images/CT3.png";
import FooterTop from '../Components/FooterTop';
import Autoplay from 'embla-carousel-autoplay'
import ReadmoreBtn from '../Components/ReadmoreBtn'
import ProductCard from '../Components/WhatProducts'
import QualityCard from '../Components/QualityCard'

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
            text: "Eggs",
            para: "Fresh",
            productimg: egg,
        }
    ];

    const qualityData = [
        { productimg: CardChiken, QualityImg: whyq1, radius: "rounded-tl-[20px] sm:rounded-tl-[20px] rounded-br-[20px] sm:rounded-br-[20px]", imgradius: "rounded-tl-[20px] sm:rounded-tl-[20px]" },
        { productimg: CardChiken, QualityImg: whyq2, radius: "rounded-tl-[20px] sm:rounded-tl-[20px] rounded-br-[20px] sm:rounded-br-[20px]", imgradius: "rounded-tl-[20px] sm:rounded-tl-[20px" },
        { productimg: CardChiken, QualityImg: whyq3, radius: "rounded-tl-[20px] sm:rounded-tl-[20px] rounded-br-[20px] sm:rounded-br-[20px]", imgradius: "rounded-tl-[20px] sm:rounded-tl-[20px" },
        { productimg: CardChiken, QualityImg: whyq4, radius: "rounded-tl-[20px] sm:rounded-tl-[20px] rounded-br-[20px] sm:rounded-br-[20px]", imgradius: "rounded-tl-[20px] sm:rounded-tl-[20px" }
    ];

    return (
        <>
            <Header />
            <div className="w-full max-w-full overflow-hidden mt-20" ref={emblaRef}>
                <div className="flex">
                    <div className="min-w-0 flex-[0_0_100%]">
                        <img src={Image1} className="w-full h-[220px] sm:h-[250px] md:h-[200px] lg:h-[550px] xl:h-[450px] object-cover" alt="Slide 1" />
                    </div>
                    <div className="min-w-0 flex-[0_0_100%]">
                        <img src={Image2} className="w-full h-[220px] sm:h-[250px] md:h-[200px] lg:h-[300px] xl:h-[450px] object-cover" alt="Slide 2" />
                    </div>
                    <div className="min-w-0 flex-[0_0_100%]">
                        <img src={Image3} className="w-full h-[220px] sm:h-[250px] md:h-[200px] lg:h-[300px] xl:h-[450px] object-cover" alt="Slide 3" />
                    </div>
                </div>
            </div>

            <section className="w-full py-10 sm:py-12 md:py-16 lg:py-10 px-4 sm:px-6 lg:px-20 bg-white mt-8 sm:mt-10">
                <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-[500px]">
                            <div className="flex flex-col gap-3 sm:gap-4">
                                <img src={HomeAbout1} alt="Meat" className="w-full h-[140px] sm:h-[160px] md:h-[185px] object-cover rounded-[20px] sm:rounded-[25px] rounded-tl-[40px] sm:rounded-tl-[50px]" data-aos="fade-left" />
                                <img src={HomeAbout2} alt="Meat" className="w-full h-[280px] sm:h-[320px] md:h-[375px] object-cover rounded-[20px] sm:rounded-[25px] rounded-bl-[40px] sm:rounded-bl-[50px]" data-aos="fade-down" />
                            </div>
                            <div className="flex flex-col gap-3 sm:gap-4">
                                <img src={HomeAbout3} alt="Seafood" className="w-full h-[280px] sm:h-[320px] md:h-[375px] object-cover rounded-[20px] sm:rounded-[25px] rounded-tr-[40px] sm:rounded-tr-[50px]" data-aos="fade-up" />
                                <img src={HomeAbout4} alt="Chicken" className="w-full h-[140px] sm:h-[160px] md:h-[185px] object-cover rounded-[20px] sm:rounded-[25px] rounded-br-[40px] sm:rounded-br-[50px]" data-aos="fade-left" />
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-5 text-center lg:text-left">
                            About <span className="text-[var(--red-primary)]">Ettemad Agro</span>
                        </h2>

                        <div className="space-y-4 sm:space-y-5 text-[14px] sm:text-[15px] md:text-[16px] leading-6 text-[var(--text-primary)] tracking-wide text-justify">
                            <p>
                                Ettemad Agro is a leading <strong>Wholesale Poultry Supplier India</strong>, trusted for delivering premium poultry, mutton, seafood, and eggs to businesses nationwide. Our name, <strong>“Ettemad,”</strong> stands for trust, which defines our values and service standards.
                            </p>
                            <p className="hidden sm:block">
                                We specialize in B2B supply and maintain strict consistency in quality. As a professional <strong>Wholesale Poultry Supplier India</strong>, our commitment is to reliability, hygiene, and fulfilling bulk requirements with excellence.
                            </p>
                            <p className="hidden sm:block">
                                All our products are sourced from young and healthy livestock. Each item undergoes advanced, hygienic processing to ensure superior nutrition, extended shelf life, and complete safety.
                            </p>
                            <p className="hidden sm:block">
                                This quality-centric approach strengthens our reputation as a dependable <strong>Wholesale Poultry Supplier India</strong> as well as a trusted distributor of mutton and seafood.
                            </p>
                            <p className="hidden sm:block">
                                With in-house poultry farming and strong collaborations, we maintain full control over the supply chain. This reinforces our position as a trustworthy <strong>Wholesale Poultry Supplier India</strong> serving varied industries.
                            </p>
                            <p className="hidden sm:block">
                                Supported by a strong and efficient distribution network, Ettemad Agro caters to bulk orders across <strong>Pan India</strong>. We proudly serve hotels, restaurants, cloud kitchens, retailers, and large distributors throughout <strong>North and South India.</strong>
                            </p>
                            <p className="hidden sm:block">
                                Our dedication to quality and timely service makes Ettemad Agro the preferred <strong>Wholesale Poultry Supplier India</strong> for businesses seeking reliable and premium meat products.
                            </p>
                        </div>

                        <div className="mt-7 sm:mt-10 text-center lg:text-left" onClick={abouthandle}>
                            <ReadmoreBtn bgcolor="bg-[var(--red-primary)]" radius="rounded-[15px] rounded-tr-[60px] sm:rounded-tr-[80px] rounded-bl-[60px] sm:rounded-bl-[80px]" Text="Read More" />
                        </div>
                    </div>
                </div>
            </section>

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

            <div className="relative w-full h-200 overflow-hidden">
                <img src={Whybg} alt="" className="absolute inset-0 w-full h-200 object-cover" />
                <div className="absolute inset-0 bg-white/80"></div>

                <div className="relative z-20 flex flex-col items-center px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 sm:mb-10 text-center">
                        <span className="text-black">Why </span>
                        <span className="text-[var(--red-primary)]">Us</span>
                    </div>

                    <div className="w-full max-w-[1200px] grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-5 sm:mt-40" data-aos="fade-up">

                        {qualityData.map((item, index) => (
                            <div key={index} className="w-full min-w-0 flex justify-center">
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

            <section className="w-full py-10 sm:py-14 md:py-16 lg:py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12 items-center">
                        <div className="text-center md:text-left">
                            <h2 className="text-2xl sm:text-3xl font-bold text-black">We Are <span className="text-[#9E012E]">Ettemad Agro</span></h2>
                            <p className="mt-5 sm:mt-7 text-[15px] sm:text-[17px] md:text-[18px] leading-[1.6] text-gray-600">Ettemad Agro is a leading meat supply company specializing in the distribution of poultry, mutton, seafood, and eggs.</p>
                        </div>

                        <div className="text-center">
                            <img src={EventImg} alt="Ettemad Agro Foods at Events" className="w-[120px] sm:w-[150px] h-[120px] sm:h-[150px] object-contain mx-auto" />
                            <h3 className="mt-3 text-[17px] sm:text-[20px] font-semibold text-black">Ettemad Agro Foods at Events</h3>
                        </div>

                        <div className="text-center">
                            <img src={ReeferImg} alt="Reefer Vehicles" className="w-[120px] sm:w-[150px] h-[120px] sm:h-[150px] object-contain mx-auto" />
                            <h3 className="mt-3 text-[17px] sm:text-[20px] font-semibold text-black">Reefer Vehicles</h3>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative w-full py-12 sm:py-16 lg:py-20 overflow-hidden bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
                        <div className="grid grid-cols-2 gap-3" data-aos="fade-right">
                            <div className="overflow-hidden rounded-tr-[40px] sm:rounded-tr-[55px] rounded-bl-[40px] sm:rounded-bl-[55px] rounded-br-[15px] rounded-tl-[15px]">
                                <img src={ChickenImg} alt="Chicken" className="w-full h-[130px] sm:h-[170px] object-cover hover:scale-105 transition duration-500" />
                            </div>

                            <div className="overflow-hidden rounded-tl-[40px] sm:rounded-tl-[55px] rounded-br-[40px] sm:rounded-br-[55px] rounded-bl-[15px] rounded-tr-[15px]">
                                <img src={MuttonImg} alt="Mutton" className="w-full h-[130px] sm:h-[170px] object-cover hover:scale-105 transition duration-500" />
                            </div>

                            <div className="col-span-2 overflow-hidden rounded-tr-[35px] sm:rounded-tr-[45px] rounded-bl-[35px] sm:rounded-bl-[45px] rounded-br-[15px] rounded-tl-[15px]">
                                <img src={FishImg} alt="Fish" className="w-full h-[170px] sm:h-[220px] object-cover hover:scale-105 transition duration-500" />
                            </div>
                        </div>

                        <div className="lg:pl-3">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black text-center lg:text-left" data-aos="fade-right">
                                Client <span className="text-[#9E012E]">Testimonials</span>
                            </h2>

                            <div>
                                <span className="text-[#D99BAA] text-[70px] sm:text-[90px] font-serif leading-none" data-aos="fade-right">“</span>
                            </div>

                            <p className="text-gray-500 text-[14px] sm:text-[15px] leading-[1.55] -mt-5 sm:-mt-8 max-w-[680px] text-center lg:text-left" data-aos="fade-right">
                                Ettemad agro is actually complementing their brand name i.e. TRUST. As per my experience, this is one of the most trusted, highly qualitative, affordable and fastly growing brands. Their products are very hygienic, highly standardized and neatly packed. As compared to competitor brands, Ettemad maintains high standards with affordable pricing, which is the reason it is highly recommended.
                            </p>

                            <h3 className="mt-6 sm:mt-7 text-[#9E012E] text-md font-semibold text-center lg:text-left" data-aos="fade-right">- Sankalp Jhadav</h3>
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