import React from "react";
import {useSession} from "next-auth/react"
type navStateType = {
  navState: boolean;
  setNavState: React.Dispatch<React.SetStateAction<boolean>>;
};

function NavBtn(props: navStateType) {
  const{status} = useSession()

if(status==="unauthenticated"){
  return <></>
}
  return (
    <div className="relative md:hidden">
      <div
        className="fixed right-6 top-5 z-50"
        onClick={() => props.setNavState(!props.navState)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </div>
    </div>
  );
}

export default NavBtn;
