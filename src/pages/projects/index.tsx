import React from 'react'
import MainSide from "../../components/layout/MainSide";
import Card from "../../components/demo/Card";
import Addbtn from '../../components/widget/Addbtn';
import { trpc } from '../../utils/trpc';
import { v4 as uuidv4 } from 'uuid';

function projects() {
  const {data:projects,isLoading} = trpc.useQuery(["findAllProject"])


  return (
<>
      <Addbtn addBtnLink='/projects/addProject' addBtnTitle='新增專案'/>
    {projects?.map((payload,index)=>{
      return (<Card {...payload} key={uuidv4()} />)
    })}
</>


  )
}

export default projects