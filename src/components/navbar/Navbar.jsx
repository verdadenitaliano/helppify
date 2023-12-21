import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logoNew.png';

import './navbar.css';
import LoginForm from "../../pages/Login/LoginForm";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`gpt3__navbar${isSticky ? ' sticky' : ''}`}>
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#cardFeatures">Beneficios</a></p>
          <p><a href="#wgpt3">Sobre Helppify</a></p>
          <p><a href="#possibility">¿Cómo funciona?</a></p>
          {/* <p><a href="#possibility">Preguntas frecuentes</a></p> */}
          {/* <p><a href="#blog">FAQ</a></p> */}
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <Link to="/login">
          <p>Iniciar Sesión</p>
        </Link>
        <Link to="/signup">
          <button type="button">Quiero una helppify</button>
        </Link>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#cardFeatures">Beneficios</a></p>
            <p><a href="#wgpt3">Sobre Helppify</a></p>
            <p><a href="#possibility">¿Cómo funciona?</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <p>Iniciar sesión</p>
            <button type="button">Quiero una helppify</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
