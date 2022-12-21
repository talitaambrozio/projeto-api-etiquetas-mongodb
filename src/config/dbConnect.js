import mongoose from "mongoose";

mongoose.set('strictQuery', true);

mongoose.connect('mongodb+srv://root:root@cluster0.rjsbk8w.mongodb.net/api-etiquetas');

let db = mongoose.connection;

export default db;