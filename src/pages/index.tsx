import type { NextPage } from 'next'
import { useState } from 'react'
import Homepage from '../components/Homepage'
import Nav from '../components/Nav'
import NavBtn from '../components/NavBtn'


const Home: NextPage = () => {
  const [navState,setNavState]=useState<boolean>(false)
  return (
    <>
    <div className="wrapper p-5 bg-slate-200 h-screen">
      {/* <Nav /> */}
    <NavBtn navState={navState} setNavState={setNavState}/>
    <Nav  navState={navState} setNavState={setNavState}/>
    <Homepage />
    </div>
    </>
  )
}

export default Home
