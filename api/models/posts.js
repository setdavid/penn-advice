const mongoose = require('mongoose')

postsSchema = mongoose.Schema({
    type: {required:true, type:String},
    poster: {required: true, type: String},
    postIndex: {required: true, type: Number},
    timePosted: {required: false, type: Date},
    leftCount: {required: true, type: Number},
    rightCount: {required: true, type: Number},
    body: {required:true, type: String}
}).index({postIndex: 1},{unique: true})

module.exports = mongoose.model('Posts', postsSchema)