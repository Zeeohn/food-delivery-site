import "../styles/globals.css";
import Head from "next/head";
import Layout from "../components/Layout";
import store from "../redux/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
