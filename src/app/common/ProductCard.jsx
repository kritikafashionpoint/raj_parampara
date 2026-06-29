import Link from 'next/link'
import React from 'react'

export default function ProductCard({ item }) {
    return (
        <Link href={`/categories/specific/${item.link}`} >
            <div className='border hover:-mt-3 py-3 sm:border-gray-300 border-gray-100 hover:brightness-105 duration-500 cursor-pointer overflow-hidden relative'>
                <img src={item.src} className='w-full lg:h-[190] h-[190]  hover:scale-[1.08] duration-300 object-center object-contain' />
                {/* content */}
                <div className='bg-white c-base px-4 pt-3 '>
                    <p className='md:text-md text-lg font-semibold mb-1 pt-4 line-clamp-1 border-t border-gray-300'>{item.title}</p>
                    <p className='poppins text-gray-500 text-sm line-clamp-2'>{item.desc}</p>
                    <div className='mt-2 flex items-center gap-2'>
                        <p className='text-xl c-base font-semibold'>₹1200</p>
                        <p className='line-through text-gray-500'>₹2400</p>
                    </div>
                    <span className='poppins text-green-600 text-sm'>Discount -50%</span>
                    <div className='grid sm:grid-cols-2 gap-3 my-4'>
                        <button className='poppins py-1.5 cursor-pointer text-[15px] bg-white border hover:bg-gray-300 hover:border-transparent duration-300 text-gray-800 border-gray-800'>+ Cart</button>
                        <button className='poppins py-2 cursor-pointer text-[15px] b-base text-white hover:brightness-100 brightness-150 duration-300'>Buy Now</button>
                    </div>
                </div>
            </div>
        </Link>
    )
}
