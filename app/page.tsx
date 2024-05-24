import { AppProps } from "next/app";
import "./globals.css";
import Header from "./Components/Header/header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
