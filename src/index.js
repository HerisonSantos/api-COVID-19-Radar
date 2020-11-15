const mongoose =require('mongoose')
const express = require('express');
const routers = require('./router');
const app = express();

mongoose.connect('mongodb+srv://covid-radar:covid-radar2020@cluster0.kzive.mongodb.net/<dbname>?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
app.use(express.json())
app.use(routers);
app.listen(8083);