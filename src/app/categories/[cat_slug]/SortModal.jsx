'use client'

import React from 'react'

export default function SortModal({
    sortModal,
    setSortModal,
    selectedSort,
    setSelectedSort,
}) {

    const sortOptions = [
        {
            id: "featured",
            label: "Featured",
            value: "featured",
        },
        {
            id: "newest",
            label: "Newest First",
            value: "newest",
        },
        {
            id: "oldest",
            label: "Oldest First",
            value: "oldest",
        },
        {
            id: "price_low_high",
            label: "Price: Low to High",
            value: "price_low_high",
        },
        {
            id: "price_high_low",
            label: "Price: High to Low",
            value: "price_high_low",
        },
        {
            id: "discount",
            label: "Biggest Discount",
            value: "discount",
        },
        {
            id: "rating",
            label: "Highest Rated",
            value: "rating",
        },
        {
            id: "best_selling",
            label: "Best Selling",
            value: "best_selling",
        },
        {
            id: "popular",
            label: "Most Popular",
            value: "popular",
        },
        {
            id: "a_z",
            label: "Name: A to Z",
            value: "a_z",
        },
        {
            id: "z_a",
            label: "Name: Z to A",
            value: "z_a",
        },
        {
            id: "stock",
            label: "In Stock First",
            value: "stock",
        },
    ];

    return (
        <>
            {/* Overlay */}
            <div
                onClick={() => setSortModal(false)}
                className={`fixed inset-0 bg-black/60 transition-opacity duration-300 z-40 ${sortModal
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                    }`}
            />

            {/* Bottom Sheet */}
            <div
                className={`fixed left-0 bottom-0 w-full lg:h-[70vh] h-[65vh] bg-white z-50 transform transition-transform duration-300 ease-out ${sortModal ? "translate-y-0" : "translate-y-full"
                    }`}
            >
                <div className="max-w-3xl mx-auto lg:px-6 px-4 h-full flex flex-col">

                    {/* Handle */}
                    <div className="flex justify-center py-3">
                        <div className="w-14 h-1.5 bg-gray-300 rounded-full"></div>
                    </div>

                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-gray-300 pb-4">

                        <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800">
                            Sort Products
                        </h2>

                        <button
                            onClick={() => setSortModal(false)}
                            className="text-3xl text-gray-500 hover:text-black transition"
                        >
                            &times;
                        </button>

                    </div>


                </div>
            </div>
        </>
    );
}