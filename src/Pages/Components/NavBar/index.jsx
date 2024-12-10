import React from 'react';
import { Link } from 'react-router-dom';
import Colombia from '../../../Media/img/Colombia.png';

import './index.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><Link className="navbar-item" to="/">Inicio</Link></li>
        <li><Link className="navbar-item" to="/Domiciliarios">Domiciliarios</Link></li>
        <li><Link className="navbar-item" to="/Tiendas">Vendedor</Link></li>
        <li className='icon'><img className='icono-Colombia' alt="SoftMark.AI Logo" src={Colombia} /></li>
      </ul>
    </nav>
  );
};

export default NavBar;