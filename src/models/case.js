const mongo = require('mongoose')

const casesSchema= mongo.Schema({
    name:String,
    death:Boolean,
    state:String,
    date:String,
})
module.exports = mongo.model('cases', casesSchema);