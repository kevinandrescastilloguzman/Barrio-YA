import React from 'react';
import Header from '../Components/Header/index';
import Footer from '../Components/Footer/index';
import HomeVendedorimg from '../../Media/img/Tienda-home.png';
import HomeSection2 from '../../Media/img/HomeSection2-01.png';
import HomeSection21 from '../../Media/img/HomeSection2-02.png';
import { Link } from 'react-router-dom';
import './index.css';

const Home = () => {
  return (
    <div>
      <Header/>
      <main className="main-home">
        <section className="section-home-1">
          <div className="section-home-1-left">
            <div className="contenedor-h1-home">
              <h1 className="h1-home">
                <b>"</b>Conecta tu barrio: recibe productos frescos y de la canasta familiar directo a tu puerta en minutos<b>."</b>
              </h1>
            </div>
            <p className="p-home">
              <b>"¡</b>Haz tu pedido ahora y apoya a tu barrio<b>!"</b>
            </p>
            <button className="home-clientes"><Link className="navbar-item-home" to="/Login">"Pide tu mercado aqui"</Link></button>
          </div>
          <div className="section-home-1-right">
            <img className="img-home" src={HomeVendedorimg} alt="Home Vendedor" />
          </div>
        </section>
        
        <section className="section-home-2">
          <div className="section-home-2-article-1">
            <div className="section-home-1-right">
              <img className="img-home-article-1" src={HomeSection2} alt="Home Vendedor" />
            </div>
            <div className="section-home-2-left-article-1">
              <h1 className="h1-article-1">
                Domiciliarios de tu barrio<b>,</b> al servicio de tu comunidad
              </h1>
              <p className="p-home-1">
                En <b>Barrio YA</b>, nos enorgullece trabajar con domiciliarios que son parte activa de tu comunidad. Ellos conocen cada calle y rincón de tu barrio, lo que nos permite ofrecerte un servicio más rápido, seguro y eficiente. Ya no tendrás que esperar horas por tu pedido; nuestro equipo está cerca de ti, listo para llevarte lo que necesitas en el menor tiempo posible.
              </p>
            </div>
          </div>
          <div className="section-home-2-article-2">
            <div className="section-home-2-left-article-2">
              <h1 className="h1-article-2">
                Productos frescos<b>,</b> directamente del barrio a tu mesa
              </h1>
              <p className="p-home-2">
                En <b>Barrio YA</b>, sabemos lo importante que es la calidad de los productos que consumes. Por eso, trabajamos directamente con las tiendas y proveedores locales para ofrecerte alimentos frescos, saludables y de la mejor calidad. Desde frutas y verduras recién cosechadas hasta productos básicos de la canasta familiar, garantizamos que cada artículo llegue a tu puerta en perfectas condiciones.
              </p>
            </div>
            <div className="section-home-2-right">
              <img className="img-home-article-2" src={HomeSection21} alt="Home Vendedor" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
