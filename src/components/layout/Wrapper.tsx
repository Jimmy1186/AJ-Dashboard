import React from 'react'


type wrapperType ={
    children:React.ReactNode
}


function Wrapper({children}:wrapperType) {
  return (
    <div className='wrapper gird grid-cols-1 
    md:grid md:grid-cols-9 
    lg:grid-cols-7
    xl:grid-cols-9
    2xl:grid-cols-12
    '>
        {children}
    </div>
  )
}

export default Wrapper