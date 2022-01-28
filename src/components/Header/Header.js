import React from 'react';
import './Header.scss'
import headerSvg from "../../assets/img/Header.svg"

function Header() {
  return <header>
      <img src={headerSvg} alt="headerImage" />
  </header>;
}

export default Header;
