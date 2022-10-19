const express = require("express");
const app = express();
const mongoose = require("mongoose");

const ItemModel = require('./models/Items')

const PORT = 5000
const cors = require('cors');

app.use(express.json());
app.use(cors());

// mongoose.connect("mongodb+srv://Hasham:F4D00E8C@cluster0.zotnclt.mongodb.net/mernpractice?retryWrites=true&w=majority")
mongoose.connect("mongodb://localhost:27017")


app.get('/shop-items', async (req, res) => {
  const items = await ItemModel.find({})
  res.send(items)
})

app.listen(PORT, 'localhost', () => {
  console.log(`Server is running at ${PORT}`)
})
