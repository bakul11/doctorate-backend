const blogDB = require("../Model/blogModel")

//Blog Post
exports.blogPost = async (req, res, next) => {
    try {
        const blog = await blogDB.create(req.body);

        //success blog 
        res.status(201).json({
            message: 'Blog post is successfully done!',
            success: true,
            blog
        })
    } catch (error) {
        res.status(401).json({
            message: 'Blog Post fail please try aggain!',
            error: error.message
        })
    }
}

//Get All Blogs
exports.getAllBlogs = async (req, res, next) => {
    try {
        const blog = await blogDB.find();

        //success blog 
        res.status(201).json({
            success: true,
            blog
        })

    } catch (error) {
        res.status(404).json({
            message: 'Blog not found!',
            error: error.message
        })
    }
}

//Get Single Blogs
exports.singleBlogs = async (req, res, next) => {
    try {
        const id = req.params.blogId;

        const blog = await blogDB.findById(id);

        if (!blog) {
            return res.status(404).json({
                message: 'Blog not found!',
                error: error.message
            })
        }
        //success blog 
        res.status(201).json({
            success: true,
            blog
        })

    } catch (error) {
        res.status(404).json({
            message: 'Blog not found!',
            error: error.message
        })
    }
}

