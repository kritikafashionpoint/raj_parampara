import React from 'react'
import { H2_Heading } from '../H2_headings/H2_headings';

export default function AllCategoriesLandingPage() {
    const categories = [
        {
            title: "Baju Band",
            slug: "baju-band",
            src: "/banners/b1.jpg",
        },
        {
            title: "Kamar Band",
            slug: "kamar-band",
            src: "/banners/b1.jpg",
        },
        {
            title: "Necklaces",
            slug: "necklaces",
            src: "/banners/b1.jpg",
        },
        {
            title: "Earrings",
            slug: "earrings",
            src: "/banners/b1.jpg",
        },
        {
            title: "Bangles",
            slug: "bangles",
            src: "/banners/b1.jpg",
        },
        {
            title: "Rings",
            slug: "rings",
            src: "/banners/b1.jpg",
        },
        {
            title: "Anklets",
            slug: "anklets",
            src: "/banners/b1.jpg",
        },
        {
            title: "Maang Tikka",
            slug: "maang-tikka",
            src: "/banners/b1.jpg",
        },
        {
            title: "Nose Pins",
            slug: "nose-pins",
            src: "/banners/b1.jpg",
        },
        {
            title: "Mojari",
            slug: "mojari",
            src: "/banners/b1.jpg",
        },
        {
            title: "Potli Bags",
            slug: "potli-bags",
            src: "/banners/b1.jpg",
        },
        {
            title: "Handbags",
            slug: "handbags",
            src: "/banners/b1.jpg",
        },
        {
            title: "Home Decor",
            slug: "home-decor",
            src: "/banners/b1.jpg",
        },
        {
            title: "Handicrafts",
            slug: "handicrafts",
            src: "/banners/b1.jpg",
        },
        {
            title: "Ethnic Clothing",
            slug: "ethnic-clothing",
            src: "/banners/b1.jpg",
        },
        {
            title: "Gift Collections",
            slug: "gift-collections",
            src: "/banners/b1.jpg",
        },
    ];
    return (
        <section className='w-full h-screen bg-white mt-12'>
            <div className='max-w-[1520] mx-auto lg:px-6 px-4'>
                {H2_Heading('Categories', '')}

            </div>
        </section>
    )
}
