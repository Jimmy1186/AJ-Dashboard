import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Avatar from '@mui/material/Avatar';

const defaultImg = '/img/default.jpg'



function Person() {
  return (
    <div className='md:pb-5'>
        <Link href="#" >
            <a className='flex flex-col gap-3 md:flex-row items-center'>
            <Avatar alt="Cindy Baker" src={defaultImg} />
            <p className='text-white'>chyixn</p>
            </a>
        </Link>
    </div>
  )
}

export default Person