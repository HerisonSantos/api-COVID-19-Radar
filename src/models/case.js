const mongo = require('mongoose')

const casesSchema= mongo.Schema({
    name:String,
    death:Boolean,
    UF:String,
    date:String,
})
module.exports = mongo.model('cases', casesSchema);