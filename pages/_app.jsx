import "../styles/globals.css";
import Head from "next/head";
import Layout from "../components/Layout";
import store from "../redux/store";
import { Provider } from "react-redux";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loader from "./../components/Loader";
import NProgress from "nprogress";
import { Toaster } from "react-hot-toast";

NProgress.configure({ showSpinner: false });

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", (url) => {
      console.log("Route is changing...");
      NProgress.start();
      loading(true);
    });
    router.events.on("routeChangeComplete", (url) => {
      console.log("Route changing completed...");
      NProgress.done();
      setLoading(false);
    });
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Provider store={store}>
        {loading && <Loader />}
        <Layout>
          <Toaster toastOptions={{ duration: 5000 }} />
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
