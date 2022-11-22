import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Featured from "../components/Featured";
import ProductList from "../components/ProductList";
import ScrollToTop from "../components/ScrollToTop";
import axios from "axios";
import { useState } from "react";
import TrackOrder from "./../components/TrackOrder";
import TrackButton from "./../components/TrackButton";

export default function Home({ productList }) {
  const [close, setClose] = useState(true);
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Crown Shawarma || Shawarma and Small Chops Restaurant in Abuja
        </title>
        <meta
          property="og:image"
          name="image"
          content="/images/chicken-burger.jpg"
        />
        <meta
          name="description"
          content="Best Shawarma and Small Chops eatery in FCT-Abuja"
        />
        <meta
          name="keywords"
          content="Shawarma, Chicken, Small Chops, Restaurant, Bread"
        />
        <meta name="title" content="Best Shawarma Spot in Abuja" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <TrackButton setClose={setClose} />
      <ProductList productList={productList} />
      {!close && <TrackOrder setClose={setClose} />}
      <ScrollToTop />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get("https://crownshawarma.vercel.app/api/products");
  return {
    props: {
      productList: res.data,
    },
  };
};
