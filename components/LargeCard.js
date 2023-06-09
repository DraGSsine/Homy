import React from 'react'
import Image from 'next/image'
function LargeCard({img,title,description,buttonText}) {
  return (
    <div className=' relative py-16 cursor-pointer'>
        <div className='relative h-96 min-w-[300px]'>
            <Image alt='img' className='rounded-xl' src={img} layout='fill' objectFit='cover'/>
        </div>
        <div className='absolute top-32 left-12'>
            <h3 className='text-4xl mb-3 w-64'>{title}</h3>
            <p>{description}</p>
            <button className='text-sm text-white bg-gray-900 py-2 rounded-lg mt-5 px-4'>{buttonText}</button>
        </div>
    </div>
  )
}

export default LargeCard