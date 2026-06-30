import React from 'react'
import { H2_Heading } from '../H2_headings/H2_headings'
import { FaAngleRight, FaHeart } from 'react-icons/fa';
import ProductCard from '../common/ProductCard';

export default function TopSelling() {
    const product_data = [
        {
            title: "Artificial Jewellery",
            desc: "Designer Jewellery, Earrings, Necklaces & Bridal Sets",
            link: "/artificial-jewellery",
            src: "/products/p5.jpg"
        },
        {
            title: "Traditional Footwear",
            desc: "Rajasthani Mojari, Jutti & Traditional Footwear",
            link: "/ethnic-footwear",
            src: "/products/p5.jpg"
        },
        {
            title: "Ethnic Clothing",
            desc: "Traditional Clothing, Sarees, Kurtis & Ethnic Wear",
            link: "/ethnic-clothing",
            src: "/products/p5.jpg"
        },
        {
            title: "Handbags & Potlis",
            desc: "Women's Handbags, Potli Bags & Fashion Accessories",
            link: "/handbags-potlis",
            src: "/products/p5.jpg"
        },
        {
            title: "Home Decor",
            desc: "Handcrafted Home Decor & Rajasthani Decorative Items",
            link: "/home-decor",
            src: "/products/p5.jpg"
        },
        {
            title: "Home Decor",
            desc: "Handcrafted Home Decor & Rajasthani Decorative Items",
            link: "/home-decor",
            src: "/products/p5.jpg"
        },
        {
            title: "Home Decor",
            desc: "Handcrafted Home Decor & Rajasthani Decorative Items",
            link: "/home-decor",
            src: "/products/p5.jpg"
        },
        {
            title: "Home Decor",
            desc: "Handcrafted Home Decor & Rajasthani Decorative Items",
            link: "/home-decor",
            src: "/products/p5.jpg"
        },
        {
            title: "Home Decor",
            desc: "Handcrafted Home Decor & Rajasthani Decorative Items",
            link: "/home-decor",
            src: "/products/p5.jpg"
        },
        {
            title: "Home Decor",
            desc: "Handcrafted Home Decor & Rajasthani Decorative Items",
            link: "/home-decor",
            src: "/products/p5.jpg"
        },
        {
            title: "Home Decor",
            desc: "Handcrafted Home Decor & Rajasthani Decorative Items",
            link: "/home-decor",
            src: "/products/p5.jpg"
        },
        {
            title: "Home Decor",
            desc: "Handcrafted Home Decor & Rajasthani Decorative Items",
            link: "/home-decor",
            src: "/products/p5.jpg"
        },
    ];
    return (
        <section className='w-full h-full bg-white mt-10'>
            <div className='max-w-[1520] mx-auto lg:px-6 px-4'>

                {H2_Heading('Top Sellings', `Explore authentic Rajasthani product categories including artificial jewellery, ethnic footwear, traditional clothing, handbags, handicrafts, and home decor. Discover premium handcrafted products inspired by Rajasthan's rich culture and heritage.`)}

                <div className='grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 sm:gap-5 my-7'>
                    {product_data.slice(0, 6).map((item, index) => {
                        return (
                            <ProductCard key={index} item={item} index={index} />
                        )
                    })}
                </div>

                <div className='flex justify-end mx-10'>
                    <button className='flex items-center gap-2 mt-8 poppins bg-white border hover:bg-gray-100 shadow-md duration-100 cursor-pointer px-7 py-2'>
                        View More
                        <FaAngleRight />
                    </button>
                </div>
            </div>
        </section>
    )
}
