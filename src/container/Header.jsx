import React from 'react'
import "./header.scss"
import Logo from "../assets/images/logo.png"

import {NavLink} from 'react-router-dom'

export const Header = () => {
  return (
    <div className='container'>
        <div className='header'>
            <div className='header__logo'>
                <NavLink to={"/"}><img src={Logo} alt="" /></NavLink>
            </div>
            <div className='header__right'>
            <ul className='header__list'>
                <li className='header__item' >
                    <NavLink to={"/menu"}>Menyu</NavLink>
                </li>
                <li  className='header__item'>
                    <NavLink to={"/about"}>Biz haqimizda</NavLink>
                </li>
                <li  className='header__item'>
                    <NavLink to={"/contact"}>Bog'lanish</NavLink>
                </li>
            </ul>
            <select name="lang" id="lang">
                <option value="O'zbek tili">O'zbek tili</option>
                <option value="English">English</option>
            </select>
        </div>
        </div>
       
    </div>
  )
}
