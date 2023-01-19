import React, { useState } from 'react'
import '../Styles/navbar.css'

import logo from '../Assets/logo.svg'
import { RiCloseLine } from "react-icons/ri";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className="navbar">
      <div className="navbar-link">
        <div className="navbar-link_logo">
          <img src={logo} alt='logo_image' />
        </div>
        <div className="navbar-link_container">
          <p><a href='#home'>Home</a></p>
          <p><a href='#gpt3'>What is GPT-3</a></p>
          <p><a href='#possibility'>Open AI</a></p>
          <p><a href='#features'>Case Studies</a></p>
          <p><a href='#blog'>Library</a></p>
        </div>
      </div>

      <div className="navbar-signin">
        <p>Sign In</p>
        <button>Sign Up</button>
      </div>

      <div className="navbar-menu">
        {toggleMenu ? <RiCloseLine onClick={() => setToggleMenu(false)} /> : <AiOutlineMenu onClick={() => setToggleMenu(true)} />}

        {/* <--------------------------------- 2ND MENU BAR --------------------------------> */}
        {toggleMenu &&
          (<>
            <div className="navbar-menu_container ">
              <div className="navbar-menu_container-link">
                <p><a href='#home'>Home</a></p>
                <p><a href='#gpt3'>What is GPT-3</a></p>
                <p><a href='#possibility'>Open AI</a></p>
                <p><a href='#features'>Case Studies</a></p>
                <p><a href='#blog'>Library</a></p>
              </div>
              <div className="navbar-menu_container-link-signin">
                <p>Sign In</p>
                <button>Sign Up</button>
              </div>
            </div>
          </>)}
        {/* <---------------------------------- END  --------------------------------> */}

      </div>
    </div>
  )
}

export default Navbar