import React from 'react'
import HeroImage from '../assets/HeroImage.png'

function HeroSection() {
  return (
    <div className='px-4 py-2 mt-6'>
        <div className='bg-cardBg rounded-md w-full lg:py-6 md:px-4 md:py-2 '>
            <div className='flex justify-center'>
                <div className='mt-8'>
                <img src ={HeroImage}
                  alt="Hero"
                className='w-full h-auto object-cover'
                ></img>
            <h1 className='font-openSans mt-3 text-xl'>Discover your inner peace</h1>
            <p className='font-openSans mt-4 text-base'>Join us for a series of wellness retreats designed to help you find tranquility and rejuvenation.</p>
            
                </div>
           </div>
            </div>
    </div>
  )
}

export default HeroSection