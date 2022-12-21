import mongoose from "mongoose";

const palavraSchema = new mongoose.Schema(
    {
        id: {type: String},
        termo: {type: String, required: true}
    }
);

const palavras = mongoose.model('palavras', palavraSchema);

export default palavras;