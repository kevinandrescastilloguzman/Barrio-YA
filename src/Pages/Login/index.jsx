import React, { useState, useContext } from 'react';
import Layout from '../Components/Layout/index';
import Footer from '../Components/Footer/index';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import './index.css';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate(); // Hook para la navegación
    const { login } = useContext(AuthContext); // Hook del contexto de autenticación

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/login', { // Asegúrate que la ruta sea correcta y en minúscula
            correo: formData.email,
            contrasena: formData.password
        })
        .then(response => {
            localStorage.setItem('token', response.data.token); // Guarda el token en localStorage
            login(response.data.token); // Llama al método login del contexto de autenticación
            navigate('/UsuarioHome'); // Redirige al usuario a la página de inicio
        })
        .catch(error => {
            console.error('Error al iniciar sesión:', error);
            alert('Error al iniciar sesión: ' + (error.response ? error.response.data : error.message));
        });
    };

    return (
        <div>
            <Layout />
            <main className="contenedor-form-home">
                <div className="titulo-home">
                    <h1>¡Bienvenido de nuevo! Inicia sesión para continuar</h1>
                    <p>
                        Ingresa tu correo electrónico y contraseña para acceder a tu cuenta. Si aún no tienes una cuenta, puedes <Link className="navbar-item-home-createAcount" to="/CreateAconut">crear una aquí</Link>.
                    </p>
                </div>
                <div className="login-container-home">
                    <form className="login-form-home" onSubmit={handleSubmit}>
                        <label htmlFor="email">Correo Electrónico</label>
                        <input type="email" id="email" placeholder="BarrioYA@gmail.com" onChange={handleChange} required />
                        
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" id="password" placeholder="***********" onChange={handleChange} required />
                        
                        <button className="button-login-home" type="submit">Iniciar Sesión</button>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Login;
