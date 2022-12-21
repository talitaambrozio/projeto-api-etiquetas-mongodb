import etiquetas from "../models/Etiqueta.js";

class EtiquetaController {

    static cadastrarEtiqueta = (req, res) => {
        let etiqueta = new etiquetas(req.body);

        etiqueta.save((erro) => {
            if(erro) {
                res.status(500).send({message: `${erro.message} - falha ao cadastrar etiqueta.`});
            }else{
                res.status(201).send(etiqueta.toJSON());
            }
        })
    }

    static listarEtiquetas = (req, res) => {
        etiquetas.find((erro, palavras) => {
            if(!erro) {
                res.status(200).json(palavras)
            }else {
                res.status(400).send({message: 'Não foi possível realizar a busca por etiquetas!'})
            }
        })
    }

    static buscarEtiquetaPorID = (req, res) => {
        const id = req.params.id;
        etiquetas.findById(id, (erro, etiquetas) => {
            if(erro) {
                res.status(400).send({message: `${erro.message} - Etiqueta não localizada!`});
            }else{
                res.status(200).send(etiquetas);
            }
        })
    }

    static excluirEtiqueta = (req, res) => {
        const id = req.params.id;
        etiquetas.findById(id, (erro) => {
            if(!erro) {
                res.status(200).send({message: 'Etiqueta excluída com sucesso!'});
            }else {
                res.status(500).send({message: erro.message});
            }
        })
    }
    static atualizarEtiqueta = (req, res) => {
        const id = req.params.id;

        etiquetas.findByIdAndUpdate(id, {$set: req.body}, (erro) => {
            if(!erro) {
                res.status(200).send({message: 'Etiqueta atualizada com sucesso.'});
            }else {
                res.status(500).send({message: erro.message});
            }
        })
    }

}
export default EtiquetaController;
