const gymnasticListModel = require('../Data Access Objects/gymnasticList.dao');
const gymnasticModel = require('../Data Access Objects/gymnastic.dao');
const { obj } = require('../Models/gymnastic.model');

exports.createGymnasticList = (request, response, next) => {
    try {
        const gymnasticList = {gymnastics: request.body.gymnasticList};
    
        gymnasticListModel.create(gymnasticList, (err, gymnasticList) => {
            if (err) {
                response.json({
                    error: err
                });
            } else {
                response.json({
                    message: "Gymnastic List created successfully",
                    gymnasticList: gymnasticList
                });
            }
        });
    } catch (err) {
        response.json({
            error: err
        });
    }
}

exports.getGymnasticLists = (request, response, next) => {
    try {
        gymnasticListModel.read({}, (err, gymnasticLists) => {
            if (err) {
                response.json({
                    error: err
                });
            } else {
                response.json({
                    gymnasticLists: gymnasticLists
                });
            }
        });
    } catch (err) {
        response.json({
            error: err
        });
    }
}

exports.getGymnasticList = (request, response, next) => {
    try {
        gymnasticListModel.read({createdAt: {$gte: request.params.date}}, (err, gymnasticList) => {
            if (err) {
                response.json({
                    error: err
                });
            } else {
                if (gymnasticList[0]) {
                    response.json({
                        gymnasticList: {
                            gymnasticObj: gymnasticList[0]
                        }
                    });
                } else {
                    response.json({
                        gymnasticList: null
                    });
                }
            }
        });
    } catch (err) {
        response.json({
            error: err
        });
    }
}

exports.updateGymnasticList = (request, response, next) => {
    try {
        const gymnasticList = request.body.gymnasticList;
        if (gymnasticList.gymnastics.length) {
            gymnasticListModel.update({_id: request.params.id}, gymnasticList, (err, gymnasticList) => {
                if (err) {
                    response.json({
                        error: err
                    });
                } else {
                    response.json({
                        message: "Gymnastic List updated successfully",
                        gymnasticList: gymnasticList
                    });
                }
            });
        } else {
            gymnasticListModel.delete({_id: request.params.id}, (err, gymnasticList) => {
                if (err) {
                    response.json({
                        error: err
                    });
                } else {
                    response.json({
                        message: "Gymnastic List deleted successfully"
                    });
                }
            });
        }
    } catch (err) {
        response.json({
            error: err
        });
    }
}

exports.removeGymnasticList = (request, response, next) => {
    try {
        gymnasticListModel.delete({_id: request.params.id}, (err, gymnasticList) => {
            if (err) {
                response.json({
                    error: err
                });
            } else {
                response.json({
                    message: "Gymnastic List deleted successfully",
                    gymnasticList: gymnasticList
                });
            }
        });
    } catch (err) {
        response.json({
            error: err
        });
    }
}