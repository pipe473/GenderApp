import express from 'express';
const router = express.Router();
import { 
     registrar,
     autenticar,
     confirmar,
     olvidePassword,
     comprobarToken
} from '../controllers/usuarioController.js';

// Autenticación, registro, confirmación de Usuarios
router.post("/", registrar); // Crear nuevo usuario
router.post("/login", autenticar);
router.get("/confirmar/:token", confirmar);
router.post("/olvide-password", olvidePassword);
router.get("/olvide-password/:token", comprobarToken);




export default router;