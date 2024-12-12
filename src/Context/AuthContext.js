import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({ token: null, user: null, userType: null });

    useEffect(() => {
        const token = localStorage.getItem('token');
        const userType = localStorage.getItem('userType');

        if (token && userType) {
            const url = userType === 'domiciliario' ? 'http://localhost:3000/protected-domiciliario' : 'http://localhost:3000/protected';
            axios.get(url, {
                headers: { Authorization: `Bearer ${token}` }
            })
            .then(response => {
                setAuth({ token, user: response.data.user, userType });
            })
            .catch(error => {
                console.error('Error al recuperar el usuario:', error);
                localStorage.removeItem('token');
                localStorage.removeItem('userType');
            });
        }
    }, []);

    const login = (token, userType) => {
        localStorage.setItem('token', token);
        localStorage.setItem('userType', userType);
        setAuth({ token, user: null, userType });
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userType');
        setAuth({ token: null, user: null, userType: null });
    };

    return (
        <AuthContext.Provider value={{ auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
