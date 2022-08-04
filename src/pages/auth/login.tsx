import React, { useState } from "react";
import Titles from "../../components/layout/MainSide";
import { useFormik } from "formik";
import Image from "next/image";
import { getProviders, signIn } from "next-auth/react";
import loginBg from "../../../public/img/loginBg.jpg";
import { useRouter } from "next/router";

function login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState<string | null | undefined>("");

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!username || !password) {
      setMsg("Please enter the username and password");
      return;
    } else {
      const status = await signIn("credentials", {
        redirect: false,
        username: username,
        password: password,
      });
      if (status?.ok === true) {
        router.push("/");
      }
      setMsg(status?.error);
    }
  };

 
  return (
    <>
      <Titles withTitle={false} >
        <div className="card bg-white shadow-xl md:card-side md:place-self-center md:w-full  max-w-4xl">
          <figure className="photoBox h-40 relative md:h-full md:w-1/2">
            <Image src={loginBg} layout="fill" />
          </figure>
          <div className="card-body p-5">
            <form className="flex flex-col gap-3 max-w-screen-sm " onSubmit={submitHandler}>
              <h2 className="text-3xl font-bold">登入</h2>
              {/* <input name="csrfToken" type="hidden" defaultValue={csrfToken} /> */}

              {msg ? (
                <div className="alert alert-error shadow-lg">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-current flex-shrink-0 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        onClick={() => setMsg(null)}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{msg}</span>
                  </div>
                </div>
              ) : (
                ""
              )}

              <label htmlFor="username">使用者</label>

              <input
                id="username"
                name="username"
                type="text"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                value={username}
                className="input input-lg input-bordered border-2 p-2 w-full"
              />

              <label htmlFor="password">密碼 </label>

              <input
                id="password"
                name="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="input input-lg  input-bordered border-2 p-2 w-full"
              />
              <button
                className="btn btn-outline btn-success p-2 border-2 mt-3"
                type="submit"
              >
                登入
              </button>
            </form>
          </div>
        </div>
      </Titles>
    </>
  );
}

export default login;
