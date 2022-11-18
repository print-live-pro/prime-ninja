import React from "react"
import Head from "next/head"
import Printers from "../../src/components/printers/Printers"

const index = () => {
  return (
    <>
      <Head>
        <title>Print Live Pro</title>
        <meta property="og:title" content="Print Live Pro" key="title" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Printers />
    </>
  )
}

export default index
