const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {required: true, type: String},
    postIndex: {required: true, type: Number},
    password: {required: true, type: String},
    userPosts: {required: true, type: [Number]}
})

module.exports = mongoose.model('Users', userSchema)