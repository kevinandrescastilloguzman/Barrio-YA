import React from 'react';
import Carrito from '../../../Media/img/carrito-de-compras.png';
import Usuario from '../../../Media/img/usuario.png';
import Colombia from '../../../Media/img/Colombia.png';
import './index.css';

const NavBarUsuarioHome = ({ onCartClick }) => {
  return (
    <nav className="navbar-Usuario-home">
      <ul className="navbar-list-Usuario-home">
        <li className='icon-Usuario-home'>
          <img className='icono-Carro-compras' alt="Icono Carrito de Compras" src={Carrito} onClick={onCartClick} />
        </li>
        <li className='icon-Usuario-home'><img className='icono-usuario-home' alt="Icono Usuario" src={Usuario} /></li>
        <li className='icon-Usuario-home'><img className='icono-Colombia' alt="Icono Colombia" src={Colombia} /></li>
      </ul>
    </nav>
  );
};

export default NavBarUsuarioHome;


