// Endpoints
const express = require("express");
const { createPost, updatePost, removePost, getPost, allPosts } = require("../usecases/post.usecase");
const auth = require("../middlewares/auth.middleware");

const router = express.Router();

//Get Post
router.get("/:id", async (request, response) => {
  try {
      // Path params
      const { params } = request;
      const post = await getPost(params.id);        
      response.json({
          success: true,
          data: {
            post
          }
      });
  } catch (error) {
      response.status(400);
      response.json({
          success: false,
          message: error.message
      });
  }
});

router.get("/", async (request, response) => {
  try {
      const { query } = request;
      let querySearch = { ...query }   
      if(query.q){
        delete querySearch.q;
        querySearch = {...querySearch, $text: { $search: query.q }}
      }      
      const posts = await allPosts(querySearch);
      
      response.json({
          success: true,
          data: {
            posts
          }
      });
  } catch (error) {
      response.status(400)
      response.json({
          success: false,
          message: error.message
      });
  }
});

//& Create Post 
router.post("/", auth, async (request, response) => {
    const { body } = request;
    try{
        const post = await createPost(body);
        response.status(201)
        response.json({
            success: true,
            data: {
                post
            }
        });
    }
    catch(error){
        response.status(400)
        response.json({
            success: false,
            message: error.message
        });
    }    
});

//& Update Post 
router.patch("/:id", async (request, response) => {
    try{
      const { params, body } = request
      const post = await updatePost(params.id, body)
  
      response.json({
        success: true,
        data: {
          post
        }
      })
  
    }catch(error) {
      response.status(400)
      response.json({
        success: false,
        message: error.message
      })
    }
  })

//& Delete Post 
router.delete("/:id", auth, async (request, response) => {
    try{
      const { params } = request
      const post = await removePost(params.id)
      response.json({
        success: true,
      })
  
    }catch(error){
      response.status(400)
      response.json({
        success: false,
        message: error.message
      })
    }
})

//Export
module.exports = router;// Endpoints
