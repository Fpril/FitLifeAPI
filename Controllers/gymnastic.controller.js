const gymnasticModel = require('../Data Access Objects/gymnastic.dao');
const mongoose = require('../Config/database');

exports.createGymnastic = (request, response, next) => {
    try {
        const gymnastic = request.body.gymnastic;
    
        gymnasticModel.create(gymnastic, (err, gymnastic) => {
            if (err) {
                response.json({
                    error: err
                });
            } else {
                response.json({
                    message: "Gymnastic created successfully"
                });
            }
        });
    } catch (err) {
        response.json({
            error: err
        });
    }
}

exports.getGymnastics = (request, response, next) => {
    try {
        gymnasticModel.read({}, (err, gymnastics) => {
            if (err) {
                response.json({
                    error: err
                });
            } else {
                response.json({
                    gymnastics: gymnastics
                });
            }
        });
    } catch (err) {
        response.json({
            error: err
        });
    }
}

exports.getGymnastic = (request, response, next) => {
    try {
        gymnasticModel.read({name: request.params.name}, (err, gymnastic) => {
            if (err) {
                response.json({
                    error: err
                });
            } else {
                response.json({
                    gymnastic: gymnastic
                });
            }
        });
    } catch (err) {
        response.json({
            error: err
        });
    }
}

exports.getGymnasticByIds = (request, response, next) => {
    try {
        const ids = request.body.array.map(id => mongoose.Types.ObjectId(id));
        gymnasticModel.read({_id: {$in: ids}}, (err, gymnastics) => {
            if (err) {
                response.json({
                    error: err
                });
            } else {
                response.json({
                    gymnastics: gymnastics
                });
            }
        });
    } catch (err) {
        response.json({
            error: err
        });
    }
}

exports.updateGymnastic = (request, response, next) => {
    try {
        const gymnastic = request.body.gymnastic;
    
        gymnasticModel.update({_id: request.params.id}, gymnastic, (err, gymnastic) => {
            if (err) {
                response.json({
                    error: err
                });
            } else {
                response.json({
                    message: "Gymnastic updated successfully",
                    gymnastic: gymnastic
                });
            }
        });
    } catch (err) {
        response.json({
            error: err
        });
    }
}

exports.removeGymnastic = (request, response, next) => {
    try {
        gymnasticModel.delete({_id: request.params.id}, (err, gymnastic) => {
            if (err) {
                response.json({
                    error: err
                });
            } else {
                response.json({
                    message: "Gymnastic deleted successfully",
                    gymnastic: gymnastic
                });
            }
        });
    } catch (err) {
        response.json({
            error: err
        });
    }
}