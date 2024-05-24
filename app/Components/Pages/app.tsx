// pages/_app.tsx

import { AppProps } from "next/app";
import "../styles/globals.css";
import Header from "../Header/header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
