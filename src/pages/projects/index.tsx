import React from 'react'
import MainSide from "../../components/layout/MainSide";
import Card from "../../components/demo/Card";
import Addbtn from '../../components/widget/Addbtn';


function projects() {
  return (
    <MainSide>
      <Addbtn addBtnLink='/projects/addProject' addBtnTitle='新增專案'/>
    <Card />
    <Card />
    <Card />
    <Card />
  </MainSide>
  )
}

export default projects