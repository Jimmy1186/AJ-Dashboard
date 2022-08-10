import React, { useState, Dispatch, SetStateAction } from "react";
import Person from "./Person";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

type navStateType = {
  navState: boolean;

  setNavState: Dispatch<SetStateAction<boolean>>;
};

function Nav({ navState, setNavState }: navStateType) {
  const router = useRouter()
  console.log(router.pathname)
  const { data: session, status } = useSession();

  // if (status === "loading") {
  //   return <></>;
  // }
  // if (status === "unauthenticated") {
  //   return <></>;
  // }

  return (
    <>
      <nav
        className={` bg-neutral p-10 flex min-h-full fixed flex-col items-center z-30 transition-all  ${
          navState ? "-translate-x-0 opacity-1" : " -translate-x-40 opacity-0"
        } md:-translate-x-0 md:static md:opacity-100  md:col-start-1 md:col-span-2 
        lg:col-span-1
        `}
      >
        <div className="avatar placeholder pt-5 md:pt-10 ">
          <div className="bg-primary text-neutral-content rounded-full w-16">
            <span className="text-3xl">S</span>
          </div>
        </div>

        <ul className="list-none text-cyan-50 h-full rounded-md flex flex-col gap-10 text-3xl pt-10 md:w-40 md:text-xl md:pl-5">
          <li className="flex flex-row items-center gap-3   
          
          ">
            <Link href={"/"}>
              <a
                className={`flex items-center justify-center  gap-3 transition-all hover:translate-x-5 ease-in-out 
                
                w-32 h-10 rounded-lg`}
                onClick={() => setNavState(!navState)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                首頁
              </a>
            </Link>
          </li>
          <li className="flex flex-row items-center gap-3 ">
            <Link href={"/projects"}>
            <a
                className={`flex items-center justify-center  gap-3 transition-all hover:translate-x-5 ease-in-out 
               
                w-32 h-10 rounded-lg`}
                onClick={() => setNavState(!navState)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                專案庫
              </a>
            </Link>
          </li>
          <li className="flex flex-row items-center gap-3 ">
            <Link href={"/tasks"}>
            <a
                className={`flex items-center justify-center  gap-3 transition-all hover:translate-x-5 ease-in-out 
               
                w-32 h-10 rounded-lg`}
                onClick={() => setNavState(!navState)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
                任務
              </a>
            </Link>
          </li>
          <li className="flex flex-row items-center gap-3 ">
            <Link href={"/user_setting"}>
            <a
                className={`flex items-center justify-center  gap-3 transition-all hover:translate-x-5 ease-in-out 
               
                w-32 h-10 rounded-lg`}
                onClick={() => setNavState(!navState)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                設定
              </a>
            </Link>
          </li>
          <li className="flex flex-row items-center gap-3 ">
            <Link href={"/auth/admin"}>
            <a
                className={`flex items-center justify-center  gap-3 transition-all hover:translate-x-5 ease-in-out 
               
                w-32 h-10 rounded-lg`}
                onClick={() => setNavState(!navState)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
                  />
                </svg>
                管理員
              </a>
            </Link>
          </li>
        </ul>
        {/* <Link href={"/user_setting"}>
        <a
          className="flex items-center  gap-3 "
          onClick={() => setNavState(!navState)}
        > */}

        <Person />
        {/* </a>
      </Link> */}
      </nav>
      {navState ? (
        <div
          className="invisibleDiv h-full w-full bg-red absolute z-10"
          onClick={() => setNavState(false)}
        ></div>
      ) : (
        ""
      )}
    </>
  );
}

export default Nav;
