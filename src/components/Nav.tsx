import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SettingsIcon from "@mui/icons-material/Settings";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import Person from "./Person";
import Link from "next/link";

type navStateType = {
  navState: boolean;
  setNavState: React.Dispatch<React.SetStateAction<boolean>>;
};

function Nav({ navState, setNavState }: navStateType) {
  return (
    <>
      <nav
        className={` bg-black p-10  flex h-full flex-col items-center absolute z-10 transition-all  ${
          navState ? "-translate-x-0 opacity-1" : " -translate-x-40 opacity-0"
        } md:-translate-x-0 md:static md:opacity-100 md:p-2`}
      >
        <div className="logo text-white text-4xl leading-normal bg-lime-500  flex justify-center items-center rounded-full w-12 h-12 mb-10">
          <h1 className="">S</h1>
        </div>
        <ul className="list-none text-cyan-50 h-full rounded-md flex flex-col gap-10 text-3xl md:w-40">
          <li className="flex flex-row items-center gap-3 md:text-2xl pl-2">
            <Link href={"/"}>
              <a
                className="flex items-center  gap-3 "
                onClick={() => setNavState(!navState)}
              >
                <HomeIcon />
                首頁
              </a>
            </Link>
          </li>
          <li className="flex flex-row items-center gap-3 md:text-2xl pl-2">
            <WorkIcon />
            專案庫
          </li>
          <li className="flex flex-row items-center gap-3 md:text-2xl pl-2">
            <AssignmentIcon />
            任務
          </li>
          <li className="flex flex-row items-center gap-3 md:text-2xl pl-2">
            <Link href={"/user_setting"}>
              <a
                className="flex items-center  gap-3 "
                onClick={() => setNavState(!navState)}
              >
                <SettingsIcon />
                設定
              </a>
            </Link>
          </li>
          <li className="flex flex-row items-center gap-3 md:text-2xl pl-2">
            <Link href={"/admin"}>
              <a
                className="flex items-center  gap-3 "
                onClick={() => setNavState(!navState)}
              >
                <AdminPanelSettingsIcon />
                管理員
              </a>
            </Link>
          </li>
        </ul>
        <Link href={"/user_setting"}>
          <a
            className="flex items-center  gap-3 "
            onClick={() => setNavState(!navState)}
          >
            <Person />
          </a>
        </Link>
      </nav>

      {/* 手機板讓按旁邊可以把nav消除 */}
      {navState ? (
        <div
          className="h-screen absolute right-0 top-0 w-screen"
          onClick={() => setNavState(false)}
        ></div>
      ) : (
        ""
      )}
    </>
  );
}

export default Nav;
