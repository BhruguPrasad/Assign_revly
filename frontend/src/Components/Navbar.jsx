import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div id='navbar'>
      <Link to="/" style={{ textDecoration: "none" }}><p>Signup Page</p></Link>
      <Link to="/login" style={{ textDecoration: "none" }}><p>Login Page</p></Link>
      <Link to="/dashboard" style={{ textDecoration: "none" }}><p>Dashboard Page</p></Link>

    </div>
  )
}

export default Navbar