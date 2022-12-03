const serviceDB = require("../Model/serviceModel");

//service Post
exports.postService = async (req, res, next) => {
    try {
        const service = await serviceDB.create(req.body);

        //success service 
        res.status(201).json({
            message: 'Service post is successfully done!',
            success: true,
            service
        })
    } catch (error) {
        res.status(401).json({
            message: 'Service Post fail please try aggain!',
            error: error.message
        })
    }
}

//Get All services
exports.getAllService = async (req, res, next) => {
    try {
        const service = await serviceDB.find();

        //success service 
        res.status(201).json({
            success: true,
            service
        })

    } catch (error) {
        res.status(404).json({
            message: 'services not found!',
            error: error.message
        })
    }
}

// Get Single Services
exports.singleService = async (req, res, next) => {
    try {
        const id = req.params.serviceId;

        const service = await serviceDB.findById(id);

        if (!service) {
            return res.status(404).json({
                message: 'Service not found!',
                error: error.message
            })
        }
        //success blog
        res.status(201).json({
            success: true,
            service
        })

    } catch (error) {
        res.status(404).json({
            message: 'Services not found!',
            error: error.message
        })
    }
}

