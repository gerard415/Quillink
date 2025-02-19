import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className='max-w-[1440px]  m-auto max-h-screen'>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default Header