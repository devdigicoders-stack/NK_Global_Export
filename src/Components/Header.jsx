import { useState } from "react";
import Headerlogo from '../images/Header-logo.png'
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [productsOpen, setProductsOpen] = useState(false)

    const navigate = useNavigate();

    const logoClick = () => {
        navigate('/');
    }
    return (
        <>
            <div className='h-20 w-full bg-white flex items-center justify-center px-4 md:px-8 lg:px-12 shadow-[0_4px_15px_rgba(0,0,0,0.050)] fixed top-0 left-0 z-[999]'>

                <div className='min-h-20 w-full max-w-[1600px] mx-auto flex items-center justify-between'>

                    {/* LOGO */}
                    <div className='shrink-0 cursor-pointer' onClick={logoClick}>
                        <img
                            src={Headerlogo}
                            alt="NK Global Export"
                            className='h-14 sm:h-16 md:h-18 lg:h-20 w-auto object-contain'
                        />
                    </div>


                    {/* DESKTOP MENU */}
                    <div className='hidden lg:flex'>

                        <ul className='flex items-center justify-between gap-8 xl:gap-12 font-[500] text-[16px] xl:text-[18px] text-[var(--heading)]'>

                            {/* HOME */}
                            <NavLink
                                to="/"
                                end
                                className={({ isActive }) =>
                                    `nav-underline pb-1 ${isActive ? 'active' : ''}`
                                }
                            >
                                <li className='cursor-pointer list-none'>
                                    HOME
                                </li>
                            </NavLink>


                            {/* ABOUT US */}
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `nav-underline pb-1 ${isActive ? 'active' : ''}`
                                }
                            >
                                <li className='cursor-pointer list-none'>
                                    ABOUT US
                                </li>
                            </NavLink>


                            {/* OUR CLIENTS */}
                            <NavLink
                                to="/clients"
                                className={({ isActive }) =>
                                    `nav-underline pb-1 ${isActive ? 'active' : ''}`
                                }
                            >
                                <li className='cursor-pointer list-none'>
                                    OUR CLIENTS
                                </li>
                            </NavLink>

                            {/* PRODUCTS + DESKTOP DROPDOWN */}
                            <div className='relative group'>

                                <NavLink
                                    to="/products"
                                    className={({ isActive }) =>
                                        `nav-underline pb-1 flex items-center gap-1 ${isActive ? 'active' : ''}`
                                    }
                                >
                                    <li className='cursor-pointer list-none'>
                                        PRODUCTS
                                    </li>

                                    <span className='text-xs transition-transform duration-300 group-hover:rotate-180'>
                                        <IoMdArrowDropdown  size="25px"/>
                                    </span>
                                </NavLink>

                                {/* DROPDOWN */}
                                <div className='absolute left-1/2 -translate-x-1/2 top-full pt-4 invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-[1000]'>

                                    <div className='w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 overflow-hidden'>

                                        <NavLink
                                            to="/fruitsvegetables"
                                            className='block px-5 py-3 text-[15px] text-[var(--heading)] hover:bg-gray-50 hover:text-[var(--red-primary)] transition-colors'
                                        >
                                            Fruits & Vegetables
                                        </NavLink>

                                        <NavLink
                                            to="/drygoodsgroceries"
                                            className='block px-5 py-3 text-[15px] text-[var(--heading)] hover:bg-gray-50 hover:text-[var(--red-primary)] transition-colors'
                                        >
                                            Dry Goods & Groceries
                                        </NavLink>

                                        <NavLink
                                            to="/constructionmaterials"
                                            className='block px-5 py-3 text-[15px] text-[var(--heading)] hover:bg-gray-50 hover:text-[var(--red-primary)] transition-colors'
                                        >
                                            Construction Materials
                                        </NavLink>

                                        <NavLink
                                            to="/engineeringitems"
                                            className='block px-5 py-3 text-[15px] text-[var(--heading)] hover:bg-gray-50 hover:text-[var(--red-primary)] transition-colors'
                                        >
                                            Engineering Items
                                        </NavLink>

                                    </div>

                                </div>

                            </div>

                            {/* CONTACT US */}
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `nav-underline pb-1 ${isActive ? 'active' : ''}`
                                }
                            >
                                <li className='cursor-pointer list-none'>
                                    CONTACT US
                                </li>
                            </NavLink>

                        </ul>

                    </div>


                    {/* MOBILE MENU BUTTON */}
                    <div className='lg:hidden'>

                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className='text-3xl text-[var(--heading)]'
                        >
                            {menuOpen ? '✕' : '☰'}
                        </button>

                    </div>

                </div>


                {/* MOBILE MENU */}
                <div
                    className={`absolute top-20 left-0 w-full bg-white shadow-lg lg:hidden overflow-hidden rounded-b-2xl transition-all duration-500 ease-in-out ${menuOpen
                        ? 'max-h-[600px] opacity-100 translate-y-0'
                        : 'max-h-0 opacity-0 -translate-y-3 pointer-events-none'
                        }`}
                >

                    <ul className='flex flex-col items-center gap-5 py-6 font-[500] text-[16px] text-[var(--heading)]'>


                        {/* HOME */}
                        <NavLink
                            to="/"
                            end
                            onClick={() => setMenuOpen(false)}
                        >
                            <li className='cursor-pointer list-none'>
                                HOME
                            </li>
                        </NavLink>


                        {/* ABOUT US */}
                        <NavLink
                            to="/about"
                            onClick={() => setMenuOpen(false)}
                        >
                            <li className='cursor-pointer list-none'>
                                ABOUT US
                            </li>
                        </NavLink>


                        {/* OUR CLIENTS */}
                        <NavLink
                            to="/clients"
                            onClick={() => setMenuOpen(false)}
                        >
                            <li className='cursor-pointer list-none'>
                                OUR CLIENTS
                            </li>
                        </NavLink>

                        {/* MOBILE PRODUCTS */}
                        <li className='list-none flex flex-col items-center'>

                            <div className='flex items-center gap-2'>

                                {/* PRODUCTS PAGE */}
                                <NavLink
                                    to="/products"
                                    onClick={() => setMenuOpen(false)}
                                    className='cursor-pointer'
                                >
                                    PRODUCTS
                                </NavLink>

                                {/* DROPDOWN BUTTON */}
                                <button
                                    onClick={() => setProductsOpen(!productsOpen)}
                                    className='text-xs p-1'
                                >
                                    <span
                                        className={`inline-block transition-transform duration-300 ${productsOpen ? 'rotate-180' : ''
                                            }`}
                                    >
                                        <IoMdArrowDropdown size="25px"/>
                                    </span>
                                </button>

                            </div>


                            {/* MOBILE PRODUCT DROPDOWN */}
                            <div
                                className={`overflow-hidden transition-all duration-300 ${productsOpen
                                        ? 'max-h-52 opacity-100 mt-3'
                                        : 'max-h-0 opacity-0'
                                    }`}
                            >

                                <div className='w-52 bg-gray-50 rounded-xl border border-gray-100 overflow-hidden'>

                                    <NavLink
                                        to="/fruitsvegetables"
                                        onClick={() => {
                                            setProductsOpen(false)
                                            setMenuOpen(false)
                                        }}
                                        className='block text-center px-4 py-3 text-[14px] hover:bg-white hover:text-[var(--red-primary)] transition-colors'
                                    >
                                        Fruits & Vegetables
                                    </NavLink>

                                    <NavLink
                                        to="/drygoodsgroceries"
                                        onClick={() => {
                                            setProductsOpen(false)
                                            setMenuOpen(false)
                                        }}
                                        className='block text-center px-4 py-3 text-[14px] hover:bg-white hover:text-[var(--red-primary)] transition-colors'
                                    >
                                        Dry Goods & Groceries
                                    </NavLink>

                                    <NavLink
                                        to="/constructionmaterials"
                                        onClick={() => {
                                            setProductsOpen(false)
                                            setMenuOpen(false)
                                        }}
                                        className='block text-center px-4 py-3 text-[14px] hover:bg-white hover:text-[var(--red-primary)] transition-colors'
                                    >
                                        Construction Materials
                                    </NavLink>

                                    <NavLink
                                        to="/engineeringitems"
                                        onClick={() => {
                                            setProductsOpen(false)
                                            setMenuOpen(false)
                                        }}
                                        className='block text-center px-4 py-3 text-[14px] hover:bg-white hover:text-[var(--red-primary)] transition-colors'
                                    >
                                        Engineering Items
                                    </NavLink>

                                </div>

                            </div>

                        </li>

                        {/* CONTACT US */}
                        <NavLink
                            to="/contact"
                            onClick={() => setMenuOpen(false)}
                        >
                            <li className='cursor-pointer list-none'>
                                CONTACT US
                            </li>
                        </NavLink>

                    </ul>

                </div>

            </div>
        </>
    )
}

export default Header