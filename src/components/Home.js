import React from "react"
import Explore from "./Explore"
import Footer from "./Footer"
import Header from "./Header"
import Hero from "./Hero"

const Home = () => {
  return (
    <div className="h-100vh">
      <Header />
      <Hero />
      <Explore />
      <Footer />
    </div>
  )
}

export default Home
