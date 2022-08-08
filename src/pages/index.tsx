import type { NextPage } from "next";
import { useState } from "react";
import Nav from "../components/Nav";
import NavBtn from "../components/NavBtn";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Analysis from "../components/demo/Analysis";
import Stat from "../components/demo/Stat";
import TableData from "../components/demo/TableData";
import MainSide from "../components/layout/MainSide";
import Card from "../components/demo/Card";

const Home: NextPage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  // if (status === "loading") {
  //   return <div>Loading</div>;
  // }
  // if (status === "unauthenticated") {
  //   router.push("/auth/login");
  // }
  return (
    <>
      <MainSide>
        <Analysis />
        <Stat />
        <TableData />
      </MainSide>
    </>
  );
};

export default Home;
