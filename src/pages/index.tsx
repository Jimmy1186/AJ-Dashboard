import type { NextPage } from "next";
import { useState } from "react";
import Homepage from "../components/Homepage";
import Nav from "../components/Nav";
import NavBtn from "../components/NavBtn";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex flex-col h-full gap-5 p-5 md:w-2/3 rounded-l-md lg:w-full">
        <Homepage />
      </div>
    </>
  );
};

export default Home;
