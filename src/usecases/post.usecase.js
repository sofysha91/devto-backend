const Post = require("../models/post.model");

//& Create post
const createPost = async (postData) => {

  const post = Post.create(postData);
  return post;
}

//& Get post
const getPost = (id) => {
  const post = Post.findById(id);
  return post;
}

const allPosts = (filters) => {
  const posts = Post.find(filters);
  return posts;
}

//& Update post
const updatePost = (id, postData) => {

  const post = Post.findByIdAndUpdate(id, postData, { returnDocument: "after" })
  return post
}


//& Delete post
const removePost = (id) => {

  const post = Post.findByIdAndDelete(id)
  return post
}


module.exports = { createPost, updatePost, removePost, getPost, allPosts }