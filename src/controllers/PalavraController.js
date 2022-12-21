import palavras from "../models/Palavra.js";

class PalavraController {

    static cadastrarPalavra = (req, res) => {
        let palavra = new palavras(req.body);

        palavra.save((erro) => {
            if(erro) {
                res.status(500).send({message: `${erro.message} - falha ao cadastrar Palavra.`});
            }else{
                res.status(201).send(palavra.toJSON());
            }
        })
    }

    static listarPalavras = (req, res) => {
        palavras.find((erro, palavras) => {
            if(!erro) {
                res.status(200).json(palavras)
            }else {
                res.status(400).send({message: 'Não foi possível realizar a busca por palavras!'})
            }
        })
    }

    static buscarPalavraPorID = (req, res) => {
        const id = req.params.id;
        palavras.findById(id, (erro, palavras) => {
            if(erro) {
                res.status(400).send({message: `${erro.message} - Palavra não localizada!`});
            }else{
                res.status(200).send(palavras);
            }
        })
    }

    static excluirPalavra = (req, res) => {
        const id = req.params.id;
        palavras.findById(id, (erro) => {
            if(!erro) {
                res.status(200).send({message: 'Palavra excluída com sucesso!'});
            }else {
                res.status(500).send({message: erro.message});
            }
        })
    }
    static atualizarPalavra = (req, res) => {
        const id = req.params.id;

        palavras.findByIdAndUpdate(id, {$set: req.body}, (erro) => {
            if(!erro) {
                res.status(200).send({message: 'Palavra atualizada com sucesso.'});
            }else {
                res.status(500).send({message: erro.message});
            }
        })
    }

}
export default PalavraController;
