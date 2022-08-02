import type { NextPage } from "next";
import { useState } from "react";
import Homepage from "../components/Homepage";
import Nav from "../components/Nav";
import NavBtn from "../components/NavBtn";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading</div>;
  }
  if (status === "unauthenticated") {
    router.push("/auth/login");
  }
  return (
    <>
      <div className="flex flex-col h-full gap-5 p-5 md:w-2/3 rounded-l-md lg:w-full">
        <Homepage />
      </div>
    </>
  );
};

export default Home;
