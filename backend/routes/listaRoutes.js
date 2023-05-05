import express from 'express';

import {
    obtenerListas,
    nuevaLista,
    obtenerLista,
    editarLista,
    eliminarLista,
    buscarInvitado,
    agregarInvitado,
    eliminarInvitado
 } from '../controllers/listaController.js';
 import checkAuth from '../middleware/checkAuth.js';

 const router = express.Router();

 router
    .route("/")
    .get( checkAuth, obtenerListas )
    .post( checkAuth, nuevaLista );
    

router
    .route("/:id")
    .get(checkAuth, obtenerLista)
    .put(checkAuth, editarLista)
    .delete( checkAuth, eliminarLista );

    router.get("/listas/:id", checkAuth, obtenerListas);
    router.post('/colaboradores/', checkAuth, buscarInvitado);
    router.post('/colaboradores/:id', checkAuth, agregarInvitado);
    router.post('/eliminar-colaborador/:id', checkAuth, eliminarInvitado);


 export default router;
