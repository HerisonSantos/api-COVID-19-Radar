const mongo = require('mongoose')

const casesSchema= mongo.Schema({
    death:Boolean,
    state:String,
    date:String,
})
module.exports = mongo.model('cases', casesSchema);