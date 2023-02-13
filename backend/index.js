import express from 'express';
import dbConnect from './config/db.js'

const app = express();

dbConnect();

app.listen(4500, () => {
    console.log("Servidor corriendo en el puerto 4500");    
});