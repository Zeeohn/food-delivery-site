import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shawarma and Small Chops Restaurant in Abuja</title>
        <meta
          name="description"
          content="Best Shawarma and Small Chops shop in FCT-Abuja"
        />
        <meta
          name="keywords"
          content="Shawarma, Chicken, Small Chops, Restaurant, Bread"
        />
        <meta name="title" content="Best Shawarma Spot in Abuja" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Homepage
    </div>
  );
}
