const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')

const createPost = (req, res) => {

}

const getPosts = (req, res) => {
    const {postIndex} = req.body
    mongoose.get('Posts', postIndex)
}

const deletePost = (req,res) => {

}