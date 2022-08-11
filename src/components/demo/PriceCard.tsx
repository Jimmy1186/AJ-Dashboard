import React from "react";



function InfoCard() {
  return (
    <div
      className="bg-base-100 h-48 rounded-3xl shadow-2xl
    flex flex-row

    md:col-start-1 md:col-span-1 md:min-w-fit"
    >
      <div className="left pl-7 py-4 min-w-fit flex flex-col">
        <div className="icon-wrapper rounded-full bg-secondary w-12 h-12
        flex justify-center items-center mb-3
        ">
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-base-100"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            
          >
            <path
            
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>

        <h3 className="font-bold">total sales</h3>
        <h2 className="font-bold text-3xl md:text-xl lg:text-3xl">$ 25024</h2>

        <h6 className="item-end pt-3 font-medium text-base-300">this month</h6>
      </div>
      <div className="right p-3 h-full w-1/2 flex justify-center items-center">
        <h3 className="text-5xl font-extrabold text-accent-focus md:text-3xl lg:text-5xl">50%</h3>
      </div>
    </div>
  );
}

export default InfoCard;
