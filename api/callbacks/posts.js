const Post = require('../models/posts')

const fetchPosts = async (req,res) => {
    const postIndexes = req.body.data
    forEach(postIndexes, (postIndex)=>{
        Posts.findOne({name: "posts",postList})
      })
}

//TODO post index :()
const createPost = (req, res) => {
  const {body, poster, type} = req.body
  try{
    const postIndex = 22
    const post = new Post({
      type: type,
      poster: poster,
      postIndex: postIndex,
      timePosted: Date.now,
      likes:0,
      dislikes:0,
      body:body
    })
    const savedPost = await post.save()
    res.status(200).json({success:true, data:savedPost})
} catch(err){
  res.status(500).json({msg:err})
}

}

const deletePost = (req,res) => {

}