"use client";

import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { H2_Heading } from "../H2_headings/H2_headings";

export default function FAQ() {
    const faqs = [
        {
            question: "Are all your products handcrafted?",
            answer:
                "Yes. Most of our products are handcrafted by skilled artisans using traditional Rajasthani craftsmanship.",
        },
        {
            question: "Do you deliver across India?",
            answer:
                "Yes, we deliver to all major cities and towns across India with secure packaging and reliable shipping.",
        },
        {
            question: "Can I return or exchange a product?",
            answer:
                "Yes. You can request a return or exchange according to our Return & Refund Policy within the eligible period.",
        },
        {
            question: "Which payment methods do you accept?",
            answer:
                "We accept UPI, Debit Cards, Credit Cards, Net Banking and Cash on Delivery (where available).",
        },
        {
            question: "How can I track my order?",
            answer:
                "Once your order is shipped, you'll receive a tracking ID via SMS or email to monitor your delivery.",
        },
    ];

    const [active, setActive] = useState(null);

    const toggle = (index) => {
        setActive(active === index ? null : index);
    };

    return (
        <section className="w-full bg-gray-50 py-20">
            <div className="max-w-6xl mx-auto">

                {H2_Heading(
                    "Frequently Asked Questions",
                    "Find answers to the most common questions about orders, shipping, payments, returns, and our handcrafted products."
                )}

                <div className="mt-12 space-y-4 px-4">
                    {faqs.map((item, index) => (
                        <div
                            key={index}
                            className="border border-gray-400 rounded-lg overflow-hidden"
                        >
                            <button
                                onClick={() => toggle(index)}
                                className="w-full cursor-pointer flex justify-between items-center p-5 text-left"
                            >
                                <h3 className="font-semibold sm:text-lg text-md">
                                    {item.question}
                                </h3>

                                <FiPlus
                                    className={`transition-transform duration-300 ${active === index ? "rotate-135" : "rotate-0"
                                        }`}
                                />
                            </button>

                            <div
                                className={`grid transition-all duration-300 ${active === index
                                    ? "grid-rows-[1fr]"
                                    : "grid-rows-[0fr]"
                                    }`}
                            >
                                <div className="overflow-hidden ">
                                    <p className="px-5 pb-5 text-gray-700 leading-7">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}