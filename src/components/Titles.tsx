import React from "react";

type titleWrapperType = {
  children: React.ReactNode;
  titleName: string;
};

function Titles({ children, titleName }: titleWrapperType) {
  return (
    <div className="card flex justify-center p-3">
        <div className="card w-full bg-white p-5 shadow-xl">
        <div className="card-body">
        <h2 className="card-title">{titleName}</h2>

        {children}
        </div>
      </div>
    </div>
  );
}

export default Titles;
