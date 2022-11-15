import React from 'react'
import CTA from"./Cta"
import ME from "../assets/me.png"
import HeaderSocials from './HeaderSocials'
import "./Header.css"


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Joel</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA/>

        

        <a href="#contact" className="scroll__down">Scroll down</a>
        <HeaderSocials/>
      </div>
    </header>
  )
}

export default Header