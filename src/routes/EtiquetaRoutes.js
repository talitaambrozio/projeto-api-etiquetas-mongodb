import express from "express";
import EtiquetaController from "../controllers/EtiquetaController.js";

const router = express.Router();

router  
    .get('/etiquetas', EtiquetaController.listarEtiquetas)
    .get('/etiquetas/:id', EtiquetaController.buscarEtiquetaPorID)
    .post('/etiquetas', EtiquetaController.cadastrarEtiqueta)
    .put('/etiquetas/:id', EtiquetaController.atualizarEtiqueta)
    .delete('/etiquetas/:id', EtiquetaController.excluirEtiqueta)

    export default router;