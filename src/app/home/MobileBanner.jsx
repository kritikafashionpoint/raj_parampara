import React from 'react'

export default function MobileBanner() {
    const sp_heading = [
        'Royal',
        'Culture',
        'Traditional'
    ]
    return (
        <div className='lg:hidden block'>
            <div className='bg-[#f9d897] p-4 w-screen h-full py-20 flex items-center justify-center bg-center bg-no-repeat bg-cover text-black opacity-95 relative'>
                {/* <img src='/banner2.png' className='w-full h-[90vh] object-cover object-center opacity-80' /> */}
                <div className='w-full z-50 '>
                    <h1 className='c-base lg:text-5xl md:text-4xl text-3xl font-bold text-center'>Tradition of Rajasthan <br /> For the World</h1>
                    <h2 className='c-base text-lg lg:uppercase capitalize tracking-widest text-center mt-8 poppins'>Experience the richness of royal craftsmanship, handmade excellence, <br /> and cultural elegance in every product.</h2>
                    <ol className='text-center flex gap-5 justify-center mt-8 poppins text-amber-950 font-semibold  text-2xl'>
                        {sp_heading.map((item, index) => {
                            return (
                                <li className='text-lg poppins' key={index}><span className='text-[17px] '>-✦-</span> {item}</li>
                            )
                        })}

                    </ol>
                    <div className='flex items-center justify-center gap-4 mt-10'>
                        <button className='b-base text-white rounded-md cursor-pointer hover:scale-105 duration-200 text-lg px-7 py-2 '>Explore</button>
                        <button className='bg-white c-base rounded-md cursor-pointer hover:scale-105 duration-200 text-lg px-7 py-2'>Shop <span className='sm:inline hidden'>Now</span></button>
                    </div>
                </div>
            </div>
        </div>

    )
}
