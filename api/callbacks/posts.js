const Post = require('../models/posts')

const fetchPosts = async (req,res) => {
    const postIndexes = req.body.data
    forEach(postIndexes, (postIndex)=>{
        Posts.findOne({name: "posts",postList})
      })
}