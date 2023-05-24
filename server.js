import express from 'express'
import "dotenv/config.js"
import "./config/database.js"
import indexRouter from './router/index.js'
import cors from 'cors'
import morgan from 'morgan'

const server = express(); // definición de servidor
const PORT = process.env.PORT || 8080; // definición de puerto
const ready = () => console.log('ready on port '+ PORT);

// middlewares
server.use(express.json());                         // permite entradas y trabajar con con formato JSON
server.use(express.urlencoded({ extended: true })); // permite capturar consultas complejas

server.use(cors())          // permite orígenes cruzados
server.use(morgan('dev'))   // para registrar peticiones HTTP

// router
server.use('/api', indexRouter)

// router + server
server.listen(PORT, ready); // iniciar servidor
