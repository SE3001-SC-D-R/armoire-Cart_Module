const mongoose = require("mongoose")

const ItemSchema = new mongoose.Schema({
    Name:{
        type: String,
        required: true,
    },
    url:{
        type: Number,
        required: true,
    },
    Category:{
        type: String,
        required: true,
    },
    Price:{
        type: Number,
        required: true,
    },
    stock:{
        type: Number,
        required: true,
    },
    Description:{
        type: String,
        required: true,
    },
    selectedImage:{
        type: String,
        required: true,
    },
});


const ItemModel = mongoose.model("products", ItemSchema);
module.exports = ItemModel;
