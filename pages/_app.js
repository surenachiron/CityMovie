import Head from "next/head"
import { Router } from "next/router"
import dynamic from "next/dynamic";
import { useState } from "react"
import store from "@/redux/store"
import { Provider } from 'react-redux';

const Layout = dynamic(() => import("@/component/layout/_layout"));
const Loading = dynamic(() => import("@/component/common/Loading"));

import '@/styles/globals.css'

export default function App({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page) => page)

  // info : active or disable loading in every page
  const [stateLoading, setStateLoading] = useState(false)
  Router.onRouteChangeStart = () => setStateLoading(true)
  Router.onRouteChangeComplete = () => setStateLoading(false)

  return getLayout(
    <>
      <Provider store={store}>
        {stateLoading && <Loading />}
        <Layout>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/images/favicon.webp" />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  )
}
