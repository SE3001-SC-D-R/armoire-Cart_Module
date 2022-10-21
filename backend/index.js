const express = require("express");
const app = express();
const mongoose = require("mongoose");

const ItemModel = require('./models/Items')

const PORT = 5000
const cors = require('cors');

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://saraq268:4n4XSMe1IE8vukPN@cluster0.l2i8oag.mongodb.net/armoire?retryWrites=true&w=majority").then((res)=> console.log(res.body)).catch((err)=>console.log(err.reason))
//mongoose.connect("mongodb://localhost:27017")



app.get('/shop-items', async (req, res) => {
  const items = await ItemModel.find({})
  res.json(items)
})

app.listen(PORT, 'localhost', () => {
  console.log(`Server is running at ${PORT}`)
})
