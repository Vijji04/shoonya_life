import React from 'react'

function ListingCard({data}) {
  return (
    <div className=''>
        <div className='bg-cardBg md:w-[244px] lg:w-[380px] xl:w-[443px] md:h-[420px] rounded-md'>
            <div className='px-2 py-2'>
            <img className='w-[200px] h-[150px] rounded-md' src={data.image} alt="img"></img>
            <p className='font-openSans text-xl mt-8'>{data.title}</p>
            <p className='font-openSans text-sm mt-2'>{data.description}</p>
            <p className='font-openSans text-sm mt-2'>Date:{data.date}</p>
            <p className='font-openSans text-sm mt-2'>Location:{data.location}</p>
            <p className='font-openSans text-sm mt-2'>Price:{data.price}</p>

            </div>
            
        </div>
    </div>
  )
}

export default ListingCard