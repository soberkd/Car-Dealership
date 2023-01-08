import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
        <h1>AutoCar_KO</h1>
        <Link to='/'>Home</Link>
        <Link to='/services'>Services</Link>
        <Link to='/page-2'>About</Link>
    </nav>
    )
}
