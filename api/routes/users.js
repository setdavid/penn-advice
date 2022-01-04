var express = require('express');
const router = express.Router();
const {
  createUser, 
  getUser, 
  deleteUser,
  getUserPosts,
  createUserPost,
  deleteUserPost
} = require('../callbacks/users')

router.route('/')
.get(getUser)
.post(createUser)
.delete(deleteUser)
router.route('/posts')
.get(getUserPosts)
.post(createUserPost)
.delete(deleteUserPost)

module.exports = router
