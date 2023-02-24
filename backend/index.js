import express from 'express';
import dotenv from 'dotenv';
import dbConnect from './config/db.js';

import usuarioRoutes from './routes/usuarioRoutes.js';
import listRoutes from './routes/listaRoutes.js';
import regaloRoutes from './routes/regaloRoutes.js';

const app = express();

app.use(express.json());

dotenv.config();

dbConnect();

// Routing
app.use('/api/usuarios', usuarioRoutes );
app.use('/api/listas', listRoutes );
app.use('/api/regalos', regaloRoutes );

const PORT = process.env.PORT || 4500;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);    
});