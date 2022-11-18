import React, { useEffect , useState } from 'react'
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Head from "next/head"
import Contact from '../src/components/contact/Contact';
const contact = () => {
  return (
    <>
    <Head>
        <title>Print Live Pro</title>
        <meta property="og:title" content="Print Live Pro" key="title" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script
          async
          src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"
        ></script>
      </Head>
      <Header />
        <Contact/>
<Footer />
</>
  )
}

export default contact