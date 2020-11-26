const axios = require('axios');


const api = axios.create({
  baseURL:'https://covid19-brazil-api.now.sh/api/report/v1'
});
  
  module.exports = api;

