import express from "express";
import etiquetas from "./EtiquetaRoutes.js";
import palavras from "./PalavraRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send('Página Inicial.')
    })

    app.use(
        express.json(),
        etiquetas,
        palavras
    )
}

export default routes;

