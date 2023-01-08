import React from 'react'
import Navbar from './Navbar'

export default function Layout({children}) {
  return (
    <div>
        <Navbar/>
        <div className='content'>
            {children}
        </div>
        <footer>
            Copyright. @milan_digital 2023
        </footer>
    </div>
  )
}
