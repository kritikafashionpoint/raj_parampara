import React from 'react'

export default function WhyChooseUs() {
    const cards = [
        {
            icon: "🏺",
            title: "Authentic Handcrafted Products",
            desc: "Every product is carefully handcrafted by skilled artisans using traditional Rajasthani techniques, ensuring authenticity, uniqueness, and exceptional craftsmanship."
        },
        {
            icon: "⭐",
            title: "Premium Quality Assurance",
            desc: "We use premium-quality materials and perform strict quality checks to deliver products with elegant finishing, durability, and long-lasting beauty."
        },
        {
            icon: "🚚",
            title: "Secure Shopping & Fast Delivery",
            desc: "Enjoy secure payment options, safe packaging, quick order processing, and reliable delivery across India and worldwide."
        },
        {
            icon: "👑",
            title: "Celebrating Rajasthan's Heritage",
            desc: "Our collections are inspired by Rajasthan's royal culture, vibrant traditions, and timeless craftsmanship, bringing authentic heritage to your home."
        }
    ];
    return (

        <section className='w-full h-full bg-white mt-12 '>
            <div className='grid lg:grid-cols-[40%_auto] grid-cols-1  items-center justify-between max-w-[1520] mx-auto lg:px-6 px-4'>
                <img src="/banners/b1.jpg" className='w-full h-full lg:mb-0 mb-12 object-cover object-center text-black opacity-95 relative' />

                {/* <div className='w-full h-[2] bg-linear-to-r from-transparent via-[#b91510] to-transparent  mb-7'></div> */}
                <div className='lg:px-6 px-0 flex flex-col gap-3'>
                    <h2 className='flex items-center mt-3 c-base font-semibold lg:text-4xl md:text-3xl text-2xl'>

                        <div className='w-[5%] h-[2] rounded-full b-base'></div>
                        Why Choose Raj Parampara
                    </h2>

                    <p className='poppins lg:text-start text-justify  text-gray-500'>
                        Raj Parampara brings the timeless beauty of Rajasthan to your doorstep with a premium collection of handcrafted artificial jewellery, traditional mojaris, ethnic handbags, home décor, and artisan-made accessories. Every product is inspired by Rajasthan's rich culture, royal heritage, and skilled craftsmanship, offering designs that blend tradition with modern elegance.

                    </p>

                    <p className='poppins text-gray-500'>
                        We work with experienced artisans to deliver authentic, high-quality products that reflect the true essence of Rajasthani craftsmanship. From elegant bridal jewellery and traditional accessories to handcrafted home décor and ethnic fashion, every item is carefully selected for its quality, durability, and unique design. With secure payments, trusted delivery, and dedicated customer support, Raj Parampara ensures a safe, reliable, and enjoyable shopping experience across India.

                    </p>

                    <p className='poppins lg:text-start text-justify mb-5  text-gray-500'>
                        Whether you're shopping for festive occasions, weddings, cultural celebrations, or everyday ethnic fashion, Raj Parampara offers a carefully curated collection to suit every style. Explore authentic Rajasthani products, celebrate India's artistic heritage, and experience premium craftsmanship with every purchase.
                    </p>


                </div>

            </div>

            <div className='max-w-[1520] mx-auto lg:px-6 px-4 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-7'>
                {cards.map((item, index) => {
                    return (
                        <div key={index} className='flex flex-col items-center justify-center w-full px-3 py-5 border border-gray-300 lg:my-10 my-0 bg-white shadow-md hover:shadow-2xl duration-200 relative group hover:scale-[1.01]'>
                            <div className='w-0 group-hover:w-full duration-500 h-[4] absolute top-full left-0 bg-amber-900 '></div>
                            <p className='text-3xl ' >{item.icon}</p>
                            <h3 className='group-hover:text-[#740b08] duration-300 text-gray-500  text-xl text-center my-4 font-bold'>{item.title}</h3>
                            <p className='poppins text-[15px] text-center text-gray-600'>{item.desc}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
