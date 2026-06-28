import Link from 'next/link';
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
            title: "Be a Seller",
            link: "/be-a-seller",
            icon: <FaStore />,
        },
    ];
    return (
        <div className='w-full h-fit lg:block hidden'>
            <div className='max-w-[1520] mx-auto lg:px-6 px-4 '>

                <div className='flex h-[70] justify-between items-center '>

                    {/* logo */}
                    <Link href='/'>
                        <div className='flex  w-fit'>
                            <img
                                src="/logo.png"
                                alt="Raj Parampara"
                                className="absoulte top-0 pt-4 -left-10 w-[150] object-contain"
                            />
                            <div className='-ml-5 mt-9 leading-none'>
                                <span className='c-base text-xl font-bold text-center tracking-[3.5px]'>RAJ PARAMPARA</span>
                                <p className='poppins c-base uppercase font-semibold tracking-widest text-xs'>From Rajasthan to the world</p>
                            </div>
                        </div>
                    </Link>

                    <ul className='flex items-center gap-10 '>
                        {header_menu.map((item, index) => {
                            return (
                                <Link href={item.link} key={index}>
                                    <li key={index} className='flex gap-1 items-center font-normal text-gray-700 hover:text-[#4D0503]  capitalize cursor-pointer duration-300 text-lg'>
                                        <p>{item.icon}</p>
                                        <p className='mt-1 poppins'> {item.title}</p>
                                    </li>
                                </Link>
                            )
                        })}

                        <li className='poppins uppercase b-base text-white rounded-lg cursor-pointer hover:scale-105 duration-200 px-5 py-2'>Login</li>

                    </ul>
                </div>

            </div>
        </div>
    )
}
