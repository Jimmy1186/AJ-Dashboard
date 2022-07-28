import React from "react";
import Analysis from "./Analysis";
import TopBar from "./TopBar";
import TableData from "./TableData";
import Container from "@mui/material/Container";

function Homepage() {
  return (
    <div className="flex flex-col h-full gap-5 p-5 md:w-2/3 rounded-l-md lg:w-full">
      <TopBar />
      <Analysis />
      <TableData />
    </div>
  );
}

export default Homepage;
