import React from 'react'
import Avatar from '@mui/material/Avatar';

const defaultImg = '/img/default.jpg'



function Person() {
  return (
    <div className='md:pb-5'>
            <Avatar alt="Cindy Baker" src={defaultImg} />
            <p className='text-white'>chyixn</p>
    </div>
  )
}

export default Person