import mongoose from "mongoose";

const etiquetaSchema = new mongoose.Schema(
    {
        id: {type: String},
        etiqueta: {type: String, required: true},
        palavras: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "palavras"
            }
        ]
    },
    {
        versionKey: false
    }
);

const etiquetas = mongoose.model('etiquetas', etiquetaSchema);

export default etiquetas;