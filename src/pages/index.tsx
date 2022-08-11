import type { NextPage } from "next";
import { Key, useState } from "react";
import Nav from "../components/Nav";
import NavBtn from "../components/NavBtn";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Analysis from "../components/demo/Analysis";
import Stat from "../components/demo/Stat";
import TableData from "../components/demo/TableData";
import MainSide from "../components/layout/MainSide";
import Card from "../components/demo/Card";
import EarnMoneyPie from "../components/demo/EarnMoneyPie";
import InfoCard from "../components/demo/PriceCard";
import PriceCard from "../components/demo/PriceCard";
import CostCard from "../components/demo/CostCard";
import EarnCard from "../components/demo/EarnCard";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const { data: payload } = trpc.useQuery(["findLimitProject"]);

  // if (status === "loading") {
  //   return <div>Loading</div>;
  // }
  // if (status === "unauthenticated") {
  //   router.push("/auth/login");
  // }
  return (
    <>
      <>
        {/* <Stat />
        <TableData /> */}
      </>
      <h1
        className="text-3xl font-bold py-3 
      md:col-start-1 md:col-span-1"
      >
        Dashboard
      </h1>
      <div className="person  md:col-start-3 md:col-span-1 ">
        <div className="left flex md:justify-end">
          <select
            title="theme"
            data-choose-theme
            className="select select-accent w-1/2 max-w-xs"
          >
            <option defaultValue="pastel">Light</option>
            <option value="business">Dark</option>
          </select>
        </div>
        <div className="right md:flex md:justify-end">
          <h3>Hello, </h3>
          <h3 className="font-bold">{session?.user?.name}</h3>
        </div>
      </div>
      <PriceCard />
      <CostCard />
      <EarnCard />
      <div className="recendOrder   md:col-start-1 md:col-span-3">
        <h1 className="text-3xl font-bold  py-3">Recent Order</h1>
        <div className="overflow-x-auto shadow-2xl rounded-3xl">
          <table className="table w-full ">
            <thead>
              <tr>
                <th className="bg-accent">id</th>
                <th className="bg-accent">名稱</th>

                <th className="bg-accent">建立人</th>
              </tr>
            </thead>
            <tbody>
              {payload?.map((i, index) => {
                return (
                  <tr key={index}>
                    <td>{i.id}</td>
                    <td>{i.name}</td>
                    <td>{i.createrID}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <h4 className="py-1 text-center font-medium text-base-300">
            Show All
          </h4>
        </div>
      </div>
    </>
  );
};

export default Home;
