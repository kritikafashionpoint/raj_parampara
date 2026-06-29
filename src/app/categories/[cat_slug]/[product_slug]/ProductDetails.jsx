"use client";

import { useParams } from "next/navigation";
import { Heart, Minus, Plus, Star, Truck } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function ProductDetails() {
    const params = useParams();

    const [quantity, setQuantity] = useState(1);

    const product = {
        name: "Traditional Rajasthani Kundan Necklace Set",
        price: 1499,
        oldPrice: 2499,
        rating: 4.8,
        reviews: 186,
        stock: true,
        description:
            "Beautiful handcrafted artificial Kundan jewellery inspired by traditional Rajasthani heritage. Perfect for weddings, festivals and special occasions.",
        images: [
            "/products/p1.jpg",
            "/products/p3.jpg",
            "/products/p2.jpg",
            "/products/p4.jpg",
        ],
    };

    const [selectedImage, setSelectedImage] = useState(product.images[0]);

    return (
        <section className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4">

                <p className="flex flex-wrap items-center gap-2 text-md text-gray-700 mb-6">
                    <Link href={'/'}>
                        Home
                    </Link>
                    /
                    <Link href={'/categories'}>
                        Categories
                    </Link>
                    /
                    <Link href={`/categories/${params.cat_slug}`}>
                        {params.cat_slug}
                    </Link>
                    /
                    <Link href={`/categories/${params.cat_slug}/${params.product_slug}`}>
                        {params.product_slug}
                    </Link>
                </p>

                <div className="grid md:grid-cols-2 gap-12">

                    {/* Images */}
                    <div>

                        <div className="lg:h-[400] sm:h-[450] h-[300] overflow-hidden border border-[#740b08] bg-white py-5 ">
                            <img
                                src={selectedImage}
                                alt=""
                                className="w-full h-full object-contain object-center"
                            />
                        </div>

                        <div className="flex gap-4 mt-5 ">
                            {product.images.map((img, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImage(img)}
                                    className={`cursor-pointer hover:scale-105 duration-300 border  overflow-hidden ${selectedImage === img
                                        ? "border-[#740b08]"
                                        : "border-gray-300"
                                        }`}
                                >
                                    <img
                                        src={img}
                                        alt=""
                                        className="w-24 h-24 object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div>

                        <h1 className="md:text-4xl text-3xl font-bold text-gray-800">
                            {product.name}
                        </h1>

                        <div className="flex items-center gap-3 mt-4">
                            <div className="flex items-center text-yellow-500">
                                <Star size={18} fill="currentColor" />
                                <span className="ml-1 font-medium">
                                    {product.rating}
                                </span>
                            </div>

                            <span className="text-gray-700">
                                ({product.reviews} Reviews)
                            </span>
                        </div>

                        <div className="flex items-center gap-4 mt-6">
                            <span className="text-4xl font-bold text-red-600">
                                ₹{product.price * quantity}
                            </span>

                            <span className="text-xl text-gray-400 line-through">
                                ₹{product.oldPrice * quantity}
                            </span>

                            <span className="bg-green-100 text-green-700 px-3 py-1 ll text-sm font-medium">
                                40% OFF
                            </span>
                        </div>

                        <div className="mt-5">
                            {product.stock ? (
                                <span className="text-green-600 font-semibold">
                                    In Stock
                                </span>
                            ) : (
                                <span className="text-red-500 font-semibold">
                                    Out of Stock
                                </span>
                            )}
                        </div>

                        <p className="text-gray-800 poppins  mt-6 leading-8">
                            {product.description}
                        </p>

                        {/* Quantity */}

                        <div className="mt-8">

                            <h3 className="font-semibold mb-3">
                                Quantity
                            </h3>

                            <div className="flex items-center border  w-fit">

                                <button
                                    onClick={() =>
                                        quantity > 1 &&
                                        setQuantity(quantity - 1)
                                    }
                                    className="p-3 hover:bg-gray-100"
                                >
                                    <Minus size={18} />
                                </button>

                                <span className="px-6 font-semibold">
                                    {quantity}
                                </span>

                                <button
                                    onClick={() =>
                                        setQuantity(quantity + 1)
                                    }
                                    className="p-3 hover:bg-gray-100"
                                >
                                    <Plus size={18} />
                                </button>

                            </div>

                        </div>

                        {/* Buttons */}

                        <div className="flex flex-wrap gap-4 mt-10">

                            <button className="text-gray-500 border border-gray-600 p-4  hover:bg-gray-100">
                                <Heart />
                            </button>

                            <button className="bg-white border border-gray-600  px-10 py-4  cursor-pointer hover:bg-gray-900 transition">
                                Add To Cart
                            </button>

                            <button className="b-base text-white px-10 py-4  hover:brightness-150 cursor-pointer transition">
                                Buy Now
                            </button>



                        </div>

                        {/* Features */}

                        <div className="mt-10 border border-gray-300 p-5 space-y-4 bg-white">

                            <div className="flex items-center gap-3">
                                <Truck className="text-red-500" />
                                <span>Free Shipping Across India</span>
                            </div>

                            <div>
                                ✅ Easy Returns within 7 Days
                            </div>

                            <div>
                                ✅ Secure Online Payment
                            </div>

                            <div>
                                ✅ Premium Quality Artificial Jewellery
                            </div>

                        </div>

                    </div>

                </div>

                {/* Description */}

                <div className="mt-20 bg-white border border-gray-300 p-8">

                    <h2 className="text-2xl font-bold mb-5">
                        Product Description
                    </h2>

                    <p className="poppins  text-gray-600 leading-8">
                        This elegant Rajasthani artificial jewellery set is
                        crafted with premium-quality stones and detailed
                        craftsmanship. It is lightweight, skin-friendly and
                        suitable for weddings, festivals, parties and gifting.
                        Pair it with ethnic outfits to complete your traditional
                        look.
                    </p>

                </div>

            </div>
        </section>
    );
}