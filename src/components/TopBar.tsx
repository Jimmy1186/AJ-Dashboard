import React from "react";

function TopBar() {
  return (
    <div className="card  bg-white shadow-xl ">
      <div className="card-body flex flex-row  justify-center items-center gap-3 p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input type="text" placeholder="Search" className="input input-bordered input-success w-8/12 max-w-xs" />
      </div>
    </div>
  );
}

export default TopBar;
