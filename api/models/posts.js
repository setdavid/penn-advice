const mongoose = require('mongoose')

postsSchema = mongoose.Schema({
    name: String,
    postList: [{
    postID: {required: true, type: Number},
    poster: {required: true, type: String},
    postIndex: {required: true, type: Number},
    timePosted: {required: true, type: Date},
    likes: {required: true, type: Number},
    dislikes: {required: true, type: Number},
    body: {required:true, type: String}}]
})

module.exports = mongoose.model('Posts', postsSchema)