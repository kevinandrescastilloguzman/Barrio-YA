-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS datos_barrio_ya;

-- Usar la base de datos
USE datos_barrio_ya;

-- Crear la tabla usuarios
CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255),
    correo VARCHAR(255) UNIQUE,
    direccion VARCHAR(255),
    telefono VARCHAR(255),
    contrasena VARCHAR(255)
);

USE datos_barrio_ya;

CREATE TABLE IF NOT EXISTS domiciliarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255),
    telefono VARCHAR(255),
    correo VARCHAR(255) UNIQUE,
    modelo_moto VARCHAR(255),
    comentario TEXT,
    contrasena VARCHAR(255)
);





