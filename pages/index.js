import Head from "next/head";
import App from "./index/App";

export default function Home() {
  return (
    <>
      <Head>
        <title>Alberto Forni</title>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,600|Roboto:100"
          rel="stylesheet"
          key="google-fonts"
        />
      </Head>
      <App />
    </>
  );
}
