import Head from "next/head"
import { Provider } from "react-redux"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import store from "../src/store"
import "../styles/globals.css"
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Script  id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=72553e6c-8911-4ffc-afb4-92cedfafb6a0" />
    
    <Provider store={store}>
      <ToastContainer />
      <Component {...pageProps} />
    </Provider>
    </>
  )
}

export default MyApp
