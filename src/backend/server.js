const express = require('express');
const cors = require('cors');
const app = express();



// Middleware de analisis de cuerpo
app.use(express.json()); // Para analizar solicitudes de cuerpo en formato JSON
app.use(express.urlencoded({ extended: true })); // Para analizar solicitudes con cuerpo en formato de formulario


// Middleware de CORS
app.use(cors());


const { databaseConection, sql } = require('./db');

const PORT = process.env.PORT || 3000;

// Conectar a la base de datos al inicar el servidor
databaseConection();


// Ruta de ejemplo para obtener datos de la bd
app.get('/api/usuarios', async (req, res) => {
  try{
    const resultado = await sql.query`SELECT * FROM Usuarios`;
    res.json(resultado.recordset)
    console.log("🚀 ~ app.get ~ resultado:", resultado)
  } catch (error) {
    console.error('Error al obtener usuarios:', error)
    res.status(500).json({ error: 'Error al obtener usuarios' })
  }
});

app.post('/api/registro', async (req, res) => {
  try {
    const { name, email, password } = req.body; // Cambia a email y password
    // Llama al procedimiento almacenado InsertUsuario
    const reg = await sql.query`EXEC InsertUsuario @UserName=${name}, @UserEmail=${email}, @UserPassword=${password}`; // Cambia a email y password
    res.status(201).json({ mensaje: 'Registro exitoso' });
  } catch (error) {
    console.error('No se pudo completar el registro', error);
    res.status(500).json({ error: 'No se pudo completar el registro' });
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en el puerto ${PORT}`)
})
