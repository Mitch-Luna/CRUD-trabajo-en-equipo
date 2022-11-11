import mongoose from "mongoose";

const postresSchema = new mongoose.Schema({
    id: String,
    name: String,
    nightPrice: String,
    description: String,
    promotion: String,
    offers: String

});

export const Postres = mongoose.model('Postres', postresSchema);