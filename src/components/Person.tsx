import React from 'react'
import Image from "next/image"

const defaultImg = '/img/default.jpg'



function Person() {
  return (
    <div className='md:pb-5'>
           <div className="avatar">
  <div className="w-24 rounded-full">
    {/* <Image src="/img/default" layout="fill" /> */}
  </div>
</div>
            <p className='text-white'>chyixn</p>
    </div>
  )
}

export default Person