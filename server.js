import express from 'express';

const server = express(); // definición de servidor

const PORT = 8080; // definición de puerto

const ready = () => console.log('Server ready on port '+ PORT);

server.listen(PORT, ready); // iniciar servidor
