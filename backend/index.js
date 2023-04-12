import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import dbConnect from './config/db.js';

import usuarioRoutes from './routes/usuarioRoutes.js';
import listRoutes from './routes/listaRoutes.js';
import regaloRoutes from './routes/regaloRoutes.js';

const app = express();

app.use(express.json());

dotenv.config();

dbConnect();

// Configurar CORS
const whitelist = [process.env.FRONTEND_URL];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.includes(origin)) {
      // Puede consultar la API
      callback(null, true);
    } else {
      // No esta permitido
      callback(new Error("Error de Cors"));
    }
  },
};

app.use(cors());


// Routing
app.use('/api/usuarios', usuarioRoutes );
app.use('/api/listas', listRoutes );
app.use('/api/regalos', regaloRoutes );

// app.get('/', (req, res) => {
//   res.send('hello world')
// })

const PORT = process.env.PORT || 4500;

const servidor = app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);    
});

// Añadiendo Socket.io

import { Server } from 'socket.io';

const io = new Server(servidor, {
  pingTimeout: 60000,
  cors: {
    origin: process.env.FRONTEND_URL,
  },
});

io.on('connection', (socket) => {
  console.log('Conectado a socket.io');
  
  // Definiendo los eventos de socket.io
  socket.on('prueba', (listas) => {
    console.log('Prueba desde socket io', listas);    
  })
})