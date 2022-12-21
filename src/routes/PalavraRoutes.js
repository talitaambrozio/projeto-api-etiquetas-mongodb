import express from "express";
import PalavraController from "../controllers/PalavraController.js";

const router = express.Router();

router  
    .get('/palavras', PalavraController.listarPalavras)
    .get('/palavras/:id', PalavraController.buscarPalavraPorID)
    .post('/palavras', PalavraController.cadastrarPalavra)
    .put('/palavras/:id', PalavraController.atualizarPalavra)
    .put('/palavras/:id', PalavraController.adicionarEtiquetaAUmaPalavra)
    .delete('/palavras/:id', PalavraController.excluirPalavra)

    export default router;