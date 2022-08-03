import React from "react";
import { useSession } from "next-auth/react";
type navStateType = {
  navState: boolean;
  setNavState: React.Dispatch<React.SetStateAction<boolean>>;
};

function NavBtn(props: navStateType) {
  const { status } = useSession();

  // if(status==="unauthenticated"){
  //   return <></>
  // }
  return (
    //   <label className="btn btn-circle swap swap-rotate fixed right-6 top-5 z-50 md:hidden" >

    //   <input type="checkbox" title="menu" onClick={() => props.setNavState(!props.navState)}/>

    //   <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>

    //   <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>

    // </label>

    <div className="relative md:hidden">
      <div
        className="fixed right-6 top-5 z-50"
        onClick={() => props.setNavState(!props.navState)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6  "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={
              props.navState ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h8m-8 6h16"
            }
          />
        </svg>
      </div>
    </div>
  );
}

export default NavBtn;
