// Primer paso: agregar funcionalidades
let mysql = require('mysql');
let cors = require('cors');
let express = require('express');

// Segundo paso: Asignar objetos
let app = express();
app.use(express.json());
app.use(cors());

// Tercer paso: conexion a sql
let connection = mysql.createConnection({
    host: '127.0.0.1',
    password: '',
    user: 'root',
    database: 'projectData',
    port: '3306'
});

// Cuarto paso: Conectarse a sql
connection.connect(function (error){
    if (error) {
        throw error;
    }else{
        console.log('Conectando a base de datos...')
    }
});

// Quinto paso: Definir rutas de acceso 
app.get('/',function(req,res){
    res.send('Ruta de inicio');
});

// Sexto paso: Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});