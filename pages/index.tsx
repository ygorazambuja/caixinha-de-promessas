import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../sections/Layout";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="theme-color" content="#fff" />
        <title>Caixinha de Promessas</title>
        <meta name="description" content="Caixinha de Promessas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout />
    </div>
  );
};

export default Home;