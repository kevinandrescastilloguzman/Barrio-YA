import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Agregar from '../../../Media/img/boton-agregar.png';

import './index.css'; // Asegúrate de tener el archivo CSS para estilos

// Crea un contexto de Webpack para las imágenes
const images = require.context('../../../Media/productos', false, /\.(png|jpe?g|svg)$/);

const Productos = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        // Llamada a la API para obtener los productos
        axios.get('http://localhost:3000/productos')
        .then(response => {
            setProductos(response.data);
        })
        .catch(error => {
            console.error('Error al obtener productos:', error);
        });
    }, []);

    const getImage = (imageName) => {
        try {
            return images(`./${imageName}`);
        } catch (err) {
            return 'default-image.jpg'; // Imagen por defecto en caso de error
        }
    };

    return (
        <div className="productos-container"> {/* Contenedor principal */}
            <div className="productos-grid"> {/* Grid para mostrar los productos */}
                {productos.map(producto => (
                    <div key={producto.id} className="producto-card"> {/* Tarjeta de cada producto */}
                        <div className='contenedor-img'>
                        <img 
                            className='img-productos'
                            src={getImage(producto.imagen)} 
                            alt={producto.nombre}
                            onError={(e) => { e.target.onerror = null; e.target.src='default-image.jpg'; }} // Imagen por defecto en caso de error
                        />
                        </div>
                        
                        <p className='p-name-producto'>{producto.descripcion}</p>

                        <div className='contenerdor-precio'>
                        <p className='p-precio-producto'>Und ${producto.precio}</p>
                        <img className='agregarimagencarrioto' alt='Agregar' src={Agregar}/>   
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Productos; // Exportamos el componente para usarlo en otros lugares
