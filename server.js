require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors'); // Importa cors una vez
const jwt = require('jsonwebtoken'); // Importa JWT

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Usa cors una vez

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) throw err;
    console.log('Conectado a la base de datos');
});

// Ruta para registrar usuarios
app.post('/register', (req, res) => {
    const { nombre, correo, direccion, telefono, contrasena } = req.body;
    const sql = 'INSERT INTO usuarios (nombre, correo, direccion, telefono, contrasena) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [nombre, correo, direccion, telefono, contrasena], (err, result) => {
        if (err) {
            console.error('Error al registrar:', err);
            res.status(500).send('Error al registrar usuario');
            return;
        }
        res.send('Usuario registrado');
    });
});

// Ruta para iniciar sesión
app.post('/login', (req, res) => {
    const { correo, contrasena } = req.body;
    const sql = 'SELECT * FROM usuarios WHERE correo = ? AND contrasena = ?';
    db.query(sql, [correo, contrasena], (err, results) => {
        if (err) {
            console.error('Error al iniciar sesión:', err);
            res.status(500).send('Error al iniciar sesión');
            return;
        }
        if (results.length > 0) {
            const token = jwt.sign({ id: results[0].id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.json({ message: 'Inicio de sesión exitoso', token });
        } else {
            res.status(401).send('Correo o contraseña incorrectos');
        }
    });
});

// Ruta para crear pedidos
app.post('/crear-pedido', (req, res) => {
    const { productos, total } = req.body;
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).send('Se requiere autenticación');
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).send('Token no válido');
        }

        const sqlPedido = 'INSERT INTO pedidos (usuario_id, total) VALUES (?, ?)';
        db.query(sqlPedido, [user.id, total], (err, result) => {
            if (err) {
                console.error('Error al crear pedido:', err);
                return res.status(500).send('Error al crear pedido');
            }

            const pedidoId = result.insertId;
            const sqlDetalle = 'INSERT INTO detalles_pedido (pedido_id, producto_id, cantidad, precio) VALUES ?';
            const detalles = productos.map(p => [pedidoId, p.id, p.cantidad, p.precio]);

            db.query(sqlDetalle, [detalles], (err) => {
                if (err) {
                    console.error('Error al crear detalles del pedido:', err);
                    return res.status(500).send('Error al crear detalles del pedido');
                }

                res.send('Pedido creado exitosamente');
            });
        });
    });
});

// Ruta para obtener productos
app.get('/Productos', (req, res) => {
    const sql = 'SELECT * FROM productos';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error al obtener productos:', err);
            res.status(500).send('Error al obtener productos');
            return;
        }
        res.json(results);
    });
});

// Cambiar el puerto a 4000 para evitar el error de puerto en uso
const PORT = process.env.PORT || 3000; // Asegúrate de que esté en el puerto 3000

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});