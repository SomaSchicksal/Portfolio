import React from 'react'
import {AiFillFacebook} from "react-icons/ai"
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo"></a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#about">About me</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/gioele.cinus"><AiFillFacebook/></a>
      </div>
    </footer>
  )
}

export default Footer