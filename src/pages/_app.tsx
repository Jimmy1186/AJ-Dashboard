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
import {withTRPC} from "@trpc/next"
import {AppType} from 'next/dist/shared/lib/utils'
import {AppRouter} from './api/trpc/[trpc]'

const MyApp:AppType=({ Component, pageProps })=> {
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

function getBaseUrl(){
  if(typeof window !=='undefined'){
    return '';
  }
  if(process.env.VERCEL_URL){
    return `https://${process.env.VERCEL_URL}`;
  }
  return `http://localhost:${process.env.PORT ?? 3000}`;
}

export default withTRPC<AppRouter>({
  config({ ctx }) {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    return {
      url: `${getBaseUrl()}/api/trpc`,
      /**
       * @link https://react-query-v3.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: true,
})(MyApp);