import React from 'react'
import Navbar from './Navbar'
import Main from './Main'
import { Corousel } from './corousel'
import Branding from './Branding'
import Recommded from './Recommded'
import Getintouch from './Getintouch'
import Footer from './Footer'

const Home = () => {
  return (
    <>
    <div>
      <Navbar />
    </div>
      <Main/>
      <Corousel />
      <Branding/>
      <Recommded/>
      <Getintouch />
      <Footer />
      </>
  )
}

export default Home