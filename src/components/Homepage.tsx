import React from "react";
import Analysis from "./Analysis";
import TopBar from "./TopBar";
import TableData from "./TableData";
import Container from "@mui/material/Container";

function Homepage() {
  return (
   <>
   <TopBar />
      <Analysis />
      <TableData />
   </>

  );
}

export default Homepage;
