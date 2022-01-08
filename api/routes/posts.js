const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')

let {
    fetchPosts,
    createPost,
    deletePost
} = require("../callbacks/posts");

router.route('/')
    .get(fetchPosts)
    .post(createPost)
    .delete(deletePost)

module.exports = router