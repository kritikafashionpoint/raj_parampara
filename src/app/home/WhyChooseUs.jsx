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

        <section className='w-full h-full bg-white mt-12'>
            <div className='w-full h-[2] bg-linear-to-r from-transparent via-[#b91510] to-transparent  mb-7'></div>
            <div className='lg:px-6 px-4'>
                <h2 className='c-base font-semibold lg:text-4xl md:text-3xl text-2xl'>
                    Why Choose Raj Parampara
                </h2>

                <p className='poppins lg:text-start text-justify my-3  text-gray-500'>
                    Experience the beauty of Rajasthan's timeless craftsmanship with premium handcrafted jewellery, ethnic fashion, and traditional accessories. At Raj Parampara, we combine authentic artistry, superior quality, and exceptional customer service to deliver products that celebrate India's rich cultural heritage.
                </p>

                <p className='poppins mt-3 text-gray-500 mb-8'>
                    Raj Parampara is dedicated to preserving Rajasthan's rich traditions by bringing authentic handcrafted jewellery, ethnic footwear, handbags, home décor, and artisan-made products directly to your doorstep. Every product reflects skilled craftsmanship, premium materials, and timeless designs inspired by royal heritage. With secure shopping, reliable delivery, and a commitment to customer satisfaction, we ensure every purchase is a memorable experience.
                </p>

                <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-7'>
                    {cards.map((item, index) => {
                        return (
                            <div key={index} className='flex flex-col items-center justify-center w-full px-3 py-5 border border-gray-300 lg:my-10 my-0 bg-white shadow-md hover:shadow-2xl duration-500 relative group hover:scale-[1.01]'>
                                <div className='w-0 group-hover:w-full duration-1000 h-[4] absolute top-full left-0 bg-amber-900 '></div>
                                <p className='text-3xl ' >{item.icon}</p>
                                <h3 className='group-hover:text-[#740b08] duration-300 text-gray-500  text-xl text-center my-4 font-bold'>{item.title}</h3>
                                <p className='poppins text-[15px] text-center text-gray-600'>{item.desc}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
