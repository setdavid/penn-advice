const Post = require('../models/posts');
const PostIndex = require("../models/postIndex");
const { createUserPost } = require("./users");

const fetchPosts = async (req, res) => {
  const postIndexes = req.body.data
  forEach(postIndexes, (postIndex) => {
    Posts.findOne({ name: "posts", postList })
  })
}

const createPost = async (req, res) => {
  const { body, poster, type } = req.body

  try {
    const postIndexObj = await PostIndex.findOneAndUpdate({ type: "Penn Life" }, { $inc: { postIndex: 1 } });
    if (!postIndexObj) return res.status(403).json({ success: false, msg: "post index error" });
    let postIndex = postIndexObj.postIndex + 1;

    const post = new Post({
      type,
      poster,
      postIndex,
      leftCount: 0,
      rightCount: 0,
      body
    });
    const savedPost = await post.save();

    let update = await createUserPost({ body: { username: poster, postID: postIndex } });
    if (!update.success) return res.status(update.status).json({ success: false, msg: update.msg });
    return res.status(200).json({ success: true, data: savedPost })
  } catch (err) {
    return res.status(500).json({ success: false, msg: err })
  }
}

const deletePost = async (req, res) => {

}

module.exports = {
  fetchPosts,
  createPost,
  deletePost
};