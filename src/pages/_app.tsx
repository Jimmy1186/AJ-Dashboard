import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import Nav from "../components/Nav";
import NavBtn from "../components/NavBtn";
function MyApp({ Component, pageProps }: AppProps) {
  const [navState, setNavState] = useState<boolean>(false);

  return (
    <div className="wrapper bg-slate-200 h-screen">
      <NavBtn navState={navState} setNavState={setNavState} />
      <Nav navState={navState} setNavState={setNavState} />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
