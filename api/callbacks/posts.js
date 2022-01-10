const Post = require('../models/posts');
const PostIndex = require("../models/postIndex");
const { createUserPost, deleteUserPost } = require("./users");

const fetchPost = async (req, res) => {
  const { postIndex } = req.query
  console.log(postIndex);

  try {
    const post = await Post.findOne({ postIndex });
    if (!post) return res.status(403).json({ success: false, msg: "post doesn't exist" })
    else return res.status(200).json({ success: true, data: post })
  } catch (err) {
    res.status(500).json({ success: false, msg: err })
  }
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
  const { username, postIndex } = req.body
  try {
    const valid = await Post.findOne({ postIndex });
    if (!valid) return res.status(403).json({ success: false, msg: "post not found" })
    else {
      await Post.deleteOne({ postIndex })
      let update = await deleteUserPost({ body: { username, postID: postIndex } });
      if (!update.success) return res.status(update.status).json({ success: false, msg: update.msg });
      return res.status(200).json({ success: true, msg: `Post #${postIndex} has yeed its last haw.` })
    }
  } catch (err) {
    return res.status(500).json({ success: false, msg: err })
  }
}

module.exports = {
  fetchPost,
  createPost,
  deletePost
};