import express from 'express';
import dotenv from 'dotenv';
import dbConnect from './config/db.js';

import usuarioRoutes from './routes/usuarioRoutes.js';

const app = express();

app.use(express.json());

dotenv.config();

dbConnect();

// Routing
app.use('/api/usuarios', usuarioRoutes );

const PORT = process.env.PORT || 4500;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);    
});