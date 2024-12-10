import React from 'react';
import NavBarUsuarioHome from '../NavBarUsuarioHome';
import logo from '../../../Media/img/logo.png';
import './index.css';

const HeaderUsuarioHome = () => {
  return (
    <header className="HeaderUsuarioHome">
<div className="Contenedor-header-usuario-home-izquierdo">
    <img src={logo} alt="SoftMark.AI Logo" className="logo" />
</div>
      <NavBarUsuarioHome />
    </header>
  );
};

export default HeaderUsuarioHome;