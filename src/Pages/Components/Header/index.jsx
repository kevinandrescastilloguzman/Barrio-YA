import React from 'react';
import NavBar from '../NavBar';
import logo from '../../../Media/img/logo.png';
import './index.css';

const Header = () => {
  return (
    <header className="header">

<div className="Contenedor-header-izquierdo">
    <img src={logo} alt="SoftMark.AI Logo" className="logo" />
</div>

      <NavBar />
    </header>
  );
};

export default Header;