import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import Nav from "../components/Nav";
import NavBtn from "../components/NavBtn";
import { SessionProvider } from "next-auth/react";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import Wrapper from "../components/layout/Wrapper";
import MainSide from "../components/layout/MainSide";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    themeChange(false);
  }, []);
  const [navState, setNavState] = useState<boolean>(false);

  return (
    <SessionProvider session={pageProps.session}>
      <Wrapper>
        <NavBtn navState={navState} setNavState={setNavState} />
        <Nav navState={navState} setNavState={setNavState} />
        <MainSide>
          <Component {...pageProps} />
        </MainSide>
      </Wrapper>
    </SessionProvider>
  );
}

export default MyApp;
