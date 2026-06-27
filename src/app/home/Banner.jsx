import React from 'react'

export default function Banner() {
    const sp_heading = [
        'Royal',
        'Culture',
        'Traditional'
    ]
    return (

        <div className=''>
            <div style={{ background: "url('/banner2.png')" }} className='w-screen lg:block hidden h-[91vh] bg-center bg-no-repeat bg-cover text-black opacity-95 relative'>
                {/* <img src='/banner2.png' className='w-full h-[90vh] object-cover object-center opacity-80' /> */}

                <div className='flex items-center justify-center w-full h-full'>
                    <div className='w-full z-50 '>
                        <h1 className='c-base lg:text-5xl md:text-4xl text-2xl font-bold text-center'>Tradition of Rajasthan <br /> For the World</h1>
                        <h2 className='c-base text-lg uppercase tracking-widest text-center mt-8 poppins'>Experience the richness of royal craftsmanship, handmade excellence, <br /> and cultural elegance in every product.</h2>
                        <ol className='text-center flex gap-5 justify-center mt-8 poppins text-amber-800 text-2xl'>
                            {sp_heading.map((item, index) => {
                                return (
                                    <li className='lg:text-2xl text-xl' key={index}><span className='text-[17px]'>-✦-</span> {item}</li>
                                )
                            })}

                        </ol>
                        <div className='flex items-center justify-center gap-4 mt-10'>
                            <button className='b-base text-white rounded-md cursor-pointer hover:scale-105 duration-200 text-lg px-10 py-3 '>Explore</button>
                            <button className='bg-white c-base rounded-md cursor-pointer hover:scale-105 duration-200 text-lg px-10 py-3'>Shop <span className='sm:inline hidden'>Now</span></button>
                        </div>
                    </div>
                </div>

            </div>

         



        </div>


    )
}
