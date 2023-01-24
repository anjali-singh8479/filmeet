 import React from 'react'
import { Link } from 'react-router-dom'
import {ImSearch} from "react-icons/im"
import {HiUser} from "react-icons/hi"
import {AiFillHeart} from "react-icons/ai"
 import "../styles/navbar.css"



 const Navbar = () => {
   return (
    <>
    <nav>
        <div className='img-wrapper'>
        <img src="moviomate logo dark.png" alt=""></img>
        <div>
          <Link to="/">Home</Link>
          <Link to="Secondpage.js">Movies</Link>
          <Link to="/tvshows">Web series</Link>
          <Link to="/tvshows">My List</Link>
          <Link to="/tvshows">About us</Link>
          <Link to="/tvshows">Contact us</Link>
        </div>
        </div>
        <div className='right-nav'>
          <ImSearch/>
          <button className='btn'>create room</button>
          <HiUser/>
          <AiFillHeart/>
          <button className='btn'>sign up</button>
        </div>
       
    </nav>
  
    </>
   )
 }
 
 export default Navbar