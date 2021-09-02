const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');


router.get('/', blogController.blog_index);
  

//post the blog
  router.post('/',blogController.blog_create_post)
  
  //create blog
  router.get('/create',blogController.blog_create_get);
  
  //link to details page
  router.get('/:id', blogController.blog_details)
  
  //delete blogs
  router.delete('/:id',blogController.blog_delete)
 
 
  module.exports = router;