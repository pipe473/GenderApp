import express from 'express';
import {
    agregarRegalo,
    obtenerRegalo,
    actualizarRegalo,
    eliminarRegalo,
    cambiarEstado
} from '../controllers/regaloController.js';
import checkAuth from '../middleware/checkAuth.js';

const router = express.Router();

router.post("/", checkAuth, agregarRegalo);
router
    .route("/:id")
    .get(checkAuth, obtenerRegalo)
    .put(checkAuth, actualizarRegalo)
    .delete(checkAuth, eliminarRegalo);

router.post("/estado/:id", checkAuth, cambiarEstado);

export default router;