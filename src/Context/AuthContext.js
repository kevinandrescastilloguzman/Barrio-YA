import React, { createContext, useState, useEffect } from 'react'; 
// Importa React y funciones necesarias:
// - createContext: Para crear un contexto.
// - useState: Para manejar el estado del componente.
// - useEffect: Para ejecutar efectos secundarios, como recuperar datos al montar el componente.

import axios from 'axios'; 
// Importa axios, una librería para realizar solicitudes HTTP.

export const AuthContext = createContext(); 
// Crea el contexto de autenticación que compartirá datos y funciones entre componentes.

export const AuthProvider = ({ children }) => { 
    // Componente proveedor que envuelve otros componentes.
    // `children` son los componentes hijos que usarán este contexto.

    const [auth, setAuth] = useState({ token: null, user: null }); 
    // Define el estado inicial de autenticación:
    // - token: Se guarda aquí si el usuario está autenticado.
    // - user: Información del usuario autenticado.

    useEffect(() => { 
        // Efecto que se ejecuta al montar el componente (solo una vez).
        
        const token = localStorage.getItem('token'); 
        // Obtiene el token del almacenamiento local si existe.

        if (token) { 
            // Si hay un token guardado, intenta validar el token y obtener la información del usuario.
            
            axios.get('http://localhost:3000/protected', { 
                // Realiza una solicitud GET al servidor en una ruta protegida.
                headers: { 
                    Authorization: `Bearer ${token}` 
                    // Envía el token en los encabezados de autorización.
                }
            })
            .then(response => { 
                // Si la solicitud tiene éxito:
                setAuth({ token, user: response.data.user }); 
                // Actualiza el estado `auth` con el token y la información del usuario.
            })
            .catch(error => { 
                // Si hay un error (por ejemplo, token inválido o expirado):
                console.error('Error al recuperar el usuario:', error); 
                // Muestra un error en la consola.
                localStorage.removeItem('token'); 
                // Borra el token inválido del almacenamiento local.
            });
        }
    }, []); 
    // El arreglo vacío `[]` asegura que este efecto se ejecute solo al montar el componente.

    const login = (token) => { 
        // Función para iniciar sesión. Recibe el token como parámetro.
        localStorage.setItem('token', token); 
        // Guarda el token en el almacenamiento local.
        setAuth({ token, user: null }); 
        // Actualiza el estado `auth` con el token. Por ahora, no tiene datos de usuario.
    };

    const logout = () => { 
        // Función para cerrar sesión.
        localStorage.removeItem('token'); 
        // Borra el token del almacenamiento local.
        setAuth({ token: null, user: null }); 
        // Resetea el estado `auth` eliminando el token y la información del usuario.
    };

    return ( 
        // Retorna el proveedor del contexto.
        <AuthContext.Provider value={{ auth, login, logout }}> 
            {/* 
              Proporciona el contexto con:
              - auth: Estado actual de autenticación.
              - login: Función para iniciar sesión.
              - logout: Función para cerrar sesión.
            */}
            {children} 
            {/* Renderiza los componentes hijos que usen este contexto. */}
        </AuthContext.Provider>
    );
};
