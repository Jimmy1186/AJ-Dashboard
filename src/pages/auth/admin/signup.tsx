import React, { useReducer, useState } from "react";
import Titles from "../../../components/layout/MainSide";
import { useFormik } from "formik";
import { getProviders, signIn } from "next-auth/react";
import { getCsrfToken } from "next-auth/react";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";


// type personType={
//  username: string;
// role: "R" | "W" | "X";
//  password: string;
// }

function signin() {


  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [role, setRole] = useState<string>();
  const [msg, setMsg] = useState<string | null | undefined>("");
  // const[role,setRole] = useState<"R" | "W" | "X">("R")

  const sumbitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    const userData = {
      username,
      password,
      role
    }

    e.preventDefault();
   await fetch('http://localhost:3000/api/signup',{
      method:'POST',
      body:JSON.stringify(userData),
      headers:{
        'Content-Type':'application/json'
      }
    }).then(res=>console.log(res.ok))

  

   
 
     
      
  };

  const checkHandler =()=>{
    
     if (!username || !password) {
        setMsg("Please enter the username and password");
        return;
      }
  }
  return (
    <>
      <Titles withTitle={true} titleName="新增使用者">
        <div className="card max-w-sm bg-base-100 shadow-xl">
          <div className="card-body">
            <form
              className="flex flex-col gap-5"
              onSubmit={sumbitHandler}
            >


              <label htmlFor="username" className="font-extrabold text-xl">
                使用者名稱
              </label>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-red-500">{msg}</span>
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="johnCena"
                  className="input input-bordered input-lg w-full max-w-xs"
                  onChange={(e) => setUsername(e.target.value)}
                 
                />
              </div>




              <label htmlFor="password" className="font-extrabold text-xl">
                密碼
              </label>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-red-500">{msg}</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="****"
                  className="input input-bordered input-lg w-full max-w-xs"
                  onChange={(e) => setPassword(e.target.value)}
                
                />
              </div>

              <div className="form-control pt-5 font-extrabold text-xl">
                <label htmlFor="role">權限</label>
                <label className="label cursor-pointer">
                  <span className="label-text">訪客</span>
                  <input
                    type="radio"
                    name="role"
                    value={"R"}
                    className="radio checked:bg-blue-500"
                    onChange={(e) => setRole(e.target.value)}
                  />
                </label>
              </div>

              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">使用者</span>
                  <input
                    type="radio"
                    name="role"
                    className="radio checked:bg-lime-500"
                    value={"W"}
                    onChange={(e) => setRole(e.target.value)}
                  />
                </label>
              </div>

              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">管理員</span>
                  <input
                    type="radio"
                    name="role"
                    value={"X"}
                    className="radio checked:bg-red-500"
                    onChange={(e) => setRole(e.target.value)}
                  />
                </label>
              </div>

              <label htmlFor="my-modal-4" className="btn modal-button">
                新增
              </label>

              <input type="checkbox" id="my-modal-4" className="modal-toggle" />
              <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label
                  className="modal-box flex flex-col justify-center gap-6 items-center relative"
                  htmlFor=""
                >
                  <h3 className="text-lg font-bold">確定新增使用者 ?</h3>
                  <div className="container flex flex-row justify-center gap-6 items-center">
                    <button className="btn btn-error">我想想</button>
                    <button className="btn btn-success" type="submit">
                      OK
                    </button>
                  </div>
                </label>
              </label>
            </form>
          </div>
        </div>
      </Titles>
    </>
  );
}

export default signin;

// export const getServerSideProps: GetServerSideProps = async (context) =>{
//     return {
//       props: {
//         csrfToken: await getCsrfToken(context),
//       },
//     }
//   }
