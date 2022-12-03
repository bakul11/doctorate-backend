const { blogPost, getAllBlogs, singleBlogs } = require('../Controller/blogController');

const blogRoute = require('express').Router();

//Post blog 
blogRoute.post('/postBlog', blogPost)


//Get All Blogs
blogRoute.get('/getAllBlogs', getAllBlogs)


//Get Single Blogs
blogRoute.get('/singleBlogs/:blogId', singleBlogs)

module.exports = blogRoute;