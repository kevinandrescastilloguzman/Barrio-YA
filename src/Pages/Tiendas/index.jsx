import React from 'react';
import Layout from '../Components/Layout/index';
import Footer from '../Components/Footer/index';
import Vendedorimg from '../../Media/img/Tienda-home.png';
import VendedorSection2 from '../../Media/img/VendedorSection2-01.png';
import VendedorSection21 from '../../Media/img/VendedorSection2-02.png';
import './index.css';


function Tiendas() {
    return (
        <div>
        <Layout />
        <main className="main-Vendedor">
          <section className="section-Vendedor-1">
            <div className="section-Vendedor-1-left">
              <div className="contenedor-h1-Vendedor">
                <h1 className="h1-Vendedor">
                Conéctate con vecinos y aumenta tus ventas. Regístrate en Barrio y permite que tus productos lleguen directamente a sus puertas.
                </h1>
              </div>
              <p className="p-Vendedor">
              <b>¡</b>Únete a Barrio y lleva tu tienda a más clientes<b>!</b>
              </p>
              <button className="Vendedor-clientes">Únete como Vendedor</button>
            </div>
            <div className="section-Vendedor-1-right">
              <img className="img-Vendedor" src={Vendedorimg} alt="Vendedor Vendedor" />
            </div>
          </section>
          
          <section className="section-Vendedor-2">
            <div className="section-Vendedor-2-article-1">
              <div className="section-Vendedor-1-right">
                <img className="img-Vendedor-article-1" src={VendedorSection2} alt="Home Vendedor" />
              </div>
              <div className="section-Vendedor-2-left-article-1">
                <h1 className="h1-article-Vendedor-1">
                Aumenta tus ventas sin esfuerzo
                </h1>
                <p className="p-Vendedor-1">
                  En <b>Barrio YA</b>, nos enorgullece trabajar con domiciliarios que son parte activa de tu comunidad. Ellos conocen cada calle y rincón de tu barrio, lo que nos permite ofrecerte un servicio más rápido, seguro y eficiente. Ya no tendrás que esperar horas por tu pedido; nuestro equipo está cerca de ti, listo para llevarte lo que necesitas en el menor tiempo posible.
                </p>
              </div>
            </div>
            <div className="section-Vendedor-2-article-2">
              <div className="section-Vendedor-2-left-article-2">
                <h1 className="h1-article-Vendedor-2">
                Distribución rápida y local
                </h1>
                <p className="p-Vendedor-2">
                Ofrece a tus clientes la ventaja de recibir productos frescos y en perfecto estado gracias a nuestros domiciliarios locales. Con <b>Barrio YA</b>, tus productos llegarán a su destino de forma rápida y eficiente, garantizando la frescura y calidad que tus clientes esperan, y todo dentro de tu comunidad.
                </p>
              </div>
              <div className="section-Vendedor-2-right">
                <img className="img-Vendedor-article-2" src={VendedorSection21} alt="Home Vendedor" />
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    )
  }
  export default Tiendas