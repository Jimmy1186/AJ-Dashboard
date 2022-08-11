import React from "react";

type titleWrapperType = {
  children: React.ReactNode;
};

function Titles({ children }: titleWrapperType) {
 

  return (
    <>
      <div className="mainside bg-base-200
      grid grid-cols-1 h-full  p-3 overflow-auto gap-5
      md:col-start-3 md:col-span-7 md:grid-cols-2 md:gap-4
      lg:col-start-2 lg:grid-cols-3 lg:gap-5
      xl:col-span-8 xl:gap-6
      2xl:col-span-11
      ">
        {children}
      </div>
    </>
  );
}

export default Titles;
