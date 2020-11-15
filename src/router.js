const express = require('express');
const routers = express.Router();

const casesStates = require('./controllers/casesController')
const validCase = require('./controllers/validCaseController')


routers.get('/',validCase.faindCases)
routers.get('/states', validCase.faindState)
routers.get('/cities', validCase.loadCasesCities)

routers.post('/case',casesStates.case )
routers.get('/case',casesStates.getcase )
   
module.exports = routers;