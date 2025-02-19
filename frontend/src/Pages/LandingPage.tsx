import React from 'react'
import Header from '../Components/Header'
import Main from '../Components/Main'
import Footer from '../Components/Footer'


type Props = {}

const LandingPage = (props: Props) => {
  return (
    <div>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default LandingPage