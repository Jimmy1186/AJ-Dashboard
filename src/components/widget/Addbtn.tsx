import React from "react";
import Link from "next/link";

type addbtnType = {
  addBtnLink: string;
  addBtnTitle: string;
};

function Addbtn({ addBtnLink, addBtnTitle }: addbtnType) {
  return (
    <div className="card w-28 h-28 bg-base-100 shadow-xl">
      <div className="card-body p-0">
        <Link href={addBtnLink}>
          <a className="flex flex-col h-full items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-3/4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p>{addBtnTitle}</p>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Addbtn;
