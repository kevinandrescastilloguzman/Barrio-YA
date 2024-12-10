import React, { useState } from 'react';
import Layout from '../Components/Layout/index';
import Footer from '../Components/Footer/index';
import axios from 'axios';
import './index.css';

const CreateAccount = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        direccion: '',
        telefono: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { nombre, email, direccion, telefono, password, confirmPassword } = formData;

        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden");
            return;
        }

        axios.post('http://localhost:3000/register', {
            nombre,
            correo: email,
            direccion,
            telefono,
            contrasena: password
        })
        .then(response => {
            alert(response.data);
        })
        .catch(error => {
            console.error('Error al registrar:', error);
        });
    };

    return (
        <div>
            <Layout/>
            <main className="contenedor-form-creat-home">
                <div className="titulo-home-creat-home">
                    <h1>¡Bienvenido a Barrio YA!</h1>
                    <p>Por favor, completa los siguientes campos para crear tu cuenta y empezar a utilizar nuestros servicios.</p>
                </div>
                <div className="login-container-creat-home">
                    <form className="login-form-creat-home" onSubmit={handleSubmit}>
                        <label htmlFor="nombre">Nombre Completo</label>
                        <input type="text" id="nombre" placeholder="Juan Pérez" onChange={handleChange} required />
                        
                        <label htmlFor="email">Correo Electrónico</label>
                        <input type="email" id="email" placeholder="juanperez@softmark.ai" onChange={handleChange} required />
                        
                        <label htmlFor="direccion">Dirección</label>
                        <input type="text" id="direccion" placeholder="Calle 00" onChange={handleChange} required />

                        <label htmlFor="telefono">Número Telefónico</label>
                        <input type="number" id="telefono" placeholder="310 0000000" onChange={handleChange} required />
                        
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" id="password" placeholder="***********" onChange={handleChange} required />
                        
                        <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                        <input type="password" id="confirmPassword" placeholder="***********" onChange={handleChange} required />
                        
                        <label className="checkbox-container">
                            <input type="checkbox" required /> Acepto los <a href="/terms" className="termino-condiciones">Términos y Condiciones</a>
                        </label>
                        
                        <button className="button-login-creat-home" type="submit">Crear Cuenta</button>
                    </form>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default CreateAccount;

