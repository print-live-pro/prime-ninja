import React from "react"
import Head from "next/head"
import Home from "../../src/components/Home"

const index = () => {
  return (
    <>
      <Head>
        <title>Prime Ninja</title>
        <meta property="og:title" content="Prime Ninja" key="title" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script
          async
          src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"
        ></script>
      </Head>
      <Home />
    </>
  )
}

export default index
