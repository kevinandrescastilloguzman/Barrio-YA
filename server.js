require('dotenv').config(); // Carga las variables de entorno
const express = require('express'); // Importa Express
const bodyParser = require('body-parser'); // Importa Body Parser
const mysql = require('mysql'); // Importa MySQL
const cors = require('cors'); // Importa CORS
const jwt = require('jsonwebtoken'); // Importa JSON Web Token

const app = express();
app.use(bodyParser.json()); // Utiliza Body Parser para parsear JSON
app.use(cors()); // Habilita CORS

// Configura la conexión a la base de datos MySQL
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

// Ruta para registrar usuarios generales
app.post('/register', (req, res) => {
    const { nombre, correo, direccion, telefono, contrasena } = req.body;
    const sql = 'INSERT INTO usuarios (nombre_completo, correo, direccion, telefono, contrasena) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [nombre, correo, direccion, telefono, contrasena], (err, result) => {
        if (err) {
            console.error('Error al registrar:', err);
            res.status(500).send('Error al registrar usuario');
            return;
        }
        res.send('Usuario registrado');
    });
});

// Nueva ruta para registrar domiciliarios
app.post('/register-domiciliario', (req, res) => {
    const { nombre, correo, direccion, telefono, numero_placa, contrasena } = req.body;
    const sql = 'INSERT INTO domiciliarios (nombre_completo, correo, direccion, telefono, numero_placa, contrasena) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(sql, [nombre, correo, direccion, telefono, numero_placa, contrasena], (err, result) => {
        if (err) {
            console.error('Error al registrar domiciliario:', err);
            res.status(500).send('Error al registrar domiciliario');
            return;
        }
        res.send('Domiciliario registrado');
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

// Nueva ruta para iniciar sesión de domiciliarios
app.post('/login-domiciliario', (req, res) => {
    const { correo, contrasena } = req.body;
    const sql = 'SELECT * FROM domiciliarios WHERE correo = ? AND contrasena = ?';
    db.query(sql, [correo, contrasena], (err, results) => {
        if (err) {
            console.error('Error al iniciar sesión de domiciliario:', err);
            res.status(500).send('Error al iniciar sesión de domiciliario');
            return;
        }
        if (results.length > 0) {
            const token = jwt.sign({ id: results[0].id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.json({ message: 'Inicio de sesión de domiciliario exitoso', token });
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
