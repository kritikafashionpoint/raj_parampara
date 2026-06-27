export const  H2_Heading = (title, description) => {
    return (
        <div className='lg:px-6 px-4'>
            <h2 className='c-base font-semibold lg:text-4xl md:text-3xl text-2xl'>
                {title}
            </h2>

            <p className='poppins lg:text-start text-justify mt-2  text-gray-600'>
                {description}
            </p>
        </div>
    )
}