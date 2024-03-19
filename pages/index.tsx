import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>
          Little test
        </title>
      </Head>

      <h1 className="p-text-red-500">Let's build something Awesome</h1>
    </div>
  );
};

export default Home;