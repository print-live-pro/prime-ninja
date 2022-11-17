import React from "react"
import Head from "next/head"
import Checkout from "../../src/components/checkout/Checkout"

const index = () => {
  return (
    <>
      <Head>
        <title>Checkout | Prime Ninja</title>
        <meta property="og:title" content="Prime Ninja" key="title" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Checkout />
    </>
  )
}

export default index
