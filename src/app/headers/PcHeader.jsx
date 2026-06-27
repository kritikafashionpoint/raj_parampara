import React from 'react'
import {
    FaHome,
    FaInfoCircle,
    FaThLarge,
    FaPhoneAlt,
    FaStore,
    FaLandmark,
    FaShoppingBag,
} from "react-icons/fa";

export default function PcHeader() {
    const header_menu = [
        {
            title: "Home",
            link: "/",
            icon: <FaHome />,
        },
        {
            title: "About Us",
            link: "/about-us",
            icon: <FaLandmark />,
        },
        {
            title: "Category",
            link: "/category",
            icon: <FaShoppingBag />,
        },
        {
            title: "Contact Us",
            link: "/contact-us",
            icon: <FaPhoneAlt />,
        },
        {
            title: "Become a Seller",
            link: "/become-a-seller",
            icon: <FaStore />,
        },
    ];
    return (
        <div className='w-full h-fit lg:block hidden'>
            <div className='max-w-[1520] mx-auto lg:px-6 px-4 '>

                <div className='flex h-[70] justify-between items-center '>

                    {/* logo */}
                    <div className='flex  w-fit'>
                        <img
                            src="/logo.png"
                            alt="Raj Parampara"
                            className="absoulte top-0 pt-4 -left-10 w-[150] object-contain"
                        />
                        <div className='-ml-5 mt-9 leading-none'>
                            <span className='c-base text-xl font-semibold text-center tracking-[3.5px]'>RAJ PARAMPARA</span>
                            <p className='poppins c-base uppercase font-bold tracking-widest text-xs'>From Rajasthan to the world</p>
                        </div> 
                    </div>

                    <ul className='flex items-center gap-10 '>
                        {header_menu.map((item, index) => {
                            return (
                                <li key={index} className='flex flex-col gap-1 items-center text-gray-700 hover:text-[#4D0503] poppins uppercase font-light cursor-pointer  duration-100 text-md'>
                                    <p>{item.icon}</p>
                                    {item.title}</li>
                            )
                        })}

                        <li className='poppins uppercase b-base text-white rounded-lg cursor-pointer hover:scale-105 duration-200 px-5 py-2'>Login</li>

                    </ul>
                </div>

            </div>
        </div>
    )
}
