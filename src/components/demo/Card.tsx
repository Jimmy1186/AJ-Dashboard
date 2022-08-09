import React from 'react'

type projectType =
  {name:string,description:string,price:any,createrID:number}


function Card({name,description,price,createrID}:projectType) {
  return (
    <div className="card bg-base-100 h-fit overflow-visible shadow-xl" key={createrID}>
    <figure className="px-10 pt-10">
      <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">{name}</h2>
      <h3>價值:{price}$</h3>
      <p>{description}</p>
      <p>建立人ID:{createrID}</p>
    </div>
  </div>
  )
}

export default Card