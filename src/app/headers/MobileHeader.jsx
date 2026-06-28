import { ShoppingBag } from 'lucide-react'
import React from 'react'
import Link from "next/link";
import {
    AiOutlineHome,
    AiOutlineShopping,
    AiOutlineHeart,
    AiOutlineUser,
} from "react-icons/ai";
import { BsGrid } from "react-icons/bs";

export default function MobileHeader() {
    const top_menu_data = [
        {
            title: 'home',
            link: '/'
        },
        {
            title: 'shop ',
            link: '/'
        },
        {
            title: 'be a seller',
            link: '/'
        },
        {
            title: 'sign up',
            link: '/'
        },

    ]
    return (
        <div className='lg:hidden block w-full h-full'>
            <div className='max-w-[1520] mx-auto '>
                <div className='flex h-[70] justify-between items-center '>

                    {/* logo */}
                    <div className='flex justify-center w-fit'>
                        <img
                            src="/logo.png"
                            alt="Raj Parampara"
                            className="absoulte top-0 pt-4 -left-10 w-[150] object-contain"
                        />
                        <div className='-ml-5 mt-9 leading-none'>
                            <span className='c-base text-xl font-semibold text-center tracking-[3.5px]'>RAJ PARAMPARA</span>
                            <p className='poppins c-base uppercase font-bold tracking-widest text-[10px]'>From Rajasthan to the world</p>
                        </div>
                    </div>

                </div>




                <div className="fixed py-2 bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.08)] lg:hidden">
                    <ul className="flex justify-around items-center h-12">


                        <li>
                            <Link
                                href="/"
                                className="flex flex-col items-center gap-1 text-[#7B3F00] hover:text-[#5c2f00] duration-200"
                            >
                                <AiOutlineHome size={24} />
                                <span className="text-[11px] font-medium">Home</span>
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/categories"
                                className="flex flex-col items-center gap-1 text-gray-600 hover:text-[#7B3F00] duration-200"
                            >
                                <BsGrid size={22} />
                                <span className="text-[11px] font-medium">Categories</span>
                            </Link>
                        </li>

                        <li className="relative -mt-8">
                            <Link
                                href="/shop"
                                className="w-16 h-16 rounded-full b-base shadow-xl flex items-center justify-center text-white border-4 border-white hover:scale-105 duration-300"
                            >
                                <AiOutlineShopping size={28} />
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/wishlist"
                                className="flex flex-col items-center gap-1 text-gray-600 hover:text-[#7B3F00] duration-200"
                            >
                                <AiOutlineHeart size={24} />
                                <span className="text-[11px] font-medium">Wishlist</span>
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/account"
                                className="flex flex-col items-center gap-1 text-gray-600 hover:text-[#7B3F00] duration-200"
                            >
                                <AiOutlineUser size={24} />
                                <span className="text-[11px] font-medium">Account</span>
                            </Link>
                        </li>


                    </ul>
                </div>

            </div>
        </div>
    )
}
