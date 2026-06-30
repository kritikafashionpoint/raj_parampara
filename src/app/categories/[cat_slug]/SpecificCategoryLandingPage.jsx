'use client'
import ProductCard from "@/app/common/ProductCard";
import { H2_Heading } from "@/app/H2_headings/H2_headings";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SortModal from "./SortModal";

export default function SpecificCategoryLandingPage() {
    const category = {
        name: "Baju Band",
        banner: "/banners/b1.jpg",
        description:
            "Discover premium handcrafted Rajasthani Baju Band designs made with traditional craftsmanship. Perfect for weddings, festivals, bridal wear and ethnic occasions.",
    };

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

    const [sortModal, setSortModal] = useState(false)

    const relatedCategories = [
        "Kamar Band",
        "Necklace",
        "Maang Tikka",
        "Rings",
        "Bangles",
        "Earrings",
    ];

    return (
        <section className="bg-white">

            <SortModal sortModal={sortModal} setSortModal={setSortModal} />

            {/* Hero */}
            <div className="relative h-[500]">

                <Image
                    src={category.banner}
                    fill
                    alt={category.name}
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-black/55 flex items-center">

                    <div className="max-w-[1480] mx-auto lg:px-6 px-4 w-full">

                        <h1 className="text-white text-5xl font-bold uppercase">
                            {category.name}
                        </h1>

                        <p className="text-gray-200 mt-5 max-w-2xl leading-8 text-lg">
                            {category.description}
                        </p>

                        <button className="mt-8 bg-white text-black px-8 py-3 uppercase tracking-wider hover:bg-black hover:text-white transition">
                            Shop Collection
                        </button>

                    </div>

                </div>

            </div>

            {/* Product Section */}
            <div className="max-w-[1480] mx-auto  py-10">

                <div className="lg:px-6 px-4 flex flex-wrap justify-between items-center mb-10">
                    {H2_Heading(`Explore ${category.name}`, `Premium handcrafted designs inspired by Rajasthan's royal heritage.`)}

                    {/* <button onClick={() => setSortModal(true)} className="border hover:bg-gray-300 duration-300 cursor-pointer px-6 py-2 mt-5">
                        Sort By
                    </button> */}

                </div>

                {/* Product Placeholder */}

                <div className="sm:px-4 lg:px-6 grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 sm:gap-6">

                    {product_data.map((item, index) => (
                        <ProductCard item={item} index={index} />
                    ))}

                </div>

            </div>

            {/* Features */}

            <div className="bg-white py-8">


                <div className="max-w-[1480] mx-auto lg:px-6 px-4">

                    {H2_Heading('Our Speciality', 'Best Traditional Items You can purchase')}

                    <div className="mt-5 grid lg:grid-cols-4 md:grid-cols-2 gap-6">

                        {[
                            "Premium Quality",
                            "Secure Payment",
                            "Fast Delivery",
                            "Easy Returns",
                        ].map((item) => (
                            <div
                                key={item}
                                className="b-base text-white border p-8 text-center"
                            >
                                <h3 className="font-semibold text-xl">
                                    {item}
                                </h3>

                                <p className=" mt-3">
                                    Shop confidently with trusted quality and service.
                                </p>
                            </div>
                        ))}
                    </div>


                </div>

            </div>

            {/* SEO Content */}

            <div className="py-10 max-w-[1480] mx-auto lg:px-6 px-4">

                <h2 className="text-4xl font-bold">
                    Buy Traditional {category.name} Online in India
                </h2>

                <p className="mt-6 text-gray-700 leading-9">
                    Explore our exclusive collection of handcrafted {category.name}
                    inspired by the royal traditions of Rajasthan. Each design is
                    carefully created using premium artificial stones and high-quality
                    craftsmanship, making it ideal for weddings, festivals, bridal
                    wear, cultural events, and gifting.
                </p>

                <p className="mt-6 text-gray-700 leading-9">
                    Whether you're looking for elegant ethnic jewellery or
                    statement accessories, our {category.name} collection offers
                    affordable luxury with exceptional finishing. Shop online with
                    secure payments, fast shipping across India, and worldwide
                    delivery.
                </p>

            </div>

            {/* Related Categories */}

            <div className="max-w-[1480] mx-auto px-6 pb-20">

                <h2 className="text-3xl font-bold mb-8">
                    Related Categories
                </h2>

                <div className="flex flex-wrap gap-4">

                    {relatedCategories.map((item) => (
                        <Link
                            key={item}
                            href={`/categories/${item.replace(' ', '-')}`}
                            className="border px-6 py-3 hover:bg-black hover:text-white transition"
                        >
                            {item}
                        </Link>
                    ))}

                </div>

            </div>

            {/* FAQ */}

            <div className="bg-gray-50 py-16">

                <div className="max-w-[1480] mx-auto lg:px-6 px-4">

                    <h2 className="text-3xl font-bold mb-10">
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-8">

                        <div>
                            <h3 className="font-semibold text-xl">
                                Is this jewellery suitable for weddings?
                            </h3>

                            <p className="text-gray-600 mt-2">
                                Yes, our handcrafted collection is specially designed for weddings, festivals and traditional occasions.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-xl">
                                Do you deliver across India?
                            </h3>

                            <p className="text-gray-600 mt-2">
                                Yes, we provide fast delivery across India along with international shipping.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-xl">
                                Are these handcrafted products?
                            </h3>

                            <p className="text-gray-600 mt-2">
                                Most products are handcrafted by skilled artisans inspired by traditional Rajasthani craftsmanship.
                            </p>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}