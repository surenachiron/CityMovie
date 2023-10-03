import Head from "next/head"
import { Router } from "next/router"
import { useState } from "react"
import store from "@/redux/store"
import { Provider } from 'react-redux';
import Layout from "@/component/layout/_layout"
import Loading from "@/component/common/Loading"
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page) => page)

  // info : active or disable loading in every page
  const [stateloading, setstateloading] = useState(false)
  Router.onRouteChangeStart = () => setstateloading(true)
  Router.onRouteChangeComplete = () => setstateloading(false)

  return getLayout(
    <>
      <Provider store={store}>
        {stateloading ? <Loading /> : ""}
        <Layout>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/brand/favicon.webp" />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  )
}
