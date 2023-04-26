import React from 'react'
import Image from 'next/image'

function MediumCard({img,title}) {
  return (
    <div className=" select-none cursor-pointer hover:scale-105 ease-out transition transform duration-200 gap-2 hover:bg-gray-100">
        <div className=' relative h-80 w-80'>
            <Image className='rounded-xl' alt='img' src={img} layout='fill'/>
        </div>
        <h3 className='text-2xl mt-3'>{title}</h3>
    </div>
  )
}

export default MediumCard