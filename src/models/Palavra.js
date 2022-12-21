import mongoose from "mongoose";

const palavraSchema = new mongoose.Schema(
    {
        id: {type: String},
        termo: {type: String, required: true},
        etiquetas: [
            {
                type: mongoose.Schema.Types.ObjectId, 
                ref: "etiquetas"
            }
        ]
    },

    {
        versionKey: false
    }
);

const palavras = mongoose.model('palavras', palavraSchema);

export default palavras;