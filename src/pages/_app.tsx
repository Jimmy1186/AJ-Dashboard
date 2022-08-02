import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import Nav from "../components/Nav";
import NavBtn from "../components/NavBtn";
import { SessionProvider } from "next-auth/react"



function MyApp({ Component, pageProps }: AppProps) {
  const [navState, setNavState] = useState<boolean>(false);

  return (
    <SessionProvider
    session={pageProps.session}
  >
    <div className="wrapper bg-slate-200  h-screen md:flex">
      <NavBtn navState={navState} setNavState={setNavState} />
      <Nav navState={navState} setNavState={setNavState} />
      <Component {...pageProps} />
    </div>
    </SessionProvider>
  );
}

export default MyApp;
