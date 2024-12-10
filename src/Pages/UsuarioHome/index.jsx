import React, { useState } from 'react';
import Backimg from '../../Media/img/backimg.jpg';
import Productos from '../Components/Productos/index';
import Cart from '../Components/Cart';
import NavBarUsuarioHome from '../Components/NavBarUsuarioHome';

import img from '../../Media/img/1.jpg';
import imgg from '../../Media/img/2.jpg';
import imggg from '../../Media/img/3.png';
import imgggg from '../../Media/img/4.jpg';
import imggggg from '../../Media/img/5.png';

import HeaderUsuarioHome from '../Components/HeaderUsuarioHome/index';
import './index.css';

function UsuarioHome () {
    const [cart, setCart] = useState([]);
    const [isCartVisible, setIsCartVisible] = useState(false);

    const toggleCartVisibility = () => setIsCartVisible(!isCartVisible);

    const addToCart = (product) => {
        const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct) {
            setCart(cart.map(item => 
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (productId) => {
        setCart(cart.filter(item => item.id !== productId));
    };

    const increaseQuantity = (productId) => {
        setCart(cart.map(item => 
            item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };

    const decreaseQuantity = (productId) => {
        setCart(cart.map(item => 
            item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        ));
    };

    return(
        <div className='userhome-back'>
            <HeaderUsuarioHome />
            <NavBarUsuarioHome onCartClick={toggleCartVisibility} />
            <main className='main-usuariohome'>
                <section className='section-1-home'>
                    <img className='img-backimg' alt="Fondo" src={Backimg} />
                    <div className='color-img'></div>
                    <h1 className='h1-user-home'>Aprovecha los descuentos Kevin el mejor<br/>disponibles solo en "Barrio-Ya"</h1>
                    <div className='img-tiendas'>
                        <img className='ico-img-tienda' alt="Tienda 1" src={img} onClick={() => addToCart({ id: 1, name: 'Producto 1', price: 10 })} />
                        <img className='ico-img-tienda' alt="Tienda 2" src={imgg} onClick={() => addToCart({ id: 2, name: 'Producto 2', price: 20 })} />
                        <img className='ico-img-tienda' alt="Tienda 3" src={imggg} onClick={() => addToCart({ id: 3, name: 'Producto 3', price: 30 })} />
                        <img className='ico-img-tienda' alt="Tienda 4" src={imgggg} onClick={() => addToCart({ id: 4, name: 'Producto 4', price: 40 })} />
                        <img className='ico-img-tienda' alt="Tienda 5" src={imggggg} onClick={() => addToCart({ id: 5, name: 'Producto 5', price: 50 })} />
                    </div>
                </section>

                <section>
                    <Productos />
                </section>
                
                {isCartVisible && (
                  <Cart 
                    cart={cart}
                    increaseQuantity={increaseQuantity}
                    decreaseQuantity={decreaseQuantity}
                    removeFromCart={removeFromCart}
                    isCartVisible={isCartVisible}
                    toggleCartVisibility={toggleCartVisibility}
                  />
                )}
            </main>
        </div>
    );
}

export default UsuarioHome;


