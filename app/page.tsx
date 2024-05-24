// import Image from "next/image";

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <h1>sanjay</h1>
//     </main>
//   );
// }
// pages/_app.tsx

import { AppProps } from "next/app";
import "../styles/globals.css";
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
