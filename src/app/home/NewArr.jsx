import React from 'react'
import { H2_Heading } from '../H2_headings/H2_headings'
import { FaHeart } from 'react-icons/fa';

export default function NewArr() {
    const product_data = [
        {
            title: "Artificial Jewellery",
            desc: "Designer Jewellery, Earrings, Necklaces & Bridal Sets",
            link: "/artificial-jewellery",
            src: "/products/p1.jpg"
        },
        {
            title: "Traditional Footwear",
            desc: "Rajasthani Mojari, Jutti & Traditional Footwear",
            link: "/ethnic-footwear",
            src: "/products/p1.jpg"
        },
        {
            title: "Ethnic Clothing",
            desc: "Traditional Clothing, Sarees, Kurtis & Ethnic Wear",
            link: "/ethnic-clothing",
            src: "/products/p1.jpg"
        },
        {
            title: "Handbags & Potlis",
            desc: "Women's Handbags, Potli Bags & Fashion Accessories",
            link: "/handbags-potlis",
            src: "/products/p1.jpg"
        },
        {
            title: "Home Decor",
            desc: "Handcrafted Home Decor & Rajasthani Decorative Items",
            link: "/home-decor",
            src: "/products/p1.jpg"
        },
        {
            title: "Home Decor",
            desc: "Handcrafted Home Decor & Rajasthani Decorative Items",
            link: "/home-decor",
            src: "/products/p1.jpg"
        },
        {
            title: "Home Decor",
            desc: "Handcrafted Home Decor & Rajasthani Decorative Items",
            link: "/home-decor",
            src: "/products/p1.jpg"
        },
        {
            title: "Home Decor",
            desc: "Handcrafted Home Decor & Rajasthani Decorative Items",
            link: "/home-decor",
            src: "/products/p1.jpg"
        },
        {
            title: "Home Decor",
            desc: "Handcrafted Home Decor & Rajasthani Decorative Items",
            link: "/home-decor",
            src: "/products/p1.jpg"
        },
        {
            title: "Home Decor",
            desc: "Handcrafted Home Decor & Rajasthani Decorative Items",
            link: "/home-decor",
            src: "/products/p1.jpg"
        },
        {
            title: "Home Decor",
            desc: "Handcrafted Home Decor & Rajasthani Decorative Items",
            link: "/home-decor",
            src: "/products/p1.jpg"
        },
        {
            title: "Home Decor",
            desc: "Handcrafted Home Decor & Rajasthani Decorative Items",
            link: "/home-decor",
            src: "/products/p1.jpg"
        },
    ];
    return (
        <section className='w-full h-full bg-white mt-10'>
            <div className='max-w-[1520] mx-auto'>

                {H2_Heading('New Arrivals', `Explore authentic Rajasthani product categories including artificial jewellery, ethnic footwear, traditional clothing, handbags, handicrafts, and home decor. Discover premium handcrafted products inspired by Rajasthan's rich culture and heritage.`)}

                <div className='grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 lg:px-6 px-0 sm:gap-5 my-7'>
                    {product_data.map((item, index) => {
                        return (
                            <div key={index} className='border hover:-mt-3 py-3 sm:border-gray-300 border-gray-100 hover:brightness-105 duration-500 cursor-pointer overflow-hidden relative'>
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
                        )
                    })}
                </div>

                <div className='flex justify-end mx-10'>
                    <button className='poppins bg-white border hover:bg-gray-200 shadow-md duration-100 cursor-pointer px-7 py-2'>View More</button>
                </div>
            </div>
        </section>
    )
}
