import React from "react";
import Analysis from "./Analysis";
import TopBar from "./TopBar";
import TableData from './TableData'
function Homepage() {
  return (
    <div className="flex flex-col gap-5 p-5">
      <TopBar />
      {/* <div className="analsis bg-white h-40"> */}
     <Analysis />

     <TableData />
    </div>
    // </div>
  );
}

export default Homepage;
