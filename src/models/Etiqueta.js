import mongoose from "mongoose";

const etiquetaSchema = new mongoose.Schema(
    {
        id: {type: String},
        etiqueta: {type: String, required: true}
    }
);

const etiquetas = mongoose.model('etiquetas', etiquetaSchema);

export default etiquetas;