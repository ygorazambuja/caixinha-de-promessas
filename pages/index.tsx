import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../sections/Layout";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Caixinha de Promessas</title>
        <meta name="description" content="Caixinha de Promessas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout />
    </div>
  );
};

export default Home;
