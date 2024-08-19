import React, { useEffect, useState } from 'react';
import "./NavBar.css"
import logo from "../../assets/cards/logo.png"
import search_icon from "../../assets/cards/search.png"
import bell_icon from "../../assets/cards/bell.png"
import profile_img from "../../assets/cards/profile.jpg"
import caret_img from "../../assets/cards/caret.png"
import { logout } from '../../firebase';


function NavBar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
          if (window.scrollY > 100) {
              handleShow(true);
          } else {
              handleShow(false);
          }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
          window.removeEventListener("scroll", handleScroll);
      };
  }, []);


  return (
    <div div className={`navbar ${show && "nav__black"}`}>
      <div className="navbar-left">
        <img src={logo} alt='' />
        <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img className="icons"src={search_icon} alt=""  />
        <p>Children</p>
      
      <img className="icons"src={bell_icon} alt=""  />
      <div className="navbar-profile">
        <img className="profile" src={profile_img} alt=""  />
        <img src={caret_img} alt=""  />
        <div className="dropdown">
          <p onClick={() =>{logout()}}>Sign Out of Netflix</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default NavBar
