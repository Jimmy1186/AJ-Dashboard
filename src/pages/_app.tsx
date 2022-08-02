import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRef, useState } from "react";
import Nav from "../components/Nav";
import NavBtn from "../components/NavBtn";
import { SessionProvider } from "next-auth/react"
import { useEffect } from 'react'
import { themeChange } from 'theme-change'



function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    themeChange(false)
  }, [])
  const [navState, setNavState] = useState<boolean>(false);



  return (
    <SessionProvider
    session={pageProps.session}
  >
   {/* <div className="btn-group fixed right-6 top-20 z-50">
          <button
            className="btn"
            data-toggle-theme="emerald"
            data-act-class="ACTIVECLASS"
          >
            Light
          </button>
          <button
            className="btn"
            data-toggle-theme="luxuary"
            data-act-class="ACTIVECLASS"
          >
            Dark
          </button>
        </div> */}

    <div className="wrapper bg-base-100  h-screen md:flex">
  
      <NavBtn navState={navState} setNavState={setNavState} />
      <Nav navState={navState} setNavState={setNavState} />
      <Component {...pageProps} />
    </div>
    </SessionProvider>
  );
}

export default MyApp;
