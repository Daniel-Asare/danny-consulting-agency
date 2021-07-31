import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import * as FaIcon from 'react-icons/fa'
import '../css/Navbar.css'

const Navbar =()=> {
  const [toggle,setToggle] = useState(true)
  
  const navToggle = ()=>{
    setToggle(!toggle)
  }
  return (
    <header>
        <Link><h1>Consulting.</h1></Link>
        <ul className={`nav-links ${toggle ? `toggle`: " "}`} onClick={navToggle}>
          <Link to='/'><li>Home</li></Link>
          <Link to='/about'><li>About</li></Link>
          <Link to='/services'><li>Services</li></Link>
          <Link to='/contact'><li>Contact</li></Link>
        </ul>
        <span onClick={navToggle} className="nav-icon"><FaIcon.FaBars/></span>
    </header>
  )
}

export default Navbar
