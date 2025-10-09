import React from 'react'

const Banner2 = () => {
  return (
    <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-center py-10'>
        <div className=' text-white inter-font font-bold mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl" '>
            <h1>Trusted by Millions, Built for You</h1>
        </div>
        {/* <div className='flex justify-center items-center gap-10 mt-10 text-white inter-font'> */}
        <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-5 mt-10 inter-font text-white  '>
            <div className='py-4'>
                <h1>Total Downloads</h1>
                <p className='inter-font text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl font-bold'>29.6M</p>
                <p>21% more than last month</p>
            </div>
            <div>
                <h1>Total Reviews</h1>
                <p className='inter-font text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl font-bold'>906K</p>
                <p>46% more than last month</p>
            </div>
            <div>
                <h1>Total Apps</h1>
                <p className='inter-font text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl font-bold'>132+</p>
                <p>31 more will Launch</p>
            </div>
        </div>
    </div>
  )
}

export default Banner2