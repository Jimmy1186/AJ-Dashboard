import React from 'react'
import Analysis from "../components/demo/Analysis";
import Stat from "../components/demo/Stat";
import TableData from "../components/demo/TableData";
import MainSide from "../components/layout/MainSide";



function dashboard() {
  return (
<>
 <Analysis />
    <Stat />
    <TableData />
</>
   

  )
}

export default dashboard