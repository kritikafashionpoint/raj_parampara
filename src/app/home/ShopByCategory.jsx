import React from 'react'
import { H2_Heading } from '../H2_headings/H2_headings';

export default function Shopbycategory() {
    const category_data = [
        {
            title: "Artificial Jewellery",
            desc: "Designer Jewellery, Earrings, Necklaces & Bridal Sets",
            link: "/artificial-jewellery",
            src: "/products/p3.jpg"
        },
        {
            title: "Traditional Footwear",
            desc: "Rajasthani Mojari, Jutti & Traditional Footwear",
            link: "/ethnic-footwear",
            src: "/products/p3.jpg"
        },
        {
            title: "Ethnic Clothing",
            desc: "Traditional Clothing, Sarees, Kurtis & Ethnic Wear",
            link: "/ethnic-clothing",
            src: "/products/p3.jpg"
        },
        {
            title: "Handbags & Potlis",
            desc: "Women's Handbags, Potli Bags & Fashion Accessories",
            link: "/handbags-potlis",
            src: "/products/p3.jpg"
        },
        {
            title: "Home Decor",
            desc: "Handcrafted Home Decor & Rajasthani Decorative Items",
            link: "/home-decor",
            src: "/products/p3.jpg"
        },
        {
            title: "Home Decor",
            desc: "Handcrafted Home Decor & Rajasthani Decorative Items",
            link: "/home-decor",
            src: "/products/p3.jpg"
        },
        {
            title: "Home Decor",
            desc: "Handcrafted Home Decor & Rajasthani Decorative Items",
            link: "/home-decor",
            src: "/products/p3.jpg"
        },
        {
            title: "Home Decor",
            desc: "Handcrafted Home Decor & Rajasthani Decorative Items",
            link: "/home-decor",
            src: "/products/p3.jpg"
        }
    ];
    return (
        <section className='w-full h-full bg-white mt-12'>
            <div className='max-w-[1520] mx-auto'>

                {H2_Heading('Shop by Category', `Explore authentic Rajasthani product categories including artificial jewellery, ethnic footwear, traditional clothing, handbags, handicrafts, and home decor. Discover premium handcrafted products inspired by Rajasthan's rich culture and heritage.`)}

                <div className='grid lg:grid-cols-8 md:grid-cols-4 grid-cols-3 lg:px-6 px-0 sm:gap-3 mt-7'>
                    {category_data.map((item, index) => {
                        return (
                            <div key={index} className='border hover:-mt-3  hover:brightness-105 py-3 sm:border-gray-300 border-gray-100 lg:shadow-lg lg:hover:shadow-2xl duration-500 cursor-pointer overflow-hidden'>
                                <img src={item.src} className='w-full lg:h-[120] h-[130]  hover:scale-[1.08] duration-300 object-center object-contain' />
                                {/* content */}
                                <div className='bg-white c-base px-3 py-5 '>
                                    <p className='md:text-md font-semibold text-lg mb-1 pt-4 line-clamp-1 border-t border-gray-300'>{item.title}</p>
                                    <p className='poppins text-gray-600 text-sm line-clamp-2'>{item.desc}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}
