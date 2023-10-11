import React from "react";
import './Header.css';
import logo from '../../assets/images/logo-header.svg';
import { Link, NavLink } from 'react-router-dom';

export default function Header ({ isActive }) {
  
  const navLinkClass = ({ isActive }) => {
    return { 
      textDecoration: isActive ? 'underline' : 'none'
    }
  }

  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="logo Kasa" className="header__logo" />
      </Link>
      <nav>
        <ul className="header__menu">
          <li className={`header__menu-item`}>
            <NavLink to="/" style={navLinkClass}>Accueil</NavLink>
          </li>
          <li className={`header__menu-item`}>
            <NavLink to="/about" style={navLinkClass}>A propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}