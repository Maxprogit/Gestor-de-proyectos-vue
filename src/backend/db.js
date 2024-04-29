const sql = require('mssql')


const config = {
  user: 'MaxAdmin',
  password: 'Vizicsaczi1',
  server: 'localhost',
  database: 'Gestor_de_Proyectos',
  options: {
    trustServerCertificate: true, // para conexiones locales se puede configurar como true
    encrypt: false // Desabilita SSL
  }
}


async function databaseConection() {
  try {
    await sql.connect(config);
    console.log('Conexion exitosa a la base de datos')
  } catch(error) {
    console.error('Error al conectar con la base de datos:', error)
  }
}

module.exports = {
  databaseConection,
  sql
}
