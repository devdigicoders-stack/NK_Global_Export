import { useState } from "react";
import Headerlogo from '../images/Header-logo.png'
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navigate = useNavigate();

    const logoClick = () => {
        navigate('/');
    }
    return (
        <>
            <div className='h-20 w-full bg-white flex items-center justify-center px-4 md:px-8 lg:px-12 shadow-[0_4px_15px_rgba(0,0,0,0.050)] fixed top-0 left-0 z-[999]'>
                <div className='min-h-20 w-full max-w-[1600px] mx-auto flex items-center justify-between'>

                    <div className='shrink-0' onClick={logoClick}>
                        <img src={Headerlogo} alt="Logo" className='h-14 sm:h-16 md:h-18 lg:h-20 w-auto object-contain' />
                    </div>

                    <div className='hidden lg:flex'>
                        <ul className='flex items-center justify-between gap-8 xl:gap-12 font-[500] text-[16px] xl:text-[18px] text-[var(--heading)]'>

                            <NavLink to="/" end className={({ isActive }) => `nav-underline pb-1 ${isActive ? 'active' : ''}`}>
                                <li className='cursor-pointer'>HOME</li>
                            </NavLink>

                            <NavLink to="/about" className={({ isActive }) => `nav-underline pb-1 ${isActive ? 'active' : ''}`}>
                                <li className='cursor-pointer'>ABOUT US</li>
                            </NavLink>

                            <NavLink to="/clients" className={({ isActive }) => `nav-underline pb-1 ${isActive ? 'active' : ''}`}>
                                <li className='cursor-pointer'>OUR CLIENTS</li>
                            </NavLink>

                            <NavLink to="/products" className={({ isActive }) => `nav-underline pb-1 ${isActive ? 'active' : ''}`}>
                                <li className='cursor-pointer'>PRODUCTS</li>
                            </NavLink>

                            <NavLink to="/contact" className={({ isActive }) => `nav-underline pb-1 ${isActive ? 'active' : ''}`}>
                                <li className='cursor-pointer'>CONTACT US</li>
                            </NavLink>

                        </ul>
                    </div>

                    {/* Mobile Button */}
                    <div className='lg:hidden'>
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className='text-3xl text-[var(--heading)]'
                        >
                            {menuOpen ? '✕' : '☰'}
                        </button>
                    </div>

                </div>

                <div
                    className={`absolute top-20 left-0 w-full bg-white shadow-lg lg:hidden overflow-hidden rounded-b-2xl transition-all duration-600 ease-in-out ${menuOpen
                        ? 'max-h-[400px] opacity-100 translate-y-0'
                        : 'max-h-0 opacity-0 -translate-y-3 pointer-events-none'
                        }`}
                >
                    <ul className='flex flex-col items-center gap-5 py-6 font-[500] text-[16px] text-[var(--heading)]'>

                        <NavLink
                            to="/"
                            end
                            onClick={() => setMenuOpen(false)}
                        >
                            <li className='cursor-pointer'>HOME</li>
                        </NavLink>

                        <NavLink
                            to="/about"
                            onClick={() => setMenuOpen(false)}
                        >
                            <li className='cursor-pointer'>ABOUT US</li>
                        </NavLink>

                        <NavLink
                            to="/clients"
                            onClick={() => setMenuOpen(false)}
                        >
                            <li className='cursor-pointer'>OUR CLIENTS</li>
                        </NavLink>

                        <NavLink
                            to="/products"
                            onClick={() => setMenuOpen(false)}
                        >
                            <li className='cursor-pointer'>PRODUCTS</li>
                        </NavLink>

                        <NavLink
                            to="/contact"
                            onClick={() => setMenuOpen(false)}
                        >
                            <li className='cursor-pointer'>CONTACT US</li>
                        </NavLink>

                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header