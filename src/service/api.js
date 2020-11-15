const axios = require('axios');


const api = axios.create({
  baseURL:'http://brasil.io/api/v1/dataset/covid19/'
});
  
  module.exports = api;

