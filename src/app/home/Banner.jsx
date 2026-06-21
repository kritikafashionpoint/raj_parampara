import React from 'react'

export default function Banner() {
    const sp_heading = [
        'Royal',
        'Culture',
        'Traditional'
    ]
    return (
        <div className='w-full h-full text-black relative'>
            <img src='/banner2.png' className='w-full h-[90vh] object-cover object-center opacity-90' />
            <div className='absolute top-1/4 -translate-x-1/2 left-1/2 z-50'>
                <h1 className='c-base text-5xl font-bold text-center'>Tradition of Rajasthan For the World</h1>
                <h2 className='c-base text-lg uppercase tracking-widest text-center mt-8 poppins'>Experience the richness of royal craftsmanship, handmade excellence, and cultural elegance in every product.</h2>
                <ol className='text-center flex gap-5 justify-center mt-8 poppins text-amber-800 text-2xl'>
                    {sp_heading.map((item, index) => {
                        return (
                            <li key={index}><span className='text-[17px]'>-✦-</span> {item}</li>
                        )
                    })}

                </ol>
                <div className='flex items-center justify-center gap-4 mt-10'>
                    <button className='b-base text-white rounded-md cursor-pointer hover:scale-105 duration-200 text-lg px-10 py-3 '>Explore</button>
                    <button className='bg-white c-base rounded-md cursor-pointer hover:scale-105 duration-200 text-lg px-10 py-3'>Shop Now</button>
                </div>
            </div>
        </div>
    )
}
