import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/global.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Vini Bispo - Dev FullStack</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
