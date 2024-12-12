import React, { useState } from 'react';  // Importa React y useState para manejar el estado del componente.
import Layout from '../Components/Layout/index';  // Importa el componente de diseño.
import Footer from '../Components/Footer/index';  // Importa el componente de pie de página.
import axios from 'axios';  // Importa axios para realizar solicitudes HTTP.
import './index.css';  // Importa el archivo CSS para estilos.

const CreateAcountDomiciliarios = () => {
    // Define el estado inicial del formulario.
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        direccion: '',
        telefono: '',
        numero_placa: '',  // Añadido el campo de número de placa.
        password: '',
        confirmPassword: ''
    });

    // Maneja los cambios en los campos del formulario.
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    // Maneja el envío del formulario.
    const handleSubmit = (e) => {
        e.preventDefault();  // Previene el comportamiento por defecto del formulario.
        const { nombre, email, direccion, telefono, numero_placa, password, confirmPassword } = formData;

        // Verifica que las contraseñas coincidan.
        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden");
            return;
        }

        // Realiza una solicitud POST al servidor para registrar la cuenta.
        axios.post('http://localhost:3000/register-domiciliario', {
            nombre,
            correo: email,
            direccion,
            telefono,
            numero_placa,
            contrasena: password
        })
        .then(response => {
            // Muestra una alerta con la respuesta del servidor.
            alert(response.data);
        })
        .catch(error => {
            // Muestra un error si la solicitud falla.
            console.error('Error al registrar:', error);
        });
    };

    return (
        <div>
            <Layout/>
            <main className="contenedor-form-creat-home">
                <div className="titulo-home-creat-home">
                    <h1>¡Bienvenido a Domiciliarios Barrio YA!</h1>
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

                        <label htmlFor="numeroPlaca">Número de Placa</label>  {/* Actualizado para el id correcto */}
                        <input type="text" id="numeroPlaca" placeholder="ABC15G" onChange={handleChange} required />
                        
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

export default CreateAcountDomiciliarios;
