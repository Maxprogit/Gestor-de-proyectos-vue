const express = require('express');
const cors = require('cors');
const app = express();

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

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en el puerto ${PORT}`)
})
