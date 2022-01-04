const bcrypt = require('bcrypt');
const User = require('../models/users')
const Post = require('../models/posts')

const createUser = async (req,res) => {
    const {username, password} = req.body
    try{
    const existingUser = await User.findOne({username:username})
    if (existingUser){
      return res.status(400).json({success:false, msg: "user already exists"})
    }
    const encryptedPass = await bcrypt.hash(password, 10)
    const user = new User({
      username: username,
      // TODO: figure out post indexes, do something like state.curPost
      postIndex: 0,
      password: encryptedPass,
      userPosts: []
    })
    const savedUser = await user.save()
    return res.status(200).json({success:true, data:savedUser})
    }catch(err){
      return res.status(500).json({success:false,msg:err})
    }
  
  }

  const validateUser = async (username, password) => {
    const user = await User.findOne({username:username})
    if (!user) return {success:false,msg:"user doesn't exist"}
    const valid = await bcrypt.compare(password, user.password)
    if (valid) return {success:true, data: user}
    return {success:false, msg:"wrong password"}
  }
  
  const getUser = async (req, res) => {
    const {username, password} = req.query
    console.log(req.query)
    try{
      const valid =  await validateUser(username,password)
      if(!valid.success) return res.status(403).json(valid)
      else return res.status(200).json(valid)
    } catch(err){
      res.status(500).json({success:false, msg:err})
    }
  }
  
  const deleteUser = async (req,res) => {
    const{username, password} = req.body
    try{
      const valid =  await validateUser(username,password)
      if(!valid.success) return res.status(403).json(valid)
      else{
        await User.deleteOne({username: username})
        return res.status(200).json({success:true, msg: `${username} has yeed his/her last haw.`})
      }
    } catch(err){
      return res.status(500).json({success:false, msg:err})
    }
  }

  const getUserPosts = async (req,res) => {
      const {username} = req.query
      try{
      const user = await User.findOne({username:username})
      if(!user) return res.status(403)
      .json({success:false,msg:"user doesn't exist"})
      
      return res.status(200)
      .json({success:true, data:user.userPosts})
      } catch(err){
        return res.status(500).json({success:false, msg:err})
      }

  }

  const createUserPost = async (req, res) => {
    const {username, postID} = req.body
    try{
    const update = await User.updateOne({username:username},
        {
            $push: {userPosts: postID}
        })
    if(!update.matchedCount) return res.status(403)
    .json({success:false,msg:"user doesn't exist"})
    return res.status(200)
    .json({success:true, data:postID})
    } catch(err){
      return res.status(500).json({success:false, msg:err})
    }
  }

  const deleteUserPost = async (req, res) => {
    const {username, postID} = req.body
    try{
    const update = await User.updateOne({username:username},
        {
            $pull: {userPosts: postID}
        })
    if(!update.matchedCount) return res.status(403)
    .json({success:false,msg:"user doesn't exist"})
    return res.status(200)
    .json({success:true, data:postID})
    } catch(err){
      return res.status(500).json({success:false, msg:err})
    }
  }

 module.exports = {
     createUser, 
     getUser, 
     deleteUser, 
     getUserPosts, 
     createUserPost, 
     deleteUserPost}