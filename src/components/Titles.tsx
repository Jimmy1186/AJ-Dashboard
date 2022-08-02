import React from "react";

type titleWrapperType = {
  children: React.ReactNode;
  titleName: string;
};

function Titles({ children, titleName }: titleWrapperType) {
  return (
    <>
      <div className="card flex flex-col gap-5 justify-center p-3">
        <div className="card w-full bg-white p-5 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-center justify-center">{titleName}</h2>
          </div>
          
        </div>
        {children}
      </div>
      
    </>
  );
}

export default Titles;
