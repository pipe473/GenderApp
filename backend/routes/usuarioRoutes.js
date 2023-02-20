import express from 'express';
const router = express.Router();
import { 
     registrar,
     autenticar,
     confirmar,
     olvidePassword
} from '../controllers/usuarioController.js';

// Autenticación, registro, confirmación de Usuarios
router.post("/", registrar); // Crear nuevo usuario
router.post("/login", autenticar);
router.get("/confirmar/:token", confirmar);
router.post("/olvide-password", olvidePassword);




export default router;