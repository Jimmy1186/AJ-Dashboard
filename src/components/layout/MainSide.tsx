import React from "react";

type titleWrapperType = {
  children: React.ReactNode;
  titleName?: string;
  withTitle: boolean;
};

function Titles({ children, titleName, withTitle }: titleWrapperType) {
  if (withTitle) {
    return (
      <>
        <div className="container flex flex-col max-w-3xl   bg-base-200 gap-5  shadow-xl p-3 pt-20 md:w-9/12 md:max-w-7xl">
          <div className="card w-full bg-base-100 p-1 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-center">{titleName}</h2>
            </div>
          </div>
          {children}
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container flex flex-col max-w-3xl   bg-base-200 gap-5 shadow-xl p-3 pt-20  md:w-9/12 md:max-w-7xl">
        {children}
      </div>
    </>
  );
}

export default Titles;
