const express = require("express");
const app = express();
const mongoose = require("mongoose");

const ItemModel = require('./models/Items')

require('dotenv').config();


const PORT = process.env.PORT || 5000;
const cors = require('cors');

app.use(express.json());
app.use(cors());

const connectionURL = process.env.mongodbURI
mongoose
.connect(connectionURL)
.then(() => console.log("Mongodb connected to - successfully!"))
.catch((err) => {
    console.log(err);
  });

app.get('/shop-items', async (req, res) => {
  const items = await ItemModel.find({})
  res.json(items)
})

app.listen(PORT, 'localhost', () => {
  console.log(`Server is running at ${PORT}`)
}) 