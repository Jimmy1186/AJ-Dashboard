import React from "react";

function CostCard() {
  return (
    <div
      className="bg-base-100 h-48 rounded-3xl shadow-2xl
  flex flex-row
  md:col-start-2 md:col-span-1"
    >
      <div className="left pl-7 py-4 flex flex-col min-w-fit">
        <div
          className="icon-wrapper rounded-full bg-secondary-focus w-12 h-12
      flex justify-center items-center mb-3
      "
        >
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
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
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

export default CostCard;
