const mongoose = require('mongoose')

const postIndexSchema = mongoose.Schema({
    type: {required: true, type: String},
    postIndex: {required: true, type: Number}
}).index({username:1}, {unique:true})

module.exports = mongoose.model('PostIndex', postIndexSchema)