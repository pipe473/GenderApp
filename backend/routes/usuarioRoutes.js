import express from 'express';
const router = express.Router();
import { registrar } from '../controllers/usuarioController.js';

// Autenticación, registro, confirmación de Usuarios
router.post("/", registrar); // Crear nuevo usuario



export default router;