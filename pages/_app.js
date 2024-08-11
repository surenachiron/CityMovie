import Head from "next/head";
import store from "@/redux/store";
import { Provider } from "react-redux";
import NextNProgress from "nextjs-progressbar";
import Layout from "@/component/layout/_layout";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <>
      <Provider store={store}>
        <NextNProgress color="#f44336" options={{ showSpinner: false }} />
        <Layout>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/images/favicon.webp" />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}
