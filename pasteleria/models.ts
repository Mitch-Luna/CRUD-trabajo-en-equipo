import mongoose from "mongoose";


const PasteleriaSchema = new mongoose.Schema({
    id: String,
    name: String,
    description: String,
    encargo: String,
    precio: String,
    fechadeentrega: String,

});

export const Pasteleria = mongoose.model('Pasteleria', PasteleriaSchema);