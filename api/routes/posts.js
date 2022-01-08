const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')

let {
    fetchPost,
    createPost,
    deletePost
} = require("../callbacks/posts");

router.route('/')
    .get(fetchPost)
    .post(createPost)
    .delete(deletePost)

module.exports = router