import React, {useState} from 'react'
import './navbar.css'
import { IoCloseCircleSharp } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import logo from '../../Assets/logo.png'
import { Link } from 'react-router-dom';

const Navbar = () =>   {
    const [active, setActive] = useState('navBar')

    const showNav = ()=>{
        setActive('navBar activeNavbar')
    }
    const removeNavbar = ()=>{
        setActive('navBar')
    }

    const [transparent, setTransparent] = useState('header')
   const addBg =()=>{
    setTransparent('header activeHeader')
    if(window.scrollY >= 0){
        setTransparent('header activeHeader')
    }
    else{
        setTransparent('header activeHeader')
    }
   }
   window.addEventListener('scroll', addBg)

    return(
       <section className='navBarSection'>
            <header className={transparent}>
       
                <div className="logoDiv">
                     <a href='#' className="logo">
                        <h1 className="h1"><img className="icon" src={logo} alt="icon"  /> 
                        with MATS
                        </h1>
                     </a>
                </div>
        
                <div className= {active}>
                    <ul className="navLists flex">
               
                         <li className="navItem">
                             <Link className="navLink" to="/">HOME </Link>
                        </li>

                        <li className="navItem">
                             <Link  className="navLink" to="/Popular">POPULAR</Link >
                        </li>

                        <li className="navItem">
                            <Link  className="navLink" to="/Blog">BLOG</Link >
                        </li>

                        <li className="navItem">
                            < Link className="navLink"to="/About">ABOUT</Link >
                        </li>     


                        <li className="navItem">
                            < Link  className="navLink"to="/offer">OFFERS</Link >
                        </li>

                        <li className="navItem">
                            < Link  className="navLink" to="/Footer">CONTACT</Link >
                        </li>
                        <div className="headerBtns flex">

                        <button className='btn loginBtn'>
                          <Link to="/Login">Log in</Link>
                         </button>

                        <button className='btn'>
                        <Link to="/Signup">Sign Up</Link>
                         </button>
                        </div>

                    </ul>

                    <div onClick = {removeNavbar} className="closeNavbar">
                        <IoCloseCircleSharp className= "icon" />
                    </div>
                </div>

                <div onClick = {showNav} className="toggleNavbar">
                      <TbGridDots className='icon' />
                </div>
        
            </header>
        </section>
    )
}

export default  Navbar