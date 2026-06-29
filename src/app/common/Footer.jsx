import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#4D0503] text-white mt-0 ">
            <div className="w-full h-[3] bg-linear-to-r from-transparent via-amber-300 to-transparent"></div>
            {/* Top */}
            <div className="max-w-[1520] mx-auto lg:px-6 px-4 py-16">

                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-12">

                    {/* Brand */}
                    <div>

                        <img
                            src="/logo.png"
                            alt="Raj Parampara"
                            className="w-50"
                        />

                        <div className='mb-7 -mt-7 leading-none'>
                            <span className=' text-xl font-semibold text-center tracking-[3.5px]'>RAJ PARAMPARA</span>
                            <p className='poppins uppercase font-semibold tracking-widest text-xs mt-1'>From Rajasthan to the world</p>
                        </div>



                        <div className="flex gap-4 mt-6">

                            <a
                                href="#"
                                className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center hover:bg-white hover:text-[#4A2C2A] duration-300"
                            >
                                <FaFacebook size={18} />
                            </a>

                            <a
                                href="#"
                                className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center hover:bg-white hover:text-[#4A2C2A] duration-300"
                            >
                                <BsInstagram size={18} />
                            </a>

                            <a
                                href="#"
                                className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center hover:bg-white hover:text-[#4A2C2A] duration-300"
                            >
                                <BsYoutube size={18} />
                            </a>

                        </div>

                    </div>

                    {/* Quick Links */}
                    <div>

                        <h3 className="text-xl font-semibold mb-5">
                            Quick Links
                        </h3>

                        <ul className="space-y-3 text-gray-300">
                            <li className="poppins hover:text-white duration-100 "><Link className="poppins" href="/">Home</Link></li>
                            <li className="poppins hover:text-white duration-100 "><Link className="poppins" href="/shop">Shop</Link></li>
                            <li className="poppins hover:text-white duration-100 "><Link className="poppins" href="/categories">Categories</Link></li>
                            <li className="poppins hover:text-white duration-100 "><Link className="poppins" href="/new-arrivals">New Arrivals</Link></li>
                            <li className="poppins hover:text-white duration-100 "><Link className="poppins" href="/best-sellers">Best Sellers</Link></li>
                            <li className="poppins hover:text-white duration-100 "><Link className="poppins" href="/about">About Us</Link></li>

                        </ul>

                    </div>

                    {/* Customer Support */}
                    <div>

                        <h3 className="text-xl font-semibold mb-5">
                            Customer Support
                        </h3>

                        <ul className="space-y-3 text-gray-300">

                            <li className="hover:text-white duration-100 "><Link className="poppins" href="/contact">Contact Us</Link></li>
                            <li className="hover:text-white duration-100 "><Link className="poppins" href="/faq">FAQs</Link></li>
                            <li className="hover:text-white duration-100 "><Link className="poppins" href="/shipping-policy">Shipping Policy</Link></li>
                            <li className="hover:text-white duration-100 "><Link className="poppins" href="/return-policy">Return & Refund</Link></li>
                            <li className="hover:text-white duration-100 "><Link className="poppins" href="/privacy-policy">Privacy Policy</Link></li>
                            <li className="hover:text-white duration-100 "><Link className="poppins" href="/terms">Terms & Conditions</Link></li>

                        </ul>

                    </div>

                    {/* Contact */}
                    <div>

                        <h3 className="text-xl font-semibold mb-5">
                            Contact Us
                        </h3>

                        <div className="space-y-5 text-gray-300">

                            <div className="flex gap-3">

                                <MapPin className="mt-1" size={18} />

                                <p className="poppins">
                                    Jodhpur, Rajasthan <br />
                                    India
                                </p>

                            </div>

                            <div className="flex gap-3">

                                <Phone size={18} />

                                <p className="poppins">+91 80790 92775</p>

                            </div>

                            <div className="flex gap-3">

                                <Mail size={18} />

                                <p className="poppins">tarunmehra80790@gmail.com</p>

                            </div>

                        </div>

                    </div>

                </div>

                <p className="text-sm lg:text-center text-start  leading-7 text-gray-300 poppins mt-10 tracking-widest">
                    Raj Parampara brings authentic Rajasthani craftsmanship to your
                    doorstep. Explore premium artificial jewellery, traditional
                    mojaris, handbags, home décor and handcrafted products inspired by
                    Rajasthan's royal heritage.
                </p>

            </div>



            {/* Bottom */}

            <div className="border-t border-white/10">

                <div className="max-w-[1700] mx-auto lg:pb-0 pb-20 px-5 py-5 flex md:flex-row flex-col justify-between items-center gap-3">

                    <p className="text-sm text-gray-300 text-center ">
                        © {new Date().getFullYear()} Raj Parampara. All Rights Reserved.
                    </p>

                    <div className="flex gap-6 text-sm text-gray-300">

                        <Link href="/privacy-policy">
                            Privacy Policy
                        </Link>

                        <Link href="/terms">
                            Terms
                        </Link>

                        <Link href="/cookies">
                            Cookies
                        </Link>

                    </div>

                </div>

            </div>

        </footer>
    );
}