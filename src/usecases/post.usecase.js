const Post = require("../models/post.model");
//const bcrypt = require("bcrypt");

//Use Cases = Handlers

//& Create post

const createPost = async (postData) => {
    
    const post = Post.create(postData);
    return post;
}


//& Actualizar post

const updatePost = (id, postData) => {
    
    const post = Post.findByIdAndUpdate(id, postData, { returnDocument: "after" })
    return post
  }
  

//& Eliminar post
  const removePost = (id) => {
    
    const post = Post.findByIdAndDelete(id)
    return post
  }


module.exports = { createPost, updatePost, removePost}