const express = require('express');
const routers = express.Router();

const casesStates = require('./controllers/casesController')




routers.post('/case',casesStates.case )
routers.get('/case',casesStates.getcase )
   
module.exports = routers;