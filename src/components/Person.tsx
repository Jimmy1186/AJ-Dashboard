import React from 'react'
import { signOut } from "next-auth/react"
import { useRouter } from 'next/router'
const defaultImg = '/img/default.jpg'



function Person() {
  const router = useRouter()
  return (
    <div className="dropdown dropdown-top">
    <label tabIndex={0} className="btn m-1">Click</label>
    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
      <li><a>設定</a></li>
      <li><a onClick={() => signOut({callbackUrl:'/auth/login'})}>登出</a></li>
    </ul>
  </div>
//     <div className="avatar placeholder">
//     <div className="flex items-center bg-neutral-focus text-neutral-content justify-center bg-zinc-100 rounded-full h-12 w-12">
//       <p className="text-3xl text-black text-center">K</p>
      
//     </div>
   
// </div>
  )
}

export default Person