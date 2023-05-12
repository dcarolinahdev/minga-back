import express from 'express';
import "dotenv/config.js";

const server = express(); // definición de servidor

const PORT = process.env.PORT || 8080; // definición de puerto

const ready = () => console.log('ready on port '+ PORT);

server.listen(PORT, ready); // iniciar servidor
