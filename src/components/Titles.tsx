import React from "react";

type titleWrapperType = {
  children: React.ReactNode;
  titleName?: string;
  withTitle:boolean;
};

function Titles({ children, titleName,withTitle }: titleWrapperType) {

  if(withTitle){
    return (
      <>
  
        <div className="card flex flex-col gap-5 p-3 md:w-full">
          <div className="card w-full bg-white p-1 shadow-xl">
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
  
  <div className="card flex flex-col gap-5 justify-center p-3 md:w-full">
    {children}
  </div>
  
</>

  )
  
}

export default Titles;
