import React from "react";


type projectType = {
  name: string;
  description: string;
  price:any;
  cost: any;
  createrID: number;
};

function Card({ name, description, price, cost, createrID }: projectType) {
  return (
    < >
      <div
      className="card bg-base-100 h-fit overflow-visible shadow-xl"
     
    >

      <div className="card-body items-center text-center" >
        <h2 className="card-title">{name}</h2>
        <h3>價值:{price}$</h3>
        <h3>成本:{cost}$</h3>
        <p>{description}</p>
        <p>建立人ID:{createrID}</p>
      </div>
    </div>
    </>
  
  );
}

export default Card;
