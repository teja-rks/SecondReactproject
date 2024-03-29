import React from 'react'
import { Link } from 'react-router-dom'
import {HashLink} from "react-router-hash-link"

const Header = () => {
  return (
   <nav>
    <h1>Teja</h1>
    <main>
        <HashLink  to={"/#home"}>home</HashLink>
        <Link  to={"/contact"}>contact</Link>
        <HashLink  to={"/#about"}>about</HashLink>
        <HashLink  to={"/#brands"}>brands</HashLink>
        <Link  to={"/services"}>services</Link>
       
    </main>
   </nav>
  )
}

export default Header