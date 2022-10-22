import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Featured from "../components/Featured";
import ProductList from "../components/ProductList";
import ScrollToTop from "../components/ScrollToTop";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Crown Shawarma || Shawarma and Small Chops Restaurant in Abuja
        </title>
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
      <Featured />
      <ProductList />
      <ScrollToTop />
    </div>
  );
}
