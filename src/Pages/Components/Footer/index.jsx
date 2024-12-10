import React from 'react';
//import { Link } from 'react-router-dom';
import logo from '../../../Media/img/logo.png';

import './index.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="section-footer-left">
        <div className="logo-left-footer">
          <img src={logo} alt="SoftMark.AI Logo" className="logo-footer" />
        </div>
        <div className="iconos-social">
        </div>
      </div>
      <nav className="section-footer-rigt">
        <ul>
          <li className="Negrita-list-l">Inicio</li>
          <li className="Negrita-list-l">Iniciar Sesión</li>
          <li className="Negrita-list-l">Crear Cuenta</li>
        </ul>
        <ul>
          <li className="Negrita-list-l">Servicios</li>
          <li className="Negrita-list">Marketing Digital</li>
          <li className="Negrita-list">Asesoramiento legal</li>
        </ul>
        <ul>
          <li className="Negrita-list-l">Información</li>
          <li className="Negrita-list">Pagos</li>
          <li className="Negrita-list">Contacto</li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;