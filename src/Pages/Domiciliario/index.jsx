import React from 'react';
import Layout from '../Components/Layout/index';
import Footer from '../Components/Footer/index';
import Domiciliarioimg from '../../Media/img/Domiciliario-Home.png';
import DomiciliarioSection2 from '../../Media/img/DomiciliarioSection2-01.png';
import DomiciliarioSection21 from '../../Media/img/DomiciliarioSection2-02.png';
import { Link } from 'react-router-dom';
import './index.css';


function Domiciliario() {
    return (
        <div>
            <Layout />
            <main className="main-domiciliario">
        <section className="section-domiciliario-1">
          <div className="section-domiciliario-1-left">
            <div className="contenedor-h1-domiciliario">
              <h1 className="h1-domiciliario">
              <b>"</b>Únete a Barrio y sé parte de tu comunidad: entrega productos<b>,</b> gana ingresos y apoya a tus vecinos.<b>"</b>
              </h1>
            </div>
            <p className="p-domiciliario">
            Entrega productos en tu barrio, gana ingresos y apoya a tu comunidad. Regístrate ahora y comienza a entregar hoy mismo.
            </p>
            <button className="domiciliario-clientes"><Link className="navbar-item-home" to="/LoginDomiciliarios">"Únete a Barrio-YA"</Link></button>
          </div>
          <div className="section-domiciliario-1-right">
            <img className="img-domiciliario" src={Domiciliarioimg} alt="Home Vendedor" />
          </div>
        </section>
        
        <section className="section-domiciliario-2">
          <div className="section-domiciliario-2-article-1">
            <div className="section-domiciliario-1-right">
              <img className="img-domiciliario-article-1" src={DomiciliarioSection2} alt="Home Vendedor" />
            </div>
            <div className="section-domiciliario-2-left-article-1">
              <h1 className="h1-article-domiciliario-1">
              Flexibilidad en tus horarios
              </h1>
              <p className="p-domiciliario-1">
              Con <b>Barrio YA</b>, tienes el control de tu tiempo. Decide cuándo y cuántas horas trabajar, adaptando tu jornada a tus otras actividades. ¿Prefieres trabajar por las mañanas, por las tardes o solo los fines de semana? Tú decides. Aquí no hay horarios fijos ni jefes que te condicionen, lo que significa que puedes ganar ingresos de forma totalmente flexible, en el momento que más te convenga.
              </p>
            </div>
          </div>
          <div className="section-domiciliario-2-article-2">
            <div className="section-domiciliario-2-left-article-2">
              <h1 className="h1-article-domiciliario-2">
              Entrega cerca de casa
              </h1>
              <p className="p-domiciliario-2">
              Olvídate de largos desplazamientos. Como domiciliario en <b>Barrio YA</b>, realizarás entregas en tu propio barrio, lo que significa que trabajarás en una zona que conoces bien. Esto no solo te permite ahorrar tiempo, sino que también hace que las entregas sean más rápidas y sencillas. Mantente cerca de casa, apoya a tu comunidad y gana dinero sin alejarte de tu zona.
              </p>
            </div>
            <div className="section-domiciliario-2-right">
              <img className="img-domiciliario-article-2" src={DomiciliarioSection21} alt="Home Vendedor" />
            </div>
          </div>
        </section>
      </main>
            <Footer/>
        </div>
    )
  }
  export default Domiciliario