import React from 'react';
import "./footer.scss"
import {Logo, Telegram, Instagram, YouTube, Facebook, Phone, Web, Location} from "../Images"
import {NavLink} from 'react-router-dom'

// import {faTelegram} from "@fortawesome/fontawesome-svg-core"


export const Footer = () => {
  return (
   <div className='section__footer'>
     <div className='container'>
        <div className='footer'>
            <div className='footer__logo'>
              <img src={Logo} alt="" />
              <p>© 2023 Mobion. Barcha huquqlar himoyalangan</p>
              <div className='webs'>
              <img src={Telegram} alt="" />
              <img src={Instagram} alt="" />
              <img src={YouTube} alt="" />
              <img src={Facebook} alt="" />
              </div>
            </div>
            <div className='footer__link'>
              <h3>Biz haqimizda</h3>
              <ul className='header__list'>
                <li className='header__item' >
                    <NavLink to={""}>Menyu</NavLink>
                </li>
                <li  className='header__item'>
                    <NavLink>Biz haqimizda</NavLink>
                </li>
                <li  className='header__item'>
                    <NavLink>Bog'lanish</NavLink>
                </li>
            </ul>
            </div>
            <div className='footer__contact'>
              <h3>Bog'lanish</h3>
                  <NavLink>
                    <img src={Phone} alt="" />
                    <p>+998 94 332 0016</p>
                  </NavLink>
                  <NavLink>
                    <img src={Web} alt="" />
                    <p>Rizvon.uz</p>
                  </NavLink>
                  <NavLink>
                    <img src={Location} alt="" />
                    <p>Toshkent shahri, Mirzo Ulug‘bek tumani, Shahriobod tumani</p>
                  </NavLink>
            </div>
        </div>
    </div>
   </div>
  )
}
