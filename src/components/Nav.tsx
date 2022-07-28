import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SettingsIcon from "@mui/icons-material/Settings";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import Person from "./Person";
const drawerWidth = 240;
type navStateType = {
  navState: boolean;
  setNavState: React.Dispatch<React.SetStateAction<boolean>>;
};

function Nav({ navState, setNavState }: navStateType) {
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setNavState(!navState);
    };

  const modbie = `bg-black p-10 flex h-full flex-col items-center absolute z-10 transition-all  ${
    navState ? "-translate-x-0 opacity-100" : " -translate-x-40 opacity-0"
  } `;

  return (
    <nav
      className={` bg-black p-10 flex h-full flex-col items-center absolute z-10 transition-all  ${
        navState ? "-translate-x-0 opacity-1" : " -translate-x-40 opacity-0"
      } md:-translate-x-0 md:static md:opacity-100 md:p-2`}
    >
      {/* <nav
      className={` bg-black p-10 flex h-full flex-col items-center absolute z-10 transition-all  ${
        navState ? "-translate-x-0 opacity-1" : " -translate-x-40 opacity-0"
      } md:-translate-x-0 md:static `}
    ></nav> */}
      <div className="logo text-white text-4xl bg-lime-500  flex justify-center items-center rounded-full w-12 h-12 mb-10">
        <h1 className="">S</h1>
      </div>
      <ul className="list-none text-cyan-50 h-full rounded-md flex flex-col gap-10 text-3xl md:w-40">
        <li className="flex flex-row items-center gap-3 md:text-2xl pl-2">
          <HomeIcon />
          首頁
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
          <SettingsIcon />
          設定
        </li>
        <li className="flex flex-row items-center gap-3 md:text-2xl pl-2">
          <AdminPanelSettingsIcon />
          管理員
        </li>
      </ul>

      <Person />
    </nav>
  );
}

export default Nav;