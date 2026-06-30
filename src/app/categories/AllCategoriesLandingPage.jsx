import Image from "next/image";
import Link from "next/link";
import React from "react";
import { H2_Heading } from "../H2_headings/H2_headings";

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
        <section className="w-full bg-white lg:py-14 py-10">
            <div className="max-w-[1520] mx-auto lg:px-6 px-4">

                {H2_Heading("Shop By Categories", "")}

                <div className="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-5 mt-10">

                    {categories.map((item, index) => (
                        <Link
                            key={index}
                            href={`/categories/${item.slug}`}
                            className="group relative overflow-hidden bg-gray-100"
                        >
                            <div className="relative w-full lg:h-[380px] md:h-[320px] h-[230px]">

                                <Image
                                    src={item.src}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>

                                {/* Category Name */}
                                <div className="absolute bottom-0 left-0 right-0 p-6">

                                    <h3 className="text-white lg:text-2xl text-lg font-semibold uppercase tracking-wider">
                                        {item.title}
                                    </h3>

                                    <span className="inline-block mt-2 text-sm text-white border-b border-white group-hover:tracking-widest transition-all duration-300">
                                        Explore →
                                    </span>

                                </div>

                            </div>
                        </Link>
                    ))}

                </div>
            </div>
        </section>
    );
}