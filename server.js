import express from 'express'
import "dotenv/config.js"
import "./config/database.js"

const server = express(); // definición de servidor
const PORT = process.env.PORT || 8080; // definición de puerto
const ready = () => console.log('ready on port '+ PORT);

// middlewares
server.use(express.json()); // permite entradas y trabajar con con formato JSON
server.use(express.urlencoded({ extended: false })); // permite capturar consultas complejas

// router + server
server.listen(PORT, ready); // iniciar servidor

console.log(process.env)
// console.log(process.env.NODE_ENV)
