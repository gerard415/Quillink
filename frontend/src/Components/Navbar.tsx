import React from 'react'
import { Link, Navigate } from 'react-router-dom'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='h-[60px] w-full flex justify-between items-center '>
        <span>
          Logo
        </span>
        <div className='space-x-3'>
          <button>
            Courses
          </button>
          <button>
            Categories
          </button>
          <button>
            About
          </button>
          <button>
            Blog
          </button>
        </div>
        <div className='space-x-3 flex' >
          <Link to={'/register'}><button className=' '>Get Started</button></Link>
          <Link to={'/login'}><button className=' '>Login</button></Link>
        </div>
    </div>
  )
}

export default Navbar