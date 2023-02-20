import express from 'express';
const router = express.Router();
import { registrar, autenticar } from '../controllers/usuarioController.js';

// Autenticación, registro, confirmación de Usuarios
router.post("/", registrar); // Crear nuevo usuario
router.post("/login", autenticar);




export default router;