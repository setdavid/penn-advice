var express = require('express');
const router = express.Router();
const {
  createUser, 
  validateUser, 
  deleteUser,
  getUserPosts,
  createUserPost,
  deleteUserPost
} = require('../callbacks/users')

router.route('/')
.get(validateUser)
.post(createUser)
.delete(deleteUser)
router.route('/posts')
.get(getUserPosts)
.post(createUserPost)
.delete(deleteUserPost)

module.exports = router
